const exercises = [
  {
    id: "solfege",
    label: "Solfège",
    items: [
      { icon: "🎼", title: "Lecture de notes", goal: "Identifier les notes sans perdre la pulsation.", steps: ["Choisir trois notes voisines.", "Les nommer lentement.", "Les chanter en montant puis en descendant."], tip: "Cherchez la régularité avant la vitesse.", illustration: { src: "assets/images/solfege/notes.svg", alt: "Illustration de lecture de notes sur une portée" } },
      { icon: "🎼", title: "Portée", goal: "Reconnaître lignes et interlignes.", steps: ["Tracer cinq lignes.", "Numéroter les lignes de bas en haut.", "Placer une note sur chaque ligne puis dans chaque espace."], tip: "Comptez toujours depuis le bas.", illustration: { src: "assets/images/solfege/portee.svg", alt: "Illustration de portée avec lignes et interlignes" } },
      { icon: "𝄞", title: "Clés", goal: "Repérer la clé de Sol et la clé de Fa.", steps: ["Pointer la deuxième ligne pour la clé de Sol.", "Pointer la quatrième ligne pour la clé de Fa.", "Dire le nom du repère à voix haute."], tip: "La clé fixe le nom des notes.", illustration: { src: "assets/images/solfege/cle-sol.svg", alt: "Illustration de clé de Sol sur une portée" } },
      { icon: "👏", title: "Rythme", goal: "Installer une pulsation stable.", steps: ["Taper quatre temps réguliers.", "Parler une syllabe sur chaque temps.", "Tenir une syllabe sur deux temps."], tip: "Ne ralentissez pas pendant les silences.", illustration: { src: "assets/images/solfege/rythme.svg", alt: "Illustration de pulsation rythmique régulière" } },
      { icon: "♪", title: "Valeurs de notes", goal: "Sentir les durées principales.", steps: ["Tenir 4 temps pour la ronde.", "Tenir 2 temps pour la blanche.", "Tenir 1 temps pour la noire.", "Diviser le temps pour deux croches."], tip: "Comptez à voix basse si nécessaire.", illustration: { src: "assets/images/solfege/valeurs-notes.svg", alt: "Illustration des valeurs de notes" } },
      { icon: "∎", title: "Silences", goal: "Garder la pulsation sans chanter.", steps: ["Compter quatre temps.", "Chanter sur le temps 1.", "Garder le silence sur les temps suivants."], tip: "Le silence doit être actif.", illustration: { src: "assets/images/solfege/silences.svg", alt: "Illustration des silences musicaux" } }
    ]
  },
  {
    id: "voix",
    label: "Voix",
    items: [
      { icon: "👤", title: "Posture", goal: "Installer un corps stable et disponible.", steps: ["Pieds ancrés largeur des épaules.", "Genoux souples.", "Épaules relâchées.", "Tête droite."], tip: "Cherchez la stabilité sans rigidité.", illustration: { src: "assets/images/voix/bonne-posture.svg", alt: "Illustration de bonne posture vocale" } },
      { icon: "🫁", title: "Respiration", goal: "Contrôler l'air sans lever les épaules.", steps: ["Inspirer calmement.", "Laisser la zone abdominale s'ouvrir.", "Expirer sur Sssss.", "Recommencer plus doucement."], tip: "Le souffle doit rester régulier.", illustration: { src: "assets/images/voix/respiration.svg", alt: "Illustration de respiration abdominale" } },
      { icon: "🎤", title: "Échauffement", goal: "Préparer la voix progressivement.", steps: ["Faire Mmm sur une note confortable.", "Faire une petite sirène vocale.", "Ajouter une vocalise courte."], tip: "Le volume reste modéré.", illustration: { src: "assets/images/voix/echauffement.svg", alt: "Illustration d'échauffement vocal" } },
      { icon: "🎤", title: "Vocalises", goal: "Améliorer précision et souplesse.", steps: ["Choisir Ma Mé Mi Mo Mu.", "Chanter lentement.", "Monter d'un petit pas.", "Redescendre sans forcer."], tip: "Privilégiez la qualité du son.", illustration: { src: "assets/images/voix/echauffement.svg", alt: "Illustration de vocalises progressives" } },
      { icon: "🗣", title: "Articulation", goal: "Clarifier les paroles chantées.", steps: ["Dire Ma Mé Mi Mo Mu.", "Dire Ba Da Bi Bou.", "Chanter sur une note simple.", "Garder la mâchoire souple."], tip: "Clair ne veut pas dire dur.", illustration: { src: "assets/images/voix/articulation.svg", alt: "Illustration d'articulation vocale" } }
    ]
  },
  {
    id: "ecoute",
    label: "Écoute",
    items: [
      { icon: "👂", title: "Unisson", goal: "Chanter une même ligne ensemble.", steps: ["Écouter la note de départ.", "Entrer ensemble.", "Finir ensemble.", "Corriger le départ si nécessaire."], tip: "Une voix de groupe commence par l'écoute.", illustration: { src: "assets/images/general/choristes-unisson.svg", alt: "Illustration d'unisson choral" } },
      { icon: "🎯", title: "Justesse", goal: "Stabiliser une hauteur donnée.", steps: ["Écouter la référence.", "Chanter doucement.", "Tenir trois secondes.", "Ajuster sans pousser."], tip: "Le volume faible aide souvent à corriger.", illustration: { src: "assets/images/general/justesse.svg", alt: "Illustration de justesse vocale" } },
      { icon: "↕", title: "Intervalles", goal: "Sentir les distances entre les notes.", steps: ["Chanter Do - Ré.", "Chanter Do - Mi.", "Chanter Do - Sol.", "Comparer les sensations."], tip: "Nommez l'intervalle après l'avoir chanté.", illustration: { src: "assets/images/general/intervalles.svg", alt: "Illustration d'intervalles musicaux" } },
      { icon: "👂", title: "Écoute du groupe", goal: "Ajuster son volume et sa couleur.", steps: ["Chanter à volume moyen.", "Écouter un voisin.", "Baisser légèrement son volume.", "Chercher la fusion."], tip: "Si vous n'entendez personne, vous chantez probablement trop fort.", illustration: { src: "assets/images/general/ecoute-groupe.svg", alt: "Illustration d'écoute du groupe" } }
    ]
  },
  {
    id: "technique",
    label: "Technique",
    items: [
      { icon: "🫁", title: "Respiration", goal: "Relier souffle et phrase musicale.", steps: ["Préparer l'inspiration.", "Commencer sans attaque brusque.", "Garder un débit régulier.", "Finir sans écraser le son."], tip: "La respiration commence avant la première note.", illustration: { src: "assets/images/voix/respiration.svg", alt: "Illustration de respiration liée à la phrase musicale" } },
      { icon: "🗣", title: "Articulation", goal: "Garder le texte clair dans le rythme.", steps: ["Parler le texte lentement.", "Marquer les consonnes importantes.", "Chanter sans perdre les voyelles.", "Réduire les tensions."], tip: "La voyelle porte le son.", illustration: { src: "assets/images/voix/articulation.svg", alt: "Illustration d'articulation dans le rythme" } },
      { icon: "🎤", title: "Placement", goal: "Chercher une émission vocale confortable.", steps: ["Faire Mmm doucement.", "Sentir les vibrations.", "Ouvrir vers Ma.", "Garder la même facilité."], tip: "Le confort est un repère important.", illustration: { src: "assets/images/voix/echauffement.svg", alt: "Illustration de placement vocal confortable" } },
      { icon: "👏", title: "Coordination", goal: "Relier rythme, paroles et respiration.", steps: ["Taper la pulsation.", "Parler le texte.", "Ajouter la respiration.", "Chanter la phrase."], tip: "Séparez les difficultés avant de les réunir.", illustration: { src: "assets/images/solfege/rythme.svg", alt: "Illustration de coordination rythmique" } }
    ]
  },
  {
    id: "harmonie",
    label: "Harmonie",
    items: [
      { icon: "🎵", title: "Accords", goal: "Écouter des notes superposées.", steps: ["Un groupe tient Do.", "Un deuxième ajoute Mi.", "Un troisième ajoute Sol.", "Ajuster les volumes."], tip: "Chaque note doit rester stable.", illustration: { src: "assets/images/harmonie/accord.svg", alt: "Illustration d'accord Do Mi Sol" } },
      { icon: "👂", title: "Écoute des voix", goal: "Rester dans sa ligne tout en entendant les autres.", steps: ["Chanter sa partie doucement.", "Identifier une autre voix.", "Garder sa note.", "Ajuster son volume."], tip: "Écouter ne signifie pas suivre l'autre ligne.", illustration: { src: "assets/images/harmonie/harmonie-chorale.svg", alt: "Illustration d'écoute des voix dans une harmonie" } },
      { icon: "↪", title: "Canon", goal: "Tenir une mélodie avec départ décalé.", steps: ["Apprendre la mélodie ensemble.", "Séparer en deux groupes.", "Faire entrer le groupe B plus tard.", "Garder la pulsation commune."], tip: "Le canon échoue souvent quand la pulsation disparaît.", illustration: { src: "assets/images/harmonie/canon.svg", alt: "Illustration de canon" } },
      { icon: "Ⅱ", title: "Deux voix", goal: "Assembler deux lignes progressivement.", steps: ["Apprendre chaque ligne seule.", "Assembler à volume faible.", "Corriger les départs.", "Stabiliser les fins."], tip: "Lentement d'abord, musicalement ensuite.", illustration: { src: "assets/images/harmonie/deux-voix.svg", alt: "Illustration de chant à deux voix" } },
      { icon: "Ⅳ", title: "Quatre voix", goal: "Construire une harmonie complète.", steps: ["Assembler deux pupitres.", "Ajouter un troisième.", "Ajouter un quatrième.", "Rééquilibrer les volumes."], tip: "Ajoutez une difficulté à la fois.", illustration: { src: "assets/images/harmonie/quatre-voix.svg", alt: "Illustration de chant à quatre voix" } }
    ]
  }
];