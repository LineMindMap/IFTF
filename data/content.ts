export const navigation = [ ['About','about'],['What We Do','programs'],['Where We Work','where-we-work'],['Partners','partners'],['Publications','publications'],['Get Involved','get-involved'] ];
export const aboutMenu: { title: string; slug: string; external?: true; url?: string }[] = [
  { title: 'About IFTF', slug: 'about' },
  { title: 'Vision and Mission', slug: 'vision-and-mission' },
  { title: 'Leadership & Governance', slug: 'leadership-governance' },
  { title: 'History', slug: 'founders-story' },
  { title: 'Publications', slug: 'publications' },
  { title: 'Foundation’s Identity', slug: 'foundation-identity' },
  { title: 'Policies', slug: 'policies' },
  { title: 'Foundation Today', slug: 'foundation-today' },
  { title: 'Sustainability', slug: 'sustainability', external: true },
  { title: 'President’s Office', slug: 'presidents-office', external: true },
  { title: 'Chairman’s Office', slug: 'chairmans-office', external: true },
  { title: 'All Departments A to Z', slug: 'departments' },
];

export const routes = [...new Set([...aboutMenu.map(item => item.slug), 'programs','where-we-work','partners','get-involved','news','contact','login','verify','collaborate','volunteer','careers','donate','privacy','terms','accessibility','transparency'])];
export const liveRoutes = ['programs', 'where-we-work', 'contact'];
export const routeTitles: Record<string, string> = {
  programs: 'What We Do', 'where-we-work': 'Where We Work', 'get-involved': 'Get Involved',
  verify: 'Verify a Letter', collaborate: 'Propose a Collaboration',
  ...Object.fromEntries(aboutMenu.map(({slug, title}) => [slug, title])),
};
export const titleFor = (slug: string) => routeTitles[slug] ?? slug[0].toUpperCase() + slug.slice(1);

// Add future features here when they are deferred, then remove them when shipped.
export const deferredWork = [
  { title: 'Interactive country map', detail: 'The country directory is available. The interactive map is planned.' },
  { title: 'Annual report reader', detail: 'Add reports and a reader when publication files are ready.' },
  { title: 'Newsletter signup', detail: 'Connect a subscription service and add the signup form.' },
  { title: 'Content management portal', detail: 'Add editorial tools for maintaining website content.' },
];
export const countries = [
  { name: 'Pakistan', id: 'pakistan' },
  { name: 'Indonesia', id: 'indonesia' },
];

export const office = {
  street: 'Jl. Kaluirang 14,5',
  city: 'Yogyakarta, Indonesia',
  postalCode: '55584',
  phone: '+62 (813) 77012611',
  fax: '+62 (813) 77012611',
  telephoneHref: 'tel:+6281377012611',
  email: 'Info@internationalftf.org',
};

export const focusAreas = [
  { id: 'education', title: 'Education', text: 'Help people build knowledge and skills through learning opportunities that reflect local needs.' },
  { id: 'community-prosperity', title: 'Community Prosperity', text: 'Support communities in setting their own priorities and building more secure livelihoods.' },
];
