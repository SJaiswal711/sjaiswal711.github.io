---
permalink: /
title: "About Me"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>
  :root {
    --port-primary: #2c3e50;
    --port-text: #3b3b3b;
    --port-muted: #64748b;
    --port-bg: #ffffff;
    --port-border: #e5e7eb;
  }

  /* ================================
     Page
     ================================ */

  body {
    background-color: var(--port-bg);
    color: var(--port-text);
  }

  .page__content {
    color: var(--port-text);
  }

  .page__title {
    color: var(--port-primary) !important;
    font-weight: 700 !important;
  }

  /* ================================
     Section headings
     ================================ */

  .section-title {
    margin-top: 45px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--port-border);

    color: var(--port-primary) !important;
    font-size: 1.15em !important;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ================================
     Main text
     ================================ */

  .content-text {
    margin-bottom: 20px;

    color: var(--port-text) !important;
    font-size: 0.95em;
    line-height: 1.7;

    text-align: justify;
    text-justify: inter-word;
  }

  /* ================================
     Research-interest pills
     ================================ */

  .interest-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 15px;
    margin-bottom: 30px;
  }

  .pill {
    display: inline-block;

    padding: 6px 14px;

    background-color: var(--port-primary);
    color: #ffffff !important;

    border-radius: 4px;

    font-size: 0.85em;
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  /* ================================
     DARK MODE
     ================================ */

  html[data-theme="dark"] {
    --port-primary: #9ec5ff;
    --port-text: #e5e7eb;
    --port-muted: #a0aec0;
    --port-bg: #111827;
    --port-border: #374151;
  }

  html[data-theme="dark"] body {
    background-color: #111827 !important;
    color: #e5e7eb !important;
  }

  html[data-theme="dark"] .page__content {
    background-color: #111827 !important;
    color: #e5e7eb !important;
  }

  html[data-theme="dark"] .page__title {
    color: #9ec5ff !important;
  }

  html[data-theme="dark"] .section-title {
    color: #9ec5ff !important;
    border-bottom-color: #374151 !important;
  }

  html[data-theme="dark"] .content-text {
    color: #e5e7eb !important;
  }

  html[data-theme="dark"] .pill {
    background-color: #263b55 !important;
    color: #e5e7eb !important;
  }

  /* ================================
     MOBILE
     ================================ */

  @media (max-width: 768px) {
    .content-text {
      text-align: left;
    }

    .interest-pills {
      gap: 7px;
    }

    .pill {
      font-size: 0.8em;
      padding: 5px 11px;
    }
  }
</style>

<div class="content-text">
  I’m interested in Bayesian inference, cosmology, astrophysics, exoplanetary
  science, and machine learning applications in scientific research. I enjoy
  exploring how observational data, statistics, and computational methods can
  help uncover hidden patterns in complex systems, from exoplanet data to the
  Cosmic Microwave Background (CMB). I’m also interested in understanding the
  theoretical foundations behind these physical systems.
</div>

<div class="content-text">
  My research experience spans cosmology, astrophysics, exoplanetary science,
  and computational research. I have worked on astronomical data analysis,
  cosmological simulations, Bayesian inference, machine learning, and
  computational modelling.
</div>

<h2 class="section-title">Research Interests</h2>

<div class="interest-pills">
  <span class="pill">Cosmology &amp; Astrophysics</span>
  <span class="pill">Early-Universe Cosmology</span>
  <span class="pill">Cosmic Microwave Background</span>
  <span class="pill">Large-Scale Structure</span>
  <span class="pill">Exoplanetary Science</span>
  <span class="pill">Bayesian Inference</span>
  <span class="pill">Machine Learning</span>
  <span class="pill">Computational Physics</span>
</div>

<div class="content-text">
  Overall, I like understanding physical systems through
  <strong>theory, simulations, and data-driven approaches</strong> —
  basically trying to understand the universe one confusing plot at a time.
</div>
