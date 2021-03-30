import Vue from "vue";
import Vuex from "vuex";

/* 
Plugins werden über die Methode Vue.use aktiviert. Wenn Sie vergessen, die use-Methode aufzurufen, 
dann werden die Funktionen des Datenspeichers im Rest der Anwendung nicht verfügbar sein.
*/
Vue.use(Vuex);

const testData = [];

for (let i = 1; i <= 10; i++) {
    testData.push({
        id: i,
        name: `Produkt #${i}`,
        category: `Kategorie ${i % 3}`,
        description: `Das ist Produkt #${i}`,
        price: i * 50
    })
}

export default new Vuex.Store({
    strict: true,
    state: {
        products: testData
    }
})