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
    --port-bg: #fdfdfd;
    --port-border: #eaeaea;
    --accent-color: #f0f7ff;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :root {
      --port-primary: #8ab4f8;
      --port-text: #e5e7eb;
      --port-muted: #a0aec0;
      --port-bg: #1a1a1a;
      --port-border: #333333;
      --accent-color: #243447;
    }

    body {
      background: #111111 !important;
      color: var(--port-text) !important;
    }

    .masthead,
    .masthead__inner-wrap,
    .masthead__menu,
    .masthead__menu ul,
    .greedy-nav {
      background: #111111 !important;
    }

    .masthead a,
    .masthead__menu-item a,
    .greedy-nav a {
      color: var(--port-text) !important;
    }
  }

  /* Header */
  .masthead {
    border-bottom: 1px solid var(--port-border) !important;
  }

  .masthead,
  .masthead__inner-wrap,
  .masthead__menu,
  .masthead__menu ul,
  .greedy-nav {
    background-color: var(--port-bg) !important;
  }

  .masthead a,
  .masthead__menu-item a,
  .greedy-nav a {
    background: transparent !important;
    color: var(--port-text) !important;
  }

  .masthead a:hover,
  .greedy-nav a:hover {
    color: var(--port-primary) !important;
  }

  /* Page title */
  .page__title {
    color: var(--port-primary) !important;
    font-weight: 700 !important;
  }

  /* Section headings */
  .section-title {
    margin-top: 45px;
    border-bottom: 1px solid var(--port-border);
    padding-bottom: 8px;
    text-transform: uppercase;
    color: var(--port-primary) !important;
    font-size: 1.15em !important;
    letter-spacing: 0.1em;
    font-weight: 700;
  }

  /* Main text */
  .content-text {
    text-align: justify;
    text-justify: inter-word;
    font-size: 0.95em;
    line-height: 1.7;
    margin-bottom: 20px;
    color: var(--port-text);
  }

  /* Research interest pills */
  .interest-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .pill {
    background-color: var(--port-primary);
    color: #ffffff;
    font-size: 0.85em;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 4px;
    letter-spacing: 0.03em;
  }

  @media (max-width: 768px) {
    .content-text {
      text-align: left;
    }

    .interest-pills {
      gap: 7px;
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
  <span class="pill">Cosmology & Astrophysics</span>
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
