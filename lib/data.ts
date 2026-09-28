export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
  heroImage: string;
  gallery: string[];
  brief: string;
  idea: string;
  response: string;
  materials: string[];
  placeholder?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  statement: string;
  includes: string[];
  forWhom: string;
  deliverables: string[];
  note?: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: img("photo-1618221195710-dd6b41faaea6", 2000),
  intro: img("photo-1600210492486-724fe5c67fb0", 1200),
  detail: img("photo-1600607687939-ce8a6c25118c", 1200),
  materialTimber: img("photo-1524758631624-e2822e304c36", 1000),
  materialStone: img("photo-1618220179428-22790b461013", 1000),
  materialFabric: img("photo-1616486338812-3dadae4b4ace", 1000),
  materialLight: img("photo-1600121848594-d8644e57abab", 1000),
  studio: img("photo-1600585154340-be6161a56a0c", 1400),
  process: img("photo-1600566753086-00f18fb6b3ea", 1200),
  about: img("photo-1616594039964-ae9021a400a0", 1200),
};

export const projects: Project[] = [
  {
    slug: "serene-residence-jp-nagar",
    title: "Serene Residence",
    location: "JP Nagar, Bangalore",
    category: "Residential",
    year: "2024",
    description:
      "An understated contemporary home shaped around light, natural materials and everyday living.",
    heroImage: img("photo-1618221195710-dd6b41faaea6", 2000),
    gallery: [
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1616486338812-3dadae4b4ace"),
    ],
    brief:
      "A family home that needed to feel calm and open, with room for daily life, work and quiet moments. [Placeholder brief — to be replaced with the verified client brief.]",
    idea: "Plan around daylight and circulation first, then layer timber, stone and soft textiles as one visual language.",
    response:
      "Walls were eased back to let light travel deeper into the plan. Joinery was kept low and continuous so rooms feel connected rather than divided.",
    materials: ["White oak", "Limestone", "Linen", "Brushed brass", "Warm white limewash"],
  },
  {
    slug: "courtyard-villa-whitefield",
    title: "Courtyard Villa",
    location: "Whitefield, Bangalore",
    category: "Villas",
    year: "2023",
    description:
      "A villa organised around an inner courtyard, where every room keeps a visual link to greenery.",
    heroImage: img("photo-1600585154340-be6161a56a0c", 2000),
    gallery: [
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1616594039964-ae9021a400a0"),
      img("photo-1617806118233-18e1de247200"),
    ],
    brief:
      "Design a villa interior that balances entertaining with privacy. [Placeholder brief — replace with verified content.]",
    idea: "Use the courtyard as the orienting device — materials stay quiet so landscape and light carry the atmosphere.",
    response:
      "Living spaces open fully to the court. Timber screens filter sun and sightlines without closing rooms off.",
    materials: ["Teak", "Kota stone", "Cotton weave", "Blackened steel", "Clay plaster"],
  },
  {
    slug: "compact-apartment-indiranagar",
    title: "Compact Apartment",
    location: "Indiranagar, Bangalore",
    category: "Apartments",
    year: "2024",
    description:
      "A compact apartment where careful proportion and storage make a small plan live large.",
    heroImage: img("photo-1502672260266-1c1ef2d93688", 2000),
    gallery: [
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1493809842364-78817add7ffb"),
    ],
    brief:
      "Make a compact apartment work harder without feeling crowded. [Placeholder brief — replace with verified content.]",
    idea: "Fewer, better-defined zones. Every piece of joinery does at least two jobs.",
    response:
      "A single run of joinery carries storage, desk, display and concealment. Light finishes and full-height curtains add depth.",
    materials: ["Ash veneer", "Terrazzo", "Bouclé", "Powder-coated steel", "Soft white paint"],
  },
];

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    statement:
      "From spatial planning to the final layer, we develop interiors that balance function, character and material.",
    includes: ["Concept direction", "Layouts and drawings", "Material palette", "Furniture selection", "Lighting intent"],
    forWhom: "Homeowners planning a full residence or a single floor who want one coherent scheme.",
    deliverables: ["Design concept", "Plans and elevations", "Material board", "Furniture schedule", "Site coordination notes"],
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    statement:
      "Thoughtful planning that improves circulation, proportion, storage and everyday usability.",
    includes: ["Measured study", "Zoning options", "Circulation review", "Storage planning", "Furniture layouts"],
    forWhom: "Anyone deciding what goes where before committing to civil work or joinery.",
    deliverables: ["As-built study", "Two to three layout options", "Final space plan", "Dimension notes"],
  },
  {
    slug: "material-finish-selection",
    title: "Material and Finish Selection",
    statement:
      "Stone, timber, metal, fabric, lighting and finishes selected as one considered visual language.",
    includes: ["Palette direction", "Sample review", "Supplier coordination", "Finish schedule", "On-site verification"],
    forWhom: "Projects where finishes currently feel disconnected and need a unifying eye.",
    deliverables: ["Palette narrative", "Physical samples list", "Finish schedule", "Application notes"],
  },
  {
    slug: "custom-furniture-joinery",
    title: "Custom Furniture and Joinery",
    statement: "Bespoke furniture, joinery and details developed specifically for the space.",
    includes: ["Joinery design", "Detail drawings", "Hardware selection", "Workshop coordination", "Finish review"],
    forWhom: "Homes that need pieces fitted to awkward walls, specific rituals or long-term use.",
    deliverables: ["Joinery drawings", "Detail sections", "Hardware schedule", "Finishing notes"],
  },
  {
    slug: "design-coordination",
    title: "Design Coordination",
    statement:
      "Design intent carried through execution with clarity, coordination and attention to detail.",
    includes: ["Drawing issue", "Site reviews", "Finish checks", "Joinery alignment", "Snag review"],
    forWhom: "Clients executing with their own contractor who want the design intent protected.",
    deliverables: ["Issued drawing set", "Review notes", "Finish sign-off list"],
  },
  {
    slug: "one-to-one-session",
    title: "One-to-One Design Session",
    statement:
      "A focused conversation with a designer about your space — direction, priorities and next steps, before you commit to a full project.",
    includes: ["Your space, reviewed together", "Style and mood direction", "Priority list for the home", "A clear next-step plan"],
    forWhom: "Anyone at the very start — exploring ideas, comparing options, or deciding what their home actually needs.",
    deliverables: ["Session notes", "Direction summary", "Suggested scope for your project"],
    note: "Session length and fee are confirmed when you enquire — nothing is charged through this website.",
  },
];

export type StyleEntry = {
  slug: string;
  title: string;
  mood: string;
  description: string;
  traits: string[];
  image: string;
};

/* Editable style vocabulary — helps clients articulate taste.
   Final wording and imagery to be reviewed with the studio. */
export const styles: StyleEntry[] = [
  {
    slug: "warm-contemporary",
    title: "Warm Contemporary",
    mood: "Calm, current, easy to live with",
    description:
      "Clean lines softened by timber, textile and warm light. The most versatile starting point for Bangalore apartments and villas.",
    traits: ["Oak and ash tones", "Soft textiles", "Low, comfortable seating", "Warm white light"],
    image: img("photo-1600210492486-724fe5c67fb0", 1400),
  },
  {
    slug: "quiet-minimal",
    title: "Quiet Minimal",
    mood: "Still, precise, uncluttered",
    description:
      "Fewer elements, each one resolved. Concealed storage, flush joinery and a restrained palette that lets space and light lead.",
    traits: ["Flush joinery", "Concealed storage", "Restrained palette", "Shadow-gap detailing"],
    image: img("photo-1600607687939-ce8a6c25118c", 1400),
  },
  {
    slug: "earthy-textured",
    title: "Earthy and Textured",
    mood: "Tactile, grounded, handcrafted",
    description:
      "Limewash, stone, cane and weave — materials with visible craft that age gracefully and feel rooted in the Indian context.",
    traits: ["Limewash walls", "Natural stone", "Cane and rattan", "Handloom textiles"],
    image: img("photo-1616486338812-3dadae4b4ace", 1400),
  },
  {
    slug: "classic-contemporary",
    title: "Classic Contemporary",
    mood: "Composed, enduring, familiar",
    description:
      "Proportioned rooms, panelled walls and timeless pieces — a settled language for family homes that host across generations.",
    traits: ["Wall panelling", "Symmetric planning", "Timeless furniture", "Layered lighting"],
    image: img("photo-1600585154340-be6161a56a0c", 1400),
  },
  {
    slug: "compact-urban",
    title: "Compact Urban",
    mood: "Clever, light, hardworking",
    description:
      "Small plans that live large — every wall and corner earns its place through joinery that stores, folds and conceals.",
    traits: ["Full-height storage", "Fold-away pieces", "Light finishes", "Mirrored depth"],
    image: img("photo-1522708323590-d24dbb6b0267", 1400),
  },
  {
    slug: "courtyard-villa",
    title: "Villa and Courtyard Living",
    mood: "Open, green, indoor-outdoor",
    description:
      "Rooms that borrow from the landscape — screens, verandas and thresholds that keep greenery in view from every seat.",
    traits: ["Timber screens", "Veranda thresholds", "Indoor planting", "Cross ventilation"],
    image: img("photo-1600566753086-00f18fb6b3ea", 1400),
  },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "materials-that-age-beautifully",
    title: "How to choose materials that age beautifully",
    category: "Materials",
    excerpt: "Patina, maintenance and honesty — what to ask before you commit to a finish.",
    image: img("photo-1524758631624-e2822e304c36", 1200),
    date: "Draft — awaiting studio review",
  },
  {
    slug: "what-makes-a-home-considered",
    title: "What makes a home feel considered?",
    category: "Design",
    excerpt: "Proportion, restraint and repetition matter more than decoration.",
    image: img("photo-1616486338812-3dadae4b4ace", 1200),
    date: "Draft — awaiting studio review",
  },
  {
    slug: "designing-around-natural-light",
    title: "Designing around natural light",
    category: "Process",
    excerpt: "Orientation first, finishes second. A Bangalore-specific way to plan rooms.",
    image: img("photo-1600607687939-ce8a6c25118c", 1200),
    date: "Draft — awaiting studio review",
  },
];

export const site = {
  name: "InfinityCrafts",
  tagline: "Interior spaces, thoughtfully crafted.",
  location: "Bangalore, India",
  email: "hello@infinitycrafts.in",
  phone: "+91-XXXXXXXXXX",
  instagram: "https://instagram.com",
  pinterest: "https://pinterest.com",
  linkedin: "https://linkedin.com",
};
