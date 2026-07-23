# Dashboard Service Utilisateur — V1.19

Cette version refond le panneau de détail et d’édition des cartes.

## Édition adaptée aux types Grist

- **Reference** : champ de recherche avec autocomplétion, sans longue liste native.
- **Reference List** : sélection multiple sous forme de pastilles, avec recherche.
- **Choice / Choice List** : listes compactes ou sélection multiple adaptée.
- **Date / DateTime** : sélecteurs de date.
- **Bool / Toggle** : interrupteur Oui / Non.
- **Numeric / Int** : saisie numérique.
- **Text** : champ court ou zone de texte selon l’usage.
- **Formules et pièces jointes** : consultation uniquement.

Les champs `Statut`, `Étape`, `Priorité` et les statuts de complétude du RTU sont filtrés selon leur contexte. Une référence vers `REF_Backend` n’affiche donc plus l’ensemble des listes du backend.

## Mise à jour des tables sources

L’enregistrement utilise une action `UpdateRecord` partielle sur la table et la ligne d’origine de la carte. Seuls les champs effectivement modifiés sont envoyés. Après l’écriture, le widget relit la ligne source et vérifie les valeurs enregistrées avant de fermer le panneau.

La structure EMM actuelle est prise en compte : le champ `Sprint` est retiré et le champ `Cible` est ajouté.

## Publication

Déposer `index.html`, `README.md` et `.nojekyll` à la racine du dépôt GitHub Pages, puis forcer le cache dans Grist avec un paramètre d’URL, par exemple `?v=1.19`.
