export const siteConfig = {
  name: "A&A Pharma",
  logoText: "A&A Pharma",
  logoSubtext: "Licensed Retail & Corporate",
  tagline: "Licensed & Trusted Since 2005",

  // SEO & General settings
  seo: {
    title: "A&A Pharma | Retail Pharmacy & Corporate Healthcare Procurement",
    description: "Trusted retail pharmacy and enterprise healthcare procurement in Thane. Offering prescription medicines, health screenings, OHC supplies, and medical fitness center services.",
    keywords: ["retail pharmacy", "healthcare procurement", "bulk medicines", "medical room supplies", "health screening", "corporate first aid", "registered MD doctor Thane"],
    url: "https://www.aapharma-demo.com",
    ogImage: "/og-image.jpg",
  },

  // Contact Info
  contact: {
    phone: "+91 99999 99999",
    whatsapp: "https://wa.me/919999999999?text=Hi%20A%26A%20Pharma%2C%20I%20have%20an%20inquiry.",
    email: "procurement@aapharma.com",
    address: {
      name: "A&A Pharma",
      street: "Shop-4, Sunrise Complex, Hosur Road, Bommasandra",
      locality: "Bommasandra",
      region: "Karnataka",
      postalCode: "560099",
      country: "IN",
      cityStateZip: "Bengaluru, Karnataka — 560099",
      mapCoordinates: "12.8227108, 77.6864084",
      latitude: 12.8227108,
      longitude: 77.6864084,
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.8227108,77.6864084",
      embedPlaceholderText: "Map Placeholder"
    }
  },

  // Navigation Links
  navLinks: [
    { label: "Retail", href: "#retail" },
    { label: "Clinic", href: "#clinic" },
    { label: "Corporate", href: "#corporate" },
    { label: "About", href: "#about" },
  ],

  // Hero Section
  hero: {
    badge: "Serving the Community Since 2005",
    title: "Retail Pharmacy & Corporate Healthcare",
    description: "Trusted medicines, expert guidance, and seamless procurement for individuals and enterprises alike. Walk in or reach out — we are here for you.",
    ctaWhatsApp: {
      label: "WhatsApp Local Inquiries",
      href: "https://wa.me/919999999999?text=Hi%20A%26A%20Pharma%2C%20I%20have%20a%20local%20prescription%20inquiry."
    },
    ctaCorporate: {
      label: "Email Corporate Requests",
      href: "mailto:procurement@aapharma.com?subject=Corporate%20Healthcare%20Procurement%20Request&body=Hi%20A%26A%20Pharma%20Procurement%20Team%2C%0A%0AWe%20would%20like%20to%20request%20information%20for%20our%20corporate%20healthcare%20requirements%20listed%20below%3A%0A%0A-%20Item%20Description%3A%0A-%20Estimated%20Quantity%3A%0A-%20Company%20Name%3A%0A-%20Contact%20Person%3A%0A%0AThank%20you."
    },
    stats: [
      { label: "YEARS TRUSTED", value: "15+" },
      { label: "PARTNERS", value: "5k+" },
      { label: "SAFE DELIVERY", value: "24h" }
    ]
  },

  // Trust Banner (Partners & Chat Action)
  trustBanner: {
    label: "AUTHORIZED CHANNEL PARTNERS FOR GLOBAL HEALTHCARE BRANDS",
    partners: [
      { name: "ABBOTT" },
      { name: "PFIZER" },
      { name: "GSK" },
      { name: "CIPLA" },
      { name: "SUN PHARMA" }
    ],
    whatsappFloat: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/919999999999?text=Hi%20A%26A%20Pharma%20Team%2C%20I%20want%20to%20connect%20with%20your%20representative."
    }
  },

  // Walk-In Retail Pharmacy Section
  retailSection: {
    category: "FOR INDIVIDUALS & FAMILIES",
    title: "Walk-In Retail Pharmacy",
    quickCheckup: {
      title: "Quick Checkup Available",
      desc: "Basic checkup available: Blood Pressure, Blood Sugar & BMI monitoring (No appointment needed)"
    },
    services: [
      {
        id: "prescription-medicines",
        title: "Prescription Medicines",
        desc: "Fast dispensing with valid prescription by expert pharmacists.",
        linkText: "Enquire",
        href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20enquire%20about%20Prescription%20Medicines.",
        imagePlaceholder: "Prescription Medicines"
      },
      {
        id: "health-screenings",
        title: "Health Screenings",
        desc: "Comprehensive blood tests, cholesterol, and preventive health panels.",
        linkText: "Enquire",
        href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20enquire%20about%20Health%20Screenings.",
        imagePlaceholder: "Health Screenings"
      },
      {
        id: "otc-essentials",
        title: "OTC Essentials",
        desc: "Pain relief, cold & flu, first-aid and everyday health essentials.",
        linkText: "Enquire",
        href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20enquire%20about%20OTC%20Essentials.",
        imagePlaceholder: "OTC Essentials"
      },
      {
        id: "medical-devices",
        title: "Medical Devices",
        desc: "BP monitors, glucometers, nebulizers and wellness tech.",
        linkText: "Enquire",
        href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20enquire%20about%20Medical%20Devices.",
        imagePlaceholder: "Medical Devices"
      }
    ]
  },

  // Doctor Consultation Section
  consultationSection: {
    category: "CLINICAL EXCELLENCE",
    title: "In-House General Physician & Consultation Center",
    desc: "Expert medical consultation is available right here. Our licensed physician is on-site for diagnosis, prescriptions, and health guidance.",
    bullets: [
      {
        title: "Doctor availability (7 Days a Week)",
        desc: "Morning Session: 10:00 AM — 1:00 PM | Evening Session: 5:00 PM — 10:00 PM"
      },
      {
        title: "Fitness Certificates",
        desc: "Authorized medical fitness certificates issued for sports participation, school, and corporate employment requirements."
      }
    ],
    ctaButton: {
      label: "Book Consultation",
      href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20the%20In-House%20Physician."
    },
    doctorCard: {
      badge: "REGISTERED MD",
      subBadge: "Licensed Professional Services",
      imagePlaceholder: "Doctor Consultation"
    }
  },

  // Corporate Procurement Section
  corporateSection: {
    category: "FOR BUSINESSES & ENTERPRISES",
    title: "Corporate Healthcare Procurement",
    ctaButton: {
      label: "Email for RFQ / Quote",
      href: "mailto:procurement@aapharma.com?subject=Request%20for%20Quote%20-%20Corporate%20Healthcare%20Procurement"
    },
    offerings: [
      {
        title: "Compliant First-Aid Kits",
        desc: "Factory, office, & school personalized kits. Customized per framework.",
        href: "mailto:procurement@aapharma.com?subject=First-Aid%20Kits%20RFQ",
        image: "/first-aid-kits.png"
      },
      {
        title: "OHC Medical Room Supplies",
        desc: "Complete setup for Occupational Health Centres — consumables and diagnostics.",
        href: "mailto:procurement@aapharma.com?subject=OHC%20Medical%20Room%20Supplies%20RFQ",
        image: "/medical-room-supplies.png"
      },
      {
        title: "Bulk Hygiene & PPE",
        desc: "Masks, gloves, and sanitizers in bulk quantities with documentation.",
        href: "mailto:procurement@aapharma.com?subject=Bulk%20Hygiene%20and%20PPE%20RFQ",
        image: "/hygiene-ppe.png"
      },
      {
        title: "Emergency Equipment",
        desc: "AEDs, stretchers, and oxygen systems with installation support.",
        href: "mailto:procurement@aapharma.com?subject=Emergency%20Equipment%20RFQ",
        image: "/emergency-equipment.png"
      }
    ]
  },

  // CTA Banner Section
  ctaBanner: {
    title: "Ready to place a bulk order?",
    desc: "Share your requirements — we'll respond with a detailed BOQ within 24 hours.",
    ctaButton: {
      label: "Email Your Requirements",
      href: "mailto:procurement@aapharma.com?subject=Bulk%20Order%20Requirements%20BOQ"
    }
  },

  // Footer timings & registrations
  footer: {
    operatingHours: {
      title: "OPERATING HOURS",
      schedule: [
        { days: "Mon - Sat", hours: "9:00 AM - 9:00 PM" },
        { days: "Sunday", hours: "9:00 AM - 6:00 PM" },
        { days: "Holidays", hours: "11:00 AM - 2:00 PM" }
      ]
    },
    licenses: {
      title: "LICENSES & REGISTRATIONS",
      list: [
        { label: "Drug License (Retail)", value: "DL No: MH-TZ4-41122" },
        { label: "Drug License (Wholesale)", value: "DL No: MH-TZ4-87856" },
        { label: "GST Registration", value: "27AADCM0000A1Z5" },
        { label: "FSSAI License", value: "12222044000077" },
        { label: "Shop Act License", value: "TH/E/II/2021/105331" }
      ]
    },
    disclaimer: {
      title: "DELIVERY & SAFETY DISCLAIMER",
      text: "Local delivery notice: Home delivery within 5 km. Charges apply for beyond 5 km. Prescription requirements: Schedule H, H1 & X medicines dispensed only with valid prescription per the Drugs & Cosmetics Act 1940. Corporate orders: Processed via PO/BOQ contract. All medicines sourced from licensed distributors with valid audit compliance."
    },
    copyright: "© 2026 A&A Pharma. All Rights Reserved. Designed for Excellence."
  }
};
