"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "fr" | "es" | "ar";

export const LANGUAGES = [
  { code: "en" as Lang, label: "English"  },
  { code: "fr" as Lang, label: "Français" },
  { code: "es" as Lang, label: "Español"  },
  { code: "ar" as Lang, label: "العربية"  },
];

// ─── Translation shape ───────────────────────────────────────────────────────
interface T {
  nav: {
    home: string; services: string; industry: string;
    stories: string; whyUs: string; contact: string;
    careers: string; letsGo: string;
  };
  servicesMega: Array<{ category: string; links: Array<{ href: string; label: string }> }>;
  industryMega: Array<{ category: string; links: Array<{ href: string; label: string }> }>;
  hero: Array<{ src: string; eyebrow: string; headline: string; sub: string; cta: string; href: string }>;
  footer: {
    tagline: string; servicesTitle: string; companyTitle: string;
    contactTitle: string; bookCall: string; copyright: string;
    privacy: string; terms: string; location: string;
  };
  legal: {
    privacy: { title: string; updated: string; sections: Array<{ heading: string; body: string }> };
    terms:   { title: string; updated: string; sections: Array<{ heading: string; body: string }> };
  };
}

// ─── English ─────────────────────────────────────────────────────────────────
const en: T = {
  nav: {
    home: "Home", services: "Services", industry: "Industry",
    stories: "Stories", whyUs: "Why Us", contact: "Contact",
    careers: "Careers", letsGo: "Let's Talk",
  },
  servicesMega: [
    { category: "Advisory", links: [
      { href: "/services/strategy-consulting",   label: "Strategy Consulting"   },
      { href: "/services/professional-services", label: "Professional Services" },
    ]},
    { category: "Digital & Technology", links: [
      { href: "/services/digital-transformation", label: "Digital Transformation" },
      { href: "/services/cybersecurity-grc",       label: "Cybersecurity & GRC"   },
    ]},
    { category: "People & Capability", links: [
      { href: "/services/training-coaching", label: "Training & Coaching" },
    ]},
  ],
  industryMega: [
    { category: "Technology & Services", links: [
      { href: "/industry/it-technology", label: "IT & Technology" },
    ]},
    { category: "Regulated Industries", links: [
      { href: "/industry/healthcare",         label: "Healthcare"                 },
      { href: "/industry/financial-services", label: "Financial Services"         },
      { href: "/industry/government",         label: "Government & Public Sector" },
    ]},
    { category: "Energy & Industry", links: [
      { href: "/industry/energy-utilities", label: "Energy & Utilities"           },
      { href: "/industry/manufacturing",    label: "Manufacturing & Supply Chain" },
    ]},
  ],
  hero: [
    { src: "/media/2.mp4", eyebrow: "Strategy · Technology · People",
      headline: "The future belongs to organizations\nthat know how to transform",
      sub: "Empower your vision with Hippowize's transformative and innovative solutions — globally.",
      cta: "Explore Services", href: "#services" },
    { src: "/media/3.mp4", eyebrow: "Strategy Consulting",
      headline: "Strategy that turns\nambition into measurable outcomes",
      sub: "From PMO to VMO — we align your technology investments with lasting business value.",
      cta: "Our Approach", href: "#about" },
    { src: "/media/4.mp4", eyebrow: "Digital Transformation",
      headline: "Digital transformation\ndelivered end-to-end",
      sub: "ServiceNow, AI, Cloud, and Automation — by specialists who stay through execution.",
      cta: "Our Services", href: "#services" },
    { src: "/media/6.mp4", eyebrow: "Cyber Resilience",
      headline: "Building cyber-resilient\norganizations worldwide",
      sub: "Proactive threat assessment, GRC alignment, and continuous monitoring — without compromise.",
      cta: "Learn More", href: "#why-us" },
    { src: "/media/7.mp4", eyebrow: "200+ Projects · Every Sector",
      headline: "From vision to execution —\nacross every sector",
      sub: "Hippowize partners with industry leaders in Canada and globally to drive real, lasting change.",
      cta: "Book a Call", href: "https://calendly.com/hippowize" },
  ],
  footer: {
    tagline: "Transforming organizations through strategy, technology, and people — built in Canada, serving the world.",
    servicesTitle: "Services", companyTitle: "Company", contactTitle: "Get in Touch",
    bookCall: "Book a Call", copyright: "All rights reserved.",
    privacy: "Privacy Policy", terms: "Terms of Use", location: "Toronto, Canada",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: April 8, 2026",
      sections: [
        { heading: "1. Introduction", body: "Hippowize Inc. ('we', 'our', or 'us') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hippowize.com or engage with our consulting services." },
        { heading: "2. Information We Collect", body: "We may collect personal information that you voluntarily provide, including your name, email address, phone number, company name, and job title when you contact us, request a consultation, or submit a form. We also automatically collect certain technical information such as your IP address, browser type, operating system, and pages visited." },
        { heading: "3. How We Use Your Information", body: "We use the information we collect to respond to your inquiries and provide consulting services, send you information about our services and industry insights, improve our website and services, comply with legal obligations, and protect the security and integrity of our operations." },
        { heading: "4. Cookies", body: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
        { heading: "5. Sharing Your Information", body: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information where required by law." },
        { heading: "6. Data Retention", body: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it." },
        { heading: "7. Your Rights", body: "Depending on your location, you may have the right to access, correct, or delete your personal information; withdraw consent; object to processing; and request data portability. To exercise these rights, please contact us at privacy@hippowize.com." },
        { heading: "8. Security", body: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure." },
        { heading: "9. Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically." },
        { heading: "10. Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at: Hippowize Inc., Toronto, Ontario, Canada. Email: privacy@hippowize.com" },
      ],
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated: April 8, 2026",
      sections: [
        { heading: "1. Acceptance of Terms", body: "By accessing and using the Hippowize website (hippowize.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website." },
        { heading: "2. Use of Website", body: "You may use our website for lawful purposes only. You agree not to use the site in any way that violates applicable laws or regulations, transmits harmful or offensive content, attempts to gain unauthorized access to any part of the website, or interferes with the proper functioning of the website." },
        { heading: "3. Intellectual Property", body: "All content on this website, including text, graphics, logos, images, and software, is the property of Hippowize Inc. and is protected by Canadian and international intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission." },
        { heading: "4. Consulting Services", body: "Information on this website is provided for general informational purposes only and does not constitute professional consulting advice. Engagement of Hippowize consulting services is subject to separate service agreements and statements of work." },
        { heading: "5. Third-Party Links", body: "Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them." },
        { heading: "6. Disclaimer of Warranties", body: "This website is provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components." },
        { heading: "7. Limitation of Liability", body: "To the fullest extent permitted by law, Hippowize Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of this website or our services." },
        { heading: "8. Governing Law", body: "These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ontario." },
        { heading: "9. Changes to Terms", body: "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms." },
        { heading: "10. Contact Us", body: "For questions about these Terms of Use, please contact us at: Hippowize Inc., Toronto, Ontario, Canada. Email: legal@hippowize.com" },
      ],
    },
  },
};

// ─── French ──────────────────────────────────────────────────────────────────
const fr: T = {
  nav: {
    home: "Accueil", services: "Services", industry: "Secteurs",
    stories: "Témoignages", whyUs: "Pourquoi nous", contact: "Contact",
    careers: "Carrières", letsGo: "Parlons-en",
  },
  servicesMega: [
    { category: "Conseil", links: [
      { href: "/services/strategy-consulting",   label: "Conseil Stratégique"     },
      { href: "/services/professional-services", label: "Services Professionnels" },
    ]},
    { category: "Numérique & Technologie", links: [
      { href: "/services/digital-transformation", label: "Transformation Digitale" },
      { href: "/services/cybersecurity-grc",       label: "Cybersécurité & GRC"    },
    ]},
    { category: "Personnes & Compétences", links: [
      { href: "/services/training-coaching", label: "Formation & Coaching" },
    ]},
  ],
  industryMega: [
    { category: "Technologie & Services", links: [
      { href: "/industry/it-technology", label: "IT & Technologie" },
    ]},
    { category: "Industries Réglementées", links: [
      { href: "/industry/healthcare",         label: "Santé"                       },
      { href: "/industry/financial-services", label: "Services Financiers"         },
      { href: "/industry/government",         label: "Gouvernement & Secteur Public" },
    ]},
    { category: "Énergie & Industrie", links: [
      { href: "/industry/energy-utilities", label: "Énergie & Utilités"     },
      { href: "/industry/manufacturing",    label: "Industrie & Supply Chain" },
    ]},
  ],
  hero: [
    { src: "/media/2.mp4", eyebrow: "Stratégie · Technologie · Personnes",
      headline: "L'avenir appartient aux organisations\nqui savent se transformer",
      sub: "Renforcez votre vision avec les solutions innovantes d'Hippowize — à l'échelle mondiale.",
      cta: "Découvrir nos services", href: "#services" },
    { src: "/media/3.mp4", eyebrow: "Conseil Stratégique",
      headline: "La stratégie qui transforme\nl'ambition en résultats mesurables",
      sub: "Du PMO au VMO — nous alignons vos investissements technologiques sur une valeur durable.",
      cta: "Notre approche", href: "#about" },
    { src: "/media/4.mp4", eyebrow: "Transformation Digitale",
      headline: "La transformation digitale\nlivrée de bout en bout",
      sub: "ServiceNow, IA, Cloud et Automatisation — par des spécialistes qui restent jusqu'à l'exécution.",
      cta: "Nos services", href: "#services" },
    { src: "/media/6.mp4", eyebrow: "Résilience Cyber",
      headline: "Construire des organisations\ncyber-résilientes dans le monde",
      sub: "Évaluation proactive des menaces, alignement GRC et surveillance continue — sans compromis.",
      cta: "En savoir plus", href: "#why-us" },
    { src: "/media/7.mp4", eyebrow: "200+ Projets · Tous Secteurs",
      headline: "De la vision à l'exécution —\ndans tous les secteurs",
      sub: "Hippowize s'associe aux leaders au Canada et à l'international pour un changement durable.",
      cta: "Prendre RDV", href: "https://calendly.com/hippowize" },
  ],
  footer: {
    tagline: "Transformer les organisations par la stratégie, la technologie et les personnes — bâti au Canada, au service du monde.",
    servicesTitle: "Services", companyTitle: "Entreprise", contactTitle: "Nous contacter",
    bookCall: "Prendre RDV", copyright: "Tous droits réservés.",
    privacy: "Politique de confidentialité", terms: "Conditions d'utilisation", location: "Toronto, Canada",
  },
  legal: {
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 8 avril 2026",
      sections: [
        { heading: "1. Introduction", body: "Hippowize Inc. (« nous », « notre » ou « nos ») s'engage à protéger vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site hippowize.com ou faites appel à nos services de conseil." },
        { heading: "2. Informations collectées", body: "Nous pouvons collecter des informations personnelles que vous fournissez volontairement, notamment votre nom, adresse e-mail, numéro de téléphone, nom d'entreprise et titre de poste. Nous collectons également automatiquement certaines informations techniques telles que votre adresse IP, type de navigateur, système d'exploitation et pages visitées." },
        { heading: "3. Utilisation de vos informations", body: "Nous utilisons les informations collectées pour répondre à vos demandes et fournir des services de conseil, vous envoyer des informations sur nos services, améliorer notre site et nos services, respecter nos obligations légales, et protéger la sécurité de nos opérations." },
        { heading: "4. Cookies", body: "Notre site utilise des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation, analyser le trafic et comprendre la provenance de nos visiteurs. Vous pouvez configurer votre navigateur pour refuser tous les cookies." },
        { heading: "5. Partage de vos informations", body: "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services de confiance qui nous aident à exploiter notre site, sous réserve d'accords de confidentialité." },
        { heading: "6. Conservation des données", body: "Nous conservons vos informations personnelles aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est requise par la loi." },
        { heading: "7. Vos droits", body: "Selon votre localisation, vous pouvez avoir le droit d'accéder à vos informations personnelles, de les corriger ou de les supprimer, de retirer votre consentement, de vous opposer au traitement et de demander la portabilité des données. Contactez-nous à privacy@hippowize.com." },
        { heading: "8. Sécurité", body: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction." },
        { heading: "9. Modifications de cette politique", body: "Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page avec une date d'entrée en vigueur mise à jour." },
        { heading: "10. Nous contacter", body: "Pour toute question concernant cette politique de confidentialité, contactez-nous à : Hippowize Inc., Toronto, Ontario, Canada. E-mail : privacy@hippowize.com" },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: "Dernière mise à jour : 8 avril 2026",
      sections: [
        { heading: "1. Acceptation des conditions", body: "En accédant et en utilisant le site Hippowize (hippowize.com), vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site." },
        { heading: "2. Utilisation du site", body: "Vous ne pouvez utiliser notre site qu'à des fins légales. Vous acceptez de ne pas l'utiliser d'une manière qui viole les lois applicables, transmet du contenu nuisible, tente d'obtenir un accès non autorisé ou interfère avec le bon fonctionnement du site." },
        { heading: "3. Propriété intellectuelle", body: "Tout le contenu de ce site, y compris les textes, graphiques, logos et images, est la propriété de Hippowize Inc. et est protégé par les lois canadiennes et internationales sur la propriété intellectuelle. Toute reproduction est interdite sans autorisation écrite." },
        { heading: "4. Services de conseil", body: "Les informations sur ce site sont fournies à des fins d'information générale uniquement et ne constituent pas des conseils professionnels. L'engagement des services de conseil Hippowize est soumis à des accords de service distincts." },
        { heading: "5. Liens tiers", body: "Notre site peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement pour votre commodité. Nous n'avons aucun contrôle sur le contenu de ces sites et n'assumons aucune responsabilité à leur égard." },
        { heading: "6. Exclusion de garanties", body: "Ce site est fourni « tel quel » sans aucune garantie d'aucune sorte. Nous ne garantissons pas que le site sera ininterrompu, exempt d'erreurs ou de virus." },
        { heading: "7. Limitation de responsabilité", body: "Dans toute la mesure permise par la loi, Hippowize Inc. ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de votre utilisation de ce site." },
        { heading: "8. Droit applicable", body: "Ces conditions sont régies par les lois de la Province d'Ontario et les lois fédérales du Canada. Tout litige sera soumis à la juridiction exclusive des tribunaux de l'Ontario." },
        { heading: "9. Modifications des conditions", body: "Nous nous réservons le droit de modifier ces Conditions d'utilisation à tout moment. Les modifications prendront effet immédiatement après leur publication sur le site." },
        { heading: "10. Nous contacter", body: "Pour toute question, contactez-nous à : Hippowize Inc., Toronto, Ontario, Canada. E-mail : legal@hippowize.com" },
      ],
    },
  },
};

// ─── Spanish ─────────────────────────────────────────────────────────────────
const es: T = {
  nav: {
    home: "Inicio", services: "Servicios", industry: "Industrias",
    stories: "Casos de éxito", whyUs: "Por qué nosotros", contact: "Contacto",
    careers: "Carreras", letsGo: "Hablemos",
  },
  servicesMega: [
    { category: "Asesoría", links: [
      { href: "/services/strategy-consulting",   label: "Consultoría Estratégica"  },
      { href: "/services/professional-services", label: "Servicios Profesionales"  },
    ]},
    { category: "Digital y Tecnología", links: [
      { href: "/services/digital-transformation", label: "Transformación Digital"  },
      { href: "/services/cybersecurity-grc",       label: "Ciberseguridad y GRC"   },
    ]},
    { category: "Personas y Capacidad", links: [
      { href: "/services/training-coaching", label: "Formación y Coaching" },
    ]},
  ],
  industryMega: [
    { category: "Tecnología y Servicios", links: [
      { href: "/industry/it-technology", label: "IT y Tecnología" },
    ]},
    { category: "Industrias Reguladas", links: [
      { href: "/industry/healthcare",         label: "Salud"                         },
      { href: "/industry/financial-services", label: "Servicios Financieros"         },
      { href: "/industry/government",         label: "Gobierno y Sector Público"     },
    ]},
    { category: "Energía e Industria", links: [
      { href: "/industry/energy-utilities", label: "Energía y Servicios Públicos"   },
      { href: "/industry/manufacturing",    label: "Manufactura y Supply Chain"      },
    ]},
  ],
  hero: [
    { src: "/media/2.mp4", eyebrow: "Estrategia · Tecnología · Personas",
      headline: "El futuro pertenece a las organizaciones\nque saben cómo transformarse",
      sub: "Potencie su visión con las soluciones innovadoras de Hippowize — a nivel global.",
      cta: "Explorar Servicios", href: "#services" },
    { src: "/media/3.mp4", eyebrow: "Consultoría Estratégica",
      headline: "Estrategia que convierte\nla ambición en resultados medibles",
      sub: "Del PMO al VMO — alineamos sus inversiones tecnológicas con valor empresarial duradero.",
      cta: "Nuestro enfoque", href: "#about" },
    { src: "/media/4.mp4", eyebrow: "Transformación Digital",
      headline: "Transformación digital\nentregada de extremo a extremo",
      sub: "ServiceNow, IA, Cloud y Automatización — por especialistas que permanecen hasta la ejecución.",
      cta: "Nuestros servicios", href: "#services" },
    { src: "/media/6.mp4", eyebrow: "Resiliencia Cibernética",
      headline: "Construyendo organizaciones\nciberresilientes en todo el mundo",
      sub: "Evaluación de amenazas, alineación GRC y monitoreo continuo — sin compromisos.",
      cta: "Más información", href: "#why-us" },
    { src: "/media/7.mp4", eyebrow: "200+ Proyectos · Todos los Sectores",
      headline: "De la visión a la ejecución —\nen todos los sectores",
      sub: "Hippowize se asocia con líderes en Canadá y globalmente para impulsar un cambio duradero.",
      cta: "Reservar llamada", href: "https://calendly.com/hippowize" },
  ],
  footer: {
    tagline: "Transformando organizaciones a través de la estrategia, la tecnología y las personas — construido en Canadá, al servicio del mundo.",
    servicesTitle: "Servicios", companyTitle: "Empresa", contactTitle: "Contáctenos",
    bookCall: "Reservar llamada", copyright: "Todos los derechos reservados.",
    privacy: "Política de privacidad", terms: "Términos de uso", location: "Toronto, Canadá",
  },
  legal: {
    privacy: {
      title: "Política de Privacidad",
      updated: "Última actualización: 8 de abril de 2026",
      sections: [
        { heading: "1. Introducción", body: "Hippowize Inc. ('nosotros', 'nuestro' o 'nos') se compromete a proteger su información personal. Esta Política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio hippowize.com o utiliza nuestros servicios de consultoría." },
        { heading: "2. Información que recopilamos", body: "Podemos recopilar información personal que usted proporciona voluntariamente, incluyendo nombre, correo electrónico, teléfono, empresa y cargo. También recopilamos automáticamente información técnica como dirección IP, tipo de navegador, sistema operativo y páginas visitadas." },
        { heading: "3. Cómo usamos su información", body: "Usamos la información recopilada para responder a sus consultas y prestar servicios, enviarle información sobre nuestros servicios, mejorar nuestro sitio, cumplir con obligaciones legales y proteger la seguridad de nuestras operaciones." },
        { heading: "4. Cookies", body: "Nuestro sitio web utiliza cookies y tecnologías de seguimiento similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y comprender de dónde provienen nuestros visitantes. Puede configurar su navegador para rechazar todas las cookies." },
        { heading: "5. Compartir su información", body: "No vendemos, intercambiamos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio, sujeto a acuerdos de confidencialidad." },
        { heading: "6. Retención de datos", body: "Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley exija un período de retención más largo." },
        { heading: "7. Sus derechos", body: "Según su ubicación, puede tener derecho a acceder, corregir o eliminar su información personal, retirar su consentimiento, oponerse al procesamiento y solicitar la portabilidad de datos. Contáctenos a privacy@hippowize.com." },
        { heading: "8. Seguridad", body: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción." },
        { heading: "9. Cambios a esta política", body: "Podemos actualizar esta Política de privacidad periódicamente. Le notificaremos de cualquier cambio publicando la nueva política en esta página con una fecha de vigencia actualizada." },
        { heading: "10. Contáctenos", body: "Para preguntas sobre esta Política de privacidad, contáctenos en: Hippowize Inc., Toronto, Ontario, Canadá. Correo: privacy@hippowize.com" },
      ],
    },
    terms: {
      title: "Términos de Uso",
      updated: "Última actualización: 8 de abril de 2026",
      sections: [
        { heading: "1. Aceptación de términos", body: "Al acceder y utilizar el sitio web de Hippowize (hippowize.com), acepta y acuerda estar sujeto a estos Términos de uso. Si no acepta estos términos, no utilice nuestro sitio web." },
        { heading: "2. Uso del sitio web", body: "Solo puede utilizar nuestro sitio web con fines legales. Acepta no utilizarlo de ninguna manera que viole las leyes aplicables, transmita contenido dañino, intente obtener acceso no autorizado o interfiera con el funcionamiento del sitio." },
        { heading: "3. Propiedad intelectual", body: "Todo el contenido de este sitio, incluyendo textos, gráficos, logotipos e imágenes, es propiedad de Hippowize Inc. y está protegido por las leyes de propiedad intelectual canadienses e internacionales. No puede reproducir el contenido sin permiso escrito." },
        { heading: "4. Servicios de consultoría", body: "La información en este sitio se proporciona solo con fines informativos generales y no constituye asesoramiento profesional. La contratación de servicios de consultoría de Hippowize está sujeta a acuerdos de servicio separados." },
        { heading: "5. Enlaces de terceros", body: "Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan solo para su comodidad. No tenemos control sobre el contenido de esos sitios y no aceptamos ninguna responsabilidad por ellos." },
        { heading: "6. Exclusión de garantías", body: "Este sitio web se proporciona 'tal como está' sin garantías de ningún tipo. No garantizamos que el sitio sea ininterrumpido, libre de errores o libre de virus u otros componentes dañinos." },
        { heading: "7. Limitación de responsabilidad", body: "En la medida máxima permitida por la ley, Hippowize Inc. no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja de su uso de este sitio web o nuestros servicios." },
        { heading: "8. Ley aplicable", body: "Estos Términos de uso se rigen por las leyes de la Provincia de Ontario y las leyes federales de Canadá. Cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de Ontario." },
        { heading: "9. Cambios a los términos", body: "Nos reservamos el derecho de modificar estos Términos de uso en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web." },
        { heading: "10. Contáctenos", body: "Para preguntas sobre estos Términos de uso, contáctenos en: Hippowize Inc., Toronto, Ontario, Canadá. Correo: legal@hippowize.com" },
      ],
    },
  },
};

// ─── Arabic ──────────────────────────────────────────────────────────────────
const ar: T = {
  nav: {
    home: "الرئيسية", services: "الخدمات", industry: "القطاعات",
    stories: "قصص النجاح", whyUs: "لماذا نحن", contact: "اتصل بنا",
    careers: "الوظائف", letsGo: "تحدث معنا",
  },
  servicesMega: [
    { category: "الاستشارة", links: [
      { href: "/services/strategy-consulting",   label: "الاستشارات الاستراتيجية"  },
      { href: "/services/professional-services", label: "الخدمات المهنية"           },
    ]},
    { category: "الرقمي والتقنية", links: [
      { href: "/services/digital-transformation", label: "التحول الرقمي"             },
      { href: "/services/cybersecurity-grc",       label: "الأمن السيبراني وحوكمة المخاطر" },
    ]},
    { category: "الأفراد والكفاءات", links: [
      { href: "/services/training-coaching", label: "التدريب والتوجيه" },
    ]},
  ],
  industryMega: [
    { category: "التكنولوجيا والخدمات", links: [
      { href: "/industry/it-technology", label: "تكنولوجيا المعلومات" },
    ]},
    { category: "القطاعات المنظمة", links: [
      { href: "/industry/healthcare",         label: "الرعاية الصحية"          },
      { href: "/industry/financial-services", label: "الخدمات المالية"         },
      { href: "/industry/government",         label: "الحكومة والقطاع العام"   },
    ]},
    { category: "الطاقة والصناعة", links: [
      { href: "/industry/energy-utilities", label: "الطاقة والمرافق"          },
      { href: "/industry/manufacturing",    label: "التصنيع وسلاسل الإمداد"   },
    ]},
  ],
  hero: [
    { src: "/media/2.mp4", eyebrow: "الاستراتيجية · التكنولوجيا · الناس",
      headline: "المستقبل للمنظمات\nالتي تعرف كيف تتحول",
      sub: "عزز رؤيتك مع حلول Hippowize التحويلية والمبتكرة — على مستوى العالم.",
      cta: "استكشف الخدمات", href: "#services" },
    { src: "/media/3.mp4", eyebrow: "الاستشارات الاستراتيجية",
      headline: "استراتيجية تحول\nالطموح إلى نتائج قابلة للقياس",
      sub: "من PMO إلى VMO — نوائم استثماراتك التقنية مع قيمة أعمال دائمة.",
      cta: "نهجنا", href: "#about" },
    { src: "/media/4.mp4", eyebrow: "التحول الرقمي",
      headline: "التحول الرقمي\nمن البداية إلى النهاية",
      sub: "ServiceNow والذكاء الاصطناعي والسحابة والأتمتة — من متخصصين يبقون حتى التنفيذ.",
      cta: "خدماتنا", href: "#services" },
    { src: "/media/6.mp4", eyebrow: "المرونة الإلكترونية",
      headline: "بناء منظمات مرنة إلكترونياً\nفي جميع أنحاء العالم",
      sub: "تقييم استباقي للتهديدات، ومواءمة GRC، ومراقبة مستمرة — دون تنازلات.",
      cta: "اعرف المزيد", href: "#why-us" },
    { src: "/media/7.mp4", eyebrow: "200+ مشروع · كل القطاعات",
      headline: "من الرؤية إلى التنفيذ —\nعبر كل القطاعات",
      sub: "تتشارك Hippowize مع قادة الصناعة في كندا وعالمياً لإحداث تغيير حقيقي ودائم.",
      cta: "احجز مكالمة", href: "https://calendly.com/hippowize" },
  ],
  footer: {
    tagline: "تحويل المنظمات من خلال الاستراتيجية والتكنولوجيا والناس — مبني في كندا، يخدم العالم.",
    servicesTitle: "الخدمات", companyTitle: "الشركة", contactTitle: "تواصل معنا",
    bookCall: "احجز مكالمة", copyright: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", location: "تورنتو، كندا",
  },
  legal: {
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: 8 أبريل 2026",
      sections: [
        { heading: "1. المقدمة", body: "تلتزم شركة Hippowize Inc. بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارة موقعنا hippowize.com أو التعامل مع خدماتنا الاستشارية." },
        { heading: "2. المعلومات التي نجمعها", body: "قد نجمع معلومات شخصية تقدمها طوعاً، بما فيها اسمك وعنوان بريدك الإلكتروني ورقم هاتفك واسم شركتك ومسمى وظيفتك. كما نجمع تلقائياً معلومات تقنية مثل عنوان IP ونوع المتصفح ونظام التشغيل والصفحات التي تزورها." },
        { heading: "3. كيف نستخدم معلوماتك", body: "نستخدم المعلومات التي نجمعها للرد على استفساراتك وتقديم الخدمات الاستشارية، وإرسال معلومات حول خدماتنا، وتحسين موقعنا وخدماتنا، والامتثال للالتزامات القانونية، وحماية أمن عملياتنا." },
        { heading: "4. ملفات تعريف الارتباط (Cookies)", body: "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة التصفح وتحليل حركة المرور. يمكنك تهيئة متصفحك لرفض جميع ملفات تعريف الارتباط." },
        { heading: "5. مشاركة معلوماتك", body: "لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مزودي خدمات موثوقين يساعدوننا في تشغيل موقعنا، وفق اتفاقيات سرية." },
        { heading: "6. الاحتفاظ بالبيانات", body: "نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض الموضحة في هذه السياسة، ما لم يتطلب القانون فترة احتفاظ أطول." },
        { heading: "7. حقوقك", body: "اعتماداً على موقعك، قد يحق لك الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها، وسحب موافقتك، والاعتراض على المعالجة، وطلب نقل البيانات. تواصل معنا على privacy@hippowize.com." },
        { heading: "8. الأمان", body: "نطبّق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف." },
        { heading: "9. التغييرات على هذه السياسة", body: "قد نحدّث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات بنشر السياسة الجديدة على هذه الصفحة مع تاريخ نفاذ محدّث." },
        { heading: "10. اتصل بنا", body: "لأي استفسارات حول سياسة الخصوصية هذه، تواصل معنا: Hippowize Inc.، تورنتو، أونتاريو، كندا. البريد الإلكتروني: privacy@hippowize.com" },
      ],
    },
    terms: {
      title: "شروط الاستخدام",
      updated: "آخر تحديث: 8 أبريل 2026",
      sections: [
        { heading: "1. قبول الشروط", body: "بالدخول إلى موقع Hippowize واستخدامه (hippowize.com)، فإنك تقبل وتوافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يُرجى عدم استخدام موقعنا." },
        { heading: "2. استخدام الموقع", body: "يمكنك استخدام موقعنا للأغراض القانونية فقط. توافق على عدم استخدامه بطريقة تنتهك القوانين المعمول بها، أو تنقل محتوى ضاراً، أو تحاول الوصول غير المصرح به، أو تتدخل في التشغيل السليم للموقع." },
        { heading: "3. الملكية الفكرية", body: "جميع المحتويات على هذا الموقع، بما فيها النصوص والرسومات والشعارات والصور، ملك لشركة Hippowize Inc. وتخضع لحماية قوانين الملكية الفكرية الكندية والدولية. لا يجوز إعادة إنتاج المحتوى دون إذن كتابي." },
        { heading: "4. خدمات الاستشارة", body: "المعلومات الواردة في هذا الموقع مقدمة لأغراض إعلامية عامة فقط ولا تشكل نصيحة استشارية مهنية. التعاقد مع خدمات استشارات Hippowize يخضع لاتفاقيات خدمة منفصلة." },
        { heading: "5. روابط الأطراف الثالثة", body: "قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لجهات خارجية. هذه الروابط مقدمة لراحتك فقط. لا نتحكم في محتوى تلك المواقع ولا نتحمل أي مسؤولية عنها." },
        { heading: "6. إخلاء مسؤولية الضمانات", body: "يُقدَّم هذا الموقع 'كما هو' دون أي ضمانات من أي نوع. لا نضمن أن يكون الموقع متاحاً بلا انقطاع أو خالياً من الأخطاء أو الفيروسات." },
        { heading: "7. تحديد المسؤولية", body: "بالقدر الأقصى المسموح به قانوناً، لن تكون Hippowize Inc. مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناشئة عن استخدامك لهذا الموقع أو خدماتنا." },
        { heading: "8. القانون الحاكم", body: "تخضع شروط الاستخدام هذه لقوانين مقاطعة أونتاريو والقوانين الفيدرالية الكندية المعمول بها. تخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم أونتاريو." },
        { heading: "9. تغييرات الشروط", body: "نحتفظ بالحق في تعديل شروط الاستخدام هذه في أي وقت. تسري التغييرات فور نشرها على الموقع. استمرارك في استخدام الموقع يُعدّ قبولاً للشروط الجديدة." },
        { heading: "10. اتصل بنا", body: "للاستفسارات حول شروط الاستخدام، تواصل معنا: Hippowize Inc.، تورنتو، أونتاريو، كندا. البريد الإلكتروني: legal@hippowize.com" },
      ],
    },
  },
};

// ─── Context ─────────────────────────────────────────────────────────────────
const translations: Record<Lang, T> = { en, fr, es, ar };

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: T }
const LangContext = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && ["en", "fr", "es", "ar"].includes(saved)) return saved;
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
