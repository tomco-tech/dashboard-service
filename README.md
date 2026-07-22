# Dashboard Service Utilisateur — V1.17

Cette version apporte les évolutions suivantes :

- titre par défaut remplacé par **Tableau de Bord 360** ;
- cartes RTU multi-services intitulées `Service Utilisateur - RTU - Version` ;
- complétude RTU synthétisée en `x/7`, sans détail par domaine dans les cartes ;
- cartes EMM intitulées `Service Utilisateur - Catégorie` ;
- date des sujets Infra & Flux affichée sous la forme compacte `Date demande : JJ/MM/AAAA`, sans signalement rouge de retard ;
- ajout, dans l’en-tête EMM, des compteurs P0/P1/P2/P3/P4 cliquables pour filtrer localement les sujets EMM ;
- le bouton `Désélectionner tout` de la section EMM réinitialise les filtres de catégorie et de priorité.

## Publication

Déposer `index.html`, `README.md` et `.nojekyll` à la racine du dépôt GitHub Pages, puis forcer le cache dans Grist avec un paramètre d’URL, par exemple `?v=1.17`.
