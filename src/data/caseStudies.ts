import caseFintechImg from "@/assets/case-fintech.jpg";
import caseAiDashboardImg from "@/assets/case-ai-dashboard.jpg";
import caseHealthcareImg from "@/assets/case-healthcare.jpg";
import caseEcommerceImg from "@/assets/case-ecommerce.jpg";
import cuentameHero from "@/assets/cuentame-hero.jpg"; // Tu imagen principal
import cuentamePersona from "@/assets/cuentame-persona.png";
import cuentameFlow from "@/assets/cuentame-flow.jpg";
import cuentameUi from "@/assets/cuentame-ui.png";

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  duration: string;
  role: string;
  team: string;
  overview: string;
  challenge: string;
  sections: CaseStudySection[];
  results: Result[];
  learnings: string[];
}

export interface CaseStudySection {
  title: string;
  type: 'text-image' | 'image-text' | 'full-image' | 'text-only' | 'gallery';
  content: string;
  image?: string;
  images?: string[];
  caption?: string;
}

export interface Result {
  metric: string;
  value: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cuentame-app", // Esta será tu url: /case-study/cuentame-app
    title: "Cuéntame: Salud Mental",
    tagline: "Mejorando el bienestar emocional de empleados a través de una app nativa",
    category: "Healthcare / Wellness",
    thumbnail: cuentameHero, // Usa la variable que importaste arriba
    heroImage: cuentameHero,
    duration: "4 meses",
    role: "Lead UX Designer",
    team: "1 PM, 2 Devs, Stakeholders Nestlé",
    overview: "En Cuéntame, identificamos la necesidad de mejorar el acceso a servicios de bienestar emocional para empleados de plantas industriales (como Nestlé), quienes enfrentaban barreras tecnológicas y de privacidad.",
    challenge: "Los datos mostraban una caída del 12% en usuarios activos (MAU). La plataforma web existente no era accesible para operarios sin computadora propia ni espacios privados.",
    sections: [
      {
        title: "El Problema y Contexto",
        type: "text-image",
        content: "Realizamos entrevistas en vivo en las plantas y descubrimos que la barrera principal no era el interés, sino el acceso. Los empleados no tenían laptops corporativas y usar la web en móviles era incómodo.",
        image: cuentamePersona,
        caption: "Sesiones de investigación con operarios de planta"
      },
      {
        title: "Ideación: La Cabina y la App",
        type: "image-text",
        content: "Diseñamos dos soluciones complementarias: una 'Cabina de Privacidad' física para las plantas y una Aplicación Móvil Nativa para facilitar el acceso a videos y videollamadas desde dispositivos personales.",
        image: cuentameFlow,
        caption: "User Flow de la nueva experiencia móvil"
      },
      {
        title: "Solución Final",
        type: "full-image",
        content: "La app nativa simplificó el agendamiento de citas y el consumo de contenido de bienestar. Se priorizó una interfaz limpia y empática para reducir la ansiedad del usuario.",
        image: cuentameUi,
        caption: "Pantallas finales de la aplicación iOS/Android"
      }
    ],
    results: [
      { metric: "Retención", value: "+30%", description: "Reducción en la tasa de abandono" },
      { metric: "Engagement", value: "↑ MAU", description: "Aumento significativo en usuarios activos" },
      { metric: "Adopción", value: "Alta", description: "Feedback positivo en facilidad de uso" }
    ],
    learnings: [
      "La tecnología debe adaptarse al contexto físico del usuario (planta vs oficina)",
      "La privacidad es el factor #1 en productos de salud mental",
      "Las soluciones híbridas (físico + digital) generan mayor confianza"
    ]
  },
  {
    id: "fintech-banking-app",
    title: "Reimagining Digital Banking",
    tagline: "A complete redesign of a mobile banking experience for 2M+ users",
    category: "Fintech",
    thumbnail: caseFintechImg,
    heroImage: caseFintechImg,
    duration: "6 months",
    role: "Lead UX Designer",
    team: "2 Designers, 4 Engineers, 1 PM",
    overview: "Led the complete redesign of a legacy banking application, focusing on simplifying complex financial operations while maintaining security and trust.",
    challenge: "Users were abandoning the app due to confusing navigation and overwhelming interfaces. The goal was to reduce friction while maintaining regulatory compliance.",
    sections: [
      {
        title: "Discovery & Research",
        type: "text-image",
        content: "Conducted 24 user interviews and analyzed 6 months of analytics data to identify pain points. Key findings revealed that 67% of users struggled with the transfer flow.",
        image: caseFintechImg,
        caption: "Affinity mapping session with research insights"
      },
      {
        title: "Defining the Problem",
        type: "image-text",
        content: "Created detailed personas and journey maps to visualize user frustrations. The main insight: users needed contextual guidance, not more features.",
        image: caseFintechImg,
        caption: "User journey map highlighting friction points"
      },
      {
        title: "Ideation & Wireframing",
        type: "gallery",
        content: "Explored 15+ concepts through rapid sketching sessions. Tested low-fidelity prototypes with 8 users to validate direction.",
        images: [caseFintechImg, caseFintechImg, caseFintechImg],
        caption: "Evolution from sketches to wireframes"
      },
      {
        title: "Final Design",
        type: "full-image",
        content: "The final solution introduced a streamlined dashboard with predictive actions and a simplified 3-step transfer flow.",
        image: caseFintechImg,
        caption: "High-fidelity mockups of the new banking experience"
      }
    ],
    results: [
      { metric: "Task Completion", value: "+45%", description: "Increase in successful transfers" },
      { metric: "Time on Task", value: "-60%", description: "Reduction in transfer completion time" },
      { metric: "NPS Score", value: "72", description: "Up from 34 pre-redesign" }
    ],
    learnings: [
      "Early and continuous user testing saved 3 weeks of development time",
      "Simplicity often requires more design iterations than complexity",
      "Cross-functional collaboration is essential for fintech products"
    ]
  },
  {
    id: "ai-dashboard",
    title: "AI-Powered Analytics Dashboard",
    tagline: "Making complex data accessible through intelligent insights",
    category: "Enterprise AI",
    thumbnail: caseAiDashboardImg,
    heroImage: caseAiDashboardImg,
    duration: "4 months",
    role: "Senior Product Designer",
    team: "3 Designers, 6 Engineers, 2 Data Scientists",
    overview: "Designed an enterprise analytics platform that leverages AI to surface actionable insights from complex datasets.",
    challenge: "Business analysts spent hours creating reports manually. We needed to automate insight generation while keeping users in control.",
    sections: [
      {
        title: "Understanding the Users",
        type: "text-image",
        content: "Shadowed 12 analysts over 2 weeks to understand their workflows. Discovered that 80% of their time was spent on repetitive data preparation tasks.",
        image: caseAiDashboardImg,
        caption: "Contextual inquiry session with data analyst"
      },
      {
        title: "Designing for AI",
        type: "image-text",
        content: "The key challenge was building trust in AI recommendations. We designed a transparency layer that explains how each insight was generated.",
        image: caseAiDashboardImg,
        caption: "AI explanation pattern exploration"
      },
      {
        title: "Component System",
        type: "full-image",
        content: "Built a comprehensive design system with 40+ data visualization components optimized for accessibility and performance.",
        image: caseAiDashboardImg,
        caption: "Data visualization component library"
      }
    ],
    results: [
      { metric: "Report Time", value: "-75%", description: "Reduction in report creation time" },
      { metric: "Adoption", value: "89%", description: "Active weekly users after 3 months" },
      { metric: "Accuracy", value: "94%", description: "AI insight relevance rating" }
    ],
    learnings: [
      "AI features need clear explanation to build user trust",
      "Progressive disclosure helps manage complexity",
      "Real-time collaboration features drove unexpected engagement"
    ]
  },
  {
    id: "healthcare-patient-portal",
    title: "Patient-Centered Healthcare Portal",
    tagline: "Empowering patients to manage their health journey",
    category: "Healthcare",
    thumbnail: caseHealthcareImg,
    heroImage: caseHealthcareImg,
    duration: "8 months",
    role: "UX Lead",
    team: "4 Designers, 8 Engineers, 2 PMs, Medical Advisors",
    overview: "Redesigned a patient portal serving 500K+ patients, focusing on accessibility, health literacy, and emotional design.",
    challenge: "Patients found medical information overwhelming and often missed important appointments or medication schedules.",
    sections: [
      {
        title: "Inclusive Research",
        type: "text-image",
        content: "Conducted research with diverse patient groups including elderly users and those with visual impairments. Accessibility was a core requirement from day one.",
        image: caseHealthcareImg,
        caption: "Accessibility testing with assistive technology users"
      },
      {
        title: "Health Literacy",
        type: "image-text",
        content: "Collaborated with medical writers to translate complex health information into plain language. Tested comprehension with users at various literacy levels.",
        image: caseHealthcareImg,
        caption: "Before and after of health information redesign"
      },
      {
        title: "Emotional Design",
        type: "full-image",
        content: "Healthcare interactions can be stressful. We designed calming visual patterns and supportive microcopy to reduce anxiety.",
        image: caseHealthcareImg,
        caption: "Appointment scheduling experience"
      }
    ],
    results: [
      { metric: "Appointments", value: "+32%", description: "Increase in kept appointments" },
      { metric: "Accessibility", value: "WCAG AA", description: "Full compliance achieved" },
      { metric: "Satisfaction", value: "4.8/5", description: "Patient satisfaction rating" }
    ],
    learnings: [
      "Designing for edge cases often improves the experience for everyone",
      "Emotional considerations are crucial in healthcare design",
      "Plain language is not dumbing down—it's inclusive design"
    ]
  },
  {
    id: "ecommerce-checkout",
    title: "Frictionless Checkout Experience",
    tagline: "Reducing cart abandonment through thoughtful design",
    category: "E-commerce",
    thumbnail: caseEcommerceImg,
    heroImage: caseEcommerceImg,
    duration: "3 months",
    role: "Product Designer",
    team: "2 Designers, 3 Engineers, 1 PM",
    overview: "Optimized the checkout flow for a retail platform processing $50M+ annually, focusing on reducing abandonment and increasing conversions.",
    challenge: "Cart abandonment rate was 78%. Competitive analysis showed our checkout required twice as many steps as industry leaders.",
    sections: [
      {
        title: "Competitive Analysis",
        type: "text-image",
        content: "Analyzed 20+ checkout experiences across industries. Identified best practices and opportunities for innovation.",
        image: caseEcommerceImg,
        caption: "Checkout flow comparison matrix"
      },
      {
        title: "A/B Testing Strategy",
        type: "image-text",
        content: "Designed and tested 12 variations of critical checkout elements. Data-driven decisions led to 8 significant improvements.",
        image: caseEcommerceImg,
        caption: "Heatmap analysis of form interactions"
      },
      {
        title: "Final Design",
        type: "full-image",
        content: "The new one-page checkout reduced steps from 5 to 1, with smart defaults and express payment options.",
        image: caseEcommerceImg,
        caption: "Optimized checkout experience"
      }
    ],
    results: [
      { metric: "Abandonment", value: "-34%", description: "Reduction in cart abandonment" },
      { metric: "Conversion", value: "+28%", description: "Increase in checkout completion" },
      { metric: "Revenue", value: "+$4.2M", description: "Additional annual revenue" }
    ],
    learnings: [
      "Every field removed is friction eliminated",
      "Trust signals significantly impact conversion",
      "Mobile optimization should never be an afterthought"
    ]
  }
];

export const getCaseStudy = (id: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.id === id);
};

export const getAdjacentCaseStudies = (currentId: string) => {
  const currentIndex = caseStudies.findIndex(cs => cs.id === currentId);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  return { prev, next };
};
