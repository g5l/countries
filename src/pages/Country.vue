<template>
  <div id="country">
    <div class="container grid-xl">
      <div class="columns">
        <div class="column col-12">
          <!-- {{country}} -->
        </div>
      </div>

      <div class="columns">
        <div class="column col-6">
          <img :src="country.flag" :alt="country.name" class="country__image">
        </div>
        <div class="column col-6">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'country',
  data() {
    return {
      country: {
        name: '',
        flag: '',
      },
    };
  },
  methods: {
    async fetchCountry(name) {
      const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
      const response = await fetch(url);
      const data = await response.json();
      // eslint-disable-next-line prefer-destructuring
      this.country = data[0];
    },
  },
  mounted() {
    const countryName = this.$route.params.country;
    this.fetchCountry(countryName);
  },
};
</script>
<style lang="stylus" scoped>
  #country {
    .country__image {
      width: 100%;
    }
  }
</style>
