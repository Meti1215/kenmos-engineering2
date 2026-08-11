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
    commercial: '/images/ind_commercial.jpg',
    industrial: '/images/ind_industrial.jpg',
    residential: '/images/ind_residential.jpg',
    institutional: '/images/ind_institutional.jpg',
    hospitality: '/images/ind_hospitality.jpg',
    infrastructure: '/images/ind_infrastructure.jpg',
  }
} as const

export const brand = {
  name: 'Kenmos Structural Engineering',
  shortName: 'Kenmos Engineering',
  founderName: 'Kenmos Tesfaye',
  founderTitle: 'Founder & General Manager',
  tagline: 'Precision in Structure. Confidence in Delivery.',
  signatureLine: 'Disciplined structural engineering services delivered with technical precision and long-term performance in mind.',
  logoPath: brandMedia.logo,
  phone: '+251 911 526 566',
  phoneHref: 'tel:+251911526566',
  location: 'Enat Building, 7th Floor, Piazza, Addis Ababa, Ethiopia',
  hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM',
  email: 'contact@kenmosengineering.com',
  heroRotatingTexts: [
    'Structural engineering practice founded in 2009.',
    'Specialized in reinforced concrete and structural steel design.',
    'Technical oversight on more than 800 completed projects.',
    'Delivered to ASCE, ACI, Eurocode, and Ethiopian code standards.',
  ],
  heroStats: [
    { value: '15+', label: 'Years of Practice', count: 15 },
    { value: '800+', label: 'Projects Delivered', count: 800 },
    { value: '20+', label: 'Qualified Engineers', count: 20 },
    { value: '1B+', label: 'Birr Project Value', count: 1 },
  ],
} as const

export const aboutContent = {
  subtitle: 'ABOUT KENMOS',
  title: 'Building the Future with Precision & Integrity',
  paragraphs: [
    'Kenmos Structural Engineering was established in 2009. We deliver structural design and construction supervision for concrete and steel projects throughout Ethiopia and East Africa.',
    'Every design is validated against ASCE, ACI, and Eurocode standards using finite-element analysis. We enforce strict disciplines for structural safety, material efficiency, and long-term durability.',
    'Our founder and lead engineer has directed more than 800 projects over 20 years. We deliver technically sound solutions with disciplined cost control and clear client communication.',
  ]
}

export const services = [
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'We engineer reinforced concrete and steel-framed structures for buildings of every scale and complexity.',
    icon: 'Building2',
  },
  {
    id: 'supervision',
    title: 'Construction Supervision',
    description: 'We conduct site inspections and quality audits to ensure design intent is faithfully executed on site.',
    icon: 'ShieldCheck',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'We coordinate design teams, milestones, and budgets to deliver projects on schedule and within scope.',
    icon: 'Briefcase',
  },
  {
    id: 'assessment-retrofitting',
    title: 'Assessment & Retrofitting',
    description: 'We evaluate existing structures and deliver certified retrofitting plans for structural safety and longevity.',
    icon: 'Activity',
  },
  {
    id: 'tender-boq',
    title: 'Tender & BOQ Preparation',
    description: 'We produce accurate bills of quantities and tender documentation for transparent procurement.',
    icon: 'FileText',
  },
  {
    id: 'consultancy',
    title: 'Engineering Consultancy',
    description: 'We provide technical reviews, peer audits, and advisory support for developers and investors.',
    icon: 'Users',
  },
] as const

import industries from '@/data/industries'
import projects from '@/data/projects'
export { projects, industries }
export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We meet clients and architects to define project scope, budget, constraints, and delivery timeline.',
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    description:
      'We apply finite-element analysis and code-compliant modelling to produce robust structural systems.',
  },
  {
    step: '03',
    title: 'Value Engineering',
    description:
      'We refine materials and detailing to optimize cost without compromising structural performance.',
  },
  {
    step: '04',
    title: 'Construction Supervision',
    description:
      'Our engineers inspect site works at each phase to verify compliance with design intent.',
  },
] as const 
export const teamMembers = [
  {
    name: 'Kenmos Tesfaye',
    role: 'Founder & General Manager',
    bio: 'Leads the practice with 20 years of structural design and construction supervision across 800+ projects.',
    location: 'Addis Ababa Office',
  },
  {
    name: 'Senior Structural Engineer',
    role: 'Senior Structural Engineer',
    bio: 'Oversees structural analysis, design development, and engineering quality assurance.',
    location: 'Addis Ababa Office',
  },
  {
    name: 'CAD Technician Team',
    role: 'CAD Technicians',
    bio: 'Produces detailed structural drawings and documentation aligned with project specifications.',
    location: 'Addis Ababa Office',
  },
] as const 
export const testimonials = [
  {
    quote:
      'Kenmos Engineering delivered structurally sound designs with clear documentation and consistent communication.',
    name: 'Project Client',
    role: 'Building Developer',
    rating: 5,
  },
  {
    quote:
      'Their team provided dependable engineering support throughout design and construction phases.',
    name: 'Architect Partner',
    role: 'Design Consultant',
    rating: 5,
  },
  {
    quote:
      'Strong technical discipline. Clear reporting. Reliable supervision on site at every phase.',
    name: 'Construction Partner',
    role: 'Contractor',
    rating: 5,
  },
] as const