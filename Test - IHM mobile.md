

# Introduction IHM mobile

Les maquettes ont été réalisées avec Figma et sont accessibles via les liens suivants :

Projet complet: https://www.figma.com/file/F9evkC1cYXNAX2DYkY1hee/Eqinov-Template

Wireframe: https://www.figma.com/file/F9evkC1cYXNAX2DYkY1hee/Eqinov-Template?node-id=15%3A2

Maquette: https://www.figma.com/file/F9evkC1cYXNAX2DYkY1hee/Eqinov-Template?node-id=23%3A0

Prototype Mobile (Accessible depuis un smartphone): https://www.figma.com/proto/F9evkC1cYXNAX2DYkY1hee/Eqinov-Template?node-id=23%3A1402&viewport=756%2C527%2C0.5819594264030457&scaling=scale-down



## Header

Un header minimaliste comprenant seulement deux informations: le nom de l'entreprise client ainsi qu'un indicatif de la disponibilité du client représenté sous forme d'un label et d'une puce colorée. <u>Vert</u>: dispo <u>Rouge</u>: non dispo.

![BLOC CLIENT - plié](D:\webProjects\Eqinov-test\images\export-figma\BLOC CLIENT - plié.jpg)

L'utilisateur peut alors accéder à des informations complémentaires en pressant sur le bouton `+` au style de Material Design, très commun dans les applications mobile d'aujourd'hui car il est compréhensible par une grande majorité d'utilisateurs.

On y trouve : 

- Adresse
- Type de contrat
- Type de compteur 
- Siret 
- Disponibilités

![BLOC CLIENT - déplié](D:\webProjects\Eqinov-test\images\export-figma\BLOC CLIENT - déplié.jpg)

On y trouve également la liste des contacts rattachés au contrat. Un rappel visuel du client peut aider l'équipe opérationnelle.

Le bouton `+` pivote pour former une `x`  pour replier le volet d'information si besoin.



## Bloc de la consommation réelle

L'utilisateur voit sa consommation réelle total de l'année en cours ainsi que sa consommation du mois actuel. En un coup d'oeil il peut remarquer sa performance énergétique. <u>En vert</u>, excellente performance. <u>En orange</u>, peut mieux faire. <u>En rouge</u>, aucun gain de conso. énergétique.

Le premier indice de performance est une comparaison de sa conso. réelle de l'année en cours à celle de l'année précédente. 

Le deuxième indice, compare sa conso. du mois à celle du mois de l'année précédente.

![Bloc conso Aujourd'hui - Réélle](D:\webProjects\Eqinov-test\images\export-figma\Bloc conso Aujourd'hui - Réélle.jpg)

L'utilisateur peut choisir d'afficher le graphique de comparaison détaillant sa conso. totale de l'année ou sa conso. du mois par rapport au graphique de l'année précédente. Si l'année ou le mois en cours n'est pas terminé, les prévisions sont ainsi calculées.



## Bloc de la consommation périodique

Pour faciliter l'utilisateur à la recherche de données pertinentes, nous lui proposons plusieurs filtres de recherche par périodicité.

- Jours - Graphique affichant les 24 heures d'une journée. 
- Mois - Graphique affichant tous les jours du mois sélectionné.
- Semestres - Graphique affichant les 6 mois d'un semestre.
- Années - Graphique affichant les 12 mois de l'année.

Ceci affichera la périodicité de l'année en cours, mais l'utilisateur peut tout à fait avoir accès aux prévisions en avançant dans le temps grâce à la navigation fléchée.

![Bloc conso Périodiques](D:\webProjects\Eqinov-test\images\export-figma\Bloc conso Périodiques.jpg)

L'utilisateur peut choisir d'afficher les courbes souhaitées, en cliquant sur les différentes légendes. Fonctionne comme des checkbox.



## Bloc destiné à l'export des données de consommation

Cette section permet à l'utilisateur de télécharger ou de partager des données détaillées relatives à sa consommation d'énergie en entrant un intervalle de temps.

![Bloc export conso](D:\webProjects\Eqinov-test\images\export-figma\Bloc export conso.jpg)

Une fois validé, le graphique s'affiche avec les options d'export.

![Bloc export conso - afficher](D:\webProjects\Eqinov-test\images\export-figma\Bloc export conso - afficher.jpg)



## Bloc de la consommation prévisionnelle

L'idée est que l'utilisateur ne peut voir que les prévisions établies via l'API partenaire. Il peut naviguer en jours, mois, semestres, années. 

(Maquette non finalisée. Réf : conso. aujourd'hui et conso. périodique)

![Bloc conso Prévisionnelles](D:\webProjects\Eqinov-test\images\export-figma\Bloc conso Prévisionnelles.jpg)



## Navigation

L'utilisateur peut accéder au menu en bas à droite de l'écran mobile lui permettant de:

- Contacter un responsable : Le client et l'opérationnel peuvent se contacter par téléphone selon disponibilités. 
- Planifier un rendez-vous : Le client et l'opérationnel peuvent planifier un rendez-vous selon les disponibilités.
- Envoyer un message : Le client et l'opérationnel peuvent s'échanger des messages courts si besoin.
- Signaler une anomalie : Le client et l'opérationnel peuvent signaler un disfonctionnement lié à l'interface.

![navigation](D:\webProjects\Eqinov-test\images\export-figma\navigation.JPG)