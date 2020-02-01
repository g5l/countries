<template>
  <div class="countries-header">
    <div class="container grid-xl">
      <div class="columns">
        <div class="column col-12">
          <div class="header__content">
            <router-link to="/">
              <h1>Where in the world?</h1>
            </router-link>
            <a-layout-mode/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ALayoutMode from '../atoms/a-layout-mode.vue';

export default {
  name: 'app',
  components: {
    ALayoutMode,
  },
};
</script>

<style lang="stylus" scoped>
  .countries-header {
    background: var(--primary-el-color);
    color: var(--primary-text-color);
    padding: 25px 0;
    box-shadow: 0 0 7px 1px var(--primary-shadow-color);

    .header__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      font-weight: 800;
      font-size: 18px;
      margin: 0;

      @media (min-width: 480px) {
        font-size: 24px;
      }
    }
  }
</style>
