---
permalink: /
title: ""
excerpt: "Tianlong Wang — geohazard prediction, hydrological modelling, and physics-informed and explainable machine learning. PhD student at Zhejiang University, with expected completion in June 2027."
author_profile: true
show_postdoc_notice: true
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

<link rel="stylesheet" href="{{ '/assets/css/home-custom.css' | relative_url }}">

<div class="tw-home" id="tw-home" markdown="1">

<!-- =====================================================
     HERO
     Original conceptual SVG; not a chart of model results.
     ===================================================== -->

<div class="tw-hero">
  <div>
    <p class="tw-eyebrow">Geohazards · Hydrology · Machine Learning</p>

    <h1>Tianlong Wang</h1>

    <p class="tw-hero-line">
      <span class="tw-color-blue">Geohazard prediction.</span><br>
      <span class="tw-color-teal">Hydrological modelling.</span><br>
      <span class="tw-color-violet">Physics-informed &amp; explainable ML.</span>
    </p>

    <p class="tw-affiliation">
      PhD student at Zhejiang University<br>
      Joint doctoral research training at NTU
    </p>

    <div class="tw-tags" aria-label="Research principles">
      <span class="tw-tag tw-blue">Physically grounded</span>
      <span class="tw-tag tw-teal">Interpretable</span>
      <span class="tw-tag tw-violet">Reproducible</span>
    </div>
  </div>

  <figure class="tw-hero-art">
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 380 250"
         role="img"
         aria-labelledby="tw-art-title tw-art-desc">
      <title id="tw-art-title">Connecting environmental processes and machine learning</title>
      <desc id="tw-art-desc">
        A conceptual mountain catchment with rainfall, a river,
        observation points, and a connected machine-learning network.
        The illustration does not represent measured data or model results.
      </desc>

      <rect x="8" y="8" width="364" height="234" rx="24" fill="#edf5ff"/>

      <circle cx="62" cy="52" r="21" fill="#f6d78c"/>
      <circle cx="62" cy="52" r="31" fill="#f6d78c" opacity="0.16"/>

      <g fill="#ffffff" stroke="#c8d9ea" stroke-width="1.4">
        <path d="M112 56
                 C103 43 117 29 130 35
                 C136 20 161 23 165 39
                 C181 35 191 55 179 63
                 H118
                 C114 63 111 60 112 56Z"/>
      </g>

      <g stroke="#60a5fa" stroke-width="3" stroke-linecap="round">
        <path d="M126 73l-5 12"/>
        <path d="M144 73l-5 12"/>
        <path d="M162 73l-5 12"/>
        <path d="M178 73l-5 12"/>
      </g>

      <path d="M20 186L107 83L183 166L233 105L363 191V232H20Z"
            fill="#bfd3ee"/>

      <path d="M20 201L116 119L181 182L253 139L363 205V232H20Z"
            fill="#8cb8c1"/>

      <path d="M77 119L107 83L139 121L119 113L106 102L95 116Z"
            fill="#ffffff" opacity="0.95"/>

      <path d="M210 131L233 105L261 134L240 127L232 119L224 130Z"
            fill="#ffffff" opacity="0.9"/>

      <path d="M20 216
               C72 193 112 201 153 189
               C213 173 267 207 363 197
               V232H20Z"
            fill="#4e9384"/>

      <path d="M169 158
               C157 177 195 180 178 198
               C163 214 211 214 194 234"
            fill="none" stroke="#e5f9ff"
            stroke-width="16" stroke-linecap="round"/>

      <path d="M169 158
               C157 177 195 180 178 198
               C163 214 211 214 194 234"
            fill="none" stroke="#49a7d6"
            stroke-width="8" stroke-linecap="round"/>

      <g fill="#ffffff" stroke="#0f766e" stroke-width="2">
        <circle cx="112" cy="171" r="6"/>
        <circle cx="219" cy="188" r="6"/>
        <circle cx="160" cy="210" r="6"/>
      </g>

      <g fill="#0f766e">
        <circle cx="112" cy="171" r="2"/>
        <circle cx="219" cy="188" r="2"/>
        <circle cx="160" cy="210" r="2"/>
      </g>

      <path d="M219 181C247 142 269 142 290 114"
            fill="none" stroke="#6d28d9"
            stroke-width="2" stroke-dasharray="5 5"/>

      <rect x="245" y="24" width="108" height="91" rx="15"
            fill="#ffffff" stroke="#d6c9f4" stroke-width="1.5"/>

      <text x="299" y="42" text-anchor="middle"
            font-family="Arial, sans-serif" font-size="11"
            font-weight="700" fill="#6d28d9">MACHINE LEARNING</text>

      <g stroke="#baa5e5" stroke-width="1.3">
        <path d="M264 61L298 57L334 76"/>
        <path d="M264 61L298 78L334 76"/>
        <path d="M264 61L298 99"/>
        <path d="M264 94L298 57"/>
        <path d="M264 94L298 78L334 76"/>
        <path d="M264 94L298 99L334 76"/>
      </g>

      <g fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5">
        <circle cx="264" cy="61" r="5"/>
        <circle cx="264" cy="94" r="5"/>
      </g>

      <g fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5">
        <circle cx="298" cy="57" r="5"/>
        <circle cx="298" cy="78" r="5"/>
        <circle cx="298" cy="99" r="5"/>
      </g>

      <circle cx="334" cy="76" r="6"
              fill="#d1fae5" stroke="#0f766e" stroke-width="1.5"/>
    </svg>

    <figcaption>
      Environmental observations × physical knowledge × machine learning.<br>
      Conceptual illustration—not model output.
    </figcaption>
  </figure>
</div>

<!-- =====================================================
     ABOUT
     ===================================================== -->

<div class="tw-section tw-blue" markdown="1">

<h2 id="about-me">About</h2>

I am a **PhD student at Zhejiang University (ZJU)**, supervised by [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428), with joint doctoral research training at **Nanyang Technological University (NTU)** under the supervision of [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian). I expect to complete my PhD in **June 2027**.

My research combines **environmental observations, physical knowledge, and machine learning** to predict and better understand geohazards and hydrological processes. My work covers debris-flow susceptibility, source volumes and velocity; landslide displacement and groundwater dynamics; and catchment-scale runoff and water-stage prediction.

Across these applications, I focus on three connected themes:

<div class="tw-grid tw-theme-grid">

  <div class="tw-card tw-blue">
    <div class="tw-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M2 20L9 7l4 7 3-5 6 11H2Z"/>
        <path d="M6.8 11.1L9 7l2.2 4.1"/>
        <path d="M4 4h5M6.5 1.5v5"/>
      </svg>
    </div>
    <h3>Physics-informed modelling</h3>
    <p>
      Incorporating physical knowledge into data-driven prediction.
    </p>
  </div>

  <div class="tw-card tw-teal">
    <div class="tw-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </div>
    <h3>Explainable machine learning</h3>
    <p>
      Examining the relationships learned by predictive models
      and assessing their physical plausibility.
    </p>
  </div>

  <div class="tw-card tw-violet">
    <div class="tw-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 2l8 3v6c0 5-3.5 8.8-8 11-4.5-2.2-8-6-8-11V5l8-3Z"/>
        <path d="M8 12l3 3 5-6"/>
      </svg>
    </div>
    <h3>Predictive reliability</h3>
    <p>
      Evaluating robustness and generalization, including
      spatially structured validation where appropriate.
    </p>
  </div>

</div>

My aim is to develop physically grounded, interpretable, and reproducible methods that support geohazard assessment, early warning, and disaster mitigation.

{% if page.show_postdoc_notice %}
<div class="tw-notice" markdown="1">

### Postdoctoral opportunities — 2027

I am seeking a postdoctoral position following my expected PhD completion in **June 2027**. I welcome discussions with groups working on **geohazards, hydrological modelling, and physics-informed or explainable machine learning**. Please [email me](mailto:tianlong_wang@zju.edu.cn) to discuss research fit and potential opportunities.

</div>
{% endif %}

<div class="tw-social" aria-label="Academic profiles and contact">
  <a class="tw-button tw-button-primary" href="mailto:tianlong_wang@zju.edu.cn">Email</a>
  <a class="tw-button" href="https://scholar.google.com/citations?user=JNiHto0AAAAJ">Google Scholar</a>
  <a class="tw-button" href="https://orcid.org/0000-0002-0598-5481">ORCID</a>
  <a class="tw-button" href="https://github.com/zjusuge">GitHub</a>
  <a class="tw-button" href="https://www.researchgate.net/profile/Tianlong-Wang-7">ResearchGate</a>
  <a class="tw-button" href="https://www.linkedin.com/in/tianlong-wang/">LinkedIn</a>
</div>

<nav class="tw-page-nav" aria-label="On this page">
  <span class="tw-nav-label">On this page</span>
  <div class="tw-nav-links">
    <a href="#publications">Publications</a>
    <a href="#research-software">Research Software</a>
    <a href="#education">Education</a>
    <a href="#research-funding">Funding</a>
    <a href="#patents">Patents</a>
    <a href="#honors">Honors</a>
    <a href="#competitions">Competitions</a>
    <a href="#beyond-research">Beyond Research</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

</div>

<!-- =====================================================
     PUBLICATIONS
     Keep adding papers using the existing Markdown format.
     ===================================================== -->

<div class="tw-section tw-blue tw-publications" markdown="1">

<h2 id="publications">Publications</h2>

My name is shown in **bold**; an asterisk (\*) indicates a corresponding author. Links to code, data, and archived releases are included where available.

<div class="tw-scholar-badge">
  <a href="https://scholar.google.com/citations?user=JNiHto0AAAAJ">
    <img src="https://img.shields.io/endpoint?url={{ scholarStatsUrl | url_encode }}&amp;logo=Google%20Scholar&amp;labelColor=f6f6f6&amp;color=9cf&amp;style=flat&amp;label=citations"
         alt="Google Scholar citation count"
         loading="lazy">
  </a>
</div>

### Journal Articles

1. **Tianlong Wang**\*, H. Yang. DOME: a dynamic optimization meta-ensemble framework for debris-flow susceptibility assessment with SHAP-based interpretation. *Natural Hazards*, **122**, Article 545, **2026**.  
   [DOI: 10.1007/s11069-026-08307-2](https://doi.org/10.1007/s11069-026-08307-2) · [Code](https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment) · [Code archive](https://doi.org/10.5281/zenodo.16911533)

2. **Tianlong Wang**, H. Yang, H. Sun\*. Intelligent Prediction of Post-Seismic Debris Flow Source Volumes: A Physics-Informed Generative Deep Learning Framework. *Georisk: Assessment and Management of Risk for Engineered Systems and Geohazards*, 1–29, **2026**.  
   [DOI: 10.1080/17499518.2026.2651228](https://doi.org/10.1080/17499518.2026.2651228)

3. K. Zhang, **Tianlong Wang**, J. Su, H. Sun\*. Impacts of Land Use Change on Watershed Hydrological Processes Based on the SWAT-ML-SHAP Model: A Case Study of Fenshuijiang River Basin. *Earth Science*, **2026**.  
   [DOI: 10.3799/dqkx.2025.290](https://doi.org/10.3799/dqkx.2025.290)

4. H. Yang, **Tianlong Wang**\*, N. I. Fomin, S. Xiao, L. Liu. An integrated IKOA-CNN-BiGRU-Attention framework with SHAP explainability for high-precision debris flow hazard prediction in the Nujiang river basin, China. *PLOS ONE*, **20**(6), e0326587, **2025**.  
   [DOI: 10.1371/journal.pone.0326587](https://doi.org/10.1371/journal.pone.0326587) · [Data](https://doi.org/10.5281/zenodo.15050116)

5. **Tianlong Wang**, Q. Ge, T. Ma, et al. A novel method for predicting debris flow hazard: a multi-strategy fusion approach based on the light gradient boosting machine framework. *Stochastic Environmental Research and Risk Assessment*, **39**, 4867–4890, **2025**.  
   [DOI: 10.1007/s00477-025-02955-9](https://doi.org/10.1007/s00477-025-02955-9)

6. **Tianlong Wang**, K. Zhang, Z. Liu, T. Ma, R. Luo, H. Chen, X. Wang, W. Ge, H. Sun\*. Prediction and explanation of debris flow velocity based on multi-strategy fusion Stacking ensemble learning model. *Journal of Hydrology*, **638**, 131347, **2024**.  
   [DOI: 10.1016/j.jhydrol.2024.131347](https://doi.org/10.1016/j.jhydrol.2024.131347)

7. **Tianlong Wang**, R. Luo, T. Ma, et al. Study and verification on an improved comprehensive prediction model of landslide displacement. *Bulletin of Engineering Geology and the Environment*, **83**, Article 90, **2024**.  
   [DOI: 10.1007/s10064-024-03581-5](https://doi.org/10.1007/s10064-024-03581-5)

8. Z. Chu, S. Yu, X. Li, X. Lu, X. Wang, R. Luo, **Tianlong Wang**\*. Laboratory model test on the treatment of engineering slurry by vacuum drainage method. *Journal of Yangtze River Scientific Research Institute*, **41**(9), 114–122, **2024**.  
   [DOI: 10.11988/ckyyb.20230665](https://doi.org/10.11988/ckyyb.20230665)

9. **Tianlong Wang**, D. Peng, X. Wang, B. Wu, R. Luo, Z. Chu, H. Sun\*. Study on wavelet multi-scale analysis and prediction of landslide groundwater. *Journal of Hydroinformatics*, **26**(1), 237–254, **2024**.  
   [DOI: 10.2166/hydro.2023.299](https://doi.org/10.2166/hydro.2023.299)

10. **Tianlong Wang**, Xiaorui Tao, Dong-kun Wu, Haotian Feng. Determining the location of River Dam Group based on set cover Model: A case study of Zambezi River Basin. *Scientific Research and Reviews*, **14**, 122, **2021**.  
    [DOI: 10.28933/srr-2021-03-1005](https://doi.org/10.28933/srr-2021-03-1005)

11. **Tianlong Wang**, H. Zhang, X. Tao, W. Chu. Research on Prediction and Optimization of Slope Deformation in Mining Area. *Environment, Resource and Ecology Journal*, **4**, 66–69, **2020**.  
    [DOI: 10.23977/erej.2020.040110](https://doi.org/10.23977/erej.2020.040110)

12. **Tianlong Wang**, Hongyan Bao, Hairui Zhang. Optimization of Task Pricing Based on Multiple Regression Analysis and Game Theory. *Journal of eSciences*, **3**, 9, **2020**.  
    [DOI: 10.28933/esciences-2020-01-1805](https://doi.org/10.28933/esciences-2020-01-1805)

13. **Tianlong Wang**, Xiaorui Tao, Jiamei Zhang, Yulei Li. Predicting Traffic Congestion Time Based on Kalman Filter Algorithm. *Advances in Research and Reviews*, **1**, 7, **2020**.  
    [DOI: 10.28933/arr-2020-06-2205](https://doi.org/10.28933/arr-2020-06-2205)

### Conference Papers

1. **Tianlong Wang**, J. Wang, X. Shao. Carbon emission forecast of China Transport Industry Based on Grey - Markov. In *Proceedings of the International Conference on Computing and Big Data (ICCBD)*, **2021**.  
   [DOI: 10.1109/ICCBD53833.2021.00192](https://doi.org/10.1109/ICCBD53833.2021.00192)

</div>

<!-- =====================================================
     RESEARCH SOFTWARE
     ===================================================== -->

<div class="tw-section tw-teal" markdown="1">

<h2 id="research-software">Research Software</h2>

Research implementations, benchmarks, and case-study code accompanying my work on geohazards and hydrology.

<div class="tw-grid">

  <div class="tw-card tw-blue">
    <h3>DOME</h3>
    <p><strong>Regional debris-flow susceptibility assessment</strong></p>
    <p>
      A dynamic optimization meta-ensemble framework combining learner
      screening, ensemble optimization, out-of-fold stacking,
      isotonic calibration, and spatially blocked validation.
      The workflow includes documented debris-flow inventory records
      and pseudo-absence generation, with SHAP-based interpretation
      of model predictions.
    </p>
    <div class="tw-link-row">
      <a href="https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment">Repository</a>
      <a href="https://doi.org/10.1007/s11069-026-08307-2">Paper</a>
      <a href="https://doi.org/10.5281/zenodo.16911533">Archived release</a>
    </div>
  </div>

  <div class="tw-card tw-violet">
    <h3>TabPFNv2.5-DebrisFlow</h3>
    <p><strong>Small-sample debris-flow volume prediction</strong></p>
    <p>
      A benchmark of zero-shot TabPFN-2.5 against Bayesian-optimised
      machine learning baselines for catchment-scale debris-flow
      volume prediction, evaluated using repeated nested
      cross-validation.
    </p>
    <div class="tw-link-row">
      <a href="https://github.com/zjusuge/TabPFNv2.5-DebrisFlow">Repository</a>
    </div>
  </div>

  <div class="tw-card tw-teal">
    <h3>BWSD — Fengshuwan Case Study</h3>
    <p><strong>Catchment water-storage calculation</strong></p>
    <p>
      Lightweight reproducibility code for the core daily Basin Water
      Storage Degree (BWSD) calculation in the Fengshuwan catchment.
    </p>
    <div class="tw-link-row">
      <a href="https://github.com/zjusuge/bwsd-fengshuwan-case">Repository</a>
    </div>
  </div>

  <div class="tw-card tw-blue">
    <h3>HydroPIML-RS — Fengshuwan Case Study</h3>
    <p><strong>Short-lead hydrological prediction</strong></p>
    <p>
      Lightweight reproducibility code for the short-lead runoff
      and water-stage prediction experiment in the Fengshuwan
      catchment.
    </p>
    <div class="tw-link-row">
      <a href="https://github.com/zjusuge/hydropiml-rs-fengshuwan-case">Repository</a>
    </div>
  </div>

</div>

</div>

<!-- =====================================================
     EDUCATION
     ===================================================== -->

<div class="tw-section tw-teal" markdown="1">

<h2 id="education">Education &amp; Research Training</h2>

<div class="tw-timeline">

<div class="tw-timeline-item" markdown="1">

### Zhejiang University · China

**PhD Student, Ocean College**  
September 2022 – June 2027 (expected)  
Supervisor: [Prof. Hongyue Sun](https://person.zju.edu.cn/0096428)

</div>

<div class="tw-timeline-item" markdown="1">

### Nanyang Technological University · Singapore

**Joint Doctoral Research Training, School of Civil and Environmental Engineering**  
September 2024 – September 2026  
Host supervisor: [Prof. Chu Jian](https://dr.ntu.edu.sg/entities/person/Chu-Jian)

</div>

</div>

</div>

<!-- =====================================================
     FUNDING
     Roles and dates retained from the supplied homepage.
     ===================================================== -->

<div class="tw-section tw-violet tw-funding" markdown="1">

<h2 id="research-funding">Funding &amp; Research Projects</h2>

### Individual Funding & Scholarships

- **Young Elite Scientists Sponsorship Program — Doctoral Student Special Plan**  
  China Association for Science and Technology (CAST)  
  January 2025 – December 2026  
  Project ID: 156-O-170-0000603-2  
  Role: **Principal Investigator (PI)**

- **Seed Fund Cultivation Project of Ocean College**  
  Zhejiang University  
  June 2025 – June 2027  
  Grant No. 2025BS004  
  Role: **Principal Investigator (PI)**

- **Outstanding Doctoral Dissertation Award Cultivation Grant**  
  Zhejiang University  
  June 2025 – June 2026  
  Grant No. 825011A  
  Role: **Principal Investigator (PI)**  
  Status: Completed; final evaluation: **Excellent**.

- **National Construction of High-Level Universities Program**  
  China Scholarship Council (CSC)  
  September 2024 – September 2026  
  Grant No. 202406320358  
  Role: **Scholarship Recipient**

### Collaborative Research Projects

- **Key Program of the National Natural Science Foundation of China**  
  *Early Forecasting and Disaster Control Methods for Debris Flows in Small Watersheds Based on Hydrodynamic Analysis*  
  January 2023 – December 2027  
  Grant No. 42230702  
  Role: **Co-Investigator**

- **Young Scientists Fund of the National Natural Science Foundation of China**  
  *Research on Deformation Prediction Models and Instability Criterion Methods for Reservoir Bank Slopes Based on Copula Theory*  
  January 2019 – December 2021  
  Grant No. 51809151  
  Role: **Co-Investigator**

</div>

<!-- =====================================================
     PATENTS
     No additional grant-status claims are introduced.
     ===================================================== -->

<div class="tw-section tw-violet tw-patents" markdown="1">

<h2 id="patents">Patents &amp; Patent Applications</h2>

1. H. Sun, X. Wang, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Debris Flow*. Japan, No. **2024-017304**, **2024**.

2. X. Wang, H. Sun, S. Shao, R. Luo, **Tianlong Wang**. *Early Warning and Mitigation Method for Debris Flow Disasters in Small Watersheds*. China, **CN118262481A**, **2024**.

3. X. Wang, H. Sun, **Tianlong Wang**, R. Tang, R. Luo. *Monitoring and Early Warning Method and System for Rainfall-induced Landslides*. China, **CN117854239A**, **2024**.

4. **Tianlong Wang**, H. Sun, Z. Chu, R. Luo, X. Wang. *Landslide Displacement Prediction Method Based on IVMD-IAO-BiLSTM*. China, **CN116757323A**, **2023**.

5. J. Liu, Z. Li, **Tianlong Wang**, et al. *Eccentric Hook-shaped Expansible Pre-stressed Anchoring Structure and Its Anchoring Method*. China, **CN113718767B**, **2023**.

6. J. Liu, Z. Li, **Tianlong Wang**, et al. *Method for Repairing Dam Crack Defects Using Magnetic Mortar*. China, **CN114396022A**, **2022**.

7. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Device and Method for Obtaining the Position of Liquid Displacement Surface in Rock Cracks*. China, **CN111595550B**, **2022**.

8. J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang, **Tianlong Wang**, et al. *Pile Structure and Construction Method in Coral Sand Environment*. China, **CN110886291B**, **2021**.

</div>

<!-- =====================================================
     HONORS
     ===================================================== -->

<div class="tw-section tw-amber tw-honors" markdown="1">

<h2 id="honors">Honors &amp; Scholarships</h2>

- **2025, 2021** — National Scholarship, China.
- **2024** — Chinese Government Scholarship, China Scholarship Council.
- **2023** — China Harbour Engineering Company (CHEC) Scholarship.
- **2022** — Outstanding Graduate, City Underground Space Engineering Professional Committee, CSRME.
- **2022** — Yunneng Electric Power Innovation Scholarship.
- **2020** — Wang Shuopeng Scholarship.
- **2019–2022** — First-Class Academic Scholarship, university level, four consecutive years.
- **2019–2021** — National Encouragement Scholarship, three consecutive years.

</div>

<!-- =====================================================
     COMPETITIONS
     ===================================================== -->

<div class="tw-section tw-amber tw-competitions" markdown="1">

<h2 id="competitions">Competition Awards</h2>

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

</div>

<!-- =====================================================
     BEYOND RESEARCH
     ===================================================== -->

<div class="tw-section tw-rose" markdown="1">

<h2 id="beyond-research">Beyond Research</h2>

<div class="tw-poetry" markdown="1">

Beyond research, I write poetry, enjoy fitness, and take part in community activities. My debut poetry collection, *Suganniran*, was published in China in **February 2025**.

Research and poetry offer me different ways of looking closely at the world: one through models and evidence, the other through language and imagery.

</div>

### Service, Leadership & Other Experience

<div class="tw-service" markdown="1">

- **July–September 2023 — Intern**  
  China International Science and Technology Exchange Center, China Association for Science and Technology (CAST), Beijing, China.

- **June 2022–June 2024 — President**  
  Student Fitness Club, Ocean College, Zhejiang University, Zhoushan, China.

- **November 2019–Present — Independent Poet**

- **July–August 2019 — Volunteer Teacher**  
  Baihuaping Community, Shennongjia, China.

- **June–July 2019 — Intern**  
  Yujing Tiandi Project, Kunfa Construction Co., Ltd., Yichang, China.

</div>

</div>

<!-- =====================================================
     CONTACT
     ===================================================== -->

<div class="tw-section tw-blue" markdown="1">

<h2 id="contact">Contact</h2>

<div class="tw-contact-box" markdown="1">

{% if page.show_postdoc_notice %}
I welcome enquiries about **postdoctoral opportunities starting in 2027**, research collaborations, and the methods or software associated with my work.
{% else %}
I welcome enquiries about research collaborations and the methods or software associated with my work.
{% endif %}

**Email:** [tianlong_wang@zju.edu.cn](mailto:tianlong_wang@zju.edu.cn)

</div>

<div class="tw-back-top">
  <a href="#tw-home">Back to top ↑</a>
</div>

</div>

</div>
