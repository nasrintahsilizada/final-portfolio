export const projects = [
  {
    id: 1,
    title: "freelance_Invoice_App",
    summary: " A clean, customizable invoice template designed for freelance to effciently bill clients.  It includes service detalis, rates, totals, and payment terms to stremline the invoice process. ",
    description: "This project is a simple and user-friendly freelance invoice application designed to help freelancers manage their clients, invoices, and payments efficiently. The app provides an overview dashboard showing the number of clients, invoices, total amount invoiced, and payment status (paid/unpaid.",
    image: "/public/freelance.png",
    
  
    status: "completed",
    progress: 100,
    tech: ["HTML", "CSS", "JavaScript" ],
    problem: "While working on the freelance invoice section of the portfolio, I noticed a few challenges. When there are many invoice items, the layout gets messy and doesn’t adjust well. Sometimes, the total amount and tax aren’t calculated correctly. Also, there’s no built-in option to save or send the invoice directly. On smaller screens like mobiles, some parts don’t display properly and need better responsiveness.",
    solution: "While building the freelance invoice section, I encountered a few key issues. The layout was initially messy, so I applied CSS Flexbox and Grid to organize the structure clearly. I also noticed that some of the invoice calculations, like subtotal and tax, were inaccurate. To fix that, I separated the logic for each part of the calculation to ensure the final total was always correct. Since there was no option to save or send the invoice, I added PDF export using jsPDF and integrated EmailJS to let users send the invoice directly via email. Lastly, the component wasn’t mobile-friendly, so I implemented responsive design using media queries to improve its appearance on smaller scree.",
    outcome: "The invoice component became clean, accurate, responsive, and could be exported or emailed easily.",
    links: {
      demo: "https://nasrintahsilizada.github.io/freelance-app/",
      code: "https://github.com/nasrintahsilizada/freelance-app.git"
    }
  },
  {
    id: 2,
    title: "AI translator ",
    summary: "AI-powered language translation web app",
    description: "This AI Translator project uses advanced machine learning models to provide fast and accurate translations. It supports multiple languages and helps users overcome language barriers easily. The app features a simple interface and real-time translation capabilities.",
    image: "/public/AI.png",
    status: "Featured",
    progress: 100,
    tech: ["React", "Node js", " java script", "axios", "API","vite"],
    problem: "The AI Translator project faced a few key challenges. One of the main issues was the inaccuracy in translations, particularly for languages with complex grammar or cultural idioms. Additionally, the application experienced latency due to external API response times and was limited by API usage restrictions on free plans. It also lacked support for some less common languages and required a constant internet connection, as there was no offline functionality. Despite these challenges, the project provided valuable experience in handling external APIs and improving multilingual user interfaces.",
    solution: "To improve translation accuracy, integrating multiple translation APIs or using a fine-tuned language model can help. For latency, caching frequent translations and optimizing API calls reduces delays. To handle API limits, switching to a paid plan or adding usage monitoring helps prevent breakdowns. Adding support for more languages can be achieved by integrating APIs that cover less common ones. Lastly, implementing offline mode with local storage or downloadable language packs improves accessibility without internet.",
    outcome: "The AI Translator project has been successful in providing accurate translations and reducing latency through optimization techniques. While still facing limitations with certain languages and requiring internet connectivity, improvements have been made to enhance overall performance.",
    links: {
      demo: "https://translator-ai-khaki.vercel.app/",
      code: "https://github.com/nasrintahsilizada/translator---AI.git"
    }
  },
  {
    id: 3,
    title: "Pop choice",
    summary: "PopChoice is an AI movie recommender that takes three user answers, creates embeddings, searches a Supabase vector DB, and returns the closest movie with an AI-generated explanation",
    description: "PopChoice is an AI-powered movie recommendation app. It asks you three questions, combines your answers, and turns them into embeddings using OpenAI. These embeddings are compared with movie embeddings stored in Supabase to find the closest match. Then OpenAI generates a short explanation for why that movie fits your mood, and the app displays the recommended movie with its details",
    image: "/public/movie.png",
    status: "Featured",
    progress: 100,
    tech: ["React", "vite", "java script", "supabase", "API"],
    problem: "Users often struggle to find movies that match their current mood or preferences, leading to decision fatigue and dissatisfaction with generic recommendation systems.",
    solution: "Developed an AI-driven recommendation engine that leverages user input to create personalized movie suggestions. By utilizing OpenAI for embedding generation and Supabase for vector similarity search, the app provides tailored recommendations along with AI-generated explanations to enhance user engagement.",
    outcome: "The PopChoice app successfully addresses the challenge of finding relevant movies based on user input, offering personalized recommendations and clear explanations. Users appreciate the ease of use and improved accuracy over traditional recommendation systems.",
    
    links: {
      demo:"https://project-movie-zeta.vercel.app/",  
      code: "https://github.com/nasrintahsilizada/project-movie.git"
    }
  }, 
  {
    id: 4,
    title: "Dream Destinations",
    summary: "Dream Destinations is a simple travel showcase app that displays beautiful places with images and short info to inspire users to explore new locations. ",
    description: "A travel showcase app that highlights stunning destinations around the world. Each location features high-quality images and brief descriptions to inspire users to explore new places. The app is designed with a clean and intuitive interface, making it easy for users to browse through various travel options and discover their next dream destination.",
    image: "/public/Dream.png",
    status: "Featured",
    progress: 100,
    tech: ["React", "HTML CSS", "JavaScript", "API", "Localstorage"],
    problem: "  Existing travel showcases had limited content and didn't effectively inspire exploration.",
    solution: "Created an app with rich visuals, concise info, and an intuitive UI to engage users.",
    outcome: "Attractive travel showcase app that inspires users to explore new destinations through stunning imagery and brief descriptions. Users enjoy exploring diverse locations and discovering hidden gems.",
    links: {
      demo: "https://dream-ten-zeta.vercel.app/",
      code: "https://github.com/nasrintahsilizada/dream-project.git"
    }
  },
  {
    id: 5,
    title: "Quiz App",
    summary: "Interactive quiz platform with real-time scoring ",
    description: "An engaging quiz application that allows users to test their knowledge across various topics. The app features real-time scoring, interactive questions,  to encourage friendly competition among users. It is built with a focus on user experience and performance, ensuring smooth navigation and quick response times.",
    image: "/public/quiz.png",
    status: "In Progress",
    progress: 90,
    tech: ["HTML", "CSS", "JavaScript", "Express", "Node.js"],
    problem: "Existing quiz apps lacked real-time interaction and engaging user experience.",
    solution: "Developed a real-time quiz platform with live scoring, interactive UI,",
    outcome: "The Quiz App allows users to test their knowledge through a set of questions. It provides real-time feedback, tracks the user's score, and shows the final result at the end. The app is interactive, user-friendly, and can be used for both learning and fun.",
    links: {
      demo: "https://quiz-app-opal-kappa-29.vercel.app/",
      code: "https://github.com/nasrintahsilizada/quiz-app.git"
    }
  },
  {
    id: 6,
    title: "school portal",
    summary: "Welcome to our student portal — explore courses, check your profile, and stay connected.",
    description: "A comprehensive student portal that provides easy access to course materials, personal profiles, and communication tools. The portal is designed to enhance the student experience by offering a centralized platform for managing academic activities and staying informed about school updates.",
    image: "/public/school.png",
    status: "completed",
    progress: 100,
    tech: ["HTML", "Java script", "css", ],
    problem: "the java script validation for the form is not working properly.",
    solution: "Implemented robust JavaScript validation to ensure accurate form submissions and enhance user experience.",
    outcome: "The student portal provides a seamless experience for students to access their courses, manage their profiles, and stay connected with school updates. The platform is user-friendly and efficient, making it easier for students to navigate their academic journey.",
    links: {
      demo: "https://nasrintahsilizada.github.io/school-project/",
      code: "https://github.com/nasrintahsilizada/school-project.git"
    }
  },
  
  {
    id: 7,
    title: "Responsive Movie Theater Web Page",
    summary: "A responsive movie theater web page that showcases current films, showtimes, and ticket booking options.",
    description: "responsive movie theater web page that provides users with information about current films, showtimes, and ticket booking options. The design is mobile-friendly and adapts to various screen sizes, ensuring a seamless experience across devices.",
    image: "/public/cinema.png",
    status: "In progress",
    progress: 90,
    tech: ["HTML",  "css","reponsive design" ],
    problem: "the java script validation for the form is not working properly.",
    solution: "Implemented robust JavaScript validation to ensure accurate form submissions and enhance user experience.",
    outcome: "movie theater web page provides users with an easy way to browse current films, check showtimes, and book tickets. The responsive design ensures a smooth experience on both desktop and mobile devices, making it convenient for users to access information and make reservations from anywhere.",
    links: {
      demo: "https://nasrintahsilizada.github.io/movie-responsive/",
      code: "https://github.com/nasrintahsilizada/movie-responsive.git"
    }
  },
];


export const experience = {
  technicalSkills: {
    title: "Technical Skills & Expertise",
    skills: [
      "Web Development: HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS,Experss.js, Node.js", 
      "Programming: javaScript (with focus on front-end)",
      "Databases: MySQL, SQL",
      "Design:  UI/UX Principles, Figma, ",
      "Other: Git/GitHub, Responsive Design, REST APIs"
    ]
  },
  certifications: {
    title: "Language & Teaching Experience",
    details: "Currently preparing for the Duolingo English Test, with strong command of reading, writing, listening, and speaking skills. Over one year of experience teaching English as an instructor, which has strengthened communication and language abilities."
  }
};

export const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", ] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
  { category: "Tools", items: ["Git",  "Vite", "Webpack",  ] },
  { category: "Design", items: ["Figma", "Responsive Design", "UI/UX", "Accessibility", "Animation"] }
];
