---
permalink: /
title: ""
excerpt: "Tianlong Wang — geohazard prediction, hydrological modelling, and physics-informed and explainable machine learning. PhD student at Zhejiang University, seeking postdoctoral opportunities starting in 2027."
author_profile: true
show_postdoc_notice: true
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

**Geohazard prediction · Hydrological modelling · Physics-informed and explainable machine learning**

I am a **PhD student at Zhejiang University (ZJU)**, supervised by [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428), with joint doctoral research training at **Nanyang Technological University (NTU)** under the supervision of [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian). I expect to complete my PhD in **June 2027**.

My research integrates environmental observations, physical knowledge, and machine learning to improve the prediction and understanding of **geohazards and hydrological processes**. My work spans debris-flow susceptibility, source volumes and velocity, landslide displacement and groundwater dynamics, and catchment hydrological prediction.

Across these applications, I focus on three connected themes:

- **Physics-informed learning** — incorporating physical knowledge into data-driven models of hydrological and geohazard processes.
- **Explainable prediction** — examining how environmental factors shape model predictions and relating these patterns to the underlying processes.
- **Model generalization** — evaluating predictive reliability beyond the training data, with attention to spatially structured validation.

My goal is to develop accurate, physically grounded, and interpretable predictive methods that support geohazard assessment, early warning, and disaster mitigation.

{% if page.show_postdoc_notice %}
> **🔎 Postdoctoral opportunities — 2027**  
> I am seeking a postdoctoral position following my expected PhD completion in **June 2027**. I welcome discussions with groups working on **geohazards, hydrological modelling, and physics-informed or explainable machine learning**. Please [contact me by email](mailto:tianlong_wang@zju.edu.cn) to discuss potential opportunities and research fit.
{% endif %}

{% if page.cv_url and page.cv_url != "" %}
**[Download CV (PDF)]({{ page.cv_url | relative_url }})**
{% endif %}

[Email](mailto:tianlong_wang@zju.edu.cn) · [Google Scholar](https://scholar.google.com/citations?user=JNiHto0AAAAJ) · [ResearchGate](https://www.researchgate.net/profile/Tianlong-Wang-7) · [ORCID](https://orcid.org/0000-0002-0598-5481) · [GitHub](https://github.com/zjusuge) · [LinkedIn](https://www.linkedin.com/in/tianlong-wang/)

**Explore:** [Publications](#publications) · [Research Software](#research-software) · [Patents](#patents) · [Education](#education) · [Funding](#research-funding) · [Honors](#honors) · [Contact](#contact)


<span class="anchor" id="publications"></span>

# 📚 Publications

**My name is highlighted in bold; an asterisk (\*) indicates a corresponding author.** DOI links are provided for every paper, alongside code, data, and archived releases where available.

<a href="https://scholar.google.com/citations?user=JNiHto0AAAAJ"><img src="https://img.shields.io/endpoint?url={{ scholarStatsUrl | url_encode }}&amp;logo=Google%20Scholar&amp;labelColor=f6f6f6&amp;color=9cf&amp;style=flat&amp;label=citations" alt="Google Scholar citation count" loading="lazy"></a>

## Journal Articles

1. **Tianlong Wang**\*, H. Yang. DOME: a dynamic optimization meta-ensemble framework for debris-flow susceptibility assessment with SHAP-based interpretation. *Natural Hazards*, **122**, Article 545, **2026**.  
   DOI: [10.1007/s11069-026-08307-2](https://doi.org/10.1007/s11069-026-08307-2) · [Code](https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment) · Code archive: [10.5281/zenodo.16911533](https://doi.org/10.5281/zenodo.16911533)

2. **Tianlong Wang**, H. Yang, H. Sun\*. Intelligent Prediction of Post-Seismic Debris Flow Source Volumes: A Physics-Informed Generative Deep Learning Framework. *Georisk: Assessment and Management of Risk for Engineered Systems and Geohazards*, 1–29, **2026**.  
   DOI: [10.1080/17499518.2026.2651228](https://doi.org/10.1080/17499518.2026.2651228)

3. K. Zhang, **Tianlong Wang**, J. Su, H. Sun\*. Impacts of Land Use Change on Watershed Hydrological Processes Based on the SWAT-ML-SHAP Model: A Case Study of Fenshuijiang River Basin. *Earth Science*, **2026**. In Chinese with English abstract.  
   DOI: [10.3799/dqkx.2025.290](https://doi.org/10.3799/dqkx.2025.290)

4. H. Yang, **Tianlong Wang**\*, N. I. Fomin, S. Xiao, L. Liu. An integrated IKOA-CNN-BiGRU-Attention framework with SHAP explainability for high-precision debris flow hazard prediction in the Nujiang river basin, China. *PLOS ONE*, **20**(6), e0326587, **2025**.  
   DOI: [10.1371/journal.pone.0326587](https://doi.org/10.1371/journal.pone.0326587) · Data: [10.5281/zenodo.15050116](https://doi.org/10.5281/zenodo.15050116)

5. **Tianlong Wang**, Q. Ge, T. Ma, et al. A novel method for predicting debris flow hazard: a multi-strategy fusion approach based on the light gradient boosting machine framework. *Stochastic Environmental Research and Risk Assessment*, **39**, 4867–4890, **2025**.  
   DOI: [10.1007/s00477-025-02955-9](https://doi.org/10.1007/s00477-025-02955-9)

6. **Tianlong Wang**, K. Zhang, Z. Liu, T. Ma, R. Luo, H. Chen, X. Wang, W. Ge, H. Sun\*. Prediction and explanation of debris flow velocity based on multi-strategy fusion Stacking ensemble learning model. *Journal of Hydrology*, **638**, 131347, **2024**.  
   DOI: [10.1016/j.jhydrol.2024.131347](https://doi.org/10.1016/j.jhydrol.2024.131347)

7. **Tianlong Wang**, R. Luo, T. Ma, et al. Study and verification on an improved comprehensive prediction model of landslide displacement. *Bulletin of Engineering Geology and the Environment*, **83**, Article 90, **2024**.  
   DOI: [10.1007/s10064-024-03581-5](https://doi.org/10.1007/s10064-024-03581-5)

8. Z. Chu, S. Yu, X. Li, X. Lu, X. Wang, R. Luo, **Tianlong Wang**\*. Laboratory model test on the treatment of engineering slurry by vacuum drainage method. *Journal of Yangtze River Scientific Research Institute*, **41**(9), 114–122, **2024**.  
   DOI: [10.11988/ckyyb.20230665](https://doi.org/10.11988/ckyyb.20230665)

9. **Tianlong Wang**, D. Peng, X. Wang, B. Wu, R. Luo, Z. Chu, H. Sun\*. Study on wavelet multi-scale analysis and prediction of landslide groundwater. *Journal of Hydroinformatics*, **26**(1), 237–254, **2024**.  
   DOI: [10.2166/hydro.2023.299](https://doi.org/10.2166/hydro.2023.299)

10. **Tianlong Wang**, Xiaorui Tao, Dong-kun Wu, Haotian Feng. Determining the location of River Dam Group based on set cover Model: A case study of Zambezi River Basin. *Scientific Research and Reviews*, **14**, 122, **2021**.  
    DOI: [10.28933/srr-2021-03-1005](https://doi.org/10.28933/srr-2021-03-1005)

11. **Tianlong Wang**, H. Zhang, X. Tao, W. Chu. Research on Prediction and Optimization of Slope Deformation in Mining Area. *Environment, Resource and Ecology Journal*, **4**, 66–69, **2020**.  
    DOI: [10.23977/erej.2020.040110](https://doi.org/10.23977/erej.2020.040110)

12. **Tianlong Wang**, Hongyan Bao, Hairui Zhang. Optimization of Task Pricing Based on Multiple Regression Analysis and Game Theory. *Journal of eSciences*, **3**, 9, **2020**.  
    DOI: [10.28933/esciences-2020-01-1805](https://doi.org/10.28933/esciences-2020-01-1805)

13. **Tianlong Wang**, Xiaorui Tao, Jiamei Zhang, Yulei Li. Predicting Traffic Congestion Time Based on Kalman Filter Algorithm. *Advances in Research and Reviews*, **1**, 7, **2020**.  
    DOI: [10.28933/arr-2020-06-2205](https://doi.org/10.28933/arr-2020-06-2205)


## Conference Papers

1. **Tianlong Wang**, J. Wang, X. Shao. Carbon emission forecast of China Transport Industry Based on Grey - Markov. In *Proceedings of the International Conference on Computing and Big Data (ICCBD)*, **2021**.  
   DOI: [10.1109/ICCBD53833.2021.00192](https://doi.org/10.1109/ICCBD53833.2021.00192)


<span class="anchor" id="research-software"></span>

# 💻 Research Software

Research implementations and reproducibility code for my work on geohazards and hydrology. Each repository documents its scope, data requirements, and usage.

## DOME

A dynamic optimization meta-ensemble framework for **regional debris-flow susceptibility assessment**, with model implementation and a pseudo-absence generation workflow.

[Repository](https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment) · Paper DOI: [10.1007/s11069-026-08307-2](https://doi.org/10.1007/s11069-026-08307-2) · Code archive: [10.5281/zenodo.16911533](https://doi.org/10.5281/zenodo.16911533)

## TabPFNv2.5-DebrisFlow

Benchmarking **zero-shot TabPFN-2.5** against Bayesian-optimised machine learning baselines for **catchment-scale debris-flow volume prediction**, using repeated nested cross-validation.

[Repository](https://github.com/zjusuge/TabPFNv2.5-DebrisFlow)

## BWSD — Fengshuwan Case Study

Lightweight reproducibility code for the core daily **Basin Water Storage Degree (BWSD)** calculation in the Fengshuwan catchment.

[Repository](https://github.com/zjusuge/bwsd-fengshuwan-case)

## HydroPIML-RS — Fengshuwan Case Study

Lightweight reproducibility code for **short-lead runoff and water-stage prediction** in the Fengshuwan catchment.

[Repository](https://github.com/zjusuge/hydropiml-rs-fengshuwan-case)


<span class="anchor" id="patents"></span>

# 💡 Patents and Patent Applications

1. H. Sun, X. Wang, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Debris Flow*. Japan, No. 2024-017304, **2024**.

2. X. Wang, H. Sun, S. Shao, R. Luo, **Tianlong Wang**. *Early Warning and Mitigation Method for Debris Flow Disasters in Small Watersheds*. China, CN118262481A, **2024**.

3. X. Wang, H. Sun, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Landslides*. China, CN117854239A, **2024**.

4. **Tianlong Wang**, H. Sun, Z. Chu, R. Luo, X. Wang. *Landslide Displacement Prediction Method Based on IVMD-IAO-BiLSTM*. China, CN116757323A, **2023**.

5. J. Liu, Z. Li, **Tianlong Wang**, et al. *Eccentric Hook-shaped Expansible Pre-stressed Anchoring Structure and Its Anchoring Method*. China, CN113718767B, **2023**.

6. J. Liu, Z. Li, **Tianlong Wang**, et al. *Method for Repairing Dam Crack Defects Using Magnetic Mortar*. China, CN114396022A, **2022**.

7. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Device and Method for Obtaining the Position of Liquid Displacement Surface in Rock Cracks*. China, CN111595550B, **2022**.

8. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Pile Structure and Construction Method in Coral Sand Environment*. China, CN110886291B, **2021**.


<span class="anchor" id="education"></span>

# 🎓 Education & Research Training

## Zhejiang University · China

**PhD Student, Ocean College**  
September 2022 – June 2027 (expected)  
Supervisor: [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428)

## Nanyang Technological University · Singapore

**Joint Doctoral Research Training, School of Civil and Environmental Engineering**  
September 2024 – September 2026  
Host supervisor: [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian)


<span class="anchor" id="research-funding"></span>

# 💼 Funding & Research Projects

## Individual Funding & Scholarships

- **Young Elite Scientists Sponsorship Program — Doctoral Student Special Plan**  
  China Association for Science and Technology (CAST)  
  January 2025 – December 2026  
  Project ID: 156-O-170-0000603-2  
  Role: **Principal Investigator**

- **Seed Fund Cultivation Project of Ocean College**  
  Zhejiang University  
  June 2025 – June 2027  
  Grant No. 2025BS004  
  Role: **Principal Investigator**

- **Outstanding Doctoral Dissertation Award Cultivation Grant**  
  Zhejiang University  
  June 2025 – June 2026  
  Grant No. 825011A  
  Role: **Principal Investigator**  
  Status: Completed; evaluated as **Excellent**.

- **National Construction of High-Level Universities Program**  
  China Scholarship Council (CSC)  
  September 2024 – September 2026  
  Grant No. 202406320358  
  Role: **Scholarship Recipient**


## Collaborative Research Projects

- **Key Program of the National Natural Science Foundation of China**  
  *Early Forecasting and Disaster Control Methods for Debris Flows in Small Watersheds Based on Hydrodynamic Analysis*  
  Grant No. 42230702  
  Project period: January 2023 – December 2027  
  Role: **Co-Investigator**

- **Young Scientists Fund of the National Natural Science Foundation of China**  
  *Research on Deformation Prediction Models and Instability Criterion Methods for Reservoir Bank Slopes Based on Copula Theory*  
  Grant No. 51809151  
  Project period: January 2019 – December 2021  
  Role: **Co-Investigator**


<span class="anchor" id="honors"></span>

# 🏅 Honors & Scholarships

- **2025, 2021** — National Scholarship, China.
- **2024** — Chinese Government Scholarship, China Scholarship Council.
- **2023** — China Harbour Engineering Company (CHEC) Scholarship.
- **2022** — Outstanding Graduate, City Underground Space Engineering Professional Committee, CSRME.
- **2022** — Yunneng Electric Power Innovation Scholarship.
- **2020** — Wang Shuopeng Scholarship.
- **2019–2022** — First-Class Academic Scholarship, university level, four consecutive years.
- **2019–2021** — National Encouragement Scholarship, three consecutive years.


<span class="anchor" id="competitions"></span>

# 🏆 Competition Awards

- **November 2025 — Silver Award**  
  China International College Students' Innovation Competition, Singapore Regional.

- **August 2024 — Silver Award**  
  Zhejiang International College Students' Innovation Competition (Internet+), China.

- **May 2024 — Bronze Award**  
  The 14th "Challenge Cup" Zhejiang Undergraduate Entrepreneurship Plan Competition, China.

- **June 2023 — Silver Award**  
  The 15th "Dandelion" University Student Entrepreneurship Competition, Zhejiang University.

- **April 2022 — Honorable Mention**  
  Interdisciplinary Contest in Modeling (MCM/ICM), USA.

- **August 2021 — Second Prize**  
  The 14th National University Student Social Practice and Science Contest on Energy Saving and Emission Reduction, China.

- **July 2021 — First Prize (Regional) and Third Prize (National)**  
  The 8th National Financial and Securities Investment Simulation Training Contest, China.

- **June 2021 — Grand Prize**  
  The 3rd National College Student Structural Design Information Technology Competition, China.

- **May 2021 — Third Prize**  
  The 13th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works Conference (Hubei), China.

- **February 2021 — Honorable Mention**  
  Mathematical Contest in Modeling (MCM/ICM), USA.

- **November 2020 — Second Prize**  
  Contemporary Undergraduate Mathematical Contest in Modeling (Hubei), China.

- **July 2020 — Third Prize**  
  The 5th National Construction College Construction Technology Application Skills Competition (Hubei), China.


<span class="anchor" id="beyond-research"></span>

# 🌿 Beyond Research

Beyond research, I write poetry, enjoy fitness, and take part in community activities. My debut poetry collection, *Suganniran*, was published in China in **February 2025**.

Research and poetry offer me different ways of looking closely at the world: one through models and evidence, the other through language and imagery.

## Service, Leadership & Other Experience

- **July–September 2023 — Intern**  
  China International Science and Technology Exchange Center, China Association for Science and Technology (CAST), Beijing, China.

- **June 2022–June 2024 — President**  
  Student Fitness Club, Ocean College, Zhejiang University, Zhoushan, China.

- **November 2019–Present — Independent Poet**

- **July–August 2019 — Volunteer Teacher**  
  Baihuaping Community, Shennongjia, China.

- **June–July 2019 — Intern**  
  Yujing Tiandi Project, Kunfa Construction Co., Ltd., Yichang, China.


<span class="anchor" id="contact"></span>

# ✉️ Contact

{% if page.show_postdoc_notice %}
I welcome enquiries about **postdoctoral opportunities starting in 2027**, research collaborations, and the methods or software associated with my work.
{% else %}
I welcome enquiries about research collaborations and the methods or software associated with my work.
{% endif %}

**Email:** [tianlong_wang@zju.edu.cn](mailto:tianlong_wang@zju.edu.cn)

{% if page.cv_url and page.cv_url != "" %}
**CV:** [Download PDF]({{ page.cv_url | relative_url }})
{% endif %}

[Google Scholar](https://scholar.google.com/citations?user=JNiHto0AAAAJ) · [ResearchGate](https://www.researchgate.net/profile/Tianlong-Wang-7) · [ORCID](https://orcid.org/0000-0002-0598-5481) · [GitHub](https://github.com/zjusuge) · [LinkedIn](https://www.linkedin.com/in/tianlong-wang/)
