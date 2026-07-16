# Dashboard Service Utilisateur — V1.1 diagnostic

Ce widget consolide plusieurs tables Grist : suivi RTU, Infra & Flux, EMM, chantiers de conception, référentiel des services et référentiel des acteurs.

## Point important : absence de mapping natif

Il est normal que le panneau Grist ne propose pas de mapping de colonnes : le mapping natif ne concerne que la table sélectionnée par le widget, alors que ce dashboard lit plusieurs tables via `grist.docApi.fetchTable()`.

La configuration des sources se fait dans le widget avec le bouton **Configurer**. La V1.1 ouvre automatiquement cette configuration lorsqu’une table n’est pas détectée et affiche un diagnostic lisible.

## Installation

1. Remplacer les fichiers GitHub Pages par `index.html`, `styles.css`, `app.js`, `README.md` et `.nojekyll`.
2. Dans Grist, utiliser l’URL GitHub Pages avec **Full document access**.
3. Cliquer sur **Configurer** si le bandeau orange apparaît.
4. Sélectionner les identifiants techniques des tables, par exemple :
   - `REF_Services_Utilisateurs`
   - `A_Suivi_RTU`
   - `B_Infra_Flux`
   - `B_EMM`
   - `B_Chantiers_de_conception`
   - `REF_Acteurs` (facultatif)

Les alias affichés dans Grist peuvent contenir des espaces ou `&`, tandis que les identifiants techniques utilisent généralement des underscores.

## Sécurité

Le widget nécessite **Full document access**, car il lit plusieurs tables et peut modifier les lignes sources. Il n’effectue aucun appel réseau vers un service tiers autre que le chargement de l’API officielle Grist.
