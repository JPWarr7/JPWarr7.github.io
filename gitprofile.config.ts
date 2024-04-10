// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JPWarr7', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['JPWarr7/JPWarr7.github.io', 'jpwarr7/ai-campaign-manager', 'jpwarr7/finance-tracker', 'jpwarr7/latemate', 'jpwarr7/heart-attack-prediction-model'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'campAIgn',
          description:
            "CampAIgn is an AI-enhanced advertisement campaign generator developed for my senior capstone project, utilizing various APIs alongside Google App Engine to allow users to create Campaigns using AI, manage them in a cloud-hosted database, and directly export them to their favorite social media app, all through a published, live web-app.",
          imageUrl:
            '',
          link: 'https://ai-enhanced-advertisements.ue.r.appspot.com/',
        },
        {
          title: 'LateMate',
          description:
            ' LateMate is a course registration website, complete with account creation, course registration (add/drop course), email notifications, complete course catalogs, and separate, secure login portals depending on whether you are a student or administrator. The project was developed in a group environment under a strict 10-week deadline.',
          imageUrl:
            '',
          link: 'https://github.com/JPWarr7/latemate',
        },
      ],
    },
  },
  seo: {
    title: 'JPWarr',
    description: '',
    imageURL: 'static/favicon.ico',
  },
  social: {
    linkedin: 'jonathan-warren-670089210',
    twitter: 'JPWarr7',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jonathanwarren2022@gmail.com',
  },
  resume: {
    fileUrl:
    'static/Jonathan Warren - Software Engineer.pdf',
  },
  skills: [
    'Python',
    'JavaScript',
    'Java',
    'Git',
    'Docker',
    'AWS',
    'GCP',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Regional Water Authority',
      position: 'Junior Enterprise Architect',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://rwater.com',
    },
    {
      company: 'Southern Connecticut State University',
      position: 'Teaching Assistant (Artificial Intelligence)',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://southernct.edu',
    },
  ],
  certifications: [
    {
      name: 'Google Business Intelligence',
      body: 'Google',
      year: 'February 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Southern Connecticut State University',
      degree: 'B.S. Computer Science',
      from: '',
      to: 'June 2024',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

footer: ``,
  enablePWA: true,
};

export default CONFIG;
