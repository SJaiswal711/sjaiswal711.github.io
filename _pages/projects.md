---
layout: single
title: "Research & Skills"
permalink: /research/
author_profile: false
---

<style>

/* =========================================================
   PROJECT PAGE VARIABLES
   ========================================================= */

:root {
  --port-primary: #2c3e50;
  --port-primary-light: #5b7695;
  --port-text: #3b3b3b;
  --port-muted: #64748b;
  --port-bg: #ffffff;
  --port-card: #fafbfc;
  --port-border: #e5e7eb;
  --port-hover: #f8fafc;
}


/* =========================================================
   HEADER
   ========================================================= */

.masthead,
.masthead__inner-wrap,
.masthead__menu,
.masthead__menu ul,
.greedy-nav {
  background: var(--global-bg-color) !important;
}

.masthead {
  border-bottom: 1px solid var(--global-border-color) !important;
}

.masthead a,
.masthead__menu-item,
.masthead__menu-item a,
.greedy-nav a,
.greedy-nav .visible-links,
.greedy-nav .visible-links li,
.greedy-nav .visible-links a {
  background: transparent !important;
  color: var(--global-masthead-link-color) !important;
}

.masthead a:hover,
.greedy-nav a:hover {
  background: transparent !important;
  color: var(--global-masthead-link-color-hover) !important;
}


/* =========================================================
   PAGE TITLE
   ========================================================= */

.page__title {
  color: var(--port-primary) !important;
  font-weight: 700 !important;
}


/* =========================================================
   SECTION TITLES
   ========================================================= */

.portfolio-section-title {
  margin: 42px 0 24px;
  padding-bottom: 10px;

  border-bottom: 1px solid var(--port-border);

  color: var(--port-primary) !important;

  font-size: 1.05em !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}


/* =========================================================
   TECHNICAL SKILLS
   ========================================================= */

.skills-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;

  margin-bottom: 45px;
}

.skill-card {
  padding: 20px 21px 19px;

  background: var(--port-card);

  border: 1px solid var(--port-border);
  border-radius: 8px;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-2px);

  border-color: #cbd5e1;

  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.045);
}

.skill-card-title {
  display: flex;
  align-items: center;

  gap: 9px;

  margin-bottom: 14px;

  color: var(--port-muted);

  font-size: 0.78em;
  font-weight: 700;

  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.skill-card-title i {
  color: var(--port-primary);

  font-size: 0.95em;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.skill-badge {
  display: inline-flex;
  align-items: center;

  gap: 7px;

  padding: 6px 10px;

  background: var(--port-bg);

  border: 1px solid var(--port-border);
  border-radius: 5px;

  color: var(--port-text);

  font-size: 0.81em;
  font-weight: 500;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.skill-badge:hover {
  transform: translateY(-1px);

  background: var(--port-hover);

  border-color: #94a3b8;

  color: var(--port-primary);
}

.skill-badge i {
  color: var(--port-muted);

  font-size: 0.92em;
}

.skill-badge img {
  width: 16px;
  height: 16px;

  object-fit: contain;
}


/* =========================================================
   PROJECT CARDS
   ========================================================= */

.story-card {
  background: var(--port-card);

  border: 1px solid var(--port-border);
  border-left: 4px solid var(--port-primary);

  border-radius: 9px;

  padding: 30px;

  margin-bottom: 28px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.025);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.story-card:hover {
  transform: translateY(-2px);

  box-shadow: 0 9px 28px rgba(0, 0, 0, 0.05);
}

.project-title {
  margin: 0 0 8px;

  color: var(--port-primary) !important;

  font-size: 1.22em;
  font-weight: 750;

  line-height: 1.4;
}

.project-meta {
  margin-bottom: 17px;

  color: var(--port-muted);

  font-size: 0.82em;
}

.story-hook {
  margin-bottom: 19px;

  color: var(--port-text);

  font-size: 0.94em;

  line-height: 1.75;

  text-align: justify;
}


/* =========================================================
   EXPAND BUTTON
   ========================================================= */

.unfold-prompt {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 0;

  background: transparent !important;

  border: none;

  color: #3172b4;

  font-size: 0.87em;
  font-weight: 600;

  cursor: pointer;

  transition: color 0.25s ease;
}

.unfold-prompt:hover {
  color: var(--port-primary);
}

.unfold-prompt i {
  transition: transform 0.3s ease;
}

.unfold-prompt.open i {
  transform: rotate(180deg);
}


/* =========================================================
   EXPANDED PROJECT DETAILS
   ========================================================= */

.journey-container {
  max-height: 0;

  opacity: 0;

  overflow: hidden;

  transition:
    max-height 0.7s ease,
    opacity 0.4s ease;
}

.journey-container.expanded {
  max-height: 1800px;

  opacity: 1;

  margin-top: 27px;
  padding-top: 24px;

  border-top: 1px dashed var(--port-border);
}

.detail-title {
  margin: 0 0 10px;

  color: var(--port-primary);

  font-size: 0.98em;
  font-weight: 700;
}

.detail-list {
  margin: 0 0 18px;
}

.detail-list li {
  margin-bottom: 7px;

  color: var(--port-text);

  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: 17px;
}

.project-tag {
  display: inline-block;

  padding: 5px 9px;

  background: transparent;

  border: 1px solid var(--port-border);
  border-radius: 4px;

  color: var(--port-muted);

  font-size: 0.76em;
}


/* =========================================================
   DARK MODE
   ========================================================= */

html[data-theme="dark"] {
  --port-primary: #9ec5ff;
  --port-primary-light: #b9d3fa;
  --port-text: #e5e7eb;
  --port-muted: #9ca3af;
  --port-bg: #111827;
  --port-card: #172033;
  --port-border: #374151;
  --port-hover: #1f2937;
}

html[data-theme="dark"] .skill-card {
  background: #172033;

  border-color: #374151;

  box-shadow: none;
}

html[data-theme="dark"] .skill-card:hover {
  border-color: #4b5563;

  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.18);
}

html[data-theme="dark"] .skill-card-title {
  color: #9ca3af;
}

html[data-theme="dark"] .skill-card-title i {
  color: #9ec5ff;
}

html[data-theme="dark"] .skill-badge {
  background: #111827;

  border-color: #374151;

  color: #e5e7eb;
}

html[data-theme="dark"] .skill-badge:hover {
  background: #1f2937;

  border-color: #64748b;

  color: #9ec5ff;
}

html[data-theme="dark"] .skill-badge i {
  color: #9ca3af;
}

html[data-theme="dark"] .story-card {
  background: #172033;

  border-color: #374151;

  border-left-color: #9ec5ff;

  box-shadow: none;
}

html[data-theme="dark"] .project-title,
html[data-theme="dark"] .portfolio-section-title,
html[data-theme="dark"] .detail-title {
  color: #9ec5ff !important;
}

html[data-theme="dark"] .story-hook,
html[data-theme="dark"] .detail-list li {
  color: #e5e7eb;
}

html[data-theme="dark"] .project-meta,
html[data-theme="dark"] .project-tag {
  color: #9ca3af;
}

html[data-theme="dark"] .project-tag {
  border-color: #374151;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 850px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .story-card {
    padding: 23px;
  }

  .story-hook {
    text-align: left;
  }

  .project-title {
    font-size: 1.1em;
  }
}

</style>


<!-- =========================================================
     TECHNICAL SKILLS
     ========================================================= -->

<div class="portfolio-section-title">
  Technical Skills
</div>

<div class="skills-grid">

  <!-- Programming & Computing -->
  <div class="skill-card">

    <div class="skill-card-title">
      <i class="fas fa-code"></i>
      Programming &amp; Computing
    </div>

    <div class="skill-badges">

      <span class="skill-badge">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
        >
        Python
      </span>

      <span class="skill-badge">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C/C++"
        >
        C/C++
      </span>

      <span class="skill-badge">MATLAB</span>
      <span class="skill-badge">Fortran</span>
      <span class="skill-badge">R</span>

      <span class="skill-badge">
        <i class="fas fa-server"></i>
        Linux
      </span>

      <span class="skill-badge">
        <i class="fas fa-microchip"></i>
        HPC
      </span>

      <span class="skill-badge">
        <i class="fas fa-network-wired"></i>
        MPI
      </span>

      <span class="skill-badge">OpenMP</span>
      <span class="skill-badge">SLURM</span>
      <span class="skill-badge">Bash</span>

      <span class="skill-badge">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
        >
        Git
      </span>

    </div>
  </div>


  <!-- Machine Learning & Data -->
  <div class="skill-card">

    <div class="skill-card-title">
      <i class="fas fa-brain"></i>
      Machine Learning &amp; Data
    </div>

    <div class="skill-badges">

      <span class="skill-badge">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
          alt="PyTorch"
        >
        PyTorch
      </span>

      <span class="skill-badge">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
          alt="TensorFlow"
        >
        TensorFlow
      </span>

      <span class="skill-badge">NumPy</span>
      <span class="skill-badge">SciPy</span>
      <span class="skill-badge">Pandas</span>
      <span class="skill-badge">scikit-learn</span>

      <span class="skill-badge">CNNs</span>
      <span class="skill-badge">U-Net</span>
      <span class="skill-badge">GANs</span>
      <span class="skill-badge">PINNs</span>

    </div>
  </div>


  <!-- Statistics & Inference -->
  <div class="skill-card">

    <div class="skill-card-title">
      <i class="fas fa-chart-line"></i>
      Statistics &amp; Inference
    </div>

    <div class="skill-badges">

      <span class="skill-badge">
        <i class="fas fa-chart-line"></i>
        Bayesian Inference
      </span>

      <span class="skill-badge">MCMC</span>
      <span class="skill-badge">Statistical Analysis</span>
      <span class="skill-badge">Hypothesis Testing</span>
      <span class="skill-badge">Numerical Methods</span>

    </div>
  </div>


  <!-- Cosmology & Astrophysics -->
  <div class="skill-card">

    <div class="skill-card-title">
      <i class="fas fa-globe"></i>
      Cosmology &amp; Astrophysics
    </div>

    <div class="skill-badges">

      <span class="skill-badge">CAMB</span>
      <span class="skill-badge">CLASS</span>
      <span class="skill-badge">HEALPix / healpy</span>
      <span class="skill-badge">Astropy</span>
      <span class="skill-badge">XSPEC</span>
      <span class="skill-badge">SAS</span>
      <span class="skill-badge">HEASoft</span>
      <span class="skill-badge">GSL</span>
      <span class="skill-badge">LAPACK</span>
      <span class="skill-badge">CFITSIO</span>

    </div>
  </div>

</div>


<!-- =========================================================
     RESEARCH PROJECTS
     ========================================================= -->

<div class="portfolio-section-title">
  Research Projects
</div>


<!-- =========================================================
     PROJECT 1 — SCOPE
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    Cosmological Parameter Estimation using SCoPE
  </h4>

  <div class="project-meta">
    Bayesian cosmological parameter inference
  </div>

  <p class="story-hook">
    I worked on the development and refinement of
    <strong>SCoPE (Slick Cosmological Parameter Estimator)</strong>,
    a parallelized MCMC framework for Bayesian cosmological parameter
    estimation.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('scope', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="scope">

    <div class="detail-title">
      Work carried out
    </div>

    <ul class="detail-list">

      <li>
        Refined and validated the SCoPE MCMC framework.
      </li>

      <li>
        Integrated Planck likelihoods through the <code>clik</code> interface.
      </li>

      <li>
        Validated ΛCDM and extended cosmological models.
      </li>

      <li>
        Developed a machine-learning emulator for Boltzmann-solver predictions.
      </li>

      <li>
        Explored PCA, Gaussian-process modelling, and neural-network emulation.
      </li>

      <li>
        Worked with MPI and scientific libraries in Linux/HPC environments.
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">CAMB</span>
      <span class="project-tag">MCMC</span>
      <span class="project-tag">Bayesian Inference</span>
      <span class="project-tag">PCA</span>
      <span class="project-tag">Gaussian Processes</span>
      <span class="project-tag">Machine Learning</span>
      <span class="project-tag">MPI</span>
    </div>

  </div>
</div>


<!-- =========================================================
     PROJECT 2 — CMB
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    CMB Analysis and Map Reconstruction
  </h4>

  <div class="project-meta">
    Planck-like simulations · foreground modelling · deep learning
  </div>

  <p class="story-hook">
    Developed realistic multi-frequency Planck-like simulations to study
    CMB temperature and E-mode polarization reconstruction, foreground
    contamination, instrumental effects, and beam deconvolution.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('cmb', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="cmb">

    <div class="detail-title">
      Work carried out
    </div>

    <ul class="detail-list">

      <li>
        Generated multi-frequency CMB temperature and E-mode simulations.
      </li>

      <li>
        Modelled asymmetric beam effects and scanning patterns.
      </li>

      <li>
        Included Galactic dust and synchrotron foregrounds.
      </li>

      <li>
        Simulated anisotropic instrumental noise.
      </li>

      <li>
        Developed a GAN/U-Net framework for CMB reconstruction.
      </li>

      <li>
        Studied foreground removal and beam deconvolution.
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">CMB</span>
      <span class="project-tag">Planck</span>
      <span class="project-tag">PySM</span>
      <span class="project-tag">HEALPix</span>
      <span class="project-tag">GAN</span>
      <span class="project-tag">U-Net</span>
    </div>

  </div>
</div>


<!-- =========================================================
     PROJECT 3 — WEAK LENSING
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    Field-Level Inference for Weak Lensing
  </h4>

  <div class="project-meta">
    ICTS-TIFR Program: The Concurrence of Mega-Surveys · 2026
  </div>

  <p class="story-hook">
    Worked on Bayesian field-level inference for weak-lensing observations,
    focusing on reconstructing the underlying dark-matter distribution
    directly from galaxy-survey data.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('lensing', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="lensing">

    <div class="detail-title">
      Work carried out
    </div>

    <ul class="detail-list">

      <li>
        Studied field-level Bayesian inference for weak lensing.
      </li>

      <li>
        Explored differentiable cosmological simulations.
      </li>

      <li>
        Investigated Hamiltonian Monte Carlo (HMC).
      </li>

      <li>
        Studied machine-learning approaches for field-level inference.
      </li>

      <li>
        Compared reconstructed dark-matter mass maps.
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">Weak Lensing</span>
      <span class="project-tag">Bayesian Inference</span>
      <span class="project-tag">HMC</span>
      <span class="project-tag">Differentiable Simulations</span>
    </div>

  </div>
</div>


<!-- =========================================================
     PROJECT 4 — BINARY SYSTEMS
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    Planetary Radius Distribution in Binary Systems
  </h4>

  <div class="project-meta">
    Exoplanet population statistics
  </div>

  <p class="story-hook">
    Investigating whether the planetary radius distribution and radius gap
    change when planets hosted by unresolved binary systems are treated
    probabilistically rather than as single-star systems.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('binary', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="binary">

    <div class="detail-title">
      Research questions
    </div>

    <ul class="detail-list">

      <li>
        How does the planetary radius distribution vary with binary separation?
      </li>

      <li>
        How does uncertainty in identifying the planet-hosting star affect inferred radii?
      </li>

      <li>
        How can host-star uncertainty influence population-level conclusions?
      </li>

      <li>
        Can probabilistic treatment of binary hosts alter the inferred radius gap?
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">Exoplanets</span>
      <span class="project-tag">Binary Stars</span>
      <span class="project-tag">Population Inference</span>
      <span class="project-tag">Statistics</span>
    </div>

  </div>
</div>


<!-- =========================================================
     PROJECT 5 — TRANSIT LIGHT CURVES
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    Machine Learning for Transit Light Curves
  </h4>

  <div class="project-meta">
    Inverse modelling of transiting objects
  </div>

  <p class="story-hook">
    Developed a deep-learning framework to reconstruct two-dimensional
    opacity maps of transiting objects from their one-dimensional stellar
    light curves.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('transit', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="transit">

    <div class="detail-title">
      Work carried out
    </div>

    <ul class="detail-list">

      <li>
        Generated synthetic transit datasets.
      </li>

      <li>
        Used BATMAN and EightBitTransit for transit modelling.
      </li>

      <li>
        Used Bézier-curve models and quadratic limb darkening.
      </li>

      <li>
        Reconstructed two-dimensional opacity distributions.
      </li>

      <li>
        Investigated anomalous transit signatures and complex transiting structures.
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">Transit Light Curves</span>
      <span class="project-tag">Deep Learning</span>
      <span class="project-tag">Inverse Modelling</span>
      <span class="project-tag">BATMAN</span>
    </div>

  </div>
</div>


<!-- =========================================================
     PROJECT 6 — X-RAY
     ========================================================= -->

<div class="story-card">

  <h4 class="project-title">
    X-ray Spectral Analysis of a Seyfert I Galaxy
  </h4>

  <div class="project-meta">
    M.Sc. Dissertation · IIT Mandi
  </div>

  <p class="story-hook">
    Studied the broadband X-ray spectrum and variability of a Narrow-Line
    Seyfert I galaxy to investigate physical processes associated with
    X-ray emission and accretion.
  </p>

  <button
    class="unfold-prompt"
    onclick="toggleProject('xray', this)"
  >
    Explore the project
    <i class="fas fa-chevron-down"></i>
  </button>

  <div class="journey-container" id="xray">

    <div class="detail-title">
      Work carried out
    </div>

    <ul class="detail-list">

      <li>
        Performed broadband X-ray spectral analysis.
      </li>

      <li>
        Used SAS, HEASoft, and XSPEC.
      </li>

      <li>
        Conducted time-resolved spectroscopy.
      </li>

      <li>
        Studied multi-wavelength correlations and spectral variability.
      </li>

      <li>
        Investigated X-ray emission and accretion processes.
      </li>

    </ul>

    <div class="project-tags">
      <span class="project-tag">X-ray Astronomy</span>
      <span class="project-tag">XSPEC</span>
      <span class="project-tag">HEASoft</span>
      <span class="project-tag">AGN</span>
    </div>

  </div>
</div>


<script>

function toggleProject(id, button) {

  const container = document.getElementById(id);

  if (container.classList.contains("expanded")) {

    container.classList.remove("expanded");

    button.classList.remove("open");

    button.innerHTML =
      'Explore the project <i class="fas fa-chevron-down"></i>';

  } else {

    container.classList.add("expanded");

    button.classList.add("open");

    button.innerHTML =
      'Collapse the project <i class="fas fa-chevron-up"></i>';

  }

}

</script>
