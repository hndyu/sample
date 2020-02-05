import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App-Materialize";

Vue.use(Vuetify);

//ページ構築
new Vue({
  el: "#container",
  components: { App },
  template: "<App/>"
});
