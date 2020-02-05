import "bootstrap";
import "./common-bootstrap.scss";
import Vue from "vue";
import App from "./App-Bootstrap";

//ページ構築
new Vue({
  el: "#container",
  components: { App },
  template: "<App/>"
});
