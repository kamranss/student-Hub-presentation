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
  hero: "assets/img/hero/home2.png",
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
  hero: "assets/img/hero/problem2.png",
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
    { role: "Alumni", pain: "No structured way to find roles, mentor, or showcase outcomes; engagement is ad hoc." },
    { role: "Employers", pain: "No structured pipeline; static boards make it hard to find verified, high-fit alumni." },
    { role: "Administrators", pain: "No unified career data or credible outcomes; hard to run targeted outreach or report impact." },
  ],
};

// Research & Insights
const researchSection = {
  id: "research",
  title: "Research and insights",
  hero: "assets/img/hero/exacutive-summary2.png",
  summary: "Reports show fragmented alumni data and inconsistent engagement tracking; integrated mentoring and analytics are the gap.",
  keyFindings: [
    "Structured engagement tracking beats manual reporting.",
    "Employment data is scattered, making clean datasets rare.",
    "Recommendation engines and mentoring analytics improve outcomes.",
    "Point solutions exist, but few connect students, alumni, employers, and admins end-to-end.",
  ],
};

// Proposed Solution
const solutionSection = {
  id: "solution",
  title: "Proposed solution",
  hero: "assets/img/hero/solution2.png",
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
  hero: "assets/img/hero/architectture3.png",
  layers: {
    business: [
      "Collect and clean alumni plus student data; keep it updated.",
      "Match users to jobs, mentors, and events; track engagement and outcomes.",
    ],
    is: [
      "Student and alumni web app, employer portal, admin dashboard.",
      "Matching and notification services.",
    ],
    tech: [
      "React UI, API layer, databases for profiles and analytics.",
      "Security: role-based access, encrypted traffic, audit-friendly logs.",
    ],
  },
  diagrams: {
    enterprise: "assets/img/hero/architecture.png", // replace with real diagram if available
    integration: "assets/img/hero/architecture.png",
    tech: "assets/img/hero/architecture.png",
  },
  erdSummary: "ERD covers users, profiles, skills, jobs, events, news, applications, matches, mentorship, engagement scores, and giving behavior.",
};

// Data
const dataSection = {
  id: "data",
  title: "Data and dataset",
  hero: "assets/img/hero/exacutive-summary2.png",
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
  hero: "assets/img/hero/exacutive-summary2.png",
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
  hero: "assets/img/hero/exacutive-summary2.png",
  bullets: [
    "AI prompts are anonymized; no personal identifiers sent.",
    "Users control data sharing; export or delete on request.",
    "Accessibility by design: keyboard, contrast, screen readers.",
    "Matching ignores sensitive attributes; focuses on skills, experience, and engagement.",
  ],
};

// Lessons
const lessonsSection = {
  id: "lessons",
  title: "Lessons learned",
  hero: "assets/img/hero/lessons-learned2.png",
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
  hero: "assets/img/hero/exacutive-summary2.png",
  links: [
    { label: "GitHub repository", url: "#" },
    { label: "Full ERD image", url: "#" },
    { label: "Architecture deck", url: "#" },
    { label: "Dataset docs (CSV + rules)", url: "#" },
  ],
};

// Ordered sections for navigation
const sections = [
  homeSection,
  problemSection,
  researchSection,
  solutionSection,
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
