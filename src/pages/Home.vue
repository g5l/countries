<template>
  <div id="countries">
    <div class="container grid-xl">
      <div class="countries__actions">
        <div class="columns">
          <div class="column col-5">
            {{searchCountry}}
            <a-input
              v-model="searchCountry"
              placeholder="Search for a country..."
            />
          </div>
          <div class="column col-2 col-ml-auto">
            <a-select :options="filterOptions"/>
          </div>
        </div>
      </div>
      <div class="columns">
        <div
          v-for="country in countries"
          :key="country.name"
          class="column col-3 col-lg-4 col-md-6 col-sm-12"
        >
          <router-link :to="country.alpha3Code">
            <a-country-item
              :flag="country.flag"
              :country="country.name"
              :population="formatPopulation(country.population)"
              :region="country.region"
              :capital="country.capital"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatNumber from '../utils/formatNumber';

import AInput from '../components/atoms/a-input.vue';
import ASelect from '../components/atoms/a-select.vue';
import ACountryItem from '../components/atoms/a-country-item.vue';

export default {
  name: 'home',
  components: {
    ACountryItem,
    ASelect,
    AInput,
  },
  data() {
    return {
      countries: [],
      searchCountry: '',
    };
  },
  computed: {
    filterOptions() {
      const regions = this.countries.map(({ region }) => region);
      const uniqueRegions = [...new Set(regions)];
      const cleanRegions = uniqueRegions.filter(el => el !== '');
      return cleanRegions;
    },
  },
  methods: {
    async fetchCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      this.countries = await response.json();
    },
    formatPopulation(population) {
      return formatNumber(population);
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>

<style lang="stylus" scoped>
  .countries__actions {
    padding: 40px 0;
  }
</style>
