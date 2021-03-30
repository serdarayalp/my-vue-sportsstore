<template>
  <div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <h4>
        {{ p.name }}
        <span class="badge badge-pill badge-primary float-right">
          {{ p.price }}
        </span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    /* (...) ist der Spread-Operator oder die Spread-Syntax. 
    Er nimmt im Wesentlichen einen Ausdruck (normalerweise ein Array) und wandelt ihn in 
    mehrere Anweisungen um. 

    Das Skript-Element importiert die Funktion mapState aus dem vuex-Paket, die verwendet 
    wird, um den Zugriff auf die Daten im Speicher ermöglicht. Es gibt verschiedene 
    Vuex-Funktionen für verschiedene Arten von Operationen, und mapState wird verwendet, 
    um ein Mapping zwischen der Komponente und den Zustandsdaten im Datenspeicher zu erstellen. 
    
    Die mapState-Funktion wird mit dem Spread-Operator verwendet, weil sie mehrere Eigenschaften
    des Datenspeichers in einer einzigen Operation abbilden kann, auch wenn in diesem Beispiel 
    nur die Produkteigenschaft state abgebildet wird. Datenspeicherstatus Eigenschaften des 
    Datenspeichers werden als komponentenberechnete Eigenschaften abgebildet, 
    die ich in Kapitel 11 ausführlich beschreibe. Vue.js verwendet eine Funktion namens Direktiven, 
    um HTML-Elemente zu manipulieren. Im Listing verwende ich die v-for Direktive, die ein Element 
    und seinen Inhalt für jedes Element in einem Array dupliziert.
      */
    ...mapState(["products"]),
  },
};
</script>
