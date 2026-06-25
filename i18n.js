/* ══════════════════════════════════════════════════════════
   KTIS Group — Module i18n (Internationalisation FR / EN)
   Utilisation :
     - Chaque élément traduit porte l'attribut data-i18n="clé"
     - Les placeholders portent data-i18n-placeholder="clé"
     - Les attributs aria-label portent data-i18n-aria="clé"
     - Les option value sont conservées en anglais (pour FormSubmit)
   ══════════════════════════════════════════════════════════ */

const KTIS_TRANSLATIONS = {

  /* ──────────────────── COMMUN (navbar, footer, boutons) ──────────────────── */
  'nav.services':        { fr: 'Services',       en: 'Services' },
  'nav.produits':        { fr: 'Produits',        en: 'Products' },
  'nav.about':           { fr: 'À Propos',        en: 'About' },
  'nav.secteurs':        { fr: 'Secteurs',        en: 'Sectors' },
  'nav.contact':         { fr: 'Contact',         en: 'Contact' },
  'nav.aria.theme':      { fr: 'Changer de thème', en: 'Toggle theme' },
  'nav.aria.lang':       { fr: 'Changer la langue', en: 'Change language' },

  'btn.devis':           { fr: 'Demander un devis gratuit', en: 'Request a free quote' },
  'btn.discover':        { fr: 'Découvrir nos services',    en: 'Discover our services' },
  'btn.services':        { fr: 'Nos services',              en: 'Our services' },
  'btn.devis.arrow':     { fr: 'Demander un devis →',       en: 'Request a quote →' },
  'btn.catalogue':       { fr: 'Demander notre catalogue complet', en: 'Request our full catalogue' },
  'btn.send':            { fr: 'Envoyer ma demande',        en: 'Send my request' },
  'btn.contact.send':    { fr: 'Envoyer le message',        en: 'Send message' },
  'btn.devis.quote':     { fr: 'Demander un devis',         en: 'Request a quote' },

  /* ──────────────────── HERO ──────────────────── */
  'hero.badge':       { fr: 'Import · Export · Commerce · Services', en: 'Import · Export · Trade · Services' },
  'hero.title.line1': { fr: 'Votre Partenaire Global en',            en: 'Your Global Partner in' },
  'hero.title.accent1':{ fr: 'Import-Export',                        en: 'Import-Export' },
  'hero.title.accent2':{ fr: 'Commerce Général',                     en: 'General Trade' },
  'hero.desc':        { fr: 'KTIS Group — spécialiste du commerce international et des solutions commerciales diversifiées. Nous connectons vos besoins avec les meilleures sources mondiales.', en: 'KTIS Group — specialist in international trade and diversified commercial solutions. We connect your needs with the best global sources.' },

  /* Stats hero */
  'hero.stat1.label': { fr: 'Pays Desservis',    en: 'Countries Served' },
  'hero.stat2.label': { fr: 'Ans Expérience',    en: 'Years of Experience' },
  'hero.stat3.label': { fr: 'Clients Satisfaits', en: 'Satisfied Clients' },

  /* ──────────────────── STATS BAR ──────────────────── */
  'stats.ref.label':       { fr: 'Produits Référencés',   en: 'Referenced Products' },
  'stats.ref.unit':        { fr: 'Articles en catalogue',   en: 'Items in catalogue' },
  'stats.partners.label':  { fr: 'Partenaires Mondiaux',  en: 'Global Partners' },
  'stats.partners.unit':   { fr: 'Fournisseurs vérifiés', en: 'Verified suppliers' },
  'stats.sat.label':       { fr: 'Taux de Satisfaction',  en: 'Satisfaction Rate' },
  'stats.sat.unit':        { fr: 'Clients fidèles',       en: 'Loyal clients' },
  'stats.deliv.label':     { fr: 'Livraisons/an',         en: 'Deliveries/year' },
  'stats.deliv.unit':      { fr: 'Commandes traitées',      en: 'Orders processed' },
  'stats.zones.label':     { fr: 'Zones de Couverture',    en: 'Coverage Zones' },
  'stats.zones.unit':      { fr: 'Continents',             en: 'Continents' },

  /* ──────────────────── SERVICES ──────────────────── */
  'services.label':  { fr: '01 / Services',   en: '01 / Services' },
  'services.title':  { fr: 'Nos ',             en: 'Our ' },
  'services.title.accent': { fr: 'Services',   en: 'Services' },
  'services.desc':   { fr: 'Solutions commerciales complètes pour vos besoins d\'import-export et de distribution. Expertise, qualité et fiabilité.', en: 'Complete commercial solutions for your import-export and distribution needs. Expertise, quality and reliability.' },
  'services.all':    { fr: 'Voir tous nos services', en: 'See all our services' },
  'svc.link':        { fr: 'Demander un devis', en: 'Request a quote' },

  /* Cartes services */
  'svc.import.badge':  { fr: 'Spécialiste',   en: 'Specialist' },
  'svc.import.title':  { fr: 'Import-Export', en: 'Import-Export' },
  'svc.import.desc':   { fr: 'Service complet d\'import-export avec gestion douanière, logistique internationale et suivi en temps réel de vos cargaisons depuis la source jusqu\'à destination.', en: 'Full import-export service with customs management, international logistics and real-time tracking of your shipments from source to destination.' },

  'svc.commerce.badge': { fr: 'Diversifié', en: 'Diversified' },
  'svc.commerce.title': { fr: 'Commerce Général', en: 'General Trade' },
  'svc.commerce.desc':  { fr: 'Distribution de produits variés (textile, électronique, matériel, etc.). Accès à un large réseau de fournisseurs et garantie de qualité.', en: 'Distribution of varied products (textile, electronics, equipment, etc.). Access to a wide supplier network and quality guarantee.' },

  'svc.presta.badge':  { fr: 'Clé en Main',  en: 'Turnkey' },
  'svc.presta.title':  { fr: 'Prestations de Services', en: 'Service Provision' },
  'svc.presta.desc':   { fr: 'Consulting commercial, sourcing produits, négociation fournisseurs, et gestion de projets d\'importation. Une équipe d\'experts à votre service.', en: 'Commercial consulting, product sourcing, supplier negotiation, and import project management. A team of experts at your service.' },

  'svc.emballage.badge': { fr: 'Packaging',   en: 'Packaging' },
  'svc.emballage.title': { fr: 'Emballage',   en: 'Packaging' },
  'svc.emballage.desc':  { fr: 'Solutions d\'emballage industriel et commercial sur mesure : boîtes, caisses, films protecteurs, emballages alimentaires et conditionnement export. Conformité aux normes internationales garantie.', en: 'Custom industrial and commercial packaging solutions: boxes, crates, protective films, food packaging and export conditioning. Compliance with international standards guaranteed.' },

  'svc.colisage.badge': { fr: 'Logistique',   en: 'Logistics' },
  'svc.colisage.title': { fr: 'Colisage',     en: 'Parcel Handling' },
  'svc.colisage.desc':  { fr: 'Service de colisage professionnel pour vos expéditions nationales et internationales : tri, comptage, étiquetage, palettisation et consolidation. Optimisation volume et poids pour réduire vos coûts de transport.', en: 'Professional parcel handling service for your national and international shipments: sorting, counting, labelling, palletising and consolidation. Volume and weight optimisation to reduce your transport costs.' },

  'svc.energie.badge': { fr: 'Énergie & Tech', en: 'Energy & Tech' },
  'svc.energie.title': { fr: 'Intégrateur Énergétique & Maintenance', en: 'Energy Integrator & Maintenance' },
  'svc.energie.desc':  { fr: 'Fourniture, installation et maintenance de systèmes d\'énergie critiques : onduleurs (UPS), batteries industrielles, tableaux de distribution Schneider/ABB. Data centers, hôpitaux et sites industriels.', en: 'Supply, installation and maintenance of critical energy systems: UPS, industrial batteries, Schneider/ABB distribution boards. Data centres, hospitals and industrial sites.' },

  'svc.export.badge':  { fr: 'International', en: 'International' },
  'svc.export.title':  { fr: 'Exportation',   en: 'Exportation' },
  'svc.export.desc':   { fr: 'Accompagnement complet dans vos projets d\'exportation vers l\'Afrique, l\'Europe et l\'Asie : gestion administrative et douanière, sélection des transporteurs, incoterms, assurance transit et suivi en temps réel.', en: 'Full support for your export projects to Africa, Europe and Asia: administrative and customs management, carrier selection, incoterms, transit insurance and real-time tracking.' },

  /* ──────────────────── PRODUITS ──────────────────── */
  'produits.label':       { fr: '02 / Catégories',    en: '02 / Categories' },
  'produits.title':       { fr: 'Nos ',               en: 'Our ' },
  'produits.title.accent':{ fr: 'Produits',           en: 'Products' },
  'produits.desc':        { fr: 'Large gamme de produits importés et distribués. Qualité garantie, prix compétitifs et délais maîtrisés.', en: 'Wide range of imported and distributed products. Guaranteed quality, competitive prices and controlled delivery times.' },
  'produits.cta.note':    { fr: 'Catalogue PDF personnalisé — envoyé sous 24h à votre adresse email professionnelle', en: 'Personalised PDF catalogue — sent within 24h to your professional email address' },

  'produit.textile.title': { fr: 'Textile & Habillement',    en: 'Textile & Clothing' },
  'produit.textile.sub':   { fr: 'Vêtements & Accessoires',  en: 'Clothing & Accessories' },
  'produit.elec.title':    { fr: 'Électronique & Informatique', en: 'Electronics & IT' },
  'produit.elec.sub':      { fr: 'Matériels & Accessoires',  en: 'Hardware & Accessories' },
  'produit.quinca.title':  { fr: 'Quincaillerie & Matériel', en: 'Hardware & Equipment' },
  'produit.quinca.sub':    { fr: 'Outillage & Équipements',  en: 'Tools & Equipment' },
  'produit.menager.title': { fr: 'Fournitures Ménagères',    en: 'Household Supplies' },
  'produit.menager.sub':   { fr: 'Articles pour la maison',  en: 'Home articles' },

  /* Tags produits */
  'tag.pretaporter':  { fr: 'Prêt-à-porter', en: 'Ready-to-wear' },
  'tag.tissus':       { fr: 'Tissus',         en: 'Fabrics' },
  'tag.uniformes':    { fr: 'Uniformes',      en: 'Uniforms' },
  'tag.sport':        { fr: 'Sport',          en: 'Sport' },
  'tag.smartphones':  { fr: 'Smartphones',    en: 'Smartphones' },
  'tag.pc':           { fr: 'PC / Laptops',   en: 'PC / Laptops' },
  'tag.perif':        { fr: 'Périphériques',  en: 'Peripherals' },
  'tag.reseaux':      { fr: 'Réseaux',        en: 'Networks' },
  'tag.outillage':    { fr: 'Outillage pro',  en: 'Pro tools' },
  'tag.fixations':    { fr: 'Fixations',      en: 'Fixings' },
  'tag.tuyauterie':   { fr: 'Tuyauterie',     en: 'Piping' },
  'tag.electricite':  { fr: 'Électricité',    en: 'Electricity' },
  'tag.cuisine':      { fr: 'Cuisine',        en: 'Kitchen' },
  'tag.entretien':    { fr: 'Entretien',      en: 'Maintenance' },
  'tag.decoration':   { fr: 'Décoration',     en: 'Decoration' },
  'tag.hygiene':      { fr: 'Hygiène',        en: 'Hygiene' },

  /* ──────────────────── À PROPOS ──────────────────── */
  'about.label':      { fr: '03 / À Propos',        en: '03 / About' },
  'about.title':      { fr: 'Qui sommes-',           en: 'Who are ' },
  'about.title.accent':{ fr: 'nous',                 en: 'we' },
  'about.title.suffix':{ fr: ' ?',                   en: '?' },
  'about.desc1':      { fr: 'KTIS Group est un opérateur commercial international spécialisé dans l\'import-export, la distribution et les prestations de services commerciales. Fondée sur une expertise de 15+ ans, notre entreprise accompagne les distributeurs, revendeurs et entreprises dans l\'accès à de nouvelles sources de produits.', en: 'KTIS Group is an international commercial operator specialising in import-export, distribution and commercial service provision. Founded on 15+ years of expertise, our company supports distributors, resellers and businesses in accessing new product sources.' },
  'about.desc2':      { fr: 'Notre approche combine une connaissance approfondie des marchés internationaux, des relations durables avec nos fournisseurs partenaires, et un service de qualité pour garantir le succès de vos projets commerciaux.', en: 'Our approach combines in-depth knowledge of international markets, lasting relationships with our partner suppliers, and quality service to guarantee the success of your commercial projects.' },
  'about.tag.text':   { fr: "ans d'expertise",       en: 'years of expertise' },
  'about.feat1.title':{ fr: 'Certifications Internationales', en: 'International Certifications' },
  'about.feat1.desc': { fr: 'ISO 27001, ISO 9001, certifiés Schneider Electric Partner et ABB.', en: 'ISO 27001, ISO 9001, certified Schneider Electric Partner and ABB.' },
  'about.feat2.title':{ fr: 'Support 24/7/365',      en: 'Support 24/7/365' },
  'about.feat2.desc': { fr: 'Équipes terrain mobilisables en moins de 4h sur l\'ensemble du territoire.', en: 'Field teams deployable in under 4 hours across the entire territory.' },
  'about.feat3.title':{ fr: 'Ingénierie sur mesure', en: 'Custom Engineering' },
  'about.feat3.desc': { fr: 'Chaque projet est conçu spécifiquement selon vos contraintes techniques et opérationnelles.', en: 'Every project is designed specifically to your technical and operational constraints.' },

  /* ──────────────────── TÉMOIGNAGES ──────────────────── */
  'temoignages.label':       { fr: '04 / Références',                en: '04 / References' },
  'temoignages.title':       { fr: 'Ce que disent nos ',             en: 'What our ' },
  'temoignages.title.accent':{ fr: 'Partenaires',                    en: 'Partners' },
  'temoignages.title.after': { fr: '',                               en: ' Say' },
  'temoignages.desc':        { fr: 'Plus de 5 000 clients nous font confiance à travers le monde. Voici ce que certains d\'entre eux disent de KTIS Group.', en: 'Over 5,000 clients trust us worldwide. Here is what some of them say about KTIS Group.' },
  'testi1.text':  { fr: 'KTIS Group a transformé notre chaîne d\'approvisionnement. En moins de 6 mois, nous avons réduit nos coûts d\'import de 23% grâce à leur réseau de fournisseurs qualifiés en Asie. La réactivité de leur équipe est remarquable — devis reçu en moins de 24h à chaque fois.', en: 'KTIS Group transformed our supply chain. In less than 6 months, we reduced our import costs by 23% thanks to their network of qualified suppliers in Asia. Their team\'s responsiveness is remarkable — a quote received in less than 24 hours every time.' },
  'testi1.name':     { fr: 'Directeur des Achats',        en: 'Procurement Director' },
  'testi1.company':  { fr: 'Groupe CAMEX Distribution · Douala', en: 'CAMEX Distribution Group · Douala' },
  'testi2.text':  { fr: 'Nous travaillons avec KTIS Group depuis 4 ans pour nos approvisionnements en matériel électronique et informatique. Leur maîtrise des procédures douanières et leur fiabilité logistique nous ont permis d\'ouvrir de nouveaux marchés en Afrique subsaharienne sans aucune rupture de stock.', en: 'We have been working with KTIS Group for 4 years for our supplies of electronic and IT equipment. Their mastery of customs procedures and logistical reliability have allowed us to open new markets in sub-Saharan Africa without any stockouts.' },
  'testi2.name':     { fr: 'Responsable Import',          en: 'Import Manager' },
  'testi2.company':  { fr: 'Société TECHPRO Cameroun · Yaoundé', en: 'TECHPRO Cameroon · Yaoundé' },
  'testi3.text':  { fr: 'Leur service d\'intégration énergétique a permis à notre data center de passer en énergie sécurisée avec des UPS Schneider Electric dans les délais impartis. Le contrat de maintenance préventive qu\'ils assurent nous garantit une disponibilité de 99,9%. Partenaire de confiance depuis 2019.', en: 'Their energy integration service enabled our data centre to switch to secured power with Schneider Electric UPS systems on schedule. The preventive maintenance contract they provide guarantees us 99.9% availability. Trusted partner since 2019.' },
  'testi3.name':     { fr: 'DSI — Directeur des Systèmes', en: 'CIO — Systems Director' },
  'testi3.company':  { fr: 'Banque SOFICOM · Douala', en: 'SOFICOM Bank · Douala' },

  /* ──────────────────── PARTENAIRES ──────────────────── */
  'partners.label':       { fr: '05 / Réseau',         en: '05 / Network' },
  'partners.title':       { fr: 'Nos ',                en: 'Our ' },
  'partners.title.accent':{ fr: 'Fournisseurs',        en: 'Suppliers' },
  'partners.desc':        { fr: 'Partenaires sélectionnés et certifiés pour la qualité et la fiabilité de nos produits.', en: 'Partners selected and certified for the quality and reliability of our products.' },
  'partner1.name': { fr: 'Textiles Asiatiques',           en: 'Asian Textiles' },
  'partner1.cat':  { fr: 'Fabrication textile premium',  en: 'Premium textile manufacturing' },
  'partner2.name': { fr: 'Tech Import Group',            en: 'Tech Import Group' },
  'partner2.cat':  { fr: 'Électronique grand public',    en: 'Consumer electronics' },
  'partner3.name': { fr: 'Global Hardware',              en: 'Global Hardware' },
  'partner3.cat':  { fr: 'Distribution quincaillerie',   en: 'Hardware distribution' },
  'partner4.name': { fr: 'Bio & Natural Exports',        en: 'Bio & Natural Exports' },
  'partner4.cat':  { fr: 'Produits biologiques',         en: 'Organic products' },
  'partner5.name': { fr: 'International Commerce Hub',   en: 'International Commerce Hub' },
  'partner5.cat':  { fr: 'Logistique & Douanes',         en: 'Logistics & Customs' },
  'strip.1':  { fr: 'Textiles Asiatiques',       en: 'Asian Textiles' },
  'strip.2':  { fr: 'Tech Import Group',         en: 'Tech Import Group' },
  'strip.3':  { fr: 'Global Hardware',           en: 'Global Hardware' },
  'strip.4':  { fr: 'Bio & Natural Exports',     en: 'Bio & Natural Exports' },
  'strip.5':  { fr: 'International Commerce',    en: 'International Commerce' },
  'strip.6':  { fr: 'Logistics Partners',        en: 'Logistics Partners' },
  'strip.7':  { fr: 'Customs Experts',           en: 'Customs Experts' },
  'strip.8':  { fr: 'Quality Assurance',         en: 'Quality Assurance' },
  'strip.9':  { fr: 'Distribution Network',      en: 'Distribution Network' },

  /* ──────────────────── SECTEURS ──────────────────── */
  'secteurs.label':       { fr: '06 / Secteurs',       en: '06 / Sectors' },
  'secteurs.title':       { fr: 'Nos ',                en: 'Our ' },
  'secteurs.title.accent':{ fr: 'Marchés',             en: 'Markets' },
  'secteurs.desc':        { fr: 'Industries et secteurs d\'activité servis par nos solutions commerciales.', en: 'Industries and sectors served by our commercial solutions.' },

  'secteur1.title': { fr: 'Commerce de Retail',          en: 'Retail Trade' },
  'secteur1.desc':  { fr: 'Fournisseur de produits diversifiés pour petits et grands commerces. Assortiment compétitif et conditions adaptées.', en: 'Supplier of diversified products for small and large retailers. Competitive assortment and tailored terms.' },
  'secteur2.title': { fr: 'Secteur Industriel',           en: 'Industrial Sector' },
  'secteur2.desc':  { fr: 'Fournitures et équipements pour l\'industrie manufacturière. Livraisons en grandes quantités avec support technique.', en: 'Supplies and equipment for the manufacturing industry. Large-volume deliveries with technical support.' },
  'secteur3.title': { fr: 'Automotive & Mobility',        en: 'Automotive & Mobility' },
  'secteur3.desc':  { fr: 'Fournitures et pièces détachées pour le secteur automobile et mobilité urbaine. Sourcing fiable et logistique adaptée.', en: 'Supplies and spare parts for the automotive and urban mobility sector. Reliable sourcing and tailored logistics.' },
  'secteur4.title': { fr: 'Secteur Éducation',            en: 'Education Sector' },
  'secteur4.desc':  { fr: 'Fournitures scolaires, mobilier et équipements pédagogiques. Solutions clé en main pour établissements.', en: 'School supplies, furniture and teaching equipment. Turnkey solutions for institutions.' },
  'secteur5.title': { fr: 'Hôtellerie & Tourisme',        en: 'Hospitality & Tourism' },
  'secteur5.desc':  { fr: 'Meubles, fournitures d\'accueil et équipements pour hôtels et structures touristiques.', en: 'Furniture, welcome supplies and equipment for hotels and tourism establishments.' },
  'secteur6.title': { fr: 'Bâtiment & Construction',      en: 'Building & Construction' },
  'secteur6.desc':  { fr: 'Matériaux, outillages et fournitures pour le bâtiment — approvisionnement en grandes quantités et conformité aux normes.', en: 'Materials, tools and supplies for construction — large-volume procurement and standards compliance.' },

  /* ──────────────────── CONTACT ──────────────────── */
  'contact.label':       { fr: '07 / Contact',         en: '07 / Contact' },
  'contact.title':       { fr: 'Parlons de votre ',    en: "Let's Talk About Your " },
  'contact.title.accent':{ fr: 'Projet',               en: 'Project' },
  'contact.desc':        { fr: 'Notre équipe commerciale est disponible pour répondre à toutes vos questions. Pour un devis complet et personnalisé, utilisez notre formulaire dédié.', en: 'Our commercial team is available to answer all your questions. For a complete and personalised quote, use our dedicated form.' },
  'contact.tel.label':   { fr: 'Téléphone',            en: 'Phone' },
  'contact.email.label': { fr: 'Email',                en: 'Email' },
  'contact.siege.label': { fr: 'Siège social',         en: 'Head office' },
  'contact.horaires.label':{ fr: 'Horaires',           en: 'Hours' },
  'contact.horaires.val':{ fr: 'Lun–Ven 08h–17h',     en: 'Mon–Fri 8am–5pm' },
  'contact.form.title':  { fr: 'Message rapide',       en: 'Quick message' },
  'contact.form.desc':   { fr: 'Une question générale ? Envoyez-nous un message. Pour un devis, utilisez le bouton ci-contre.', en: 'A general question? Send us a message. For a quote, use the button opposite.' },
  'contact.success':     { fr: '✓ Message envoyé — Nous vous répondrons sous 24h.', en: '✓ Message sent — We will reply within 24h.' },
  'form.nom.label':      { fr: 'Nom',                  en: 'Name' },
  'form.email.label':    { fr: 'Email',                en: 'Email' },
  'form.sujet.label':    { fr: 'Sujet',                en: 'Subject' },
  'form.message.label':  { fr: 'Message',              en: 'Message' },
  'form.nom.ph':         { fr: 'John Doe',             en: 'John Doe' },
  'form.sujet.ph':       { fr: 'Votre sujet...',       en: 'Your subject...' },
  'form.message.ph':     { fr: 'Votre message...',     en: 'Your message...' },

  /* ──────────────────── FOOTER ──────────────────── */
  'footer.brand.desc':    { fr: 'Intégrateur commercial et fournisseur de solutions d\'import-export, distribution de produits variés et prestations de services commerciales.', en: 'Commercial integrator and provider of import-export solutions, distribution of varied products and commercial service provision.' },
  'footer.col1.title':    { fr: 'Produits & Services',   en: 'Products & Services' },
  'footer.col2.title':    { fr: 'Informations',          en: 'Information' },
  'footer.col3.title':    { fr: 'Démarrer',              en: 'Get started' },
  'footer.col3.desc':     { fr: 'Vous cherchez de nouveaux produits ? Contactez notre équipe pour discuter de vos besoins.', en: 'Looking for new products? Contact our team to discuss your needs.' },
  'footer.col3.note':     { fr: 'Réponse sous 24h/48h garantie', en: 'Response within 24h/48h guaranteed' },
  'footer.cert1':         { fr: 'Certifié Import-Export', en: 'Certified Import-Export' },
  'footer.cert2':         { fr: 'Douanes Agréés',         en: 'Approved Customs' },
  'footer.cert3':         { fr: 'Commerce Responsable',   en: 'Responsible Trade' },
  'footer.copy':          { fr: '© 2026 KTIS Group. Tous droits réservés.', en: '© 2026 KTIS Group. All rights reserved.' },
  'footer.link.privacy':  { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  'footer.link.legal':    { fr: 'Mentions légales',       en: 'Legal Notice' },
  'footer.link.env':      { fr: 'Conformité environnementale', en: 'Environmental Compliance' },
  'footer.links.import':  { fr: 'Import-Export',          en: 'Import-Export' },
  'footer.links.commerce':{ fr: 'Commerce Général',       en: 'General Trade' },
  'footer.links.presta':  { fr: 'Prestations Commerciales', en: 'Commercial Services' },
  'footer.links.marches': { fr: 'Marchés Servis',         en: 'Markets Served' },
  'footer.links.devis':   { fr: 'Demander un Devis',      en: 'Request a Quote' },
  'footer.links.services':{ fr: 'Nos Services',           en: 'Our Services' },
  'footer.links.categories':{ fr: 'Catégories Produits',  en: 'Product Categories' },
  'footer.links.secteurs':{ fr: 'Secteurs d\'Activité',   en: 'Business Sectors' },
  'footer.links.temoignages':{ fr: 'Témoignages Clients', en: 'Client Testimonials' },
  'footer.links.about':   { fr: 'À Propos',               en: 'About us' },
  'footer.notif.linkedin':{ fr: 'LinkedIn — Bientôt disponible', en: 'LinkedIn — Coming soon' },
  'footer.notif.twitter': { fr: 'Twitter — Bientôt disponible', en: 'Twitter — Coming soon' },
  'footer.notif.env':     { fr: 'Conformité environnementale — Page en construction', en: 'Environmental compliance — Page under construction' },

  /* ──────────────────── MODAL DEVIS ──────────────────── */
  'modal.title':          { fr: 'Demander un Devis',     en: 'Request a Quote' },
  'modal.subtitle':       { fr: 'Réponse garantie sous 24h — Gratuit & Sans engagement', en: 'Response guaranteed within 24h — Free & No commitment' },
  'modal.close.aria':     { fr: 'Fermer',                en: 'Close' },
  'modal.success.title':  { fr: '✓ DEMANDE ENVOYÉE AVEC SUCCÈS', en: '✓ REQUEST SENT SUCCESSFULLY' },
  'modal.success.desc':   { fr: 'Notre équipe commerciale analysera votre demande et vous contactera sous 24h/48h avec votre devis personnalisé.', en: 'Our commercial team will analyse your request and contact you within 24h/48h with your personalised quote.' },
  'modal.reassurance':    { fr: 'Réponse garantie sous 24h/48h — 100% gratuit & sans engagement', en: 'Response guaranteed within 24h/48h — 100% free & no commitment' },

  /* Champs devis */
  'devis.nom.label':      { fr: 'Nom complet',           en: 'Full name' },
  'devis.nom.ph':         { fr: 'Jean Dupont',           en: 'John Smith' },
  'devis.societe.label':  { fr: 'Entreprise / Société',  en: 'Company' },
  'devis.societe.ph':     { fr: 'Votre société',         en: 'Your company' },
  'devis.email.label':    { fr: 'Email professionnel',   en: 'Professional email' },
  'devis.tel.label':      { fr: 'Téléphone / WhatsApp',  en: 'Phone / WhatsApp' },
  'devis.service.label':  { fr: 'Type de service demandé', en: 'Type of service requested' },
  'devis.service.default':{ fr: '— Sélectionnez un service —', en: '— Select a service —' },
  'devis.service.opt1':   { fr: 'Import de marchandises', en: 'Goods import' },
  'devis.service.opt2':   { fr: 'Exportation internationale', en: 'International export' },
  'devis.service.opt3':   { fr: 'Prestation de Service commercial', en: 'Commercial service provision' },
  'devis.service.opt4':   { fr: 'Commerce Général & Distribution', en: 'General Trade & Distribution' },
  'devis.service.opt5':   { fr: 'Emballage industriel / commercial', en: 'Industrial / commercial packaging' },
  'devis.service.opt6':   { fr: 'Colisage & Conditionnement', en: 'Parcel handling & Conditioning' },
  'devis.service.opt7':   { fr: 'Solutions Énergétiques & Maintenance', en: 'Energy Solutions & Maintenance' },
  'devis.service.opt8':   { fr: 'Demande de catalogue complet', en: 'Full catalogue request' },
  'devis.service.opt9':   { fr: 'Autre / Projet spécifique', en: 'Other / Specific project' },
  'devis.nature.label':   { fr: 'Nature de la marchandise / Projet', en: 'Nature of goods / Project' },
  'devis.nature.ph':      { fr: 'Décrivez précisément : type de produits, caractéristiques, usage prévu, secteur d\'activité...', en: 'Describe precisely: product type, characteristics, intended use, business sector...' },
  'devis.volume.label':   { fr: 'Quantité estimée / Volume', en: 'Estimated quantity / Volume' },
  'devis.volume.ph':      { fr: 'Ex : 500 unités, 2 conteneurs 40HC, 10 tonnes…', en: 'E.g.: 500 units, 2 x 40HC containers, 10 tonnes…' },
  'devis.origine.label':  { fr: "Lieu d'origine",        en: 'Place of origin' },
  'devis.origine.opt':    { fr: '(Optionnel)',            en: '(Optional)' },
  'devis.origine.ph':     { fr: 'Ex : Chine, Turquie, France…', en: 'E.g.: China, Turkey, France…' },
  'devis.dest.label':     { fr: 'Destination',           en: 'Destination' },
  'devis.dest.ph':        { fr: 'Ex : Douala, Lagos, Paris…', en: 'E.g.: Douala, Lagos, Paris…' },
  'devis.inco.label':     { fr: 'Incoterms souhaités',   en: 'Desired Incoterms' },
  'devis.inco.opt':       { fr: '(Optionnel)',            en: '(Optional)' },
  'devis.inco.default':   { fr: '— Incoterms (si connu) —', en: '— Incoterms (if known) —' },
  'devis.inco.notknown':  { fr: 'Je ne sais pas / À définir', en: "I don't know / To be defined" },
  'devis.info.label':     { fr: 'Informations complémentaires', en: 'Additional information' },
  'devis.info.opt':       { fr: '(Optionnel)',            en: '(Optional)' },
  'devis.info.ph':        { fr: 'Délai souhaité, budget indicatif, conditions particulières…', en: 'Desired delivery time, indicative budget, particular conditions…' },

  /* notif form */
  'notif.devis.ok':       { fr: 'Demande de devis envoyée avec succès !', en: 'Quote request sent successfully!' },
  'notif.devis.redirect': { fr: "Redirection vers le serveur d'envoi…", en: 'Redirecting to sending server…' },
  'notif.contact.ok':     { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
  'notif.contact.redirect':{ fr: "Redirection vers le serveur d'envoi…", en: 'Redirecting to sending server…' },

  /* bouton states */
  'btn.loading.devis':    { fr: 'Envoi en cours…',       en: 'Sending…' },
  'btn.loading.contact':  { fr: 'Envoi…',                en: 'Sending…' },

  /* ──────────────────── PAGES LÉGALES (commun) ──────────────────── */
  'legal.nav.back':       { fr: 'Retour au site',        en: 'Back to site' },
  'legal.footer.copy':    { fr: '© 2026 KTIS Group. Tous droits réservés.', en: '© 2026 KTIS Group. All rights reserved.' },
  'legal.footer.home':    { fr: 'Accueil',               en: 'Home' },
  'legal.footer.privacy': { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  'legal.footer.legal':   { fr: 'Mentions légales',      en: 'Legal Notice' },
  'legal.doc.label':      { fr: 'Documents légaux',      en: 'Legal documents' },
  'legal.version':        { fr: 'Version 1.0',           en: 'Version 1.0' },
  'legal.toc.title':      { fr: 'Sommaire',              en: 'Contents' },
  'legal.notice.strong':  { fr: 'Document de substitution à compléter.', en: 'Draft document to be completed.' },

  /* ──────────────────── MENTIONS LÉGALES ──────────────────── */
  'ml.hero.title':        { fr: 'Mentions ',             en: 'Legal ' },
  'ml.hero.title.accent': { fr: 'Légales',               en: 'Notice' },
  'ml.hero.desc':         { fr: 'Conformément aux dispositions légales en vigueur, vous trouverez ci-dessous les informations légales obligatoires relatives à KTIS Group et à l\'édition de ce site internet.', en: 'In accordance with the applicable legal provisions, you will find below the mandatory legal information relating to KTIS Group and the publication of this website.' },
  'ml.update':            { fr: 'Dernière mise à jour :',en: 'Last updated:' },
  'ml.notice.text':       { fr: 'Les champs marqués [ À COMPLÉTER ] doivent être renseignés avec les données exactes de KTIS Group avant toute publication officielle. La validation par un professionnel du droit est fortement recommandée pour une société opérant à l\'international.', en: 'Fields marked [ TO BE COMPLETED ] must be filled in with the exact details of KTIS Group before any official publication. Validation by a legal professional is strongly recommended for a company operating internationally.' },
  'ml.toc.s1':  { fr: '1. Éditeur du site',             en: '1. Website publisher' },
  'ml.toc.s2':  { fr: '2. Directeur de la publication', en: '2. Publication director' },
  'ml.toc.s3':  { fr: '3. Hébergement',                 en: '3. Hosting' },
  'ml.toc.s4':  { fr: '4. Activité réglementée',        en: '4. Regulated activity' },
  'ml.toc.s5':  { fr: '5. Propriété intellectuelle',    en: '5. Intellectual property' },
  'ml.toc.s6':  { fr: '6. Responsabilité',              en: '6. Liability' },
  'ml.toc.s7':  { fr: '7. Liens hypertextes',           en: '7. Hyperlinks' },
  'ml.toc.s8':  { fr: '8. Droit applicable',            en: '8. Applicable law' },
  'ml.toc.s9':  { fr: '9. Contact',                     en: '9. Contact' },

  /* ──────────────────── POLITIQUE CONFIDENTIALITÉ ──────────────────── */
  'pc.hero.title':        { fr: 'Politique de ',         en: 'Privacy ' },
  'pc.hero.title.accent': { fr: 'Confidentialité',       en: 'Policy' },
  'pc.hero.desc':         { fr: 'La protection de vos données personnelles est une priorité pour KTIS Group. Ce document décrit la manière dont nous collectons, utilisons et protégeons vos informations.', en: 'The protection of your personal data is a priority for KTIS Group. This document describes how we collect, use and protect your information.' },
  'pc.notice.text':       { fr: 'Les sections marquées [ À COMPLÉTER ] doivent être remplies avec les informations légales exactes de KTIS Group avant toute mise en ligne officielle. Consultez un juriste spécialisé en droit des affaires international pour valider ce document.', en: 'Sections marked [ TO BE COMPLETED ] must be filled in with the exact legal information of KTIS Group before any official publication. Consult a lawyer specialising in international business law to validate this document.' },
  'pc.toc.s1':  { fr: '1. Responsable du traitement',   en: '1. Data controller' },
  'pc.toc.s2':  { fr: '2. Données collectées',          en: '2. Data collected' },
  'pc.toc.s3':  { fr: '3. Finalités du traitement',     en: '3. Processing purposes' },
  'pc.toc.s4':  { fr: '4. Base légale',                 en: '4. Legal basis' },
  'pc.toc.s5':  { fr: '5. Durée de conservation',       en: '5. Retention period' },
  'pc.toc.s6':  { fr: '6. Transferts internationaux',   en: '6. International transfers' },
  'pc.toc.s7':  { fr: '7. Partage des données',         en: '7. Data sharing' },
  'pc.toc.s8':  { fr: '8. Vos droits',                  en: '8. Your rights' },
  'pc.toc.s9':  { fr: '9. Cookies',                     en: '9. Cookies' },
  'pc.toc.s10': { fr: '10. Sécurité',                   en: '10. Security' },
  'pc.toc.s11': { fr: '11. Modifications',              en: '11. Modifications' },
  'pc.toc.s12': { fr: '12. Contact',                    en: '12. Contact' },

  'legal.update.placeholder': { fr: '[À COMPLÉTER — ex. : 16 juin 2026]', en: '[TO BE COMPLETED — e.g.: 16 June 2026]' },

};

/* Fusion des traductions légales (corps des pages) */
if (typeof KTIS_LEGAL_TRANSLATIONS !== 'undefined') {
  Object.assign(KTIS_TRANSLATIONS, KTIS_LEGAL_TRANSLATIONS);
}

/* ══════════════════════════════════════════════════════════
   MOTEUR i18n
   ══════════════════════════════════════════════════════════ */
(function(){

  /* — Langue courante — */
  let currentLang = localStorage.getItem('ktis-lang') || 'fr';

  /* — Expose pour usage externe (formulaires) — */
  window.KTIS_i18n = {
    t: function(key){ return _t(key); },
    lang: function(){ return currentLang; }
  };

  /* — Traduction d'une clé — */
  function _t(key){
    const entry = KTIS_TRANSLATIONS[key];
    if(!entry) return key;
    return entry[currentLang] || entry['fr'] || key;
  }

  /* — Applique les traductions à la page — */
  function applyTranslations(){
    /* texte */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = _t(key);
    });
    /* innerHTML (pour les éléments avec HTML interne) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = _t(key);
    });
    /* placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = _t(el.getAttribute('data-i18n-placeholder'));
    });
    /* aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', _t(el.getAttribute('data-i18n-aria')));
    });
    /* title */
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = _t(el.getAttribute('data-i18n-title'));
    });
    /* <html lang=""> */
    document.documentElement.lang = currentLang;
    /* bouton drapeau actif */
    _updateFlagBtn();
  }

  /* — Mise à jour visuelle du bouton drapeau — */
  function _updateFlagBtn(){
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const l = btn.getAttribute('data-lang');
      btn.classList.toggle('lang-active', l === currentLang);
    });
  }

  /* — Changement de langue — */
  window.switchLang = function(lang){
    if(lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('ktis-lang', lang);
    applyTranslations();
  };

  /* — Init au chargement — */
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }

})();
