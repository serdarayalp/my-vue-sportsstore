# my-vue-sportsstore

Project setup (mit default-Verhalten(--default))
```
vue create sportsstore --default
```

Das Axios-Paket wird verwendet, um HTTP-Anfragen an den Webdienst zu stellen, der SportsStore mit Daten und Diensten versorgt. Axios ist nicht spezifisch für Vue.js, aber es ist eine gängige Wahl für die Handhabung von HTTP.
```
npm install axios@0.18.0
```

Dieses Paket ermöglicht es der Anwendung, unterschiedliche Inhalte auf der Grundlage der aktuellen URL des Browsers anzuzeigen. Dieser Vorgang wird als URL-Routing bezeichnet.
```
npm install vue-router@3.0.1
```

Dieses Paket wird verwendet, um einen gemeinsamen Datenspeicher zu erstellen, der die Verwaltung von Daten in einem Vue.js-Projekt vereinfacht.
```
npm install vuex@3.0.1
```

Dieses Paket wird verwendet, um die Daten zu validieren, die ein Benutzer in Formularelemente eingibt.
```
npm install vuelidate@0.7.4
```

Das Bootstrap-Paket enthält CSS-Stile, die für die Gestaltung des HTML-Inhalts verwendet werden, den die SportsStore-Anwendung dem Benutzer präsentiert.
```
npm install bootstrap@4.0.0
```

Das Font Awesome-Paket enthält eine Bibliothek von Icons, die SportsStore verwenden wird, um wichtige Funktionen für den Benutzer zu kennzeichnen.
```
npm install font-awesome@4.7.0
```

## --save-dev bedeutet, dass sie während der Entwicklung verwendet werden und nicht Teil der Anwendung sind.

Dieses Paket bietet einen benutzerfreundlichen RESTful-Webdienst für die Anwendungsentwicklung, und es ist dieses Paket, das die HTTP-Anfragen, die mit Axios gestellt werden, empfangen wird.
```
npm install --save-dev json-server@0.12.1
```

Dieses Paket wird verwendet, um Autorisierungs-Token zu generieren, die Zugriff auf die SportsStore-Verwaltungsfunktionen gewähren
```
npm install --save-dev jsonwebtoken@8.1.1
```

Dieses Paket wird verwendet, um Testdaten zu erzeugen, um sicherzustellen, dass SportsStore mit großen Datenmengen umgehen kann.
```
npm install --save-dev faker@4.1.0
```

# Starten des json-server
```
npm run json
```
Server ist unter der URL http://localhost:3500 erreichbar.

# Build starten
Das Argument --modern ist eine optionale Funktion, die zwei Versionen der Anwendung erzeugt, von denen eine nur für moderne Browser ist, die die neuesten JavaScript-Funktionen unterstützen, und eine für ältere Browser, die zusätzlichen Code und Bibliotheken benötigen, um diese Funktionen zu verarbeiten.
```
npm run build --modern
```