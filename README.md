## Projet API / Base de données

### Présentation du projet
Vous êtes un développeur travaillant pour une start-up de marketing en ligne appelée "MarketX". La société propose des services de marketing numérique, y compris la gestion de campagnes publicitaires, l'analyse de données, et la création de contenu promotionnel. Actuellement, MarketX souhaite mettre en place une API simple pour permettre aux utilisateurs d'accéder à des informations de base sur les campagnes publicitaires en cours.

### Objectifs du projet
Créer des routes API de type GET qui fournissent des informations statiques sur les campagnes publicitaires de MarketX. Ces informations peuvent inclure le nom de la campagne, la description, la date de début et de fin, ainsi que le budget alloué.

### Contraintes
Les routes doivent être implémentées en utilisant Express.

### Routes API
Endpoint : /api/campaigns
Méthode : GET
Réponse : Un tableau JSON contenant des objets représentant chaque campagne publicitaire avec les détails requis (nom, description, date de début, date de fin, budget).
Récupérer les détails d'une campagne spécifique :

Endpoint : /api/campaigns/{id}
Méthode : GET
Paramètre : id est l'identifiant unique de la campagne.
Réponse : Un objet JSON représentant les détails de la campagne spécifiée.

Endpoint : POST /api/campaigns
Description : Permet de créer une nouvelle campagne.
Données requises : nom, description, date de début, date de fin, budget

Endpoint : DELETE /events/{id}
Description : Supprime un événement en fonction de son ID.