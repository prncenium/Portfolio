export const profile = {
  name: 'Prince Kumar',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'MERN Stack Engineer', 'React Developer', 'Node.js Developer'],
  tagline:
    'Skilled in MERN stack development, combining a strong foundation in Computer Science with practical engineering experience to build scalable, high-performance web applications.',
  location: 'New Delhi, India',
  email: 'princecsk666@gmail.com',
  phone: '+91-8700853293',
  github: 'https://github.com/prncenium',
  linkedin: 'https://linkedin.com/in/prince-kumar-9525a121b',
  resume: 'https://drive.google.com/file/d/1I9qPjP-v-34iXliQ5q22Z058xpwp9m4x/view?usp=sharing',
  avatar: '/images/Profile.jpeg',
  stats: [
    { label: 'Internships', value: '2+', desc: 'Software development roles at Web Accuracy & ReverseClinics' },
    { label: 'Projects', value: '10+', desc: 'Full-stack apps shipped end-to-end, from API to UI' },
    { label: 'Tech Stack', value: '15+', desc: 'React, Node.js, Express, MongoDB & more' },
  ],
};

export const aboutMe = {
  image: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790852713/WhatsApp_Image_2026-10-01_at_4.32.16_PM.jpg',
  paragraphs: [
    "My journey into tech started with curiosity about how things actually work under the hood, which pulled me toward Computer Science at Delhi Technological University. Along the way, I picked up the MERN stack through hands-on projects and internships, turning theory into shipped products.",
    "Today, I build full-stack web applications that balance clean architecture with a smooth user experience. I'm drawn to problems that sit at the intersection of solid backend engineering and an interface that just feels right.",
  ],
};

export const education = [
  {
    title: 'Software Development',
    org: 'Masai School',
    period: '2024 – 2026',
    place: 'Bengaluru',
    logo: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790854124/Screenshot_2026-10-01_165736.png',
    points: [
      'Completed an intensive, project-based curriculum covering the MERN stack end-to-end.',
      'Built and shipped multiple full-stack applications under tight sprint deadlines.',
      'Collaborated through pair-programming and code reviews to sharpen engineering practices.',
    ],
  },
  {
    title: 'B.Tech — Computer Science Engineering',
    org: 'Delhi Technological University',
    period: '2022 – 2026',
    place: 'New Delhi',
    logo: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790854125/Screenshot_2026-10-01_165643.png',
    points: [
      'Built strong fundamentals in Data Structures & Algorithms, OOP, and core CS theory.',
      'Worked on academic projects applying full-stack and systems concepts to real problems.',
      'Balanced coursework with internships, applying classroom learning to production codebases.',
    ],
  },
];

export const experience = [
  {
    title: 'Full Stack Web Developer',
    company: 'ThreadsPhysio',
    place: '',
    period: 'Present',
    logo: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790857853/logo-web.png',
    points: [
      'Handling full-stack development and maintenance of 4 websites for ThreadsPhysio.',
      'Debugging and fixing issues across the frontend and backend to keep all 4 sites running smoothly.',
      'Managing hosting, deployments, and ongoing feature updates as a solo full-stack owner.',
    ],
    tags: ['React', 'Node.js', 'Debugging', 'Deployment'],
  },
  {
    title: 'Software Development Intern',
    company: 'Web Accuracy',
    place: 'New Delhi, India',
    period: '02/2025 – 08/2025',
    logo: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790854111/webaccuracy.avif',
    logoDark: true,
    points: [
      'Collaborated on end-to-end development of a full-stack web application, contributing to frontend architecture.',
      'Developed authentication flows and managed user data with MongoDB, while contributing to backend API development.',
      'Optimized frontend rendering and API calls, leading to faster load times and improved performance.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
  },
  {
    title: 'Software Development Intern',
    company: 'ReverseClinics',
    place: 'New Delhi, India',
    period: '09/2025 – 03/2026',
    logo: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790854111/reverse.webp',
    logoDark: true,
    points: [
      'Contributed to full-stack development of a web platform, working on frontend structure and implementation.',
      'Implemented authentication systems and handled user data using MongoDB, while assisting in backend API development.',
      'Improved frontend rendering and streamlined API requests, resulting in faster load times and better performance.',
    ],
    tags: ['React', 'MongoDB', 'REST APIs', 'bcrypt.js'],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Redux', 'Responsive Design', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'WebSocket',
      'Socket.io',
      'C++',
      'Generative AI',
      'Agentic AI',
      'AI Integration (MERN)',
    ],
  },
  {
    title: 'Database & Tools',
    skills: ['MongoDB', 'Mongoose', 'Firebase', 'Git & GitHub', 'Postman', 'Vite', 'Vercel', 'Cloudinary', 'Render'],
  },
  {
    title: 'Auth & Security',
    skills: ['JWT', 'bcrypt.js', 'Dotenv', 'Problem Solving', 'DSA', 'OAuth', 'CORS', 'Rate Limiting'],
  },
];

export const technologies = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'TypeScript',
  'Tailwind', 'Redux', 'Firebase', 'Git', 'Vite', 'Socket.io', 'Postman', 'HTML5',
];

export const projects = [
  {
    id: 'nutrifresh',
    title: 'NutriFresh',
    role: 'Frontend-heavy Full Stack App · Personal Project',
    badge: 'React & Redux',
    image: 'https://res.cloudinary.com/gitn9iob/image/upload/v1791132706/Screenshot_2026-10-04_221642.png',
    summary:
      'A Swiggy-style food ordering app with real-time menu data via a custom API proxy. Built a scalable React/Redux frontend with live animations and persistent user sessions via Firebase auth.',
    description:
      'A production-grade Swiggy-style food ordering app that fetches real-time restaurant and menu data through a custom Node.js API proxy to bypass CORS restrictions. Features a highly scalable React/Redux frontend with smooth live animations, persistent Firebase authentication, and a fully functional cart system with seamless state management.',
    features: [
      'Architected a scalable React/Redux frontend to manage complex dynamic cart updates and menu data efficiently',
      'Built a custom Node.js API proxy to bypass CORS and retrieve live restaurant data from the Swiggy API',
      'Implemented secure Firebase authentication ensuring persistent user sessions and reduced login friction',
      'Added live animations and loading skeletons for a smooth, app-like user experience',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Redux Toolkit', 'CSS3', 'Node.js', 'Firebase'],
    live: 'https://jhalak-fresh.vercel.app/',
    code: 'https://github.com/prncenium/Swiggy_Clone_WebApp',
  },
  {
    id: 'operationcost',
    title: 'OperationCost',
    role: 'Full Stack Web App · MERN Stack',
    badge: 'MERN Stack',
    image: 'https://res.cloudinary.com/gitn9iob/image/upload/v1791132705/Screenshot_2026-10-04_221714.png',
    summary:
      'A full-stack doctor & hospital booking platform with a secure RESTful API, JWT/bcrypt auth, and an interactive MongoDB-backed dashboard for managing bookings efficiently.',
    description:
      'A comprehensive full-stack doctor and hospital booking management platform. Features a robust RESTful API built with Node.js and Express handling secure bookings instantly. Fortified with JWT and bcrypt.js encryption for user security, and an interactive dashboard backed by an optimized MongoDB schema for managing doctors, hospitals, and appointments.',
    features: [
      'Developed a robust RESTful API using Node.js and Express to process secure doctor and hospital bookings instantly',
      'Fortified security by implementing JWT tokens and bcrypt.js hashing for user authentication and password protection',
      'Built an interactive MongoDB-backed dashboard with optimized schemas for doctors, hospitals, and booking management',
      'Designed a clean, responsive React UI for seamless booking flows and real-time status updates',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'bcrypt.js', 'Mongoose'],
    live: 'https://opration-cost.vercel.app/',
    code: 'https://github.com/prncenium',
  },
  {
    id: 'aicaption',
    title: 'VartalabAI — Caption App',
    role: 'AI-Powered Web App · MERN + Groq AI',
    badge: 'AI / MERN',
    image: 'https://res.cloudinary.com/gitn9iob/image/upload/v1791132703/Screenshot_2026-10-04_221733.png',
    summary:
      'An AI-powered video captioning tool using Groq AI and FFmpeg for real-time transcription with frame-accurate rendering, and a Framer Motion caption editor with live video preview.',
    description:
      'An AI-powered video captioning tool that leverages Groq AI for blazing-fast transcription and FFmpeg for frame-accurate caption rendering. Features an interactive caption editor built with React and Framer Motion, enabling real-time video preview, caption customization, and one-click export — all via a scalable MERN backend API.',
    features: [
      'Developed a scalable RESTful API using Node.js and Express to handle AI-powered video transcription and caption rendering',
      'Integrated FFmpeg and Groq AI to achieve frame-accurate caption rendering with real-time transcription performance',
      'Built an interactive caption editor with React and Framer Motion with optimized animations for real-time video preview',
      'Implemented one-click video export with embedded captions, supporting multiple video formats',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Groq AI', 'FFmpeg', 'Framer Motion'],
    live: 'https://vartalabai.vercel.app/',
    code: 'https://github.com/prncenium',
  },
];

export const testimonials = [
  {
    name: 'Jhalak Roy',
    role: 'Senior Product Manager',
    company: 'Web Accuracy',
    avatar: 'https://res.cloudinary.com/im8pkdqg/image/upload/v1789828580/Screenshot_2026-09-19_195950.png',
    quote:
      '"Prince handled a big chunk of our frontend, UI, and animation work during his internship. He has a sharp eye for detail and a real feel for motion. Always ready to learn something new and take on challenges."',
    rotate: -3,
  },
  {
    name: 'Vipin Godra',
    role: 'Reporting Manager',
    company: 'ThreadsPhysio',
    avatar: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790861191/Screenshot_2026-10-01_185551.png',
    quote:
      '"Prince single-handedly manages all 4 of our websites — frontend, backend, deployments, everything. Dependable and quick to fix whatever comes up."',
    rotate: 2,
  },
  {
    name: 'Himanshu Kumar',
    role: 'Founder',
    company: 'Editwithus.in',
    avatar: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790861191/Screenshot_2026-10-01_185529.png',
    quote:
      '"Hired Prince to build Editwithus.in and the UI work was outstanding. Clean, modern, and exactly the look we wanted for the brand."',
    rotate: -2,
  },
  {
    name: 'Raghavendra Maroju',
    role: 'CEO & Co-Founder',
    company: 'Mix Sweets (UK, Manchester)',
    avatar: 'https://res.cloudinary.com/xjo36sha/image/upload/v1790861190/Screenshot_2026-10-01_185600.png',
    quote:
      '"Prince built our full website end-to-end for our Manchester, UK-based business. Smooth process from start to finish and a great result."',
    rotate: 3,
  },
];

export const achievements = [
  {
    title: 'Masai Full Stack Hackathon',
    description:
      'Successfully delivered a full-stack project within the 24-hour challenge window, competing against peers from across the program.',
  },
];
