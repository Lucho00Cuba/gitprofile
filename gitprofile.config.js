// gitprofile.config.js

const config = {
  github: {
    username: 'Lucho00Cuba', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'geo-spy',
        'continues-delivery',
        'gitprofile',
        'php-mailer',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'luis-octavio-mota-verdasco-sys-admin',
    twitter: 'zzjust_mezz',
    mastodon: '',
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
    website: 'https://lucho00cuba.github.io',
    phone: '',
    email: 'lomv0209@gmail.com',
  },
  resume: {
    fileUrl:
      'https://lucho00cuba.github.io/gitprofile/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bash',
    'Python',
    'Go',
    'SQL',
    'PowerShell',
    'Linux',
    'Proxmox',
    'PostgreSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'Docker',
    'AWS',
    'Openstack',
    'Ansible',
    'Traefik',
    'HAProxy',
    'NGINX',
  ],
  experiences: [
    {
      company: 'Vermont Solutions',
      position: 'DevOps Engineer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://vermont-solutions.com',
    },
    {
      company: 'Vermont Solutions',
      position: 'System Administrator',
      from: 'May 2021',
      to: 'April 2023',
      companyLink: 'https://vermont-solutions.com',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com'
  //   },
  // ],
  education: [
    {
      institution: 'iFP. Innovación en Formación Profesional',
      degree: 'Administración de sistemas informáticos en red',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'iFP. Innovación en Formación Profesional',
      degree: 'Sistemas MicroInformaticos y Redes',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Proxmox V6',
      description:
        'Proxmox Virtual Environment, o Proxmox VE, entorno de virtualización de servidores de código abierto',
      imageUrl: 'https://www.tuxis.nl/wp-content/uploads/2020/11/proxmox-ve-250.png',
      link: 'https://lucho00cuba.github.io/Proxmox/',
    },
    {
      title: 'Boxcraft',
      description:
        'Módulo BoxCraft para establecer un sistema de procesamiento distribuido',
      imageUrl: 'https://cdn.vectorstock.com/i/preview-1x/57/67/people-loading-boxes-into-cargo-container-vector-31685767.jpg',
      link: 'https://github.com/Lucho00Cuba/boxcraft',
    },
    {
      title: 'CS-Academy',
      description:
        'Laboratorios de Ciberseguridad/Pentesting',
      imageUrl: 'https://cs-academy.org/img/csacademy-logo-head.png',
      link: 'https://cs-academy.org',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
