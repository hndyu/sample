<template>
  <footer
    id="footer"
    class="text-white text-center p-5"
    :class="['bg-' + themeColor[themeColorIndex]]"
  >
    <address>
      <span>TEL:</span>
      <strong>
        <a href="tel:03-3227-7161" class="text-white">03-3227-7161</a>
      </strong>
    </address>
    <ul class="list-unstyled">
      <li class>営業時間｜20:00～翌6:00（年中無休、翌4:00まで早閉めなし）</li>
      <li class>定休日｜年中無休</li>
    </ul>
    <ul class="list-inline">
      <li class="list-inline-item">
        <small>
          <a
            href="https://www.gb-walker.jp/kanto/list-shop/search/roppongi/"
            class="text-white"
          >▽赤坂の人気ガールズバー</a>
        </small>
      </li>
      <li class="list-inline-item">
        <small>
          <a
            href="https://www.gb-walker.jp/kanto/recruit/list-shop/search/roppongi/"
            class="text-white"
          >▽赤坂の稼げる人気ガールズバー求人</a>
        </small>
      </li>
    </ul>
    <small>©︎ 2019 Sample店</small>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["themeColor", "themeColorIndex"]
};
</script>

<style lang="scss" scoped>
a[href*="tel"] {
  font-size: 2rem;
}
</style>
