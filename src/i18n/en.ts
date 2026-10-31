import type { Dictionary } from './ui';
import type { CookiesSectionId, CookiesSectionText } from '../data/cookies';
import type { FaqGroupsText } from '../data/faq';
import type { PrivacySectionId, PrivacySectionText } from '../data/privacy';
import { contactEmail, privacyRetentionMonths } from '../data/site';

const privacySections: Record<PrivacySectionId, PrivacySectionText> = {
  controller: {
    heading: 'Who is responsible',
    blocks: [
      { p: 'The party responsible for your data is El Guía CR. Here is how to identify and reach us:' },
      { p: 'For any question about your data, or to exercise your rights, write to us at {email}.' },
    ],
  },
  data: {
    heading: 'What data we ask for and what is required',
    blocks: [
      { p: 'When you send the form, your data becomes part of an inquiry database kept by El Guía CR: the {email} mailbox and the conversations that follow, by email or WhatsApp.' },
      { p: 'This data is required, because without it we cannot reply:' },
      { list: ['who the experience is for;', 'your name;', 'your message;', 'how you prefer to be contacted and the detail to do it: a WhatsApp number or an email address;', 'your authorization, which you give by ticking the box on the form.'] },
      { p: 'This data is optional: your interests, how many people would take part, the approximate date and the part of Costa Rica you have in mind. If you leave it blank we still reply, but with less to go on for a first proposal.' },
      { p: 'If you do not provide the required data, the form cannot be sent and we cannot answer your inquiry.' },
      { p: 'We also keep the date and time you accepted this policy, its version and the language of the site.' },
      { p: 'If you only visit the site without writing to us, we ask you for no data. Cloudflare Web Analytics records, in aggregate, which page was visited, which page you came from, the type of browser and device, and performance metrics, without identifying you.' },
    ],
  },
  purposes: {
    heading: 'What we use your data for',
    blocks: [
      { p: 'We use your data only to:' },
      { list: ['answer your inquiry and prepare a quote or an itinerary;', 'keep a record of the conversation and of the authorization you gave;', 'prevent abuse of the form, with the Turnstile check and a trap field for bots;', 'measure, in aggregate, how many people visit the site so we can improve it, without identifying visitors.'] },
      { p: 'Processing means receiving your inquiry, storing it, reading it, replying to it and, once the retention period ends, deleting or anonymizing it.' },
      { p: 'We do not use your data for marketing or newsletters, we do not build profiles and we make no automated decisions about you, apart from the bot check. If we ever want to use it for something else, we will ask for your authorization first.' },
    ],
  },
  recipients: {
    heading: 'Who receives your data',
    blocks: [
      { p: 'Inside El Guía CR, only the team that handles inquiries can see your data. To make the form work we use these providers, who process it on our behalf:' },
      { list: ['Cloudflare: hosts the site, counts visits in aggregate with Web Analytics, runs the Turnstile check and runs the service that receives the form.', 'Resend: emails your inquiry to our mailbox.', 'Hostinger: hosts the {email} mailbox, where your inquiry arrives.', 'WhatsApp (Meta): only if you choose to be contacted on WhatsApp, because the conversation goes through their service.'] },
      { p: 'These providers may process data outside Costa Rica, for example in the United States. By ticking the box on the form you authorize us to send them your data for that purpose.' },
      { p: 'We do not sell your data, we do not share it with anyone else and we do not use it for marketing.' },
    ],
  },
  retention: {
    heading: 'How long we keep it',
    blocks: [
      { p: `We keep your inquiry for as long as we need it to reply to you, and up to ${privacyRetentionMonths} months after the last contact. After that we delete or anonymize it, unless a law requires us to keep it longer.` },
      { p: 'If you want us to delete it sooner, you can ask at any time.' },
    ],
  },
  sensitive: {
    heading: 'Sensitive data',
    blocks: [
      { p: 'We do not need sensitive data to answer your inquiry, and nobody is obliged to provide it. Please do not write it in the message: health data (including allergies or disability), religion, ethnic origin, sex life, political opinions or socioeconomic situation.' },
      { p: 'If we need to know something like that to organize your experience safely, we will ask later, through direct contact and only what is strictly necessary. If you already included it in a message, you can ask us to delete it.' },
    ],
  },
  rights: {
    heading: 'Your rights and how to use them',
    blocks: [
      { p: 'Law 8968 gives you the right to:' },
      { list: ['access your data and know how we use it;', 'correct or update it if it is wrong or out of date;', 'ask us to delete it (cancellation);', 'consent to, or refuse, its disclosure or transfer, and revoke the authorization you gave at any time.'] },
      { p: 'To use them, write to us at {email} and tell us what you want to do. It is free. We may ask you to confirm that you are the person the data belongs to, so we do not hand it to someone else.' },
      { p: 'We reply within 5 business days. If you revoke your authorization, we apply that within the same time; revoking does not affect what we did before receiving it. You can ask for access to your data whenever you like, but no more than once every 6 months.' },
      { p: 'If we do not reply or you disagree with our answer, you can file a complaint with PRODHAB, Costa Rica\'s data protection agency (Agencia de Protección de Datos de los Habitantes): {prodhab}.' },
    ],
  },
  security: {
    heading: 'Security and incidents',
    blocks: [
      { p: 'We protect your data with reasonable measures: the site uses an encrypted connection (HTTPS) and your inquiry goes straight from the form to our mailbox, without us storing it in any other database of our own. The providers that process it may keep their own technical records.' },
      { p: 'If a security incident affects your data, we will tell you within 5 business days. The notice explains what happened, what data was affected and what we did about it.' },
    ],
  },
  cookies: {
    heading: 'Cookies, the bot check and visit measurement',
    blocks: [
      { p: 'This site does not use advertising or marketing cookies. To count visits in aggregate we use Cloudflare Web Analytics, which according to Cloudflare does not use cookies, local storage or fingerprinting.' },
      { p: 'The form uses Cloudflare Turnstile, which checks technical signals from your browser, such as the IP address, to tell people from bots. Turnstile loads when you get near the form or start using it, and we do not add that information to your inquiry.' },
      { p: 'More detail on the {cookies}. Before adding any tool that identifies people or sets cookies, we will update this policy and the cookie one.' },
    ],
  },
  minors: {
    heading: 'Minors',
    blocks: [
      { p: 'The form is for adults. If you are inquiring on behalf of a minor, write to us yourself, as a parent, guardian or carer, and do not include more data about the minor than we need to put a proposal together, such as their age.' },
    ],
  },
  changes: {
    heading: 'Changes to this policy',
    blocks: [
      { p: 'If we change this policy, we publish the new version on this page with its update date. If the change affects what we use your data for, we will ask for your authorization again before applying it.' },
    ],
  },
};

const cookiesSections: Record<CookiesSectionId, CookiesSectionText> = {
  what: {
    heading: 'What cookies are',
    blocks: [
      { p: 'Cookies are small files that a website saves in your browser to remember something, such as a preference or the fact that you already proved you are a person. There are similar technologies, such as the browser\'s local storage, and here we include them whenever we talk about cookies.' },
    ],
  },
  stores: {
    heading: 'What this site stores in your browser',
    blocks: [
      {
        table: {
          head: ['Service', 'What it is for', 'Cookies or storage'],
          rows: [
            ['This site (El Guía CR)', 'Showing the pages and the contact form.', 'None. We do not set our own cookies or use advertising or marketing trackers.'],
            ['Cloudflare Turnstile', 'Telling people from bots when you use the contact form.', 'Possible technical storage, needed for the check. It only loads when you get near the form or start using it.'],
            ['Cloudflare Web Analytics', 'Counting visits in aggregate, to improve the site.', 'None, according to Cloudflare: it does not use cookies or local storage.'],
            ['Links to other sites', 'Opening WhatsApp or Instagram if you decide to write to us or follow us.', 'Only if you click. Each service applies its own cookies and policies.'],
          ],
        },
      },
      { p: 'Fonts and images are served from our own site, not from external services.' },
    ],
  },
  turnstile: {
    heading: 'Bot check (Turnstile)',
    blocks: [
      { p: 'The contact form uses Cloudflare Turnstile. It loads only when you get near the form or start using it, not when you open any page. To tell people from bots, it processes technical signals: your IP address, the TLS fingerprint of your connection, your browser\'s user agent, the site key and its origin.' },
      { p: 'According to Cloudflare, it cannot directly identify individuals from those signals, and it may use technical cookies or similar temporary storage that are strictly necessary for the check. That is why we list it above as possible technical storage.' },
      { p: 'More detail in the {turnstilePolicy} and the {cloudflareCookies}.' },
    ],
  },
  analytics: {
    heading: 'Measuring visits (Web Analytics)',
    blocks: [
      { p: 'We use Cloudflare Web Analytics to learn, in aggregate, how many people visit each page, so we can improve the site. According to Cloudflare, this tool does not use cookies, local storage or fingerprinting. The metrics we see are aggregate.' },
      { p: 'More information at {webAnalytics}.' },
    ],
  },
  links: {
    heading: 'Links to other sites',
    blocks: [
      { p: 'If you click a link to WhatsApp or Instagram, you leave our site. Those services apply their own cookies and policies, which we do not control. The same goes for the photo credit links.' },
    ],
  },
  banner: {
    heading: 'Why there is no cookie banner',
    blocks: [
      { p: 'We do not show a cookie consent banner because we use no advertising or marketing cookies, and the only thing the site could store in your browser is the technical storage of Turnstile, which Cloudflare describes as strictly necessary for the check. If that ever changes, we will first add a banner asking for your permission and update this page and the {privacy}.' },
    ],
  },
  control: {
    heading: 'How to control or delete cookies',
    blocks: [
      { p: 'You can view, block and delete cookies in your browser\'s privacy settings, and you can also set it to warn you when a site wants to store one. Your browser\'s help pages explain how.' },
      { p: 'If you have trouble sending the form, write to us at {email} or on WhatsApp.' },
    ],
  },
  contact: {
    heading: 'Contact and more information',
    blocks: [
      { p: 'Questions about this page? Write to us at {email}. To learn how we handle the data you send us through the form, read the {privacy}.' },
    ],
  },
};

const faqGroups: FaqGroupsText = {
  how: {
    heading: 'How it works',
    questions: {
      approach: { question: 'How does El Guía CR work?', answer: 'We do not start with a catalog. We start by understanding what you want to live, discover, learn or achieve. Then we design an experience that makes sense for you, coordinate providers, availability and logistics, and stay with you before, during and after.' },
      unclear: { question: 'Do I need to have everything worked out before writing to you?', answer: 'No. You do not need to have everything worked out: tell us the idea and we will start from there. We can figure out the details together.' },
      catalog: { question: 'Do you have packages or a catalog to choose from?', answer: 'There is no menu you have to pick from. Tell us who it is for, what they want to experience and how much time they have, and we will build something around you. The examples on the experiences page are not fixed packages: we combine them, change them or drop them depending on what you are after.' },
      contactPerson: { question: 'Who do I talk to during the process?', answer: 'A single point of contact: one person at El Guía who knows your plan, coordinates the experience and adjusts it if something changes, before and during the trip.' },
    },
  },
  who: {
    heading: 'Who it is for',
    questions: {
      audiences: { question: 'Who are El Guía CR experiences for?', answer: 'For travelers, locals, companies and schools and universities. What changes is the goal; the way we work is the same: listen, design and coordinate.' },
      groups: { question: 'Do you organize plans for groups of different sizes?', answer: 'Yes. We design for the real group, from a couple to a big family get-together or a work team, including differences in age, fitness and restrictions. Tell us what your group is like and we will build that in.' },
      locals: { question: 'Do you offer plans for people who live in Costa Rica?', answer: 'Yes. We design getaways, celebrations and days in the countryside for people who already live here. Many plans are a full day or half a day, and we also build getaways that last longer if you prefer.' },
      education: { question: 'Can you design a trip around a course syllabus?', answer: 'Yes, that is exactly how we work. Share the objectives and content with us and we will propose places and activities that line up. We work with schools as well as universities: the level changes the pace, the content and the care measures, and we factor that in when designing.' },
      teams: { question: 'Do you only do team building, or multi-day retreats as well?', answer: 'Both. It can be a single integration day near San José or a multi-day retreat in another destination, depending on what you need.' },
    },
  },
  contact: {
    heading: 'When you write to us',
    questions: {
      anticipation: { question: 'How far ahead should I get in touch?', answer: 'The earlier the better, since there are more options, especially in high season or with fixed dates. Even so, if your date is close, write to us and we will tell you what is possible.' },
      channels: { question: 'How can I contact you?', answer: `You can leave your inquiry in the form on the site and choose whether you would rather hear from us on WhatsApp or by email. You can also write to us directly at ${contactEmail} or on WhatsApp.` },
      reply: { question: 'How long do you take to reply?', answer: 'A person from El Guía replies within one business day.' },
      next: { question: 'What happens after I send the form?', answer: 'We reply personally to learn a little more about what you are looking for. We talk to understand the idea, the context and what you expect from the experience, and from there we put together a proposal designed for you.' },
      budget: { question: 'How is the budget set?', answer: 'It depends on the group, the dates and what the plan includes. We talk it through at the start and, after speaking with you, we send a proposal with the details so you can decide with a clear picture.' },
      logistics: { question: 'Do you take care of transport and meals?', answer: 'Yes. We coordinate transport and meals with local partners so you have one contact, and we spell it out in the proposal.' },
    },
  },
  data: {
    heading: 'Your data and cookies',
    questions: {
      dataUse: { question: 'What happens to the data I send in the form?', answer: 'We use it only to answer your inquiry, prepare a quote or an itinerary, keep a record of the conversation and of your authorization, and prevent abuse of the form. We do not sell it or use it for marketing.' },
      deleteData: { question: 'Can I ask you to delete my data?', answer: `Yes. Write to us at ${contactEmail} and tell us what you want to do: access your data, correct it or delete it. It is free and we reply within 5 business days.` },
      cookies: { question: 'Does the site use cookies?', answer: 'The site does not use advertising or marketing cookies. The form uses Cloudflare Turnstile to tell people from bots, and we count visits in aggregate with Cloudflare Web Analytics, which according to Cloudflare does not use cookies. The cookies page explains it in more detail.' },
    },
  },
};

export const en: Dictionary = {
  meta: {
    title: 'Custom Costa Rica Trips, Tours & Experiences | El Guía CR',
    description: 'Custom Costa Rica trips, tours and experiences for travelers, locals, companies and schools. Tell us what you want; a person replies within one business day.',
    // Alt text of the default share image (src/assets/rio-celeste.webp).
    imageAlt: 'Río Celeste waterfall dropping into a turquoise pool ringed by forest',
  },
  nav: {
    ariaLabel: 'Main',
    homeLabel: 'El Guía CR, home',
    links: {
      home: 'Home',
      experiences: 'Experiences',
      destinations: 'Destinations',
      transport: 'Transport & routes',
      about: 'About',
      blog: 'Blog',
      faq: 'FAQ',
    },
    cta: 'Tell us what you\'re looking for',
    languageLabel: 'Language',
    menuLabel: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    eyebrow: 'elguiacr.com · Design and coordination of experiences in Costa Rica',
    titleLead: 'Experiences designed',
    titleBefore: 'with',
    titleEmphasis: 'purpose',
    titleAfter: 'in',
    titleCountry: 'Costa Rica',
    intro: 'You tell us what you want to live, learn or achieve in Costa Rica. El Guía takes care of connecting the pieces.',
    primaryCta: 'Tell us what you\'re looking for',
    secondaryCta: 'Explore Costa Rica',
    segments: 'Travelers · Locals · Companies · Education',
  },
  manifesto: {
    eyebrow: '01 · What we do',
    statement: 'We do not start with a catalog. We start by understanding what you want to live, discover, learn or achieve.',
    secondBefore: 'Then we connect',
    secondEmphasis: 'knowledge, places and people',
    secondAfter: 'to shape an experience that makes sense for you.',
    pillars: {
      knowledge: { title: 'Local knowledge', text: 'Destinations, seasons and logistics, so we know what works and when.' },
      allies: { title: 'Network of allies', text: 'People, projects and businesses we know and trust.' },
      judgment: { title: 'Judgment', text: 'Every recommendation has a reason behind it and is chosen for what suits you best.' },
      contact: { title: 'A single point of contact', text: 'We coordinate the experience and stay with you before, during and after.' },
    },
  },
  audiences: {
    eyebrow: '02 · Who it is for',
    title: 'One brand, four ways in.',
    intro: 'What changes is the goal. The way we work is the same: listen, design, coordinate.',
    learnMore: 'Learn more',
    items: {
      travelers: { segment: 'Travelers', word: 'Live', description: 'Trips designed around your interests, your pace and the way you want to get to know Costa Rica.', cta: 'Design my trip', alt: 'A cook in an orange apron folding a tortilla on a large griddle' },
      locals: { segment: 'Locals', word: 'Discover', description: 'Getaways, celebrations and experiences to rediscover Costa Rica with fresh eyes.', cta: 'I want something different', alt: 'Someone swinging on a rope into a forest river while others swim nearby' },
      companies: { segment: 'Companies', word: 'Connect', description: 'Team building, well-being and connection experiences designed around each team\'s goals.', cta: 'Let\'s talk about your team', alt: 'A group pulling together in a team game on a grassy field on a sunny day' },
      education: { segment: 'Education', word: 'Learn', description: 'Field trips designed around the course, the degree and the learning objectives.', cta: 'Plan a field trip', alt: 'A guide in a sun hat pointing up at the treetops on a rocky trail, with two hikers behind him' },
    },
  },
  how: {
    eyebrow: '03 · How it works',
    title: 'You do not need to have it all figured out. That is what we are here for.',
    steps: {
      understand: { title: 'We understand', text: 'You tell us what you are looking for, who it is for and what you have in mind. We ask the right questions to understand it better.' },
      design: { title: 'We design', text: 'We select places, experiences and options that truly make sense for what you want to live or achieve.' },
      coordinate: { title: 'We coordinate', text: 'We organize providers, availability and logistics so everything works as a single experience.' },
      accompany: { title: 'We accompany', text: 'Before, during and after, we are available to guide you and help whenever you need it.' },
    },
  },
  founder: {
    title: 'The person behind El Guía',
    photoAlt: 'Bernald Ramirez at a lookout in front of a waterfall, surrounded by forest',
    role: 'Founder · El Guía',
    name: 'Bernald Ramirez',
    bio1: 'Bernald is the founder of El Guía CR and the person behind the design of every experience. His background in tourism, his work as a guide and his love of nature have led him to know Costa Rica not only as a destination, but through its people, stories, communities and ways of living it.',
    bio2: 'El Guía CR was born from that curiosity to discover, learn and connect: to listen to what each person or group needs and find the best way to turn it into a meaningful experience.',
    quote: 'For Bernald, getting to know Costa Rica is never just about arriving at a place, but about understanding what lies behind it and who is worth sharing it with.',
    cta: 'Talk to Bernald',
  },
  destinations: {
    listLabel: 'Destinations on the map',
    photoCredit: 'Photo',
    pick: "I'm interested",
  },
  map: {
    ariaLabel: 'Map of Costa Rica by province with featured destinations',
    lakeArenal: 'Lake Arenal',
    nicaragua: 'NICARAGUA',
    caribbean: 'CARIBBEAN SEA',
    pacific: 'PACIFIC OCEAN',
    panama: 'PANAMA',
  },
  spots: {
    rincon: { short: 'Rincón de la Vieja', name: 'Rincón de la Vieja', region: 'Guanacaste', desc: 'An active volcano with fumaroles, mud pots and tropical dry forest. A great setting for hikes and for learning geology in the field.', photoNote: '[PHOTO: a group walking beside the mud pots with a naturalist guide.]' },
    celeste: { short: 'Río Celeste', name: 'Río Celeste · Tenorio', region: 'Guanacaste · Alajuela', desc: 'The turquoise river inside Tenorio Volcano National Park. A rainforest trail with a waterfall and the springs where the river is born.', alt: 'Río Celeste waterfall falling into a turquoise pool surrounded by forest', photoNote: '[PHOTO: a person watching the waterfall from the lookout, seen from behind.]' },
    arenal: { short: 'La Fortuna · Arenal', name: 'La Fortuna and Arenal Volcano', region: 'Northern Zone · Alajuela', desc: 'Volcano, hot springs, rivers, lake and farms. An easy base to combine activity, rest and local culture within a few kilometers.', alt: 'Arenal Volcano under a clear sky with flowers in the foreground', photoNote: '[PHOTO: a family on a farm in the northern zone with Arenal in the background.]' },
    monteverde: { short: 'Monteverde', name: 'Monteverde', region: 'Puntarenas · Tilarán Mountain Range', desc: 'Cloud forest, hanging bridges and a community with a long tradition in conservation and research.', alt: 'Person walking across a hanging bridge in the Monteverde cloud forest', photoNote: '[PHOTO: students on a hanging bridge in the mist.]' },
    tortuguero: { short: 'Tortuguero', name: 'Tortuguero', region: 'Northern Caribbean · Limón', desc: 'Canals, Caribbean jungle and sea turtle nesting in season. You arrive by boat or small plane, so logistics matter.', alt: 'Newly hatched turtles making their way across dark sand', photoNote: '[PHOTO: a boat cruising a canal at dawn.]' },
    tamarindo: { short: 'Guanacaste Coast', name: 'Guanacaste Coast', region: 'Northern Pacific', desc: 'Beaches, sunsets and a pronounced dry season. Works for rest, for surfing and for team retreats.', photoNote: '[PHOTO: a team in an outdoor work session facing the sea.]' },
    santateresa: { short: 'Santa Teresa', name: 'Santa Teresa · Nicoya Peninsula', region: 'Puntarenas', desc: 'A coastal town at the southern end of the peninsula, with surf, a slow pace and dirt roads between beaches.', alt: 'Surfers carrying their boards into the sea from a pebble beach lined with palm trees', photoNote: '[PHOTO: a surfboard leaning on a fence, afternoon light.]' },
    sanjose: { short: 'San José', name: 'San José and the Central Valley', region: 'Central Valley', desc: 'Museums, markets and coffee farms less than an hour away. The gateway for most visitors and a natural home base for companies and institutions.', alt: 'Ripe red and green coffee cherries on a coffee branch', photoNote: '[PHOTO: a group touring a coffee mill with its producer.]' },
    manuel: { short: 'Manuel Antonio', name: 'Manuel Antonio', region: 'Central Pacific · Quepos', desc: 'A small national park where the forest meets the beach. One of the most visited in the country: choosing the right time and guide makes all the difference.', alt: 'Aerial view of a forested headland between two turquoise bays', photoNote: '[PHOTO: a guide showing wildlife through a spotting scope to a family.]' },
    uvita: { short: 'Uvita · Marino Ballena', name: 'Uvita · Marino Ballena National Park', region: 'Southern Pacific', desc: 'Beaches, coastal jungle and marine life, with humpback whale watching seasons.', photoNote: '[PHOTO: a small boat with a marine biologist explaining to a group.]' },
    osa: { short: 'Osa · Corcovado', name: 'Osa Peninsula · Corcovado', region: 'Southern Pacific · Puntarenas', desc: 'One of the most biodiverse places in Costa Rica. It is remote, takes planning and is worth exploring with a good guide.', alt: 'Dark-sand beach with boulders and palm trees at the edge of the rainforest in Corcovado National Park', photoNote: '[PHOTO: a group crossing a river on the peninsula with their guide.]' },
    puertoviejo: { short: 'South Caribbean', name: 'Puerto Viejo · South Caribbean', region: 'Limón', desc: 'Afro-Caribbean culture, its own cuisine, cacao and the beaches of the southern Caribbean.', photoNote: '[PHOTO: a cook preparing rice and beans with coconut for a group.]' },
  },
  stories: {
    eyebrow: '04 · Stories',
    title: 'Better to see it than to tell it.',
    intro: 'Keep scrolling: the stories move sideways. Real experiences, allies and behind the scenes.',
    regionLabel: 'Video stories',
    closingTitle: 'Is the next story yours?',
    closingCta: 'Tell us what you\'re looking for',
    items: {
      criteria: { note: '[REEL 9:16: Bernald on camera explaining when it is worth going to Río Celeste and when it is not.]', kicker: 'El Guía tells you', title: 'Judgment, not a catalog' },
      team: { alt: 'Four friends with backpacks laughing during a hike among rocky peaks', kicker: 'Companies', title: 'A team that gets to know each other outside the office' },
      network: { note: '[REEL 9:16: visit to an allied farm in La Fortuna; who they are, what they offer, who it works for.]', kicker: 'El Guía discovers', title: 'The network, up close' },
      objective: { note: '[REEL 9:16: from need to solution. An academic field trip, from the professor\'s brief to the day in the field.]', kicker: 'How it was designed', title: 'From objective to experience' },
      classroom: { alt: 'A group of young people resting on logs in the middle of a forest', kicker: 'Education', title: 'Learning also happens outside the classroom' },
      experience: { note: '[REEL 9:16: almost no dialogue. Sunrise on the river, coffee, laughter, water. Ambient sound only.]', kicker: 'Live it', title: 'Just the experience' },
    },
  },
  values: {
    photoAlt: 'A farmer pointing across his pastures, with hay bales in the field',
    eyebrow: '05 · What matters to us',
    headline: 'We do not recommend something just because it is popular.',
    text: 'We look for places, people and experiences that are truly worth getting to know. We want to know what they do well, who they work for and when it makes sense to recommend them.',
    closingLead: 'Get to know it before recommending it.',
    closingText: 'That is an important part of how El Guía works.',
  },
  contact: {
    eyebrow: '06 · Let\'s get started',
    title: 'Tell us what you\'re looking for.',
    intro: 'You do not need to have everything worked out. Tell us the idea and we will start from there. We can figure out the details together.',
    steps: [
      { lead: 'We get in touch.', rest: 'We reply personally to learn a little more about what you are looking for.' },
      { lead: 'We talk.', rest: 'We understand the idea, the context and what you expect from the experience.' },
      { lead: 'We shape it.', rest: 'From there, we can put together a proposal designed for you.' },
    ],
    whoFor: 'Who is this experience for?',
    otherOption: 'Other',
    nameLabel: 'What\'s your name?',
    namePlaceholder: 'Your name',
    methodLabel: 'How would you like us to contact you?',
    methods: {
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    phoneLabel: 'Phone number',
    emailLabel: 'Email',
    whatLabel: 'What do you want to live, discover, learn or achieve?',
    whatHelp: 'Tell us your idea in your own words, even if you do not have all the details yet. If something matters, like ages or a special occasion, include it here.',
    whatSensitive: 'Please do not include sensitive data, such as health conditions, allergies or religion. If we need any for your safety, we will ask later, only what is strictly necessary and through direct contact.',
    whatPlaceholder: 'E.g.: celebrate the company\'s 15th anniversary with something other than another dinner; a biology field trip for 30 students; our first trip to Costa Rica, no rush.',
    detailsTitle: 'Can you give us a bit more context?',
    detailsHint: 'Everything here is optional, but it helps us come back with a better first proposal.',
    interestsLabel: 'What kind of experiences interest you?',
    interestsHint: 'You can pick more than one.',
    interests: {
      nature: 'Nature and wildlife',
      adventure: 'Adventure',
      culture: 'Culture and communities',
      food: 'Food and cooking',
      wellness: 'Wellness and relaxation',
      rural: 'Rural and farm experiences',
      learning: 'Learning and education',
      celebrations: 'Celebrations and special occasions',
    },
    peopleLabel: 'How many people would take part?',
    peoplePlaceholder: 'A rough number is fine',
    timingLabel: 'When would you like to go?',
    timings: {
      fixed: 'I have a set date',
      approximate: 'I have a rough date',
      flexible: 'My dates are flexible',
      unknown: 'I don\'t know yet',
    },
    dateLabel: 'Date or approximate period',
    datePlaceholder: 'E.g.: March 2027',
    zoneLabel: 'Is there a part of Costa Rica you have in mind?',
    zones: {
      yes: 'Yes',
      open: 'I\'m open to suggestions',
      unknown: 'I don\'t know yet',
    },
    zoneNameLabel: 'Which one?',
    zoneNamePlaceholder: 'La Fortuna, Monteverde, Guanacaste...',
    errorChoice: 'Choose an option.',
    errorField: 'Fill in this field.',
    errorEmail: 'Enter a valid email address.',
    errorSend: 'We could not send your message. Try again or write to us directly:',
    errorConsent: 'Tick this box to send your inquiry.',
    errorCaptcha: 'We could not verify that you are a person. Try again in a few seconds.',
    sending: 'Sending…',
    submit: 'I want El Guía to contact me',
    consentLead: 'I have read the',
    consentLink: 'privacy policy',
    consentRest: 'and I authorize El Guía CR to use my details to answer this inquiry, and to have them processed by providers that may be outside Costa Rica.',
    sentTitle: 'Done. We are on it.',
    sentText: 'We received your message. Someone from El Guía will write to you to talk. In the meantime, you do not need to do anything else.',
    sentReset: 'Send another inquiry',
  },
  footer: {
    tagline: 'Experiences designed with purpose.',
    exploreHeading: 'Explore',
    legalHeading: 'Legal',
    legalLinks: {
      privacy: 'Privacy',
      terms: 'Terms & conditions',
      cookies: 'Cookies',
      cancellations: 'Cancellations',
    },
    servicesHeading: 'Services',
    servicesLinks: {
      customTrips: 'Custom trips',
      localExperiences: 'Experiences for locals',
      teamBuilding: 'Team building',
      educationalTrips: 'Educational trips',
    },
    contactHeading: 'Contact',
    instagramLabel: 'Instagram @elguia.cr',
    madeIn: 'Made in Costa Rica',
  },
  act: {
    title: 'Your next experience starts with a conversation.',
    text: 'Tell us what you\'re looking for. A real person at El Guía will get back to you.',
    whatsappCta: 'Message us on WhatsApp',
    whatsappMessage: 'Hi, I\'m interested in an experience with El Guía CR. Can you help me?',
  },
  experiencesPage: {
    eyebrow: 'Experiences',
    tailoredTitle: 'What you picture, designed around you.',
    tailoredText: 'There is no menu you have to pick from. Tell us who it is for, what they want to experience and how much time they have, and we will build something around you. The ideas below are only a starting point.',
    tailoredCta: 'Let\'s design something together',
    examplesEyebrow: 'Ideas to get you started',
    examplesTitle: 'Examples of what we can design.',
    examplesIntro: 'These are not fixed packages: we combine them, change them or drop them depending on what you are after.',
    filterLabel: 'Filter by category',
    filterAll: 'All',
    durationLabel: 'Approx. duration',
    forLabel: 'For',
    photoPending: 'Photo pending',
    audiencesEyebrow: 'Depending on who is going',
    audiencesTitle: 'Guides for every kind of group.',
    audiencesIntro: 'If you already know who you are in this story, these pages explain how we work with each group.',
  },
  landing: {
    howHeading: 'How we work',
    faqHeading: 'Frequently asked questions',
    allExperiences: 'See all experiences',
  },
  placeholder: {
    eyebrow: 'Coming soon',
    homeLink: 'Back to home',
    legalNote: 'The final legal text is pending review.',
  },
  notFound: {
    title: 'Page not found | El Guía CR',
    description: 'The page you are looking for does not exist or has moved.',
    eyebrow: 'Error 404',
    heading: 'This trail leads nowhere',
    intro: 'The page you are looking for does not exist or has moved. Head back home or write to us and we will help you find what you need.',
  },
  privacy: {
    title: 'Privacy Policy & Personal Data | El Guía CR',
    description: 'What personal data El Guía CR receives when you write to us, what we use it for, who processes it, how long we keep it and how to use your rights (Law 8968).',
    heading: 'Privacy policy',
    intro: 'Here we explain what data we receive from you when you write to us from elguiacr.com, what we use it for and how you can exercise your rights. We follow Costa Rica\'s Law 8968 on the protection of individuals in the processing of personal data.',
    updatedLabel: 'Last updated',
    tocLabel: 'On this page',
    controllerLabels: { brand: 'Trade name', legalName: 'Legal name', idNumber: 'ID number', address: 'Address', email: 'Email' },
    links: { cookies: 'cookies page' },
    sections: privacySections,
  },
  cookies: {
    title: 'Cookie Policy: What This Site Stores | El Guía CR',
    description: 'Which cookies and storage elguiacr.com uses: Cloudflare Turnstile on the contact form, Cloudflare Web Analytics to count visits, and how to control them.',
    heading: 'Cookie policy',
    intro: 'Here we explain what elguiacr.com stores in your browser, what for and how you can control it. In short: the site does not set its own cookies or advertising cookies.',
    updatedLabel: 'Last updated',
    tocLabel: 'On this page',
    links: {
      privacy: 'privacy policy',
      turnstilePolicy: 'Turnstile privacy policy',
      cloudflareCookies: 'Cloudflare cookie policy',
      webAnalytics: 'Cloudflare Web Analytics',
    },
    sections: cookiesSections,
  },
  faq: {
    title: 'FAQ: How El Guía CR Works | El Guía CR',
    description: 'Answers about how El Guía CR works: who the experiences are for, what happens when you write to us, how the budget is set and how we look after your data.',
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    intro: 'Here are the most common questions about how we work. If yours is not here, tell us and we will answer personally.',
    moreLead: 'More about your data:',
    moreLinks: { privacy: 'Privacy policy', cookies: 'Cookie policy' },
    ctaTitle: 'Still have a question?',
    ctaText: 'Tell us what you are looking for and a person at El Guía will reply.',
    groups: faqGroups,
  },
  about: {
    title: 'About El Guía CR: Who We Are and How We Work | El Guía CR',
    description: 'Meet Bernald Ramirez, founder of El Guía CR, and how we design experiences in Costa Rica with local knowledge, allies and a single point of contact.',
    heading: 'Experiences designed with purpose in Costa Rica',
  },
  pages: {
    experiences: {
      title: 'Costa Rica Tours & Experiences, Tailor-Made | El Guía CR',
      description: 'Ideas for Costa Rica tours and experiences: Tortuguero canals, Arenal, Monteverde, coffee farms and local cooking, all tailored to your group, pace and budget.',
      heading: 'Costa Rica experiences designed around you',
      intro: 'Every experience we build starts with a conversation with you, not a catalog. You can ask for something completely tailored; the examples on this page are inspiration, not fixed packages.',
    },
    destinations: {
      title: 'Destinations · El Guía CR',
      description: 'Costa Rica destinations we know first-hand: what each one offers and who it suits.',
      heading: 'Destinations',
      intro: 'Soon you will find a guide to each destination here: what it offers, the best time to go and who it suits. Meanwhile, you can explore the map on the home page or get in touch.',
    },
    transport: {
      title: 'Transport & routes · El Guía CR',
      description: 'How to get around Costa Rica: travel times, routes and transport options between destinations.',
      heading: 'Transport & routes',
      intro: 'We are building a practical guide to getting around Costa Rica: realistic travel times, routes and transport options between destinations. If you need help with logistics, tell us and we will coordinate it with you.',
    },
    blog: {
      title: 'Blog / Costa Rica Guide · El Guía CR',
      description: 'Articles and practical guides to get to know Costa Rica with good judgment.',
      heading: 'Blog / Costa Rica Guide',
      intro: 'There are no articles yet. We are preparing practical guides to help you get to know Costa Rica. If there is something you would like to know, write to us and we will take it into account.',
    },
    terms: {
      title: 'Terms & conditions · El Guía CR',
      description: 'El Guía CR terms and conditions.',
      heading: 'Terms & conditions',
      intro: 'This is where we will publish the terms for booking and enjoying our experiences.',
    },
    cancellations: {
      title: 'Cancellations · El Guía CR',
      description: 'El Guía CR cancellation policy.',
      heading: 'Cancellations',
      intro: 'This is where we will publish the terms for changing or cancelling our experiences.',
    },
  },
};
