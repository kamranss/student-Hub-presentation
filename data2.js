window.siteData = {
  "title": "StudentHub – MVP Report",
  "executiveSummary": {
    "text": "Universities struggle to maintain accurate, long-term visibility into student and alumni career outcomes because their data sits across disconnected CRMs, spreadsheets, surveys, and external platforms like LinkedIn. Once students graduate, they stop using university systems entirely, leaving institutions without reliable insight into their professional progress or engagement. This fragmentation limits the quality of job matching, mentorship programs, employer pipelines, and administrative decision-making. The solution developed in this project is StudentHub, a unified IS/IT platform designed to function as a lifetime digital profile for students and alumni. Rather than behaving like a temporary campus portal, StudentHub offers job, event, news, and mentorship recommendations powered by structured data and anonymized AI assistance. The platform includes role-based dashboards: students receive personalized career guidance and match scores, employers access structured applicant insights, and administrators gain real-time visibility into engagement, outcomes, and system health. Key insights emerged during development: clean, centralized data dramatically improves match relevance and dashboard accuracy; engagement increases when recommendations go beyond jobs to include events and targeted content; and a privacy-first AI model where no personal identifiers are shared builds trust while still delivering meaningful feedback. The expected impact is a sustainable ecosystem that supports students during university and remains valuable after graduation, improving employability metrics, strengthening alumni relationships, and creating smarter, more transparent pathways between students, employers, and the university."
  },
  "problemContext": {
    "title": "Problem Context and Stakeholder Perspectives",
    "overview": "Final problem: the university cannot effectively match alumni to relevant job opportunities because career data is fragmented, outdated, and poorly tracked after graduation.",
    "lifecycleGap": "Three options were evaluated: (1) outdated/missing alumni career data, (2) missed collaboration between alumni, students, and employers, and (3) poor data and career tracking that blocks job matching. Option 3 was selected because it blends data quality, engagement, and career visibility, and can be prototyped with synthetic datasets.",
    "coreProblem": "Fragmented post-graduation data and no integrated employer/alumni pipeline prevent credible outcomes reporting, targeted outreach, and high-fit job matching.",
    "stakeholders": [
      {
        "role": "Students",
        "pain": "No personalized hub that stays useful after graduation; weak guidance on jobs and mentoring because data and matches are incomplete."
      },
      {
        "role": "Alumni",
        "pain": "No structured way to discover roles, mentor, or showcase outcomes; engagement channels are ad hoc (emails, surveys)."
      },
      {
        "role": "Employers",
        "pain": "No structured talent pipeline; static job boards and career fairs make it hard to find verified, high-fit alumni."
      },
      {
        "role": "Administrators",
        "pain": "Lack unified career data and tracking; cannot show credible alumni outcomes or run targeted outreach to improve matches."
      }
    ],
    "solutionAngle": "Solving the selected problem requires centralizing alumni career data, connecting it to job/mentor opportunities, and powering match scores and dashboards. Synthetic data and structured scoring make prototyping realistic without real alumni records.",
    "optionsSummary": [
      "Option 1: Fix outdated/missing alumni data (foundational but backend-heavy).",
      "Option 2: Improve collaboration across alumni, students, employers (human-centered but harder to prototype without data).",
      "Option 3: Poor data & career tracking blocks job matching (selected: integrates data accuracy, engagement, and employability)."
    ],
    "selectionRationale": "Option 3 scored highest because it enables dashboards, matching, and predictive analytics while remaining realistic to simulate with synthetic profiles, jobs, and skills."
  },
  "researchAndInsights": {
    "title": "Research and Insights",
    "summaryParagraphs": [
      "The higher education sector is changing faster than universities can adapt. Studies and industry reports show that institutions are under increasing pressure to modernize alumni data systems, personalize engagement, and create stronger career pipelines. CASE (2022) emphasizes that universities with structured engagement measurement significantly outperform those relying on manual or scattered data practices. This supports the need for a centralized platform like StudentHub, where engagement, mentorship, job activity, and outcomes can be monitored in one place.",
      "Jones et al. (2017) show that employment records are often scattered across surveys, social media, and outdated CRMs, making it difficult to maintain clean, reliable datasets. This fragmentation becomes a bottleneck for career tracking, donor outreach, and employer relationships. The MVP responds by consolidating student and alumni profiles, work histories, events, and interactions into a unified and structured database.",
      "Predictive analytics is reshaping advancement and career services. AffinaQuest (2023) and Bryant University (2018) demonstrate that predictive scoring can help institutions identify high-potential donors, mentors, and volunteers. Gomez-Cravioto et al. (2022) shows that machine learning can predict alumni income and engagement behaviors when data is well-organized. This validates the MVP’s match modules for jobs, mentorship, and donations, where each record includes a score, reasoning, and flags for human review.",
      "Chi et al. (2012) and Chu et al. (2019) highlight the importance of mentoring ecosystems. Smart alumni systems that combine data mining and social networking can enhance outreach, while structured mentoring significantly improves student confidence and career readiness, especially for international students. This aligns with the MVP’s mentorship flows, where alumni can act as mentors, students can enroll in mentorship programs, and admins can confirm matches using clear scoring logic.",
      "A scan of market offerings such as Graduway and AffinaQuest shows that they provide parts of the experience (engagement, advancement, or CRM), but none deliver a unified student–alumni–employer ecosystem that stays relevant after graduation. This gap supports the strategic decision to build a lifetime platform rather than another short-lived university portal."
    ],
    "evidenceSummary": [
      {
        "source": "CASE (2022)",
        "finding": "Structured engagement measurement outperforms manual tracking and validates the need to centralize engagement, jobs, mentorships, and outcomes in one platform."
      },
      {
        "source": "Jones et al. (2017)",
        "finding": "Employment and alumni records are scattered across surveys, social media, and outdated CRMs, making clean datasets rare and validating consolidation of profiles, work histories, events, and interactions."
      },
      {
        "source": "AffinaQuest (2023); Bryant University (2018); Gomez-Cravioto et al. (2022)",
        "finding": "Predictive scoring works when data is well organized. This informs the MVP’s match modules for jobs, mentorship, and donor potential with transparent scores and explanations."
      },
      {
        "source": "Chi et al. (2012); Chu et al. (2019)",
        "finding": "Mentoring ecosystems that combine data mining and social networking improve confidence and readiness, aligning with the mentoring components in the MVP."
      },
      {
        "source": "Market gap analysis",
        "finding": "Vendors like Graduway or AffinaQuest cover specific slices of engagement and advancement, but do not offer a unified student–alumni–employer ecosystem that remains relevant post-graduation."
      }
    ]
  },
  "proposedSolution": {
    "title": "Proposed Solution",
    "overview": "The solution is StudentHub, a unified web-based ecosystem designed to support students and alumni throughout their academic and professional journey, not just during their time at the university. Instead of acting as a temporary student portal, the platform behaves like a personalized professional hub, combining the strengths of LinkedIn, a university CRM, and an AI-driven career assistant. Its purpose is to fix the root problem of fragmented data and limited visibility across students, alumni, employers, and administrators.",
    "dataFoundation": "At the core of the system is a centralized data layer built around structured JSON datasets mapped to an advanced relational schema. It includes student profiles, skills, soft-skill scores, work experience, events, news interactions, job interests, mentorship data, and employer postings. Every user action—registering for events, reading news articles, applying for jobs, or participating in mentorship—is captured as structured interactions. This data powers dashboards, analytics, and AI-driven recommendations.",
    "roles": {
      "students": "Students receive a personalized dashboard showing matched jobs, suggested events, recommended news, profile completeness, and engagement scores. They can explore mentorship programs, bookmark opportunities, and use the built-in AI assistant to understand job relevance, prepare for interviews, identify profile gaps, and generate tailored cover notes. The assistant uses structured student JSON data merged with job metadata.",
      "employers": "Employers have a workspace where they can manage job postings, review applicants, and view match scores that highlight best-fit candidates. The system summarizes applicant profiles, competencies, and application trends, offering a structured alternative to external job boards and creating a cleaner talent pipeline.",
      "admins": "Administrators access real-time dashboards that track engagement, platform usage, event performance, satisfaction trends, and system health metrics. They can identify highly engaged students, monitor job and mentorship program performance, and see which content areas drive the highest interest, allowing them to take informed actions."
    },
    "technicalStack": "The solution uses a modular architecture supported by flexible JSON storage (e.g., MongoDB-style collections) and a relational schema for reporting. The UI is built with React to support dynamic dashboards, cards, tables, and filtering. The AI assistant is powered by OpenRouter API calls, allowing contextual prompts that blend student profile data with job requirements while preserving privacy.",
    "goals": [
      "Improve employability and engagement through personalized, data-driven recommendations.",
      "Give administrators unified visibility into student and alumni behavior and platform health.",
      "Provide employers with structured, high-quality talent pipelines and better match insights.",
      "Create a long-term professional identity and hub that continues beyond graduation."
    ]
  },
  "metricsForSuccess": {
    "title": "Metrics for Success",
    "dataQuality": [
      "Percentage of users with more than 70% profile completion.",
      "Number of updated career entries per term.",
      "Reduction in duplicated or missing profile and career fields."
    ],
    "engagement": [
      "Weekly active users (students and alumni).",
      "Number of bookmarked or saved jobs.",
      "Events joined and attendance patterns.",
      "News articles viewed and interaction depth.",
      "Mentorship interest and sign-ups.",
      "Average session time per user.",
      "Composite scores such as engagement_score, events_score, and mentorship_score."
    ],
    "employability": [
      "Match rate accuracy based on user acceptance and rejection of recommended jobs.",
      "Application-to-interview conversion rates.",
      "Average employer response times to applications.",
      "Distribution of students across match score tiers (e.g., 80–100, 60–79, below 60)."
    ],
    "employerActivity": [
      "Number of job postings per month.",
      "Count of active employers using the platform.",
      "Employer satisfaction ratings and repeat posting behavior."
    ],
    "adminKpis": [
      "Frequency of admin dashboard usage.",
      "Number of successful data imports and integrations.",
      "Volume of insights or alerts generated for interventions.",
      "System health indicators such as uptime, latency, and error rates."
    ],
    "rationale": "These metrics jointly validate whether the platform is solving fragmented data problems, improving engagement, supporting employability, and delivering value to employers and administrators in line with CASE and research-backed benchmarks."
  },
  "architecture": {
    "title": "Architecture of Proposed Solution",
    "businessArchitecture": "At the Business Architecture level, the platform supports core institutional workflows including student career exploration, alumni engagement, employer recruitment, AI-assisted mentorship identification, and administrative monitoring. These processes traditionally exist in separate systems, but here they are intentionally combined to avoid fragmentation and create a continuous experience across the student lifecycle and beyond graduation.",
    "informationSystemsArchitecture": "At the Information Systems Architecture level, the platform organizes data into well-defined collections and tables for profiles, skills, job postings, events, news interactions, applications, matches, engagement scoring, preferences, mentorship profiles, and admin interactions. Each UI module—Dashboard, Jobs, Events, News, Mentorship, Employer Workspace, and Admin Analytics—retrieves structured datasets through secure REST-style endpoints. A dedicated matching engine processes job, mentor, and donor matching, while an AI assistant service (via OpenRouter) generates personalized analysis using anonymized input features.",
    "technologyArchitecture": "The Technology Architecture uses a hybrid storage model: flexible JSON collections support ingestion and rapid UI rendering, while analytical tables power engagement scoring and reporting. React-based interfaces communicate with backend services through secured routes, and role-based authentication ensures proper access for students, employers, and admins. This architecture balances flexibility, performance, and extensibility, supporting current MVP needs and future expansion such as LMS integration and additional AI features."
  },
  "dataStructure": {
    "title": "Data Structure",
    "erd": {
      "figureId": "Fig. 2",
      "title": "StudentHub ERD",
      "caption": "This ERD illustrates the full data model used in the StudentHub MVP, including users, roles, jobs, organizations, events, news, applications, matches, competencies, engagement scoring, preferences, mentorship profiles, and admin interactions."
    },
    "designOverview": "The data structure for the StudentHub MVP is designed around a unified model that supports long-term student and alumni engagement, personalized recommendations, and analytics across multiple modules. Because the university does not provide a real integrated dataset, the system uses synthetic but realistic JSON datasets that mirror the complexity of actual student and alumni records. Each JSON file is converted into structured database entities and mapped to a relational model that supports dashboards, AI prompts, and matching algorithms.",
    "identityAndRoles": "The Users table serves as the core identity layer, linked with Roles, Permissions, and role-based access mappings. This ensures a clean separation between Students, Employers, and Admins while preserving a common data foundation.",
    "studentData": "For students, the system captures far more than standard academic information. The dataset includes soft-skill ratings, technical competency scores, employability test results, career preferences, giving behavior, engagement history, and certifications. These fields informed new tables added specifically for the MVP such as Student_Competency_Scores, Student_Engagement_Summary, Student_Preferences, and Student_Giving_Profile.",
    "experienceAndSkills": "Work experience, education history, and skills are represented through multi-row relational tables. This structure allows the system to generate match scores for jobs and mentorship programs and to surface meaningful recommendations.",
    "behavioralLogic": [
      "GPA, degree type, work experience, and soft skills influence employability scores.",
      "Event attendance increases engagement_score based on weighted event categories and participation depth.",
      "News interactions generate personalized content patterns using view duration, likes, bookmarks, and topic tags."
    ],
    "jobsAndOrganizations": "Jobs, mentorship programs, and organizations follow a structured model. Job JSON files include required skills, tools, salary ranges, responsibilities, and domain tags, mapping into Jobs, Job_Skills, and Organizations tables. Events and news articles are stored with metadata such as targeted audiences, difficulty level, skill focus, and interaction logs. Every user action—reading a news article or joining an event—creates relational entries in News_Interactions and Event_Registrations.",
    "matchingAndAnalytics": "The matching system uses dedicated tables for job matches, mentorship matches, and donor predictions. These records include match scores and JSON-based explanations to ensure transparency for future dashboards. Reporting tables structure engagement and system health indicators, enabling the Admin Dashboard to calculate KPIs such as weekly active users, employer participation, match acceptance rate, and profile completeness.",
    "futureReadiness": "Overall, the data design supports personalization, transparency, and scalability. It reflects real-world complexity while keeping the MVP flexible enough for future features like Canvas assignment integration, personal task boards, and AI-generated insights."
  },
  "dashboardLayer": {
    "title": "Dashboard",
    "dashboardLink": "https://stuff-puma-48890563.figma.site/",
    "overview": "The StudentHub dashboard layer is one of the most important parts of the system because it shows how data comes together to support real decision-making. Each role—Student, Employer, and Admin—has its own dashboard built around personalized insights, interactions, and KPIs. The dashboards demonstrate how the platform solves the problem of fragmented data by transforming raw information into usable intelligence.",
    "studentDashboard": "The student dashboard acts as a personalized homepage. It shows profile completeness, engagement score, recommended jobs with match percentages, suggested events based on interest areas, and news articles related to the student’s field of study or career goals. It combines the student’s skills, soft-skill scores, interests, event history, news interactions, and work experience. For example, if a Physics student frequently reads AI-related news and attends technology events, the system pushes more opportunities in that direction. Match scores display a breakdown derived from job skill requirements, experience compatibility, soft-skill ratings, and location preferences. The dashboard also provides shortcuts to the AI assistant with quick actions such as “How do I match this role?”, “Profile improvements?”, “Interview questions?”, and “Craft a cover note.”",
    "employerDashboard": "The employer dashboard supports recruiting and talent pipeline analysis. Employers can see their posted positions, applicant counts, match quality, and overall engagement from the student body. Each listing shows how many students saved, viewed, or applied for the role, along with a “Top Applicant Fit” list generated using the match engine. This view relies on tables such as Applications, Matched_Candidates, Student_Competency_Scores, and Student_Preferences, and helps employers quickly identify top candidates instead of searching manually.",
    "adminDashboard": "The admin dashboard is the most analytics-heavy layer. It visualizes platform-level metrics such as weekly active users, student versus alumni engagement patterns, event participation, content interaction from the news module, and system health indicators. It also shows satisfaction trends from event feedback, match acceptance rates for jobs and mentorship programs, and predictive readiness indicators such as number of alumni likely to mentor, donate, or apply for roles. These insights are based on aggregated queries from interactions logs, event registrations, news interactions, applications, matches, and profile updates.",
    "dataIntegration": "Each dashboard is powered by clean and structured JSON converted into relational tables. Events, news, jobs, and matches feed into engagement metrics that update dashboards in near real time. Interaction data such as liked news, joined events, and saved jobs forms the behavioral layer that drives personalization. The system is not based on a single static dataset; every user action enriches the next round of recommendations.",
    "insights": [
      "Students who attend at least one event and interact with three or more news articles have engagement scores nearly double those who do not.",
      "Match accuracy improves when students maintain complete soft-skill and technical-skill profiles.",
      "Employers that post detailed job descriptions receive significantly more high-quality matches than roles with generic requirements.",
      "Mentorship interest grows when program options clearly show required skills, expectations, and capacity."
    ]
  },
  "ethicsAndSocialConsiderations": {
    "title": "Ethical and Social Considerations",
    "aiPrivacy": "AI does not receive personal or identity-specific information. When a student asks the AI assistant about job relevance, profile improvements, interview preparation, or cover note suggestions, the system does not send their name, email, or personal identifiers. Instead, it passes structured fields such as skills, experience level, education, certifications, interests, and role preferences. The AI processes anonymous, context-only data so it never knows who the user is, only what they are working on.",
    "consentAndControl": "The platform follows strict consent and control rules. Students and alumni choose what they share, how their data is used, and which parts of their profile are visible to employers. They can export or permanently delete their data at any time, and account deletion removes associated records from the system. This aligns with FERPA/GDPR-style principles for user-controlled data life cycles.",
    "accessibility": "From a social and accessibility perspective, the system aims to be usable by everyone. The UI follows ARIA accessibility standards to support screen readers, uses readable contrast ratios, supports keyboard navigation, and includes scalable typography. Future plans include AI-powered voice navigation that lets users open pages, search opportunities, or take actions using voice commands.",
    "biasMitigation": "Match scores never use sensitive attributes such as gender, ethnicity, or disability status. Only skills, experience, preferences, and engagement behaviors influence recommendations. This reduces the risk of algorithmic discrimination and supports fairer outcomes.",
    "principle": "Overall, the platform is built to be ethical by design: anonymous AI usage, user-controlled data, strong privacy safeguards, and inclusive accessibility features together support fairness and trust across all stakeholders."
  },
  "outcomesAndImpact": {
    "title": "Outcomes and Conclusions",
    "text": "The MVP demonstrates that when student, alumni, employer, and engagement data are unified into one system, the university can unlock insights and workflows that were previously impossible. The platform turns fragmented records into a living ecosystem where students receive job, event, news, and mentorship recommendations tailored to their skills and interests; employers gain structured access to qualified talent; and administrators see real-time engagement, satisfaction, and platform health. One of the biggest outcomes is the shift from short-term student portals to a lifetime digital identity that remains relevant after graduation. By combining AI-guided career support, match scoring, content personalization, and continuous data enrichment, the system gives students a reason to return long after completing their degree. This addresses long-standing post-graduation disengagement and lays the foundation for stronger alumni networks, better employer pipelines, and improved visibility for institutional planning. The MVP also proves that ethical, privacy-first AI can be integrated safely: anonymized skill-based inputs ensure no personal identifiers are exposed to external models, and user-controlled data and accessibility features lay the groundwork for long-term trust. Overall, the platform shows a clear path toward a more modern, connected, and data-driven university experience."
  },
  "nextSteps": {
    "title": "Next Steps",
    "items": [
      "Extend lifelong value by implementing personal task boards that help students and alumni manage goals, applications, and mentorship activities inside the platform.",
      "Integrate with LMS/Canvas so that academic tasks, assignments, and announcements can connect directly into StudentHub, increasing daily relevance and usage.",
      "Deepen AI explainability by surfacing clearer breakdowns of match scores, gaps, and suggested improvements for students, employers, and admins.",
      "Expand data connectors to bring in additional sources such as survey tools, other CRMs, and external labor market data while preserving privacy and consent.",
      "Harden production security and governance, including authentication, authorization, logging, monitoring, and data retention policies, to be ready for a hosted rollout.",
      "Conduct user testing sessions with students, alumni, employers, and admins to refine workflows, copy, and dashboard visualizations before scaling."
    ]
  },
  "lessonsLearned": {
    "title": "Lessons Learned / Reflection",
    "paragraphs": [
      "Working on this project taught me more about real product development than any theoretical assignment. The biggest lesson was how difficult it is to balance analysis with actually building something. At the beginning, I tried to structure everything perfectly: problem definitions, stakeholder maps, data models, and early feature lists. The deeper I went into analysis, the more new ideas emerged, and the harder it became to stop researching and move forward. This showed me that analysis is important, but it can become a trap if it delays execution. An MVP is meant to be a focused, functional slice of value, not a final polished system. Sometimes the best clarity comes only after you start building.",
      "As I developed the StudentHub MVP, I realized that many problems cannot be solved by one feature or one dataset. Real-world challenges like improving alumni engagement or strengthening student employability are multi-layered. One problem often hides several others underneath, and addressing the main issue means solving smaller, interconnected ones along the way. This is similar to how real companies operate: they need revenue, but to achieve it, they solve dozens of customer problems around onboarding, usability, matching, personalization, trust, and communication. This mindset helped me design a system that addresses both the core issue (fragmented data) and the surrounding problems (motivation, relevance, accessibility, long-term usage, AI support).",
      "Another key learning was the value of iterative development. Every time I built a new module—dashboard, matching engine, event page, or news recommendations—I discovered gaps in my original assumptions. These gaps pushed the design forward. For example, once the student dashboard was built, it became clear that engagement scoring needed more variables. When I developed the AI assistant, anonymizing data emerged as essential for ethical use. When I created employer pages, I saw how important response analytics are for admin decision-making. Each feature unlocked another insight, and the project evolved naturally.",
      "Finally, I learned that a meaningful digital platform must continue delivering value over time. Students will not return after graduation unless the system becomes part of their routine and keeps solving real problems. This influenced almost every design decision, from lifelong profiles to personalized feeds to future plans for task boards and LMS integration. Overall, this project taught me to think like a product builder, not just an analyst: start lean, iterate fast, and let real usage guide the next steps."
    ]
  },
  "sampleTableNote": {
    "note": "The original template contained a sample table (Table 1) showing heading levels and font styles. That table is instructional and should be replaced with an actual table that is relevant to the StudentHub project, or removed entirely once your own tables are inserted."
  },
  "references": [
    {
      "id": 1,
      "citation": "AffinaQuest. (2023). How CMU used predictive analytics to identify potential donors and volunteers (webinar recap).",
      "url": "https://affinaquest.com/case-studies/webinar-recap-how-cmu-used-predictive-analytics-to-identify-potential-donors-and-volunteers/"
    },
    {
      "id": 2,
      "citation": "Bryant University. (2018). Predictive modeling of alumni donor behavior. Bryant University Honors Mathematics Collection.",
      "url": "https://digitalcommons.bryant.edu/cgi/viewcontent.cgi?article=1003&context=honors_mathematics"
    },
    {
      "id": 3,
      "citation": "CASE. (2022). CASE insights on alumni engagement: Key findings. Council for Advancement and Support of Education.",
      "url": "https://www.case.org/system/files/media/inline/CASE%20Insights%20on%20Alumni%20Engagement%202022%20Key%20Findings.pdf"
    },
    {
      "id": 4,
      "citation": "Chi, H., Jones, E. L., & Grandham, L. P. (2012). Smart alumni systems: Incorporating data mining and social networking for alumni outreach and mentoring. Procedia Computer Science, 9, 1390–1399.",
      "url": "https://doi.org/10.1016/j.procs.2012.04.151"
    },
    {
      "id": 5,
      "citation": "Chu, K., Patterson, B., Sanders, T., & Clare, R. (2019). An alumni mentoring program: The impact on the career planning process for international graduate students (Doctoral dissertation, Northeastern University).",
      "url": "http://hdl.handle.net/2047/D20316525"
    },
    {
      "id": 6,
      "citation": "Dang, L. (2023). Automating alumni information collection and network analysis for the University of Chicago’s Social Science Division (Master’s thesis). University of Chicago.",
      "url": "https://knowledge.uchicago.edu/record/6040"
    },
    {
      "id": 7,
      "citation": "Gomez-Cravioto, D. A., Khademi, A., & others. (2022). Supervised machine learning predictive analytics for alumni income. Journal of Big Data, 9(1).",
      "url": "https://doi.org/10.1186/s40537-022-00559-6"
    },
    {
      "id": 8,
      "citation": "Graduway. (2022). University of Houston + CASE: Alumni engagement case study.",
      "url": "https://info.graduway.com/hubfs/Graduway/Case%20Studies/University%20of%20Houston%20%2B%20CASE.pdf"
    },
    {
      "id": 9,
      "citation": "Jones, F., Mardis, M., & colleagues. (2017). Alumni tracking: Promising practices for collecting, analyzing, and reporting employment data. Journal of Higher Education Management, 32(1), 167–185.",
      "url": ""
    },
    {
      "id": 10,
      "citation": "Kumar, P., Kumar, G. R., & Verma, M. (2023). An alumni portal and tracking system. ResearchGate.",
      "url": "https://www.researchgate.net/publication/367949931_An_Alumni_Portal_and_Tracking_System"
    },
    {
      "id": 11,
      "citation": "O’Connor, A. (2022). Activating alumni engagement: The impact of alumni involvement on institutional strategic goals (Master’s thesis, University of Alberta).",
      "url": "https://ualberta.scholaris.ca/server/api/core/bitstreams/5375b266-444a-44ca-a239-5e69d05ae401/content"
    }
  ]
}
;
