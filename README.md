# Dashboard Service Utilisateur — mise en page adaptative des sections

Cette version améliore la mise en page des quatre sections :

- toutes les sections fermées ont la même largeur compacte ;
- une section ouverte s’étend automatiquement sur toute la largeur du dashboard ;
- les cartes de Réseau, Raccordement et Flux et des Chantiers de Conception utilisent la même grille que les cartes RTU ;
- les sous-sections EMM sont présentées trois par ligne sur les grands écrans, avec un espacement régulier ;
- les cartes EMM sont harmonisées à l’intérieur de chaque sous-section ;
- les titres de sections sont agrandis tout en restant en capitales et en gris.

Le comportement particulier du RTU pour un service sélectionné est conservé : le panneau affiche directement le détail du RTU et reste ouvert.

## Publication

Déposer `index.html` et `.nojekyll` à la racine du dépôt GitHub Pages.

Pour forcer le rafraîchissement dans Grist, utiliser temporairement un paramètre d’URL, par exemple :

`?v=1.9`
