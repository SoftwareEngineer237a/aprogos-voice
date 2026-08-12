const chants = [
  {
    id: 1,
    titre: "Conduis Moi Seigneur",
    auteur: "Pasteur et chantre Pascale",
    annee: "2015",
    langue: "Français",
    paroles: "paroles/conduis-moi-seigneur.txt",
    audio: ""
  },
  {
    id: 2,
    titre: "T'aimer, Jesus",
    auteur: "Pasteur et chantre Pascale",
    annee: "2015",
    langue: "Français",
    paroles: "paroles/taimer-jesus.txt",
    audio: ""
  },
  {
    id: 3,
    titre: "Onction divines",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2026",
    langue: "Français",
    paroles: "paroles/onction-divines.txt",
    audio: ""
  },
  {
    id: 4,
    titre: "Veu ma ngul dzoue",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Ewondo",
    paroles: "paroles/veu-ma-ngul-dzoue.txt",
    audio: ""
  },
  {
    id: 5,
    titre: "Le grand Boss",
    auteur: "Pasteur et chantre Nadine",
    annee: "2023",
    langue: "Français",
    paroles: "paroles/le-grand-boss.txt",
    audio: ""
  },
  {
    id: 6,
    titre: "Freedom",
    auteur: "Benny Emmanuelle",
    annee: "2024",
    langue: "Anglais",
    paroles: "paroles/freedom.txt",
    audio: ""
  },
  {
    id: 7,
    titre: "Touche moi Seigneur",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/touche-moi-seigneur.txt",
    audio: ""
  },
  {
    id: 8,
    titre: "U Koli",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Bassa",
    paroles: "paroles/u-koli.txt",
    audio: ""
  },
  {
    id: 9,
    titre: "je me prosterne devant toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/je-me-prosterne-devant-toi.txt",
    audio: ""
  },
  {
    id: 10,
    titre: "J'aime le nom de Jesus",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/jaime-le-nom-de-jesus.txt",
    audio: ""
  },
  {
    id: 11,
    titre: "Reçois ma louange Dieu Souverain",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2026",
    langue: "Français",
    paroles: "paroles/recois-ma-louange-dieu-souverain.txt",
    audio: ""
  },
  {
    id: 12,
    titre: "Je suis l'argile et toi le potier",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/je-suis-largile-et-toi-le-potier.txt",
    audio: ""
  },
  {
    id: 13,
    titre: "Tu es mon refuge",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-mon-refuge.txt",
    audio: ""
  },
  {
    id: 14,
    titre: "My God is a king / Eh yaya eh",
    auteur: "Pasteur et chantre Nadine",
    annee: "2022",
    langue: "Anglais",
    paroles: "paroles/my-god-is-a-king-eh-yaya-eh.txt",
    audio: ""
  },
  {
    id: 15,
    titre: "Tu règne dans les cieux",
    auteur: "Pasteur et chantre Nadine",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/tu-regne-dans-les-cieux.txt",
    audio: ""
  },
  {
    id: 16,
    titre: "Oui je crois en toi Seigneur",
    auteur: "Pasteur et chantre Nadine",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/oui-je-crois-en-toi-seigneur.txt",
    audio: ""
  },
  {
    id: 17,
    titre: "J'avais décidé",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/javais-decide.txt",
    audio: ""
  },
  {
    id: 18,
    titre: "Ti me ngui yon",
    auteur: "Pasteur et chantre Pascale",
    annee: "2024",
    langue: "Bassa",
    paroles: "paroles/ti-me-ngui-yon.txt",
    audio: ""
  },
  {
    id: 19,
    titre: "J'aime ta presence",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/jaime-ta-presence.txt",
    audio: ""
  },
  {
    id: 20,
    titre: "Je t'aime Seigneur (remplis moi de ton amour)",
    auteur: "Pasteur et chantre Pascale",
    annee: "2026",
    langue: "Français",
    paroles: "paroles/je-taime-seigneur-remplis-moi-de-ton-amour.txt",
    audio: ""
  },
  {
    id: 21,
    titre: "Gloire gloire",
    auteur: "Pasteur et chantre Nadine",
    annee: "2018",
    langue: "Français",
    paroles: "paroles/gloire-gloire.txt",
    audio: ""
  },
  {
    id: 22,
    titre: "Tu mérites la gloire",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-merites-la-gloire.txt",
    audio: ""
  },
  {
    id: 23,
    titre: "Tu peux le faire",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-peux-le-faire.txt",
    audio: ""
  },
  {
    id: 24,
    titre: "Jehovah tu es mon refuge sur",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Bassa",
    paroles: "paroles/jehovah-tu-es-mon-refuge-sur.txt",
    audio: ""
  },
  {
    id: 25,
    titre: "Power of ressurection",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Anglais",
    paroles: "paroles/power-of-ressurection.txt",
    audio: ""
  },
  {
    id: 26,
    titre: "Seigneur je veux entrer dans ton sanctuaire",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/seigneur-je-veux-entrer-dans-ton-sanctuaire.txt",
    audio: ""
  },
  {
    id: 27,
    titre: "Plus près de toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/plus-pres-de-toi.txt",
    audio: ""
  },
  {
    id: 28,
    titre: "L'Éternel est mon Berger",
    auteur: "Pasteur et chantre Nadine",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/leternel-est-mon-berger.txt",
    audio: ""
  },
  {
    id: 29,
    titre: "Quand tu es là",
    auteur: "Chantre Agréable",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/quand-tu-es-la.txt",
    audio: ""
  },
  {
    id: 30,
    titre: "Tu es tout pour moi( en Eyondo)",
    auteur: "Pasteur et chantre Pascale",
    annee: "2023",
    langue: "Français",
    paroles: "paroles/tu-es-tout-pour-moi-en-eyondo.txt",
    audio: ""
  },
  {
    id: 31,
    titre: "Règnes",
    auteur: "Chantre Agréable",
    annee: "2016",
    langue: "Français",
    paroles: "paroles/regnes.txt",
    audio: ""
  },
  {
    id: 32,
    titre: "Massé mêm",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Bassa",
    paroles: "paroles/masse-mem.txt",
    audio: ""
  },
  {
    id: 33,
    titre: "Good God",
    auteur: "Benny Emmanuelle",
    annee: "2016",
    langue: "Anglais",
    paroles: "paroles/good-god.txt",
    audio: ""
  },
  {
    id: 34,
    titre: "In His Sanctuary",
    auteur: "Benny Emmanuelle",
    annee: "2016",
    langue: "Anglais",
    paroles: "paroles/in-his-sanctuary.txt",
    audio: ""
  },
  {
    id: 35,
    titre: "Apprends moi à écouter",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Français",
    paroles: "paroles/apprends-moi-a-ecouter.txt",
    audio: ""
  },
  {
    id: 36,
    titre: "Ta présence est ma force",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Français",
    paroles: "paroles/ta-presence-est-ma-force.txt",
    audio: ""
  },
  {
    id: 37,
    titre: "Ngeda mgwen wem",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Bassa",
    paroles: "paroles/ngeda-mgwen-wem.txt",
    audio: ""
  },
  {
    id: 38,
    titre: "Take it all",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Anglais",
    paroles: "paroles/take-it-all.txt",
    audio: ""
  },
  {
    id: 39,
    titre: "I need you Jesus",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Anglais",
    paroles: "paroles/i-need-you-jesus.txt",
    audio: ""
  },
  {
    id: 40,
    titre: "Sois fidèle jusqu'au bout",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2011",
    langue: "Français",
    paroles: "paroles/sois-fidele-jusquau-bout.txt",
    audio: ""
  },
  {
    id: 41,
    titre: "Inonde moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2013",
    langue: "Français",
    paroles: "paroles/inonde-moi.txt",
    audio: ""
  },
  {
    id: 42,
    titre: "Dieu qui peut tout",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/dieu-qui-peut-tout.txt",
    audio: ""
  },
  {
    id: 43,
    titre: "Le saint est la",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2017",
    langue: "Français",
    paroles: "paroles/le-saint-est-la.txt",
    audio: ""
  },
  {
    id: 44,
    titre: "Juste pour moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2016",
    langue: "Français",
    paroles: "paroles/juste-pour-moi.txt",
    audio: ""
  },
  {
    id: 45,
    titre: "tu es Yahweh",
    auteur: "Pasteur et chantre Pascale",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/tu-es-yahweh.txt",
    audio: ""
  },
  {
    id: 46,
    titre: "Jesus, roi de ma vie",
    auteur: "Pasteur et chantre Pascale",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/jesus-roi-de-ma-vie.txt",
    audio: ""
  },
  {
    id: 47,
    titre: "Lipem li ba ni we",
    auteur: "Pasteur et chantre Pascale",
    annee: "2019",
    langue: "Bassa",
    paroles: "paroles/lipem-li-ba-ni-we.txt",
    audio: ""
  },
  {
    id: 48,
    titre: "Je t'adore",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/je-tadore.txt",
    audio: ""
  },
  {
    id: 49,
    titre: "Tel que je suis",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tel-que-je-suis.txt",
    audio: ""
  },
  {
    id: 50,
    titre: "Only you are my father",
    auteur: "Pasteur et chantre Pascale",
    annee: "2018",
    langue: "Anglais",
    paroles: "paroles/only-you-are-my-father.txt",
    audio: ""
  },
  {
    id: 51,
    titre: "Mon bien",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/mon-bien.txt",
    audio: ""
  },
  {
    id: 52,
    titre: "Roi éternel vis à jamais",
    auteur: "Pasteur et chantre Nadine",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/roi-eternel-vis-a-jamais.txt",
    audio: ""
  },
  {
    id: 53,
    titre: "Seigneur Merci",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/seigneur-merci.txt",
    audio: ""
  },
  {
    id: 54,
    titre: "I will give every thing for you",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Anglais",
    paroles: "paroles/i-will-give-every-thing-for-you.txt",
    audio: ""
  },
  {
    id: 55,
    titre: "I praise you",
    auteur: "Pasteur et chantre Nadine",
    annee: "2018",
    langue: "Anglais",
    paroles: "paroles/i-praise-you.txt",
    audio: ""
  },
  {
    id: 56,
    titre: "Tu es jehovah",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-jehovah.txt",
    audio: ""
  },
  {
    id: 57,
    titre: "Worthy to be praise",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Anglais",
    paroles: "paroles/worthy-to-be-praise.txt",
    audio: ""
  },
  {
    id: 58,
    titre: "Je l'ai rencontré",
    auteur: "Pasteur et chantre Nadine",
    annee: "2018",
    langue: "Français",
    paroles: "paroles/je-lai-rencontre.txt",
    audio: ""
  },
  {
    id: 59,
    titre: "Je te cherirai toujours",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/je-te-cherirai-toujours.txt",
    audio: ""
  },
  {
    id: 60,
    titre: "Près de toi",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/pres-de-toi.txt",
    audio: ""
  },
  {
    id: 61,
    titre: "Je ne veux adorer que toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/je-ne-veux-adorer-que-toi.txt",
    audio: ""
  },
  {
    id: 62,
    titre: "Mon ame te cherche",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/mon-ame-te-cherche.txt",
    audio: ""
  },
  {
    id: 63,
    titre: "Crois seulement",
    auteur: "Chantre Agréable",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/crois-seulement.txt",
    audio: ""
  },
  {
    id: 64,
    titre: "Tu es ma lumiere",
    auteur: "Chantre Agréable",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-ma-lumiere.txt",
    audio: ""
  },
  {
    id: 65,
    titre: "Tu es tout pour moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-tout-pour-moi.txt",
    audio: ""
  },
  {
    id: 66,
    titre: "Attaché à toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/attache-a-toi.txt",
    audio: ""
  },
  {
    id: 67,
    titre: "Car ton nom est saint",
    auteur: "Pasteur et chantre Nadine",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/car-ton-nom-est-saint.txt",
    audio: ""
  },
  {
    id: 68,
    titre: "Ton nom est au-dessus de tout",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/ton-nom-est-au-dessus-de-tout.txt",
    audio: ""
  },
  {
    id: 69,
    titre: "Ce dont mon coeur a besoin",
    auteur: "Pasteur et chantre Pascale",
    annee: "2010",
    langue: "Français",
    paroles: "paroles/ce-dont-mon-coeur-a-besoin.txt",
    audio: ""
  },
  {
    id: 70,
    titre: "Mon ame t'adore",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/mon-ame-tadore.txt",
    audio: ""
  },
  {
    id: 71,
    titre: "Tu es bon",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-bon.txt",
    audio: ""
  },
  {
    id: 72,
    titre: "Reveles toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/reveles-toi.txt",
    audio: ""
  },
  {
    id: 73,
    titre: "Tu as pris ma place",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-as-pris-ma-place.txt",
    audio: ""
  },
  {
    id: 74,
    titre: "Come fill my heart lord",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/come-fill-my-heart-lord.txt",
    audio: ""
  },
  {
    id: 75,
    titre: "Ton nom est fidèle",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/ton-nom-est-fidele.txt",
    audio: ""
  },
  {
    id: 76,
    titre: "Tu es digne",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/tu-es-digne.txt",
    audio: ""
  },
  {
    id: 77,
    titre: "Père tu l'as fait pour moi",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/pere-tu-las-fait-pour-moi.txt",
    audio: ""
  },
  {
    id: 78,
    titre: "Je ne suis rien sans toi",
    auteur: "Malaine Mewo",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/je-ne-suis-rien-sans-toi.txt",
    audio: ""
  },
  {
    id: 79,
    titre: "You are powerful Jesus",
    auteur: "Françoise Gwather",
    annee: "2020",
    langue: "Anglais",
    paroles: "paroles/you-are-powerful-jesus.txt",
    audio: ""
  },
  {
    id: 80,
    titre: "Laisse moi entrer",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/laisse-moi-entrer.txt",
    audio: ""
  },
  {
    id: 81,
    titre: "Un chant s'élève",
    auteur: "Chantre Agréable",
    annee: "2019",
    langue: "Français",
    paroles: "paroles/un-chant-seleve.txt",
    audio: ""
  },
  {
    id: 82,
    titre: "Je m'abandonne à toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/je-mabandonne-a-toi.txt",
    audio: ""
  },
  {
    id: 83,
    titre: "C'est toi le soleil'",
    auteur: "Chantre Agréable",
    annee: "2018",
    langue: "Français",
    paroles: "paroles/cest-toi-le-soleil.txt",
    audio: ""
  },
  {
    id: 84,
    titre: "Reveille moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/reveille-moi.txt",
    audio: ""
  },
  {
    id: 85,
    titre: "Juste te plaire",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/juste-te-plaire.txt",
    audio: ""
  },
  {
    id: 86,
    titre: "Me voici",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/me-voici.txt",
    audio: ""
  },
  {
    id: 87,
    titre: "Here I am",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Anglais",
    paroles: "paroles/here-i-am.txt",
    audio: ""
  },
  {
    id: 88,
    titre: "Je travail et je recolte",
    auteur: "Pasteur et chantre Nadine",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/je-travail-et-je-recolte.txt",
    audio: ""
  },
  {
    id: 89,
    titre: "Merci Merci (Enfants)",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/merci-merci-enfants.txt",
    audio: ""
  },
  {
    id: 90,
    titre: "Donne moi la foi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2020",
    langue: "Français",
    paroles: "paroles/donne-moi-la-foi.txt",
    audio: ""
  },
  {
    id: 91,
    titre: "J'ai faim de toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2001",
    langue: "Français",
    paroles: "paroles/jai-faim-de-toi.txt",
    audio: ""
  },
  {
    id: 92,
    titre: "Pas comme les autres",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/pas-comme-les-autres.txt",
    audio: ""
  },
  {
    id: 93,
    titre: "Me beges we",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Bassa",
    paroles: "paroles/me-beges-we.txt",
    audio: ""
  },
  {
    id: 94,
    titre: "Attires moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/attires-moi.txt",
    audio: ""
  },
  {
    id: 95,
    titre: "Souffle sur nous",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/souffle-sur-nous.txt",
    audio: ""
  },
  {
    id: 96,
    titre: "Esprit viens",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/esprit-viens.txt",
    audio: ""
  },
  {
    id: 97,
    titre: "Tu règnes dans les cieux et sur la terre",
    auteur: "Pasteur et chantre Pascale",
    annee: "2017",
    langue: "Français",
    paroles: "paroles/tu-regnes-dans-les-cieux-et-sur-la-terre.txt",
    audio: ""
  },
  {
    id: 98,
    titre: "Seigneur de gloire",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/seigneur-de-gloire.txt",
    audio: ""
  },
  {
    id: 99,
    titre: "Ouvre moi la porte",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/ouvre-moi-la-porte.txt",
    audio: ""
  },
  {
    id: 100,
    titre: "Holy Jesus",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Anglais",
    paroles: "paroles/holy-jesus.txt",
    audio: ""
  },
  {
    id: 101,
    titre: "Les fruits de l'esprit (enfants)",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/les-fruits-de-lesprit-enfants.txt",
    audio: ""
  },
  {
    id: 102,
    titre: "Arroses",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/arroses.txt",
    audio: ""
  },
  {
    id: 103,
    titre: "El Adonai",
    auteur: "L'eveque Guy L. Bayong",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/el-adonai.txt",
    audio: ""
  },
  {
    id: 104,
    titre: "Pardonnes",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/pardonnes.txt",
    audio: ""
  },
  {
    id: 105,
    titre: "Je suis à toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/je-suis-a-toi.txt",
    audio: ""
  },
  {
    id: 106,
    titre: "Ouvre les yeux de mon coeur",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/ouvre-les-yeux-de-mon-coeur.txt",
    audio: ""
  },
  {
    id: 107,
    titre: "Il y a un nom",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/il-y-a-un-nom.txt",
    audio: ""
  },
  {
    id: 108,
    titre: "Alleloua",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/alleloua.txt",
    audio: ""
  },
  {
    id: 109,
    titre: "Tu règnes",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/tu-regnes.txt",
    audio: ""
  },
  {
    id: 110,
    titre: "Qui ne te craindrait",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/qui-ne-te-craindrait.txt",
    audio: ""
  },
  {
    id: 111,
    titre: "Coule en moi",
    auteur: "Chantre Agréable",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/coule-en-moi.txt",
    audio: ""
  },
  {
    id: 112,
    titre: "Eleves toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/eleves-toi.txt",
    audio: ""
  },
  {
    id: 113,
    titre: "You are my God",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Anglais",
    paroles: "paroles/you-are-my-god.txt",
    audio: ""
  },
  {
    id: 114,
    titre: "Your name is Alpha",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Anglais",
    paroles: "paroles/your-name-is-alpha.txt",
    audio: ""
  },
  {
    id: 115,
    titre: "Marches avec moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/marches-avec-moi.txt",
    audio: ""
  },
  {
    id: 116,
    titre: "Purifie moi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/purifie-moi.txt",
    audio: ""
  },
  {
    id: 117,
    titre: "Je veux etre saint",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/je-veux-etre-saint.txt",
    audio: ""
  },
  {
    id: 118,
    titre: "Jesus",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/jesus.txt",
    audio: ""
  },
  {
    id: 119,
    titre: "Mut Nupe A Tabe ki we",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Bassa",
    paroles: "paroles/mut-nupe-a-tabe-ki-we.txt",
    audio: ""
  },
  {
    id: 120,
    titre: "Sois béni",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/sois-beni.txt",
    audio: ""
  },
  {
    id: 121,
    titre: "Laisse moi entrer dans tes parvis",
    auteur: "Pasteur et chantre Nadine",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/laisse-moi-entrer-dans-tes-parvis.txt",
    audio: ""
  },
  {
    id: 122,
    titre: "Victory Belong to Jesus",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/victory-belong-to-jesus.txt",
    audio: ""
  },
  {
    id: 123,
    titre: "Je te fais confiance",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/je-te-fais-confiance.txt",
    audio: ""
  },
  {
    id: 124,
    titre: "Emmanuel",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/emmanuel.txt",
    audio: ""
  },
  {
    id: 125,
    titre: "Tiens moi par la main",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/tiens-moi-par-la-main.txt",
    audio: ""
  },
  {
    id: 126,
    titre: "Tout va bien",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/tout-va-bien.txt",
    audio: ""
  },
  {
    id: 127,
    titre: "Tu es souverain",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/tu-es-souverain.txt",
    audio: ""
  },
  {
    id: 128,
    titre: "Gloire à l'agneau de Dieu",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/gloire-a-lagneau-de-dieu.txt",
    audio: ""
  },
  {
    id: 129,
    titre: "Reçois l'honneur",
    auteur: "Pasteur et chantre Pascale",
    annee: "2021",
    langue: "Français",
    paroles: "paroles/recois-lhonneur.txt",
    audio: ""
  },
  {
    id: 130,
    titre: "Dis juste un mot",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/dis-juste-un-mot.txt",
    audio: ""
  },
  {
    id: 131,
    titre: "Oh Lord",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Anglais",
    paroles: "paroles/oh-lord.txt",
    audio: ""
  },
  {
    id: 132,
    titre: "I'm waiting for you",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Anglais",
    paroles: "paroles/im-waiting-for-you.txt",
    audio: ""
  },
  {
    id: 133,
    titre: "Tu as promis",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/tu-as-promis.txt",
    audio: ""
  },
  {
    id: 134,
    titre: "Je me prosterne",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/je-me-prosterne.txt",
    audio: ""
  },
  {
    id: 135,
    titre: "Juste en peu de toi",
    auteur: "Benny Emmanuelle",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/juste-en-peu-de-toi.txt",
    audio: ""
  },
  {
    id: 136,
    titre: "Plus de toi",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/plus-de-toi.txt",
    audio: ""
  },
  {
    id: 137,
    titre: "L'amour de Dieu",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/lamour-de-dieu.txt",
    audio: ""
  },
  {
    id: 138,
    titre: "Magnifique en saintété",
    auteur: "",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/magnifique-en-saintete.txt",
    audio: ""
  },
  {
    id: 139,
    titre: "Adonai sois magnifié",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/adonai-sois-magnifie.txt",
    audio: ""
  },
  {
    id: 140,
    titre: "Abba",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/abba.txt",
    audio: ""
  },
  {
    id: 141,
    titre: "Yeshuah Messiah",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/yeshuah-messiah.txt",
    audio: ""
  },
  {
    id: 142,
    titre: "Hosanna eh",
    auteur: "Pasteur et chantre Nadine",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/hosanna-eh.txt",
    audio: ""
  },
  {
    id: 143,
    titre: "Reçois mon adoration",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/recois-mon-adoration.txt",
    audio: ""
  },
  {
    id: 144,
    titre: "Ta présence je la veux",
    auteur: "Pasteur et chantre Pascale",
    annee: "2022",
    langue: "Français",
    paroles: "paroles/ta-presence-je-la-veux.txt",
    audio: ""
  }
];