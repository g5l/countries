<template>
  <div id="country-item">
    <img :src="flag" :alt="imageAlt" class="item__flag">
    <div class="country-item__info">
      <div class="info__name">
        {{ country }}
      </div>
      <div>
        <span>Population:</span> {{ population }}
      </div>
      <div>
        <span>Region:</span> {{ region }}
      </div>
      <div>
        <span>Capital:</span> {{ capital }}
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
    population: String,
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
    margin-bottom: 50px;
    line-height: 0;
    box-shadow: 0 0 8px 3px var(--primary-shadow-color);
    cursor: pointer;

    @media (max-width: 480px) {
      margin-left: 20px;
      margin-right: 20px;
    }

    &:hover {
      opacity: .7;
      transition: .3s;
    }

    .item__flag {
      width: 100%;
      height: 200px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      object-fit: cover;
    }

    .country-item__info {
      background: var(--primary-el-color);
      line-height: 1.6;
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
