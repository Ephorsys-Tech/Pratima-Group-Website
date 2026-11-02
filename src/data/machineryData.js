export const getWhatsAppUrl = (machine) => {
  const phone = '919437976060';
  const text = `Hello Pratima Group of Industry, I am interested in ${machine.modelCode} - ${machine.name}. Please share the official quotation, die options, and delivery timeline.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

export const videoTrainingSeries = [
  { part: "Part-1", title: "About Business & its Current Market Potential", desc: "Overview of paper disposable market growth and entrepreneurship viability." },
  { part: "Part-2", title: "Types of Paper Disposable Products & its Manufacturing Process", desc: "Detailed breakdown of donas, plates, buffet thalis, and production cycles." },
  { part: "Part-3", title: "Types of Raw Material", desc: "Silver craft paper, duplex board, PE coated paper (80-400 GSM) procurement guidance." },
  { part: "Part-4", title: "Machine Specification & its Selection", desc: "Selecting the ideal crankshaft vs hydraulic machine based on capital and capacity." },
  { part: "Part-5", title: "Estimated Product Cost Calculation", desc: "Unit economics, electricity consumption, labor cost, and profit margin formulas." }
];

export const machineryList = [
  {
    id: "aew-001",
    slug: "aew-001",
    modelCode: "AEW-001",
    name: "Fully Automatic Single Die Paper Plate Making Machine (Crank)",
    tagline: "High-efficiency mechanical crankshaft paper plate, dona & thali machine",
    category: "Paper Disposal",
    driveType: "Crank",
    capacity: "4 Inch to 14 Inch Die",
    motor: "0.5 HP Motor",
    speed: "1200 - 1300 Pcs/hr",
    powerConsumption: "1 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Includes 1 Dona Die of 6 Inch. Extra dies charged extra. Freight extra.",
    image: "/images/aew/aew-001.jpg",
    isFeatured: true,
    popularFor: "Business Start-ups with Low Investment Budget",
    shortDescription: "Economical mechanical crankshaft machine producing paper Dona, Collar Plates & Thalis up to 14 inches.",
    description: "The AEW-001 is a mechanical machine operated by Crankshaft Mechanism. The manufacturing rate with respect to electricity consumption is very high, making it the fundamental machine for disposable paper product manufacturing. Highly economical and popular among business start-ups with low investment capital.",
    compatibleProducts: [
      "Paper Dona (4\" to 14\")",
      "Jumbo Dona",
      "Diamond Dona",
      "Collar Paper Plate",
      "Collar Paper Thali (up to 14\")"
    ],
    limitations: "Collar Thali above 14 Inch, Designer Plates & Thalis (Wrinkle, Diamond, & Capsule) cannot be manufactured by this machine (requires Hydraulic Powered Machine).",
    keyFeatures: [
      "Heavy-duty mechanical Crankshaft mechanism engineered for high uptime",
      "Ultra-low electricity consumption: only 1 Unit/hr (Max) with 0.5 HP motor",
      "High output: produces 1,200 to 1,300 pieces per hour",
      "Accommodates dies from 4 Inch up to 14 Inch",
      "Includes 1 standard 6-Inch Dona Die with machine delivery",
      "Approved by Govt. of Odisha DIC, Angul (Regd No: 210151100297)"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-001" },
      { label: "Machine Type", value: "Crank Mechanical" },
      { label: "Machine Capacity", value: "4 Inch to 14 Inch Die" },
      { label: "Motor Power", value: "0.5 HP" },
      { label: "Machine Speed", value: "1200 - 1300 Pcs/hr" },
      { label: "Power Consumption", value: "1 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "1 Dona Die of 6 Inch included" }
    ],
    standardAccessories: [
      "1 Included Dona Die of 6 Inch",
      "Heavy duty flywheel and crankshaft assembly",
      "0.5 HP electric motor with starter switch and safety belt guards",
      "Instruction handbook & operation manual"
    ],
    optionalAccessories: [
      "Extra dies for Dona (4\" to 14\"), Collar Plates & Thalis",
      "Automatic paper roll feeding attachment",
      "Scrap paper collection tray"
    ]
  },
  {
    id: "aew-002",
    slug: "aew-002",
    modelCode: "AEW-002",
    name: "Fully Automatic Double Die Paper Plate Making Machine (Crank)",
    tagline: "Double-die crankshaft system doubling production output at low power",
    category: "Paper Disposal",
    driveType: "Crank",
    capacity: "4 Inch to 14 Inch Die",
    motor: "1 HP Motor",
    speed: "2400 - 2500 Pcs/hr",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Includes 1 Dona Die of 6 Inch. Extra dies charged extra. Freight extra.",
    image: "/images/aew/aew-002.jpg",
    isFeatured: true,
    popularFor: "Commercial Micro-Enterprises & High-Speed Dona Making",
    shortDescription: "Doubles all features of single-die crank machine: 2400-2500 pcs/hr output with dual die stations.",
    description: "Like the Single Die machine, the AEW-002 is operated by Crankshaft Mechanism. It doubles all features including Machine Speed, Motor Power, and output capacity. Highly economical and popular among business start-ups wanting high daily volume with low investment.",
    compatibleProducts: [
      "Paper Dona (4\" to 14\")",
      "Jumbo Dona",
      "Diamond Dona",
      "Collar Paper Plate",
      "Collar Paper Thali (up to 14\")"
    ],
    limitations: "Collar Thali above 14 Inch, Designer Plates & Thalis (Wrinkle, Diamond, & Capsule) cannot be manufactured by this machine (requires Hydraulic Powered Machine).",
    keyFeatures: [
      "Dual die crankshaft mechanism running two dies simultaneously",
      "High speed: produces 2,400 to 2,500 pieces per hour",
      "Economical 1 HP motor with 2 Unit/hr max power consumption",
      "Accommodates dies from 4 Inch up to 14 Inch",
      "Includes 1 standard 6-Inch Dona Die with machine delivery",
      "Approved by Govt. of Odisha DIC, Angul with genuine parts"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-002" },
      { label: "Machine Type", value: "Crank Mechanical" },
      { label: "Machine Capacity", value: "4 Inch to 14 Inch Die" },
      { label: "Motor Power", value: "1 HP" },
      { label: "Machine Speed", value: "2400 - 2500 Pcs/hr" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "1 Dona Die of 6 Inch included" }
    ],
    standardAccessories: [
      "1 Included Dona Die of 6 Inch",
      "Heavy duty dual flywheel and crankshaft assembly",
      "1 HP electric motor with starter switch and safety belt guards",
      "Instruction handbook & operation manual"
    ],
    optionalAccessories: [
      "Extra dies for Dona, Collar Plate & Thali up to 14\"",
      "Dual automatic paper roll feeding attachment",
      "Scrap paper collection tray"
    ]
  },
  {
    id: "aew-003",
    slug: "aew-003",
    modelCode: "AEW-003",
    name: "Semi-Automatic Single Die Paper Plate Making Machine (Hydraulic Powered)",
    tagline: "Tremendous fluid oil pressure force for complete range of plates & thalis",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "10 - 15 Punch/min",
    powerConsumption: "3 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Includes 1 Dona Die of 6 Inch. Extra dies charged extra. Freight extra.",
    image: "/images/aew/aew-003.jpg",
    isFeatured: true,
    popularFor: "Quality-Focused Businesses & Full Range Plate/Thali Units",
    shortDescription: "Second-generation hydraulic machine manufacturing the complete range of Paper Dona, Plate & Thali up to 18 inches.",
    description: "Operates on the principle of Fluid (Oil) Pressure, providing tremendous force compared to basic mechanical machines. As a second generation hydraulic machine, it manufactures the complete range of Paper Dona, Plate & Thali of all sizes up to 18 inches. Priority choice for businesses demanding premium finish and die versatility.",
    compatibleProducts: [
      "Paper Dona (4\" to 18\")",
      "Collar Plate & Thali",
      "Wrinkle Plate",
      "Diamond Plate",
      "Capsule Plate",
      "Buffet Plate (up to 18\")",
      "Partition Plate"
    ],
    keyFeatures: [
      "High fluid hydraulic pressure delivering uniform deep-die forming",
      "Complete product range: Dona, Collar, Wrinkle, Diamond, Capsule & Buffet plates",
      "Accommodates extra-large dies from 4 Inch up to 18 Inch",
      "Can be customized as per customer's requirement of operations and safety",
      "Includes 1 standard 6-Inch Dona Die with machine delivery",
      "Engineered for high structural durability and heavy tonnage"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-003" },
      { label: "Machine Type", value: "Hydraulic Powered" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "10 - 15 Punch/min" },
      { label: "Power Consumption", value: "3 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "1 Dona Die of 6 Inch included" }
    ],
    standardAccessories: [
      "1 Included Dona Die of 6 Inch",
      "Hydraulic power pack with pressure gauge and control valves",
      "2 HP electric motor with starter switch",
      "Instruction handbook & operation manual"
    ],
    optionalAccessories: [
      "Wrinkle Plate, Buffet Thali & Partition Dies (4\" to 18\")",
      "Custom safety interlocks and foot pedal control",
      "Hydraulic oil initial drum"
    ]
  },
  {
    id: "aew-004",
    slug: "aew-004",
    modelCode: "AEW-004",
    name: "Semi-Automatic Double Die Paper Plate Making Machine (Hydraulic Powered)",
    tagline: "Dual-die hydraulic press doubling output with low maintenance cost",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "10 - 15 Punch/min",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Dies charged extra. Freight Charges will be Extra.",
    image: "/images/aew/aew-004.jpg",
    isFeatured: true,
    popularFor: "Dual-Die High Production Disposable Manufacturing",
    shortDescription: "Uses two dies simultaneously to double production speed without enhancing power consumption.",
    description: "The AEW-004 is a Hydraulic Powered Machine allowing two dies to be used at the same time. Hence, it doubles the production speed without enhancing power consumption. Widely used for manufacturing the complete range of Paper Plates & Thalis with high quality and low maintenance.",
    compatibleProducts: [
      "Paper Dona (4\" to 18\")",
      "Collar Plate & Thali",
      "Wrinkle Plate",
      "Diamond Plate",
      "Capsule Plate",
      "Buffet Plate",
      "Partition Plate"
    ],
    keyFeatures: [
      "Dual die hydraulic workstation doubling production throughput",
      "Energy efficient: only 2 Unit/hr power consumption with 2 HP motor",
      "Accommodates dies from 4 Inch up to 18 Inch simultaneously",
      "Known for high quality performance and minimal maintenance costs",
      "Customizable operational and safety controls",
      "Heavy cast-steel frame with rigid bed alignment"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-004" },
      { label: "Machine Type", value: "Hydraulic Powered" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "10 - 15 Punch/min" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "Dies charged extra as per order" }
    ],
    standardAccessories: [
      "Dual station hydraulic cylinder and manifold block",
      "2 HP electric motor with starter switch",
      "Complete hydraulic plumbing and fluid pressure gauges",
      "Instruction handbook & operation manual"
    ],
    optionalAccessories: [
      "Custom Dona, Wrinkle Plate & Buffet Dies (4\" to 18\")",
      "Automatic feeding attachments",
      "Special partition die sets"
    ]
  },
  {
    id: "aew-005",
    slug: "aew-005",
    modelCode: "AEW-005",
    name: "Semi-Automatic Double Die Double Cylinder Paper Plate Making Machine (Hydraulic Powered)",
    tagline: "Twin hydraulic cylinders delivering blazing 25-30 punches per minute",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "25 - 30 Punch/min",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Dies charged extra. Freight Charges will be Extra.",
    image: "/images/aew/aew-005.jpg",
    isFeatured: true,
    popularFor: "High-Volume Commercial Producers & Factory Scale Units",
    shortDescription: "Double cylinder hydraulic power plant producing 25-30 punches/min for full range plate and thali lines.",
    description: "Equipped with dual independent hydraulic cylinders, the AEW-005 delivers superior speed (25-30 punches/min) with balanced oil pressure across both die stations. Engineered for heavy industrial commercial manufacturing of paper dona, plates, and buffet thalis up to 18 inches.",
    compatibleProducts: [
      "Paper Dona (4\" to 18\")",
      "Collar Plate & Thali",
      "Wrinkle Plate",
      "Diamond Plate",
      "Capsule Plate",
      "Buffet Plate",
      "Partition Plate"
    ],
    keyFeatures: [
      "Twin independent hydraulic cylinders for precision stroke and speed",
      "Blazing speed: 25 to 30 punches per minute",
      "Low power consumption: only 2 Unit/hr (Max) with 2 HP motor",
      "Full 4 Inch to 18 Inch die capacity on both stations",
      "Customizable controls, safety sensors, and operator foot switches",
      "Govt. of Odisha DIC Angul approved design"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-005" },
      { label: "Machine Type", value: "Hydraulic Powered (Double Cylinder)" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "25 - 30 Punch/min" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "Dies charged extra as per order" }
    ],
    standardAccessories: [
      "Double hydraulic cylinder assembly with synchronized valving",
      "2 HP heavy-torque motor and hydraulic reservoir",
      "Industrial electrical control box with emergency cutoff",
      "Operation manual & maintenance kit"
    ],
    optionalAccessories: [
      "Full die packages (Dona, Wrinkle, Buffet, Partition)",
      "High-grade hydraulic fluid drum",
      "Automatic scrap collector"
    ]
  },
  {
    id: "aew-006",
    slug: "aew-006",
    modelCode: "AEW-006",
    name: "Fully-Automatic Single Die Paper Plate Making Machine All in One (Hydraulic Powered)",
    tagline: "Integrated all-in-one automatic roll feed with hydraulic fluid pressure",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "20 - 25 Punch/min",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Dies charged extra. Freight Charges will be Extra.",
    image: "/images/aew/aew-006.jpg",
    isFeatured: true,
    popularFor: "Automated Non-Stop Roll-Fed Disposable Manufacturing",
    shortDescription: "Integrated All-in-One automatic paper roll feeding and hydraulic forming system delivering 20-25 punches/min.",
    description: "The AEW-006 combines automatic continuous paper roll feeding with precision hydraulic pressing into a compact 'All in One' chassis. Eliminates manual sheet feeding, increases production efficiency, and ensures consistent quality across all plate and dona sizes.",
    compatibleProducts: [
      "Paper Dona (4\" to 18\")",
      "Collar Plate & Thali",
      "Wrinkle Plate",
      "Diamond Plate",
      "Capsule Plate",
      "Buffet Plate",
      "Partition Plate"
    ],
    keyFeatures: [
      "All-in-One automated roll feed mechanism with auto-tension control",
      "Hydraulic fluid pressure ensures crisp embossing and clean die cuts",
      "High speed: 20 to 25 punches per minute continuous output",
      "Handles roll paper from 80 GSM to 400 GSM seamlessly",
      "Energy-efficient 2 HP motor consuming only 2 Unit/hr max",
      "Low operator requirement: one operator can manage multiple machines"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-006" },
      { label: "Machine Type", value: "Fully-Automatic Hydraulic (All in One)" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "20 - 25 Punch/min" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "Dies charged extra as per order" }
    ],
    standardAccessories: [
      "Automatic paper roll feeding stand with guide rollers",
      "Heavy duty hydraulic cylinder and power pack unit",
      "2 HP motor with integrated electrical starter panel",
      "Operation handbook & basic service toolkit"
    ],
    optionalAccessories: [
      "Custom die sets for Buffet, Wrinkle, Dona & Partition",
      "Finished product stacking conveyor",
      "Extra roll mandrel"
    ]
  },
  {
    id: "aew-007",
    slug: "aew-007",
    modelCode: "AEW-007",
    name: "Fully-Automatic Double Die Paper Plate Making Machine All in One (Hydraulic Powered)",
    tagline: "Dual roll-fed all-in-one hydraulic workhorse for commercial volume",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "20 - 25 Punch/min",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Dies charged extra. Freight Charges will be Extra.",
    image: "/images/aew/aew-007.jpg",
    isFeatured: true,
    popularFor: "High-Volume Commercial Producers & Regional Wholesalers",
    shortDescription: "Dual automatic roll-fed die stations with hydraulic fluid pressure producing maximum commercial output.",
    description: "The flagship All in One double-die hydraulic machine under the AEW series. Operates two independent roll feeds with dual hydraulic die stations simultaneously, delivering massive daily production of donas, plates, and thalis with minimal manpower and low energy cost.",
    compatibleProducts: [
      "Paper Dona (4\" to 18\")",
      "Collar Plate & Thali",
      "Wrinkle Plate",
      "Diamond Plate",
      "Capsule Plate",
      "Buffet Plate",
      "Partition Plate"
    ],
    keyFeatures: [
      "Dual roll feed stands running two independent dies simultaneously",
      "All-in-One hands-free automated production from raw roll to finished plate",
      "Hydraulic power pack delivers massive clamping force with smooth stroke",
      "Accommodates up to 18 Inch dies on both stations",
      "Ultra-low operational cost: 2 HP motor uses only 2 Unit/hr max",
      "Heavy-duty industrial chassis built for 24/7 commercial operation"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-007" },
      { label: "Machine Type", value: "Fully-Automatic Hydraulic (Double Die All in One)" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "20 - 25 Punch/min" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "Dies charged extra as per order" }
    ],
    standardAccessories: [
      "Dual roll feed stand assemblies with auto-unwind tensioners",
      "Heavy dual hydraulic ram with central power pack",
      "2 HP industrial motor with control console",
      "Instruction handbook & operation manual"
    ],
    optionalAccessories: [
      "Complete die packages across all sizes (4\" to 18\")",
      "Automated plate counter and stacking chute",
      "High-grade hydraulic fluid drum"
    ]
  },
  {
    id: "aew-008",
    slug: "aew-008",
    modelCode: "AEW-008",
    name: "Fully-Automatic 3 Cylinder Auto-Wrinkle Paper Plate Making Machine (Hydraulic Powered)",
    tagline: "Top-tier 3-cylinder hydraulic engineering for heavy auto-wrinkle thalis",
    category: "Paper Disposal",
    driveType: "Hydraulic",
    capacity: "4 Inch to 18 Inch",
    motor: "2 HP Motor",
    speed: "20 - 25 Punch/min",
    powerConsumption: "2 Unit/hr (Max)",
    price: "Available on Enquiry",
    priceRaw: null,
    priceNote: "Dies charged extra. Freight Charges will be Extra.",
    image: "/images/aew/aew-008.jpg",
    isFeatured: true,
    popularFor: "Heavy Auto-Wrinkle Thalis, Buffet Plates & Luxury Partition Dishes",
    shortDescription: "Triple-cylinder hydraulic power architecture specialized for high-strength wrinkle plates and buffet thalis up to 18 inches.",
    description: "The pinnacle of indigenous heavy-duty paper plate manufacturing technology. Engineered with a specialized 3-cylinder hydraulic system that exerts uniform multi-directional pressure, guaranteeing rigid deep-wrinkle borders and high strength in buffet thalis and multi-partition plates up to 18 inches.",
    compatibleProducts: [
      "Heavy Auto-Wrinkle Plates & Thalis",
      "Buffet Plates & Partition Dishes (up to 18\")",
      "Designer Diamond & Capsule Plates",
      "Collar Paper Plates & Thalis",
      "Paper Dona (all sizes 4\" to 18\")"
    ],
    keyFeatures: [
      "Advanced 3-cylinder hydraulic architecture with uniform pressure distribution",
      "Specialized in deep-crease, heavy auto-wrinkle thalis and buffet plates",
      "Fully automatic roll-feeding continuous operation",
      "Handles heavy paper grades, silver craft, and duplex boards up to 400 GSM",
      "Energy efficient 2 HP drive consuming only 2 Unit/hr max",
      "Highest rigidity and finish quality in the Indian disposable machinery sector"
    ],
    specifications: [
      { label: "Model Code", value: "AEW-008" },
      { label: "Machine Type", value: "Fully-Automatic 3-Cylinder Hydraulic" },
      { label: "Machine Capacity", value: "4 Inch to 18 Inch" },
      { label: "Motor Power", value: "2 HP" },
      { label: "Machine Speed", value: "20 - 25 Punch/min" },
      { label: "Power Consumption", value: "2 Unit/hr (Max)" },
      { label: "Official Price", value: "Available on Enquiry" },
      { label: "Die Included", value: "Dies charged extra as per order" }
    ],
    standardAccessories: [
      "3-Cylinder hydraulic head with pressure equalization manifold",
      "Automatic roll feeding stand with precision micro-adjustment",
      "2 HP industrial motor and oil reservoir with cooling fins",
      "Operation handbook & comprehensive video training link"
    ],
    optionalAccessories: [
      "Specialized Auto-Wrinkle Thali Dies (12\", 14\", 16\", 18\")",
      "Multi-Partition Buffet Dies",
      "Finished plate collection conveyor"
    ]
  }
];
