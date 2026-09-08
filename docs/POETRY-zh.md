# 诗歌网站维护说明

入口：https://zjusuge.github.io/poetry/ 。与学术主页共用 GitHub Pages 仓库，使用独立版式与导航，可双向访问。

## 新增一首诗

在 `_poems/` 中创建一个 `.md` 文件。复制同一本诗集的现有文件最方便；每首诗的全文保存在 `verse` 字段中，行首两个空格不能省略。空行代表分节，网页保留原文分行。

```yaml
---
layout: poem
title: 新诗题
book: suge-future
book_title: 苏格未来
book_status: 写作中 · 暂定名
order: 50
key: new-poem
part: 辑一
chapter: 篇一 · 成长启示录
form: 现代诗
permalink: /poetry/suge-future/new-poem/
verse: |-
  第一行诗
  第二行诗

  下一节诗
---
```

`key` 与 `permalink` 必须唯一，公开后尽量保持网址不变。`order` 决定同一诗集的顺序，使用连续整数。体裁可用现代诗、律诗、绝句、词曲、对联；筛选选项自动生成。新增后，目录、搜索、数量、前后篇链接自动更新。

第一本诗集的 `book` 为 `suganniran`，第二本为 `suge-future`。新增作品时请复制对应诗集的 `book_title`、`book_status` 和真实章节，示例章节仅作格式参考。

## 修改介绍、推荐作品与设计

- `_data/poetry.yml`：作者介绍、诗集简介、精选诗题。推荐标题须与作品的 `title` 完全一致。
- `_pages/poetry.html`：首页结构。
- `_layouts/poem.html`：每首诗的阅读页。
- `_layouts/poetry-book.html`：诗集目录。
- `assets/css/poetry.css`：纸色、字体、布局、夜读模式与手机样式。
- `assets/js/poetry.js`：全文搜索、筛选、分页、随机阅读、字号、夜读与分享。

两本书的封面是网站专用文字设计。第二本明确标注暂定名与写作中；首批作品来自作者授权公开的两部 Word 手稿，未收入封面文案、编辑备忘和重复旧序。逐篇原文不经改写。浏览器禁用 JavaScript 时，全部目录和全文仍可阅读。

## 发布检查

通过 Pull Request 更新，自动构建检查会核对诗集、独立网址、连续篇序、正文非空、推荐诗题以及页面链接。合并后 GitHub Pages 自动发布。
