import commonCornerImg from 'figma:asset/1f3eeb46168aee9175c2da0e42b1461e7eec0723.png';

export interface CaseStudyData {
  id: string;
  title: string;
  collaborator: string;
  role: string[];
  date: string;
  deliverables: string[];
  heroImage: string;
  hookQuestion: string;
  context?: string[];
  problem?: string[];
  concept?: string[];
  solution?: string[];
  videoUrl?: string;
  videoAspect?: number;
  galleryImages?: string[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  'common-corner': {
    id: 'common-corner',
    title: 'The Common Corner, by Starbucks',
    collaborator: 'Starbucks',
    role: ['Experiential Design', 'Interior Design', 'Graphic Design'],
    date: '15 Sep 2024',
    deliverables: [
      'Interior Design',
      'Brand Experience',
      'Signage & Graphics'
    ],
    heroImage: commonCornerImg,
    hookQuestion: 'How might we create a community space that feels both familiar and inspiring?',
    videoUrl: 'https://youtu.be/Psi521_k9wE',
    videoAspect: 16/9,
    galleryImages: [
      'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1523419409543-3012a67fd0a4?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1519710162632-c0b5c04b7e47?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1484316541433-852a3d1bcd2b?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?w=1200&q=75&auto=format',
      'https://images.unsplash.com/photo-1503437313881-503a91226402?w=1200&q=75&auto=format'
    ],
    context: [
      'Singapore’s urban rhythm needs welcoming third places that encourage connection across diverse communities.',
      'Starbucks has the opportunity to redefine a community hub where physical space and gentle digital touchpoints meet.'
    ],
    problem: [
      'Perceived exclusivity and a lack of inclusive cues reduce comfort for varied demographics.',
      'Existing store layouts under‑utilize moments for interaction and shared experiences.'
    ],
    concept: [
      'The Common Corner: a community‑first experience blending spatial design with simple, human digital interactions.',
      'Design language emphasizes warmth, accessibility, and micro‑moments that invite participation.'
    ],
    solution: [
      'Phygital experience: intuitive prompts and ambient feedback that support gatherings and events.',
      'Community‑centric zoning: seating clusters, shared surfaces, and sightlines that invite conversation.',
      'Inclusive details: clear wayfinding, accessible routes, and graphic cues that welcome everyone.'
    ]
  },
  'nobleplay-wishulada': {
    id: 'nobleplay-wishulada',
    title: 'NoblePLAY x WISHULADA',
    collaborator: 'noblePLAY',
    role: ['Experiential', 'Industrial design', 'Graphic Design'],
    date: '10 Aug 2024',
    deliverables: [
      'Recycled Furniture Design',
      'Graphic Content',
      'Layout'
    ],
    heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
    hookQuestion: 'Where does all the construction waste go to?',
    context: [
      'Construction waste volumes are rising; material reuse can unlock meaningful storytelling in public spaces.',
      'A collaboration explores circular design as a tangible, educational experience.'
    ],
    problem: [
      'Low awareness of material lifecycles and limited engagement with sustainability on site.',
      'Disparate components make fabrication and assembly complex without a coherent system.'
    ],
    concept: [
      'Modular, recycled furniture set with graphic content to narrate material journeys.',
      'Open layout for interaction and learning, adaptable to different venues.'
    ],
    solution: [
      'Recycled components standardized into buildable modules and surface treatments.',
      'Interpretive graphics and signage that connect materials to their past uses.',
      'Flexible layout guidelines for assembly, maintenance, and safe public engagement.'
    ]
  }
};
