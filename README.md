# Portfolio d’Ethan Cabanes

Portfolio personnel en Angular, conçu pour être généré en fichiers statiques et déployé sur GitHub Pages.

## Développement local

```bash
npm install
npm start
```

Puis ouvrir `http://localhost:4200/`.

## TODO avant publication

- Ajouter le CV dans `src/assets/cv-ethan-cabanes.pdf`.
- Remplacer les liens GitHub et LinkedIn marqués `TODO` dans `src/app/app.component.html`.
- Vérifier le nom du dépôt dans le workflow GitHub Pages.
- Compléter les éventuels projets futurs.

## Production

```bash
npm run build
```

Le workflow `.github/workflows/deploy.yml` publie automatiquement le dossier généré sur GitHub Pages à chaque push sur `main`.
