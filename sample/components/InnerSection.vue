<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-lg-8 text-center" :class="textColor ? textColor : 'text-dark'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["textColor"]
};
</script>

<style lang="scss" scoped>
</style>
