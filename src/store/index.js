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
        products: testData,
        productsTotal: testData.length,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "Alle"
    },
    getters: {
        productsFilteredByCategory: state => state.products
            .filter(p => state.currentCategory == "Alle" || p.category == state.currentCategory),
        processedProducts: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);
        },
        pageCount: (state, getters) =>
            Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
        categories: state => ["Alle",
            ...new Set(state.products.map(p => p.category).sort())]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        }
    }
})