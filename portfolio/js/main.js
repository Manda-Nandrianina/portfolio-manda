/**
 * MAIN.JS - Portfolio Premium
 * Auteur: Manda Nandrianina
 * Description: Logique complète (multilingue, chat, animations, etc.)
 */

// ========================================
// ATTENDRE QUE LE DOM SOIT CHARGÉ
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAnimations();
    initMobileMenu();
    initChatbot();
    initContactForm();
    initHeaderScroll();
    initMagneticButtons();
    initProjectFilters();
    initLightbox();
});

// ========================================
// SYSTÈME MULTILINGUE
// ========================================
const translations = {
    fr: {
        // Navigation
        'logo': 'M.',
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.services': 'Services',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.tag': 'Creative Developer',
        'hero.title': 'Créateur d\'expériences <span>digitales premium</span>',
        'hero.desc': 'Je transforme vos idées en expériences interactives mémorables avec des animations avancées et un design d\'exception.',
        'hero.cta.portfolio': 'Voir mon travail',
        'hero.cta.contact': 'Me contacter',
        'hero.scroll': 'Découvrir',
        
        // Services
        'services.tag': 'Mon expertise',
        'services.title': 'Services <span>premium</span>',
        'services.items.dev.title': 'Développement créatif',
        'services.items.dev.desc': 'Sites web interactifs avec animations avancées et expériences utilisateur premium.',
        'services.items.design.title': 'Design d\'interface',
        'services.items.design.desc': 'UI/UX design sophistiqué avec attention aux détails et hiérarchie visuelle.',
        'services.items.consulting.title': 'Consulting digital',
        'services.items.consulting.desc': 'Stratégie digitale et conseil en expérience utilisateur pour vos projets.',
        
        // Projets
        'projects.tag': 'Portfolio',
        'projects.title': 'Projets <span>récents</span>',
        'projects.seeMore': 'Voir le projet →',
        'projects.allProjects': 'Tous les projets',
        'projects.items.project1.title': 'Agency Platform',
        'projects.items.project1.desc': 'Plateforme interactive pour agence digitale avec animations avancées.',
        'projects.items.project2.title': 'E-commerce Luxe',
        'projects.items.project2.desc': 'Site e-commerce premium avec expérience d\'achat immersive.',
        'projects.items.project3.title': 'Portfolio Créatif',
        'projects.items.project3.desc': 'Portfolio interactif pour photographe avec transitions fluides.',
        
        // Timeline - CORRIGÉ : clés exactes correspondant au HTML
        'timeline.tag': 'Parcours',
        'timeline.title': 'Expérience <span>professionnelle</span>',
        'timeline.items.1.year': '2026 - Présent',
        'timeline.items.1.title': 'Senior Frontend Engineer',
        'timeline.items.1.desc': 'Création d\'expériences web premium pour clients internationaux, intégration de solutions frontend sur mesure et supervision de projets digitaux complexes. Mentor pour les jeunes développeurs et garant de la qualité et de l\'esthétique des interfaces utilisateurs.',
        'timeline.items.2.year': '2023 - 2025',
        'timeline.items.2.title': 'Creative Developer',
        'timeline.items.2.desc': 'Développement d\'interfaces web interactives et dynamiques avec animations avancées et effets visuels engageants. Optimisation de la performance et de la compatibilité cross-browser, tout en respectant les standards modernes du web.',
        'timeline.items.3.year': '2022',
        'timeline.items.3.title': 'UI/UX Designer',
        'timeline.items.3.desc': 'Conception et design d\'interfaces digitales premium, en mettant l\'accent sur l\'expérience utilisateur et l\'ergonomie. Collaboration avec des équipes multidisciplinaires pour transformer des idées complexes en interfaces intuitives, modernes et esthétiquement attrayantes.',
        
        // Footer
        'footer.desc': 'Créateur d\'expériences digitales premium basé à Madagascar.',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.rights': 'Tous droits réservés.',
        
        // Chat
        'chat.welcome': 'Bonjour ! Comment puis-je vous aider ?',
        'chat.placeholder': 'Votre message...',
        
        // About Page
        'about.title': 'À propos <span>de moi</span>',
        'about.name': 'Manda Nandrianina',
        'about.role': 'Senior Frontend Engineer & Creative Developer',
        'about.bio.p1': 'Basé à Madagascar, je crée des expériences digitales premium pour des clients internationaux depuis 2022. Ma passion est de combiner design sophistiqué et animations avancées pour créer des sites web mémorables.',
        'about.bio.p2': 'Diplômé en design interactif, j\'ai travaillé avec des agences digitales à travers le monde, développant une expertise en architecture frontend propre et expériences utilisateur premium.',
        'about.bio.p3': 'Je crois que chaque détail compte - c\'est pourquoi je m\'attache à livrer un travail méticuleux qui dépasse les attentes.',
        'about.stats.years': 'Années d\'expérience',
        'about.stats.projects': 'Projets réalisés',
        'about.stats.clients': 'Clients satisfaits',
        
        // Skills
        'skills.tag': 'Expertise',
        'skills.title': 'Mes <span>compétences</span>',
        'skills.categories.frontend': 'Frontend',
        'skills.categories.design': 'Design',
        'skills.categories.tools': 'Outils',
        
        // Services Page
        'servicesPage.title': 'Mes <span>services</span>',
        'servicesPage.dev.title': 'Développement créatif',
        'servicesPage.dev.desc': 'Création de sites web interactifs avec animations avancées, transitions fluides et expériences immersives.',
        'servicesPage.dev.item1': 'Sites vitrines premium',
        'servicesPage.dev.item2': 'Applications web interactives',
        'servicesPage.dev.item3': 'Animations sur mesure',
        'servicesPage.dev.item4': 'Optimisation performance',
        'servicesPage.design.title': 'Design d\'interface',
        'servicesPage.design.desc': 'Conception d\'interfaces utilisateur sophistiquées avec une attention méticuleuse aux détails.',
        'servicesPage.design.item1': 'UI/UX design',
        'servicesPage.design.item2': 'Prototypage interactif',
        'servicesPage.design.item3': 'Design systems',
        'servicesPage.design.item4': 'Audit d\'expérience',
        'servicesPage.consulting.title': 'Consulting digital',
        'servicesPage.consulting.desc': 'Accompagnement stratégique pour vos projets digitaux.',
        'servicesPage.consulting.item1': 'Stratégie digitale',
        'servicesPage.consulting.item2': 'Conseil technique',
        'servicesPage.consulting.item3': 'Formation équipe',
        'servicesPage.consulting.item4': 'Revue de code',
        'servicesPage.startingFrom': 'À partir de',
        'servicesPage.cta.title': 'Prêt à concrétiser votre projet ?',
        'servicesPage.cta.desc': 'Discutons de vos besoins et créons ensemble quelque chose d\'exceptionnel.',
        'servicesPage.cta.button': 'Me contacter',
        
        // Projects Page
        'projectsPage.title': 'Mes <span>projets</span>',
        'projectsPage.filters.all': 'Tous',
        'projectsPage.filters.web': 'Sites web',
        'projectsPage.filters.app': 'Applications',
        'projectsPage.filters.design': 'Design',
        'projectsPage.seeProject': 'Voir le projet',
        'projectsPage.items.project1.title': 'Agency Platform',
        'projectsPage.items.project1.category': 'Site web',
        'projectsPage.items.project2.title': 'TaskFlow App',
        'projectsPage.items.project2.category': 'Application',
        'projectsPage.items.project3.title': 'Luxury Brand',
        'projectsPage.items.project3.category': 'Design',
        'projectsPage.items.project4.title': 'E-commerce Luxe',
        'projectsPage.items.project4.category': 'Site web',
        'projectsPage.items.project5.title': 'Weather Dashboard',
        'projectsPage.items.project5.category': 'Application',
        'projectsPage.items.project6.title': 'Portfolio Créatif',
        'projectsPage.items.project6.category': 'Design',
        
        // Contact Page
        'contactPage.title': 'Me <span>contacter</span>',
        'contactPage.info.title': 'Informations de contact',
        'contactPage.info.phone': 'Téléphone / WhatsApp',
        'contactPage.info.email': 'Email',
        'contactPage.form.title': 'Envoyez-moi un message',
        'contactPage.form.name': 'Nom complet',
        'contactPage.form.email': 'Email',
        'contactPage.form.subject': 'Sujet',
        'contactPage.form.message': 'Message',
        'contactPage.form.submit': 'Envoyer le message'
    },
    
    en: {
        // Navigation
        'logo': 'M.',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.tag': 'Creative Developer',
        'hero.title': 'Creator of <span>premium digital</span> experiences',
        'hero.desc': 'I transform your ideas into memorable interactive experiences with advanced animations and exceptional design.',
        'hero.cta.portfolio': 'View my work',
        'hero.cta.contact': 'Contact me',
        'hero.scroll': 'Discover',
        
        // Services
        'services.tag': 'My expertise',
        'services.title': '<span>Premium</span> services',
        'services.items.dev.title': 'Creative Development',
        'services.items.dev.desc': 'Interactive websites with advanced animations and premium user experiences.',
        'services.items.design.title': 'Interface Design',
        'services.items.design.desc': 'Sophisticated UI/UX design with attention to details and visual hierarchy.',
        'services.items.consulting.title': 'Digital Consulting',
        'services.items.consulting.desc': 'Digital strategy and user experience consulting for your projects.',
        
        // Projets
        'projects.tag': 'Portfolio',
        'projects.title': '<span>Recent</span> projects',
        'projects.seeMore': 'View project →',
        'projects.allProjects': 'All projects',
        'projects.items.project1.title': 'Agency Platform',
        'projects.items.project1.desc': 'Interactive platform for digital agency with advanced animations.',
        'projects.items.project2.title': 'Luxury E-commerce',
        'projects.items.project2.desc': 'Premium e-commerce site with immersive shopping experience.',
        'projects.items.project3.title': 'Creative Portfolio',
        'projects.items.project3.desc': 'Interactive portfolio for photographer with smooth transitions.',
        
        // Timeline - CORRIGÉ : clés exactes correspondant au HTML
        'timeline.tag': 'Journey',
        'timeline.title': '<span>Professional</span> experience',
        'timeline.items.1.year': '2026 - Present',
        'timeline.items.1.title': 'Senior Frontend Engineer',
        'timeline.items.1.desc': 'Creation of premium web experiences for international clients, integration of custom frontend solutions and supervision of complex digital projects. Mentor for junior developers and guarantor of quality and aesthetics of user interfaces.',
        'timeline.items.2.year': '2023 - 2025',
        'timeline.items.2.title': 'Creative Developer',
        'timeline.items.2.desc': 'Development of interactive and dynamic web interfaces with advanced animations and engaging visual effects. Performance optimization and cross-browser compatibility, while respecting modern web standards.',
        'timeline.items.3.year': '2022',
        'timeline.items.3.title': 'UI/UX Designer',
        'timeline.items.3.desc': 'Design of premium digital interfaces, focusing on user experience and ergonomics. Collaboration with multidisciplinary teams to transform complex ideas into intuitive, modern and aesthetically appealing interfaces.',
        
        // Footer
        'footer.desc': 'Creator of premium digital experiences based in Madagascar.',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        
        // Chat
        'chat.welcome': 'Hello! How can I help you?',
        'chat.placeholder': 'Your message...',
        
        // About Page
        'about.title': '<span>About</span> me',
        'about.name': 'Manda Nandrianina',
        'about.role': 'Senior Frontend Engineer & Creative Developer',
        'about.bio.p1': 'Based in Madagascar, I create premium digital experiences for international clients since 2022. My passion is to combine sophisticated design and advanced animations to create memorable websites.',
        'about.bio.p2': 'Graduated in interactive design, I have worked with digital agencies around the world, developing expertise in clean frontend architecture and premium user experiences.',
        'about.bio.p3': 'I believe every detail matters - that\'s why I strive to deliver meticulous work that exceeds expectations.',
        'about.stats.years': 'Years experience',
        'about.stats.projects': 'Projects completed',
        'about.stats.clients': 'Happy clients',
        
        // Skills
        'skills.tag': 'Expertise',
        'skills.title': 'My <span>skills</span>',
        'skills.categories.frontend': 'Frontend',
        'skills.categories.design': 'Design',
        'skills.categories.tools': 'Tools',
        
        // Services Page
        'servicesPage.title': 'My <span>services</span>',
        'servicesPage.dev.title': 'Creative Development',
        'servicesPage.dev.desc': 'Creation of interactive websites with advanced animations, smooth transitions and immersive experiences.',
        'servicesPage.dev.item1': 'Premium showcase sites',
        'servicesPage.dev.item2': 'Interactive web applications',
        'servicesPage.dev.item3': 'Custom animations',
        'servicesPage.dev.item4': 'Performance optimization',
        'servicesPage.design.title': 'Interface Design',
        'servicesPage.design.desc': 'Design of sophisticated user interfaces with meticulous attention to details.',
        'servicesPage.design.item1': 'UI/UX design',
        'servicesPage.design.item2': 'Interactive prototyping',
        'servicesPage.design.item3': 'Design systems',
        'servicesPage.design.item4': 'Experience audit',
        'servicesPage.consulting.title': 'Digital Consulting',
        'servicesPage.consulting.desc': 'Strategic support for your digital projects.',
        'servicesPage.consulting.item1': 'Digital strategy',
        'servicesPage.consulting.item2': 'Technical consulting',
        'servicesPage.consulting.item3': 'Team training',
        'servicesPage.consulting.item4': 'Code review',
        'servicesPage.startingFrom': 'Starting from',
        'servicesPage.cta.title': 'Ready to start your project?',
        'servicesPage.cta.desc': 'Let\'s discuss your needs and create something exceptional together.',
        'servicesPage.cta.button': 'Contact me',
        
        // Projects Page
        'projectsPage.title': 'My <span>projects</span>',
        'projectsPage.filters.all': 'All',
        'projectsPage.filters.web': 'Websites',
        'projectsPage.filters.app': 'Applications',
        'projectsPage.filters.design': 'Design',
        'projectsPage.seeProject': 'View project',
        'projectsPage.items.project1.title': 'Agency Platform',
        'projectsPage.items.project1.category': 'Website',
        'projectsPage.items.project2.title': 'TaskFlow App',
        'projectsPage.items.project2.category': 'Application',
        'projectsPage.items.project3.title': 'Luxury Brand',
        'projectsPage.items.project3.category': 'Design',
        'projectsPage.items.project4.title': 'Luxury E-commerce',
        'projectsPage.items.project4.category': 'Website',
        'projectsPage.items.project5.title': 'Weather Dashboard',
        'projectsPage.items.project5.category': 'Application',
        'projectsPage.items.project6.title': 'Creative Portfolio',
        'projectsPage.items.project6.category': 'Design',
        
        // Contact Page
        'contactPage.title': '<span>Contact</span> me',
        'contactPage.info.title': 'Contact information',
        'contactPage.info.phone': 'Phone / WhatsApp',
        'contactPage.info.email': 'Email',
        'contactPage.form.title': 'Send me a message',
        'contactPage.form.name': 'Full name',
        'contactPage.form.email': 'Email',
        'contactPage.form.subject': 'Subject',
        'contactPage.form.message': 'Message',
        'contactPage.form.submit': 'Send message'
    },
    
    mg: {
        // Navigation
        'logo': 'M.',
        'nav.home': 'Fandraisana',
        'nav.about': 'Momba ahy',
        'nav.services': 'Asa atolotra',
        'nav.projects': 'Tetikasa',
        'nav.contact': 'Hifandray',
        
        // Hero
        'hero.tag': 'Creative Developer',
        'hero.title': 'Mamorona <span>traikefa nomerika</span> miavaka',
        'hero.desc': 'Mamadika ny hevitrao ho traikefa ifanakalozan-kevitra mahatsiarovana aho miaraka amin\'ny animation avo lenta sy design miavaka.',
        'hero.cta.portfolio': 'Jereo ny asako',
        'hero.cta.contact': 'Hifandray amiko',
        'hero.scroll': 'Hahita',
        
        // Services
        'services.tag': 'Ny fahaizako',
        'services.title': '<span>Asa</span> atolotra',
        'services.items.dev.title': 'Fampandrosoana mamorona',
        'services.items.dev.desc': 'Tranonkala ifanakalozan-kevitra miaraka amin\'ny animation avo lenta sy traikefa premium.',
        'services.items.design.title': 'Famolavolana interface',
        'services.items.design.desc': 'UI/UX design be pitsiny miaraka amin\'ny fiheverana ny antsipiriany.',
        'services.items.consulting.title': 'Consulting nomerika',
        'services.items.consulting.desc': 'Paikady nomerika sy torohevitra momba ny traikefa ho an\'ny tetikasanao.',
        
        // Projets
        'projects.tag': 'Portfolio',
        'projects.title': '<span>Tetikasa</span> vao haingana',
        'projects.seeMore': 'Jereo ny tetikasa →',
        'projects.allProjects': 'Tetikasa rehetra',
        'projects.items.project1.title': 'Agency Platform',
        'projects.items.project1.desc': 'Plateforme ifanakalozan-kevitra ho an\'ny agence nomerika.',
        'projects.items.project2.title': 'E-commerce Lauxe',
        'projects.items.project2.desc': 'Tranonkala e-commerce premium miaraka amin\'ny traikefa fiantsenana.',
        'projects.items.project3.title': 'Portfolio Creative',
        'projects.items.project3.desc': 'Portfolio ifanakalozan-kevitra ho an\'ny mpaka sary.',
        
        // Timeline - CORRIGÉ : clés exactes correspondant au HTML
        'timeline.tag': 'Lalana',
        'timeline.title': '<span>Traikefa</span> matihanina',
        'timeline.items.1.year': '2026 - Ankehitriny',
        'timeline.items.1.title': 'Injeniera Senior Frontend',
        'timeline.items.1.desc': 'Famoronana traikefa web premium ho an\'ny mpanjifa iraisam-pirenena, fampidirana vahaolana frontend manokana ary fanaraha-maso tetikasa nomerika sarotra. Mpanoro hevitra ho an\'ny mpandrafitra tanora ary mpiantoka ny kalitao sy ny hakanton\'ny interface mpampiasa.',
        'timeline.items.2.year': '2023 - 2025',
        'timeline.items.2.title': 'Mpamorona Creative Developer',
        'timeline.items.2.desc': 'Fampandrosoana interface web ifanakalozan-kevitra sy mavitrika miaraka amin\'ny animation avo lenta sy vokatra hita maso mahasarika. Fanatsarana ny zotra sy ny fifanarahana amin\'ny navigateur rehetra, sady manaraka ny fenitra maoderina amin\'ny web.',
        'timeline.items.3.year': '2022',
        'timeline.items.3.title': 'Mpamolavola UI/UX',
        'timeline.items.3.desc': 'Famolavolana interface nomerika premium, miompana amin\'ny traikefa mpampiasa sy ny ergonomie. Fiaraha-miasa amin\'ny ekipa maro karazana mba hamadika hevitra sarotra ho interface tsotra, maoderina ary mahafinaritra ny mijery.',
        
        // Footer
        'footer.desc': 'Mpamorona traikefa nomerika premium monina eto Madagasikara.',
        'footer.navigation': 'Fizahana',
        'footer.contact': 'Hifandray',
        'footer.rights': 'Zo rehetra voatokana.',
        
        // Chat
        'chat.welcome': 'Salama! Ahoana no ahafahako manampy anao?',
        'chat.placeholder': 'Hafatrao...',
        
        // About Page
        'about.title': '<span>Momba</span> ahy',
        'about.name': 'Manda Nandrianina',
        'about.role': 'Injeniera Senior Frontend & Mpamorona Creative',
        'about.bio.p1': 'Monina eto Madagasikara, mamorona traikefa nomerika premium ho an\'ny mpanjifa iraisam-pirenena aho hatramin\'ny 2022. Ny fitiavako dia ny manambatra design sy animation avo lenta mba hamoronana tranonkala tsy hay hadinoina.',
        'about.bio.p2': 'Nahazo diplaoma tamin\'ny design interactif aho, niara-niasa tamin\'ny agence nomerika manerana izao tontolo izao, namolavola fahaizana amin\'ny architecture frontend sy traikefa mpampiasa premium.',
        'about.bio.p3': 'Mino aho fa ny antsipiriany rehetra dia zava-dehibe - izany no mahatonga ahy hiezaka hanatitra asa tsara lavitra noho izay andrasana.',
        'about.stats.years': 'Taona niainana',
        'about.stats.projects': 'Tetikasa vita',
        'about.stats.clients': 'Mpanjifa faly',
        
        // Skills
        'skills.tag': 'Fahaizana',
        'skills.title': 'Ny <span>fahaizako</span>',
        'skills.categories.frontend': 'Frontend',
        'skills.categories.design': 'Design',
        'skills.categories.tools': 'Fitaovana',
        
        // Services Page
        'servicesPage.title': 'Ny <span>asako</span>',
        'servicesPage.dev.title': 'Fampandrosoana mamorona',
        'servicesPage.dev.desc': 'Famoronana tranonkala ifanakalozan-kevitra miaraka amin\'ny animation avo lenta sy traikefa mahavariana.',
        'servicesPage.dev.item1': 'Tranonkala premium',
        'servicesPage.dev.item2': 'Rindranasa web ifanakalozan-kevitra',
        'servicesPage.dev.item3': 'Animation namboarina',
        'servicesPage.dev.item4': 'Fanatsarana ny performance',
        'servicesPage.design.title': 'Famolavolana interface',
        'servicesPage.design.desc': 'Famolavolana interface mpampiasa be pitsiny miaraka amin\'ny fiheverana ny antsipiriany.',
        'servicesPage.design.item1': 'UI/UX design',
        'servicesPage.design.item2': 'Prototypage ifanakalozan-kevitra',
        'servicesPage.design.item3': 'Design systems',
        'servicesPage.design.item4': 'Fanamarinana traikefa',
        'servicesPage.consulting.title': 'Consulting nomerika',
        'servicesPage.consulting.desc': 'Fanohanana stratejika ho an\'ny tetikasanao nomerika.',
        'servicesPage.consulting.item1': 'Paikady nomerika',
        'servicesPage.consulting.item2': 'Torohevitra teknika',
        'servicesPage.consulting.item3': 'Fiofanana ekipa',
        'servicesPage.consulting.item4': 'Fanamarinana code',
        'servicesPage.startingFrom': 'Manomboka amin\'ny',
        'servicesPage.cta.title': 'Vonona ny hanomboka ny tetikasanao?',
        'servicesPage.cta.desc': 'Andao hiresaka momba ny filanao ary hamorona zavatra miavaka miaraka.',
        'servicesPage.cta.button': 'Hifandray amiko',
        
        // Projects Page
        'projectsPage.title': 'Ny <span>tetikasako</span>',
        'projectsPage.filters.all': 'Rehetra',
        'projectsPage.filters.web': 'Tranonkala',
        'projectsPage.filters.app': 'Rindranasa',
        'projectsPage.filters.design': 'Design',
        'projectsPage.seeProject': 'Jereo ny tetikasa',
        'projectsPage.items.project1.title': 'Agency Platform',
        'projectsPage.items.project1.category': 'Tranonkala',
        'projectsPage.items.project2.title': 'TaskFlow App',
        'projectsPage.items.project2.category': 'Rindranasa',
        'projectsPage.items.project3.title': 'Luxury Brand',
        'projectsPage.items.project3.category': 'Design',
        'projectsPage.items.project4.title': 'E-commerce Luxe',
        'projectsPage.items.project4.category': 'Tranonkala',
        'projectsPage.items.project5.title': 'Weather Dashboard',
        'projectsPage.items.project5.category': 'Rindranasa',
        'projectsPage.items.project6.title': 'Portfolio Creative',
        'projectsPage.items.project6.category': 'Design',
        
        // Contact Page
        'contactPage.title': '<span>Hifandray</span> amiko',
        'contactPage.info.title': 'Momba ny fifandraisana',
        'contactPage.info.phone': 'Telefaona / WhatsApp',
        'contactPage.info.email': 'Mailaka',
        'contactPage.form.title': 'Mandefasa hafatra',
        'contactPage.form.name': 'Anarana feno',
        'contactPage.form.email': 'Mailaka',
        'contactPage.form.subject': 'Lohahevitra',
        'contactPage.form.message': 'Hafatra',
        'contactPage.form.submit': 'Mandefasa hafatra'
    }
};

// Variable globale pour la langue courante
let currentLang = 'fr';

// Initialisation du système multilingue
function initLanguage() {
    // Récupérer la langue sauvegardée ou utiliser le français par défaut
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Mettre à jour les boutons de langue
    updateLangButtons();
    
    // Appliquer la traduction initiale
    applyTranslations();
    
    // Ajouter les écouteurs d'événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            if (lang && translations[lang]) {
                currentLang = lang;
                localStorage.setItem('preferredLanguage', lang);
                updateLangButtons();
                applyTranslations();
            }
        });
    });
}

// Mettre à jour l'état actif des boutons de langue
function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Appliquer les traductions à tous les éléments
function applyTranslations() {
    // Traduire tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        } else {
            console.warn(`Traduction manquante pour: ${key} en ${currentLang}`);
        }
    });
    
    // Traduire les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// ========================================
// ANIMATIONS SCROLL REVEAL
// ========================================
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animation spéciale pour la timeline
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.animation = 'slideInRight 0.8s ease-out forwards';
                }
                
                // Animation pour les cartes de service
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.animation = 'scaleIn 0.6s ease-out forwards';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Animation pour les chiffres (stats)
    animateNumbers();
}

// Animation des chiffres
function animateNumbers() {
    const stats = document.querySelectorAll('.stat__number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        if (target.includes('+')) {
            const number = parseInt(target);
            animateValue(stat, 0, number, 2000);
        }
    });
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = Math.floor(end) + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// ========================================
// MENU MOBILE ANIMÉ
// ========================================
function initMobileMenu() {
    const burger = document.querySelector('.nav__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    
    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Animation du burger
            const spans = burger.querySelectorAll('span');
            if (burger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fermer le menu quand on clique sur un lien
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                const spans = burger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                const spans = burger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ajouter une classe quand on scrolle
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Cacher/afficher le header
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// BOUTONS MAGNÉTIQUES
// ========================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 10;
            const deltaY = (y - centerY) / 10;
            
            button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ========================================
// STRUCTURE DU CHATBOT (simplifiée)
// ========================================
let chatState = {
    step: 'language',
    selectedService: null,
    currentQuestionIndex: 0,
    answers: {},
    leadScore: 0,
    serviceData: null,
    subService: null
};

// Initialisation améliorée du chatbot
function initChatbot() {
    const toggleBtn = document.querySelector('.chatbot__toggle');
    const chatWindow = document.querySelector('.chatbot__window');
    const closeBtn = document.querySelector('.chatbot__close');
    const sendBtn = document.querySelector('#sendMessage');
    const chatInput = document.querySelector('#chatInput');
    const messagesContainer = document.querySelector('.chatbot__messages');
    
    if (!toggleBtn || !chatWindow) return;
    
    // Réinitialiser l'état au chargement
    resetChatState();
    
    // Ouvrir/fermer le chat
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            // Afficher le menu principal si c'est le début
            if (chatState.step === 'language') {
                showLanguageMenu();
            }
            chatInput.focus();
        }
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });
    }
    
    // Envoyer un message
    if (sendBtn && chatInput && messagesContainer) {
        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                handleUserInput(message);
                chatInput.value = '';
            }
        };
        
        sendBtn.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Réinitialiser l'état du chat
function resetChatState() {
    chatState = {
        step: 'language',
        selectedService: null,
        currentQuestionIndex: 0,
        answers: {},
        leadScore: 0,
        serviceData: null,
        subService: null
    };
}

// Afficher le menu de langue
function showLanguageMenu() {
    const messagesContainer = document.querySelector('.chatbot__messages');
    if (!messagesContainer) return;
    
    // Message de bienvenue
    addMessage("👋 Bienvenue ! / Welcome! / Tongasoa!", 'bot');
    
    // Boutons de langue
    const langButtons = [
        { lang: 'fr', label: 'Français', icon: '🇫🇷' },
        { lang: 'en', label: 'English', icon: '🇬🇧' },
        { lang: 'mg', label: 'Malagasy', icon: '🇲🇬' }
    ];
    
    const buttonsHtml = langButtons.map(btn => 
        `<button class="chat-btn lang-btn-chat" data-lang="${btn.lang}">${btn.icon} ${btn.label}</button>`
    ).join('');
    
    addMessageWithButtons("Choisissez votre langue / Choose your language / Safidio ny fiteninao:", 'bot', buttonsHtml);
    
    // Ajouter les événements aux boutons de langue
    setTimeout(() => {
        document.querySelectorAll('.lang-btn-chat').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                currentLang = lang;
                chatState.step = 'mainMenu';
                showMainMenu();
            });
        });
    }, 100);
}

// Afficher le menu principal
function showMainMenu() {
    const lang = currentLang;
    
    let title, subtitle;
    if (lang === 'fr') {
        title = "🎯 Que souhaitez-vous développer ?";
        subtitle = "Sélectionnez un service pour commencer";
    } else if (lang === 'en') {
        title = "🎯 What would you like to develop?";
        subtitle = "Select a service to start";
    } else {
        title = "🎯 Inona no tianao hovolavolaina?";
        subtitle = "Fidio ny asa tadiavinao hanombohana";
    }
    
    addMessage(title, 'bot');
    addMessage(subtitle, 'bot');
    
    // Menu principal avec boutons
    const menuButtons = [
        { id: 'website', icon: '🌐', fr: 'Création site web', en: 'Website creation', mg: 'Famoronana tranonkala' },
        { id: 'design', icon: '🎨', fr: 'Design & Branding', en: 'Design & Branding', mg: 'Design & Branding' },
        { id: 'video', icon: '🎬', fr: 'Montage vidéo', en: 'Video editing', mg: 'Montage vidéo' },
        { id: 'ads', icon: '📊', fr: 'Facebook Ads', en: 'Facebook Ads', mg: 'Facebook Ads' },
        { id: 'strategy', icon: '🚀', fr: 'Stratégie digitale complète', en: 'Complete digital strategy', mg: 'Paikady nomerika feno' },
        { id: 'quote', icon: '💰', fr: 'Demander un devis', en: 'Request a quote', mg: 'Mangataka tombantombana' }
    ];
    
    const buttonsHtml = menuButtons.map(btn => 
        `<button class="chat-btn service-btn" data-service="${btn.id}">${btn.icon} ${btn[lang]}</button>`
    ).join('');
    
    addMessageWithButtons('', 'bot', buttonsHtml);
    
    // Ajouter les événements aux boutons de service
    setTimeout(() => {
        document.querySelectorAll('.service-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const service = btn.dataset.service;
                if (service === 'quote') {
                    requestQuote();
                } else {
                    selectService(service);
                }
            });
        });
    }, 100);
}

// Sélectionner un service (simplifié)
function selectService(serviceId) {
    chatState.selectedService = serviceId;
    
    const lang = currentLang;
    
    let serviceTitle;
    if (lang === 'fr') {
        serviceTitle = serviceId === 'website' ? 'Création site web' :
                       serviceId === 'design' ? 'Design & Branding' :
                       serviceId === 'video' ? 'Montage vidéo' :
                       serviceId === 'ads' ? 'Facebook Ads' : 'Stratégie digitale';
    } else if (lang === 'en') {
        serviceTitle = serviceId === 'website' ? 'Website creation' :
                       serviceId === 'design' ? 'Design & Branding' :
                       serviceId === 'video' ? 'Video editing' :
                       serviceId === 'ads' ? 'Facebook Ads' : 'Digital strategy';
    } else {
        serviceTitle = serviceId === 'website' ? 'Famoronana tranonkala' :
                       serviceId === 'design' ? 'Design & Branding' :
                       serviceId === 'video' ? 'Montage vidéo' :
                       serviceId === 'ads' ? 'Facebook Ads' : 'Paikady nomerika';
    }
    
    addMessage(serviceTitle, 'bot');
    
    // Afficher un message et proposer de contacter
    setTimeout(() => {
        if (lang === 'fr') {
            addMessage("Excellent choix ! Pour discuter de votre projet en détail, je vous invite à me contacter directement.", 'bot');
        } else if (lang === 'en') {
            addMessage("Excellent choice! To discuss your project in detail, I invite you to contact me directly.", 'bot');
        } else {
            addMessage("Safidy tsara! Mba hiresaka momba ny tetikasanao amin'ny antsipiriany, manasa anao hifandray amiko mivantana aho.", 'bot');
        }
        
        showCallToAction();
    }, 500);
}

// Demander un devis direct
function requestQuote() {
    const lang = currentLang;
    
    if (lang === 'fr') {
        addMessage("💰 Pour établir un devis personnalisé, je vous invite à m'envoyer un email à arloderton@gmail.com avec les détails de votre projet.", 'bot');
    } else if (lang === 'en') {
        addMessage("💰 To provide a personalized quote, I invite you to send me an email at arloderton@gmail.com with your project details.", 'bot');
    } else {
        addMessage("💰 Mba hanomezana tombantombana manokana, manasa anao handefa mailaka any amin'ny arloderton@gmail.com miaraka amin'ny antsipirian'ny tetikasanao aho.", 'bot');
    }
    
    showCallToAction();
}

// Afficher les calls to action finaux
function showCallToAction() {
    const lang = currentLang;
    
    let title;
    if (lang === 'fr') {
        title = "🎯 Que souhaitez-vous faire maintenant ?";
    } else if (lang === 'en') {
        title = "🎯 What would you like to do now?";
    } else {
        title = "🎯 Inona no tianao hatao izao?";
    }
    
    addMessage(title, 'bot');
    
    const ctaButtons = [
        { id: 'call', icon: '📞', fr: 'Planifier un appel', en: 'Schedule a call', mg: 'Manomana antso' },
        { id: 'email', icon: '📧', fr: 'Envoyer un email', en: 'Send an email', mg: 'Mandefa mailaka' },
        { id: 'restart', icon: '🔄', fr: 'Recommencer', en: 'Restart', mg: 'Hanomboka indray' }
    ];
    
    const buttonsHtml = ctaButtons.map(btn => 
        `<button class="chat-btn cta-btn" data-cta="${btn.id}">${btn.icon} ${btn[lang]}</button>`
    ).join('');
    
    addMessageWithButtons('', 'bot', buttonsHtml);
    
    setTimeout(() => {
        document.querySelectorAll('.cta-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cta = btn.dataset.cta;
                handleCTA(cta);
            });
        });
    }, 100);
}

// Gérer les calls to action
function handleCTA(cta) {
    const lang = currentLang;
    
    switch(cta) {
        case 'call':
            if (lang === 'fr') {
                addMessage("📞 Vous pouvez me contacter par téléphone au +261 38 24 901 50 pour un appel direct.", 'bot');
            } else if (lang === 'en') {
                addMessage("📞 You can contact me by phone at +261 38 24 901 50 for a direct call.", 'bot');
            } else {
                addMessage("📞 Afaka mifandray amiko amin'ny telefaona +261 38 24 901 50 ianao ho an'ny antso mivantana.", 'bot');
            }
            break;
            
        case 'email':
            if (lang === 'fr') {
                addMessage("📧 Envoyez-moi un email à arloderton@gmail.com et je vous répondrai dans les 24h.", 'bot');
            } else if (lang === 'en') {
                addMessage("📧 Send me an email at arloderton@gmail.com and I'll respond within 24 hours.", 'bot');
            } else {
                addMessage("📧 Mandefasa mailaka any amin'ny arloderton@gmail.com aho ary hamaly ao anatin'ny 24 ora.", 'bot');
            }
            break;
            
        case 'restart':
            resetChatState();
            showLanguageMenu();
            break;
    }
}

// Fonction pour ajouter un message avec des boutons
function addMessageWithButtons(text, sender, buttonsHtml) {
    const messagesContainer = document.querySelector('.chatbot__messages');
    if (!messagesContainer) return;
    
    if (text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `message--${sender}`);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
    }
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('message', 'message--bot', 'message--buttons');
    buttonsDiv.innerHTML = buttonsHtml;
    messagesContainer.appendChild(buttonsDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Fonction pour ajouter un message simple
function addMessage(text, sender) {
    const messagesContainer = document.querySelector('.chatbot__messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `message--${sender}`);
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Gérer l'entrée utilisateur
function handleUserInput(message) {
    const lowerMessage = message.toLowerCase();
    const lang = currentLang;
    
    addMessage(message, 'user');
    
    setTimeout(() => {
        if (lowerMessage.includes('bonjour') || lowerMessage.includes('hello') || lowerMessage.includes('salama') || lowerMessage.includes('hi')) {
            if (lang === 'fr') {
                addMessage("Bonjour ! Comment puis-je vous aider avec votre projet digital aujourd'hui ?", 'bot');
            } else if (lang === 'en') {
                addMessage("Hello! How can I help you with your digital project today?", 'bot');
            } else {
                addMessage("Salama! Ahoana no ahafahako manampy anao amin'ny tetikasanao nomerika androany?", 'bot');
            }
            showMainMenu();
        } else {
            if (lang === 'fr') {
                addMessage("Merci pour votre message. Je vous invite à choisir une option dans le menu pour que je puisse mieux vous aider.", 'bot');
            } else if (lang === 'en') {
                addMessage("Thank you for your message. I invite you to choose an option from the menu so I can better help you.", 'bot');
            } else {
                addMessage("Misaotra anao tamin'ny hafatrao. Manasa anao hisafidy safidy ao amin'ny menu aho mba hahafahako manampy anao tsara kokoa.", 'bot');
            }
            showMainMenu();
        }
    }, 500);
}

// ========================================
// FORMULAIRE DE CONTACT AVEC VALIDATION
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les champs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Valider les champs
        let isValid = true;
        
        if (!name.value.trim()) {
            showError(name, currentLang === 'fr' ? 'Le nom est requis' : 
                           currentLang === 'en' ? 'Name is required' : 'Ilaina ny anarana');
            isValid = false;
        } else {
            removeError(name);
        }
        
        if (!email.value.trim()) {
            showError(email, currentLang === 'fr' ? 'L\'email est requis' : 
                            currentLang === 'en' ? 'Email is required' : 'Ilaina ny mailaka');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, currentLang === 'fr' ? 'Email invalide' : 
                            currentLang === 'en' ? 'Invalid email' : 'Mailaka tsy mety');
            isValid = false;
        } else {
            removeError(email);
        }
        
        if (!subject.value.trim()) {
            showError(subject, currentLang === 'fr' ? 'Le sujet est requis' : 
                              currentLang === 'en' ? 'Subject is required' : 'Ilaina ny lohahevitra');
            isValid = false;
        } else {
            removeError(subject);
        }
        
        if (!message.value.trim()) {
            showError(message, currentLang === 'fr' ? 'Le message est requis' : 
                               currentLang === 'en' ? 'Message is required' : 'Ilaina ny hafatra');
            isValid = false;
        } else {
            removeError(message);
        }
        
        // Si tout est valide
        if (isValid) {
            // Simuler l'envoi
            const submitBtn = form.querySelector('.form__submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 
                                   currentLang === 'en' ? 'Sending...' : 'Alefa...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Afficher un message de succès
                showFormMessage('success', 
                    currentLang === 'fr' ? 'Message envoyé avec succès !' :
                    currentLang === 'en' ? 'Message sent successfully!' :
                    'Tafa ny hafatra!'
                );
                
                // Réinitialiser le formulaire
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

// Validation email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Afficher une erreur
function showError(input, message) {
    const formGroup = input.closest('.form__group');
    if (!formGroup) return;
    
    // Supprimer l'erreur existante
    removeError(input);
    
    // Ajouter la classe d'erreur
    formGroup.classList.add('error');
    
    // Ajouter le message d'erreur
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

// Supprimer l'erreur
function removeError(input) {
    const formGroup = input.closest('.form__group');
    if (!formGroup) return;
    
    formGroup.classList.remove('error');
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Afficher un message du formulaire
function showFormMessage(type, text) {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('form-message', `form-message--${type}`);
    messageDiv.textContent = text;
    
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ========================================
// FILTRES DE PROJETS
// ========================================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length || !projects.length) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mettre à jour les boutons actifs
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filtrer les projets avec animation
            projects.forEach(project => {
                const category = project.dataset.category;
                
                if (filter === 'all' || filter === category) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// LIGHTBOX
// ========================================
function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".lightbox__close");
    
    if (!lightbox || !lightboxImg || !closeBtn) return;
    
    // Quand on clique sur une image
    document.querySelectorAll(".project-card__image img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
            document.body.style.overflow = "hidden";
        });
    });
    
    // Close button
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    });
    
    // Click à l'extérieur (background)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
}

// ========================================
// EFFETS DE HOVER AVANCÉS
// ========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ========================================
// TRANSITION FLUIDE ENTRE PAGES
// ========================================
// Préchargement des pages
document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('javascript')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Créer l'effet de transition
            const transition = document.createElement('div');
            transition.classList.add('page-transition');
            document.body.appendChild(transition);
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    }
});

// ========================================
// OBSERVER POUR ANIMATIONS AU SCROLL
// ========================================
// Observer pour les éléments avec animation au scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Animation spéciale pour les éléments de la timeline
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.animation = 'slideInRight 0.8s ease-out forwards';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .timeline-item, .skill-category').forEach(el => {
    observer.observe(el);
});

// ========================================
// GESTION DU THEME
// ========================================
// Ajouter la classe au body pour le thème sombre
document.body.classList.add('dark-theme');

// ========================================
// LAZY LOADING POUR LES IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// MISE À JOUR DU LIEN ACTIF DANS LA NAVIGATION
// ========================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Appeler la fonction au chargement
updateActiveNavLink();

// ========================================
// EFFET DE SURVOL SUR LES LIENS SOCIAUX
// ========================================
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const icon = link.querySelector('svg');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    });
    
    link.addEventListener('mouseleave', (e) => {
        const icon = link.querySelector('svg');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// ========================================
// MESSAGE DE BIENVENUE DANS LE CHAT
// ========================================
// Ajouter un message de bienvenue automatique après 10 secondes
setTimeout(() => {
    const chatWindow = document.querySelector('.chatbot__window');
    const messagesContainer = document.querySelector('.chatbot__messages');
    
    if (chatWindow && !chatWindow.classList.contains('active') && messagesContainer) {
        // Optionnel: faire apparaître une notification
        const toggleBtn = document.querySelector('.chatbot__toggle');
        if (toggleBtn) {
            toggleBtn.style.animation = 'pulse 1s ease-in-out 3';
            
            // Ajouter un point de notification
            const notification = document.createElement('span');
            notification.classList.add('chat-notification');
            toggleBtn.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 10000);
        }
    }
}, 10000);