<template>
  <div id="countries">
    <div class="countries__actions">
    </div>

    <div class="countries__items">
      <div class="container grid-xl">
        <div class="columns">
          <div
            v-for="country in countries"
            :key="country.name"
            class="column col-3 col-lg-4 col-md-6 col-sm-12"
          >
            <router-link :to="country.name">
              <a-country-item
                :flag="country.flag"
                :country="country.name"
                :population="country.population"
                :region="country.region"
                :capital="country.capital"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ACountryItem from '../components/atoms/a-country-item.vue';

export default {
  name: 'home',
  components: {
    ACountryItem,
  },
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    async fetchCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      this.countries = await response.json();
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>

<style lang="stylus" scoped>
  #countries {
    background: var(--primary-background-color);

    .countries__items {
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
</style>
