export const brandMedia = {
  logo: '/images/logo.svg',
  hero: {
    image: '/images/hero_building.png',
  },
  about: {
    collage1: '/images/about_collage_1.png',
    collage2: '/images/about_collage_2.png',
  },
  projects: {
    zemenBank: '/images/project_zemen.png',
    stadium: '/images/project_stadium.png',
    memorial: '/images/project_memorial.png',
    hilton: '/images/project_hilton.png',
  },
  industries: {
    commercial: '/images/ind_commercial.png',
    industrial: '/images/ind_industrial.png',
    residential: '/images/ind_residential.png',
    institutional: '/images/ind_institutional.png',
    hospitality: '/images/ind_hospitality.png',
    infrastructure: '/images/ind_infrastructure.png',
  }
} as const

export const brand = {
  name: 'Kenmos Structural Engineering',
  shortName: 'Kenmos Engineering',
  founderName: 'Kenmos Tesfaye',
  founderTitle: 'Founder & General Manager',
  tagline: 'Structural Excellence. Lasting Impact.',
  signatureLine: 'Delivering innovative, safe, and cost-optimized structural engineering solutions.',
  logoPath: brandMedia.logo,
  phone: '+251 911 526 566',
  phoneHref: 'tel:+251911526566',
  location: 'Enat Building, 7th Floor, Piazza, Addis Ababa, Ethiopia',
  hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM',
  email: 'contact@kenmosengineering.com',
  heroRotatingTexts: [
    'Ethiopian structural engineering firm established in 2009',
    'Specializes in structural design and complex steel structures',
    'Over 800 successful projects handled with cost optimization',
    'Ensuring structural safety, precision, and building durability',
  ],
  heroStats: [
    { value: '15+', label: 'Years of Experience', count: 15 },
    { value: '800+', label: 'Projects Completed', count: 800 },
    { value: '20+', label: 'Expert Engineers', count: 20 },
    { value: '1B+', label: 'Birr Project Value Handled', count: 1 },
  ],
} as const

export const aboutContent = {
  subtitle: 'ABOUT KENMOS',
  title: 'Building the Future with Precision & Integrity',
  paragraphs: [
    'Kenmos Structural Engineering was established in January 2009, with the aim to provide the best design and affiliated services.',
    'Cost and Value optimization has been one of the pillars of our design philosophy.',
    'Our founder and lead engineer brings over 20 years of experience in the design and supervision of structural works, working on more than 800 projects ranging from 800,000.00 Birr to well over a billion birr.',
  ]
}

export const services = [
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'Innovative, safe and cost-effective structural designs for all types of buildings.',
    icon: 'Building2',
  },
  {
    id: 'supervision',
    title: 'Construction Supervision',
    description: 'Ensuring quality, safety and compliance at every stage of construction.',
    icon: 'ShieldCheck',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project management delivering on time and within budget.',
    icon: 'Briefcase',
  },
  {
    id: 'assessment-retrofitting',
    title: 'Structural Assessment & Retrofitting',
    description: 'Evaluating and strengthening existing structures for safety and durability.',
    icon: 'Activity',
  },
  {
    id: 'tender-boq',
    title: 'Tender & BOQ Preparation',
    description: 'Accurate estimation and documentation for successful project delivery.',
    icon: 'FileText',
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    description: 'Expert advice and technical solutions tailored to your project needs.',
    icon: 'Users',
  },
] as const

export const industries = [
  {
    id: 'commercial',
    title: 'Commercial Developments',
    description: 'Structural designs for high-rise towers, malls, offices, and mixed-use commercial properties.',
    image: brandMedia.industries.commercial,
  },
  {
    id: 'industrial',
    title: 'Industrial & Steel Structures',
    description: 'Heavy industrial structures, warehouses, factory sheds, and specialized steel construction designs.',
    image: brandMedia.industries.industrial,
  },
  {
    id: 'residential',
    title: 'Residential Complexes',
    description: 'Multi-family residential apartments, luxury villas, and real estate housing developments.',
    image: brandMedia.industries.residential,
  },
  {
    id: 'institutional',
    title: 'Institutional Projects',
    description: 'Structural design for government buildings, universities, stadiums, and public spaces.',
    image: brandMedia.industries.institutional,
  },
  {
    id: 'hospitality',
    title: 'Hospitality Projects',
    description: 'Luxury hotel designs, resort structures, and recreational facilities combining luxury with safety.',
    image: brandMedia.industries.hospitality,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Specialized Works',
    description: 'Bridges, retaining structures, sports complexes, and specialized steel/concrete structures.',
    image: brandMedia.industries.infrastructure,
  },
] as const

export const projects = [
  {
    id: 'parliament-building',
    title: 'Parliament Building',
    category: 'Institutional',
    description:
      'Owner: House of People’s Representatives\nLead Consultant: Addis Mebratu Consult + 5-7\nStatus: Under Preliminary Design',
    image: '/images/project_parliament.jpg',
  },
  {
    id: 'ethiopian-air-force-sport-center',
    title: 'Ethiopian Air Force Sport Center',
    category: 'Institutional',
    description:
      'Structural engineering services provided by Kenmos Engineering for the Ethiopian Air Force Sport Center.',
    image: '/images/project_airforce.jpg',
  },
  {
    id: 'enat-building',
    title: 'Enat Building (Office Building)',
    category: 'Commercial',
    description:
      'Architect: Million Samuel\nStructural: Kenmos Engineering\nStatus: Completed',
    image: '/images/project_enat.jpg',
  },
  {
    id: 'ellelie-hotel',
    title: 'Ellelie Hotel',
    category: 'Hospitality',
    description:
      'Lead Consultant: Tilahun Bekele\nStructural: Kenmos Engineering',
    image: '/images/project_ellelie.jpg',
  },
  {
    id: 'eliyana-mall-hotel',
    title: 'Eliyana Mall & Hotel',
    category: 'Hospitality',
    description:
      'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
    image: '/images/project_eliyana.jpg',
  },
  {
  id: 'dh-geda-tower',
  title: 'DH Geda Tower',
  category: 'Commercial',
  description:
    'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
  image: '/images/project_dh_geda.jpg',
},
{
  id: 'lex-plaza',
  title: 'Lex Plaza',
  category: 'Commercial',
  description:
    'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
  image: '/images/project_lex_plaza.jpg',
},
{
  id: 'nigist-tower',
  title: 'Nigist Tower',
  category: 'Commercial',
  description:
    'Lead Consultant: Fasil Georgis\nStructural: Kenmos Engineering',
  image: '/images/project_nigist_tower.jpg',
},
{
  id: 'medhanialem-mall',
  title: 'Medhanialem Mall',
  category: 'Commercial',
  description:
    'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
  image: '/images/project_medhanialem_mall.jpg',
},
{
  id: 'capital-hotel',
  title: 'Capital Hotel',
  category: 'Hospitality',
  description:
    'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
  image: '/images/project_capital_hotel.jpg',
},
{
  id: 'athlet-birhane-adere-mall',
  title: 'Athlet Birhane Adere Mall',
  category: 'Commercial',
  description:
    'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
  image: '/images/project_athlet_birhane_adere.jpg',
}, 
{
  id: 'four-points-sheraton',
  title: 'Four Points by Sheraton Hotel (31 Story)',
  category: 'Hospitality',
  description:
    'Lead Consultant: Jdaw Consult\nStructural: Kenmos Engineering',
  image: '/images/project_four_points_sheraton.jpg',
},
{
  id: 'ema-office-building',
  title: 'EMA Office Building (25 Story)',
  category: 'Commercial',
  description:
    'Lead Consultant: Geretta Consult\nStructural: Kenmos Engineering',
  image: '/images/project_ema_office.jpg',
},
{
  id: 'marriott-hotel-addis',
  title: 'Marriott Hotel, Addis Ababa',
  category: 'Hospitality',
  description:
    'Structural: Kenmos Engineering',
  image: '/images/project_marriott_addis.jpg',
},
{
  id: 'emaysru-hotel',
  title: 'Emaysru Hotel, Mekele (25 Story)',
  category: 'Hospitality',
  description:
    'Structural: Kenmos Engineering',
  image: '/images/project_emaysru_hotel.jpg',
},
{
  id: 'ethiopian-national-theatre',
  title: 'Ethiopian National Theatre',
  category: 'Institutional',
  description:
    'Design Completed\nLead Consultant: Addis Mebratu',
  image: '/images/project_national_theatre.jpg',
},
{
  id: 'jimma-university-stadium',
  title: 'Jimma University Stadium (40,000 Seats)',
  category: 'Institutional',
  description:
    'Under Construction\nStructural: Kenmos Engineering',
  image: '/images/project_jimma_stadium.jpg',
},
{
  id: 'adama-university-stadium',
  title: 'Adama University Stadium (20,000 Seats)',
  category: 'Institutional',
  description:
    'Construction Completed\nStructural: Kenmos Engineering',
  image: '/images/project_adama_stadium.jpg',
},
{
  id: 'harar-stadium',
  title: 'Harar Stadium (55,000 Seats)',
  category: 'Institutional',
  description:
    'Lead Consultant: Shigez Consult\nStructural: Kenmos Engineering',
  image: '/images/project_harar_stadium.jpg',
},
{
  id: 'nib-bank',
  title: 'NIB Bank',
  category: 'Commercial',
  description:
    'Under Construction\nStructural: Kenmos Engineering',
  image: '/images/project_nib_bank.jpg',
},
{
  id: 'zemen-bank',
  title: 'Zemen Bank',
  category: 'Commercial',
  description:
    'Under Construction\nLead Consultant: Jdaw Consult\nStructural: Kenmos Engineering',
  image: '/images/project_zemen_bank.jpg',
}, 
{
  id: 'dire-dawa-stadium',
  title: 'Dire Dawa Stadium',
  category: 'Institutional',
  description:
    'Lead Consultant: ETG\nStructural: Kenmos Engineering',
  image: '/images/project_dire_dawa_stadium.jpg',
},
{
  id: 'zefmesh',
  title: 'Zefmesh',
  category: 'Commercial',
  description:
    'Lead Consultant: Addis Mebratu\nStructural: Kenmos Engineering',
  image: '/images/project_zefmesh.jpg',
},
{
  id: 'eepco',
  title: 'EEPCO',
  category: 'Infrastructure',
  description:
    'Lead Consultant: MU Engineering PLC\nStructural: Kenmos Engineering',
  image: '/images/project_eepco.jpg',
},
{
  id: 'orda',
  title: 'ORDA Office Building (25 Story)',
  category: 'Commercial',
  description:
    'Lead Consultant: Geretta Consult\nStructural: Kenmos Engineering',
  image: '/images/project_orda.jpg',
},
{
  id: 'hilton-under-design',
  title: 'Hilton Hotel',
  category: 'Hospitality',
  description:
    'Status: Under Design\nStructural: Kenmos Engineering',
  image: '/images/project_hilton_under_design.jpg',
},
{
  id: 'mekele-hotel',
  title: 'Mekele Hotel (28 Story)',
  category: 'Hospitality',
  description:
    'Lead Consultant: Jdaw Consult\nStructural: Kenmos Engineering',
  image: '/images/project_mekele_hotel.jpg',
},
{
  id: 'mixed-use-35',
  title: 'Mixed Use Building (5B + G + 35)',
  category: 'Commercial',
  description:
    'Owner: NHO Real Estate\nArchitect: Italian Company',
  image: '/images/project_mixed_use_35.jpg',
},
{
  id: 'oic-headquarters',
  title: 'OIC Headquarters (4B + G + 40)',
  category: 'Commercial',
  description:
    'Lead Consultant: Zeleke Belay',
  image: '/images/project_oic_headquarters.jpg',
},
{
  id: 'hosea-luxury-apartment',
  title: 'HOSEA Luxury Apartment (5B + G + 25)',
  category: 'Residential',
  description:
    'Client: Hosea Trading House PLC\nContractor: Bamacon Engineering PLC\nStatus: Under Construction',
  image: '/images/project_hosea_apartment.jpg',
},
{
  id: 'manson-arada-luxury-mall',
  title: 'MANSON Arada Luxury Mall',
  category: 'Commercial',
  description:
    'Client: MWS Trading PLC\nContractor: China Jiangsu International Economic & Technical Corporation Group Ltd',
  image: '/images/project_manson_arada.jpg',
},
] 
export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We meet with clients and architects to define project requirements, budget, constraints, and timeline.',
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    description:
      'We use advanced engineering software to analyze and design safe structural systems.',
  },
  {
    step: '03',
    title: 'Value Engineering',
    description:
      'We optimize materials and costs while maintaining safety and quality.',
  },
  {
    step: '04',
    title: 'Construction Supervision',
    description:
      'Our engineers monitor construction quality and ensure compliance with the design.',
  },
] as const 
export const teamMembers = [
  {
    name: 'Kenmos Tesfaye',
    role: 'Founder & General Manager',
    bio: 'Leads the structural consultancy team with over 20 years of experience in structural design and supervision.',
    image: '/images/team_kenmos.png',
  },
  {
    name: 'Senior Structural Engineer',
    role: 'Structural Engineer',
    bio: 'Experienced in structural analysis, design, and engineering solutions.',
    image: '/images/team_engineer.png',
  },
  {
    name: 'CAD Technician Team',
    role: 'CAD Technicians',
    bio: 'Specialized in technical drawings and structural documentation.',
    image: '/images/team_cad.png',
  },
] as const 
export const testimonials = [
  {
    quote:
      'Kenmos Engineering delivered excellent structural solutions with high quality and professionalism.',
    name: 'Project Client',
    role: 'Building Developer',
    rating: 5,
  },
  {
    quote:
      'Their engineering team provided reliable designs and effective project support.',
    name: 'Architect Partner',
    role: 'Design Consultant',
    rating: 5,
  },
  {
    quote:
      'Kenmos demonstrated strong technical knowledge and commitment to safety.',
    name: 'Construction Partner',
    role: 'Contractor',
    rating: 5,
  },
] as const