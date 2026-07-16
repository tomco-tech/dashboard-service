# Dashboard Service Utilisateur — V1.7

Évolutions principales :

- filtre Service utilisateur placé en premier ;
- filtres réunis dans un seul conteneur blanc ;
- suppression des bandeaux et sous-titres « Services » / « Sujets » ;
- recherche opérationnelle limitée à « Rechercher un mot clé », Statut et Priorité ;
- sections RTU, Infra & Flux, EMM et Chantiers fermées par défaut ;
- catégories EMM fermées par défaut ;
- couleurs de données réservées à la priorité et aux échéances en retard ;
- titre par défaut : « Dashboard Commun ».

## Installation

Publier `index.html` à la racine de GitHub Pages avec `.nojekyll`, puis utiliser l’URL du site dans un widget Custom Grist avec accès complet au document.


## Ajustements V1.7

- Titres de sections simplifiés : RTU, Réseau, Raccordement et Flux, EMM, Chantiers de Conception.
- Lorsqu’un service utilisateur est sélectionné, la section RTU est automatiquement ouverte et affiche directement le détail du RTU, sans carte imbriquée ni bouton de repli.
- Le RTU sélectionné reste visible indépendamment des filtres opérationnels Statut / Priorité.
