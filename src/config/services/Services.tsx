export const cards = [
  {
    icon: "/images/service/seo.png",
    title: "SEO",
    description:
      "Ever feel like your website is a secret club that nobody can find? We’ll get you to the top of Google’s guest list, so your website is the life of the party. Think of us as your SEO bodyguards, making sure you don’t get stuck in the 'page 10' zone!",
  },
  {
    icon: "/images/service/smm.png",
    title: "SMM",
    description:
      "Stuck in the social media trenches, posting into the void? We’ll help you stand out on platforms like Facebook, Instagram, and Twitter—because your posts deserve more than just likes from your mom and best friend!",
  },
  {
    icon: "/images/service/PM.png",
    title: "Performance Marketing",
    description:
      "Performance marketing is similar to darts, only that you only pay for bullseyes, not random throws!  No more spending money; instead, get precise outcomes.",
  },
  {
    icon: "/images/service/branding.png",
    title: "Branding",
    description:
      "Your brand should be like your favorite celebrity—unforgettable, relatable, and possibly better than everyone else. We’ll help craft your brand's personality so it’s as iconic as your favorite meme",
  },
  {
    icon: "/images/service/EM.png",
    title: "Email Marketing",
    description:
      "Send more than just reminders to 'unsubscribe'—we’ll craft emails that people actually want to open! Think of us as the digital version of a love letter... except it’s all about your product and not a middle school crush",
  },
  {
    icon: "/images/service/WD.png",
    title: "Website Design",
    description:
      "Designing a website is like to designing your ideal home, but for the internet. We avoid the delays and provide a modern, useful area that is ready to wow!  There are no longer any cobwebs in the corner; the design is neat and appealing.",
  },
];

// Define the ServiceContent type
type ServiceContent = {
  [key: string]: {
    title: string;
    subTitle: string;
    description: string;
    whyModernize?: string[];
    approach?: string[];
    industriesWeServe?: boolean;
    industries?: string[];
    whyChooseUs?: string[];
    callToAction: string;
    process?: {
      title: string;
      description: string;
      details: string[];
    }[];
    coreServices?: {
      title: string;
      description: string;
      capabilities: string[];
    }[];
    whyChooseApproach?: {
      title: string;
      description: string;
      details: string[];
    }[];
    futureProofDescription?: string;
    transformDescription?: string;
    whyChooseServices?: {
      title: string;
      description: string;
      details: string[];
    }[];
  };
};

export const serviceContent: ServiceContent = {
  "Application Revitalization": {
    title: "Application Revitalization Services",
    subTitle: "Upgrade, Modernize & Future-Proof Your Applications",
    description:
      "In today’s fast-paced digital world, legacy applications can slow down your business operations, increase maintenance costs, and create security risks. Our Application Revitalization service helps you transform outdated systems into high-performing, scalable, and secure applications—without the need for a complete rebuild.",
    industriesWeServe: true, // This will show "Industries We Serve" for Application Revitalization
    whyModernize: [
      "Enhanced Performance – Improve speed and efficiency with optimized code and modern frameworks.",
      "Cost Reduction – Cut down maintenance and operational expenses by upgrading to a scalable infrastructure.",
      "Better Security – Implement the latest security measures to protect against cyber threats.",
      "Seamless Integrations – Enable API and cloud compatibility for better business operations.",
      "Improved User Experience – Refresh UI/UX for a more engaging and intuitive experience.",
    ],
    approach: [
      "Code Refactoring – Optimize and clean up existing code for better maintainability.",
      "Replatforming – Move applications to cloud platforms (AWS, Azure, GCP) with minimal code changes.",
      "Rearchitecting – Shift from monolithic to microservices for enhanced scalability.",
      "UI/UX Modernization – Redesign the frontend using React, Angular, or Next.js.",
      "Cloud & DevOps Enablement – Implement Docker, Kubernetes, and CI/CD pipelines for automation.",
      "Security & Compliance Updates – Ensure adherence to ISO, GDPR, HIPAA, and other standards.",
    ],
    whyChooseUs: [
      "7+ Years of Experience in Web & Cloud Application Modernization",
      "Expertise in React, Next.js, Node.js, Python, Angular, Azure, AWS",
      "Customized, Scalable & Future-Proof Solutions",
      "Proven Track Record of Successful Modernization Projects",
    ],
    callToAction:
      "Let’s transform your outdated application into a fast, secure, and modern digital experience.",
  },
  "Cloud Modernization & DevOps": {
    title: "Cloud Modernization & DevOps ",
    subTitle:
      "Empowering Businesses with Scalable, Secure & Automated Cloud Infrastructure",
    description:
      "In today’s digital era, businesses need efficient, secure, and scalable solutions to stay competitive. Our Cloud & DevOps Solutions help you seamlessly migrate, manage, and optimize your cloud infrastructure while ensuring automation, security, and data-driven decision-making.",
    whyModernize: [
      "Scalability – Scale your infrastructure effortlessly to meet growing business demands.",
      "Cost Efficiency – Optimize cloud costs with efficient resource management and automation.",
      "Enhanced Security – Implement robust security measures to protect your cloud environment.",
      "Faster Deployments – Achieve faster and more reliable deployments with CI/CD pipelines.",
      "Data-Driven Decisions – Leverage analytics and monitoring for smarter business insights.",
    ],
    approach: [
      "Cloud Migration – Move your applications, databases, and workloads to the cloud (AWS, Azure, GCP) with zero downtime and enhanced performance.",
      "Database Consulting & Analytics – Optimize, secure, and scale your SQL & NoSQL databases while leveraging data analytics for smarter business decisions.",
      "DevOps Automation – Implement CI/CD pipelines, Infrastructure as Code (IaC), Kubernetes, and Docker for automated and efficient deployments.",
      "Cloud Management – Monitor, optimize, and secure your cloud infrastructure with cost-effective resource management and security best practices.",
    ],
    whyChooseUs: [
      "7+ Years of Expertise in Cloud & DevOps",
      "Experience with AWS, Azure, GCP, Kubernetes, Terraform, Docker",
      "Optimized & Secure Cloud Solutions",
      "End-to-End Automation for Faster Deployment",
    ],
    callToAction:
      "Let’s Build a Future-Ready Cloud Strategy! 📞 Get a Free Consultation",
  },
  "UI/UX Design": {
    title: "UI/UX Design Services ",
    subTitle: "Crafting Intuitive, Engaging & User-Centric Digital Experiences",
    description:
      "A great user experience (UX) and user interface (UI) design are essential for creating engaging, efficient, and high-performing digital products. Our UI/UX design process is driven by research, innovation, and usability, ensuring seamless experiences that align with business goals and user needs.",
    process: [
      {
        title: "Discovery & Research",
        description:
          "We begin by understanding your business, audience, and competitors through:",
        details: [
          "Stakeholder Interviews to define project objectives",
          "User Research & Surveys to identify pain points and expectations",
          "Competitive Analysis to ensure your design stands out",
        ],
      },
      {
        title: "Information Architecture (IA)",
        description:
          "A well-structured design enhances navigation and user engagement. We create:",
        details: [
          "Sitemaps & User Flows to define content hierarchy",
          "Content Mapping to ensure intuitive access to information",
          "User Journey Mapping for a seamless experience",
        ],
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "We create interactive wireframes and prototypes to test user interactions before finalizing designs. This includes:",
        details: [
          "Low-Fidelity Wireframes for layout and structure",
          "Interactive Prototypes for testing real-time user flows",
          "Iterative Feedback & Refinements before development",
        ],
      },
      {
        title: "UI Design (Visual Design)",
        description:
          "We craft stunning, brand-aligned designs that elevate user engagement:",
        details: [
          "High-Fidelity UI Designs with color, typography & branding",
          "Component-Based Design Systems for consistency",
          "Pixel-Perfect Designs optimized for usability and aesthetics",
        ],
      },
      {
        title: "Usability Testing",
        description: "We validate designs with real users through:",
        details: [
          "User Testing & Behavior Analysis",
          "Feedback-Driven Design Improvements",
          "A/B Testing & Performance Metrics",
        ],
      },
      {
        title: "Development Handoff",
        description:
          "We ensure a smooth transition from design to development by providing:",
        details: [
          "Detailed UI Kits & Design Specifications",
          "Collaboration with Developers for Accuracy",
          "Guidelines for Responsiveness & Accessibility",
        ],
      },
      {
        title: "Launch & Post-Launch Support",
        description:
          "We don’t stop at launch—we ensure continuous improvement through:",
        details: [
          "Performance Monitoring & User Feedback Collection",
          "Design Optimization Based on Real-World Data",
          "Ongoing Enhancements for Evolving User Needs",
        ],
      },
    ],
    whyChooseUs: [
      "User-Centered Approach – We prioritize usability, aesthetics & functionality",
      "Data-Driven Decisions – Research-backed insights guide our designs",
      "Scalability & Consistency – We build future-proof, flexible design systems",
      "Seamless Collaboration – From concept to launch, we align with development teams",
    ],
    callToAction: "📞 Let’s Design Something Amazing – Get in Touch!",
  },
  "AI & Data Intelligence Solutions": {
    title: "AI & Data Intelligence Solutions ",
    subTitle:
      "Transforming Data into Actionable Insights with AI & Machine Learning",
    description:
      "In today’s data-driven world, extracting, analyzing, and automating information from documents, images, and the web is crucial for efficiency and decision-making. Our expertise in AI, machine learning, computer vision, and data engineering enables businesses to process and utilize data with high accuracy and automation.",
    coreServices: [
      {
        title: "AI & Machine Learning Solutions",
        description:
          "We develop AI-powered models that enhance automation, decision-making, and predictive analytics. Our solutions help businesses process complex data, recognize patterns, and generate intelligent insights.",
        capabilities: [
          "Text and Image Processing",
          "Computer Vision and Object Detection",
          "AI-Powered Data Classification",
          "Predictive Analytics",
        ],
      },
      {
        title: "Data Engineering & Data Science",
        description:
          "Our data engineering and analytics solutions help organizations manage, clean, and analyze data for better decision-making and operational efficiency.",
        capabilities: [
          "Large-Scale Data Processing",
          "Structured & Unstructured Data Extraction",
          "Data Cleaning and Transformation",
          "Business Intelligence & Reporting",
        ],
      },
      {
        title: "Intelligent Automation & Web Data Extraction",
        description:
          "We automate data collection, extraction, and processing from documents, images, and online sources to optimize workflows and improve efficiency.",
        capabilities: [
          "Automated Document Processing",
          "Intelligent Data Extraction from Images & PDFs",
          "Web Data Mining & Real-Time Data Collection",
          "AI-Driven Workflow Automation",
        ],
      },
    ],
    whyChooseUs: [
      "Expertise in AI, ML, and Data Engineering",
      "Custom AI solutions tailored to business needs",
      "High-accuracy automation & predictive insights",
      "Scalable and efficient data processing",
    ],
    callToAction: "📞 Let’s Build Your AI & Data Strategy – Contact Us Today!",
  },
  "Modular Engineering": {
    title: "Modular Engineering ",
    subTitle:
      "Building Scalable, Flexible & Future-Proof Software Architectures",
    description:
      "In today’s fast-evolving software landscape, modular engineering is key to scalability, flexibility, and maintainability. By leveraging microservices architecture, modular front-end design, and adaptive UIs, we build high-performance applications that are easy to develop, test, and manage over time. Our modular approach ensures applications remain agile, efficient, and user-friendly across diverse platforms and devices while enabling seamless updates and optimizations.",
    whyChooseApproach: [
      {
        title: "Microservices Architecture for Scalable Applications",
        description:
          "We design applications as independently deployable microservices, ensuring:",
        details: [
          "Faster development cycles and parallel team collaboration",
          "Easier updates & maintenance with minimal downtime",
          "Improved fault isolation, preventing entire system failures",
        ],
      },
      {
        title: "Modular Front-End Architecture for Reusable Components",
        description:
          "Our front-end engineering follows a modular design approach, allowing:",
        details: [
          "Reusable UI components, reducing development time",
          "Consistent branding and user experience across the application",
          "Faster scalability, making it easy to add new features",
        ],
      },
      {
        title: "Adaptive UI for Seamless User Experience",
        description:
          "We craft intelligent, responsive interfaces that adjust dynamically to:",
        details: [
          "Different screen sizes & resolutions (desktop, mobile, tablet)",
          "User preferences & behavior, improving engagement",
          "Cross-platform compatibility, ensuring a smooth experience everywhere",
        ],
      },
      {
        title: "AI-Driven Optimization & Code Efficiency",
        description:
          "We integrate AI-powered automation to enhance development efficiency by:",
        details: [
          "Optimizing code structure for better performance and maintainability",
          "Automating repetitive tasks, reducing manual effort",
          "Providing real-time analytics, helping improve module performance",
        ],
      },
      {
        title: "Decentralized Development for Faster Delivery",
        description:
          "By dividing applications into smaller, independent modules, we:",
        details: [
          "Eliminate dependency conflicts, allowing teams to work in parallel",
          "Speed up release cycles without affecting the entire system",
          "Foster greater innovation, as teams can experiment independently",
        ],
      },
      {
        title: "Enhanced Security & Compliance",
        description: "Our modular approach strengthens security by:",
        details: [
          "Securing each module individually, reducing vulnerabilities",
          "Ensuring rapid patching & updates for specific components",
          "Maintaining compliance with industry security standards",
        ],
      },
    ],
    futureProofDescription:
      "By adopting modular architectures, businesses can build robust, scalable applications that evolve effortlessly with changing demands. Our approach enhances performance, security, and flexibility, ensuring your software is always ahead of the curve.",
    callToAction:
      "📞 Let’s Discuss Your Modular Engineering Needs – Contact Us Today!",
  },
  "CMS Engineering": {
    title: "CMS Engineering",
    subTitle:
      "Empowering Businesses with Scalable, Intelligent & Secure Content Management Solutions",
    description:
      "In the digital era, managing, modifying, and monetizing content efficiently is crucial for business success. Our CMS Engineering services provide scalable, flexible, and AI-driven solutions that streamline content creation, management, and distribution. With our proprietary Aura Framework, we take CMS engineering to the next level—integrating advanced AI capabilities, predictive analytics, and seamless user experiences to revolutionize your digital content strategy.",
    whyChooseServices: [
      {
        title: "Robust & Scalable CMS Solutions",
        description:
          "We develop CMS platforms that adapt to your business growth—whether you are a startup or a large enterprise. Our scalable architecture ensures smooth content handling, even as your digital presence expands.",
        details: [],
      },
      {
        title: "Enhanced User Experience (UX)",
        description:
          "A CMS should simplify content management, not complicate it. Our UI/UX design prioritizes:",
        details: [
          "Intuitive dashboards for effortless navigation",
          "Custom workflows that streamline content operations",
          "Personalized experiences for content creators and end-users",
        ],
      },
      {
        title: "Customizable & Flexible Architecture",
        description:
          "Every business has unique content needs. Our CMS platforms are:",
        details: [
          "Modular & customizable, allowing you to add or remove features as needed",
          "Integrable with third-party services, ensuring seamless workflow management",
          "Future-ready, supporting emerging content formats and technologies",
        ],
      },
      {
        title: "AI-Powered Content Optimization & Automation",
        description:
          "We integrate advanced AI capabilities into CMS to streamline content management and enhance efficiency. Our AI-driven approach automates:",
        details: [
          "Content Tagging & Categorization – Automatically organizes content for better searchability and management.",
          "Personalized Content Delivery – Delivers relevant content based on user behavior and preferences.",
          "SEO Optimization – Enhances search rankings by dynamically structuring content for better visibility.",
        ],
      },
      {
        title: "Predictive Analytics for Content Trends",
        description: "We leverage AI-driven analytics to:",
        details: [
          "Track user engagement patterns and content effectiveness",
          "Predict emerging content trends, helping you stay ahead of competitors",
          "Optimize content strategies for maximum audience reach and interaction",
        ],
      },
      {
        title: "Security & Compliance at Its Core",
        description:
          "Protecting your digital assets is our top priority. Our CMS solutions offer:",
        details: [
          "Enterprise-grade security with encryption and access controls",
          "Compliance with GDPR, HIPAA, and industry standards",
          "Automated backups & disaster recovery to prevent data loss",
        ],
      },
      {
        title: "Streamlined Content Operations",
        description:
          "Our CMS engineering reduces manual effort and operational costs by:",
        details: [
          "Automating content workflows, freeing up creative teams",
          "Enhancing collaboration across departments with real-time editing & approval systems",
          "Integrating with marketing & analytics tools, ensuring data-driven content strategies",
        ],
      },
    ],
    transformDescription:
      "When you choose our CMS Engineering solutions, you’re not just getting a CMS—you’re getting a next-gen content ecosystem that drives engagement, empowers your content teams with intelligent automation, and boosts efficiency with AI-powered insights and analytics.",
    callToAction: "📞 Let’s Build Your Next-Gen CMS – Contact Us Today!",
  },
};
