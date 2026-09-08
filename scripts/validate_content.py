"""Check editable data and built page references before publishing."""
import json, re, sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import yaml

ROOT=Path(__file__).resolve().parents[1]
def require(condition,message):
    if not condition: raise ValueError(message)
data={p.stem:yaml.safe_load(p.read_text(encoding='utf-8-sig')) for p in (ROOT/'_data').glob('*.yml')}
ids=set();urls=set()
for paper in data['publications']:
    for key in ['id','year','title','authors','venue','type','topic','links']:
        require(key in paper,f'Missing publication field: {key}')
    require(re.fullmatch(r'[a-z0-9-]+',paper['id']),f'Invalid anchor: {paper["id"]}')
    require(paper['id'] not in ids,f'Duplicate id: {paper["id"]}')
    ids.add(paper['id'])
    require(isinstance(paper['year'],int),'Year must be a number')
    require(paper['type'] in ['Journal article','Conference paper'],'Invalid publication type')
    require(paper['topic'] in ['Debris flows','Hydrology','Geotechnics','Other'],'Invalid subject')
    for link in paper['links']:
        require(link['url'].startswith('https://'),'Publication links must use HTTPS')
        if 'doi.org/' in link['url']:
            require(link['url'].lower() not in urls,f'Duplicate DOI: {link["url"]}')
            urls.add(link['url'].lower())
for work in data['home']['selected']:
    require(work['paper_id'] in ids,f'Unknown selected paper: {work["paper_id"]}')
for grant in data['funding']:
    require(grant['category'] in ['individual','collaborative'],'Invalid funding category')
    for key in ['title','period','funder','role','project','details']:require(bool(grant.get(key)),f'Missing grant field: {key}')
for project in data['software']:
    for key in ['name','category','description','tags','links']:require(bool(project.get(key)),f'Missing software field: {key}')
    require(any('github.com/' in x['url'] for x in project['links']),f'Missing repository: {project["name"]}')
require(isinstance(data['profile']['seeking_postdoc'],bool),'seeking_postdoc must be true or false')

class Page(HTMLParser):
    def __init__(self):super().__init__();self.ids=[];self.links=[];self.scripts=[];self.json_mode=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag in ['img','script'] and 'src' in a:self.links.append(a['src'])
        if tag=='link' and a.get('rel') in ['stylesheet','icon']:self.links.append(a['href'])
        if tag=='script':self.json_mode=a.get('type')=='application/ld+json'
    def handle_data(self,text):
        if self.json_mode:self.scripts.append(text)
    def handle_endtag(self,tag):
        if tag=='script':self.json_mode=False

if len(sys.argv)>1:
    build=Path(sys.argv[1])
    for target in ['index.html','cv/index.html']:
        p=Page();html=(build/target).read_text(encoding='utf-8');p.feed(html)
        require(len(p.ids)==len(set(p.ids)),f'Duplicate HTML ids in {target}')
        require('{{' not in html and '{%' not in html,f'Unrendered template in {target}')
        for script in p.scripts:json.loads(script)
        for href in p.links:
            if href.startswith('#'):require(unquote(href[1:]) in p.ids,f'Broken anchor: {href}')
            elif href.startswith('/') and not href.startswith('//'):
                path=build/unquote(urlparse(href).path).lstrip('/')
                if href.endswith('/'):path=path/'index.html'
                require(path.exists(),f'Missing asset/page: {href}')
print(f'PASS: {len(ids)} publications, {len(data["funding"])} grants, {len(data["software"])} software projects; selected references valid.')
