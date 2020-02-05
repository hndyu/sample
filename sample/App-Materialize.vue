<template>
  <div id="container">aaa</div>
</template>

<script>
/*import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";*/

export default {
  /*components: {
    Header,
    Main,
    Footer
  },*/
  data() {
    return {
      //ナビバーのスタイル決定
      //standard(Navs) or oneLiner(Navbar)
      /*navStyle: "oneLiner",
      themeColor: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ],
      themeColorIndex: 0*/
    };
  }
};
</script>

<style lang="scss">
:root {
  --theme-color: #007bff;
  --theme-color-light: #e5f2ff;
  --theme-color-dark: #003d80;
}
html {
  scroll-behavior: smooth;
}
</style>
