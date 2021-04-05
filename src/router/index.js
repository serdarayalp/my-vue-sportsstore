import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart";

Vue.use(VueRouter);

export default new VueRouter({
    // die Eigenschaft "mode" auf "history" gesetzt, was Vue-Router anweist, eine aktuelle Browser-API
    // für die Verarbeitung der URLs zu verwenden. Es wird aber von älteren Browsern nicht unterstützt.
    mode: "history",
    routes: [
        {path: "/", component: Store},
        {path: "/cart", component: ShoppingCart},
        {path: "*", redirect: "/"}
    ]
})