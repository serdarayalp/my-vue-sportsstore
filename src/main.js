import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

/*
Die Import-Anweisung deklariert eine Abhängigkeit vom Datenspeicher-Modul (store) und weist ihm 
die Store-Kennung zu. Das Hinzufügen der store-Eigenschaft zur Konfigurationseigenschaft, die zum 
Erstellen des Vue-Objekts verwendet wird, stellt sicher, dass die Funktionen des Datenspeichers in der 
gesamten Anwendung verwendet werden können, wie Sie sehen werden, wenn Funktionen zu SportsStore 
hinzugefügt werden.
*/
import store from "./store";
import router from "./router";

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
