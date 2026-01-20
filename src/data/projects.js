export const projectsData = [
  {
    id: 1,
    title: {
      fr: 'Moteur de recherche',
      en: 'Search Engine',
      ar: 'محرك البحث'
    },
    description: {
      fr: 'Développement d’un moteur de recherche basé sur TF-IDF et BM25 avec prétraitement des textes et gestion des exceptions. Participation active sur tous les modules.',
      en: 'Development of a search engine based on TF-IDF and BM25 with text preprocessing and exception handling. Active participation on all modules.',
      ar: 'تطوير محرك بحث يعتمد على TF-IDF و BM25 مع معالجة النصوص مسبقًا وإدارة الاستثناءات. مشاركة نشطة في جميع الوحدات.'
    },
    year: '2024-2025',
    technologies: ['Java', 'TF-IDF', 'BM25'],
    icon: 'search',
    link: 'https://github.com/BellaghFatmaAzahra/SearchEngine' // <-- si tu as un repo sinon laisse vide
  },
  {
    id: 2,
    title: {
      fr: 'Compilateur + Assembleur',
      en: 'Compiler + Assembler',
      ar: 'المترجم + المجمع'
    },
    description: {
      fr: 'Développement d’un compilateur simple avec génération de code assembleur et mise en œuvre d’un pipeline de compilation.',
      en: 'Development of a simple compiler with assembly code generation and implementation of a compilation pipeline.',
      ar: 'تطوير مترجم بسيط مع توليد كود التجميع وتنفيذ خط أنابيب التجميع.'
    },
    year: '2024-2025',
    technologies: ['C++', 'Assembleur'],
    icon: 'code',
    link: 'https://github.com/BellaghFatmaAzahra/MyCompiler'
  },
  {
    id: 3,
    title: {
      fr: 'Optimisation des ressources',
      en: 'Resource Optimization',
      ar: 'تحسين الموارد'
    },
    description: {
      fr: 'Programme orienté objet utilisant les graphes pour optimiser les ressources et calculer le plus court chemin entre différents points.',
      en: 'Object-oriented program using graphs to optimize resources and calculate the shortest path between different points.',
      ar: 'برنامج موجه للكائنات يستخدم الرسوم البيانية لتحسين الموارد وحساب أقصر مسار بين نقاط مختلفة.'
    },
    year: '2024-2025',
    technologies: ['C++', 'Graphes'],
    icon: 'project-diagram',
    link: 'https://github.com/BellaghFatmaAzahra/ShortestPathOptimization'
  },
  {
    id: 4,
    title: {
      fr: 'Système de monitoring client-serveur',
      en: 'Client-Server Monitoring System',
      ar: 'نظام مراقبة العميل والخادم'
    },
    description: {
      fr: 'Développement d’un système de surveillance réseau avec alertes automatiques (sondes) pour le suivi d’un site distant en architecture client-serveur.',
      en: 'Development of a network monitoring system with automatic alerts (probes) for remote site monitoring in client-server architecture.',
      ar: 'تطوير نظام مراقبة الشبكة مع تنبيهات تلقائية (مجسات) لمراقبة الموقع البعيد في بنية العميل والخادم.'
    },
    year: '2024-2025',
    technologies: ['Python', 'Client-Serveur', 'Networking'],
    icon: 'server',
    link: 'https://github.com/BellaghFatmaAzahra/ServerHealthMonitor'
  },
  {
    id: 5,
    title: {
      fr: 'CERI CAR – Covoiturage',
      en: 'CERI CAR – Carpooling Platform',
      ar: 'CERI CAR – منصة التشارك في السيارات'
    },
    description: {
      fr: 'Développement d’un site web de covoiturage avec gestion des utilisateurs, annonces, réservations et interactions dynamiques.',
      en: 'Development of a carpooling website with user management, listings, bookings and dynamic interactions.',
      ar: 'تطوير موقع لمشاركة السيارات مع إدارة المستخدمين والإعلانات والحجوزات والتفاعلات الديناميكية.'
    },
    year: '2025-2026',
    technologies: ['Yii', 'PHP', 'AJAX', 'PostgreSQL'],
    icon: 'server',
    link: 'https://github.com/BellaghFatmaAzahra/CeriCar'
  },
  {
    id: 6,
    title: {
      fr: 'NOVA – Plateforme de watch party',
      en: 'NOVA – Watch Party Platform',
      ar: 'NOVA – منصة مشاهدة جماعية'
    },
    description: {
      fr: 'Développement d’une application web de visionnage synchronisé en temps réel entre plusieurs utilisateurs.',
      en: 'Development of a web app for synchronized video watching in real-time between multiple users.',
      ar: 'تطوير تطبيق ويب لمشاهدة الفيديو بشكل متزامن في الوقت الحقيقي بين عدة مستخدمين.'
    },
    year: '2025-2026',
    technologies: ['Next.js', 'NestJS', 'WebSockets'],
    icon: 'monitor',
    link: 'https://github.com/NovaProjectIL/IL_PROJECT_NOVA'
  },
  {
    id: 7,
    title: {
      fr: 'Bayesian Networks – Génétique',
      en: 'Bayesian Networks – Genetics',
      ar: 'الشبكات البايزية – علم الوراثة'
    },
    description: {
      fr: 'Modélisation probabiliste avec réseaux bayésiens pour prédire la génétique familiale.',
      en: 'Probabilistic modeling with Bayesian networks to predict family genetics.',
      ar: 'نمذجة احتمالية باستخدام الشبكات البايزية لتوقع الوراثة العائلية.'
    },
    year: '2025-2026',
    technologies: ['Python', 'pgmpy'],
    icon: 'code',
    link: 'https://github.com/BellaghFatmaAzahra/BayesianNetworks_Genetics'
  },
  {
    id: 8,
    title: {
      fr: 'Reinforcement Learning – Q-learning',
      en: 'Reinforcement Learning – Q-learning',
      ar: 'التعلم التعزيزي – Q-learning'
    },
    description: {
      fr: 'Implémentation du Q-learning sur plusieurs environnements Gymnasium (FrozenLake, Taxi, CartPole).',
      en: 'Implementation of Q-learning on multiple Gymnasium environments (FrozenLake, Taxi, CartPole).',
      ar: 'تنفيذ Q-learning على بيئات Gymnasium متعددة (FrozenLake, Taxi, CartPole).'
    },
    year: '2025-2026',
    technologies: ['Python', 'Gymnasium', 'Reinforcement Learning'],
    icon: 'code',
    link: 'https://github.com/BellaghFatmaAzahra/ReinforcementLearning_Qlearning'
  },
  {
    id: 9,
    title: {
      fr: 'Unsupervised Amazon Clustering',
      en: 'Unsupervised Amazon Clustering',
      ar: 'تجميع غير مراقب لبيانات Amazon'
    },
    description: {
      fr: 'Clustering de reviews Amazon avec BOW et transformers, analyse de pureté et visualisation.',
      en: 'Clustering of Amazon reviews with BOW and transformers, purity analysis and visualization.',
      ar: 'تجميع مراجعات Amazon باستخدام BOW و transformers، تحليل النقاء والتصور.'
    },
    year: '2025-2026',
    technologies: ['Python', 'Clustering', 'NLP'],
    icon: 'project-diagram',
    link: 'https://github.com/BellaghFatmaAzahra/UnsupervisedAmazonClustering'
  },
  {
    id: 10,
    title: {
      fr: 'Supervised Medical Image Classification',
      en: 'Supervised Medical Image Classification',
      ar: 'تصنيف الصور الطبية بإشراف'
    },
    description: {
      fr: 'Classification d’images médicales avec apprentissage supervisé (CNN, prétraitement, évaluation).',
      en: 'Medical image classification with supervised learning (CNN, preprocessing, evaluation).',
      ar: 'تصنيف الصور الطبية باستخدام التعلم الخاضع للإشراف (CNN، المعالجة المسبقة، التقييم).'
    },
    year: '2025-2026',
    technologies: ['Python', 'CNN', 'Deep Learning'],
    icon: 'code',
      link: 'https://github.com/BellaghFatmaAzahra/SupervisedMedicalImageClassification'
  },
  {
    id: 11,
    title: {
      fr: 'Gestion de superette',
      en: 'Grocery Store Management',
      ar: 'إدارة متجر البقالة'
    },
    description: {
      fr: 'Application de bureau pour la gestion des produits, clients, fournisseurs et stocks.',
      en: 'Desktop application for managing products, customers, suppliers and inventory.',
      ar: 'تطبيق سطح المكتب لإدارة المنتجات والعملاء والموردين والمخزون.'
    },
    year: '2024-2025',
    technologies: ['Java', 'JavaFX', 'JDBC', 'PostgreSQL'],
    icon: 'desktop',
    link: 'https://github.com/BellaghFatmaAzahra/SuperetteManagementSystem'
  },
  {
    id: 12,
    title: {
      fr: 'Robot dessinateur',
      en: 'Drawing Robot',
      ar: 'روبوت الرسم'
    },
    description: {
      fr: 'Conception d’un robot capable de tracer des formes programmées. Utilisation d’Arduino, moteurs pas à pas et logique embarquée.',
      en: 'Design of a robot capable of drawing programmed shapes using Arduino, stepper motors and embedded logic.',
      ar: 'تصميم روبوت قادر على رسم أشكال مبرمجة باستخدام Arduino ومحركات السائر والمنطق المضمن.'
    },
    year: '2023-2024',
    technologies: ['Arduino', 'Stepper Motors', 'Embedded'],
    icon: 'robot',
    link: 'https://github.com/BellaghFatmaAzahra/RobotDessinateurArduino'
  }
]
