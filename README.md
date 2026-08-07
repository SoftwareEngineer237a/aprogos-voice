# APROGOS VOICE

Site statique Frontend uniquement pour la chorale APROGOS VOICE, rattachée à APIM - Apostolic Prophetic Impact Mission.

## Structure

- `index.html` : page d'accueil.
- `pages/formation.html` : interface de cours.
- `pages/exercices.html` : fiches pratiques.
- `pages/chants.html` : bibliothèque musicale.
- `css/` : styles séparés par responsabilité.
- `js/` : logique séparée par fonctionnalité.
- `data/` : données modifiables sans toucher à l'interface.
- `assets/images/` : illustrations SVG légères et pédagogiques.

## Modifier les chants

Les chants de démonstration sont dans `data/chants.js`.

Remplacer ou ajouter des entrées avec uniquement :

- `id`
- `titre`
- `auteur`
- `annee`
- `langue`
- `paroles`

## Tester localement

Ouvrir le dossier dans un éditeur puis lancer un serveur statique local, par exemple avec l'extension Live Server de VS Code.

## Déployer sur Vercel

1. Créer un dépôt GitHub.
2. Envoyer tout le projet dans le dépôt.
3. Connecter le dépôt à Vercel.
4. Choisir un déploiement statique sans backend.
5. Déployer.