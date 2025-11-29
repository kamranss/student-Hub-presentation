// data.js
// Content model for StudentHub MRP case-study website

export const projectMeta = {
  id: "studenthub-mrp",
  title: "StudentHub – Alumni & Student Engagement Analytics",
  tagline:
    "Turning fragmented alumni data into a lifetime career and engagement platform.",
  author: "Kamran Suleyman (StudentHub MRP)",
  year: 2025,
};

export const homeSection = {
  id: "home",
  title: "StudentHub – Project Overview",
  intro:
    "StudentHub is a data-driven platform that helps universities keep students and alumni engaged long after graduation. It centralizes profiles, jobs, events, news, mentorship, and analytics into one system, instead of scattering everything across spreadsheets, CRMs, and external platforms.",
  executiveSummary: {
    title: "Executive summary",
    text: [
      "Universities often lose visibility into student and alumni outcomes once people graduate. Data lives in different systems – legacy CRMs, spreadsheets, surveys, LinkedIn – which makes it hard to track employment, engagement, or the impact of career services. As a result, job matching, mentorship, and decision-making rely on partial or outdated information.",
      "StudentHub addresses this by creating a lifetime digital profile for each student and alum. It combines structured data, synthetic datasets, and anonymized AI prompts to power role-based dashboards for students, employers, and administrators. Students get personalized job and mentorship suggestions, employers see structured talent pipelines, and admins monitor engagement, outcomes, and platform health.",
      "The MVP uses a realistic synthetic dataset and a multi-layer architecture (business, IS, and technology). It demonstrates that once data is unified and visualized properly, the university can move from static reports to continuous insights about engagement, employability, and alumni relationships."
    ],
  },
};

// 1) Problem context & stakeholders
export const problemSection = {
  id: "problem",
  title: "Problem context & stakeholders",
  summary:
    "University systems are built for enrolled students, not for the full career lifecycle. After graduation, people stop using university platforms, and the institution loses visibility.",
  bullets: [
    "Data about students and alumni is fragmented across CRMs, spreadsheets, surveys, and external tools like LinkedIn.",
    "Career services, alumni relations, and employers all see only a slice of the full picture, which limits job matching, mentorship, and outcome tracking.",
    "Most student portals become irrelevant after graduation, so alumni drift away and employers lose an easy way to reach verified talent.",
  ],
  stakeholders: [
    {
      label: "Students",
      painPoints: [
        "No single place to see relevant jobs, events, news, and mentorship after graduation.",
        "No clear feedback on profile gaps or how to improve match chances.",
      ],
    },
    {
      label: "Alumni",
      painPoints: [
        "Want networking, curated content, and ways to mentor or give back, but typically receive generic emails and surveys.",
      ],
    },
    {
      label: "Employers",
      painPoints: [
        "Career fairs and static job boards do not highlight best-fit candidates or match scores.",
      ],
    },
    {
      label: "Administrators",
      painPoints: [
        "Lack real-time dashboards for engagement, placement, or alumni outcomes.",
        "Decision-making is based on partial reports instead of continuous data.",
      ],
    },
  ],
};

// 2) Research & insights (website version – short)
export const researchSection = {
  id: "research",
  title: "Research & insights",
  summary:
    "Industry reports and academic work confirm that alumni data is fragmented, engagement measurement is inconsistent, and there is a gap for integrated mentoring and analytics platforms.",
  keyFindings: [
    "CASE and similar organizations show that institutions with structured engagement tracking significantly outperform those using manual or scattered data.",
    "Studies on alumni tracking highlight that employment data is usually split across surveys, CRMs, and social media, making clean datasets hard to maintain.",
    "Research on predictive analytics and mentoring (e.g., alumni income prediction, mentoring outcomes for international students) supports the idea of using scoring and recommendation engines inside alumni systems.",
    "Existing tools like Graduway or advancement CRMs cover parts of the journey (engagement, fundraising, or CRM) but rarely connect students, alumni, employers, and admins in one continuous ecosystem.",
  ],
};

// 3) Proposed solution (website version – short)
export const solutionSection = {
  id: "solution",
  title: "Proposed solution",
  intro:
    "StudentHub is a web-based platform that acts like a university-owned version of LinkedIn plus an analytics layer. It is designed to stay relevant from the first semester through many years after graduation.",
  coreGoals: [
    "Unify student and alumni data into a structured model that supports analytics and AI-assisted recommendations.",
    "Give students and alumni personalized job, event, news, and mentorship suggestions.",
    "Provide employers with a structured, searchable talent pipeline instead of static CVs.",
    "Enable administrators to monitor engagement, outcomes, and system health in real time.",
  ],
  keyFeatures: [
    "Role-based dashboards for students, employers, and admins.",
    "Centralized profiles with skills, work history, education, interests, and engagement scores.",
    "Match engine that scores jobs and mentorship opportunities using skills, experience, and behavior.",
    "Anonymized AI assistant that explains job fit, suggests profile improvements, and helps with interview preparation or cover notes.",
  ],
  architectureNote:
    "The solution uses a layered architecture: business processes (engagement, matching, reporting), IS modules (dashboards, portals, matching service), and technology components (React front-end, API layer, databases, analytics engine).",
};

// 4) Architecture & data design (short website version)
export const architectureSection = {
  id: "architecture",
  title: "Architecture & data design",
  businessLayer: [
    "Collect and clean student and alumni data from different sources.",
    "Update and verify profiles over time.",
    "Match students with jobs, mentors, and events.",
    "Track engagement and outcomes for reporting.",
  ],
  isLayer: [
    "Student and alumni web interface.",
    "Employer portal for posting roles and viewing candidates.",
    "Admin dashboard for engagement, placement, and satisfaction KPIs.",
    "Matching engine and notification services.",
  ],
  techLayer: [
    "Frontend: React-based UI for dashboards and cards.",
    "APIs to serve jobs, events, matches, and analytics.",
    "Databases: JSON-like collections plus relational tables for reporting and KPIs.",
    "Security: role-based access, encrypted traffic, audit-friendly logs.",
  ],
  erdSummary:
    "The ERD includes users, profiles, skills, jobs, events, news, applications, matches, mentorship programs, engagement summaries, and giving behavior. Interaction tables (event registrations, news interactions, bookmarked jobs) feed scoring and dashboards.",
};

// 5) Data & dataset section (short website version)
export const dataSection = {
  id: "data",
  title: "Data & dataset",
  datasetSummary: [
    "Synthetic dataset of about 2,000 alumni-like records with ~70 columns.",
    "Modeled after public job and profile datasets, then expanded using Python.",
    "Represents alumni from 2000–2025 with realistic distributions of majors, roles, and locations.",
  ],
  mainEntities: [
    "Identity: IDs, names, locations, graduation year.",
    "Education: degrees, majors, GPA, years since graduation.",
    "Employment: job titles, industries, salaries, experience years.",
    "Skills: soft skills and technical skills scored on a numeric scale.",
    "Engagement & mentoring: events attended, scores, mentorship interest, and mentoring activity.",
    "Donations: last-year and projected next-year giving, used only for analytics.",
  ],
  generationLogic: [
    "Started from example Kaggle-style data, then cleaned and standardized it.",
    "Used NumPy/Pandas to generate additional rows and computed fields like years_since_grad, engagement_score, and match_score.",
    "Applied rule-based logic so that senior alumni have higher experience, salaries, and a higher chance to mentor or donate.",
  ],
  valueForSolution:
    "This dataset allows the prototype to simulate real patterns in employability, engagement, and mentoring, and provides enough structure to test dashboards, KPIs, and the matching model.",
};

// 6) Dashboard & insights (short website version)
export const dashboardSection = {
  id: "dashboard",
  title: "Dashboard & insights",
  overview:
    "StudentHub includes dashboards for students, employers, and administrators. Each dashboard turns the raw data into practical views and KPIs.",
  studentView: {
    title: "Student dashboard",
    bullets: [
      "Shows match score, engagement score, and profile completeness.",
      "Highlights recommended jobs, events, and news based on skills and past interactions.",
      "Provides quick access to the AI assistant for role fit, profile feedback, interview prep, and cover notes.",
    ],
  },
  employerView: {
    title: "Employer dashboard",
    bullets: [
      "Displays open positions, applications per role, and average candidate fit.",
      "Shows a talent pool view (e.g., how many students are an excellent or good match).",
      "Helps employers focus on high-fit candidates instead of manually filtering through CVs.",
    ],
  },
  adminView: {
    title: "Admin analytics dashboard",
    bullets: [
      "Tracks platform health: engagement rate, active users, data accuracy, and satisfaction trends.",
      "Breaks down engagement by service: job matching, events, mentorship, and directory usage.",
      "Provides recommendation panels (e.g., improve mentorship engagement, expand employer features, launch mobile app) based on observed metrics.",
    ],
  },
  exampleInsights: [
    "Students who attend at least one event and interact with news more than three times have significantly higher engagement scores.",
    "Detailed job descriptions lead to more high-fit matches compared to generic postings.",
    "Mentorship modules need support when engagement is low but satisfaction from existing mentoring pairs is high.",
  ],
};

// 7) Metrics for success (website-level summary – lighter than report)
export const kpiSection = {
  id: "metrics",
  title: "Metrics for success",
  summary:
    "KPIs focus on whether StudentHub improves engagement, employability, and visibility for the university.",
  groups: [
    {
      label: "Data quality & profiles",
      items: [
        "% of users with >70% profile completeness.",
        "Reduction in missing or inconsistent records across profile and employment data.",
        "Frequency of profile updates per term.",
      ],
    },
    {
      label: "Engagement",
      items: [
        "Weekly active users and average session length.",
        "Event RSVPs and attendance for key programs.",
        "News interactions and number of saved/bookmarked jobs.",
      ],
    },
    {
      label: "Matching & outcomes",
      items: [
        "Share of students in high match tiers (e.g., ≥70% fit).",
        "Application-to-interview conversion for recommended roles.",
        "Mentorship pairings created and their engagement over time.",
      ],
    },
    {
      label: "Employer & admin adoption",
      items: [
        "Active employers and jobs posted per month.",
        "Employer usage of candidate views and filters.",
        "Admin dashboard visits and number of insights used for decisions.",
      ],
    },
  ],
};

// 8) Ethics & social considerations (short)
export const ethicsSection = {
  id: "ethics",
  title: "Ethical & social considerations",
  bullets: [
    "AI prompts are anonymized: no names or personal identifiers are sent, only skills, experience, and preferences.",
    "Students and alumni control what they share and can request data export or deletion.",
    "Accessibility is treated as a requirement: keyboard navigation, readable contrast, and screen-reader friendly structure.",
    "Matching models ignore sensitive attributes (gender, ethnicity, disability) and focus on skills, experience, and engagement.",
  ],
};

// 9) Lessons learned / reflection (short website version)
export const lessonsSection = {
  id: "lessons",
  title: "Lessons learned",
  bullets: [
    "Analysis is important, but you only discover real gaps once you start building an MVP.",
    "Solving a high-level problem (like alumni engagement) usually means solving many smaller problems around data quality, UX, and motivation.",
    "Iterative development helped refine the design: each dashboard or feature revealed new requirements for scoring, ethics, or analytics.",
    "A platform like this must stay useful after graduation, which influenced almost every design decision.",
    "This project shifted my mindset from “writing about systems” to actually thinking like a product builder.",
  ],
};

// 10) Appendix / extras (links only – you can fill in URLs)
export const appendixSection = {
  id: "appendix",
  title: "Extras & links",
  description:
    "Additional materials for reviewers who want to go deeper into the architecture or implementation.",
  links: [
    {
      label: "GitHub repository (frontend/backend)",
      url: "#", // TODO: add your real GitHub repo URL
    },
    {
      label: "Full ERD image",
      url: "#", // or route to an image page
    },
    {
      label: "Architecture diagram",
      url: "#",
    },
    {
      label: "Dataset documentation (CSV + generation rules)",
      url: "#",
    },
  ],
};

// Convenient export of all sections as an ordered array for navigation
export const sections = [
  homeSection,
  problemSection,
  researchSection,
  solutionSection,
  architectureSection,
  dataSection,
  dashboardSection,
  kpiSection,
  ethicsSection,
  lessonsSection,
  appendixSection,
];
