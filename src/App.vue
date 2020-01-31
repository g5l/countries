<template>
  <div id="countries">
    <div class="countries__header">
      <div class="container grid-xl">
        <h1>Where in the world?</h1>
      </div>
    </div>

    <div class="countries__actions">

    </div>

    <div class="countries__items">
      <div class="container grid-xl">
        <div class="columns">
          <div class="column col-3">
            <a-country-item/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ACountryItem from './components/atoms/a-country-item.vue';

export default {
  name: 'app',
  components: {
    ACountryItem,
  },
};
</script>

<style lang="stylus" scoped>
  #countries {
    background: var(--primary-background-color);
    height: 600px;

    .countries__header {
      background: var(--primary-el-color);
      color: var(--primary-text-color);
      padding: 25px 0;

      h1 {
        font-weight: 800;
        font-size: 26px;
        margin: 0;
      }
    }
  }
</style>
