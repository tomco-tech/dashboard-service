# Dashboard Service Utilisateur — version 1.13

Widget Grist multi-tables consolidant les RTU, sujets Réseau / Raccordement / Flux, EMM et chantiers de conception d’un ou plusieurs services utilisateurs.

## Évolutions de cette version

- Pour un service utilisateur sélectionné, la section RTU ne présente plus le libellé redondant « RTU sans version ».
- La version du RTU est affichée comme une information distincte dans le détail.
- La date de réception du RTU est également affichée et modifiable lorsque la colonne existe dans `A_Suivi RTU`.
- Le widget reconnaît plusieurs variantes de libellés pour ces colonnes, notamment `Version RTU`, `Versionning`, `Date de réception` et leurs variantes techniques.
- Si plusieurs RTU existent exceptionnellement pour un même service, le plus récent selon la date de réception est affiché en priorité.

## Installation

Publier `index.html` sur GitHub Pages avec `.nojekyll`, puis utiliser l’URL comme Custom Widget Grist avec **Full document access**.
