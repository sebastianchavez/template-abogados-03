window.MOCK_DATA = {
  firm: {
    name: "Estudio Jurídico Mendoza & Asociados",
    tagline: "Justicia, ética y compromiso",
    description: "Más de 25 años defendiendo sus derechos con integridad y excelencia profesional.",
    email: "contacto@mendozaasociados.cl",
    phone: "+56 2 2345 6789",
    whatsapp: "+56 9 8765 4321",
    address: "Av. Apoquindo 4501, Piso 12, Las Condes, Santiago 7550000",
    founded: 1998
  },

  stats: [
    { label: "Años de experiencia", value: 25, suffix: "+" },
    { label: "Casos ganados", value: 3200, suffix: "+" },
    { label: "Clientes satisfechos", value: 1500, suffix: "+" },
    { label: "Abogados especializados", value: 18, suffix: "" }
  ],

  team: [
    {
      name: "Lic. Roberto Mendoza",
      role: "Socio Fundador",
      bio: "Doctor en Derecho Civil con más de 30 años de experiencia en litigios de alto nivel.",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c3111?w=400&h=400&fit=crop",
      specialties: ["Civil", "Mercantil"],
      email: "roberto@mendozaasociados.cl"
    },
    {
      name: "Lic. Adriana Vega",
      role: "Socia",
      bio: "Especialista en derecho familiar y sucesiones, mediadora certificada.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      specialties: ["Familiar", "Sucesiones"],
      email: "adriana@mendozaasociados.cl"
    },
    {
      name: "Lic. Carlos Ramírez",
      role: "Socio",
      bio: "Experto en derecho penal y juicios orales, catedrático universitario.",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c3111?w=400&h=400&fit=crop&seed=carlos",
      specialties: ["Penal", "Amparos"],
      email: "carlos@mendozaasociados.cl"
    },
    {
      name: "Lic. Sofía Hernández",
      role: "Asociada Senior",
      bio: "Abogada corporativa con maestría en derecho empresarial internacional.",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      specialties: ["Corporativo", "Fiscal"],
      email: "sofia@mendozaasociados.cl"
    },
    {
      name: "Lic. Miguel Torres",
      role: "Asociado",
      bio: "Especialista en derecho laboral y seguridad social.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      specialties: ["Laboral", "Seguridad Social"],
      email: "miguel@mendozaasociados.cl"
    },
    {
      name: "Lic. Patricia Núñez",
      role: "Asociada",
      bio: "Experta en propiedad intelectual y nuevas tecnologías.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      specialties: ["Propiedad Intelectual", "Tecnología"],
      email: "patricia@mendozaasociados.cl"
    }
  ],

  services: [
    {
      icon: "scale",
      title: "Derecho Civil",
      description: "Contratos, responsabilidades civiles, propiedad, posesiones y conflictos entre particulares.",
      areas: ["Contratos", "Propiedad", "Responsabilidad Civil", "Mediación"]
    },
    {
      icon: "briefcase",
      title: "Derecho Mercantil",
      description: "Constitución de empresas, contratos comerciales, fusiones y litigio mercantil.",
      areas: ["Constitución", "Contratos", "Fusiones", "Litigio"]
    },
    {
      icon: "gavel",
      title: "Derecho Penal",
      description: "Defensa penal, asesoría a víctimas, juicios orales y amparos en materia penal.",
      areas: ["Defensa", "Asesoría", "Juicios Orales", "Amparos"]
    },
    {
      icon: "users",
      title: "Derecho Familiar",
      description: "Divorcios, custodias, pensiones alimenticias, adopciones y violencia familiar.",
      areas: ["Divorcio", "Custodia", "Alimentos", "Adopción"]
    },
    {
      icon: "building",
      title: "Derecho Corporativo",
      description: "Asesoría empresarial integral, gobierno corporativo y cumplimiento normativo.",
      areas: ["Gobierno", "Compliance", "Contratos", "Asesoría"]
    },
    {
      icon: "file-text",
      title: "Derecho Fiscal",
      description: "Planeación tributaria, defensa ante el SII, amparos tributarios y recursos administrativos.",
      areas: ["Planeación", "Defensa SII", "Amparos", "Recursos"]
    },
    {
      icon: "briefcase",
      title: "Derecho Laboral",
      description: "Defensa de trabajadores y patrones, despidos, liquidaciones y juntas de conciliación.",
      areas: ["Patrones", "Trabajadores", "Liquidaciones", "Juntas"]
    },
    {
      icon: "lightbulb",
      title: "Propiedad Intelectual",
      description: "Registro de marcas, patentes, derechos de autor y defensa de propiedad intelectual.",
      areas: ["Marcas", "Patentes", "Autor", "Defensa"]
    }
  ],

  pricing: [
    {
      plan: "Consulta Inicial",
      price: "$0",
      period: "primera consulta",
      description: "Evaluación inicial de su caso sin compromiso",
      features: [
        "Consulta de 30 minutos",
        "Análisis preliminar",
        "Opinión legal escrita",
        "Sin compromiso"
      ],
      highlighted: false
    },
    {
      plan: "Asesoría Mensual",
      price: "$350.000",
      period: "/mes",
      description: "Acompañamiento legal continuo para su empresa",
      features: [
        "Hasta 20 horas mensuales",
        "Revisión de contratos",
        "Asesoría ilimitada",
        "Reuniones mensuales",
        "Acceso prioritario",
        "Descuento en juicios"
      ],
      highlighted: true
    },
    {
      plan: "Corporativo",
      price: "Personalizado",
      period: "a medida",
      description: "Solución integral para corporativos grandes",
      features: [
        "Equipo dedicado",
        "Atención 24/7",
        "Cobertura nacional",
        "Auditoría legal",
        "Capacitaciones",
        "Servicio VIP"
      ],
      highlighted: false
    }
  ],

  pricingTable: [
    { service: "Consulta inicial", basico: true, profesional: true, corporativo: true },
    { service: "Asesoría telefónica/email", basico: false, profesional: true, corporativo: true },
    { service: "Revisión de contratos", basico: "Hasta 3/mes", profesional: "Ilimitada", corporativo: "Ilimitada" },
    { service: "Representación legal", basico: false, profesional: "Casos menores", corporativo: "Casos ilimitados" },
    { service: "Reuniones presenciales", basico: "1 al trimestre", profesional: "Mensuales", corporativo: "A demanda" },
    { service: "Atención 24/7", basico: false, profesional: false, corporativo: true },
    { service: "Equipo dedicado", basico: false, profesional: false, corporativo: true },
    { service: "Capacitaciones", basico: false, profesional: "Trimestrales", corporativo: "Mensuales" },
    { service: "Auditoría legal anual", basico: false, profesional: false, corporativo: true }
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop", alt: "Oficina principal", category: "Oficinas" },
    { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop", alt: "Reunión con clientes", category: "Equipo" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Sala de juntas", category: "Oficinas" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop", alt: "Equipo de abogados", category: "Equipo" },
    { src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop", alt: "Biblioteca legal", category: "Oficinas" },
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop", alt: "Conferencia", category: "Eventos" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop", alt: "Caso exitoso", category: "Casos" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", alt: "Firma de acuerdos", category: "Casos" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", alt: "Espacio de trabajo", category: "Oficinas" },
    { src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&h=600&fit=crop", alt: "Audiencia", category: "Eventos" },
    { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop", alt: "Reconocimiento", category: "Eventos" },
    { src: "https://images.unsplash.com/photo-1573497019418-b400bb3b0748?w=800&h=600&fit=crop", alt: "Atención personalizada", category: "Equipo" }
  ],

  testimonials: [
    {
      name: "María González",
      role: "Empresaria",
      text: "El equipo de Mendoza & Asociados resolvió un conflicto mercantil complicado. Su profesionalismo y dedicación fueron excepcionales.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    },
    {
      name: "Juan Pérez",
      role: "Cliente particular",
      text: "En mi proceso de divorcio recibí asesoría clara y empática. Recomiendo ampliamente a la Lic. Vega.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      name: "Ana Martínez",
      role: "CEO TechStart",
      text: "Su asesoría corporativa ha sido clave para el crecimiento de nuestra startup. Confianza total.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1573497019418-b400bb3b0748?w=200&h=200&fit=crop"
    },
    {
      name: "Roberto Sánchez",
      role: "Empresario",
      text: "Después de años litigando, finalmente encontramos abogados comprometidos y transparentes. Excelente trabajo.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop"
    }
  ],

  faqs: [
    {
      question: "¿Cuánto cuesta una consulta inicial?",
      answer: "La primera consulta es totalmente gratuita y sin compromiso. En ella evaluamos su caso, le explicamos sus opciones legales y le entregamos una opinión por escrito."
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Atendemos de lunes a viernes de 9:00 a 19:00 y sábados de 10:00 a 14:00. Para emergencias, contamos con un número de atención 24/7 para clientes corporativos."
    },
    {
      question: "¿Trabajan con clientes de otros estados?",
      answer: "Sí, trabajamos en todo Chile y tenemos convenios con abogados corresponsales en otros países para casos internacionales."
    },
    {
      question: "¿Ofrecen planes de pago?",
      answer: "Sí, ofrecemos planes de pago flexibles adaptados a cada caso. La primera consulta le permitirá conocer el alcance y los costos para que pueda planificar."
    },
    {
      question: "¿Cómo se comunican los avances del caso?",
      answer: "Mantenemos comunicación constante vía email, WhatsApp y reuniones programadas. Cada cliente tiene un abogado responsable asignado."
    },
    {
      question: "¿Cobran por hora o por caso?",
      answer: "Depende del tipo de servicio. Algunos casos se cobran por honorarios fijos, otros por horas. Siempre lo acordamos previamente y por escrito."
    }
  ],

  officeHours: [
    { day: "Lunes a Viernes", hours: "9:00 - 19:00" },
    { day: "Sábados", hours: "10:00 - 14:00" },
    { day: "Domingos", hours: "Cerrado" },
    { day: "Emergencias", hours: "24/7 (clientes)" }
  ],

  socialLinks: [
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Twitter", url: "#", icon: "twitter" },
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "WhatsApp", url: "#", icon: "phone" }
  ],

  values: [
    {
      icon: "shield",
      title: "Integridad",
      description: "Actuamos con honestidad y ética en cada caso."
    },
    {
      icon: "award",
      title: "Excelencia",
      description: "Búsqueda constante de la mejor solución legal."
    },
    {
      icon: "heart",
      title: "Compromiso",
      description: "Defendemos sus derechos con dedicación."
    },
    {
      icon: "users",
      title: "Empatía",
      description: "Entendemos la dimensión humana de cada caso."
    }
  ],

  nav: [
    { label: "Inicio", href: "index.html" },
    { label: "Nosotros", href: "about.html" },
    { label: "Servicios", href: "services.html" },
    { label: "Precios", href: "pricing.html" },
    { label: "Galería", href: "gallery.html" },
    { label: "Contacto", href: "contact.html" }
  ]
};

window.formatCurrency = (n) => new Intl.NumberFormat('es-CL').format(n);
window.checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
window.closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
window.chevronIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
