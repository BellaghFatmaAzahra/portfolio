export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      name: 'Bellagh Fatma',
      title: 'Passionnée par l\'IA et le développement web',
      subtitle: 'Étudiante en L3 Informatique, je me spécialise dans le développement d\'applications web modernes en alliant intelligence artificielle et bonnes pratiques de développement. Mon objectif : créer des solutions techniques performantes, intuitives et évolutives.',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      description: 'Passionnée par la convergence entre intelligence artificielle et développement web, je conçois des applications intelligentes avec une approche orientée performance, accessibilité et expérience utilisateur dès la phase de conception.',
      paragraph2: 'Actuellement en recherche active d\'un stage de fin d\'études, je souhaite mettre mes compétences au service de projets innovants en développement web, applications intelligentes ou plateformes numériques modernes.',
      downloadCV: 'Télécharger mon CV',
    },
    skills: {
      title: 'Compétences',
    },
    projects: {
      title: 'Projets',
    },
    experience: {
      title: 'Expérience',
    },
    contact: {
      title: 'Contact',
    },
    footer: {
      madeWith: 'Fait avec',
      by: 'par',
      rights: 'Tous droits réservés',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      name: 'Bellagh Fatma',
      title: 'AI & Web Development Enthusiast',
      subtitle: 'Third-year Computer Science Student, specializing in modern web application development by combining artificial intelligence and best development practices. My goal: to create technical solutions that are efficient, intuitive, and scalable.',
      cta: 'View my projects',
      contact: 'Contact me',
    },
    about: {
      title: 'About Me',
      description: 'Passionate about the convergence of artificial intelligence and web development, I design intelligent applications with a performance, accessibility, and user-experience-oriented approach from the conception phase.',
      paragraph2: 'Currently actively seeking a final year internship, I aim to apply my skills to innovative projects in web development, intelligent applications, or modern digital platforms.',
      downloadCV: 'Download my Resume',
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
    },
    experience: {
      title: 'Experience',
    },
    contact: {
      title: 'Contact',
    },
    footer: {
      madeWith: 'Made with',
      by: 'by',
      rights: 'All rights reserved',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'اتصل بي',
    },
    hero: {
      name: 'بلاغ فاطمة',
      title: 'مهتمة بالذكاء الاصطناعي وتطوير الويب',
      subtitle: 'طالبة في السنة الثالثة علوم الحاسوب، أتخصص في تطوير تطبيقات ويب حديثة من خلال الجمع بين الذكاء الاصطناعي وأفضل ممارسات التطوير. هدفي: إنشاء حلول تقنية فعالة وسهلة الاستخدام وقابلة للتطوير.',
      cta: 'عرض مشاريعي',
      contact: 'تواصل معي',
    },
    about: {
      title: 'نبذة عني',
      description: 'شغوفة بالتقارب بين الذكاء الاصطناعي وتطوير الويب، أقوم بتصميم تطبيقات ذكية مع التركيز على الأداء وسهولة الاستخدام وتجربة المستخدم منذ مرحلة التصميم.',
      paragraph2: 'أبحث حاليًا بنشاط عن تدريب نهاية الدراسات، وأطمح لتوظيف مهاراتي في مشاريع مبتكرة في تطوير الويب أو التطبيقات الذكية أو المنصات الرقمية الحديثة.',
      downloadCV: 'تحميل سيرتي الذاتية',
    },
    skills: {
      title: 'المهارات',
    },
    projects: {
      title: 'المشاريع',
    },
    experience: {
      title: 'الخبرة',
    },
    contact: {
      title: 'اتصل بي',
    },
    footer: {
      madeWith: 'صنع بـ',
      by: 'بواسطة',
      rights: 'جميع الحقوق محفوظة',
    },
  },
}

export const useTranslation = (language) => {
  return translations[language] || translations.fr
}
