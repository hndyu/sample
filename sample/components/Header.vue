<template>
  <!--standardスタイルのナビバーの場合-->
  <header v-if="navStyle === 'standard'" id="header" class="header-standard">
    <h1>
      <a href="../" class="text-dark px-3">Sample店</a>
    </h1>
    <div>
      <a href="#" class="navbar-text" @click.prevent="changeThemeColor">テーマカラー切り替え&nbsp;</a>
      <a href="#" class="navbar-text" @click.prevent="changeNavStyle">ヘッダー切り替え&nbsp;</a>
    </div>
    <nav>
      <ul class="nav nav-justified" :class="[navTextColor,'bg-' + themeColor[themeColorIndex]]">
        <li v-for="item in items" :key="item.id" class="nav-item border">
          <a :href="'#' + item.message|lowercase" class="nav-link">{{ item.message }}</a>
        </li>
      </ul>
    </nav>
  </header>

  <!--oneLinerスタイルのナビバーの場合-->
  <header v-else-if="navStyle === 'oneLiner'" id="header" class="header-one-liner">
    <nav
      id="header-nav"
      class="navbar fixed-top navbar-expand-lg"
      :class="[navTextColor,'bg-' + themeColor[themeColorIndex]]"
    >
      <h1>
        <a class="navbar-brand" href="../">Sample店</a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"/>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li v-for="item in items" :key="item.id" class="nav-item">
            <a :href="'#' + item.message|lowercase" class="nav-link">{{ item.message }}</a>
          </li>
        </ul>
        <a href="#" class="navbar-text" @click.prevent="changeThemeColor">テーマカラー切り替え&nbsp;</a>
        <a href="#" class="navbar-text" @click.prevent="changeNavStyle">ヘッダー切り替え&nbsp;</a>
        <a href="#" class="navbar-text" @click.prevent="changeNavTextColor">ナビ文字色切り替え&nbsp;</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: function() {
    //scrollspy用に属性を設定
    //data-offsetはナビバーの高さ
    if (this.navStyle == "oneLiner") {
      document.body.setAttribute("data-spy", "scroll");
      document.body.setAttribute("data-target", "#navbarNav");
      document.body.setAttribute("data-offset", "56");
    }
    return {
      items: [
        { id: 1, message: "Concept" },
        { id: 2, message: "News" },
        { id: 3, message: "Cast" },
        { id: 4, message: "Movie" },
        { id: 5, message: "System" },
        { id: 6, message: "Coupon" },
        { id: 7, message: "Access" }
      ],
      navTextColor: "navbar-light"
    };
  },
  methods: {
    //テーマカラーの切り替え
    changeThemeColor: function() {
      this.$parent.themeColorIndex++;
      if (this.$parent.themeColorIndex >= this.$parent.themeColor.length) {
        this.$parent.themeColorIndex = 0;
      }
    },
    //ナビの表示方法切り替え
    changeNavStyle: function() {
      this.$parent.navStyle =
        this.$parent.navStyle == "standard" ? "oneLiner" : "standard";
    },
    //ナビの文字色を切り替え
    changeNavTextColor: function() {
      this.navTextColor =
        this.navTextColor == "navbar-light" ? "navbar-dark" : "navbar-light";
    }
  },
  props: ["navStyle", "themeColor", "themeColorIndex"],
  filters: {
    lowercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    }
  }
};
</script>

<style lang="scss">
.header-one-liner {
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: inherit;
  }
}
.header-one-liner ~ #main {
  padding-top: 56px;
}
.header-one-liner ~ #main .section {
  margin-top: -56px;
  padding-top: 56px;
}
</style>
