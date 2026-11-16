// All site content lives here. Edit this file to update the portfolio.
import photo from './home/images/mark.jpg';
import risk from './projects/images/risk.png';
import rice from './projects/images/rice.png';
import contact from './projects/images/contact.png';
import saca from './projects/images/saca.png';
import sanet from './projects/images/sanet.png';
import herblens from './projects/images/herblens.png';
import citylytics from './projects/images/citylytics.png';
import ebay from './projects/images/ebay.png';
import cip1 from './projects/images/cip1.png';
import cip2 from './projects/images/cip2.png';
import cpapassist from './projects/images/cpapassist.jpg';
import cobrapparel from './projects/images/cobrapparel.jpg';
import cobrashop from './projects/images/cobrashop.jpg';
import nexstaypms from './projects/images/nexstaypms.jpg';
import airo from './projects/images/airo.jpg';
import nexplus from './projects/images/nexplus.jpg';

export const profile = {
  name: 'Mark Antony Calipayan',
  initials: 'MC',
  role: 'Product and Technology Lead · Nexbit Tech PH',
  photo,
  headline: ['I automate the busywork', 'so teams can focus', 'on the real work.'],
  intro:
    'I build websites, online stores and internal tools, then automate the manual work around them, so your team spends time on customers instead of copy-paste.',
  email: 'markantonyvc01@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/calipayanmav24/' },
    { label: 'GitHub', href: 'https://github.com/marcus024' },
    { label: 'WhatsApp', href: 'https://wa.me/639460822777' },
  ],
};

export const stack = [
  'Laravel', 'PHP', 'React', 'TypeScript', 'Inertia', 'NestJS', 'Flutter', 'MySQL', 'PostgreSQL',
  'AWS EC2', 'AWS RDS', 'AWS S3', 'AWS SES', 'CloudFront', 'CloudWatch', 'Systems Manager', 'Amazon Bedrock',
  'Claude Code', 'Codex', 'GitHub Actions', 'Nginx', 'Docker', 'Shopify', 'WordPress', 'Gemini', 'OAuth2 / Passport', 'Power BI', 'Figma',
]

// What a client can hire me for.
// Businesses I have worked with (shown under the hero).
export const clients = ['Cobrapparel', 'CPAP Assist', 'Riverina Party Hire', 'Centrum Finance', 'UAS', 'Employees\' Compensation Commission'];

// How an engagement runs.
export const process = [
  { title: 'Call', line: 'We talk through what you need and what is slowing your team down.' },
  { title: 'Plan and quote', line: 'You get a written scope, timeline and quote before any work starts.' },
  { title: 'Build and support', line: 'I build in small steps you can review, launch it, and stay on for fixes and updates.' },
];

export const services = [
  { title: 'Websites and online stores', line: 'Shopify, WordPress and WooCommerce. Built, launched and looked after.' },
  { title: 'Custom web apps', line: 'Checkouts, portals, dashboards and integrations in Laravel and React.' },
  { title: 'Cloud and DevOps on AWS', line: 'Servers, databases, email and safe one-step deployments.' },
  { title: 'Automations and AI', line: 'Reports, payments and AI assistants that run without manual work. Built faster with Claude Code and Codex.' },
]

// Results: each case is a real piece of shipped work. `metric` states a fact about what was built.
export const impact = [
  {
    id: 'masking',
    short: 'Email masking built in-house',
    product: 'UAS',
    title: 'Email masking built in-house instead of bought',
    problem:
      'UAS needed masked email addresses, and the option on the table was paying a third-party software developer to build and run it.',
    built:
      'An in-house email masking app: create, edit and switch off aliases, forward inbound mail to the real inbox through Mailgun, keep a log of every forwarded message, and send a test email from any alias. The company owns it and pays no outside developer.',
    metric: { big: 'In-house', label: 'no third-party development cost' },
  },
  {
    id: 'aidlc',
    short: 'An AI team that runs the whole delivery cycle',
    product: 'Nexbit World',
    title: 'An AI development lifecycle (AIDLC) for an agentic workplace',
    problem:
      'Growing output normally means hiring more people for discovery, design, development, QA and documentation.',
    built:
      'A workflow where role-based AI agents, powered by Codex, take a project through discovery, design, development, QA, documentation and acceptance, handing real files to each other. Failed QA sends the work back for a repair and retest. Every command and output is recorded so a person can review and accept it. Day to day I use Claude Code and Codex as AI pair programmers for coding, reviews and automation scripts.',
    metric: { big: '6 stages', label: 'run by AI agents, reviewed by a person' },
  },
  {
    id: 'aws',
    short: 'Company apps moved to AWS',
    product: 'AWS',
    title: 'Planned, costed and moved the company\'s apps to AWS',
    problem:
      'Apps ran on a shared VPS with manual deploys, local file storage and no central logs, which made scaling and recovery hard.',
    built:
      'An AWS architecture and cost plan mapping each layer to a managed service: EC2 for hosting, RDS for MySQL, S3 for files, SES for email, CloudFront, CloudWatch for logs, Certificate Manager for SSL, Elastic IPs and Bedrock for AI. Each product got its own cost estimate, and production and staging servers now run on AWS, with monthly billing tracked.',
    metric: { big: '8 apps', label: 'running on AWS, with production and staging servers' },
  },
  {
    id: 'deploy',
    short: 'Every deploy checked before and after',
    product: 'AWS · Deployment hub',
    title: 'One deployment hub for every app, with checks at every step',
    problem:
      'Each app had its own deploy script and steps. Deploys could ship uncommitted code, skip the database backup, or finish without anyone confirming the site was up.',
    built:
      'A single hub that checks, deploys and rolls back every app. Before a deploy it confirms the repo is on main, clean and up to date, runs the build, and does a read-only server check. Then it backs up the database, runs migrations only on request, confirms the server runs the exact commit, checks the public URL and logs the release. If any step fails, the rest stop. CI on POS and Score also tests, audits dependencies and ships on merge.',
    metric: { big: '1 hub', label: 'to check, deploy and roll back every app' },
  },
  {
    id: 'payroll',
    short: 'Lighter payslips, automatic tax reports',
    product: 'HRIS',
    title: 'Philippine payroll and compliance, generated instead of typed',
    problem:
      'Payroll in the Philippines means holiday, rest-day, overtime and night-differential rules, plus monthly and yearly government reports. Done by hand, every period is slow and error-prone.',
    built:
      'A payroll engine with PH pay rules, 13th month, final pay and tax annualization, loan deductions that never push net pay below zero, and one-click BIR 1601-C, 2316, 1604-C, alphalist, SSS, PhilHealth and Pag-IBIG reports. Employees download their own payslips and 2316.',
    metric: { big: '−97%', label: 'payslip PDF size, 880 KB → 30 KB, by subsetting fonts' },
  },
  {
    id: 'helpdesk',
    short: 'AI answers before a ticket exists',
    product: 'NextGen Desk · AIRO',
    title: 'An AI assistant that answers before a ticket is filed',
    problem:
      'Many IT tickets are questions that already have an answer. Each one still costs an agent time to read, route and reply.',
    built:
      'AIRO answers first. If the employee marks it not helpful, a ticket is created and routed to the right department. I added ticket-deflection tracking, and an automatic fallback from Gemini to Amazon Bedrock so the assistant keeps working when one AI provider is down.',
    metric: { big: '2 AIs', label: 'with automatic fallback, plus deflection tracking' },
  },
  {
    id: 'score',
    short: 'A whole review cycle, one file',
    product: 'NextGen Score',
    title: 'A full performance-review cycle set up from one upload',
    problem:
      'HR assigned balanced scorecards to employees one by one, matching each department\'s file to the right person by hand.',
    built:
      'Bulk import of every department and level\'s scorecard templates at once. The system detects whose file it is from any ID label or full name, imports levels and reporting lines from HR\'s masterfile, and can clone the last cycle into the next period.',
    metric: { big: '1 upload', label: 'to assign scorecards across all departments' },
  },
  {
    id: 'sso',
    short: 'One sign-in across company apps',
    product: 'Website · Partner · Desk · Score',
    title: 'One sign-in and synced data across company apps',
    problem:
      'Partners and staff kept separate accounts in each system, and orders had to be copied between the partner portal and the main store.',
    built:
      'An OAuth2 identity provider (Laravel Passport) for the partner portal, single sign-on into the store admin, account and hardware-order sync between the two, and an SSO issuer in the helpdesk that the performance app signs in through.',
    metric: { big: '4 apps', label: 'connected by single sign-on and data sync' },
  },
];

// Automations: trigger → what happens → product
export const automations = [
  { trigger: 'Code is approved', action: 'Test, build and release to the live system', product: 'Point of sale' },
  { trigger: 'Payroll run', action: 'Generate payslips and every government tax and benefits report', product: 'HR and payroll' },
  { trigger: 'Every day', action: 'Remind HR and staff before employee documents expire', product: 'HR and payroll' },
  { trigger: 'On a schedule', action: 'Email advertisers a branded report of when their ads played', product: 'Digital signage' },
  { trigger: 'Employee asks IT', action: 'AI answers first, then routes a ticket to the right team', product: 'IT helpdesk' },
  { trigger: 'HR uploads a file', action: 'Match employees, assign scorecards, open the next review period', product: 'Performance reviews' },
  { trigger: 'Partner signs up or orders', action: 'Sync the account and order to the main store', product: 'Online store' },
  { trigger: 'Payment pending', action: 'Check with the payment provider until it clears, then create the order', product: 'Payments' },
  { trigger: 'AI provider fails', action: 'Switch to a backup AI without the user noticing', product: 'AI assistant' },
  { trigger: 'Client follow-up due', action: 'Send reminders and portal notifications', product: 'CRM' },
]

// From LinkedIn. Newest first. `now: true` marks current roles.
export const experience = [
  {
    org: 'Nexbit Tech PH · UAS',
    where: 'Pasig · Hybrid',
    roles: [
      { title: 'Product and Technology Lead', from: 'Oct 2025', to: 'Now', now: true },
      { title: 'Digital Developer', from: 'May 2025', to: 'Oct 2025' },
      { title: 'WFM Data Analyst', from: 'Dec 2024', to: 'May 2025' },
    ],
  },
  {
    org: 'Riverina Party Hire',
    where: 'Australia · Remote',
    roles: [{ title: 'Shopify Website Developer', from: 'Sep 2025', to: 'Now', now: true }],
  },
  {
    org: 'Cobrapparel',
    where: 'Australia · Remote',
    roles: [{ title: 'Website Maintenance', from: 'Jan 2025', to: 'Apr 2025' }],
  },
  {
    org: 'Centrum Finance',
    where: 'Australia · Remote',
    roles: [{ title: 'WordPress Developer', from: 'Jul 2024', to: 'Jul 2024' }],
  },
  {
    org: 'Samar State University',
    where: 'Samar · On-site',
    roles: [
      { title: 'Project Technical Assistant', from: 'Jan 2024', to: 'Aug 2024' },
      { title: 'Project Development Officer', from: 'Oct 2023', to: 'Feb 2024' },
      { title: 'Project Administrative Aide V', from: 'Aug 2023', to: 'Oct 2023' },
    ],
  },
  {
    org: "Employees' Compensation Commission",
    where: 'Makati · Internship',
    roles: [{ title: 'PHP Web Developer', from: 'Feb 2023', to: 'May 2023' }],
  },
  {
    org: 'Freelance',
    where: 'Remote',
    roles: [{ title: 'Project Developer · IoT, web, data', from: 'Jan 2021', to: 'Dec 2024' }],
  },
];

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'data', label: 'Data & AI' },
  { key: 'design', label: 'UI/UX' },
];

// shape: 'wide' (desktop screenshot), 'phone' (tall mobile screenshot), 'square'
export const projects = [
  {
    id: 'nexstaypms',
    group: 'live',
    name: 'NexStay PMS',
    kind: 'Hotel software · SaaS',
    year: '2026',
    tags: ['web'],
    stack: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'AWS'],
    summary:
      'Cloud property management for hotels and resorts, from 20 rooms to a whole group: front desk, housekeeping, guided night audit, rates, OTA channel sync, its own booking engine, door-lock key cards and BIR-ready invoices. Built at Nexbit Tech PH.',
    img: nexstaypms,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://pms.nexbittech.com.ph/welcome' }],
  },
  {
    id: 'airo',
    group: 'live',
    name: 'AIRO Intelligence',
    kind: 'AI kiosk · Voice AI',
    year: '2026',
    tags: ['web', 'data'],
    stack: ['Django', 'React', 'Three.js', 'Gemini', 'Amazon Bedrock'],
    summary:
      'An AI concierge kiosk for hotels, hospitals, malls and offices. It answers visitors by voice, gives turn-by-turn wayfinding on interactive floor plans, and shows which routes visitors take. Runs 24/7 without extra staff. Built at Nexbit Tech PH.',
    img: airo,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://airo.nexbittech.com.ph/login' }],
  },
  {
    id: 'nexplus',
    group: 'live',
    name: 'Nex+',
    kind: 'Mobile app · NFC',
    year: '2026',
    tags: ['mobile'],
    stack: ['Flutter', 'Laravel API', 'Laravel Reverb', 'Firebase'],
    summary:
      'An all-in-one NFC super app on Google Play: share a digital business card with one tap or QR code, see taps by month and city, follow up on leads, track pets and walks, and measure your carbon footprint. Built at Nexbit Tech PH.',
    img: nexplus,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://nexplus.nexbittech.com.ph' }],
  },
  {
    id: 'cobrashop',
    group: 'live',
    name: 'Cobrapparel Club Shop',
    kind: 'Custom checkout · Laravel',
    year: '2025',
    tags: ['web'],
    stack: ['Laravel', 'MySQL', 'Custom checkout'],
    summary:
      'A custom Laravel store for an Australian apparel brand. Every sports club gets its own collection page, and fans search, add to cart and check out in one place.',
    img: cobrashop,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://shop.cobrapparel.com' }],
  },
  {
    id: 'cobrapparel',
    group: 'live',
    name: 'Cobrapparel',
    kind: 'Website · WordPress',
    year: '2025',
    tags: ['web'],
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    summary:
      'Website maintenance for an Australian custom apparel and sportswear brand: updates, fixes and product pages for teams, schools and businesses.',
    img: cobrapparel,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://cobrapparel.com' }],
  },
  {
    id: 'cpapassist',
    group: 'live',
    name: 'CPAP Assist',
    kind: 'Online store · Shopify',
    year: '2025',
    tags: ['web'],
    stack: ['Shopify', 'Liquid'],
    summary:
      'Online store for an Australian sleep-therapy supplier: CPAP machines, masks and accessories, plus machine rentals, sleep tests and mask-fitting bookings.',
    img: cpapassist,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'https://cpapassist.com.au' }],
  },
  {
    id: 'rice',
    group: 'earlier',
    name: 'Rice Monitoring System',
    kind: 'Web app · IoT',
    year: '2024',
    tags: ['web', 'data'],
    stack: ['PHP', 'MySQL', 'Soil sensors', 'Charts'],
    summary:
      'Tracks rice production month by month and reads live soil data from field devices, then gives farmers insights and recommendations.',
    detail:
      'An information system for farmers\' rice production with soil monitoring devices in the field. Farmers log farm details and rice photos, the dashboard shows temperature, humidity and soil readings over time, and monthly reports highlight where yields can improve.',
    img: rice,
    shape: 'wide',
    links: [{ label: 'Open live site', href: 'http://ricems.ricelm.site/' }],
  },
  {
    id: 'saca',
    group: 'earlier',
    name: 'SACA',
    kind: 'Mobile app · Machine learning',
    year: '2024',
    tags: ['mobile', 'data'],
    stack: ['Flutter', 'CNN model', 'Firebase'],
    summary:
      'Recommends which crops to plant from soil and weather values, and identifies pests from a photo using a CNN model.',
    detail:
      'Farmers enter agricultural parameters and SACA predicts the crops best suited to them. The pest detection screen takes a photo from the camera or gallery and a convolutional neural network identifies the pest, with details on what it is and how to handle it.',
    img: saca,
    shape: 'strip',
    links: [],
  },
  {
    id: 'sanet',
    group: 'earlier',
    name: 'SANET',
    kind: 'Mobile app · GIS',
    year: '2024',
    tags: ['mobile', 'design'],
    stack: ['FlutterFlow', 'GIS maps'],
    summary:
      'Sustainable Aquatic Network for Eco-friendly Techniques: map-based tools that help fishing communities practise sustainable fishing.',
    detail:
      'SANET gives fishing communities modern, easy tools for sustainable practice, built around a GIS map of fishing areas. Designed and prototyped in FlutterFlow.',
    img: sanet,
    shape: 'phone',
    links: [{ label: 'View prototype', href: 'https://app.flutterflow.io/share/gis-map-sanet-jo62mk' }],
  },
  {
    id: 'herblens',
    group: 'earlier',
    name: 'HerbLens',
    kind: 'Mobile app · AR + ML',
    year: '2024',
    tags: ['mobile', 'design', 'data'],
    stack: ['Figma', 'CNN model', 'AR'],
    summary: 'Point your camera at a plant and HerbLens identifies the herb in real time using a CNN model and AR.',
    detail:
      'A mobile app that combines a CNN image model with augmented reality to detect herbal plants live through the camera. The full flow was designed and prototyped in Figma.',
    img: herblens,
    shape: 'phone',
    links: [{ label: 'View prototype', href: 'https://www.figma.com/proto/XDrXflwHYN6OJLDs4MgIte/HerbLens?node-id=0-1&t=lRgS0PLfqsFbdXD4-1' }],
  },
  {
    id: 'citylytics',
    group: 'earlier',
    name: 'Project CityLytics',
    kind: 'Desktop app · Analytics',
    year: '2024',
    tags: ['design', 'data'],
    stack: ['Figma', 'Predictive analytics'],
    summary:
      'Monitors and gives insights on the projects under the 12-Point Kauswagan Agenda of Catbalogan City.',
    detail:
      'Predictive data analytics and quantitative modelling for Catbalogan City\'s government efficiency indexing. Each of the twelve agenda areas gets its own tracking and insight view. Designed as a desktop app and prototyped in Figma.',
    img: citylytics,
    shape: 'square',
    links: [{ label: 'View prototype', href: 'https://www.figma.com/proto/80ZMO0yfPLOTnHbOiyGEQQ/Pr?node-id=0-1&t=iLJzqiKqbDMpvhGb-1' }],
  },
  {
    id: 'ebay',
    group: 'earlier',
    name: 'eBay Used Car Sales',
    kind: 'Power BI dashboard',
    year: '2024',
    tags: ['data'],
    stack: ['Power BI', 'Excel'],
    summary: 'My entry to the Onyx Data DNA Challenge: a dashboard of eBay used car sales for March 2024.',
    detail:
      'Built in Power BI Desktop from an Excel data source and published with Power BI Service. Created for the Onyx Data DNA Challenge.',
    img: ebay,
    shape: 'wide',
    links: [{ label: 'Open dashboard', href: 'https://app.powerbi.com/view?r=eyJrIjoiNTk3NGM4OTMtYmM3Ni00YTExLWFiYzQtZGNlNDIxMGUxMjc1IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D' }],
  },
  {
    id: 'cip',
    group: 'earlier',
    name: 'Competitive Industrial Performance Index',
    kind: 'Power BI dashboard',
    year: '2024',
    tags: ['data'],
    stack: ['Power BI'],
    summary: 'Two versions of a dashboard comparing countries\' industrial performance, from my daily Power BI practice.',
    detail:
      'Part of my daily Power BI practice. Version 2 reworks the layout and visuals of the first version.',
    img: cip1,
    gallery: [cip1, cip2],
    shape: 'wide',
    links: [
      { label: 'Open version 2', href: 'https://app.powerbi.com/view?r=eyJrIjoiNWQ4MzQyMTMtZjM4YS00MjZkLTk4OTItMjBhNmNlMzI5Mzg4IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D' },
      { label: 'Open version 1', href: 'https://app.powerbi.com/view?r=eyJrIjoiZjcxNzljZWUtMTEwNS00MWEyLThiZmEtNjZiZjlmNmNkNmM2IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D' },
    ],
  },
  {
    id: 'risk',
    group: 'earlier',
    name: 'Risk Management System',
    kind: 'Web app',
    year: '2024',
    tags: ['web'],
    stack: ['Web app', 'MySQL'],
    summary: 'Helps companies track risks and opportunities and decide on actions, with insights for each risk.',
    detail:
      'A web application for logging company risks and opportunities, rating them, and planning actions. The dashboard surfaces insights about which risks need attention.',
    img: risk,
    shape: 'wide',
    links: [],
  },
  {
    id: 'contact',
    group: 'earlier',
    name: 'Contact System',
    kind: 'Web app',
    year: '2024',
    tags: ['web'],
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    summary: 'A clean contact manager for adding, editing and deleting user contacts.',
    detail: 'A web app for managing user contacts with full create, edit and delete flows.',
    img: contact,
    shape: 'wide',
    links: [],
  },
];
