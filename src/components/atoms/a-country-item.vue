<template>
  <div id="country-item">
    <img :src="flag" :alt="imageAlt">
    <div class="country-item__info">
      <div class="info__name">
        Germany
      </div>
      <div>
        <span>Population:</span> 81,000.000
      </div>
      <div>
        <span>Region:</span> Europe
      </div>
      <div>
        <span>Capital:</span> Berlin
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ACountryItem',
  props: {
    flag: String,
    country: String,
    population: Number,
    region: String,
    capital: String,
  },
  computed: {
    imageAlt() {
      return `${this.country} flag`;
    },
  },
};
</script>

<style lang="stylus" scoped>
  #country-item {
    color: var(--primary-text-color);
    line-height: 1.6;

    .country-item__info {
      background: var(--primary-el-color);
      padding: 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      .info__name {
        font-size: 18px;
        font-weight: 800;
        padding-bottom: 10px;
      }

      span {
        font-weight: 600;
      }
    }
  }
</style>
