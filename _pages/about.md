---
layout: null
permalink: /
title: "Tianlong Wang | Geohazards, Hydrology & Machine Learning"
description: "Tianlong Wang — PhD student at Zhejiang University, with joint doctoral research training at NTU. Research on geohazards, hydrology, and physics-informed and explainable machine learning."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ page.title | escape }}</title>
  <meta name="description" content="{{ page.description | escape }}">
  <meta name="author" content="Tianlong Wang">
  <meta name="theme-color" content="#f8faf9">

  <link rel="canonical" href="{{ '/' | absolute_url }}">

  <meta property="og:type" content="website">
  <meta property="og:title" content="{{ page.title | escape }}">
  <meta property="og:description" content="{{ page.description | escape }}">
  <meta property="og:url" content="{{ '/' | absolute_url }}">
  <meta property="og:image" content="{{ '/images/2.jpg' | absolute_url }}">
  <meta property="og:image:alt" content="Tianlong Wang">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="{{ page.title | escape }}">
  <meta name="twitter:description" content="{{ page.description | escape }}">

  <!-- One type family throughout the page, including SVG labels. -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
    rel="stylesheet"
  >

  <link
    rel="stylesheet"
    href="{{ '/assets/css/academic.css' | relative_url }}"
  >

  <script
    src="{{ '/assets/js/academic.js' | relative_url }}"
    defer
  ></script>
</head>

<body id="top">

  <a class="skip-link" href="#tw-home">Skip to main content</a>

  <!-- =====================================================
       NAVIGATION
       ===================================================== -->

  <header class="site-header">
    <div class="container header-inner">

      <a class="brand" href="#top" aria-label="Tianlong Wang — back to top">
        <span class="brand-mark" aria-hidden="true">TW</span>
        <span class="brand-name">Tianlong Wang</span>
      </a>

      <button
        class="menu-toggle"
        id="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-nav"
        hidden
      >
        Menu
        <span aria-hidden="true">+</span>
      </button>

      <nav class="site-nav" id="site-nav" aria-label="Main navigation">
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#research-software">Software</a>
        <a href="#education">Education</a>
        <a href="#research-funding">Funding</a>
        <a href="#academic-record">Record</a>
        <a href="#contact">Contact</a>
      </nav>

    </div>
  </header>

  <main id="tw-home">

    <!-- =====================================================
         HERO / ABOUT
         ===================================================== -->

    <section class="hero container" id="about-me" aria-labelledby="hero-name">

      <div class="hero-copy">

        <p class="eyebrow">Geohazards · Hydrology · Machine Learning</p>

        <div class="identity">
          <img
            class="portrait"
            id="portrait"
            src="{{ '/images/2.jpg' | relative_url }}"
            alt="Portrait of Tianlong Wang"
            width="88"
            height="88"
            decoding="async"
            fetchpriority="high"
          >

          <div>
            <h1 id="hero-name">Tianlong Wang</h1>
            <p class="identity-note">PhD Student · Zhejiang University</p>
          </div>
        </div>

        <p class="hero-statement">
          Understanding environmental processes.<br>
          <span>Building better predictions.</span>
        </p>

        <p class="hero-intro">
          I combine physical knowledge and machine learning to study
          <strong>debris flows, landslides, and hydrological processes</strong>,
          with a focus on interpretable prediction and disaster mitigation.
        </p>

        <p class="hero-training">
          At Zhejiang University, I am supervised by
          <a href="https://person.zju.edu.cn/0096428">Prof. Hongyue Sun</a>.
          My joint doctoral research training at NTU is supervised by
          <a href="https://dr.ntu.edu.sg/entities/person/Chu-Jian">Prof. Chu Jian</a>.
        </p>

        <aside class="opportunity" aria-labelledby="opportunity-title">
          <div class="opportunity-label">
            <span class="status-dot" aria-hidden="true"></span>
            <h2 id="opportunity-title">Postdoctoral opportunities · 2027</h2>
          </div>

          <p>
            Expected PhD completion:
            <strong>June 2027</strong>.
            I welcome discussions about postdoctoral opportunities in
            geohazards, hydrology, and physics-informed or explainable ML.
          </p>

          <a class="text-link" href="mailto:tianlong_wang@zju.edu.cn">
            Discuss research fit <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div class="hero-actions">
          <a class="button button-primary" href="mailto:tianlong_wang@zju.edu.cn">
            Get in touch <span aria-hidden="true">↗</span>
          </a>

          <a
            class="button button-secondary"
            href="https://scholar.google.com/citations?user=JNiHto0AAAAJ"
          >
            Google Scholar
          </a>
        </div>

        <div class="profile-links" aria-label="Academic and professional profiles">
          <a href="https://github.com/zjusuge">GitHub</a>
          <a href="https://orcid.org/0000-0002-0598-5481">ORCID</a>
          <a href="https://www.researchgate.net/profile/Tianlong-Wang-7">
            ResearchGate
          </a>
          <a href="https://www.linkedin.com/in/tianlong-wang/">LinkedIn</a>
        </div>

      </div>

      <!-- Original conceptual artwork; not a map of an actual study area. -->
      <figure class="research-figure">

        <div class="figure-header">
          <span class="eyebrow">Research overview</span>
          <span class="figure-number" aria-hidden="true">01</span>
        </div>

        <svg
          class="catchment-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 560 315"
          role="img"
          aria-labelledby="catchment-title catchment-description"
        >
          <title id="catchment-title">
            Connecting catchment processes with predictive modelling
          </title>

          <desc id="catchment-description">
            A conceptual catchment containing terrain contours, rainfall,
            a sediment-source area, tributaries, and observation locations.
            Numbered markers identify rainfall forcing, slope response,
            and channel processes. This is an illustrative diagram, not
            an actual study-area map or a visualization of model results.
          </desc>

          <defs>
            <path
              id="basin-shape"
              d="M86 124
                 C109 54 187 40 254 68
                 C311 28 413 62 456 124
                 C498 178 455 235 405 252
                 L352 292
                 L277 271
                 C217 282 149 246 105 220
                 C69 196 60 151 86 124Z"
            />

            <clipPath id="basin-clip">
              <use href="#basin-shape"/>
            </clipPath>

            <marker
              id="sediment-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto"
            >
              <path d="M0 1L9 5L0 9" fill="none" stroke="#ad6b4f" stroke-width="1.5"/>
            </marker>
          </defs>

          <!-- Subtle offset establishes the catchment as a diagram plane. -->
          <use
            href="#basin-shape"
            transform="translate(0 8)"
            fill="#e9eeeb"
          />

          <use
            href="#basin-shape"
            fill="#f2f6f1"
            stroke="#b9c8bd"
            stroke-width="1.4"
          />

          <g clip-path="url(#basin-clip)">

            <!-- Soft terrain zones. No numerical elevation values are implied. -->
            <path
              d="M62 167C126 67 199 55 258 81
                 C211 134 175 213 117 244L56 215Z"
              fill="#e7eee3"
            />

            <path
              d="M285 53C389 41 463 91 487 158
                 L429 242C401 164 342 132 285 53Z"
              fill="#eaf0e6"
            />

            <path
              d="M252 101C265 151 235 187 281 225
                 L352 303L391 280C335 216 324 166 320 107Z"
              fill="#e0ede8"
            />

            <!-- Western contour family. -->
            <g
              fill="none"
              stroke="#c0cdbb"
              stroke-width="1.1"
              stroke-linecap="round"
            >
              <path d="M61 149C100 75 156 41 218 59C265 73 272 113 240 143C201 179 202 220 151 244C116 260 77 242 62 218"/>
              <path d="M78 151C112 92 157 65 207 76C248 85 253 112 223 143C188 178 191 214 145 228C114 239 88 220 78 195Z"/>
              <path d="M96 151C123 107 157 86 194 94C227 101 229 120 204 144C173 173 178 203 142 211C117 217 101 198 96 179Z"/>
              <path d="M116 151C137 121 159 108 181 113C203 118 204 133 184 151C162 172 160 191 140 191C122 191 113 173 116 151Z"/>
              <path d="M136 148C148 134 162 127 172 133C184 139 178 149 166 159C153 171 137 170 134 160C132 156 134 152 136 148Z"/>
            </g>

            <!-- Eastern contour family. -->
            <g
              fill="none"
              stroke="#c3cfbf"
              stroke-width="1.1"
              stroke-linecap="round"
            >
              <path d="M284 54C345 31 432 66 465 121C502 182 453 245 401 259"/>
              <path d="M301 72C354 54 414 83 446 128C475 174 439 220 397 239C371 251 355 241 348 220"/>
              <path d="M321 89C364 79 402 102 427 137C447 169 423 202 394 217C370 230 354 212 350 190"/>
              <path d="M342 109C371 103 396 120 409 143C422 165 406 186 387 194C369 202 360 189 359 171"/>
              <path d="M361 129C376 127 390 137 394 150C399 165 385 176 375 170C365 165 361 145 361 129Z"/>
            </g>

            <!-- Lower contour family. -->
            <g fill="none" stroke="#c8d3c5" stroke-width="1">
              <path d="M103 226C165 219 208 254 254 245C300 236 333 250 360 289"/>
              <path d="M116 241C167 237 205 268 252 260C297 253 320 265 339 291"/>
            </g>

            <!-- Tributaries. -->
            <g
              fill="none"
              stroke="#6ea3b1"
              stroke-width="2.8"
              stroke-linecap="round"
            >
              <path d="M134 134C173 143 198 176 258 182"/>
              <path d="M214 91C235 119 242 142 282 161"/>
              <path d="M421 138C390 156 359 194 282 209"/>
              <path d="M404 106C397 126 388 142 377 162"/>
              <path d="M190 213C218 210 239 201 263 195"/>
            </g>

            <!-- Main channel: a white bank and a single consistent blue line. -->
            <path
              d="M296 92C281 119 308 147 274 167
                 C248 188 279 207 300 223
                 S333 263 352 292"
              fill="none"
              stroke="#ffffff"
              stroke-width="10"
              stroke-linecap="round"
            />

            <path
              d="M296 92C281 119 308 147 274 167
                 C248 188 279 207 300 223
                 S333 263 352 292"
              fill="none"
              stroke="#387b91"
              stroke-width="4.8"
              stroke-linecap="round"
            />

            <!-- Illustrative sediment source and transport connection. -->
            <path
              d="M158 130L181 139L201 162L188 181L166 167L148 147Z"
              fill="#dfc1ad"
              fill-opacity=".82"
              stroke="#b98669"
              stroke-width="1.2"
            />

            <g stroke="#b98669" stroke-width="1" opacity=".75">
              <path d="M155 143L185 171"/>
              <path d="M164 137L193 163"/>
              <path d="M153 153L175 173"/>
            </g>

            <path
              d="M192 165C211 169 229 178 249 181"
              fill="none"
              stroke="#ad6b4f"
              stroke-width="1.6"
              stroke-dasharray="4 4"
              marker-end="url(#sediment-arrow)"
            />

            <!-- Observation locations: circles, not data-valued symbols. -->
            <g fill="#ffffff" stroke="#225b68" stroke-width="2">
              <circle cx="274" cy="167" r="5"/>
              <circle cx="300" cy="223" r="5"/>
              <circle cx="379" cy="160" r="5"/>
            </g>

            <g fill="#225b68">
              <circle cx="274" cy="167" r="1.7"/>
              <circle cx="300" cy="223" r="1.7"/>
              <circle cx="379" cy="160" r="1.7"/>
            </g>

          </g>

          <!-- Rainfall forcing: restrained line symbols. -->
          <g
            stroke="#6997b1"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M274 34L268 47M292 28L286 41M310 32L304 45"/>
            <path d="M280 54L274 67M298 50L292 63M316 54L310 67"/>
          </g>

          <!-- Numbered callouts; the readable legend is HTML below. -->
          <g fill="none" stroke="#82928c" stroke-width="1.1">
            <path d="M335 36L322 36L313 47"/>
            <path d="M89 107L114 107L153 138"/>
            <path d="M442 277L405 277L346 272"/>
          </g>

          <g>
            <circle cx="349" cy="36" r="14" fill="#ffffff" stroke="#7b9eb1"/>
            <circle cx="75" cy="107" r="14" fill="#ffffff" stroke="#b98669"/>
            <circle cx="456" cy="277" r="14" fill="#ffffff" stroke="#6c9c8f"/>

            <g
              text-anchor="middle"
              dominant-baseline="central"
              font-size="14"
              font-weight="600"
              fill="#253c44"
            >
              <text x="349" y="36">1</text>
              <text x="75" y="107">2</text>
              <text x="456" y="277">3</text>
            </g>
          </g>
        </svg>

        <ol class="figure-legend">
          <li><span class="legend-number legend-blue">1</span> Rainfall forcing</li>
          <li><span class="legend-number legend-clay">2</span> Slope response</li>
          <li><span class="legend-number legend-teal">3</span> Channel processes</li>
        </ol>

        <div class="model-flow" aria-label="Research approach">
          <div>
            <span class="flow-label">Environmental</span>
            <strong>observations</strong>
          </div>

          <span class="flow-symbol" aria-hidden="true">+</span>

          <div>
            <span class="flow-label">Physical</span>
            <strong>knowledge</strong>
          </div>

          <span class="flow-symbol" aria-hidden="true">→</span>

          <div>
            <span class="flow-label">Interpretable</span>
            <strong>prediction</strong>
          </div>
        </div>

        <figcaption>
          Conceptual research schematic. No measured data or model results
          are shown.
        </figcaption>

      </figure>

    </section>

    <!-- =====================================================
         RESEARCH QUESTIONS
         ===================================================== -->

    <section class="research-band" id="research" aria-labelledby="research-title">
      <div class="container">

        <div class="section-topline">
          <div>
            <p class="eyebrow">Research direction</p>
            <h2 id="research-title">Three connected questions.</h2>
          </div>

          <p class="section-intro">
            Linking environmental understanding with data-driven prediction,
            from slope processes to catchment response.
          </p>
        </div>

        <div class="research-grid">

          <article class="research-topic topic-blue">
            <div class="topic-top">
              <span class="topic-letter" aria-hidden="true">a</span>
              <span class="eyebrow">Geohazards</span>
            </div>

            <h3>Where and how do debris flows develop?</h3>

            <p>
              Studying susceptibility, source volumes, and flow velocity,
              together with landslide displacement and groundwater dynamics.
            </p>

            <p class="topic-method">
              Hazard prediction · Slope response · Early warning
            </p>

            <a class="text-link" href="#paper-dome">
              Related publications <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article class="research-topic topic-teal">
            <div class="topic-top">
              <span class="topic-letter" aria-hidden="true">b</span>
              <span class="eyebrow">Hydrology</span>
            </div>

            <h3>How do catchments respond to change?</h3>

            <p>
              Exploring land-use effects, catchment water storage, and
              runoff and water-stage prediction through physical and
              data-driven modelling.
            </p>

            <p class="topic-method">
              Catchment processes · Water storage · Forecasting
            </p>

            <a class="text-link" href="#paper-swat">
              Related publication <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article class="research-topic topic-clay">
            <div class="topic-top">
              <span class="topic-letter" aria-hidden="true">c</span>
              <span class="eyebrow">Modelling</span>
            </div>

            <h3>What makes a prediction scientifically useful?</h3>

            <p>
              Bringing physical knowledge, model interpretation, and careful
              evaluation into machine-learning workflows for environmental
              applications.
            </p>

            <p class="topic-method">
              Physics-informed ML · Explainability · Reliability
            </p>

            <a class="text-link" href="#research-software">
              Research software <span aria-hidden="true">↗</span>
            </a>
          </article>

        </div>
      </div>
    </section>

    <!-- =====================================================
         PUBLICATIONS
         All records are static HTML and remain readable without JS.
         ===================================================== -->

    <section
      class="container section-layout"
      id="publications"
      aria-labelledby="publications-title"
    >

      <div class="section-heading">
        <p class="eyebrow">01 / Research output</p>
        <h2 id="publications-title">Publications</h2>

        <p>
          Journal articles and conference papers, listed by year.
        </p>

        <p class="small">
          <strong>Bold</strong>: my name.<br>
          *: corresponding author, where indicated.
        </p>

        <a
          class="text-link"
          href="https://scholar.google.com/citations?user=JNiHto0AAAAJ"
        >
          Google Scholar <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="section-content">

        <form
          class="publication-controls"
          id="publication-controls"
          role="search"
          aria-label="Search publications"
          hidden
        >
          <div class="search-field">
            <label for="publication-search">Search publications</label>
            <input
              id="publication-search"
              type="search"
              placeholder="Title, author, journal, or keyword"
              autocomplete="off"
              aria-controls="publication-list"
            >
          </div>

          <div class="year-field">
            <label for="publication-year">Year</label>
            <select id="publication-year" aria-controls="publication-list">
              <option value="all">All years</option>
            </select>
          </div>

          <button class="reset-button" type="reset">Reset</button>
        </form>

        <p
          class="results-status small"
          id="publication-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          hidden
        ></p>

        <ol class="publication-list" id="publication-list">

          <li class="publication" data-year="2026" id="paper-dome">
            <div class="paper-year"><time datetime="2026">2026</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1007/s11069-026-08307-2">
                  DOME: A Dynamic Optimization Meta-Ensemble Framework for
                  Debris-Flow Susceptibility Assessment with SHAP-Based
                  Interpretation
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>*, H. Yang
              </p>

              <p class="paper-venue">
                <span class="journal-name">Natural Hazards</span>,
                122, Article 545.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1007/s11069-026-08307-2"
                   aria-label="DOI for DOME">DOI ↗</a>
                <a href="https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment">
                  Code ↗
                </a>
                <a href="https://doi.org/10.5281/zenodo.16911533">
                  Code archive ↗
                </a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2026" id="paper-source-volume">
            <div class="paper-year"><time datetime="2026">2026</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1080/17499518.2026.2651228">
                  Intelligent Prediction of Post-Seismic Debris Flow Source
                  Volumes: A Physics-Informed Generative Deep Learning Framework
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, H. Yang, H. Sun*
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  Georisk: Assessment and Management of Risk for Engineered
                  Systems and Geohazards
                </span>, 1–29.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1080/17499518.2026.2651228">
                  DOI ↗
                </a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2026" id="paper-swat">
            <div class="paper-year"><time datetime="2026">2026</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.3799/dqkx.2025.290">
                  Impacts of Land Use Change on Watershed Hydrological Processes
                  Based on the SWAT-ML-SHAP Model: A Case Study of Fenshuijiang
                  River Basin
                </a>
              </h3>

              <!-- Verify correspondence against the final publisher version. -->
              <p class="paper-authors">
                K. Zhang, <strong>Tianlong Wang</strong>, J. Su, H. Sun
              </p>

              <p class="paper-venue">
                <span class="journal-name">Earth Science</span>.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.3799/dqkx.2025.290">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2025">
            <div class="paper-year"><time datetime="2025">2025</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1371/journal.pone.0326587">
                  An integrated IKOA-CNN-BiGRU-Attention framework with SHAP
                  explainability for high-precision debris flow hazard prediction
                  in the Nujiang river basin, China
                </a>
              </h3>

              <p class="paper-authors">
                H. Yang, <strong>Tianlong Wang</strong>*, N. I. Fomin,
                S. Xiao, L. Liu
              </p>

              <p class="paper-venue">
                <span class="journal-name">PLOS ONE</span>,
                20(6), e0326587.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1371/journal.pone.0326587">DOI ↗</a>
                <a href="https://doi.org/10.5281/zenodo.15050116">Data ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2025">
            <div class="paper-year"><time datetime="2025">2025</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1007/s00477-025-02955-9">
                  A novel method for predicting debris flow hazard:
                  a multi-strategy fusion approach based on the light gradient
                  boosting machine framework
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, Q. Ge, T. Ma, et al.
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  Stochastic Environmental Research and Risk Assessment
                </span>, 39, 4867–4890.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1007/s00477-025-02955-9">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2024" id="paper-velocity">
            <div class="paper-year"><time datetime="2024">2024</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1016/j.jhydrol.2024.131347">
                  Prediction and explanation of debris flow velocity based on
                  multi-strategy fusion Stacking ensemble learning model
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, K. Zhang, Z. Liu, T. Ma,
                R. Luo, H. Chen, X. Wang, W. Ge, H. Sun*
              </p>

              <p class="paper-venue">
                <span class="journal-name">Journal of Hydrology</span>,
                638, 131347.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1016/j.jhydrol.2024.131347">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2024">
            <div class="paper-year"><time datetime="2024">2024</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.1007/s10064-024-03581-5">
                  Study and verification on an improved comprehensive prediction
                  model of landslide displacement
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, R. Luo, T. Ma, et al.
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  Bulletin of Engineering Geology and the Environment
                </span>, 83, Article 90.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1007/s10064-024-03581-5">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2024">
            <div class="paper-year"><time datetime="2024">2024</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.11988/ckyyb.20230665">
                  Laboratory model test on the treatment of engineering slurry
                  by vacuum drainage method
                </a>
              </h3>

              <p class="paper-authors">
                Z. Chu, S. Yu, X. Li, X. Lu, X. Wang, R. Luo,
                <strong>Tianlong Wang</strong>*
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  Journal of Yangtze River Scientific Research Institute
                </span>, 41(9), 114–122.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.11988/ckyyb.20230665">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2024">
            <div class="paper-year"><time datetime="2024">2024</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.2166/hydro.2023.299">
                  Study on wavelet multi-scale analysis and prediction of
                  landslide groundwater
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, D. Peng, X. Wang, B. Wu,
                R. Luo, Z. Chu, H. Sun*
              </p>

              <p class="paper-venue">
                <span class="journal-name">Journal of Hydroinformatics</span>,
                26(1), 237–254.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.2166/hydro.2023.299">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2021">
            <div class="paper-year"><time datetime="2021">2021</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.28933/srr-2021-03-1005">
                  Determining the location of River Dam Group based on set
                  cover Model: A case study of Zambezi River Basin
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, Xiaorui Tao,
                Dong-kun Wu, Haotian Feng
              </p>

              <p class="paper-venue">
                <span class="journal-name">Scientific Research and Reviews</span>,
                14, 122.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.28933/srr-2021-03-1005">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2021">
            <div class="paper-year"><time datetime="2021">2021</time></div>
            <article class="paper-body">
              <p class="paper-type">Conference paper</p>

              <h3>
                <a href="https://doi.org/10.1109/ICCBD53833.2021.00192">
                  Carbon emission forecast of China Transport Industry
                  Based on Grey - Markov
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, J. Wang, X. Shao
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  International Conference on Computing and Big Data
                </span> (ICCBD).
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.1109/ICCBD53833.2021.00192">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2020">
            <div class="paper-year"><time datetime="2020">2020</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.23977/erej.2020.040110">
                  Research on Prediction and Optimization of Slope Deformation
                  in Mining Area
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, H. Zhang, X. Tao, W. Chu
              </p>

              <p class="paper-venue">
                <span class="journal-name">
                  Environment, Resource and Ecology Journal
                </span>, 4, 66–69.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.23977/erej.2020.040110">DOI ↗</a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2020">
            <div class="paper-year"><time datetime="2020">2020</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.28933/esciences-2020-01-1805">
                  Optimization of Task Pricing Based on Multiple Regression
                  Analysis and Game Theory
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, Hongyan Bao, Hairui Zhang
              </p>

              <p class="paper-venue">
                <span class="journal-name">Journal of eSciences</span>, 3, 9.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.28933/esciences-2020-01-1805">
                  DOI ↗
                </a>
              </div>
            </article>
          </li>

          <li class="publication" data-year="2020">
            <div class="paper-year"><time datetime="2020">2020</time></div>
            <article class="paper-body">
              <h3>
                <a href="https://doi.org/10.28933/arr-2020-06-2205">
                  Predicting Traffic Congestion Time Based on Kalman
                  Filter Algorithm
                </a>
              </h3>

              <p class="paper-authors">
                <strong>Tianlong Wang</strong>, Xiaorui Tao,
                Jiamei Zhang, Yulei Li
              </p>

              <p class="paper-venue">
                <span class="journal-name">Advances in Research and Reviews</span>,
                1, 7.
              </p>

              <div class="paper-links">
                <a href="https://doi.org/10.28933/arr-2020-06-2205">DOI ↗</a>
              </div>
            </article>
          </li>

        </ol>

        <p class="empty-state" id="publication-empty" hidden>
          No publications match your search. Try another keyword or year.
        </p>

      </div>
    </section>

    <!-- =====================================================
         SOFTWARE
         ===================================================== -->

    <section
      class="container section-layout"
      id="research-software"
      aria-labelledby="software-title"
    >

      <div class="section-heading">
        <p class="eyebrow">02 / Code & implementation</p>
        <h2 id="software-title">Research software</h2>

        <p>
          Implementations and case-study code for exploring and reproducing
          research workflows.
        </p>

        <a class="text-link" href="https://github.com/zjusuge">
          GitHub profile <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="section-content software-grid">

        <article class="software-card">
          <div class="software-top">
            <span class="software-category">Geohazard assessment</span>
            <span class="software-symbol" aria-hidden="true">↗</span>
          </div>

          <h3>DOME</h3>

          <p>
            An ensemble framework for debris-flow susceptibility,
            linking model optimization with SHAP interpretation.
          </p>

          <div class="software-tags">
            <span>Ensemble learning</span>
            <span>Interpretation</span>
          </div>

          <div class="software-links">
            <a href="https://github.com/zjusuge/DOME_Dynamic-Optimization-Meta-Ensemble-Framework-for-Computational-Debris-Flow-Risk-Assessment">
              Repository ↗
            </a>
            <a href="https://doi.org/10.1007/s11069-026-08307-2">Paper ↗</a>
            <a href="https://doi.org/10.5281/zenodo.16911533">Archive ↗</a>
          </div>
        </article>

        <article class="software-card">
          <div class="software-top">
            <span class="software-category">Small-sample prediction</span>
            <span class="software-symbol" aria-hidden="true">↗</span>
          </div>

          <h3>TabPFNv2.5-DebrisFlow</h3>

          <p>
            A debris-flow volume benchmark comparing TabPFN-2.5 with
            machine-learning baselines.
          </p>

          <div class="software-tags">
            <span>Tabular learning</span>
            <span>Benchmarking</span>
          </div>

          <div class="software-links">
            <a href="https://github.com/zjusuge/TabPFNv2.5-DebrisFlow">
              Repository ↗
            </a>
          </div>
        </article>

        <article class="software-card">
          <div class="software-top">
            <span class="software-category">Catchment hydrology</span>
            <span class="software-symbol" aria-hidden="true">↗</span>
          </div>

          <h3>BWSD</h3>

          <p>
            Fengshuwan case-study code for calculating daily Basin
            Water Storage Degree.
          </p>

          <div class="software-tags">
            <span>Water storage</span>
            <span>Case study</span>
          </div>

          <div class="software-links">
            <a href="https://github.com/zjusuge/bwsd-fengshuwan-case">
              Repository ↗
            </a>
          </div>
        </article>

        <article class="software-card">
          <div class="software-top">
            <span class="software-category">Hydrological prediction</span>
            <span class="software-symbol" aria-hidden="true">↗</span>
          </div>

          <h3>HydroPIML-RS</h3>

          <p>
            Fengshuwan case-study code for short-lead runoff and
            water-stage prediction.
          </p>

          <div class="software-tags">
            <span>Runoff</span>
            <span>Water stage</span>
          </div>

          <div class="software-links">
            <a href="https://github.com/zjusuge/hydropiml-rs-fengshuwan-case">
              Repository ↗
            </a>
          </div>
        </article>

      </div>
    </section>

    <!-- =====================================================
         EDUCATION
         ===================================================== -->

    <section
      class="container section-layout"
      id="education"
      aria-labelledby="education-title"
    >

      <div class="section-heading">
        <p class="eyebrow">03 / Academic training</p>
        <h2 id="education-title">Education</h2>
        <p>Doctoral education and international research training.</p>
      </div>

      <div class="section-content">
        <ol class="timeline">

          <li class="timeline-item">
            <p class="record-date">
              September 2022 — June 2027 <span>(expected)</span>
            </p>

            <h3>Zhejiang University</h3>

            <p class="timeline-role">PhD Student · Ocean College</p>

            <p class="muted">
              Supervisor:
              <a href="https://person.zju.edu.cn/0096428">Prof. Hongyue Sun</a>
              <span class="inline-separator" aria-hidden="true">·</span>
              China
            </p>
          </li>

          <li class="timeline-item">
            <p class="record-date">September 2024 — September 2026</p>

            <h3>Nanyang Technological University</h3>

            <p class="timeline-role">
              Joint Doctoral Research Training
            </p>

            <p class="muted">
              School of Civil and Environmental Engineering<br>
              Host supervisor:
              <a href="https://dr.ntu.edu.sg/entities/person/Chu-Jian">
                Prof. Chu Jian
              </a>
              <span class="inline-separator" aria-hidden="true">·</span>
              Singapore
            </p>
          </li>

        </ol>
      </div>
    </section>

    <!-- =====================================================
         FUNDING
         Amounts are shown in details, not as promotional counters.
         ===================================================== -->

    <section
      class="container section-layout"
      id="research-funding"
      aria-labelledby="funding-title"
    >

      <div class="section-heading">
        <p class="eyebrow">04 / Research support</p>
        <h2 id="funding-title">Funding &amp; projects</h2>

        <p>
          Individual research support, a doctoral mobility scholarship,
          and collaborative projects.
        </p>
      </div>

      <div class="section-content">

        <h3 class="subsection-title">Individual funding &amp; scholarships</h3>

        <div class="funding-list">

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">January 2025 — December 2026</p>

              <h4>
                Young Elite Scientists Sponsorship Program
                <span class="title-qualifier">Doctoral Student Special Plan</span>
              </h4>

              <p class="muted">
                China Association for Science and Technology
              </p>
            </div>

            <span class="role-label">PI</span>

            <details class="funding-details">
              <summary>Project details</summary>
              <div class="details-body">
                <p>
                  Spatiotemporal Dynamic Forecasting and Interpretive Analysis
                  System for Debris Flows in Small Watersheds.
                </p>
                <p>
                  Project ID: 156-O-170-0000603-2<br>
                  Funding: RMB 40,000.
                </p>
              </div>
            </details>
          </article>

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">June 2025 — June 2027</p>

              <h4>Seed Fund Cultivation Project of Ocean College</h4>

              <p class="muted">Zhejiang University</p>
            </div>

            <span class="role-label">PI</span>

            <details class="funding-details">
              <summary>Project details</summary>
              <div class="details-body">
                <p>
                  Research on Intelligent Debris Flow Forecasting Methods
                  for Small Watersheds Based on Multi-scale Hydrodynamic
                  Coupling Mechanisms.
                </p>
                <p>
                  Grant No. 2025BS004<br>
                  Funding: RMB 50,000.
                </p>
              </div>
            </details>
          </article>

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">June 2025 — June 2026</p>

              <h4>Outstanding Doctoral Dissertation Award Cultivation Grant</h4>

              <p class="muted">Zhejiang University</p>
            </div>

            <span class="role-label">PI</span>

            <details class="funding-details">
              <summary>Project details</summary>
              <div class="details-body">
                <p>
                  Spatiotemporal Dynamic Forecasting and Interpretive Analysis
                  System for Debris Flows in Small Watersheds.
                </p>
                <p>
                  Grant No. 825011A<br>
                  Funding: RMB 36,000.<br>
                  Completed; final evaluation: Excellent.
                </p>
              </div>
            </details>
          </article>

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">September 2024 — September 2026</p>

              <h4>National Construction of High-Level Universities Program</h4>

              <p class="muted">China Scholarship Council</p>
            </div>

            <span class="role-label role-neutral">Recipient</span>

            <details class="funding-details">
              <summary>Scholarship details</summary>
              <div class="details-body">
                <p>
                  Research on Early Spatiotemporal Prediction of Debris Flows
                  and Disaster Control in Small Watersheds.
                </p>
                <p>
                  Grant No. 202406320358<br>
                  Support: RMB 300,000.
                </p>
              </div>
            </details>
          </article>

        </div>

        <h3 class="subsection-title subsection-spaced">
          Collaborative research projects
        </h3>

        <div class="funding-list">

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">January 2023 — December 2027</p>

              <h4>Key Program</h4>

              <p class="muted">National Natural Science Foundation of China</p>
            </div>

            <span class="role-label role-neutral">Co-Investigator</span>

            <details class="funding-details">
              <summary>Project details</summary>
              <div class="details-body">
                <p>
                  Early Forecasting and Disaster Control Methods for Debris
                  Flows in Small Watersheds Based on Hydrodynamic Analysis.
                </p>
                <p>
                  Grant No. 42230702<br>
                  Total project budget: RMB 2,730,000.
                </p>
              </div>
            </details>
          </article>

          <article class="funding-item">
            <div class="funding-main">
              <p class="record-date">January 2019 — December 2021</p>

              <h4>Young Scientists Fund</h4>

              <p class="muted">National Natural Science Foundation of China</p>
            </div>

            <span class="role-label role-neutral">Co-Investigator</span>

            <details class="funding-details">
              <summary>Project details</summary>
              <div class="details-body">
                <p>
                  Research on Deformation Prediction Models and Instability
                  Criterion Methods for Reservoir Bank Slopes Based on
                  Copula Theory.
                </p>
                <p>
                  Grant No. 51809151<br>
                  Total project budget: RMB 250,000.<br>
                  Completed.
                </p>
              </div>
            </details>
          </article>

        </div>
      </div>
    </section>

    <!-- =====================================================
         ACADEMIC RECORD
         Native details elements keep the complete record accessible.
         ===================================================== -->

    <section
      class="container section-layout"
      id="academic-record"
      aria-labelledby="record-title"
    >

      <div class="section-heading">
        <p class="eyebrow">05 / Recognition & experience</p>
        <h2 id="record-title">Academic record</h2>

        <p>
          Honors, competition awards, intellectual property,
          and activities beyond research.
        </p>

        <button
          class="text-button"
          id="print-page"
          type="button"
          hidden
        >
          Print full profile <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div class="section-content">

        <details class="archive" id="honors" open>
          <summary>
            <span>Honors &amp; scholarships</span>
            <span class="archive-symbol" aria-hidden="true">+</span>
          </summary>

          <div class="archive-body">
            <ul class="record-list">
              <li>
                <span class="record-date">2025 · 2021</span>
                <div><strong>National Scholarship</strong><p>China</p></div>
              </li>
              <li>
                <span class="record-date">2024</span>
                <div>
                  <strong>Chinese Government Scholarship</strong>
                  <p>China Scholarship Council</p>
                </div>
              </li>
              <li>
                <span class="record-date">2023</span>
                <div>
                  <strong>China Harbour Engineering Company Scholarship</strong>
                  <p>CHEC</p>
                </div>
              </li>
              <li>
                <span class="record-date">2022</span>
                <div>
                  <strong>Outstanding Graduate</strong>
                  <p>
                    City Underground Space Engineering Professional
                    Committee, CSRME
                  </p>
                </div>
              </li>
              <li>
                <span class="record-date">2022</span>
                <div><strong>Yunneng Electric Power Innovation Scholarship</strong></div>
              </li>
              <li>
                <span class="record-date">2020</span>
                <div><strong>Wang Shuopeng Scholarship</strong></div>
              </li>
              <li>
                <span class="record-date">2019–2022</span>
                <div>
                  <strong>First-Class Academic Scholarship</strong>
                  <p>University level · Four consecutive years</p>
                </div>
              </li>
              <li>
                <span class="record-date">2019–2021</span>
                <div>
                  <strong>National Encouragement Scholarship</strong>
                  <p>Three consecutive years</p>
                </div>
              </li>
            </ul>
          </div>
        </details>

        <details class="archive" id="competitions">
          <summary>
            <span>Competition awards</span>
            <span class="archive-symbol" aria-hidden="true">+</span>
          </summary>

          <div class="archive-body">
            <ul class="record-list">

              <li>
                <span class="record-date">Nov 2025</span>
                <div>
                  <strong>Silver Award</strong>
                  <p>
                    China International College Students’ Innovation Competition,
                    Singapore Regional
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Aug 2024</span>
                <div>
                  <strong>Silver Award</strong>
                  <p>
                    Zhejiang International College Students’ Innovation
                    Competition (Internet+), China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">May 2024</span>
                <div>
                  <strong>Bronze Award</strong>
                  <p>
                    The 14th “Challenge Cup” Zhejiang Undergraduate
                    Entrepreneurship Plan Competition, China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Jun 2023</span>
                <div>
                  <strong>Silver Award</strong>
                  <p>
                    The 15th “Dandelion” University Student Entrepreneurship
                    Competition, Zhejiang University
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Apr 2022</span>
                <div>
                  <strong>Honorable Mention</strong>
                  <p>Interdisciplinary Contest in Modeling (MCM/ICM), USA</p>
                </div>
              </li>

              <li>
                <span class="record-date">Aug 2021</span>
                <div>
                  <strong>Second Prize</strong>
                  <p>
                    The 14th National University Student Social Practice and
                    Science Contest on Energy Saving and Emission Reduction,
                    China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Jul 2021</span>
                <div>
                  <strong>First Prize (Regional) · Third Prize (National)</strong>
                  <p>
                    The 8th National Financial and Securities Investment
                    Simulation Training Contest, China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Jun 2021</span>
                <div>
                  <strong>Grand Prize</strong>
                  <p>
                    The 3rd National College Student Structural Design
                    Information Technology Competition, China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">May 2021</span>
                <div>
                  <strong>Third Prize</strong>
                  <p>
                    The 13th “Challenge Cup” National Undergraduate Curricular
                    Academic Science and Technology Works Conference
                    (Hubei), China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Feb 2021</span>
                <div>
                  <strong>Honorable Mention</strong>
                  <p>Mathematical Contest in Modeling (MCM/ICM), USA</p>
                </div>
              </li>

              <li>
                <span class="record-date">Nov 2020</span>
                <div>
                  <strong>Second Prize</strong>
                  <p>
                    Contemporary Undergraduate Mathematical Contest in Modeling
                    (Hubei), China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Jul 2020</span>
                <div>
                  <strong>Third Prize</strong>
                  <p>
                    The 5th National Construction College Construction
                    Technology Application Skills Competition (Hubei), China
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </details>

        <details class="archive" id="patents">
          <summary>
            <span>Patents &amp; patent applications</span>
            <span class="archive-symbol" aria-hidden="true">+</span>
          </summary>

          <div class="archive-body">
            <!-- Legal statuses are deliberately not inferred from identifiers. -->
            <ol class="patent-list">

              <li>
                <h3>
                  Monitoring and Early Warning Method and System for
                  Rainfall-induced Debris Flow
                </h3>
                <p>
                  H. Sun, X. Wang, <strong>Tianlong Wang</strong>,
                  R. Tang, R. Luo
                </p>
                <p class="patent-meta">Japan · No. 2024-017304 · 2024</p>
              </li>

              <li>
                <h3>
                  Early Warning and Mitigation Method for Debris Flow
                  Disasters in Small Watersheds
                </h3>
                <p>
                  X. Wang, H. Sun, S. Shao, R. Luo,
                  <strong>Tianlong Wang</strong>
                </p>
                <p class="patent-meta">China · CN118262481A · 2024</p>
              </li>

              <li>
                <h3>
                  Monitoring and Early Warning Method and System for
                  Rainfall-induced Landslides
                </h3>
                <p>
                  X. Wang, H. Sun, <strong>Tianlong Wang</strong>,
                  R. Tang, R. Luo
                </p>
                <p class="patent-meta">China · CN117854239A · 2024</p>
              </li>

              <li>
                <h3>
                  Landslide Displacement Prediction Method Based on
                  IVMD-IAO-BiLSTM
                </h3>
                <p>
                  <strong>Tianlong Wang</strong>, H. Sun, Z. Chu,
                  R. Luo, X. Wang
                </p>
                <p class="patent-meta">China · CN116757323A · 2023</p>
              </li>

              <li>
                <h3>
                  Eccentric Hook-shaped Expansible Pre-stressed Anchoring
                  Structure and Its Anchoring Method
                </h3>
                <p>
                  J. Liu, Z. Li, <strong>Tianlong Wang</strong>, et al.
                </p>
                <p class="patent-meta">China · CN113718767B · 2023</p>
              </li>

              <li>
                <h3>Method for Repairing Dam Crack Defects Using Magnetic Mortar</h3>
                <p>
                  J. Liu, Z. Li, <strong>Tianlong Wang</strong>, et al.
                </p>
                <p class="patent-meta">China · CN114396022A · 2022</p>
              </li>

              <li>
                <h3>
                  Device and Method for Obtaining the Position of Liquid
                  Displacement Surface in Rock Cracks
                </h3>
                <p>
                  J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang,
                  <strong>Tianlong Wang</strong>, et al.
                </p>
                <p class="patent-meta">China · CN111595550B · 2022</p>
              </li>

              <li>
                <h3>Pile Structure and Construction Method in Coral Sand Environment</h3>
                <p>
                  J. Liu, Q. Shi, Z. Wei, S. Li, L. Tang,
                  <strong>Tianlong Wang</strong>, et al.
                </p>
                <p class="patent-meta">China · CN110886291B · 2021</p>
              </li>

            </ol>
          </div>
        </details>

        <details class="archive" id="service">
          <summary>
            <span>Service, leadership &amp; other experience</span>
            <span class="archive-symbol" aria-hidden="true">+</span>
          </summary>

          <div class="archive-body">
            <ul class="record-list">

              <li>
                <span class="record-date">Jul–Sep 2023</span>
                <div>
                  <strong>Intern</strong>
                  <p>
                    China International Science and Technology Exchange Center,
                    China Association for Science and Technology,
                    Beijing, China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">2022–2024</span>
                <div>
                  <strong>President</strong>
                  <p>
                    Student Fitness Club, Ocean College, Zhejiang University<br>
                    June 2022 — June 2024 · Zhoushan, China
                  </p>
                </div>
              </li>

              <li>
                <span class="record-date">Since Nov 2019</span>
                <div>
                  <strong>Independent Poet</strong>
                  <p>Poetry writing and publication</p>
                </div>
              </li>

              <li>
                <span class="record-date">Jul–Aug 2019</span>
                <div>
                  <strong>Volunteer Teacher</strong>
                  <p>Baihuaping Community, Shennongjia, China</p>
                </div>
              </li>

              <li>
                <span class="record-date">Jun–Jul 2019</span>
                <div>
                  <strong>Intern</strong>
                  <p>
                    Yujing Tiandi Project, Kunfa Construction Co., Ltd.,
                    Yichang, China
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </details>

        <aside class="beyond-research" id="beyond-research">
          <p class="eyebrow">Beyond research</p>
          <h3>A life beyond models.</h3>
          <p>
            I write poetry, enjoy fitness, and take part in community activities.
            My debut poetry collection,
            <cite>Suganniran</cite>, was published in China in February 2025.
          </p>
        </aside>

      </div>
    </section>

    <!-- =====================================================
         CONTACT
         ===================================================== -->

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-inner">

        <div>
          <p class="eyebrow">06 / Get in touch</p>
          <h2 id="contact-title">Let’s discuss research.</h2>

          <p class="contact-description">
            I welcome enquiries about postdoctoral opportunities following
            my expected PhD completion in June 2027, research collaborations,
            and the methods or software presented here.
          </p>
        </div>

        <div class="contact-details">
          <p class="contact-label">Email</p>

          <a class="contact-email" href="mailto:tianlong_wang@zju.edu.cn">
            tianlong_wang@zju.edu.cn
            <span aria-hidden="true">↗</span>
          </a>

          <p class="contact-affiliation">
            Zhejiang University<br>
            Joint doctoral research training at NTU
          </p>

          <div class="contact-links">
            <a href="https://scholar.google.com/citations?user=JNiHto0AAAAJ">
              Scholar
            </a>
            <a href="https://github.com/zjusuge">GitHub</a>
            <a href="https://orcid.org/0000-0002-0598-5481">ORCID</a>
          </div>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>
        © <span id="copyright-year">2026</span> Tianlong Wang
        <span class="footer-separator" aria-hidden="true">·</span>
        Personal academic website
      </p>

      <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </div>
  </footer>

</body>
</html>
