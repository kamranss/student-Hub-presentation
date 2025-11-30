// data3.js
// Portfolio-friendly content model for StudentHub MRP

const projectMeta = {
  id: "studenthub-mrp",
  title: "StudentHub - Alumni & Student Engagement Analytics",
  tagline: "Turning fragmented alumni data into a lifetime career and engagement platform.",
  author: "Kamran Suleyman (StudentHub MRP)",
  year: 2025,
  hero: "assets/img/hero/home2.png",
};

// Home
const homeSection = {
  id: "home",
  title: "StudentHub - Project Overview",
  hero: "",
  intro: "A unified alumni + student platform with analytics, matching, and role-based dashboards.",
  executiveSummary: {
    title: "Executive summary",
    text: [
      "Universities struggle to maintain accurate, long-term visibility into student and alumni career outcomes because information is split across disconnected CRMs, spreadsheets, surveys, and external platforms like LinkedIn. Once students graduate, they often abandon university systems entirely, leaving institutions without reliable insight into professional progress or engagement. This fragmentation weakens match quality for jobs and mentors, stalls employer pipelines, and forces administrators to rely on anecdotal reporting instead of trustworthy data.",
      "StudentHub is the proposed fix: a unified IS/IT platform that acts as a lifetime digital profile rather than a temporary campus portal. It aggregates structured data and surfaces role-based dashboards. Students receive personalized job, event, news, and mentorship recommendations with explainable match scores. Employers see structured applicant insights, not static resumes. Administrators gain real-time visibility into engagement, outcomes, and platform health, plus the ability to run targeted outreach when data gaps appear.",
      "Key insights from building the MVP: clean, centralized data dramatically improves match relevance and dashboard accuracy; engagement climbs when recommendations extend beyond jobs to events, mentors, and targeted content; and a privacy-first AI model that never shares personal identifiers builds trust while still delivering meaningful feedback. Synthetic-yet-realistic datasets proved essential for safely prototyping and validating these flows.",
      "The expected impact is a sustainable ecosystem that supports students during university and remains valuable after graduation. By treating alumni data as a living asset, StudentHub positions institutions to improve employability metrics, strengthen alumni relationships, and create transparent pathways between students, employers, and the university. It also lays the groundwork for predictive analytics (risk of churn, employer demand, donation propensity) to inform smarter program decisions over time.",
    ],
  },
};

// Problem
const problemSection = {
  id: "problem",
  title: "Problem",
  hero: "",
  overview:
    "Final problem: the university cannot effectively match alumni to relevant job opportunities because career data is fragmented, outdated, and poorly tracked after graduation.",
  bullets: [
    "Alumni career records are fragmented across disparate systems: legacy databases, spreadsheets, outdated CRM entries, and ad hoc surveys. Without consistent, structured employment data, the university cannot accurately track career outcomes, personalize engagement, or build credibility through alumni success stories.",
  ],
  chosenProblem:
    "Selected option: poor data and career tracking blocks job matching across alumni and employers.",
  selectionRationale:
    "Chosen because it blends data quality, engagement, and employability, and can be prototyped realistically with synthetic profiles, jobs, and skills.",
  solutionAngle:
    "Centralize alumni career data, link it to jobs/mentors, and power match scores and dashboards to prove value.",
  optionsSummary: [
    "Option 1: Fix outdated/missing alumni data (foundational but backend-heavy).",
    "Option 2: Improve collaboration across alumni, students, employers (human-centered but harder to prototype without data).",
    "Option 3: Poor data & career tracking blocks job matching (selected).",
  ],
  stakeholders: [
    { role: "Students", pain: "No post-graduation hub; weak job/mentor guidance because data is incomplete." },
    { role: "Alumni", pain: "No structured way to find roles, mentor, or showcase outcomes; no trusted place to keep their profile current." },
    { role: "Employers", pain: "No structured pipeline; static boards make it hard to find verified, high-fit alumni." },
    { role: "Administrators", pain: "No unified career data or credible outcomes; hard to run targeted outreach or report impact." },
    { role: "University staff", pain: "Cannot reliably spot potential alumni mentors without a verified system to surface candidates." },
  ],
};

// Research & Insights
const researchSection = {
  id: "research",
  title: "Research and insights",
  hero: "",
  summary: "Fragmented alumni data, manual collection, and weak mentorship loops hold back engagement. Evidence across academia and industry shows that structured data, predictive models, and inclusive mentoring materially improve outcomes.",
  keyFindings: [
    "Predictive scoring lifts outreach and conversion when data is clean and coordinated (AffinaQuest/CMU, Bryant).",
    "Standardized engagement KPIs (CASE) and dashboards drive comparability and adoption.",
    "Mentorship measurably improves outcomes; portals that combine networking and analytics keep alumni engaged.",
    "Automation and self-service reduce data gaps; explainable ML and consent controls are critical for trust.",
  ],
  matrix: [
    {
      theme: "Tech Solutions",
      source: "AffinaQuest (2023)",
      insight:
        "CMU used predictive analytics for donor/volunteer ranking; cleaning/consolidating data was prerequisite. Dashboards monitored campaigns and lifted engagement.",
      implication: "Add donor/mentor scoring dashboards in MVP.",
    },
    {
      theme: "Business Impact",
      source: "Bryant University (2018)",
      insight:
        "Predictive modeling isolated donor likelihood and size drivers (age, retirement stage, major). Shows value of structured models for advancement.",
      implication: "Implement donor prediction in MVP, refine in MMP.",
    },
    {
      theme: "Industry Trends",
      source: "CASE (2022)",
      insight:
        "Standardized alumni engagement metrics improve comparability and outcomes; longitudinal data is key for benchmarking.",
      implication: "Align KPI framework and dashboards with CASE standards.",
    },
    {
      theme: "Tech Solutions",
      source: "Chi, Jones, & Grandham (2012)",
      insight:
        "Smart Alumni System combined data mining + social networking for profiles, mentor recommendations, and groups; boosted engagement.",
      implication: "Include recommendation features in MMP portal.",
    },
    {
      theme: "Business Impact",
      source: "Chu et al. (2019)",
      insight:
        "Structured alumni mentoring improved international graduate students’ career planning and confidence; mentors’ industry knowledge mattered.",
      implication: "Prioritize inclusive mentor-matching in MVP.",
    },
    {
      theme: "Tech Solutions",
      source: "Dang (2023)",
      insight:
        "Automated ingestion (APIs, scraping) plus ML for mentor matching; automation cuts manual data collection and scales engagement.",
      implication: "Enable CSV/Excel/API ingestion in MVP; automate further in MMP.",
    },
    {
      theme: "Industry Trends",
      source: "Eby et al. (2008)",
      insight:
        "Meta-analysis: mentored individuals see higher job satisfaction, promotions, salaries; stresses structured evaluation and bias controls.",
      implication: "Track mentorship KPIs and outcomes in dashboards.",
    },
    {
      theme: "Tech Solutions",
      source: "Gomez-Cravioto et al. (2022)",
      insight:
        "ML + SHAP explainability predicted alumni income; highlighted fairness concerns (e.g., gender proxies) and need for auditable models.",
      implication: "Build explainable, auditable ML for donor/mentor dashboards.",
    },
    {
      theme: "Business Impact",
      source: "Graduway (2022)",
      insight:
        "Centralized alumni data improved volunteerism, philanthropy, and communications; CASE metrics showed measurable lift.",
      implication: "Align dashboard KPIs with CASE metrics and show impact.",
    },
    {
      theme: "Ethics & Regulation",
      source: "Jones et al. (2017)",
      insight:
        "Promising practices: informed consent, privacy safeguards, auditability; multi-method data collection improves quality.",
      implication: "Add consent flags, standardized fields, audit logs in ingestion.",
    },
    {
      theme: "Tech Solutions",
      source: "Kumar et al. (2023)",
      insight:
        "Self-service alumni portal with digital yearbooks and search increased data accuracy and engagement.",
      implication: "Build Career Profile Portal in MMP; keep self-service in MVP.",
    },
    {
      theme: "Business Impact",
      source: "O’Connor (2022)",
      insight:
        "Alumni engagement ties directly to institutional goals; alumni eager to contribute when opportunities align to a 5-year plan.",
      implication: "Show dashboards linking engagement to GHU strategic priorities.",
    },
  ],
  journal: {
    revisionLog: [
      "09/10/25 — v001: Initial draft created",
      "09/11/25 — v002: Market research & journal completed",
      "09/11/25 — v003: Market review (Gartner Peer Insights) completed",
    ],
    definition:
      "Alumni Connect Analytics Platform unifies alumni career and engagement data to fix fragmented records, enable matching, and power targeted outreach with university-owned governance.",
    characteristics: [
      "Data foundation: clean imports from spreadsheets/systems into one standard model.",
      "Self-service: alumni update employment, skills, mentoring interests (Kumar et al., 2023).",
      "Dashboards: CASE-aligned engagement/career KPIs for administrators (CASE, 2022).",
      "Predictive insights: donor/mentor likelihood now; expand to job/skill matching (AffinaQuest, Bryant).",
      "Employer connection: verified employers post roles and find alumni talent.",
      "Privacy and fairness: consent center, role-based access, bias checks (Jones et al., 2017).",
    ],
    solutionTypes: [
      "Alumni engagement suites (e.g., Graduway): strong events, weaker career data.",
      "Education CRMs (e.g., AffinaQuest): good for advancement, weak in job tracking.",
      "Career platforms: connect employers/graduates but don’t fix fragmented data.",
      "Custom platform (chosen): integrates data, analytics, networking with institutional control.",
    ],
    pros: [
      "Fixes fragmented data and career visibility with self-updates.",
      "Delivers mentoring, predictive insights, and standardized KPIs.",
      "Keeps privacy/fairness under institutional control.",
      "Creates a long-term professional social hub for alumni.",
    ],
    cons: [
      "More complex than off-the-shelf tools; phased MVP→MMP mitigates risk.",
      "Adoption depends on engaging features (jobs, mentoring).",
      "Requires active privacy/bias management and more build effort.",
    ],
    marketReview: {
      vendor: "Yello + WayUp",
      rating: "4.4 / 5 (69 reviews)",
      summary:
        "Early-career recruiting platform with DEI focus; personal candidate experience boosts engagement. Shows appetite for diversity-aware matching and recruiter-friendly UX.",
      implication: "Incorporate inclusive matching signals and recruiter-facing dashboards.",
    },
  },
};

// Proposed Solution
const solutionSection = {
  id: "solution",
  title: "Proposed solution",
  hero: "",
  intro: "A university-owned LinkedIn plus analytics layer that stays relevant from first semester through alumni years.",
  coreGoals: [
    "Unify student and alumni data for analytics and AI recommendations.",
    "Personalized jobs, events, news, and mentorship suggestions.",
    "Structured talent pipeline for employers, not static CVs.",
    "Admin visibility into engagement, outcomes, and system health.",
  ],
  keyFeatures: [
    "Role-based dashboards for students, employers, and admins.",
    "Profiles with skills, work history, education, interests, and engagement scores.",
    "Match engine scoring jobs and mentorship opportunities.",
    "Anonymized AI assistant for fit explanation and profile tips.",
  ],
  strategy: {
    swotImage: "assets/img/swot.png",
    statement:
      "The GHU Alumni Connect Analytics Platform unifies alumni data and engagement. It differentiates with predictive analytics, explainable dashboards, and a self-service portal for personalized networking, mentorship, and career development. Success targets: +10% alumni engagement, verified profile accuracy from 30% to 60% in year one, and predictive models improving fundraising conversion by 5–7%.",
    vision:
      "Strengthen alumni engagement by unifying data, delivering predictive insights, and fostering connections for mentorship, career growth, and fundraising.",
    targetUsers: "Primary: GHU alumni, administrators. Secondary: employers, mentors, donors.",
    differentiators:
      "Institution-owned portal with unified data, predictive models, and tailored dashboards; not a generic external platform.",
    goals: [
      "Increase alumni engagement by 10% (events + mentorship) by Dec 2026.",
      "Improve verified alumni profile accuracy from 30% to 60% by Dec 2026.",
      "Launch donor likelihood and mentor match models with ≥0.75 AUC by Apr 2026.",
    ],
    risks: "Data privacy and competition from external platforms; mitigated by consent-first design and clear differentiation.",
    swotText:
      "Strengths: strong academic reputation, 70k alumni, existing CRMs. Weaknesses: fragmented legacy systems, no modern self-service portal. Opportunities: fundraising lift, structured mentorship, predictive analytics for careers/donors. Threats: privacy concerns; competition from platforms like LinkedIn.",
  },
};

// Architecture
const architectureSection = {
  id: "architecture",
  title: "Architecture",
  hero: "",
  layers: {
    business: [],
    is: [],
    tech: [],
  },
  businessSummary:
    "Structured multi-layer design unifies business processes, modular apps, and scalable data services. Business Architecture supports student career exploration, alumni engagement, employer recruitment, AI-assisted mentorship identification, and administrative monitoring processes often in separate systems, here combined to prevent fragmentation before and after graduation.",
  isSummary:
    "Information Systems Architecture organizes collections for profiles, skills, jobs, events, news, applications, and AI match results. UI modules (Dashboard, Jobs, Events, News, Mentorship, Employer Workspace, Admin Analytics) consume structured datasets via secure REST endpoints. A Matching Engine runs job/mentor/donor matching; an AI Assistant (OpenRouter) provides personalized analysis with anonymized inputs.",
  techSummary:
    "Technology Architecture uses hybrid storage: flexible JSON for fast UI and analytical tables for scoring/reporting. React UIs talk to services via secure routes; role-based auth governs students, employers, and admins. Balances flexibility, performance, and extensibility for MVP and future growth.",
  conceptualSummary:
    "StudentHub sits at the center of students, alumni, employers, instructors, and staff via shared data and role based access. Core modules matching engine, events/news engine, jobs/employer, engagement tracking, admin analytics run on a common UI layer. Students/alumni get matches, skills insights, tasks, mentorship, events, news; employers review candidates; instructors support mentorship; staff monitor engagement and permissions.",
  erdSummary: "ERD covers users, profiles, skills, jobs, events, news, applications, matches, mentorship, engagement scores, and giving behavior.",
};

// Data
const dataSection = {
  id: "data",
  title: "Data and dataset",
  hero: "",
  datasetSummary: "Synthetic dataset of about 2,000 alumni-like records (2000-2025) with realistic majors, roles, and locations.",
  mainEntities: [
    "Identity: IDs, names, locations, graduation year.",
    "Education: degrees, majors, GPA, years since graduation.",
    "Employment: titles, industries, salaries, experience years.",
    "Skills: soft and technical scores.",
    "Engagement and mentoring: events, scores, mentoring interest and activity.",
    "Donations: last-year and projected giving for analytics only.",
  ],
  generationLogic: [
    "Started from public-style data, then cleaned and standardized.",
    "Pandas and NumPy expansion; computed years_since_grad, engagement_score, match_score.",
    "Rule-based logic for seniority, pay, mentoring, and giving likelihood.",
  ],
  valueForSolution: "Provides realistic patterns to test dashboards, KPIs, and the matching model without using real student data.",
};

// Dashboard
const dashboardSection = {
  id: "dashboard",
  title: "Dashboards",
  hero: "",
  overview: "Role-based dashboards translate raw data into actions.",
  studentView: {
    title: "Student",
    bullets: [
      "Match score, engagement score, profile completeness.",
      "Recommended jobs, events, news; quick AI assistant access.",
    ],
  },
  employerView: {
    title: "Employer",
    bullets: [
      "Open roles, applications per role, average candidate fit.",
      "Talent pool view highlighting high-fit candidates.",
    ],
  },
  adminView: {
    title: "Admin",
    bullets: [
      "Platform health: engagement, active users, data accuracy, satisfaction trends.",
      "Engagement by service: jobs, events, mentorship, news.",
    ],
  },
  exampleInsights: [
    "Event attendance plus news interactions correlate with higher engagement scores.",
    "Detailed job descriptions yield more high-fit matches.",
    "Mentorship needs boosts when engagement lags but satisfaction is high.",
  ],
};

// Ethics
const ethicsSection = {
  id: "ethics",
  title: "Ethics",
  hero: "",
  summary:
    "Building a student and alumni platform demands transparent, consent-first data practices, anonymous AI, and inclusive access from day one.",
  aiPrivacy: [
    "AI never receives personal identifiers; it only processes skills, experience level, education, certifications, interests, and role preferences.",
    "Profile visibility is user-controlled; students and alumni decide what employers see, and can export or permanently delete their data (FERPA/GDPR aligned).",
    "Account deletion removes associated records; consent and data life cycle are enforced across the stack.",
  ],
  accessibility: [
    "Accessible by design: semantic structure, ARIA support, readable contrast, keyboard navigation, scalable typography.",
    "Voice navigation is planned so users can open pages, search opportunities, or trigger actions by speaking.",
    "Bias safeguards: match scores never use gender, ethnicity, or disability status—only skills, experience, preferences, and engagement behaviors.",
  ],
  privacyPromise:
    "Anonymous AI usage, explicit consent, export/delete controls, and role-based visibility keep student and alumni data protected.",
  inclusionPromise:
    "Inclusive UX with accessibility defaults today and voice navigation on the roadmap ensures everyone can benefit from StudentHub.",
};

// Lessons
const lessonsSection = {
  id: "lessons",
  title: "Lessons learned",
  hero: "",
  bullets: [
    "Building the MVP exposed real gaps beyond analysis.",
    "Solving alumni engagement needs data quality, UX, and motivation together.",
    "Iterative builds refined scoring, ethics, and dashboards.",
    "Staying relevant after graduation shaped every design choice.",
    "Shifted from writing about systems to a shipping mindset.",
  ],
};

// Appendix
const appendixSection = {
  id: "appendix",
  title: "Appendix",
  hero: "",
  links: [
    { label: "GitHub repository", url: "#" },
    { label: "Full ERD image", url: "#" },
    { label: "Architecture deck", url: "#" },
    { label: "Dataset docs (CSV + rules)", url: "#" },
  ],
};

const charterSection = {
  id: "charter",
  title: "Project Charter",
  hero: "",
};

// Ordered sections for navigation
const sections = [
  homeSection,
  problemSection,
  researchSection,
  solutionSection,
  charterSection,
  architectureSection,
  dataSection,
  dashboardSection,
  ethicsSection,
  lessonsSection,
  appendixSection,
];

window.presentationData = {
  projectMeta,
  homeSection,
  problemSection,
  researchSection,
  solutionSection,
  charterSection,
  architectureSection,
  dataSection,
  dashboardSection,
  ethicsSection,
  lessonsSection,
  appendixSection,
  sections,
};

// Backward friendly alias
window.siteDataV3 = window.presentationData;
