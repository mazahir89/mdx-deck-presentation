## Développement

### Extensions VS Code

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)

### Afficher le site

#### Générer le site pour le développement

Depuis la racine du site, faire :

* `npm install` => Récupère les dépendances du site
* `npm start` => Compile et lance le site
* Dans votre navigateur préféré, saisir : http://127.0.0.1:8080/

#### Déployer le site

Pour valider le site, depuis la racine du site :

* `npm run build` => Le site est généré dans le dossier public
* Se rendre dans le dossier public et lancez lancez le fichier index.html
