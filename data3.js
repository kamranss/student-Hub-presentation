// // data3.js
// // Portfolio-friendly content model for StudentHub MRP

// const projectMeta = {
//   id: "studenthub-mrp",
//   title: "StudentHub - Alumni & Student Engagement Analytics",
//   tagline: "Turning fragmented alumni data into a lifetime career and engagement platform.",
//   author: "Kamran Suleyman (StudentHub MRP)",
//   year: 2025,
//   hero: "assets/img/hero/home2.png",
// };

// // Home
// const homeSection = {
//   id: "home",
//   title: "StudentHub - Project Overview",
//   hero: "",
//   intro: "A unified alumni + student platform with analytics, matching, and role-based dashboards.",
//   executiveSummary: {
//     title: "Executive summary",
//     text: [
//       "Universities struggle to maintain accurate, long-term visibility into student and alumni career outcomes because information is split across disconnected CRMs, spreadsheets, surveys, and external platforms like LinkedIn. Once students graduate, they often abandon university systems entirely, leaving institutions without reliable insight into professional progress or engagement. This fragmentation weakens match quality for jobs and mentors and forces university to rely on inaccurate reporting instead of trustworthy data.",
//       "StudentHub is the proposed fix: a unified IS/IT platform that acts as a lifetime digital profile rather than a temporary campus portal. It aggregates structured data and surfaces role-based dashboards. Students receive personalized job, event, news, and mentorship recommendations with explainable match scores. Employers see structured applicant insights, not static resumes. Administrators gain real-time visibility into engagement, outcomes, and platform health, plus the ability to run targeted outreach when data gaps appear.",
//       "Key insights from building the MVP: clean, centralized data improves match relevance and dashboard accuracy; engagement indicators change when recommendations extend beyond jobs to events, mentors, and targeted content; and a privacy-first AI model that never shares personal identifiers builds trust while still delivering meaningful feedback. Synthetic yet realistic datasets proved essential for safely prototyping and validating these flows.",
//       "The expected impact is a sustainable ecosystem that supports students during university and remains valuable after graduation. By treating alumni data as a living asset, StudentHub positions institutions to improve employability metrics, strengthen alumni relationships, and create transparent pathways between students, employers, and the university. It also helps for predictive analytics to build smarter decisions over time.",
//     ],
//   },
// };

// // Problem
// const problemSection = {
//   id: "problem",
//   title: "Problem",
//   hero: "",
//   overview:
//     "University cannot effectively match alumni to relevant job opportunities because career data is fragmented, outdated, and poorly tracked after graduation.",
//   bullets: [
//     "Alumni career records are fragmented across disparate systems: legacy databases, spreadsheets, outdated CRM entries, and ad hoc surveys. Without consistent, structured employment data, the university cannot accurately track career outcomes, personalize engagement, or build credibility through alumni success stories.",
//   ],
//   chosenProblem:
//     "Selected option: poor data and career tracking blocks job matching across alumni and employers.",
//   selectionRationale:
//     "Chosen because it blends data quality, engagement, and employability, and can be prototyped realistically with synthetic profiles, jobs, and skills.",
//   solutionAngle:
//     "Centralize alumni career data, link it to jobs/mentors, and power match scores and dashboards to prove value.",
//   optionsSummary: [
//     "Option 1: Fix outdated/missing alumni data (foundational but backend-heavy).",
//     "Option 2: Improve collaboration across alumni, students, employers (human-centered but harder to prototype without data).",
//     "Option 3: Poor data & career tracking blocks job matching (selected).",
//   ],
//   stakeholders: [
//     { role: "Students", pain: "No post-graduation hub; weak job/mentor guidance because data is incomplete." },
//     { role: "Alumni", pain: "No structured way to find roles, mentor, or showcase outcomes; no trusted place to keep their profile current." },
//     { role: "Employers", pain: "No structured pipeline; static boards make it hard to find verified, high-fit alumni." },
//     { role: "Administrators", pain: "No unified career data or credible outcomes; hard to run targeted outreach or report impact." },
//     { role: "University staff", pain: "Cannot reliably spot potential alumni mentors without a verified system to surface candidates." },
//   ],
// };

// // Research & Insights
// const researchSection = {
//   id: "research",
//   title: "Research and insights",
//   hero: "",
//   summary: "Fragmented alumni data, manual collection, and weak mentorship loops hold back engagement. Evidence across academia and industry shows that structured data, predictive models, and inclusive mentoring materially improve outcomes.",
//   keyFindings: [
//     "Predictive scoring lifts outreach and conversion when data is clean and coordinated (AffinaQuest/CMU, Bryant).",
//     "Standardized engagement KPIs (CASE) and dashboards drive comparability and adoption.",
//     "Mentorship measurably improves outcomes; portals that combine networking and analytics keep alumni engaged.",
//     "Automation and self-service reduce data gaps; explainable ML and consent controls are critical for trust.",
//   ],
//   matrix: [
//     {
//       theme: "Tech Solutions",
//       source: "AffinaQuest (2023)",
//       insight:
//         "CMU used predictive analytics for donor/volunteer ranking; cleaning/consolidating data was prerequisite. Dashboards monitored campaigns and lifted engagement.",
//       implication: "Add donor/mentor scoring dashboards in MVP.",
//     },
//     {
//       theme: "Business Impact",
//       source: "Bryant University (2018)",
//       insight:
//         "Predictive modeling isolated donor likelihood and size drivers (age, retirement stage, major). Shows value of structured models for advancement.",
//       implication: "Implement donor prediction in MVP, refine in MMP.",
//     },
//     {
//       theme: "Industry Trends",
//       source: "CASE (2022)",
//       insight:
//         "Standardized alumni engagement metrics improve comparability and outcomes; longitudinal data is key for benchmarking.",
//       implication: "Align KPI framework and dashboards with CASE standards.",
//     },
//     {
//       theme: "Tech Solutions",
//       source: "Chi, Jones, & Grandham (2012)",
//       insight:
//         "Smart Alumni System combined data mining + social networking for profiles, mentor recommendations, and groups; boosted engagement.",
//       implication: "Include recommendation features in MMP portal.",
//     },
//     {
//       theme: "Business Impact",
//       source: "Chu et al. (2019)",
//       insight:
//         "Structured alumni mentoring improved international graduate students’ career planning and confidence; mentors’ industry knowledge mattered.",
//       implication: "Prioritize inclusive mentor-matching in MVP.",
//     },
//     {
//       theme: "Tech Solutions",
//       source: "Dang (2023)",
//       insight:
//         "Automated ingestion (APIs, scraping) plus ML for mentor matching; automation cuts manual data collection and scales engagement.",
//       implication: "Enable CSV/Excel/API ingestion in MVP; automate further in MMP.",
//     },
//     {
//       theme: "Industry Trends",
//       source: "Eby et al. (2008)",
//       insight:
//         "Meta-analysis: mentored individuals see higher job satisfaction, promotions, salaries; stresses structured evaluation and bias controls.",
//       implication: "Track mentorship KPIs and outcomes in dashboards.",
//     },
//     {
//       theme: "Tech Solutions",
//       source: "Gomez-Cravioto et al. (2022)",
//       insight:
//         "ML + SHAP explainability predicted alumni income; highlighted fairness concerns (e.g., gender proxies) and need for auditable models.",
//       implication: "Build explainable, auditable ML for donor/mentor dashboards.",
//     },
//     {
//       theme: "Business Impact",
//       source: "Graduway (2022)",
//       insight:
//         "Centralized alumni data improved volunteerism, philanthropy, and communications; CASE metrics showed measurable lift.",
//       implication: "Align dashboard KPIs with CASE metrics and show impact.",
//     },
//     {
//       theme: "Ethics & Regulation",
//       source: "Jones et al. (2017)",
//       insight:
//         "Promising practices: informed consent, privacy safeguards, auditability; multi-method data collection improves quality.",
//       implication: "Add consent flags, standardized fields, audit logs in ingestion.",
//     },
//     {
//       theme: "Tech Solutions",
//       source: "Kumar et al. (2023)",
//       insight:
//         "Self-service alumni portal with digital yearbooks and search increased data accuracy and engagement.",
//       implication: "Build Career Profile Portal in MMP; keep self-service in MVP.",
//     },
//     {
//       theme: "Business Impact",
//       source: "O’Connor (2022)",
//       insight:
//         "Alumni engagement ties directly to institutional goals; alumni eager to contribute when opportunities align to a 5-year plan.",
//       implication: "Show dashboards linking engagement to GHU strategic priorities.",
//     },
//   ],
//   journal: {
//     revisionLog: [
//       "09/10/25 — v001: Initial draft created",
//       "09/11/25 — v002: Market research & journal completed",
//       "09/11/25 — v003: Market review (Gartner Peer Insights) completed",
//     ],
//     definition:
//       "Alumni Connect Analytics Platform unifies alumni career and engagement data to fix fragmented records, enable matching, and power targeted outreach with university-owned governance.",
//     characteristics: [
//       "Data foundation: clean imports from spreadsheets/systems into one standard model.",
//       "Self-service: alumni update employment, skills, mentoring interests (Kumar et al., 2023).",
//       "Dashboards: CASE-aligned engagement/career KPIs for administrators (CASE, 2022).",
//       "Predictive insights: donor/mentor likelihood now; expand to job/skill matching (AffinaQuest, Bryant).",
//       "Employer connection: verified employers post roles and find alumni talent.",
//       "Privacy and fairness: consent center, role-based access, bias checks (Jones et al., 2017).",
//     ],
//     solutionTypes: [
//       "Alumni engagement suites (e.g., Graduway): strong events, weaker career data.",
//       "Education CRMs (e.g., AffinaQuest): good for advancement, weak in job tracking.",
//       "Career platforms: connect employers/graduates but don’t fix fragmented data.",
//       "Custom platform (chosen): integrates data, analytics, networking with institutional control.",
//     ],
//     pros: [
//       "Fixes fragmented data and career visibility with self-updates.",
//       "Delivers mentoring, predictive insights, and standardized KPIs.",
//       "Keeps privacy/fairness under institutional control.",
//       "Creates a long-term professional social hub for alumni.",
//     ],
//     cons: [
//       "More complex than off-the-shelf tools; phased MVP→MMP mitigates risk.",
//       "Adoption depends on engaging features (jobs, mentoring).",
//       "Requires active privacy/bias management and more build effort.",
//     ],
//     marketReview: {
//       vendor: "Yello + WayUp",
//       rating: "4.4 / 5 (69 reviews)",
//       summary:
//         "Early-career recruiting platform with DEI focus; personal candidate experience boosts engagement. Shows appetite for diversity-aware matching and recruiter-friendly UX.",
//       implication: "Incorporate inclusive matching signals and recruiter-facing dashboards.",
//     },
//   },
// };

// // Proposed Solution
// const solutionSection = {
//   id: "solution",
//   title: "Proposed solution",
//   hero: "",
//   intro: "A university-owned LinkedIn plus analytics layer that stays relevant from first semester through alumni years.",
//   coreGoals: [
//     "Unify student and alumni data for analytics and AI recommendations.",
//     "Personalized jobs, events, news, and mentorship suggestions.",
//     "Structured talent pipeline for employers, not static CVs.",
//     "Admin visibility into engagement, outcomes, and system health.",
//   ],
//   keyFeatures: [
//     "Role-based dashboards for students, employers, and admins.",
//     "Profiles with skills, work history, education, interests, and engagement scores.",
//     "Match engine scoring jobs and mentorship opportunities.",
//     "Anonymized AI assistant for fit explanation and profile tips.",
//   ],
//   strategy: {
//     swotImage: "assets/img/swot.png",
//     statement:
//       "The GHU Alumni Connect Analytics Platform unifies alumni data and engagement. It differentiates with predictive analytics, explainable dashboards, and a self-service portal for personalized networking, mentorship, and career development. Success targets: +10% alumni engagement, verified profile accuracy from 30% to 60% in year one, and predictive models improving fundraising conversion by 5–7%.",
//     vision:
//       "Strengthen alumni engagement by unifying data, delivering predictive insights, and fostering connections for mentorship, career growth, and fundraising.",
//     targetUsers: "Primary: GHU alumni, administrators. Secondary: employers, mentors, donors.",
//     differentiators:
//       "Institution-owned portal with unified data, predictive models, and tailored dashboards; not a generic external platform.",
//     goals: [
//       "Increase alumni engagement by 10% (events + mentorship) by Dec 2026.",
//       "Improve verified alumni profile accuracy from 30% to 60% by Dec 2026.",
//       "Launch donor likelihood and mentor match models with ≥0.75 AUC by Apr 2026.",
//     ],
//     risks: "Data privacy and competition from external platforms; mitigated by consent-first design and clear differentiation.",
//     swotText:
//       "Strengths: strong academic reputation, 70k alumni, existing CRMs. Weaknesses: fragmented legacy systems, no modern self-service portal. Opportunities: fundraising lift, structured mentorship, predictive analytics for careers/donors. Threats: privacy concerns; competition from platforms like LinkedIn.",
//   },
// };

// // Architecture
// const architectureSection = {
//   id: "architecture",
//   title: "Architecture",
//   hero: "",
//   layers: {
//     business: [],
//     is: [],
//     tech: [],
//   },
//   businessSummary:
//     "Structured multi-layer design unifies business processes, modular apps, and scalable data services. Business Architecture supports student career exploration, alumni engagement, employer recruitment, AI-assisted mentorship identification, and administrative monitoring processes often in separate systems, here combined to prevent fragmentation before and after graduation.",
//   isSummary:
//     "Information Systems Architecture organizes collections for profiles, skills, jobs, events, news, applications, and AI match results. UI modules (Dashboard, Jobs, Events, News, Mentorship, Employer Workspace, Admin Analytics) consume structured datasets via secure REST endpoints. A Matching Engine runs job/mentor/donor matching; an AI Assistant (OpenRouter) provides personalized analysis with anonymized inputs.",
//   techSummary:
//     "Technology Architecture uses hybrid storage: flexible JSON for fast UI and analytical tables for scoring/reporting. React UIs talk to services via secure routes; role-based auth governs students, employers, and admins. Balances flexibility, performance, and extensibility for MVP and future growth.",
//   conceptualSummary:
//     "StudentHub sits at the center of students, alumni, employers, instructors, and staff via shared data and role based access. Core modules matching engine, events/news engine, jobs/employer, engagement tracking, admin analytics run on a common UI layer. Students/alumni get matches, skills insights, tasks, mentorship, events, news; employers review candidates; instructors support mentorship; staff monitor engagement and permissions.",
//   erdSummary: "ERD covers users, profiles, skills, jobs, events, news, applications, matches, mentorship, engagement scores, and giving behavior.",
// };



// const dataSection = {
//   id: "data",
//   title: "Data and Dataset",
//   hero: "",
//   datasetSummary:
//     "Unified synthetic dataset built for StudentHub MVP, combining student, alumni, employer, job, events, news, and interaction logs. Mirrors a real university ecosystem without requiring actual institutional data.",

//   mainEntities: [
//     "Users & Roles: unified identity layer for students, alumni, employers, staff, and admins with clean role-based access.",
//     "Student/Alumni Profile: academic history, soft-skill ratings, technical competencies, employability score, certifications, career preferences, engagement behavior, and giving fields.",
//     "Education & Experience: multi-row tables for degrees, work history, responsibilities, and skills to enable matching logic.",
//     "Interactions: logs for events, news, job views, job applications, watchlists, and mentorship interest.",
//     "Jobs & Opportunities: structured postings with skills, tools, salary ranges, responsibilities, domains, seniority, and employer metadata.",
//     "Events & News: items tagged with audience type, skill focus, difficulty, and behavioral metadata for personalized recommendations.",
//   ],

//   generationLogic: [
//     "Synthetic JSON files constructed to mirror the complexity of 2,000+ realistic student and alumni records.",
//     "Attributes placed intentionally into a unified students_alumni entity to avoid fragmentation and support full-lifecycle profiles.",
//     "Rule-driven scoring: GPA, degree type, experience, and soft skills feed into employability and match scores.",
//     "Behavioral logic: event attendance increases engagement_score; news interactions generate interest patterns and content preference.",
//     "Job/mentorship matching: multi-factor scoring with explanations stored inside student_job_matches for transparency.",
//     "Relational mapping: every JSON file converted into relational tables that power dashboards, KPIs, and AI prompts.",
//   ],

//   valueForSolution:
//     "Gives StudentHub a realistic, end-to-end data backbone for testing dashboards, AI-driven recommendations, and matching algorithms. The structure reflects real university data behavior while staying flexible for future modules such as Canvas integration, task boards, and automated insights.",
// };



// // Dashboard
// const dashboardSection = {
//   id: "dashboard",
//   title: "Dashboards",
//   hero: "",
//   overview: "Role-based dashboards translate raw data into actions.",
//   studentView: {
//     title: "Student",
//     bullets: [
//       "Match score, engagement score, profile completeness.",
//       "Recommended jobs, events, news; quick AI assistant access.",
//     ],
//   },
//   employerView: {
//     title: "Employer",
//     bullets: [
//       "Open roles, applications per role, average candidate fit.",
//       "Talent pool view highlighting high-fit candidates.",
//     ],
//   },
//   adminView: {
//     title: "Admin",
//     bullets: [
//       "Platform health: engagement, active users, data accuracy, satisfaction trends.",
//       "Engagement by service: jobs, events, mentorship, news.",
//     ],
//   },
//   exampleInsights: [
//     "Event attendance plus news interactions correlate with higher engagement scores.",
//     "Detailed job descriptions yield more high-fit matches.",
//     "Mentorship needs boosts when engagement lags but satisfaction is high.",
//   ],
// };

// // Ethics
// const ethicsSection = {
//   id: "ethics",
//   title: "Ethics",
//   hero: "",
//   summary:
//     "Building a student and alumni platform demands transparent, consent-first data practices, anonymous AI, and inclusive access from day one.",
//   aiPrivacy: [
//     "AI never receives personal identifiers; it only processes skills, experience level, education, certifications, interests, and role preferences.",
//     "Profile visibility is user-controlled; students and alumni decide what employers see, and can export or permanently delete their data (FERPA/GDPR aligned).",
//     "Account deletion removes associated records; consent and data life cycle are enforced across the stack.",
//   ],
//   accessibility: [
//     "Accessible by design: semantic structure, ARIA support, readable contrast, keyboard navigation, scalable typography.",
//     "Voice navigation is planned so users can open pages, search opportunities, or trigger actions by speaking.",
//     "Bias safeguards: match scores never use gender, ethnicity, or disability status—only skills, experience, preferences, and engagement behaviors.",
//   ],
//   privacyPromise:
//     "Anonymous AI usage, explicit consent, export/delete controls, and role-based visibility keep student and alumni data protected.",
//   inclusionPromise:
//     "Inclusive UX with accessibility defaults today and voice navigation on the roadmap ensures everyone can benefit from StudentHub.",
// };

// // Lessons
// const lessonsSection = {
//   id: "lessons",
//   title: "Lessons learned",
//   hero: "",
//   bullets: [
//     "Building the MVP exposed real gaps beyond analysis.",
//     "Solving alumni engagement needs data quality, UX, and motivation together.",
//     "Iterative builds refined scoring, ethics, and dashboards.",
//     "Staying relevant after graduation shaped every design choice.",
//     "Shifted from writing about systems to a shipping mindset.",
//   ],
// };

// // Appendix
// const appendixSection = {
//   id: "appendix",
//   title: "Appendix",
//   hero: "",
//   links: [
//     { label: "GitHub repository", url: "#" },
//     { label: "Full ERD image", url: "#" },
//     { label: "Architecture deck", url: "#" },
//     { label: "Dataset docs (CSV + rules)", url: "#" },
//   ],
// };

// const charterSection = {
//   id: "charter",
//   title: "Project Charter",
//   hero: "",
// };

// // Ordered sections for navigation
// const sections = [
//   homeSection,
//   problemSection,
//   researchSection,
//   solutionSection,
//   charterSection,
//   architectureSection,
//   dataSection,
//   dashboardSection,
//   ethicsSection,
//   lessonsSection,
//   appendixSection,
// ];

// window.presentationData = {
//   projectMeta,
//   homeSection,
//   problemSection,
//   researchSection,
//   solutionSection,
//   charterSection,
//   architectureSection,
//   dataSection,
//   dashboardSection,
//   ethicsSection,
//   lessonsSection,
//   appendixSection,
//   sections,
// };

// // Backward friendly alias
// window.siteDataV3 = window.presentationData;



// data3.js
// Portfolio-friendly content model for StudentHub MRP

const projectMeta = {
  id: "studenthub-mrp",
  title: "StudentHub - Alumni & Student Engagement Analytics",
  tagline: "Turning scattered alumni data into a lifetime career and engagement hub.",
  author: "Kamran Suleyman (StudentHub MRP)",
  year: 2025,
  hero: "assets/img/hero/home2.png",
};

// Home
const homeSection = {
  id: "home",
  title: "StudentHub - Project Overview",
  hero: "",
  intro:
    "StudentHub is a unified alumni and student platform with analytics, AI-assisted matching, and role-based dashboards.",
  executiveSummary: {
    title: "Executive summary",
    text: [
      "Universities struggle to keep a clear, long-term view of student and alumni career outcomes because information is scattered across CRMs, spreadsheets, surveys, and external tools like LinkedIn. Once students graduate, they often stop using university systems completely, so staff lose visibility into real career paths and engagement. This makes it harder to support alumni with relevant jobs or mentors and forces the university to rely on partial or unreliable reports.",
      "StudentHub is my answer to that gap: a university-owned platform that behaves like a lifetime digital profile instead of a short-term campus portal. It brings together structured data and role-based dashboards. Students and alumni see personalized job, event, news, and mentorship suggestions with simple, explainable match scores. Employers see a structured view of candidates instead of static CVs. Administrators get live visibility into engagement, outcomes, and platform health, plus signals when data is missing or outdated.",
      "While building the MVP, I saw that centralized, clean data directly improves match relevance and dashboards. Engagement also changes when recommendations include events, mentors, and useful content, not just jobs. A privacy-first AI approach—where the model only sees skills, experience, and interests, not names or IDs—helps keep trust while still giving practical feedback. Synthetic but realistic datasets made it possible to test these flows safely without using real student records.",
      "The goal is a platform that students actually keep using after graduation. By treating alumni and student data as something that is updated over time, StudentHub helps the university improve employability metrics, stay connected to alumni, and build clearer paths between students, employers, and the institution. Over time, the same data can also support more advanced analytics and decision-making.",
    ],
  },
};

// Problem
const problemSection = {
  id: "problem",
  title: "Problem",
  hero: "",
  overview:
    "The university cannot reliably match alumni or graduating students to relevant job opportunities because career data is fragmented, outdated, and rarely updated after graduation.",
  bullets: [
    "Alumni career records are spread across legacy systems, spreadsheets, old CRM entries, and one-off surveys. Without consistent and structured employment data, the university cannot track outcomes, personalize engagement, or confidently communicate alumni success stories.",
  ],
  chosenProblem:
    "Selected option: poor data and career tracking blocks meaningful job matching across alumni, students, and employers.",
  selectionRationale:
    "This option combines data quality, engagement, and employability into one problem and can still be prototyped realistically with synthetic profiles, jobs, and skills.",
  solutionAngle:
    "Create a single place where alumni and student career data is stored, updated, and linked to jobs and mentors, then use that to power match scores and dashboards.",
  optionsSummary: [
    "Option 1: Fix outdated and missing alumni data (foundational but mostly behind the scenes).",
    "Option 2: Improve collaboration across alumni, students, and employers (important but hard to simulate without data).",
    "Option 3: Poor data and career tracking blocks job matching (selected focus).",
  ],
  stakeholders: [
    {
      role: "Students",
      pain:
        "No clear post-graduation hub and weak guidance on jobs or mentors because data about their skills and goals is not used properly.",
    },
    {
      role: "Alumni",
      pain:
        "No structured way to keep their profile current, find roles, or offer mentoring support through the university.",
    },
    {
      role: "Employers",
      pain:
        "No consistent, structured talent pipeline from the university; static job boards make it hard to find verified, high-fit candidates.",
    },
    {
      role: "Administrators",
      pain:
        "No single, trustworthy view of alumni careers or engagement, which makes targeted outreach and reporting difficult.",
    },
    {
      role: "University staff",
      pain:
        "Cannot easily identify strong alumni mentors or supporters without a system that surfaces them based on skills, experience, and consent.",
    },
  ],
};

// Research & Insights
const researchSection = {
  id: "research",
  title: "Research and insights",
  hero: "",
  summary:
    "Across research and case studies, the same pattern appears: fragmented alumni data, manual data collection, and weak mentoring structures limit engagement. When institutions centralize data, define clear KPIs, and use predictive models with inclusive mentoring, outcomes improve in a measurable way.",
  keyFindings: [
    "Predictive scoring can lift outreach and conversion, but only when the underlying data is cleaned, consolidated, and owned by the institution.",
    "Standardized engagement KPIs and dashboards, like those from CASE, make it easier to compare, benchmark, and manage programs.",
    "Mentoring has a clear positive impact on career outcomes, especially for international and underrepresented students, when it is structured and supported by systems.",
    "Automation, self-service portals, explainable models, and consent controls are essential to keep alumni data accurate and ethically managed over time.",
  ],
  matrix: [
    {
      theme: "Tech Solutions",
      source: "AffinaQuest (2023)",
      insight:
        "Carnegie Mellon used predictive analytics to rank donors and volunteers. Data cleaning and consolidation came first. Dashboards then monitored campaigns and showed uplift in engagement.",
      implication: "Include donor and mentor scoring views in the MVP dashboards.",
    },
    {
      theme: "Business Impact",
      source: "Bryant University (2018)",
      insight:
        "Predictive models were able to identify which factors drive donor likelihood and gift size, such as age, retirement, and major. This shows how structured models can support advancement decisions.",
      implication: "Use a similar approach for early donor prediction and refine in later releases.",
    },
    {
      theme: "Industry Trends",
      source: "CASE (2022)",
      insight:
        "Standardized alumni engagement metrics help compare programs and track long-term progress. Institutions using these metrics report clearer results and stronger cases for investment.",
      implication: "Align StudentHub’s KPI framework and dashboards with CASE-style metrics.",
    },
    {
      theme: "Tech Solutions",
      source: "Chi, Jones, & Grandham (2012)",
      insight:
        "The Smart Alumni System combined data mining with social networking for profiles, mentor recommendations, and groups. It showed that integrated systems can increase engagement.",
      implication: "Plan recommendation features as part of the portal roadmap, not just as a one-off tool.",
    },
    {
      theme: "Business Impact",
      source: "Chu et al. (2019)",
      insight:
        "A structured alumni mentoring program improved international graduate students’ confidence and career planning. Mentors’ real-world experience was a key factor.",
      implication: "Design mentor matching in a way that highlights inclusive support, not only technical fit.",
    },
    {
      theme: "Tech Solutions",
      source: "Dang (2023)",
      insight:
        "An automated pipeline for alumni data collection, using APIs and scraping, reduced manual effort and supported ML-powered mentor recommendations.",
      implication: "Start with CSV and Excel ingestion in the MVP and keep space for automation later.",
    },
    {
      theme: "Industry Trends",
      source: "Eby et al. (2008)",
      insight:
        "Mentored individuals report higher job satisfaction, more promotions, and better pay. The study also stresses the need for structured evaluation and careful methods.",
      implication: "Track mentorship outcomes and satisfaction in dashboards, not just activity counts.",
    },
    {
      theme: "Tech Solutions",
      source: "Gomez-Cravioto et al. (2022)",
      insight:
        "Machine learning models, combined with SHAP explanations, were used to predict alumni income, while discussing fairness and proxy variables like gender.",
      implication:
        "Any predictive model in StudentHub should be explainable and checked for unintended bias before being used in outreach.",
    },
    {
      theme: "Business Impact",
      source: "Graduway (2022)",
      insight:
        "Centralizing alumni engagement data led to higher volunteer and giving activity. CASE metrics were used to show that change in a transparent way.",
      implication:
        "Use centralized engagement data to show impact to leadership, not just to drive internal dashboards.",
    },
    {
      theme: "Ethics & Regulation",
      source: "Jones et al. (2017)",
      insight:
        "Good alumni tracking practices require informed consent, clear privacy safeguards, and sustainable staffing. Using multiple sources like surveys and LinkedIn improves quality.",
      implication:
        "Add consent flags, standardized fields, and audit logs to StudentHub’s data ingestion design from the start.",
    },
    {
      theme: "Tech Solutions",
      source: "Kumar et al. (2023)",
      insight:
        "A self-service alumni portal, with search and yearbook-style views, increased data accuracy and peer-to-peer networking.",
      implication:
        "Make profile self-service a core part of the portal so alumni can keep their own records current over time.",
    },
    {
      theme: "Business Impact",
      source: "O’Connor (2022)",
      insight:
        "Alumni are willing to support strategic goals when they see clear, structured ways to contribute. Engagement is strongest when tied to a long-term plan.",
      implication:
        "Show how StudentHub’s engagement metrics connect back to university-level strategic goals, not just feature usage.",
    },
  ],
  journal: {
    revisionLog: [
      "09/10/25 — v001: Initial draft created",
      "09/11/25 — v002: Market research and journal completed",
      "09/11/25 — v003: Market review (Gartner Peer Insights) completed",
    ],
    definition:
      "The Alumni Connect Analytics Platform is a university-owned system that unifies alumni career and engagement data to fix fragmented records, enable matching, and support targeted outreach under institutional governance.",
    characteristics: [
      "Data foundation: imports from spreadsheets and systems into a single, consistent model.",
      "Self-service: alumni can update employment, skills, and mentoring interests themselves (Kumar et al., 2023).",
      "Dashboards: CASE-style engagement and career KPIs for administrators (CASE, 2022).",
      "Predictive insights: early donor and mentor likelihood, with a path toward job and skill matching (AffinaQuest, Bryant).",
      "Employer connection: verified employers post roles and search for relevant alumni talent.",
      "Privacy and fairness: consent center, role-based access, and checks for bias in data use (Jones et al., 2017).",
    ],
    solutionTypes: [
      "Alumni engagement suites (e.g., Graduway): strong on events and networking but weaker on career data depth.",
      "Education CRMs (e.g., AffinaQuest): helpful for advancement and campaigns but not designed for ongoing job tracking.",
      "Career platforms: link employers and graduates but do not solve the university’s own fragmented data problem.",
      "Custom platform (chosen): combines data, analytics, and networking into one system the institution controls.",
    ],
    pros: [
      "Directly fixes fragmented career data and makes it easier to see alumni outcomes.",
      "Supports mentoring, predictive insights, and clear KPIs in one place.",
      "Keeps privacy and fairness under the university’s control instead of handing everything to external tools.",
      "Creates a long-term professional hub that still feels connected to the institution.",
    ],
    cons: [
      "More complex to build than buying a ready-made tool, though a phased MVP to MMP approach reduces risk.",
      "Adoption depends on real value to users, so features like jobs, mentoring, and content must stay useful.",
      "Requires ongoing attention to privacy, bias, and maintenance instead of a one-time setup.",
    ],
    marketReview: {
      vendor: "Yello + WayUp",
      rating: "4.4 / 5 (69 reviews)",
      summary:
        "A recruiting platform focused on early-career talent and DEI, offering more personal candidate experiences for recruiters.",
      implication:
        "There is clear demand for inclusive matching and recruiter-friendly tools; StudentHub should reflect that in its matching logic and employer-facing views.",
    },
  },
};

// Proposed Solution
const solutionSection = {
  id: "solution",
  title: "Proposed solution",
  hero: "",
  intro:
    "StudentHub acts like a university-owned LinkedIn with an analytics layer that stays relevant from the first semester through alumni years.",
  coreGoals: [
    "Bring student and alumni data into one place for analytics and AI-backed recommendations.",
    "Provide personalized jobs, events, news, and mentorship suggestions that are easy to understand.",
    "Offer a structured talent pipeline for employers instead of static CV uploads.",
    "Give administrators clear visibility into engagement, outcomes, and platform health.",
  ],
  keyFeatures: [
    "Role-based dashboards for students, employers, and admins.",
    "Profiles that combine skills, work history, education, interests, and engagement signals.",
    "A matching engine that scores jobs, mentorship opportunities, and potential donor segments.",
    "An AI assistant that explains fit and suggests profile improvements without seeing personal identifiers.",
  ],
  strategy: {
    swotImage: "assets/img/swot.png",
    statement:
      "The GHU Alumni Student-Hub Platform unifies alumni and student engagement data. It stands out by combining predictive analytics, explainable dashboards, and a self-service portal for networking, mentoring, and career development. Target outcomes include a 10% increase in alumni engagement, moving verified profile accuracy from 30% to 60% in the first year, and improving fundraising conversion by 5–7% through better targeting.",
    vision:
      "Strengthen alumni and student engagement by unifying data, using predictive insights in a careful way, and supporting real relationships around mentorship, careers, and giving.",
    targetUsers:
      "Primary: GHU students, alumni, and administrators. Secondary: employers, mentors, and donors.",
    differentiators:
      "An institution-owned portal with unified data, matching, and analytics, rather than a generic external platform that the university does not fully control.",
    goals: [
      "Increase combined alumni and student engagement by 10% (events and mentorship) by December 2026.",
      "Improve verified alumni profile accuracy from 30% to 60% by December 2026.",
      "Launch donor and mentor match models with at least 0.75 AUC by April 2026.",
    ],
    risks:
      "Privacy expectations and competition from external platforms. StudentHub mitigates this with consent-first design, transparent use of AI, and features tuned to the university context.",
    swotText:
      "Strengths: strong academic reputation, a large alumni base, and existing CRMs that can be integrated. Weaknesses: legacy systems and the lack of a modern self-service portal. Opportunities: more effective fundraising, structured mentorship, and better use of analytics for careers and advancement. Threats: privacy concerns, limited capacity, and the pull of platforms like LinkedIn.",
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
    "The business architecture connects student career exploration, alumni engagement, employer recruiting, AI-assisted mentorship identification, and administrative monitoring into one set of workflows. These processes usually live in separate tools; here they are intentionally combined around a single platform so that data is not lost when students graduate.",
  isSummary:
    "The information systems architecture organizes collections for profiles, skills, jobs, events, news, applications, and AI match results. UI modules such as Dashboard, Jobs, Events, News, Mentorship, Employer Workspace, and Admin Analytics read from structured datasets through secure endpoints. A matching engine handles job, mentor, and donor matching, while an AI assistant (via OpenRouter) gives personalized analysis using anonymized inputs.",
  techSummary:
    "The technology architecture uses a hybrid approach: flexible JSON-based storage for fast UI interactions and relational-style tables for scoring, reporting, and dashboards. React front ends communicate with backend services over secure routes, and role-based authentication controls access for students, employers, and admins. The goal is to keep the MVP simple but ready for future expansion.",
  conceptualSummary:
    "StudentHub sits in the middle of students, alumni, employers, instructors, and staff through shared data and role-based access. Core modules include the matching engine, events and news engine, jobs and employer tools, engagement tracking, and admin analytics. Students and alumni get matches, skill insights, tasks, mentorship options, events, and news. Employers see matched candidates. Instructors support mentoring. Staff monitor engagement and manage permissions.",
  erdSummary:
    "The ERD covers users, profiles, skills, jobs, events, news, applications, matches, mentorship, engagement scores, and giving behavior in one connected model.",
};

const dataSection = {
  id: "data",
  title: "Data and Dataset",
  hero: "",
  datasetSummary:
    "The StudentHub MVP uses a unified synthetic dataset that combines student, alumni, employer, job, events, news, and interaction logs. It behaves like real university data but does not rely on any actual institutional records.",
  mainEntities: [
    "Users and Roles: a unified identity layer for students, alumni, employers, staff, and admins with clear role-based access.",
    "Student and Alumni Profile: academic history, soft skill ratings, technical competencies, employability score, certifications, preferences, engagement behavior, and giving-related fields.",
    "Education and Experience: separate tables for degrees, work history, responsibilities, and skills that can drive matching logic.",
    "Interactions: logs for events, news, job views, job applications, watchlists, and mentorship interest and activity.",
    "Jobs and Opportunities: structured job postings with skills, tools, salary bands, responsibilities, domains, seniority, and employer metadata.",
    "Events and News: items tagged with audience segments, skill focus, difficulty, and behavioral metadata to support recommendations.",
  ],
  generationLogic: [
    "Synthetic JSON files built to behave like 2,000+ realistic student and alumni profiles spread across multiple tables.",
    "Key attributes combined into a unified students_alumni-style entity to keep the lifecycle view together instead of splitting across systems.",
    "Rule-based scoring where GPA, degree type, experience, and soft skills feed into employability and match scores.",
    "Behavioral logic where event attendance and news interactions update engagement_score and help build content preferences.",
    "Job and mentorship matching driven by multi-factor scores with reasoning saved in match records for transparency.",
    "Relational mapping so each JSON collection can be converted into tables that power dashboards, KPIs, and AI prompts.",
  ],
  valueForSolution:
    "This dataset gives StudentHub a realistic backbone for testing dashboards, AI recommendations, and matching logic end to end. It reflects typical university behavior patterns while staying flexible for future work, such as Canvas integration, task boards, and more automated insights.",
};

// Dashboard
const dashboardSection = {
  id: "dashboard",
  title: "Dashboards",
  hero: "",
  overview:
    "Role-based dashboards turn raw data into views that each user group can actually act on.",
  studentView: {
    title: "Student",
    bullets: [
      "Shows match score, engagement score, and profile completeness in one place.",
      "Highlights recommended jobs, events, and news, with quick access to the AI assistant.",
    ],
  },
  employerView: {
    title: "Employer",
    bullets: [
      "Summarizes open roles, applications per role, and average candidate fit.",
      "Provides a talent pool view that surfaces high-fit candidates for follow-up.",
    ],
  },
  adminView: {
    title: "Admin",
    bullets: [
      "Shows platform health, including engagement, active users, data accuracy, and satisfaction trends.",
      "Breaks down engagement across jobs, events, mentorship, and news to show where behavior is strong or weak.",
    ],
  },
  exampleInsights: [
    "Students who regularly attend events and interact with news tend to have higher engagement scores and better match quality.",
    "Richer job descriptions with clear skills and responsibilities are more likely to generate high-fit candidates.",
    "Mentorship demand grows when engagement is high but students still feel uncertain about next steps, which dashboards can surface.",
  ],
};

// Ethics
const ethicsSection = {
  id: "ethics",
  title: "Ethics",
  hero: "",
  summary:
    "A platform that connects student and alumni careers must be consent-first, transparent, and accessible, with clear boundaries on how data and AI are used.",
  aiPrivacy: [
    "The AI assistant never receives names, emails, or IDs. It works only with skills, experience level, education, certifications, interests, and role preferences.",
    "Profile visibility is controlled by students and alumni. They decide what employers see and can request export or deletion of their data in line with FERPA and GDPR expectations.",
    "Account deletion is treated seriously: linked records are cleaned up, and consent and data lifecycle are enforced across the system.",
  ],
  accessibility: [
    "The interface is designed with accessibility in mind: semantic structure, ARIA support, readable contrast, keyboard navigation, and adjustable text sizes.",
    "Voice-style navigation is on the roadmap so users can open pages, search for opportunities, or trigger common actions through speech.",
    "Matching logic does not use gender, ethnicity, or disability status. Scores are based on skills, experience, preferences, and engagement behaviors only.",
  ],
  privacyPromise:
    "Anonymous AI inputs, explicit consent, export and delete options, and role-based visibility form the core of how StudentHub handles data.",
  inclusionPromise:
    "Inclusive UX, accessibility defaults, and future voice navigation are all part of making sure StudentHub works for as many people as possible.",
};

// Lessons
const lessonsSection = {
  id: "lessons",
  title: "Lessons learned",
  hero: "",
  bullets: [
    "Building the MVP showed that analysis alone is not enough; shipping a working flow surfaces real gaps.",
    "Improving alumni engagement needs good data, clear UX, and user motivation at the same time, not in isolation.",
    "Iterating on the prototype helped refine scoring logic, ethical rules, and what belongs in dashboards.",
    "Designing something that stays useful after graduation changes how you prioritize features from day one.",
    "This project moved my focus from only describing systems to actually delivering and testing them.",
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
