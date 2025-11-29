// script.js

document.addEventListener("DOMContentLoaded", () => {
  initPageNav();
  const modernData = window.presentationData || window.siteDataV3;
  const legacyData = window.siteData;
  if (modernData) {
    renderAll(modernData);
    return;
  }
  if (legacyData) {
    renderAll(legacyData);
    return;
  }
  fetch("data2.json")
    .then((res) => res.json())
    .then((data) => renderAll(data))
    .catch((err) => {
      console.error("Error loading data2.json", err);
    });
});

function renderAll(data) {
  if (!data) return;
  if (data.sections) {
    renderV3(data);
    return;
  }
  renderLegacy(data);
}

function renderV3(data) {
  const meta = data.projectMeta || {};
  const sections = indexSections(data);
  renderMeta(meta, sections.home);
  renderHomeV3(meta, sections.home, sections.problem);
  renderProblemV3(sections.problem);
  renderResearchV3(sections.research);
  renderSolutionV3(sections.solution);
  renderDataV3(sections.data, meta);
  renderArchitectureV3(sections.architecture);
  renderDashboardV3(sections.dashboard);
  renderEthicsV3(sections.ethics);
  renderLessonsV3(sections.lessons);
  renderAppendixV3(sections.appendix);
  applyHeroBackdrops(sections, meta.hero);
  initLightbox();
}

function renderLegacy(data) {
  if (!data) return;
  renderTitle(data.title);
  renderHome(data);
  renderExecutiveSummary(data.executiveSummary);
  renderProblem(data.problemContext);
  renderGoals(data.proposedSolution?.goals);
  renderResearchPoints(data.researchAndInsights);
  renderSolution(data.proposedSolution);
  renderMetrics(data.metricsForSuccess);
  renderArchitecture(data.architecture);
  renderDataDesign(data.dataStructure);
  renderDataFlow(data.dataStructure);
  renderDashboard(data.dashboardLayer);
  renderDashboardInsights(data.dashboardLayer?.insights);
  renderEthics(data.ethicsAndSocialConsiderations);
  renderImpact(data.outcomesAndImpact, data.nextSteps);
  renderLessons(data.lessonsLearned);
  renderReferences(data.references);
  renderTableNote(data.sampleTableNote);
  initLightbox();
}

function indexSections(data) {
  const map = {};
  (data.sections || []).forEach((sec) => {
    if (sec?.id) map[sec.id] = sec;
  });
  map.home = map.home || data.homeSection;
  map.problem = map.problem || data.problemSection;
  map.research = map.research || data.researchSection;
  map.solution = map.solution || data.solutionSection;
  map.architecture = map.architecture || data.architectureSection;
  map.data = map.data || data.dataSection;
  map.dashboard = map.dashboard || data.dashboardSection;
  map.ethics = map.ethics || data.ethicsSection;
  map.lessons = map.lessons || data.lessonsSection;
  map.appendix = map.appendix || data.appendixSection;
  return map;
}

function renderMeta(meta, home) {
  const title = sanitizeText(meta.title || home?.title || "StudentHub");
  document.title = title;
  setText("site-title", title);
  setText("hero-heading", title);
  setText("site-subtitle", meta.tagline || "Master's Research Project");
}

function renderHomeV3(meta, home, problem) {
  if (!home) return;
  const intro = home.intro || meta.tagline;
  const exec = home.executiveSummary?.text || [];
  setText("home-intro", intro);
  setText("home-summary", Array.isArray(exec) ? exec.join("\n\n") : exec);
  const prob = problem?.bullets?.[0] || problem?.summary || "";
  setText("hero-problem", prob);
  setText("home-problem", prob);
}

function renderProblemV3(problem) {
  if (!problem) return;
  const bullets = problem.bullets || [];
  const overview = problem.overview || problem.summary || bullets[0] || "";
  const selected = problem.chosenProblem || problem.coreProblem || bullets[1] || "";
  const rationale = problem.selectionRationale || problem.solutionAngle || bullets[2] || "";
  const angle = problem.solutionAngle || bullets[3] || "";

  setText("problem-overview", overview);
  setText("problem-lifecycle", selected);
  setText("problem-gap", rationale);
  setText("solution-angle", angle);

  const list = document.getElementById("stakeholders-list");
  if (list) {
    list.innerHTML = "";
    if (problem.stakeholders?.length) {
      problem.stakeholders.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${sanitizeText(item.role)}:</strong> ${sanitizeText(item.pain)}`;
        list.appendChild(li);
      });
    }
  }

  const optionsList = document.getElementById("problem-options");
  if (optionsList) {
    optionsList.innerHTML = "";
    (problem.optionsSummary || []).forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Option:</strong> ${sanitizeText(item)}`;
      optionsList.appendChild(li);
    });
  }
}

function renderResearchV3(research) {
  if (!research) return;
  const summary = document.getElementById("research-summary");
  if (summary && research.summary) {
    summary.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = sanitizeText(research.summary);
    summary.appendChild(p);
  }
  const list = document.getElementById("research-list");
  if (list) {
    list.innerHTML = "";
    (research.keyFindings || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(item);
      list.appendChild(li);
    });
  }
}

function renderSolutionV3(solution) {
  if (!solution) return;
  setText("solution-overview", solution.intro);
  setText("data-foundation", (solution.keyFeatures || []).slice(0, 2).join(" • "));
  const goals = Array.isArray(solution.coreGoals) ? solution.coreGoals : [];
  const features = Array.isArray(solution.keyFeatures) ? solution.keyFeatures : [];
  const roles = [features[0], features[1], features[2]];
  setText("tech-stack", solution.architectureNote || features.slice(3).join(" • "));
  setText("role-students", roles[0]);
  setText("role-employers", roles[1]);
  setText("role-admins", roles[2]);
  renderGoals(goals);

  if (solution.strategy) {
    setText("strategy-statement", solution.strategy.statement);
    setText("strategy-vision", solution.strategy.vision);
    setText("strategy-users", solution.strategy.targetUsers);
    setText("strategy-differentiators", solution.strategy.differentiators);
    setText("strategy-risks", solution.strategy.risks);
    setText("strategy-swot-text", solution.strategy.swotText);

    const goalsList = document.getElementById("strategy-goals");
    if (goalsList) {
      goalsList.innerHTML = "";
      (solution.strategy.goals || []).forEach((g) => {
        const li = document.createElement("li");
        li.textContent = sanitizeText(g);
        goalsList.appendChild(li);
      });
    }
  }
}

function renderDataV3(dataSection, meta) {
  if (!dataSection) return;
  setText("data-summary", dataSection.datasetSummary || "");

  const entitiesList = document.getElementById("data-main-entities");
  if (entitiesList) {
    entitiesList.innerHTML = "";
    (dataSection.mainEntities || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(item);
      entitiesList.appendChild(li);
    });
  }
  setText("data-generation", (dataSection.generationLogic || []).join(" • "));
  setText("data-value", dataSection.valueForSolution || "");
  setText("data-erd-caption", dataSection.title ? `${dataSection.title} ERD` : "ERD overview");

  const dataHero = document.getElementById("data-hero");
  if (dataHero && (dataSection.hero || meta?.hero)) {
    dataHero.style.backgroundImage = `linear-gradient(135deg, rgba(8,14,35,0.9), rgba(8,14,35,0.75)), url(${dataSection.hero || meta.hero})`;
    dataHero.style.backgroundSize = "cover";
    dataHero.style.backgroundPosition = "center";
  }
}

function renderArchitectureV3(architecture) {
  if (!architecture) return;
  const business = (architecture.layers?.business || []).join(" • ");
  const isLayer = (architecture.layers?.is || []).join(" • ");
  const techLayer = (architecture.layers?.tech || []).join(" • ");

  setText("architecture-business", business);
  setText("architecture-information", isLayer);
  setText("architecture-technology", techLayer);

  setText("data-design-overview", architecture.erdSummary || "");
  setText("data-identity", business);
  setText("data-design-student", isLayer);
  setText("data-experience-skills", techLayer);
  setText("data-jobs-orgs", "");
  setText("data-matching", architecture.erdSummary || "");
  setText("data-analytics", "");
  setText("data-future", "");

  const behavioralList = document.getElementById("data-behavioral-list");
  if (behavioralList) behavioralList.innerHTML = "";
}

function renderDashboardV3(dashboard) {
  if (!dashboard) return;
  setText("dashboard-overview", dashboard.overview);
  setText("dashboard-student", dashboard.studentView?.bullets?.join(" • "));
  setText("dashboard-employer", dashboard.employerView?.bullets?.join(" • "));
  setText("dashboard-admin", dashboard.adminView?.bullets?.join(" • "));
  setText("dashboard-data", dashboard.exampleInsights?.join(" • "));
  renderDashboardInsights(dashboard.exampleInsights);
}

function renderEthicsV3(ethics) {
  if (!ethics) return;
  const aiList = document.getElementById("ethics-ai");
  const accessList = document.getElementById("ethics-accessibility");
  const summaryEl = document.getElementById("ethics-summary");
  const titleEl = document.getElementById("ethics-title");
  const privacyPromise = document.getElementById("ethics-privacy-promise");
  const accessibilityNote = document.getElementById("ethics-accessibility-note");

  if (titleEl && ethics.title) titleEl.textContent = sanitizeText(ethics.title);
  if (summaryEl && ethics.summary) summaryEl.textContent = sanitizeText(ethics.summary);

  const aiItems = ethics.aiPrivacy || [];
  if (aiList) {
    aiList.innerHTML = "";
    aiItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(item);
      aiList.appendChild(li);
    });
  }

  const accessItems = ethics.accessibility || [];
  if (accessList) {
    accessList.innerHTML = "";
    accessItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(item);
      accessList.appendChild(li);
    });
  }

  if (privacyPromise) {
    privacyPromise.textContent = sanitizeText(ethics.privacyPromise || "");
  }
  if (accessibilityNote) {
    accessibilityNote.textContent = sanitizeText(ethics.inclusionPromise || "");
  }
}

function renderLessonsV3(lessons) {
  if (!lessons) return;
  const container = document.getElementById("lessons-paragraphs");
  if (!container) return;
  container.innerHTML = "";
  (lessons.bullets || []).forEach((item) => {
    const p = document.createElement("p");
    p.textContent = sanitizeText(item);
    container.appendChild(p);
  });
}

function renderAppendixV3(appendix) {
  if (!appendix) return;
  const extras = document.getElementById("extras");
  const dashboardLink = document.getElementById("extras-dashboard");
  const githubLink = extras?.querySelector(".extras-card:nth-child(2) a");
  const appendixLinks = appendix.links || [];

  const dash = appendixLinks.find((l) => l.label.toLowerCase().includes("dashboard"));
  if (dash && dashboardLink) {
    dashboardLink.href = dash.url || "#";
    dashboardLink.classList.remove("disabled");
    dashboardLink.removeAttribute("aria-disabled");
  }

  const repo = appendixLinks.find((l) => l.label.toLowerCase().includes("github"));
  if (repo && githubLink) {
    githubLink.href = repo.url || "#";
    githubLink.classList.remove("disabled");
    githubLink.removeAttribute("aria-disabled");
    githubLink.textContent = repo.label;
  }
}

function applyHeroBackdrops(sections, fallbackHero) {
  const hero = (id) => {
    const hasHeroProp = sections[id] && Object.prototype.hasOwnProperty.call(sections[id], "hero");
    if (hasHeroProp) return sections[id].hero;
    // Only fall back to the meta hero for home; others stay clean if not defined.
    return id === "home" ? fallbackHero : undefined;
  };
  ["home", "problem", "research", "solution", "charter", "data", "architecture", "data-flow", "dashboard", "ethics", "lessons", "appendix"].forEach((id) => {
    applySectionHero(id === "appendix" ? "extras" : id, hero(id));
  });
}

function applySectionHero(sectionId, heroUrl) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const needsCustom =
    !heroUrl &&
    (sectionId === "ethics" ||
      sectionId === "architecture" ||
      sectionId === "home" ||
      sectionId === "problem" ||
      sectionId === "research" ||
      sectionId === "solution" ||
      sectionId === "data" ||
      sectionId === "dashboard" ||
      sectionId === "lessons" ||
      sectionId === "appendix");
  if (!heroUrl && !needsCustom) return;

  let hero = section.querySelector(".page-hero");
  if (!hero) {
    hero = document.createElement("div");
    hero.className = "page-hero";
    const first = section.firstElementChild;
    section.insertBefore(hero, first);
  }

  if (heroUrl) {
    hero.style.backgroundImage = `url(${heroUrl})`;
  } else if (sectionId === "home") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".home-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Executive Summary</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/1.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "problem") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".problem-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content problem-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Problem</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/2.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "research") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".research-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content research-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Research</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/3.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "solution") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".solution-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content solution-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Solution</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/4.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "data") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".data-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content data-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Data Design</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/5.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "dashboard") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".dashboard-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content dashboard-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Dashboard & Data Analysis</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/7.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "lessons") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".lessons-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content lessons-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Lessons Learned & Reflection</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/9.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "architecture") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".architecture-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "architecture-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="eyebrow">StudentHub</p>
          <h3>Architecture</h3>
        </div>
        <div class="arch-illustration" aria-hidden="true">
          <img src="assets/img/hero/6.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "appendix") {
    hero.classList.add("hero-architecture");
    if (!hero.querySelector(".appendix-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "home-hero-content appendix-hero-content";
      overlay.innerHTML = `
        <div class="arch-left">
          <p class="hero-heading-large">StudentHub</p>
          <p class="hero-subtitle-large">Appendix / Extra Section</p>
        </div>
        <div class="home-illustration" aria-hidden="true">
          <img src="assets/img/hero/10.png" alt="" />
        </div>
      `;
      hero.appendChild(overlay);
    }
  } else if (sectionId === "ethics") {
    hero.classList.add("hero-ethics");
    if (!hero.querySelector(".ethics-hero-content")) {
      const overlay = document.createElement("div");
      overlay.className = "ethics-hero-content";
      overlay.innerHTML = `
        <div class="ethics-left">
          <p class="eyebrow">StudentHub</p>
          <h3>Ethics & Trust</h3>
          <p class="ethics-sub">Privacy-first, consent-led, and inclusive by default.</p>
        </div>
        <div class="ethics-illustration" aria-hidden="true">
          <svg viewBox="0 0 320 260" role="presentation" focusable="false">
            <defs>
              <linearGradient id="ethicsShield" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#e2e8f0"/>
                <stop offset="100%" stop-color="#cbd5e1"/>
              </linearGradient>
              <linearGradient id="ethicsAccent" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#7dd3fc"/>
                <stop offset="100%" stop-color="#38bdf8"/>
              </LinearGradient>
            </defs>
            <g>
              <path d="M160 28 90 56v78c0 44 30 85 70 98 40-13 70-54 70-98V56l-70-28Z" fill="url(#ethicsShield)" stroke="#94a3b8" stroke-width="3" />
              <path d="M132 123 152 142 202 94" fill="none" stroke="url(#ethicsAccent)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="108" cy="182" r="14" fill="#38bdf8" opacity="0.8" />
              <circle cx="210" cy="182" r="14" fill="#0ea5e9" opacity="0.8" />
              <rect x="72" y="200" width="176" height="30" rx="12" ry="12" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="2" />
            </g>
          </svg>
        </div>
      `;
      hero.appendChild(overlay);
    }
  }
  const container = section.querySelector(".container");
  if (container) container.style.position = "relative";
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined && text !== null) {
    el.textContent = sanitizeText(text);
  }
}

function sanitizeText(value) {
  if (!value) return value;
  if (typeof value === "string") {
    return value.replace(/\uFFFD/g, "-");
  }
  return value;
}

function renderTitle(title) {
  if (!title) return;
  const safeTitle = sanitizeText(title);
  document.title = safeTitle;
  setText("site-title", safeTitle);
  setText("hero-heading", safeTitle);
}

function renderHome(data) {
  const { title, executiveSummary, problemContext } = data || {};
  setText("home-title", title);
  const intro = problemContext?.overview || executiveSummary?.text || "";
  setText("home-intro", intro ? shorten(intro, 320) : "");
  const summaryText = executiveSummary?.text || executiveSummary || "";
  setText("home-summary", summaryText);
  setText("hero-problem", problemContext?.overview || "");

  const list = document.getElementById("team-list");
  if (list) {
    list.innerHTML = "";
  }
}

function shorten(text, limit = 260) {
  if (!text || text.length <= limit) return text;
  const trimmed = text.slice(0, limit);
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${trimmed.slice(0, lastSpace > 0 ? lastSpace : limit)}...`;
}

function renderExecutiveSummary(summary) {
  const text = summary?.text || summary;
  setText("exec-summary", text);
}

function renderProblem(problem) {
  if (!problem) return;
  setText("home-problem", problem.overview);
  setText("problem-overview", problem.overview);
  setText("problem-lifecycle", problem.lifecycleGap);
  setText("problem-gap", problem.coreProblem || problem.gap);
  const angle = document.getElementById("solution-angle");
  if (angle && problem.solutionAngle) angle.textContent = problem.solutionAngle;
  const list = document.getElementById("stakeholders-list");
  if (!list || !problem.stakeholders) return;
  list.innerHTML = "";
  problem.stakeholders.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${sanitizeText(item.role)}:</strong> ${sanitizeText(item.pain)}`;
    list.appendChild(li);
  });
}

function renderGoals(goals) {
  const list = document.getElementById("goals-list");
  if (!list || !goals) return;
  list.innerHTML = "";
  goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = sanitizeText(goal);
    list.appendChild(li);
  });
}

function renderResearchPoints(research) {
  if (!research) return;
  const summary = document.getElementById("research-summary");
  if (summary && research.summaryParagraphs) {
    summary.innerHTML = "";
    research.summaryParagraphs.forEach((p) => {
      const para = document.createElement("p");
      para.textContent = sanitizeText(p);
      summary.appendChild(para);
    });
  }
  const list = document.getElementById("research-list");
  if (!list || !research.evidenceSummary) return;
  list.innerHTML = "";
  research.evidenceSummary.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${sanitizeText(item.source)}:</strong> ${sanitizeText(item.finding)}`;
    list.appendChild(li);
  });
}

function renderSolution(solution) {
  if (!solution) return;
  setText("solution-overview", solution.overview);
  setText("data-foundation", solution.dataFoundation);
  setText("tech-stack", solution.technicalStack);
  if (solution.roles) {
    setText("role-students", solution.roles.students);
    setText("role-employers", solution.roles.employers);
    setText("role-admins", solution.roles.admins);
  }
}

function renderMetrics(metrics) {
  const list = document.getElementById("metrics-list");
  if (!list || !metrics) return;
  list.innerHTML = "";
  const { title, rationale, ...groups } = metrics;
  Object.entries(groups).forEach(([label, items]) => {
    if (!Array.isArray(items)) return;
    const cleanItems = items.map((item) => sanitizeText(item));
    const li = document.createElement("li");
    li.innerHTML = `<strong>${label.replace(/([A-Z])/g, " $1").trim()}:</strong> ${cleanItems.join(", ")}`;
    list.appendChild(li);
  });
  setText("metrics-rationale", rationale);
}

function renderArchitecture(arch) {
  if (!arch) return;
  setText("architecture-business", arch.businessArchitecture);
  setText("architecture-information", arch.informationSystemsArchitecture);
  setText("architecture-technology", arch.technologyArchitecture);
}

function renderDataDesign(design) {
  if (!design) return;
  setText("data-design-overview", design.designOverview || design.overview);
  setText("data-identity", design.identityAndRoles);
  setText("data-design-student", design.studentData);
  setText("data-experience-skills", design.experienceAndSkills);
  setText("data-jobs-orgs", design.jobsAndOrganizations);
  setText("data-matching", design.matchingAndAnalytics || design.matching);
  setText("data-analytics", design.matchingAndAnalytics || design.analytics);
  setText("data-future", design.futureReadiness || design.future);

  const behavioralList = document.getElementById("data-behavioral-list");
  if (behavioralList && design.behavioralLogic) {
    behavioralList.innerHTML = "";
    design.behavioralLogic.forEach((rule) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(rule);
      behavioralList.appendChild(li);
    });
  }
  if (design.erd && design.erd.caption) {
    setText("data-erd-caption", `${design.erd.figureId || ""} ${design.erd.caption}`.trim());
  }
}

function renderDataFlow(design) {
  if (!design) return;
  const flowText = document.getElementById("data-flow-text");
  if (flowText && design.designOverview) {
    flowText.textContent = `Data moves from capture (profiles, jobs, events, news, matches) into structured collections, then into relational tables to drive dashboards and AI. ${design.designOverview}`;
  }
}

function renderDashboard(dashboard) {
  if (!dashboard) return;
  setText("dashboard-overview", dashboard.overview);
  setText("dashboard-student", dashboard.studentDashboard || dashboard.student);
  setText("dashboard-employer", dashboard.employerDashboard || dashboard.employer);
  setText("dashboard-admin", dashboard.adminDashboard || dashboard.admin);
  setText("dashboard-data", dashboard.dataIntegration);

  const dashLink = document.getElementById("dashboard-link");
  const extrasLink = document.getElementById("extras-dashboard");
  const href = dashboard.dashboardLink || dashboard.link;
  if (dashLink && href) {
    dashLink.href = href;
  }
  if (extrasLink && href) {
    extrasLink.href = href;
    extrasLink.classList.remove("disabled");
    extrasLink.removeAttribute("aria-disabled");
  }
}

function renderDashboardInsights(insights) {
  const list = document.getElementById("insights-list");
  if (!list || !insights) return;
  list.innerHTML = "";
  insights.forEach((insight) => {
    const li = document.createElement("li");
    li.textContent = sanitizeText(insight);
    list.appendChild(li);
  });
}

function renderEthics(ethics) {
  if (!ethics) return;
  const aiList = document.getElementById("ethics-ai");
  const accessList = document.getElementById("ethics-accessibility");
  if (aiList) {
    aiList.innerHTML = "";
    [ethics.aiPrivacy, ethics.consentAndControl || ethics.consentControl, ethics.biasMitigation].forEach((item) => {
      if (item) {
        const li = document.createElement("li");
        li.textContent = sanitizeText(item);
        aiList.appendChild(li);
      }
    });
  }
  if (accessList) {
    accessList.innerHTML = "";
    [ethics.accessibility, ethics.principle].forEach((item) => {
      if (item) {
        const li = document.createElement("li");
        li.textContent = sanitizeText(item);
        accessList.appendChild(li);
      }
    });
  }
}

function renderImpact(outcomes, nextSteps) {
  if (outcomes) {
    setText("impact-outcomes", outcomes.text || outcomes);
  }
  const list = document.getElementById("next-steps-list");
  if (list && nextSteps?.items) {
    list.innerHTML = "";
    nextSteps.items.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = sanitizeText(step);
      list.appendChild(li);
    });
  } else {
    setText("impact-next", nextSteps);
  }
}

function renderLessons(lessons) {
  const container = document.getElementById("lessons-paragraphs");
  if (!container || !lessons) return;
  container.innerHTML = "";
  (lessons.paragraphs || lessons).forEach((text) => {
    const p = document.createElement("p");
    p.textContent = sanitizeText(text);
    container.appendChild(p);
  });
}

function renderReferences(refs) {
  const extras = document.getElementById("extras");
  if (!extras || !refs) return;
  let refsEl = document.getElementById("references-list");
  if (!refsEl) {
    refsEl = document.createElement("ul");
    refsEl.id = "references-list";
    refsEl.className = "card-list";
    const container = extras.querySelector(".container");
    if (container) {
      const heading = document.createElement("h3");
      heading.textContent = "References";
      container.appendChild(heading);
      container.appendChild(refsEl);
    }
  }
  refsEl.innerHTML = "";
  refs.forEach((ref) => {
    const li = document.createElement("li");
    const citation = sanitizeText(ref.citation || ref);
    li.innerHTML = ref.url
      ? `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${citation}</a>`
      : citation;
    refsEl.appendChild(li);
  });
}

function renderTableNote(note) {
  if (!note) return;
  setText("table-note", note.note);
}

function initPageNav() {
  const sections = Array.from(document.querySelectorAll(".page"));
  const navLinks = Array.from(document.querySelectorAll("a[data-page]"));
  const defaultPage = "home";
  const pageAnchors = new Map();
  sections.forEach((sec) => {
    if (!pageAnchors.has(sec.dataset.page)) {
      pageAnchors.set(sec.dataset.page, sec.id);
    }
  });

  function activate(page) {
    const target = page || defaultPage;
    document.body.classList.add("pages-mode");
    sections.forEach((sec) => sec.classList.toggle("active", sec.dataset.page === target));
    navLinks.forEach((link) => link.classList.toggle("active", link.dataset.page === target));
    const anchor = pageAnchors.get(target) || target;
    if (location.hash !== `#${anchor}`) {
      history.replaceState(null, "", `#${anchor}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activate(link.dataset.page);
    });
  });

  window.addEventListener("hashchange", () => {
    const hash = location.hash.replace("#", "");
    const exists = sections.some((sec) => sec.dataset.page === hash);
    activate(exists ? hash : defaultPage);
  });

  const initial = location.hash.replace("#", "") || defaultPage;
  const exists = sections.some((sec) => sec.dataset.page === initial);
  activate(exists ? initial : defaultPage);
}

function initLightbox() {
  const overlay = document.getElementById("lightbox");
  const backdrop = overlay?.querySelector(".lightbox-backdrop");
  const img = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const closeBtn = overlay?.querySelector(".lightbox-close");
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const zoomReset = document.getElementById("zoom-reset");
  let scale = 1;

  function applyScale() {
    if (img) img.style.transform = `scale(${scale})`;
  }

  function open(src, caption) {
    if (!overlay || !img) return;
    scale = 1;
    img.src = src;
    img.style.transform = "scale(1)";
    if (captionEl) captionEl.textContent = caption || "";
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".lightbox-img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const src = thumb.getAttribute("data-full") || thumb.getAttribute("src");
      const caption = thumb.getAttribute("data-caption") || thumb.getAttribute("alt");
      open(src, caption);
    });
  });

  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  zoomIn?.addEventListener("click", () => {
    scale = Math.min(scale + 0.2, 3);
    applyScale();
  });
  zoomOut?.addEventListener("click", () => {
    scale = Math.max(scale - 0.2, 0.6);
    applyScale();
  });
  zoomReset?.addEventListener("click", () => {
    scale = 1;
    applyScale();
  });
}

