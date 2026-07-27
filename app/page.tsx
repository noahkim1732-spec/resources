const categories = [
  {
    id: "financial-aid",
    number: "01",
    eyebrow: "Paying for college",
    title: "Financial Aid & Money",
    intro:
      "Understand your options, meet important deadlines, and make a plan for your money.",
    color: "blue",
    resources: [
      {
        title: "How Financial Aid Works",
        description:
          "Learn the difference between grants, scholarships, work-study, and loans before you accept an aid offer.",
        source: "Federal Student Aid",
        type: "Official government source",
        href: "https://studentaid.gov/understand-aid/how-aid-works",
        time: "6 min",
      },
      {
        title: "Complete the FAFSA",
        description:
          "Start or continue the official Free Application for Federal Student Aid and review current deadlines.",
        source: "Federal Student Aid",
        type: "Official application",
        href: "https://studentaid.gov/h/apply-for-aid/fafsa",
        time: "Start here",
      },
      {
        title: "Find Scholarships",
        description:
          "Search for scholarships and learn how to apply without paying unnecessary fees.",
        source: "Federal Student Aid",
        type: "Official government source",
        href: "https://studentaid.gov/understand-aid/types/scholarships",
        time: "5 min",
      },
      {
        title: "Manage Your College Money",
        description:
          "Choose a bank account, avoid surprise fees, and safely manage a financial-aid refund.",
        source: "Consumer Financial Protection Bureau",
        type: "Official government source",
        href: "https://www.consumerfinance.gov/consumer-tools/student-loans/manage-your-college-money/",
        time: "7 min",
      },
    ],
  },
  {
    id: "academic-success",
    number: "02",
    eyebrow: "Doing well in class",
    title: "Academic Success",
    intro:
      "Build the habits and support system you need to feel confident in college-level classes.",
    color: "green",
    resources: [
      {
        title: "Using Office Hours",
        description:
          "See what office hours are for, how to prepare, and why asking your professor for help is a normal part of college.",
        source: "Notre Dame Learning",
        type: "University resource",
        href: "https://learning.nd.edu/news/uplifting-first-generation-undergraduates-practical-strategies-in-small-classes-and-large-lectures/",
        time: "5 min",
      },
      {
        title: "Study Smarter",
        description:
          "Find practical guidance on study plans, reading comprehension, procrastination, and preparing for exams.",
        source: "UNC Learning Center",
        type: "University resource",
        href: "https://learningcenter.unc.edu/tips-and-tools/how-to-succeed/",
        time: "Resource hub",
      },
      {
        title: "Academic Planning Worksheets",
        description:
          "Use free worksheets to organize your semester, manage your time, set goals, and reflect on your progress.",
        source: "UNC Learning Center",
        type: "University resource",
        href: "https://learningcenter.unc.edu/tips-and-tools/coaching-tools/",
        time: "Free tools",
      },
      {
        title: "Writing Help",
        description:
          "Get help with planning essays, citations, grammar, avoiding plagiarism, and writing for different classes.",
        source: "Purdue OWL",
        type: "University resource",
        href: "https://owl.purdue.edu/",
        time: "Resource hub",
      },
    ],
  },
  {
    id: "campus-life",
    number: "03",
    eyebrow: "Finding your place",
    title: "Campus Life & Well-Being",
    intro:
      "Learn the unwritten rules, connect with people, and find support when college feels overwhelming.",
    color: "orange",
    resources: [
      {
        title: "Find Your Campus Support",
        description:
          "Search your school’s site for counseling, health services, food assistance, disability services, tutoring, and emergency aid.",
        source: "Your college or university",
        type: "Campus-specific",
        href: "https://www.google.com/search?q=college+student+support+services",
        time: "Quick search",
      },
      {
        title: "Find Student Organizations",
        description:
          "Explore clubs, cultural organizations, service groups, recreation, and student events available at your school.",
        source: "Your college or university",
        type: "Campus-specific",
        href: "https://www.google.com/search?q=college+student+organizations+clubs",
        time: "Quick search",
      },
      {
        title: "Mental Health in College",
        description:
          "Learn how to recognize common mental-health concerns, support a friend, and find help on campus.",
        source: "Active Minds",
        type: "Student well-being resource",
        href: "https://www.activeminds.org/about-mental-health/",
        time: "5 min",
      },
      {
        title: "Decode College Vocabulary",
        description:
          "Look up unfamiliar terms like credit hour, registrar, prerequisite, academic standing, and add/drop period.",
        source: "Federal Student Aid",
        type: "Official glossary",
        href: "https://studentaid.gov/help-center/answers/topic/glossary/articles",
        time: "Reference",
      },
    ],
  },
  {
    id: "first-generation",
    number: "04",
    eyebrow: "Navigating college",
    title: "First-Generation Students",
    intro:
      "Find community and learn how to navigate college when your family has not experienced it before.",
    color: "teal",
    resources: [
      {
        title: "First-Gen Resource Hub",
        description:
          "Explore guides, research, events, and programs created for first-generation college students.",
        source: "Center for First-generation Student Success",
        type: "National resource",
        href: "https://firstgen.naspa.org/",
        time: "Resource hub",
      },
      {
        title: "Understanding the Hidden Curriculum",
        description:
          "Learn about the unwritten academic and social expectations that can make college confusing at first.",
        source: "Notre Dame Learning",
        type: "University resource",
        href: "https://learning.nd.edu/news/uplifting-first-generation-undergraduates-practical-strategies-in-small-classes-and-large-lectures/",
        time: "6 min",
      },
      {
        title: "Find a First-Gen Program",
        description:
          "Search your college’s website for a first-gen center, mentoring program, student organization, or celebration.",
        source: "Your college or university",
        type: "Campus-specific",
        href: "https://www.google.com/search?q=college+first-generation+student+programs",
        time: "Quick search",
      },
      {
        title: "First in the Family Resources",
        description:
          "Read student-focused advice about applying to college, paying for it, and succeeding after you enroll.",
        source: "I’m First!",
        type: "Student resource",
        href: "https://imfirst.org/",
        time: "Resource hub",
      },
    ],
  },
  {
    id: "career-preparation",
    number: "05",
    eyebrow: "Preparing for what comes next",
    title: "Career Preparation",
    intro:
      "Turn your classes and experiences into a strong résumé, professional network, and career plan.",
    color: "purple",
    resources: [
      {
        title: "Build Your Résumé",
        description:
          "Learn what to include, choose a format, and describe school projects, volunteering, clubs, and work experience.",
        source: "CareerOneStop",
        type: "U.S. Department of Labor partner",
        href: "https://www.careeronestop.org/JobSearch/Resumes/resumes.aspx",
        time: "10 min",
      },
      {
        title: "Résumé Writing Examples",
        description:
          "Review résumé sections, action verbs, formatting guidance, and examples for different situations.",
        source: "Purdue OWL",
        type: "University resource",
        href: "https://owl.purdue.edu/owl/job_search_writing/resumes_and_vitas/index.html",
        time: "Resource hub",
      },
      {
        title: "Search for Opportunities",
        description:
          "Explore occupations, prepare applications, and organize a search for internships or entry-level work.",
        source: "CareerOneStop",
        type: "U.S. Department of Labor partner",
        href: "https://www.careeronestop.org/JobSearch/job-search.aspx",
        time: "Start here",
      },
      {
        title: "Understand Career Readiness",
        description:
          "Discover the communication, teamwork, technology, leadership, and career-management skills employers value.",
        source: "NACE",
        type: "Career education resource",
        href: "https://www.naceweb.org/career-readiness/competencies/career-readiness-defined/",
        time: "6 min",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="page-intro" id="top">
        <p className="kicker">College student guide</p>
        <h1>Resources</h1>
        <p>
          Trusted tools and straightforward guidance for paying for college,
          succeeding in class, finding support, and preparing for your career.
        </p>
      </header>

      <section className="quick-nav" aria-label="Resource categories">
        <p>Jump to a topic</p>
        <div>
          {categories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              <span>{category.number}</span>
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="resources">
        {categories.map((category) => (
          <section
            className={`category category-${category.color}`}
            id={category.id}
            key={category.id}
          >
            <div className="category-heading">
              <span className="category-number">{category.number}</span>
              <div>
                <p>{category.eyebrow}</p>
                <h2>{category.title}</h2>
                <span>{category.intro}</span>
              </div>
            </div>
            <div className="card-grid">
              {category.resources.map((resource) => (
                <a
                  className="resource-card"
                  href={resource.href}
                  key={resource.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card-topline">
                    <span>{resource.type}</span>
                    <span>{resource.time}</span>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="card-footer">
                    <span>{resource.source}</span>
                    <b aria-hidden="true">↗</b>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>

    </main>
  );
}
