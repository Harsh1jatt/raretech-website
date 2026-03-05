import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ==========================================
// FULLY SEO OPTIMIZED & DEEPLY EXPLAINED DATA
// ==========================================
const courseData = {
  "web-development": {
    title: "Website Development Course in Ludhiana",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    metaTitle: "Best Website Development Course in Ludhiana | MERN Stack Training",
    metaDescription: "Master Full Stack Web Development in Ludhiana. 100% Practical MERN Stack training, React.js, Node.js, Next.js, and guaranteed placement assistance.",
    shortDesc: "Become a professional full stack developer using HTML, CSS, JavaScript, React.js, Node.js and MongoDB. Learn freelancing, hosting deployment and real client workflow.",
    longDescription: "Our premium Website Development Course in Ludhiana is engineered to transform absolute beginners into hire-ready Full Stack Developers. Focused heavily on the industry-leading MERN stack and modern frameworks like Next.js, this program bypasses outdated theory and dives straight into practical, modern software engineering. You will architect robust databases, build highly interactive user interfaces, deploy secure scalable web applications, and understand server-side rendering (SSR) for advanced SEO. Whether your goal is to land a high-paying IT job or to launch a successful global freelancing career, this comprehensive training provides the exact skills and production-ready portfolio you need.",
    whoShouldJoin: "12th Pass Students, IT/BCA/MCA Graduates, Job Seekers, and Freelancers aiming for a highly lucrative technical career.",
    duration: "4 - 6 Months",
    level: "Beginner to Advanced",
    mode: "100% Practical Classroom Training",
    careerOutcomes: ["Full Stack Developer", "Frontend React Engineer", "Backend Node.js Developer", "Freelance Web Consultant"],
    highlights: [
      "Frontend + Backend Development",
      "Live Client Projects",
      "Freelancing Training & Mentorship",
      "Portfolio Website Creation",
      "Dedicated Placement Assistance",
      "Free Premium Hosting for Student Portfolios"
    ],
    modules: [
      {
        title: "HTML5, CSS3 & UI Frameworks",
        points: [
          "Understanding deep website structure and semantic HTML5 for SEO.",
          "Building complex, fully responsive mobile-first layouts from scratch.",
          "Mastering modern CSS layout systems: Flexbox and CSS Grid.",
          "Implementing Tailwind CSS and Bootstrap for rapid UI development.",
          "Web accessibility (a11y), forms, and responsive media queries."
        ]
      },
      {
        title: "Advanced JavaScript (ES6+)",
        points: [
          "Core programming logic, variables, loops, arrays, and functions.",
          "Deep DOM manipulation, event bubbling, and delegation.",
          "Modern ES6+ concepts: Arrow functions, destructuring, spread/rest operators.",
          "Asynchronous programming: Callbacks, Promises, and Async/Await.",
          "API integration, fetching external data, and handling JSON structures."
        ]
      },
      {
        title: "Frontend Development with React.js",
        points: [
          "Understanding the Virtual DOM, component lifecycle, and React ecosystem.",
          "Building reusable, scalable functional components and custom hooks.",
          "Mastering React Hooks (useState, useEffect, useContext).",
          "Client-side routing with React Router DOM.",
          "State management and building dynamic SaaS dashboards."
        ]
      },
      {
        title: "Backend API & Database (Node.js & MongoDB)",
        points: [
          "Setting up a robust server environment with Node.js and Express.",
          "Designing RESTful APIs and handling HTTP requests, responses, and middleware.",
          "Understanding NoSQL databases and setting up MongoDB clusters.",
          "CRUD operations, relational data modeling, and schema validation.",
          "Implementing highly secure user Authentication (JWT, bcrypt)."
        ]
      },
      {
        title: "Deployment & Freelancing Workflow",
        points: [
          "Setting up highly optimized professional profiles on Upwork and Fiverr.",
          "Strategies for writing winning proposals and closing international clients.",
          "Deploying full-stack applications to Vercel, Render, and AWS basics.",
          "Version control with Git and GitHub repository management.",
          "Mock technical interviews and resume building for local IT companies."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need prior coding experience to join this web development course?",
        answer: "Not at all! Our curriculum takes you from absolute zero to advanced programming. We start with basic HTML and gradually move to complex React and Node.js."
      },
      {
        question: "Will I build real projects during the training?",
        answer: "Yes, you will build 4-5 industry-level projects including an E-commerce platform, a real-time chat application, and a dynamic dashboard to showcase in your portfolio."
      },
      {
        question: "What is the average salary of a Full Stack Developer in Punjab?",
        answer: "A fresher MERN stack developer can expect between ₹3.5 LPA to ₹6 LPA. With experience, salaries easily scale to ₹10 LPA - ₹15+ LPA depending on the company."
      }
    ]
  },

  "graphic-designing": {
    title: "Graphic Designing & Digital Designing Course",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    metaTitle: "Best Graphic Designing Course in Ludhiana | Photoshop, Illustrator",
    metaDescription: "Learn professional Graphic Design in Ludhiana. Master Photoshop, Illustrator, CorelDRAW, and Canva. 100% practical branding and layout designing.",
    shortDesc: "Master creative digital designing using Photoshop, Illustrator, CorelDRAW and Canva. Learn logo designing, banner creation and branding kits.",
    longDescription: "Elevate your creative vision into a highly paid profession. Our Graphic Designing course in Ludhiana trains you extensively on industry-standard software to create stunning visual identities, engaging social media creatives, and premium marketing materials. You will dive deep into the psychology of design, mastering color theory, typography, and layout structuring to create digital assets that communicate effectively and drive consumer action. Graduate with a robust, professional portfolio on Behance that digital agencies simply cannot ignore.",
    whoShouldJoin: "Creative Minds, Absolute Beginners, Marketing Professionals, and Aspiring Designers wanting to master visual communication.",
    duration: "3 - 4 Months",
    level: "Beginner to Advanced",
    mode: "100% Practical Studio Training",
    careerOutcomes: ["Graphic Designer", "Brand Identity Specialist", "Social Media Executive", "Freelance Creative Director"],
    highlights: [
      "Logo Design & Branding Kit Creation",
      "Social Media Creatives & Post Design",
      "Print Media Design (Brochures, Banners)",
      "Mastery of Adobe Creative Suite (PS, AI)",
      "CorelDRAW Mastery for Local Print Markets",
      "Extensive Behance Portfolio Building"
    ],
    modules: [
      {
        title: "Design Fundamentals & Typography",
        points: [
          "Understanding core principles of design: balance, contrast, alignment.",
          "Color Theory, palettes, and color psychology in consumer marketing.",
          "Typography rules: Choosing, pairing, and kerning fonts effectively.",
          "Visual hierarchy, grid systems, and directing the viewer's eye.",
          "Understanding file formats, resolutions, DPI, and print constraints."
        ]
      },
      {
        title: "Advanced Adobe Photoshop Mastery",
        points: [
          "Workspace setup, non-destructive layer management, and selection tools.",
          "Advanced photo retouching, frequency separation, and cinematic grading.",
          "Complex layer masking, pen tool selections, and background removal.",
          "Digital manipulation, matte painting, and composite images.",
          "Designing high-end e-commerce product mockups and web banners."
        ]
      },
      {
        title: "Vector Art & Branding (Adobe Illustrator)",
        points: [
          "Mastering the Pen Tool, bezier curves, and pathfinder operations.",
          "Creating scalable vector illustrations, flat art, and custom UI icon sets.",
          "Professional Logo Design processes from paper sketch to final vector.",
          "Designing corporate brand guidelines and stationary packages.",
          "Working with complex gradients, mesh tools, and 3D vector effects."
        ]
      },
      {
        title: "CorelDRAW & Print Media Layouts",
        points: [
          "Understanding print layout margins, bleeds, and CMYK color modes.",
          "Designing large format print materials: Flex boards and hoardings.",
          "Creating packaging layouts, labels, and intricate die-cut designs.",
          "Wedding card designing, business cards, and multipage brochures.",
          "Exporting files flawlessly for local printing presses."
        ]
      },
      {
        title: "Canva Pro & Social Media Portfolio",
        points: [
          "Setting up brand kits and rapid designing using advanced Canva Pro.",
          "Designing engaging social media carousels and Instagram grid layouts.",
          "Creating animated posts and basic video graphics.",
          "Structuring a world-class professional design portfolio on Behance.",
          "Freelance pricing strategies for selling design services."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need to be good at drawing to be a graphic designer?",
        answer: "No! Modern graphic design is more about understanding software, layout logic, typography, and color theory rather than hand-sketching."
      },
      {
        question: "What software will I learn?",
        answer: "You will master the industry standards: Adobe Photoshop, Adobe Illustrator, CorelDRAW, and Canva Pro."
      },
      {
        question: "Are there jobs for graphic designers in Ludhiana?",
        answer: "Yes! Every digital marketing agency, printing press, local business, and e-commerce brand requires skilled graphic designers for daily creatives."
      }
    ]
  },

  "digital-marketing": {
    title: "Advanced Digital Marketing Course in Ludhiana",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    metaTitle: "Advanced Digital Marketing Course in Ludhiana | SEO & PPC",
    metaDescription: "Learn advanced SEO, Google Ads, Facebook Ads, and Lead Generation in Ludhiana. 100% practical Digital Marketing training for businesses.",
    shortDesc: "Learn SEO, Google Ads, Facebook Ads, Local SEO and lead generation techniques with real live campaigns and budgets.",
    longDescription: "Accelerate your career with the most advanced, data-driven Digital Marketing Course in Ludhiana. This program bypasses generic theory and strictly focuses on ROI-driven marketing strategies used by top-tier agencies. We cover everything from deep Technical Search Engine Optimization (SEO) to executing high-converting, scalable Google and Facebook ad campaigns. You won't just learn textbook definitions; you will run actual marketing campaigns, analyze live data metrics, and learn how to generate high-quality, convertible leads for local and international businesses.",
    whoShouldJoin: "Business Owners, Marketing Enthusiasts, Freelancers, and Students wanting a fast-paced career in digital growth.",
    duration: "3 - 4 Months",
    level: "Beginner to Advanced",
    mode: "100% Practical Live Campaign Training",
    careerOutcomes: ["SEO Specialist", "Performance Marketer", "Social Media Manager", "Digital Strategist"],
    highlights: [
      "SEO + Google Ads Certification Guide",
      "Social Media Marketing & Meta Ads",
      "Real Client Projects & Budgets",
      "Freelancing Setup & Client Acquisition",
      "Local SEO & GBP Ranking",
      "Agency-Level Analytics & Reporting"
    ],
    modules: [
      {
        title: "Search Engine Optimization (SEO)",
        points: [
          "Deep commercial keyword research and competitor gap analysis.",
          "Advanced On-Page SEO: Meta tags, entity optimization, and NLP.",
          "Technical SEO: Core Web Vitals, site speed, schema, and canonicals.",
          "Off-Page SEO: High-authority link building and outreach strategies.",
          "SEO auditing using professional industry tools like Ahrefs/Semrush."
        ]
      },
      {
        title: "Local SEO & Google Business Profile",
        points: [
          "Creating, claiming, and fully optimizing a Google Business Profile (GBP).",
          "Ranking in the Local 3-Pack for high-intent local search queries.",
          "Managing local citations, NAP consistency, and directory submissions.",
          "Review generation strategies and online reputation management.",
          "Tracking local search performance and driving foot traffic."
        ]
      },
      {
        title: "Google Ads (Performance Marketing)",
        points: [
          "Structuring a profitable Google Ads account and auction mechanics.",
          "Creating high-intent Search Campaigns and Display Network ads.",
          "Keyword match types, negative keywords, and Quality Score optimization.",
          "Setting up precise conversion tracking via Google Tag Manager (GTM).",
          "Advanced bidding strategies to lower CPC and maximize ROI."
        ]
      },
      {
        title: "Facebook & Instagram Ads Mastery",
        points: [
          "Setting up Meta Business Manager, Commerce Manager, and Pixel.",
          "Creating hyper-targeted audience segments and lookalike audiences.",
          "Designing high-converting ad creatives and writing direct-response copy.",
          "Executing complex retargeting funnels to capture abandoned leads.",
          "Lead generation campaigns specific for real estate, e-commerce, and services."
        ]
      },
      {
        title: "Web Analytics & Freelancing Workflow",
        points: [
          "Mastering Google Analytics 4 (GA4) to track user behavior.",
          "Understanding Google Search Console for site health and indexation.",
          "Creating automated, professional monthly reports via Looker Studio.",
          "Packaging your digital marketing services for freelancing clients.",
          "Pitching to local businesses and closing high-retainer contracts."
        ]
      }
    ],
    faqs: [
      {
        question: "Is digital marketing a good career choice?",
        answer: "Absolutely. Every business needs an online presence to survive today. The demand for skilled performance marketers and SEO experts is at an all-time high globally."
      },
      {
        question: "Will I get to run live ad campaigns?",
        answer: "Yes, our training heavily emphasizes practical execution. You will design, launch, and monitor real Google and Meta ad campaigns to understand live metrics."
      },
      {
        question: "Can I do this course to grow my own business?",
        answer: "Definitely! Over 40% of our students are business owners who join to learn how to generate their own leads and stop relying on expensive outside agencies."
      }
    ]
  },

  "tally-accounts": {
    title: "Accounts + Tally Prime + GST Course",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    metaTitle: "Best Tally Prime & GST Course in Ludhiana | Accounting Training",
    metaDescription: "Master Corporate Accounting in Ludhiana. Learn Tally Prime, real GST filing, taxation, payroll, and inventory management with guaranteed job placement.",
    shortDesc: "Professional accounting course covering Tally Prime, GST billing, taxation, payroll and inventory management for corporate jobs.",
    longDescription: "Step into the highly secure and lucrative world of finance and corporate accounting. Our comprehensive Accounts course in Ludhiana takes you beyond basic bookkeeping. You will receive hands-on training on the latest Tally Prime software, understand complex GST taxation laws, file real tax returns, manage intricate payroll systems, and track large-scale inventory. Designed by CA professionals, this course makes you instantly hirable by local manufacturing firms, trading companies, and accounting agencies.",
    whoShouldJoin: "B.Com/M.Com Graduates, 12th Commerce Students, Business Owners, and Job Seekers looking for stable office desk jobs.",
    duration: "2 - 3 Months",
    level: "Beginner to Professional",
    mode: "100% Practical Computer Lab Training",
    careerOutcomes: ["Senior Accountant", "Tally Operator", "GST Consultant", "Payroll Executive"],
    highlights: [
      "Real GST Filing & E-way Bills",
      "Corporate Accounting Workflows",
      "Tally Prime Latest Version Mastery",
      "Job Ready Training & Referrals",
      "Inventory & Godown Management",
      "Banking & Reconciliation"
    ],
    modules: [
      {
        title: "Manual & Computerized Accounting Basics",
        points: [
          "Understanding accounting principles, rules of debit and credit.",
          "Journal entries, ledgers, trial balance, and final accounts preparation.",
          "Introduction to computerized accounting and company creation.",
          "Understanding financial statements (Balance Sheet, P&L Account).",
          "Voucher entries and basic bookkeeping logic."
        ]
      },
      {
        title: "Tally Prime ERP Mastery",
        points: [
          "Navigating the Tally Prime interface and shortcut keys.",
          "Creating multiple ledgers, stock groups, and stock items.",
          "Recording day-to-day transactions: Payment, Receipt, Contra, Journal.",
          "Sales and Purchase order processing and invoicing.",
          "Banking features, cheque printing, and Bank Reconciliation Statement (BRS)."
        ]
      },
      {
        title: "Inventory & Godown Management",
        points: [
          "Maintaining multiple godowns and stock transfers.",
          "Batch-wise details, manufacturing dates, and expiry tracking.",
          "Bill of Materials (BOM) for manufacturing industries.",
          "Price levels, discount structures, and stock valuation methods.",
          "Generating precise inventory and stock summary reports."
        ]
      },
      {
        title: "Taxation: GST & TDS Integration",
        points: [
          "Understanding GST structure (CGST, SGST, IGST) and tax slabs.",
          "Configuring GST at company, group, and item levels in Tally.",
          "Generating GST compliant invoices and handling reverse charge mechanisms.",
          "Creating and managing E-Way Bills directly from Tally.",
          "Understanding and deducting TDS (Tax Deducted at Source)."
        ]
      },
      {
        title: "Payroll & Finalization of Accounts",
        points: [
          "Setting up employee groups, attendance types, and pay heads.",
          "Processing monthly salary, generating payslips, and PF/ESI calculations.",
          "Year-end adjustments, depreciation entries, and closing stock.",
          "Exporting Tally data to Excel/PDF and data backup/restore.",
          "Interview preparation for corporate accountant roles."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a commerce background to learn Tally?",
        answer: "While a commerce background helps, it is not mandatory. We teach the basic golden rules of accounting from scratch before moving to the software."
      },
      {
        question: "Will I learn the latest version of Tally?",
        answer: "Yes, our computer labs are equipped with the absolute latest version of Tally Prime ERP, teaching you modern corporate workflows."
      },
      {
        question: "Are there immediate jobs available after this course?",
        answer: "Accounting is the backbone of every business. Ludhiana is a manufacturing hub, and the demand for skilled Tally operators and GST accountants is massive."
      }
    ]
  },

  "dca-adca": {
    title: "DCA & ADCA Certification Course",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    metaTitle: "Best DCA & ADCA Computer Course in Ludhiana | 1 Year Diploma",
    metaDescription: "Get Government job eligible DCA & ADCA Certification in Ludhiana. Learn computer basics, MS Office, typing, and internet applications.",
    shortDesc: "Diploma computer course covering computer fundamentals, MS Office, internet usage and basic designing for a strong digital foundation.",
    longDescription: "Build a rock-solid foundation in Information Technology with our Diploma (DCA) and Advance Diploma in Computer Applications (ADCA). Designed specifically for beginners, school students, and job seekers aiming for government and clerical positions, this course takes you from learning how to turn on a computer to mastering essential office software, internet operations, fast touch typing, and fundamental graphic design. A recognized ADCA certificate is highly valued across both private sector desk jobs and government departmental exams.",
    whoShouldJoin: "10th/12th Pass Students, Housewives, Beginners, and Government Job Aspirants requiring basic computer literacy certificates.",
    duration: "6 Months (DCA) / 12 Months (ADCA)",
    level: "Absolute Beginner to Intermediate",
    mode: "100% Practical Lab Training",
    careerOutcomes: ["Data Entry Operator", "Office Assistant", "Computer Operator", "Clerk"],
    highlights: [
      "Govt Job Eligibility Certificate",
      "Computer Fundamentals Mastery",
      "Complete Office Automation",
      "High-Speed Data Entry Skills",
      "Internet & Cyber Security Basics",
      "Bilingual Typing Training"
    ],
    modules: [
      {
        title: "Computer Fundamentals & Operating Systems",
        points: [
          "Introduction to computer generations, hardware, and software concepts.",
          "Understanding input/output devices and memory storage.",
          "Mastering Windows 10/11 operating system navigation and settings.",
          "File management, folder creation, and desktop personalization.",
          "Basic troubleshooting, installing software, and using antivirus."
        ]
      },
      {
        title: "Touch Typing & Data Entry Mastery",
        points: [
          "Ergonomics of typing and correct finger placement on the keyboard.",
          "English typing speed building exercises and accuracy tests.",
          "Punjabi/Hindi typing fundamentals for regional documentation jobs.",
          "Numeric keypad mastery for fast data entry operations.",
          "Real-time typing test simulations for government exams."
        ]
      },
      {
        title: "Complete MS Office Suite",
        points: [
          "MS Word: Creating professional documents, letters, formatting, and mail merge.",
          "MS Excel: Spreadsheets, basic formulas (SUM, AVERAGE), formatting, and charts.",
          "MS PowerPoint: Designing engaging presentations, slide transitions, and animations.",
          "MS Access (ADCA): Basic database creation, tables, and queries.",
          "Printing documents accurately with correct page setups."
        ]
      },
      {
        title: "Internet, Email & Digital Financial Services",
        points: [
          "Web browsing basics, using search engines, and finding information online.",
          "Creating and managing professional Email accounts (Gmail, Outlook).",
          "Sending attachments, CC/BCC formatting, and email etiquette.",
          "Understanding online banking, UPI payments, and digital wallets.",
          "Cyber security basics: Recognizing phishing, scams, and safe browsing."
        ]
      },
      {
        title: "Basic Web & Graphic Designing (ADCA Only)",
        points: [
          "Introduction to HTML basics and creating simple web pages.",
          "Fundamentals of graphic design using MS Paint and Canva.",
          "Basic photo editing and resizing for online form submissions.",
          "Understanding social media platforms for business use.",
          "Final project integration combining Office, Internet, and Design skills."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this certificate valid for government jobs?",
        answer: "Yes, our DCA and ADCA certificates meet the standard requirements for basic computer literacy demanded in various clerical government job applications."
      },
      {
        question: "I have never used a computer before. Can I join?",
        answer: "Absolutely! This course is specifically designed for absolute beginners. We start from how to use a mouse and keyboard."
      },
      {
        question: "What is the difference between DCA and ADCA?",
        answer: "DCA (6 Months) covers basic fundamentals, typing, and MS Office. ADCA (12 Months) includes everything in DCA plus basic web design, advanced Excel, and database management."
      }
    ]
  },

  "ms-office": {
    title: "MS Office Advanced / MIS Reporting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    metaTitle: "Advanced Excel & MIS Reporting Course in Ludhiana",
    metaDescription: "Master Advanced Excel, Macros, Pivot Tables, and MIS Reporting in Ludhiana. Become a data analysis expert and boost your corporate career.",
    shortDesc: "Learn advanced Excel formulas, dashboards, PowerPoint presentations and MIS reporting systems for corporate productivity.",
    longDescription: "Data is the driving force of modern corporate environments. Our Advanced MS Office & MIS Reporting course goes far beyond basic data entry. This specialized training is focused heavily on Advanced Microsoft Excel, teaching you how to handle massive datasets, write complex logical formulas, create dynamic Pivot Tables, and build automated Management Information System (MIS) dashboards. Paired with advanced PowerPoint presentation skills, this course transforms you into an indispensable asset for any corporate HR, Sales, or Operations department.",
    whoShouldJoin: "Working Professionals, Data Analysts, HR Executives, MBA Students, and anyone looking to speed up their corporate workflows.",
    duration: "1.5 - 2 Months",
    level: "Intermediate to Advanced",
    mode: "100% Practical Desktop Training",
    careerOutcomes: ["MIS Executive", "Data Analyst", "Back Office Manager", "HR/Admin Executive"],
    highlights: [
      "Advanced Excel Formulas (VLOOKUP, INDEX-MATCH)",
      "Data Analysis & Pivot Tables",
      "Corporate MIS Dashboard Creation",
      "Office Productivity Automation",
      "Advanced PowerPoint Presentations",
      "Data Validation & Protection"
    ],
    modules: [
      {
        title: "Advanced Excel Data Management",
        points: [
          "Data cleaning techniques: Text to Columns, Remove Duplicates, Flash Fill.",
          "Advanced Data Validation: Creating dependent drop-down lists.",
          "Conditional Formatting with custom rules and logic.",
          "Sorting, multi-level filtering, and advanced subtotaling.",
          "Protecting worksheets, workbooks, and locking specific cells."
        ]
      },
      {
        title: "Mastering Complex Excel Formulas",
        points: [
          "Logical functions: Nested IF, AND, OR, IFERROR.",
          "Lookup & Reference: VLOOKUP, HLOOKUP, INDEX, MATCH, XLOOKUP.",
          "Math & Statistical functions: SUMIFS, COUNTIFS, AVERAGEIFS.",
          "Text functions: CONCATENATE, LEFT, RIGHT, MID, LEN, TRIM.",
          "Date & Time functions: TODAY, NOW, DATEDIF, NETWORKDAYS."
        ]
      },
      {
        title: "Data Analysis & Pivot Tables",
        points: [
          "Creating and formatting complex Pivot Tables from raw data.",
          "Using Slicers and Timelines for interactive data filtering.",
          "Calculated fields and items within Pivot Tables.",
          "Creating dynamic Pivot Charts for visual data representation.",
          "What-If Analysis: Goal Seek, Scenario Manager, and Data Tables."
        ]
      },
      {
        title: "MIS Dashboards & Basic Macros",
        points: [
          "Principles of Management Information System (MIS) reporting.",
          "Combining charts, slicers, and formulas to build automated dashboards.",
          "Creating daily/weekly/monthly sales and HR tracking reports.",
          "Introduction to Macros: Recording steps to automate repetitive tasks.",
          "Assigning Macros to buttons for one-click report generation."
        ]
      },
      {
        title: "Advanced Corporate PowerPoint",
        points: [
          "Using Master Slides for consistent corporate branding.",
          "Embedding Excel charts and tables dynamically into presentations.",
          "Advanced custom animations and seamless slide transitions.",
          "Adding audio, video, and interactive hyperlinks.",
          "Best practices for delivering impactful corporate presentations."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need to know basic Excel before joining this?",
        answer: "We recommend having a basic understanding of computers and simple spreadsheets. However, we do a quick refresher of basics before diving into advanced formulas."
      },
      {
        question: "Why is MIS reporting important for jobs?",
        answer: "Management relies on MIS reports to make business decisions. Knowing how to quickly summarize 10,000 rows of data into a clear dashboard makes you highly valuable to employers."
      },
      {
        question: "Will you teach Macros and VBA?",
        answer: "We teach Macro recording and execution for automation. Deep VBA coding is covered as a separate programming module, but recorded Macros handle 90% of office automation needs."
      }
    ]
  },

  "ccc-course": {
    title: "CCC (Course on Computer Concepts)",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    metaTitle: "CCC Certificate Course in Ludhiana | Government Approved Syllabus",
    metaDescription: "Get certified with the CCC (Course on Computer Concepts) in Ludhiana. Essential computer literacy for state and central government job applications.",
    shortDesc: "Government recognized basic computer literacy program covering Windows, Word, Excel, PowerPoint and essential Internet operations.",
    longDescription: "The Course on Computer Concepts (CCC) is a comprehensive program designed to impart fundamental IT literacy to the masses. Often a mandatory qualification for various state and central government clerical and administrative jobs, this course covers all essential aspects of personal computing. You will learn to confidently operate a PC, create professional documents, manage basic spreadsheets, design small presentations, and navigate the internet safely. Beyond basic software, the course also introduces digital financial services, making you digitally self-reliant.",
    whoShouldJoin: "Government Job Aspirants, Students, and anyone wanting a recognized, standard certification for basic computer literacy.",
    duration: "2 - 3 Months",
    level: "Beginner",
    mode: "Classroom + Practical Exam Prep",
    careerOutcomes: ["Clerical Govt Jobs", "Data Entry Operator", "Office Assistant"],
    highlights: [
      "Govt Job Valid Certificate Syllabus",
      "MS Office / LibreOffice Training",
      "Internet & Email Skills",
      "Digital Financial Services",
      "Online Exam Preparation",
      "Daily Practical Lab Sessions"
    ],
    modules: [
      {
        title: "Introduction to Computer & OS",
        points: [
          "Understanding computer hardware, software, and basic IT concepts.",
          "Basics of Operating Systems (Windows / Linux environment).",
          "Navigating the desktop, taskbar, icons, and file structures.",
          "Customizing system settings, control panel, and printer setup.",
          "Basic system maintenance and safe booting processes."
        ]
      },
      {
        title: "Word Processing (Word / Writer)",
        points: [
          "Creating, saving, and opening text documents.",
          "Text formatting: fonts, paragraphs, bullets, and numbering.",
          "Inserting tables, pictures, and shapes into documents.",
          "Page layout setup, headers, footers, and margins.",
          "Mail merge basics and printing documents accurately."
        ]
      },
      {
        title: "Spreadsheets (Excel / Calc)",
        points: [
          "Understanding rows, columns, cells, and workbook structure.",
          "Entering data, formatting cells, and text alignment.",
          "Basic mathematical formulas (SUM, AVG, MIN, MAX).",
          "Creating basic charts and graphs from spreadsheet data.",
          "Page setup and printing spreadsheets correctly."
        ]
      },
      {
        title: "Presentations (PowerPoint / Impress)",
        points: [
          "Creating new presentations and adding slides.",
          "Applying themes, background styles, and slide layouts.",
          "Inserting text, images, and tables into slides.",
          "Applying basic slide transitions and text animations.",
          "Running a slideshow presentation."
        ]
      },
      {
        title: "Internet, Email & Digital Services",
        points: [
          "Connecting to the internet, understanding LAN/WAN/Wi-Fi.",
          "Web browsing basics, using search engines effectively.",
          "Creating an email account, composing, and attaching files.",
          "Accessing digital financial tools: UPI, NetBanking, AEPS.",
          "Overview of e-Governance services (Digital Locker, Passport portal)."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the CCC certificate compulsory for govt jobs?",
        answer: "For many state government (Group C and D) and clerical banking jobs, having a valid CCC-level computer literacy certificate is a mandatory eligibility criterion."
      },
      {
        question: "Is the exam difficult?",
        answer: "No, the exam is objective (MCQ and True/False). Our course includes daily practice tests and mock exams to ensure you pass with a high grade."
      },
      {
        question: "Do you teach MS Office or LibreOffice?",
        answer: "The official CCC syllabus often emphasizes LibreOffice (Writer, Calc, Impress), but we teach both MS Office and LibreOffice so you are comfortable in any office environment."
      }
    ]
  },

  "dtp-designing": {
    title: "Desktop Publishing (DTP) & Printing Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    metaTitle: "DTP Course in Ludhiana | CorelDRAW & Photoshop for Print",
    metaDescription: "Learn professional Desktop Publishing (DTP) in Ludhiana. Master CorelDRAW, PageMaker, and Photoshop for printing press and commercial design businesses.",
    shortDesc: "Learn professional printing design using CorelDRAW, Photoshop and Page Layout designing for the commercial printing industry.",
    longDescription: "The commercial printing industry is evergreen, especially in an industrial hub like Ludhiana. Our Desktop Publishing (DTP) course is tailored specifically for the print media sector. You will master vector graphics in CorelDRAW, image manipulation in Photoshop, and multi-page text layouts in InDesign/PageMaker. From designing massive outdoor flex hoardings and intricate wedding cards to formatting regional language newspapers and brochures, this course gives you the exact technical skills needed to run a successful DTP shop or work in a high-end printing press.",
    whoShouldJoin: "Entrepreneurs wanting to open a printing/flex shop, graphic design beginners, and creative artists targeting the print industry.",
    duration: "2 - 3 Months",
    level: "Beginner to Intermediate",
    mode: "100% Practical Print Design Training",
    careerOutcomes: ["DTP Operator", "Pre-press Designer", "Printing Press Manager", "Flex Designer"],
    highlights: [
      "Large Format Flex & Banner Design",
      "Wedding & Invitation Cards",
      "Multipage Printing Layouts",
      "Photo Editing & Retouching",
      "Bilingual Typing (English/Punjabi) for Print",
      "Pre-press File Exporting Techniques"
    ],
    modules: [
      {
        title: "Print Fundamentals & Color Theory",
        points: [
          "Understanding print vs. digital: CMYK vs. RGB color modes.",
          "Paper sizes (A4, A3, Legal, etc.), GSM, and paper types.",
          "Understanding bleeds, margins, and safe zones for cutting.",
          "Resolution and DPI requirements for different print formats.",
          "Bilingual typing fundamentals (Punjabi/Hindi) required in DTP."
        ]
      },
      {
        title: "CorelDRAW: The Print Industry Standard",
        points: [
          "Mastering vector tools, shaping, and precise measurements.",
          "Designing logos, visiting cards, and letterheads.",
          "Creating large format designs: Flex banners and shop hoardings.",
          "Designing intricate, multi-layered wedding and invitation cards.",
          "Exporting CDR files, converting text to curves for safe printing."
        ]
      },
      {
        title: "Adobe Photoshop for DTP",
        points: [
          "Image cropping, resizing, and resolution adjustment for print.",
          "Basic photo retouching, removing blemishes, and color correction.",
          "Background removal and creating transparent PNGs.",
          "Designing mixed-media posters combining photos and text.",
          "Creating passport size photo layouts on standard sheets."
        ]
      },
      {
        title: "Page Layouts (InDesign / PageMaker)",
        points: [
          "Setting up master pages, columns, and gutter spacing.",
          "Importing large blocks of text and managing text flow.",
          "Formatting typography, drop caps, and paragraph styles.",
          "Designing multipage brochures, newsletters, and magazines.",
          "Creating index/table of contents and book formatting."
        ]
      },
      {
        title: "Final Output & Commercial Workflow",
        points: [
          "Understanding the offset and digital printing processes.",
          "Checking color separations and overprint settings.",
          "Creating high-resolution, print-ready PDF files.",
          "Cost estimation for basic printing jobs.",
          "Handling real-world client briefs and rapid delivery workflows."
        ]
      }
    ],
    faqs: [
      {
        question: "Is DTP different from Graphic Designing?",
        answer: "Yes. While Graphic Design covers digital branding (UI, social media), DTP is strictly focused on commercial physical printing (Flex boards, magazines, cards, books)."
      },
      {
        question: "Which software is most important for DTP in Ludhiana?",
        answer: "In the local printing markets across Punjab, CorelDRAW is the absolute king, followed by Photoshop. We ensure you master both."
      },
      {
        question: "Can I start my own business after this?",
        answer: "Absolutely. Many of our DTP students open their own printing, flex designing, and document service shops immediately after completion."
      }
    ]
  },

  "ai-tools-training": {
    title: "AI Tools & ChatGPT Training Course",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    metaTitle: "Learn AI Tools & ChatGPT in Ludhiana | Productivity Course",
    metaDescription: "Boost your productivity with our AI Tools training in Ludhiana. Master ChatGPT, Midjourney, Canva AI, and automation workflows for business and freelancing.",
    shortDesc: "Learn practical AI tools like ChatGPT, Gemini, Canva AI, Midjourney and automation workflows for rapid freelancing and business growth.",
    longDescription: "Artificial Intelligence is no longer the future; it is the present. Our AI Tools & ChatGPT Training course is designed to make you 10x more productive in whatever profession you choose. You will learn the art of 'Prompt Engineering'—how to talk to AI to get exactly what you want. We cover deep content creation using ChatGPT and Claude, stunning image generation using Midjourney and Canva AI, and seamless workflow automation. Whether you are a business owner wanting to save time, or a freelancer looking to scale your services, this course teaches you how to leverage AI as your personal digital workforce.",
    whoShouldJoin: "Entrepreneurs, Freelancers, Content Creators, Digital Marketers, and anyone looking to future-proof their career against AI.",
    duration: "1 - 1.5 Months",
    level: "Beginner to Advanced",
    mode: "100% Practical Live Workshops",
    careerOutcomes: ["AI Prompt Engineer", "Content Automation Expert", "Freelance Creator", "Productivity Consultant"],
    highlights: [
      "Advanced ChatGPT Prompt Engineering",
      "AI Copywriting & Content Creation",
      "Generative AI Art (Midjourney/DALL-E)",
      "Business Automation Workflows",
      "Freelancing with AI Skills",
      "Future-proofing your career"
    ],
    modules: [
      {
        title: "Introduction to LLMs & Prompt Engineering",
        points: [
          "Understanding how Large Language Models (ChatGPT, Gemini) work.",
          "The Anatomy of a Perfect Prompt: Context, Role, Task, Format.",
          "Iterative prompting and refining AI outputs.",
          "Avoiding AI hallucinations and fact-checking data.",
          "Creating custom GPT instructions for personalized workflows."
        ]
      },
      {
        title: "AI for Content Creation & Copywriting",
        points: [
          "Writing high-converting sales copy, emails, and landing pages.",
          "Generating SEO-optimized blog posts and article outlines.",
          "Creating 30-day social media content calendars in minutes.",
          "Translating and localizing content using AI.",
          "Using AI to write professional business proposals and resumes."
        ]
      },
      {
        title: "Generative AI Art & Design",
        points: [
          "Introduction to Midjourney, DALL-E 3, and Stable Diffusion.",
          "Writing descriptive image prompts for specific art styles.",
          "Using Canva's Magic Studio for rapid social media graphics.",
          "Generative Fill and AI tools natively inside Adobe Photoshop.",
          "Creating AI avatars and voiceovers for faceless YouTube channels."
        ]
      },
      {
        title: "AI for Productivity & Data Analysis",
        points: [
          "Using ChatGPT Advanced Data Analysis to read Excel/CSV files.",
          "Summarizing long PDF reports and meeting transcripts instantly.",
          "Using AI to draft Excel formulas and basic code scripts.",
          "AI tools for presentation making (Tome, Gamma).",
          "Automating email replies and inbox management."
        ]
      },
      {
        title: "Freelancing & Monetizing AI Skills",
        points: [
          "How to offer 'AI-assisted' services on Upwork and Fiverr.",
          "Starting an AI automation agency (AIAA) basics.",
          "Ethical considerations and copyright issues in AI content.",
          "Building an AI portfolio to showcase your capabilities.",
          "Staying updated with the rapidly evolving AI landscape."
        ]
      }
    ],
    faqs: [
      {
        question: "Will AI replace my job?",
        answer: "AI will not replace you; a person using AI will replace you. This course ensures YOU become the person utilizing AI to stay ahead of the competition."
      },
      {
        question: "Do I need coding knowledge to learn these AI tools?",
        answer: "Not at all. We focus on 'No-Code' AI tools. You just need to know how to type and communicate effectively in everyday English."
      },
      {
        question: "Are these tools free to use?",
        answer: "We focus heavily on free tools (like ChatGPT free tier, Canva free) while also demonstrating the power of paid subscriptions (ChatGPT Plus, Midjourney) so you can decide if you need them."
      }
    ]
  },

  "stock-market": {
    title: "Stock Market & Trading Course",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    metaTitle: "Stock Market & Trading Course in Ludhiana | Share Market Class",
    metaDescription: "Learn stock market trading in Ludhiana. Master technical analysis, price action, candlestick charts, and risk management for intraday and swing trading.",
    shortDesc: "Understand share market basics, technical analysis, trading psychology and live market strategies to build secondary income.",
    longDescription: "Take control of your financial future with our comprehensive Stock Market & Trading Course. We break down the complex world of the share market into simple, actionable strategies. You will learn the difference between long-term investing (Fundamental Analysis) and short-term trading (Technical Analysis). We dive deep into reading candlestick charts, identifying price action patterns, utilizing market indicators, and most importantly, mastering trading psychology and risk management. Stop relying on random 'tips' and learn how to independently analyze the market to generate consistent returns.",
    whoShouldJoin: "Beginners, Business Owners, Students, and anyone wanting to generate active trading income or build long-term wealth.",
    duration: "1.5 - 2 Months",
    level: "Beginner to Intermediate",
    mode: "Live Market Concept Training",
    careerOutcomes: ["Independent Trader", "Sub-broker", "Investment Analyst", "Portfolio Manager"],
    highlights: [
      "Deep Technical Analysis",
      "Candlestick Patterns & Price Action",
      "Intraday & Swing Trading Strategies",
      "Strict Risk & Money Management",
      "Trading Psychology Mastery",
      "Long-term Portfolio Building"
    ],
    modules: [
      {
        title: "Stock Market Basics & Terminology",
        points: [
          "What is the stock market? NSE, BSE, NIFTY, and SENSEX explained.",
          "Understanding Equities, IPOs, Dividends, and Market Capitalization.",
          "How brokers work, demat account setup, and trading platforms.",
          "Types of trading: Intraday, Swing, Short-term, and Long-term.",
          "Understanding order types: Limit, Market, Stop-Loss (SL)."
        ]
      },
      {
        title: "Fundamental Analysis (Long Term Investing)",
        points: [
          "How to analyze a company's balance sheet and P&L statement.",
          "Understanding key financial ratios: P/E, PB, ROE, ROCE, Debt-to-Equity.",
          "Analyzing industry trends and company management.",
          "Identifying undervalued vs. overvalued stocks.",
          "Building a diversified long-term wealth portfolio."
        ]
      },
      {
        title: "Technical Analysis & Chart Reading",
        points: [
          "Introduction to TradingView and chart setups.",
          "Understanding trendlines, Support, and Resistance zones.",
          "Mastering single and multiple Candlestick patterns (Doji, Hammer, Engulfing).",
          "Classic chart patterns (Head & Shoulders, Triangles, Double Tops).",
          "Volume analysis and identifying institutional buying/selling."
        ]
      },
      {
        title: "Indicators & Trading Strategies",
        points: [
          "Moving Averages (SMA & EMA) and crossovers.",
          "Momentum indicators: RSI, MACD, and Stochastic.",
          "Volatility indicators: Bollinger Bands and ATR.",
          "Developing a clear entry, exit, and stop-loss strategy.",
          "Introduction to Futures & Options (F&O) basics."
        ]
      },
      {
        title: "Risk Management & Trading Psychology",
        points: [
          "The golden rule: Capital preservation over profit generation.",
          "Position sizing and the 1% risk rule.",
          "Understanding the risk-to-reward (R:R) ratio.",
          "Controlling emotions: FOMO, greed, fear, and revenge trading.",
          "Maintaining a trading journal to track progress and mistakes."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a lot of money to start trading?",
        answer: "No. We encourage beginners to start with very small capital (or even 'paper trading' without real money) while learning the strategies and testing their psychology."
      },
      {
        question: "Do you provide daily trading tips?",
        answer: "We strictly DO NOT provide tips. Our goal is to make you an independent trader who can analyze charts and take their own calculated trades without depending on anyone."
      },
      {
        question: "Is intraday trading risky?",
        answer: "Yes, intraday trading carries high risk. That is exactly why our final module heavily focuses on strict Risk Management and Stop-Loss setups to protect your capital."
      }
    ]
  },

  "typing-data-entry": {
    title: "Computer Typing & Data Entry Operator",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
    metaTitle: "Typing & Data Entry Course in Ludhiana | English & Punjabi",
    metaDescription: "Improve your typing speed for Govt exams. Learn English and Punjabi touch typing along with professional Data Entry skills in Ludhiana.",
    shortDesc: "Improve English and Punjabi typing speed with touch-typing techniques, paired with real office documentation workflows.",
    longDescription: "Typing speed and accuracy are the silent engines of office productivity. Our Computer Typing & Data Entry Operator course focuses on the scientific method of 'Touch Typing'—typing without looking at the keyboard. We offer rigorous daily practice in both English and regional Punjabi/Hindi typing, which is a mandatory skill for clearing clerical typing tests in state government exams (like PSSSB). Alongside typing, you will learn professional data entry techniques in Excel, formatting official documents, and handling bulk data with zero errors.",
    whoShouldJoin: "Government Exam Candidates, Data Entry Job Seekers, Office Clerks, and students wanting to boost their computer speed.",
    duration: "2 - 3 Months",
    level: "Beginner",
    mode: "100% Practical Typing Labs",
    careerOutcomes: ["Data Entry Operator", "Govt Clerk", "Typist", "Back Office Executive"],
    highlights: [
      "Scientific Touch Typing Methodology",
      "English + Punjabi (Raavi/Asees) Typing",
      "Govt Exam Typing Test Preparation",
      "Office Documentation Formatting",
      "High-Volume Data Entry Skills",
      "Accuracy & Speed Building Tracking"
    ],
    modules: [
      {
        title: "Touch Typing Fundamentals (English)",
        points: [
          "Understanding keyboard ergonomics and home row finger placement.",
          "Upper row and bottom row keystroke practice.",
          "Mastering shift keys, symbols, and the numeric keypad.",
          "Typing without looking at the keyboard (muscle memory).",
          "Daily software-based speed and accuracy tests."
        ]
      },
      {
        title: "Regional Language Typing (Punjabi)",
        points: [
          "Introduction to Punjabi keyboard layouts (Raavi font for Govt exams).",
          "Learning the character map and special symbol combinations.",
          "Paragraph typing practice from regional newspapers.",
          "Focusing on complex Punjabi grammar formatting.",
          "Preparing for specific state government typing test software interfaces."
        ]
      },
      {
        title: "Advanced Speed Building & Accuracy",
        points: [
          "Techniques to break through speed plateaus (e.g., crossing 30 WPM to 50 WPM).",
          "The importance of 95%+ accuracy over raw speed.",
          "Typing from physical printed paper to the screen.",
          "Audio transcription basics: Typing while listening.",
          "Timed stress tests to simulate exam environments."
        ]
      },
      {
        title: "Professional Data Entry in Excel",
        points: [
          "Navigating Excel rapidly using keyboard shortcuts (no mouse).",
          "Entering bulk data accurately into spreadsheets.",
          "Using Data Validation to prevent entry errors.",
          "Creating basic forms for easy data entry.",
          "Sorting, filtering, and checking data for duplicates."
        ]
      },
      {
        title: "Office Documentation Formatting",
        points: [
          "Formatting official letters and memorandums in MS Word.",
          "Proper paragraph alignment, line spacing, and indentations.",
          "Creating tables and structured documents.",
          "Converting physical documents into digital formats via scanning.",
          "Saving, organizing, and securing digital files properly."
        ]
      }
    ],
    faqs: [
      {
        question: "Do you teach the Raavi font required for Punjab Govt exams?",
        answer: "Yes, we specifically train students on the Raavi Unicode font layout, which is the standard requirement for PSSSB and other Punjab state clerical exams."
      },
      {
        question: "How long does it take to reach 30 WPM?",
        answer: "With 1-2 hours of dedicated daily practice using our touch-typing methods, a complete beginner can comfortably reach 30 WPM with high accuracy in about 2 months."
      },
      {
        question: "Will this help me get a private job?",
        answer: "Yes, every hospital, logistics company, and corporate back-office requires fast data entry operators. High typing speed instantly makes you a preferred candidate."
      }
    ]
  },

  "hardware-repairing": {
    title: "Computer Hardware & Laptop Repairing",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    metaTitle: "Hardware & Laptop Repairing Course in Ludhiana",
    metaDescription: "Learn to assemble, troubleshoot, and repair computers and laptops in Ludhiana. 100% practical hardware networking training for business setups.",
    shortDesc: "Learn assembling computers, troubleshooting hardware problems, OS installations, and laptop repairing techniques for IT support roles.",
    longDescription: "Become an IT Support specialist with our Computer Hardware & Laptop Repairing course. This hands-on training demystifies the inside of a computer. You will learn how to completely assemble a desktop PC from scratch, identify and troubleshoot hardware failures, install operating systems, and set up basic office networks. We also cover laptop-specific architecture, screen replacements, and basic board-level diagnostics. This course is perfect for those who want to work as IT support executives in companies or start their own highly profitable computer repair and sales shop.",
    whoShouldJoin: "IT Enthusiasts, 10th/12th Pass Students, Aspiring IT Support Executives, and those wanting to start a repair business.",
    duration: "2 - 3 Months",
    level: "Beginner to Intermediate",
    mode: "100% Practical Hardware Lab",
    careerOutcomes: ["IT Support Engineer", "Hardware Technician", "System Administrator", "Self-Employed Repair Shop Owner"],
    highlights: [
      "Complete PC Assembling & Disassembling",
      "OS & Driver Installations",
      "Hardware Troubleshooting & Diagnostics",
      "Basic Laptop Repair Techniques",
      "Networking & Router Setup Fundamentals",
      "Self Business Opportunity Mentorship"
    ],
    modules: [
      {
        title: "Basic Electronics & PC Components",
        points: [
          "Understanding basic electronics: Voltage, current, resistors, and capacitors.",
          "Identifying internal PC components: Motherboard, CPU, RAM, Storage (HDD/SSD).",
          "Understanding power supplies (SMPS) and form factors.",
          "Types of processors (Intel vs. AMD) and socket compatibility.",
          "Cooling systems and thermal paste application."
        ]
      },
      {
        title: "PC Assembling & BIOS Setup",
        points: [
          "Step-by-step practical assembly of a complete desktop computer.",
          "Proper cable management and front panel connections.",
          "Understanding the BIOS/UEFI interface.",
          "Configuring boot orders, enabling virtualization, and setting passwords.",
          "Upgrading old systems (e.g., swapping HDD for SSD, adding RAM)."
        ]
      },
      {
        title: "OS Installation & Software Management",
        points: [
          "Creating bootable USB drives (Windows 10, 11, Linux).",
          "Partitioning hard drives properly during installation.",
          "Installing operating systems and understanding dual-boot setups.",
          "Finding and installing correct motherboard and graphic drivers.",
          "Installing essential utility software and robust antivirus solutions."
        ]
      },
      {
        title: "Troubleshooting & Laptop Basics",
        points: [
          "Diagnostic techniques: Identifying beep codes and POST errors.",
          "Fixing common issues: 'No Display', blue screen of death (BSOD), random reboots.",
          "Laptop architecture vs. Desktop architecture.",
          "Disassembling laptops safely, replacing keyboards, batteries, and screens.",
          "Basic motherboard power tracing and identifying burnt components."
        ]
      },
      {
        title: "Networking Basics & Peripherals",
        points: [
          "Understanding IP addresses, MAC addresses, and LAN/WAN.",
          "Crimping RJ45 cables and setting up local office networks.",
          "Configuring Wi-Fi routers, setting up passwords, and port forwarding.",
          "Installing and sharing local and network printers.",
          "Data recovery basics for corrupted or formatted drives."
        ]
      }
    ],
    faqs: [
      {
        question: "Do you teach chip-level repairing?",
        answer: "We cover basic board-level diagnostics (card-level). Deep IC/chip-level micro-soldering is an advanced electronics specialization, but our course covers 90% of the hardware issues faced in the real world."
      },
      {
        question: "Can I open my own repair shop after this?",
        answer: "Yes! Many of our hardware students start their own businesses assembling custom PCs, repairing laptops, and selling computer accessories."
      },
      {
        question: "Will I get to open real computers?",
        answer: "Absolutely. Our hardware lab is full of practice machines. You will build, tear down, format, and troubleshoot real physical hardware."
      }
    ]
  },

  "office-automation": {
    title: "Complete Office Automation Course",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    metaTitle: "Office Automation Training in Ludhiana | Back Office Jobs",
    metaDescription: "Prepare for corporate desk jobs with our Office Automation course in Ludhiana. Learn documentation, emails, Excel, and basic accounting workflows.",
    shortDesc: "Complete office job preparation course covering MS Office, internet operations, email handling, and corporate documentation workflows.",
    longDescription: "Secure a comfortable, professional desk job with our Complete Office Automation Course. This program is a bridge between basic computer literacy and professional corporate demands. We train you on exactly what happens in a real office environment every day. You will learn to draft professional emails, format official reports in Word, manage daily data in Excel, handle office equipment (printers/scanners), and perform basic accounting data entry. You will graduate with the confidence to walk into any office administration, HR, or reception role and perform flawlessly from day one.",
    whoShouldJoin: "Fresh Graduates, Housewives re-entering the workforce, Receptionists, and anyone looking for stable 'Back Office' jobs.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    mode: "100% Practical Desktop Training",
    careerOutcomes: ["Office Administrator", "Back Office Executive", "Receptionist", "HR Assistant"],
    highlights: [
      "Real-world Office Job Skills",
      "Corporate Documentation Formatting",
      "Professional Email Handling",
      "Basic Data Entry & Excel Tracking",
      "Handling Printers & Scanners",
      "Soft Skills & Telephone Etiquette Basics"
    ],
    modules: [
      {
        title: "Professional MS Word Documentation",
        points: [
          "Drafting formal business letters, memos, and circulars.",
          "Formatting professional resumes and cover letters.",
          "Using Mail Merge to send bulk personalized letters.",
          "Creating structured tables and organizational charts.",
          "Securing documents with passwords and restricted editing."
        ]
      },
      {
        title: "Excel Data Management for Office",
        points: [
          "Maintaining daily attendance, inventory, or petty cash sheets.",
          "Using essential formulas: SUM, AVERAGE, COUNT, VLOOKUP basics.",
          "Formatting data neatly with borders, shading, and freeze panes.",
          "Sorting and filtering data for quick information retrieval.",
          "Setting up Excel sheets perfectly for A4 printing."
        ]
      },
      {
        title: "Business Communication & Email Etiquette",
        points: [
          "Setting up Outlook or Gmail for business.",
          "Writing clear, professional, and polite emails.",
          "Understanding CC, BCC, signatures, and out-of-office replies.",
          "Organizing the inbox with folders, labels, and filters.",
          "Scheduling meetings using Google Calendar or Outlook Calendar."
        ]
      },
      {
        title: "Office Equipment & Internet Utilities",
        points: [
          "Connecting and operating office printers and heavy-duty scanners.",
          "Compressing large PDF files for email attachments.",
          "Using cloud storage (Google Drive, OneDrive) for file sharing.",
          "Online research skills and verifying information.",
          "Basic online utility payments and e-commerce purchasing."
        ]
      },
      {
        title: "Basic Accounting & Admin Operations",
        points: [
          "Understanding the concept of petty cash and basic ledgers.",
          "Filing systems: How to organize physical and digital documents.",
          "Basic telephone etiquette and taking professional messages.",
          "Preparing simple presentations for meetings in PowerPoint.",
          "Time management and daily task prioritization techniques."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this course different from the basic computer course?",
        answer: "Yes. Basic courses teach you *how* the software works. Office Automation teaches you *what* you need to do with that software in a real company environment."
      },
      {
        question: "What kind of jobs can I get after this?",
        answer: "You will be perfectly suited for roles like Front Desk Executive, Back Office Admin, HR Assistant, Receptionist, or Data Entry Operator in schools, hospitals, or corporate offices."
      },
      {
        question: "Will you teach spoken English?",
        answer: "While this is strictly a technical computer course, we do cover basic written English templates for professional emails and letters as part of the documentation module."
      }
    ]
  }
};

// ==========================================
// COURSE PAGE COMPONENT
// ==========================================
export default async function CoursePage(props) {
  // ✅ GOD LEVEL NEXTJS SAFE METHOD for Next.js 13+ App Router
  const { slug } = await props.params;

  // Find the requested course
  const course = courseData[slug];

  // Trigger 404 if slug is invalid
  if (!course) {
    notFound();
  }

  return (
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": course.title,
              "description": course.metaDescription,
              "provider": {
                "@type": "EducationalOrganization",
                "name": "RareTech Institute Of Information Technology",
                "sameAs": "https://raretechinstitute.com"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": course.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />

      <main className="w-full bg-white text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white">
        
        {/* ================= 1. HERO BREADCRUMB & HEADER ================= */}
        <header className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs for SEO */}
            <nav className="flex text-sm text-gray-500 font-medium mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-[#1F3E8A] transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/courses" className="hover:text-[#1F3E8A] transition-colors">Courses</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-[#FF7A00]">{course.title.split(' ').slice(0, 3).join(' ')}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="w-full lg:w-[55%]">
                <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#1F3E8A]/10 text-[#1F3E8A] font-bold text-xs tracking-wider uppercase mb-6 border border-[#1F3E8A]/20">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
                  Admissions Open 2026
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F3E8A] leading-[1.15] mb-6">
                  {course.title.replace(' in Ludhiana', '')} <br />
                  {course.title.includes('in Ludhiana') && (
                    <span className="text-[#FF7A00] text-3xl sm:text-4xl lg:text-5xl">in Ludhiana</span>
                  )}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed mb-8">
                  {course.shortDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#FF7A00] hover:bg-[#e66a00] transition-colors text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group"
                  >
                    Book Free Demo Class
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                  <a 
                    href="#curriculum"
                    className="border-2 border-gray-200 text-gray-700 hover:border-[#1F3E8A] hover:text-[#1F3E8A] transition-colors px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center text-center"
                  >
                    View Syllabus
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[45%]">
                <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <Image
                    src={course.image}
                    fill
                    priority
                    alt={`Students learning ${course.title} at RareTech Institute Ludhiana`}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating SEO Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 border border-gray-100 flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Placement Status</p>
                      <p className="text-[#1F3E8A] font-extrabold">100% Job Assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ================= 2. COURSE OVERVIEW & STATS ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: Deep SEO Content */}
            <article className="w-full lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3E8A] mb-6">Course Overview & Career Scope</h2>
              <div className="w-16 h-1.5 bg-[#FF7A00] rounded-full mb-8"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                {course.longDescription}
              </p>

              {/* Target Audience Box */}
              <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100 mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F3E8A] mb-3 flex items-center gap-3">
                  <span className="bg-[#FF7A00] text-white p-1.5 rounded-lg shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </span>
                  Who is this course for?
                </h3>
                <p className="text-gray-700 font-medium text-lg">{course.whoShouldJoin}</p>
              </div>

              {/* Career Outcomes Tags */}
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-5">Potential Career Roles</h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {course.careerOutcomes.map((role, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-full border border-gray-200">
                    {role}
                  </span>
                ))}
              </div>
            </article>

            {/* Right: Sticky Information Sidebar */}
            <aside className="w-full lg:w-1/3">
              <div className="bg-[#1F3E8A] text-white p-8 rounded-3xl shadow-2xl sticky top-8">
                <h3 className="text-2xl font-bold text-[#FF7A00] mb-6 border-b border-white/10 pb-4">Course Details</h3>
                
                <ul className="space-y-6 mb-8">
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><svg className="w-6 h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-bold">Duration</p>
                      <p className="text-lg font-semibold">{course.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><svg className="w-6 h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-bold">Skill Level</p>
                      <p className="text-lg font-semibold">{course.level}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><svg className="w-6 h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-bold">Training Mode</p>
                      <p className="text-lg font-semibold">{course.mode}</p>
                    </div>
                  </li>
                </ul>

                <h4 className="text-lg font-bold text-white mb-4 border-t border-white/10 pt-6">Key Benefits</h4>
                <ul className="space-y-3">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      <span className="font-medium text-sm leading-tight text-blue-50">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            
          </div>
        </section>

        {/* ================= 3. DETAILED CURRICULUM (SEO HEAVY) ================= */}
        <section id="curriculum" className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm">Syllabus Details</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F3E8A] mt-3 mb-6">
                What You Will Learn
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
                Our exhaustive curriculum is strictly structured to take you from absolute fundamentals to advanced professional and agency-level workflows.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {course.modules.map((module, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-l-4 border-[#FF7A00] hover:shadow-md transition-shadow">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F3E8A] mb-5 flex items-center gap-3 sm:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-[#1F3E8A] text-lg font-black border border-blue-100">
                      {index + 1}
                    </span>
                    {module.title}
                  </h3>
                  <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 pl-0 sm:pl-14">
                    {module.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#FF7A00] font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed text-[15px]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4. COURSE SPECIFIC FAQs ================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3E8A]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Got questions about this specific training program? Find answers below.
            </p>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
                <summary className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-lg text-[#1F3E8A] select-none outline-none">
                  {faq.question}
                  <span className="text-[#FF7A00] text-2xl group-open:rotate-180 transition-transform duration-300">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= 5. CONVERSION BOTTOM CTA ================= */}
        <section className="bg-gradient-to-br from-[#1F3E8A] to-[#152a60] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Join the highest-rated practical computer training institute in Ludhiana. Limited seats available for the upcoming fresh batch.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/contact"
                className="bg-[#FF7A00] hover:bg-[#e66a00] transition-colors text-white px-10 py-5 rounded-full font-extrabold text-xl shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Enroll Now / Book Demo
              </Link>
              <a 
                href="tel:+910000000000" 
                className="border-2 border-white/30 text-white hover:bg-white/10 transition-colors px-10 py-5 rounded-full font-bold text-xl w-full sm:w-auto flex items-center justify-center gap-3"
              >
                Call Institute
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}