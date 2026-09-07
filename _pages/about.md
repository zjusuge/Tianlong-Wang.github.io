---
permalink: /
title: ""
excerpt: "Tianlong Wang — geohazard prediction, hydrological modelling, and physics-informed and explainable machine learning."
author_profile: true
show_postdoc_notice: false
cv_url: ""
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign scholarStatsUrl = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}


<span class="anchor" id="about-me"></span>

# 👋 About

I am a **PhD student at Zhejiang University (ZJU)**, with joint doctoral research training at **Nanyang Technological University (NTU)**. I am supervised by [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428) at ZJU and hosted by [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian) at NTU. I expect to complete my PhD in **June 2027**.

My research connects **geohazard prediction, hydrological modelling, and machine learning**, with a particular focus on **debris flows and landslides**. From water moving through a catchment to slope deformation and debris-flow motion, I investigate how environmental observations and physical knowledge can improve our understanding and prediction of hazardous processes.

I develop **physics-informed and explainable learning methods** for regional susceptibility assessment, debris-flow characteristics, landslide displacement, and hydrological prediction. Across these applications, I focus on three questions: how to incorporate physical knowledge into learning, how to interpret model predictions, and how to evaluate generalization beyond the training data.

> **My goal is to make geohazard predictions not only more accurate, but also more physically grounded, interpretable, and useful for early warning and disaster mitigation.**

My doctoral research has received support from the **China Association for Science and Technology (CAST)**, the **China Scholarship Council (CSC)**, and **Zhejiang University**.

I welcome research discussions and collaborations on geohazards, hydrology, and physics-informed and explainable machine learning.

{% if page.show_postdoc_notice %}
> **Postdoctoral opportunities — 2027**  
> I am seeking postdoctoral opportunities following my expected PhD completion in **June 2027**. I would be pleased to discuss opportunities related to geohazards, hydrological modelling, and physics-informed and explainable machine learning.
{% endif %}

{% if page.cv_url and page.cv_url != "" %}
**[Download CV (PDF)]({{ page.cv_url | relative_url }})**
{% endif %}

[Email](mailto:tianlong_wang@zju.edu.cn) · [Google Scholar](https://scholar.google.com/citations?user=JNiHto0AAAAJ) · [ResearchGate](https://www.researchgate.net/profile/Tianlong-Wang-7) · [ORCID](https://orcid.org/0000-0002-0598-5481) · [GitHub](https://github.com/zjusuge) · [LinkedIn](https://www.linkedin.com/in/tianlong-wang/)

Citation metrics:
<a href="https://scholar.google.com/citations?user=JNiHto0AAAAJ"><img src="https://img.shields.io/endpoint?url={{ scholarStatsUrl | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" alt="Google Scholar citation count" loading="lazy"></a>


<span class="anchor" id="publications"></span>

# 📚 Publications

**My name is highlighted in bold; an asterisk (\*) indicates a corresponding author.** Links to papers, code, data, and archived releases are provided where available.

## 📄 Journal Articles

1. **Tianlong Wang**\*, H. Yang. DOME: a dynamic optimization meta-ensemble framework for debris-flow susceptibility assessment with SHAP-based interpretation. *Natural Hazards*, **122**, Article 545, **2026**. [DOI](https://doi.org/10.1007/s11069-026-08307-2) · [Code](https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment) · [Code archive](https://doi.org/10.5281/zenodo.16911533)

1. **Tianlong Wang**, H. Yang, H. Sun\*. Intelligent Prediction of Post-Seismic Debris Flow Source Volumes: A Physics-Informed Generative Deep Learning Framework. *Georisk: Assessment and Management of Risk for Engineered Systems and Geohazards*, 1–29, **2026**. [DOI](https://doi.org/10.1080/17499518.2026.2651228)

1. K. Zhang, **Tianlong Wang**, J. Su, H. Sun\*. Impacts of Land Use Change on Watershed Hydrological Processes Based on the SWAT-ML-SHAP Model: A Case Study of Fenshuijiang River Basin. *Earth Science*, **2026**. In Chinese with English abstract. [DOI](https://doi.org/10.3799/dqkx.2025.290)

1. H. Yang, **Tianlong Wang**\*, N. I. Fomin, S. Xiao, L. Liu. An integrated IKOA-CNN-BiGRU-Attention framework with SHAP explainability for high-precision debris flow hazard prediction in the Nujiang river basin, China. *PLOS ONE*, **20**(6), e0326587, **2025**. [DOI](https://doi.org/10.1371/journal.pone.0326587) · [Data](https://doi.org/10.5281/zenodo.15050116)

1. **Tianlong Wang**, Q. Ge, T. Ma, et al. A novel method for predicting debris flow hazard: a multi-strategy fusion approach based on the light gradient boosting machine framework. *Stochastic Environmental Research and Risk Assessment*, **39**, 4867–4890, **2025**. [DOI](https://doi.org/10.1007/s00477-025-02955-9)

1. **Tianlong Wang**, K. Zhang, Z. Liu, T. Ma, R. Luo, H. Chen, X. Wang, W. Ge, H. Sun\*. Prediction and explanation of debris flow velocity based on multi-strategy fusion Stacking ensemble learning model. *Journal of Hydrology*, **638**, 131347, **2024**. [DOI](https://doi.org/10.1016/j.jhydrol.2024.131347)

1. **Tianlong Wang**, R. Luo, T. Ma, et al. Study and verification on an improved comprehensive prediction model of landslide displacement. *Bulletin of Engineering Geology and the Environment*, **83**, Article 90, **2024**. [DOI](https://doi.org/10.1007/s10064-024-03581-5)

1. Z. Chu, S. Yu, X. Li, X. Lu, X. Wang, R. Luo, **Tianlong Wang**\*. Laboratory model test on the treatment of engineering slurry by vacuum drainage method. *Journal of Yangtze River Scientific Research Institute*, **41**(9), 114–122, **2024**. [DOI](https://doi.org/10.11988/ckyyb.20230665)

1. **Tianlong Wang**, D. Peng, X. Wang, B. Wu, R. Luo, Z. Chu, H. Sun\*. Study on wavelet multi-scale analysis and prediction of landslide groundwater. *Journal of Hydroinformatics*, **26**(1), 237–254, **2024**. [DOI](https://doi.org/10.2166/hydro.2023.299)


<details>
<summary>📂 Earlier journal articles — 2020–2021</summary>
<div markdown="1">

1. **Tianlong Wang**, Xiaorui Tao, Dong-kun Wu, Haotian Feng. Determining the location of River Dam Group based on set cover Model: A case study of Zambezi River Basin. *Scientific Research and Reviews*, **14**, 122, **2021**. [DOI](https://doi.org/10.28933/srr-2021-03-1005)

1. **Tianlong Wang**, H. Zhang, X. Tao, W. Chu. Research on Prediction and Optimization of Slope Deformation in Mining Area. *Environment, Resource and Ecology Journal*, **4**, 66–69, **2020**. [DOI](https://doi.org/10.23977/erej.2020.040110)

1. **Tianlong Wang**, Hongyan Bao, Hairui Zhang. Optimization of Task Pricing Based on Multiple Regression Analysis and Game Theory. *Journal of eSciences*, **3**, 9, **2020**. [DOI](https://doi.org/10.28933/esciences-2020-01-1805)

1. **Tianlong Wang**, Xiaorui Tao, Jiamei Zhang, Yulei Li. Predicting Traffic Congestion Time Based on Kalman Filter Algorithm. *Advances in Research and Reviews*, **1**, 7, **2020**. [DOI](https://doi.org/10.28933/arr-2020-06-2205)

</div>
</details>


## 🎤 Conference Papers

1. **Tianlong Wang**, J. Wang, X. Shao. Carbon emission forecast of China Transport Industry Based on Grey - Markov. In *Proceedings of the International Conference on Computing and Big Data (ICCBD)*, **2021**. [DOI](https://doi.org/10.1109/ICCBD53833.2021.00192)


## 💡 Patents and Patent Applications

<details>
<summary>📂 View patent records</summary>
<div markdown="1">

1. H. Sun, X. Wang, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Debris Flow*. Japan, No. 2024-017304, **2024**.

1. X. Wang, H. Sun, S. Shao, R. Luo, **Tianlong Wang**. *Early Warning and Mitigation Method for Debris Flow Disasters in Small Watersheds*. China, CN118262481A, **2024**.

1. X. Wang, H. Sun, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Landslides*. China, CN117854239A, **2024**.

1. **Tianlong Wang**, H. Sun, Z. Chu, R. Luo, X. Wang. *Landslide Displacement Prediction Method Based on IVMD-IAO-BiLSTM*. China, CN116757323A, **2023**.

1. J. Liu, Z. Li, **Tianlong Wang**, et al. *Eccentric Hook-shaped Expansible Pre-stressed Anchoring Structure and Its Anchoring Method*. China, CN113718767B, **2023**.

1. J. Liu, Z. Li, **Tianlong Wang**, et al. *Method for Repairing Dam Crack Defects Using Magnetic Mortar*. China, CN114396022A, **2022**.

1. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Device and Method for Obtaining the Position of Liquid Displacement Surface in Rock Cracks*. China, CN111595550B, **2022**.

1. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Pile Structure and Construction Method in Coral Sand Environment*. China, CN110886291B, **2021**.

</div>
</details>


<span class="anchor" id="education"></span>

# 🎓 Education

- **Zhejiang University**, China  
  PhD Student, Ocean College  
  September 2022 – June 2027 (expected)  
  Supervisor: [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428)

- **Nanyang Technological University**, Singapore  
  Joint Doctoral Research Training, School of Civil and Environmental Engineering  
  September 2024 – September 2026 (scheduled completion)  
  Host supervisor: [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian)


<span class="anchor" id="research-funding"></span>

# 💼 Funding

## 🎯 Individual Funding & Scholarships

- **Young Elite Scientists Sponsorship Program — Doctoral Student Special Plan**  
  China Association for Science and Technology (CAST)  
  January 2025 – December 2026  
  Project ID: 156-O-170-0000603-2  
  **Role: Principal Investigator**

- **Seed Fund Cultivation Project of Ocean College**  
  Zhejiang University  
  June 2025 – June 2027  
  Grant No. 2025BS004  
  **Role: Principal Investigator**

- **Outstanding Doctoral Dissertation Award Cultivation Grant**  
  Zhejiang University  
  June 2025 – June 2026  
  Grant No. 825011A  
  **Role: Principal Investigator**  
  Completed; evaluated as Excellent.

- **National Construction of High-Level Universities Program**  
  China Scholarship Council (CSC)  
  September 2024 – September 2026  
  Grant No. 202406320358  
  **Role: Scholarship Recipient**


## 🤝 Collaborative Research Projects

- **Key Program of the National Natural Science Foundation of China**  
  Early Forecasting and Disaster Control Methods for Debris Flows in Small Watersheds Based on Hydrodynamic Analysis  
  Grant No. 42230702  
  Project period: January 2023 – December 2027  
  **Role: Co-Investigator**

- **Young Scientists Fund of the National Natural Science Foundation of China**  
  Research on Deformation Prediction Models and Instability Criterion Methods for Reservoir Bank Slopes Based on Copula Theory  
  Grant No. 51809151  
  Project period: January 2019 – December 2021  
  **Role: Co-Investigator**


<span class="anchor" id="honors"></span>

# 🏅 Honors

- **2025, 2021** — National Scholarship, China.
- **2024** — Chinese Government Scholarship, China Scholarship Council.
- **2023** — China Harbour Engineering Company (CHEC) Scholarship.
- **2022** — Outstanding Graduate, City Underground Space Engineering Professional Committee, CSRME.

<details>
<summary>📂 Additional scholarships and honors</summary>
<div markdown="1">

- **2022** — Yunneng Electric Power Innovation Scholarship.
- **2020** — Wang Shuopeng Scholarship.
- **2019–2022** — First-Class Academic Scholarship, university level, four consecutive years.
- **2019–2021** — National Encouragement Scholarship, three consecutive years.

</div>
</details>

{% comment %}
The following entry is retained for verification before publication.
Confirm the awarding institution and the corresponding degree history.

- **June 2022** — Outstanding Graduate, Zhejiang University.
{% endcomment %}


<span class="anchor" id="competitions"></span>

# 🏆 Competitions

- **November 2025 — Silver Award**  
  China International College Students' Innovation Competition, Singapore Regional.

- **August 2024 — Silver Award**  
  Zhejiang International College Students' Innovation Competition (Internet+), China.

- **May 2024 — Bronze Award**  
  The 14th "Challenge Cup" Zhejiang Undergraduate Entrepreneurship Plan Competition, China.

- **June 2021 — Grand Prize**  
  The 3rd National College Student Structural Design Information Technology Competition, China.

<details>
<summary>📂 Additional competition awards</summary>
<div markdown="1">

- **June 2023 — Silver Award**, The 15th "Dandelion" University Student Entrepreneurship Competition, Zhejiang University.
- **April 2022 — Honorable Mention**, Interdisciplinary Contest in Modeling (MCM/ICM), USA.
- **August 2021 — Second Prize**, The 14th National University Student Social Practice and Science Contest on Energy Saving and Emission Reduction, China.
- **July 2021 — First Prize (Regional) and Third Prize (National)**, The 8th National Financial and Securities Investment Simulation Training Contest, China.
- **May 2021 — Third Prize**, The 13th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works Conference (Hubei), China.
- **February 2021 — Honorable Mention**, Mathematical Contest in Modeling (MCM/ICM), USA.
- **November 2020 — Second Prize**, Contemporary Undergraduate Mathematical Contest in Modeling (Hubei), China.
- **July 2020 — Third Prize**, The 5th National Construction College Construction Technology Application Skills Competition (Hubei), China.

</div>
</details>


<span class="anchor" id="beyond-research"></span>

# 🌿 Beyond Research

Beyond research, I write poetry, enjoy fitness, and take part in community activities. My debut poetry collection, *Suganniran*, was published in China in **February 2025**.

Research and poetry offer me different ways of looking closely at the world: one through models and evidence, the other through language and imagery.

- **July–September 2023 — Intern**  
  China International Science and Technology Exchange Center, China Association for Science and Technology (CAST), Beijing, China.

- **June 2022–June 2024 — President**  
  Student Fitness Club, Ocean College, Zhejiang University, Zhoushan, China.

- **November 2019–Present — Independent Poet**

- **July–August 2019 — Volunteer Teacher**  
  Baihuaping Community, Shennongjia, China.

- **June–July 2019 — Intern**  
  Yujing Tiandi Project, Kunfa Construction Co., Ltd., Yichang, China.
