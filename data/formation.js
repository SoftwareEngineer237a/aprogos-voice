const trainingCategories = [
  { icon: "staff", title: "Solfège", description: "Comprendre les bases de la lecture musicale." },
  { icon: "voice", title: "Technique vocale", description: "Développer sa voix et apprendre à mieux l'utiliser." },
  { icon: "ear", title: "Écoute et justesse", description: "Apprendre à écouter, reproduire et chanter juste." },
  { icon: "harmony", title: "Harmonie", description: "Comprendre les accords et le chant à plusieurs voix." },
  { icon: "practice", title: "Exercices", description: "Mettre en pratique les notions apprises." }
];

const formationModules = [
  {
    id: "m1",
    title: "Module 1 - Les notions de base du solfège",
    lessons: [
      {
        id: "musique",
        title: "La musique",
        intro: "Cette leçon pose la base : comprendre ce que l'on appelle musique et pourquoi certains sons deviennent organisés et expressifs.",
        definition: "La musique est l'art d'organiser des sons dans le temps avec une intention, un rythme, une hauteur, une intensité et une expression.",
        explanation: ["Un bruit peut être irrégulier, imprévisible ou sans hauteur clairement identifiable.", "Un son musical possède souvent une hauteur que l'on peut chanter, reconnaître ou reproduire.", "La musique organise les sons et les silences pour créer un mouvement que l'oreille peut suivre."],
        illustration: "music",
        image: { src: "assets/images/general/musique.svg", alt: "Illustration montrant des sons organisés dans le temps musical", caption: "Les sons et les silences s'organisent dans le temps." },
        example: "Une porte qui claque produit un bruit. Une voix qui chante Do puis Ré produit des sons musicaux organisés.",
        practice: "Écoutez un son autour de vous, puis chantez une note simple. Comparez ce qui est stable, reproductible et musical.",
        remember: ["La musique organise les sons et les silences.", "Un son musical peut être reconnu, tenu et reproduit.", "Le silence fait partie de la musique."]
      },
      {
        id: "portee",
        title: "La portée",
        intro: "La portée est le support principal de l'écriture musicale. Elle permet de placer les notes et de lire leur hauteur.",
        definition: "La portée est composée de 5 lignes horizontales et de 4 interlignes.",
        explanation: ["Les lignes se comptent de bas en haut : première ligne en bas, cinquième ligne en haut.", "Les interlignes se comptent aussi de bas en haut : premier espace en bas, quatrième espace en haut.", "Plus une note est placée haut sur la portée, plus le son est aigu. Plus elle est placée bas, plus le son est grave."],
        illustration: "staff",
        image: { src: "assets/images/solfege/portee.svg", alt: "Illustration d'une portée avec cinq lignes et quatre interlignes numérotés", caption: "Les lignes et interlignes se comptent de bas en haut." },
        example: "Une note sur la première ligne est plus grave qu'une note sur la cinquième ligne, si l'on reste dans la même clé.",
        practice: "Tracez cinq lignes, numérotez-les de bas en haut, puis placez une note sur chaque ligne.",
        remember: ["5 lignes et 4 interlignes.", "On compte toujours de bas en haut.", "La portée indique la hauteur des notes."]
      },
      {
        id: "cles",
        title: "Les clés",
        intro: "La clé donne un repère de lecture. Sans clé, les lignes de la portée n'ont pas encore de noms précis.",
        definition: "Une clé est un signe placé au début de la portée pour indiquer le nom des notes.",
        explanation: ["La clé de Sol se place autour de la deuxième ligne. Cette ligne devient Sol.", "La clé de Fa se place autour de la quatrième ligne. Cette ligne devient Fa.", "Les clés permettent d'adapter l'écriture aux voix ou aux instruments plus aigus ou plus graves."],
        illustration: "clefs",
        gallery: [
          { src: "assets/images/solfege/cle-sol.svg", alt: "Portée illustrant la clé de Sol placée sur la deuxième ligne", caption: "Clé de Sol : la deuxième ligne devient Sol." },
          { src: "assets/images/solfege/cle-fa.svg", alt: "Portée illustrant la clé de Fa placée sur la quatrième ligne", caption: "Clé de Fa : la quatrième ligne devient Fa." }
        ],
        example: "En clé de Sol, la deuxième ligne porte le nom Sol. En clé de Fa, la quatrième ligne porte le nom Fa.",
        practice: "Repérez la deuxième ligne puis la quatrième ligne sur une portée vide. Associez-les aux clés correspondantes.",
        remember: ["Clé de Sol : deuxième ligne.", "Clé de Fa : quatrième ligne.", "La clé fixe les noms des notes."]
      },
      {
        id: "notes",
        title: "Les notes",
        intro: "Les notes permettent de nommer les hauteurs que l'on chante ou que l'on lit sur une partition.",
        definition: "En français, les notes principales sont Do, Ré, Mi, Fa, Sol, La et Si.",
        explanation: ["Quand les notes montent, le son devient plus aigu : Do, Ré, Mi, Fa, Sol, La, Si.", "Quand les notes descendent, le son devient plus grave : Si, La, Sol, Fa, Mi, Ré, Do.", "Sur la portée, la position de la note indique sa hauteur."],
        illustration: "notes",
        image: { src: "assets/images/solfege/notes.svg", alt: "Illustration montrant Do Ré Mi Fa Sol La Si qui montent sur une portée", caption: "La position verticale indique la hauteur du son." },
        example: "Chanter Do puis Mi donne une impression de montée. Chanter Sol puis Mi donne une impression de descente.",
        practice: "Chantez lentement Do, Ré, Mi, puis redescendez Mi, Ré, Do. Gardez une voix stable et sans forcer.",
        remember: ["Les noms sont Do, Ré, Mi, Fa, Sol, La, Si.", "Monter signifie aller vers l'aigu.", "Descendre signifie aller vers le grave."]
      },
      {
        id: "rythme",
        title: "Le rythme",
        intro: "Le rythme organise la durée des sons et des silences. Il permet de chanter ensemble avec précision.",
        definition: "Le rythme est l'organisation des durées dans le temps musical.",
        explanation: ["La pulsation est le battement régulier que l'on ressent dans la musique.", "Le tempo indique la vitesse de la pulsation : lent, modéré ou rapide.", "La durée indique combien de temps un son ou un silence doit être tenu."],
        illustration: "rhythm",
        image: { src: "assets/images/solfege/rythme.svg", alt: "Illustration d'une pulsation régulière avec quatre temps", caption: "La pulsation donne un repère régulier." },
        example: "Taper des mains régulièrement donne une pulsation. Chanter certaines syllabes plus longues ou plus courtes crée le rythme.",
        practice: "Tapez quatre pulsations régulières, puis dites Ma sur 1 temps, 2 temps et 4 temps.",
        remember: ["La pulsation est régulière.", "Le tempo est la vitesse.", "Le rythme organise les durées."]
      },
      {
        id: "valeurs-notes",
        title: "Valeurs des notes",
        intro: "Les valeurs de notes indiquent combien de temps chaque note doit durer.",
        definition: "Une valeur de note représente une durée musicale.",
        explanation: ["La ronde dure 4 temps.", "La blanche dure 2 temps.", "La noire dure 1 temps.", "La croche dure 1/2 temps."],
        illustration: "values",
        image: { src: "assets/images/solfege/valeurs-notes.svg", alt: "Illustration des valeurs de notes ronde blanche noire et croche", caption: "Chaque symbole représente une durée." },
        example: "Dans une mesure à 4 temps, une ronde peut remplir toute la mesure. Quatre noires peuvent aussi remplir cette mesure.",
        practice: "Comptez 1, 2, 3, 4. Tenez une voyelle sur 4 temps, puis sur 2 temps, puis sur 1 temps.",
        remember: ["Ronde : 4 temps.", "Blanche : 2 temps.", "Noire : 1 temps.", "Croche : 1/2 temps."]
      },
      {
        id: "silences",
        title: "Les silences",
        intro: "Les silences sont aussi importants que les sons. Ils indiquent les moments où l'on ne chante pas.",
        definition: "Un silence est un signe musical qui indique une durée sans son.",
        explanation: ["La pause dure 4 temps.", "La demi-pause dure 2 temps.", "Le soupir dure 1 temps.", "Respecter les silences aide toute la chorale à rester ensemble."],
        illustration: "rests",
        image: { src: "assets/images/solfege/silences.svg", alt: "Illustration des silences pause demi-pause et soupir avec leurs durées", caption: "Le silence garde une durée et une pulsation." },
        example: "Si un soupir apparaît, le choriste garde la pulsation mais ne chante pas pendant 1 temps.",
        practice: "Tapez quatre temps. Chantez sur le premier temps, puis gardez le silence sur les trois suivants.",
        remember: ["Les silences ont une durée.", "Ne pas chanter ne signifie pas perdre la pulsation.", "Le silence prépare souvent la note suivante."]
      }
    ]
  },
  {
    id: "m2",
    title: "Module 2 - Technique vocale",
    lessons: [
      {
        id: "posture",
        title: "La posture",
        intro: "Une bonne posture facilite la respiration, la stabilité et la projection naturelle de la voix.",
        definition: "La posture vocale est l'alignement du corps qui permet de chanter sans tension inutile.",
        explanation: ["Les pieds sont ancrés au sol, environ à la largeur des épaules.", "Les genoux restent souples, jamais verrouillés.", "Les épaules sont détendues et la tête reste droite.", "Le corps est actif, mais sans rigidité."],
        illustration: "posture",
        gallery: [
          { src: "assets/images/voix/bonne-posture.svg", alt: "Illustration montrant une bonne posture pour chanter", caption: "Bonne posture : stable, alignée et détendue." },
          { src: "assets/images/voix/mauvaise-posture.svg", alt: "Illustration montrant une mauvaise posture avec dos courbé et épaules relevées", caption: "À corriger : dos courbé, tête inclinée, épaules tendues." }
        ],
        example: "Une posture fermée ou penchée peut limiter la respiration. Une posture ouverte aide l'air à circuler plus librement.",
        practice: "Placez-vous debout. Relâchez les épaules, grandissez la colonne et gardez le regard devant vous.",
        remember: ["Pieds ancrés.", "Épaules détendues.", "Tête droite.", "Corps stable et souple."]
      },
      {
        id: "respiration",
        title: "La respiration",
        intro: "La respiration utilisée en chant cherche la stabilité et le contrôle du souffle.",
        definition: "La respiration diaphragmatique ou abdominale mobilise la zone basse du tronc au lieu de lever les épaules.",
        explanation: ["À l'inspiration, la zone abdominale se détend et s'ouvre légèrement.", "Les épaules restent basses et calmes.", "À l'expiration, l'air sort de manière régulière et contrôlée.", "Le souffle soutient la voix sans pousser."],
        illustration: "breathing",
        image: { src: "assets/images/voix/respiration.svg", alt: "Schéma de respiration abdominale avec inspiration expiration et épaules calmes", caption: "L'air descend, la zone abdominale s'ouvre, les épaules restent calmes." },
        example: "Expirer sur Sssss permet d'entendre si l'air sort de façon stable ou irrégulière.",
        practice: "Inspirez calmement, laissez la zone abdominale se gonfler, puis expirez sur Sssss sans lever les épaules.",
        remember: ["Inspirer bas.", "Ne pas monter les épaules.", "Expirer régulièrement.", "Le souffle accompagne la voix."]
      },
      {
        id: "echauffement",
        title: "Échauffement vocal",
        intro: "L'échauffement prépare progressivement la voix avant le chant.",
        definition: "Un échauffement vocal est une suite d'exercices courts qui mettent la voix en mouvement sans la brusquer.",
        explanation: ["Mmm aide à sentir les vibrations sans forcer.", "Les sirènes vocales font glisser la voix du grave vers l'aigu puis de l'aigu vers le grave.", "Les vocalises installent la souplesse, la précision et l'écoute."],
        illustration: "warmup",
        image: { src: "assets/images/voix/echauffement.svg", alt: "Illustration d'échauffement vocal avec Mmm sirène vocale et vocalises", caption: "Échauffer progressivement avant de chanter." },
        example: "Mmm sur une note confortable, puis Mmm en petite sirène, puis Ma Mé Mi Mo Mu sur quelques notes.",
        practice: "Commencez toujours doucement. Si la voix se fatigue, réduisez le volume et revenez dans une zone confortable.",
        remember: ["Progressif.", "Sans forcer.", "Volume modéré.", "Écoute du confort vocal."]
      },
      {
        id: "articulation",
        title: "Articulation",
        intro: "L'articulation rend les paroles compréhensibles sans durcir la voix.",
        definition: "Articuler consiste à former clairement les voyelles et les consonnes pendant le chant.",
        explanation: ["Les exercices Ma - Mé - Mi - Mo - Mu aident à ouvrir les voyelles.", "Les exercices Ba - Da - Bi - Bou stimulent les consonnes.", "Une bonne articulation reste souple : la mâchoire et la langue ne doivent pas se bloquer."],
        illustration: "articulation",
        image: { src: "assets/images/voix/articulation.svg", alt: "Illustration pédagogique des syllabes Ma Mé Mi Mo Mu et Ba Da Bi Bou", caption: "Former les syllabes clairement sans durcir la mâchoire." },
        example: "Répéter Ma Mé Mi Mo Mu lentement, puis accélérer légèrement en gardant chaque syllabe claire.",
        practice: "Parlez d'abord les syllabes, puis chantez-les sur une note confortable.",
        remember: ["Voyelles claires.", "Consonnes précises.", "Mâchoire souple.", "Texte compréhensible."]
      }
    ]
  },
  {
    id: "m3",
    title: "Module 3 - L'écoute et la justesse",
    lessons: [
      {
        id: "unisson",
        title: "L'unisson",
        intro: "L'unisson est un point de départ essentiel pour apprendre à chanter ensemble.",
        definition: "Chanter à l'unisson signifie que plusieurs personnes chantent la même ligne mélodique en même temps.",
        explanation: ["La chorale recherche une seule direction mélodique commune.", "Chaque voix doit écouter la note de départ, le rythme et la fin des phrases.", "L'unisson construit la précision avant le chant à plusieurs voix."],
        illustration: "unison",
        image: { src: "assets/images/general/choristes-unisson.svg", alt: "Illustration de plusieurs choristes chantant la même ligne mélodique", caption: "Plusieurs voix suivent une seule ligne." },
        example: "Tout le groupe chante Do - Ré - Mi ensemble, avec la même vitesse et la même intention.",
        practice: "Chantez une courte phrase à volume modéré. Corrigez d'abord ensemble le départ, puis la fin de la phrase.",
        remember: ["Même mélodie.", "Même rythme.", "Même écoute."]
      },
      {
        id: "ecouter-voisin",
        title: "Écouter son voisin",
        intro: "Dans une chorale, écouter est aussi important que chanter.",
        definition: "Écouter son voisin signifie ajuster sa voix pour former un son collectif équilibré.",
        explanation: ["Ne pas crier permet d'entendre le groupe.", "Le volume doit s'adapter à ce que l'on entend autour de soi.", "La fusion des voix se construit par attention, précision et retenue."],
        illustration: "listening",
        image: { src: "assets/images/general/ecoute-groupe.svg", alt: "Illustration d'écoute du groupe avec des voix qui se fusionnent", caption: "Écouter le voisin pour ajuster son volume." },
        example: "Si votre voix couvre toutes les autres, baissez légèrement le volume pour retrouver l'équilibre.",
        practice: "Chantez une phrase en essayant d'entendre au moins deux autres voix autour de vous.",
        remember: ["Écouter avant de corriger.", "Ajuster son volume.", "Chercher la fusion des voix."]
      },
      {
        id: "justesse",
        title: "La justesse",
        intro: "La justesse permet à la note chantée de correspondre à la note attendue.",
        definition: "Chanter juste signifie produire une hauteur stable et alignée avec la note de référence.",
        explanation: ["Une note trop basse donne une sensation de chute.", "Une note trop haute donne une sensation de tension ou de dépassement.", "La justesse s'améliore par l'écoute, la respiration et la répétition calme."],
        illustration: "pitch",
        image: { src: "assets/images/general/justesse.svg", alt: "Illustration montrant une note trop basse juste et trop haute", caption: "La note chantée se stabilise sur la hauteur attendue." },
        example: "Le chef donne une note. Le choriste la reproduit, puis ajuste légèrement si la note est trop basse ou trop haute.",
        practice: "Écoutez une note de référence, chantez-la doucement, puis stabilisez-la pendant trois secondes.",
        remember: ["Écouter la référence.", "Chanter sans forcer.", "Ajuster progressivement."]
      },
      {
        id: "intervalles",
        title: "Les intervalles",
        intro: "Les intervalles aident à comprendre la distance entre deux notes.",
        definition: "Un intervalle est la distance musicale entre deux hauteurs.",
        explanation: ["La seconde correspond à un pas proche, par exemple Do vers Ré.", "La tierce saute une note, par exemple Do vers Mi.", "La quinte donne un écart plus large, par exemple Do vers Sol."],
        illustration: "intervals",
        image: { src: "assets/images/general/intervalles.svg", alt: "Illustration des intervalles seconde tierce et quinte", caption: "Comparer les distances entre deux notes." },
        example: "Do - Ré est plus proche que Do - Sol. L'oreille apprend à reconnaître ces distances.",
        practice: "Chantez Do - Ré, puis Do - Mi, puis Do - Sol. Écoutez la différence de distance.",
        remember: ["Seconde : distance proche.", "Tierce : distance moyenne.", "Quinte : distance plus large."]
      },
      {
        id: "pupitres",
        title: "Les pupitres",
        intro: "Les pupitres organisent les voix dans une chorale.",
        definition: "Un pupitre est un groupe de chanteurs qui travaille une même partie vocale.",
        explanation: ["Soprano, Alto, Ténor et Basse sont des noms de pupitres courants.", "Chaque pupitre peut avoir une ligne différente dans un chant harmonisé.", "La répartition exacte dépend du travail vocal et des besoins du chant."],
        illustration: "sections",
        image: { src: "assets/images/general/pupitres.svg", alt: "Illustration pédagogique des pupitres Soprano Alto Ténor Basse", caption: "Les pupitres organisent les voix de la chorale." },
        example: "Dans un passage à quatre voix, chaque pupitre chante sa ligne tout en écoutant les autres.",
        practice: "Identifiez votre ligne, puis chantez-la en gardant une oreille sur les autres pupitres.",
        remember: ["Soprano.", "Alto.", "Ténor.", "Basse.", "Chaque pupitre sert l'ensemble."]
      }
    ]
  },
  {
    id: "m4",
    title: "Module 4 - Harmonie, accords et polyphonie",
    lessons: [
      {
        id: "accord",
        title: "L'accord",
        intro: "Un accord fait entendre plusieurs notes en même temps.",
        definition: "Un accord est la superposition de plusieurs notes qui forment un ensemble sonore.",
        explanation: ["Do - Mi - Sol est un exemple simple de notes superposées.", "Chaque note peut être chantée par une voix différente.", "Pour que l'accord sonne bien, chaque note doit être stable et écoutée."],
        illustration: "chord",
        image: { src: "assets/images/harmonie/accord.svg", alt: "Illustration d'un accord Do Mi Sol superposé", caption: "Do, Mi et Sol se superposent pour former un accord." },
        example: "Un groupe chante Do, un autre Mi, un autre Sol. Les trois sons forment un accord.",
        practice: "Tenez une note simple pendant qu'un autre groupe ajoute une deuxième puis une troisième note.",
        remember: ["Plusieurs notes ensemble.", "Chaque note compte.", "L'écoute stabilise l'accord."]
      },
      {
        id: "harmonie-chorale",
        title: "Harmonie chorale",
        intro: "L'harmonie chorale naît lorsque plusieurs voix différentes construisent un même ensemble musical.",
        definition: "L'harmonie chorale est l'organisation de plusieurs lignes vocales qui sonnent ensemble de manière cohérente.",
        explanation: ["Chaque pupitre chante sa partie, mais le résultat appartient au groupe.", "L'équilibre des volumes aide à entendre l'harmonie complète.", "La précision des entrées et des fins renforce la beauté de l'ensemble."],
        illustration: "harmonyWide",
        image: { src: "assets/images/harmonie/harmonie-chorale.svg", alt: "Illustration de plusieurs lignes vocales formant une harmonie chorale", caption: "Des lignes différentes forment un ensemble harmonieux." },
        example: "Une voix principale peut être soutenue par d'autres voix qui enrichissent le son sans la couvrir.",
        practice: "Chantez votre ligne en diminuant légèrement le volume pour mieux entendre l'accord global.",
        remember: ["Une partie individuelle.", "Un résultat collectif.", "Équilibre et écoute."]
      },
      {
        id: "canon",
        title: "Canon",
        intro: "Le canon apprend à garder sa ligne pendant qu'une autre voix entre plus tard avec la même mélodie.",
        definition: "Un canon est une forme où une mélodie est reprise par un autre groupe avec un décalage dans le temps.",
        explanation: ["Le premier groupe commence la mélodie.", "Le deuxième groupe commence la même mélodie après un délai.", "Chaque groupe doit rester stable malgré le décalage."],
        illustration: "canon",
        image: { src: "assets/images/harmonie/canon.svg", alt: "Schéma temporel montrant deux groupes entrant en canon", caption: "Même mélodie, départ décalé." },
        example: "Groupe A commence au temps 1. Groupe B commence la même phrase au temps 3.",
        practice: "Travaillez d'abord la mélodie ensemble, puis séparez les départs en gardant une pulsation commune.",
        remember: ["Même mélodie.", "Départ décalé.", "Pulsation commune."]
      },
      {
        id: "deux-voix",
        title: "Chant à deux voix",
        intro: "Le chant à deux voix introduit une première indépendance entre les groupes.",
        definition: "Chanter à deux voix signifie faire entendre deux lignes vocales différentes ou complémentaires en même temps.",
        explanation: ["Chaque groupe apprend sa ligne séparément.", "Les deux lignes sont ensuite assemblées lentement.", "L'écoute permet de rester juste sans se laisser attirer par l'autre voix."],
        illustration: "twoVoices",
        image: { src: "assets/images/harmonie/deux-voix.svg", alt: "Illustration de deux lignes vocales chantées simultanément", caption: "Deux lignes coexistent et s'écoutent." },
        example: "Une voix tient une note longue pendant qu'une autre chante une petite mélodie.",
        practice: "Commencez à volume faible. Si une voix perd sa ligne, revenez à l'unisson puis réessayez.",
        remember: ["Deux lignes.", "Apprentissage séparé.", "Assemblage progressif."]
      },
      {
        id: "quatre-voix",
        title: "Chant à quatre voix",
        intro: "Le chant à quatre voix demande une écoute plus large et une bonne autonomie de chaque pupitre.",
        definition: "Chanter à quatre voix consiste à superposer quatre lignes vocales dans un même ensemble.",
        explanation: ["Chaque pupitre doit connaître sa ligne.", "Les voix doivent rester équilibrées, aucune ne doit dominer inutilement.", "Les entrées, les respirations et les fins doivent être coordonnées."],
        illustration: "fourVoices",
        image: { src: "assets/images/harmonie/quatre-voix.svg", alt: "Illustration de quatre voix Soprano Alto Ténor Basse superposées", caption: "Quatre pupitres construisent une harmonie complète." },
        example: "Soprano, Alto, Ténor et Basse chantent chacun une partie qui contribue à l'harmonie globale.",
        practice: "Assemblez deux voix, puis trois, puis quatre. Corrigez chaque ajout avant de continuer.",
        remember: ["Autonomie des pupitres.", "Équilibre sonore.", "Construction progressive."]
      },
      {
        id: "polyphonie",
        title: "Polyphonie",
        intro: "La polyphonie permet de comprendre différentes façons de chanter à plusieurs voix.",
        definition: "La polyphonie désigne la présence de plusieurs lignes musicales simultanées.",
        explanation: ["En homorythmie, les voix avancent avec le même rythme ou presque le même rythme.", "En polyphonie, les lignes peuvent être plus indépendantes.", "Plus les lignes sont indépendantes, plus l'écoute et la stabilité deviennent importantes."],
        illustration: "polyphony",
        image: { src: "assets/images/harmonie/polyphonie.svg", alt: "Illustration comparant homorythmie et polyphonie", caption: "Homorythmie : rythme commun. Polyphonie : lignes plus indépendantes." },
        example: "Quatre voix qui chantent les mêmes paroles au même rythme forment une écriture homorythmique. Des lignes qui entrent à des moments différents donnent une sensation plus polyphonique.",
        practice: "Chantez une phrase en même rythme, puis essayez un départ décalé pour sentir la différence.",
        remember: ["Homorythmie : rythme commun.", "Polyphonie : lignes plus indépendantes.", "L'écoute garde l'ensemble cohérent."]
      }
    ]
  }
];