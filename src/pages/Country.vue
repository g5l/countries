<template>
  <div id="country">
    <div class="container grid-xl">
      <div class="columns">
        <div class="column col-12">
          <div class="country__header">
            <a-button @click.native="back()">
              Back
            </a-button>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column col-6 col-sm-12">
          <img :src="country.flag" :alt="country.name" class="country__image">
        </div>
        <div class="column col-6 col-sm-12">
          <div class="country__info">
            <h1>{{ country.name }}</h1>
            <div class="columns col-gapless">
              <div class="column col-6 col-sm-12 col-gapless">
                <div>
                  <span class="info__label">Native Names: </span>
                  {{ country.nativeName }}
                </div>
                <div>
                  <span class="info__label">Population: </span>
                  {{ populationFormatted }}
                </div>
                <div>
                  <span class="info__label">Region: </span>
                  {{ country.region }}
                </div>
                <div>
                  <span class="info__label">Sub Region: </span>
                  {{ country.subregion }}
                </div>
                <div>
                  <span class="info__label">Capital: </span>
                  {{ country.capital }}
                </div>
              </div>
              <div class="column col-6 col-sm-12 col-gapless">
                <div>
                  <span class="info__label">Top Level Domain: </span>
                  {{ domain }}
                </div>
                <div>
                  <span class="info__label">Currencies: </span>
                  {{ currencies }}
                </div>
                <div>
                  <span class="info__label">Languages: </span>
                  {{ languages }}
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column col-12 col-gapless">
                <div class="info__bottom">
                  <span class="info__label">Border Countries:</span>
                  <router-link
                    v-for="border in borders"
                    :key="border"
                    :to="border"
                  >
                    <a-button
                      small
                      class="bottom__border"
                    >
                      {{ border }}
                    </a-button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatNumber from '../utils/formatNumber';

import AButton from '../components/atoms/a-button.vue';

export default {
  name: 'country',
  components: {
    AButton,
  },
  data() {
    return {
      country: {
        name: '',
        flag: '',
        nativeName: '',
        population: '',
        region: '',
        subregion: '',
        capital: '',
        topLevelDomain: '',
        currencies: '',
        languages: '',
      },
    };
  },
  computed: {
    populationFormatted() {
      const { population } = this.country;
      return formatNumber(population);
    },
    domain() {
      const { topLevelDomain } = this.country;
      return (topLevelDomain) ? topLevelDomain.join(', ') : '';
    },
    currencies() {
      const { currencies } = this.country;
      return (currencies) ? currencies.map(({ name }) => name).join(', ') : '';
    },
    languages() {
      const { languages } = this.country;
      return (languages) ? languages.map(({ name }) => name).join(', ') : '';
    },
    borders() {
      const { borders } = this.country;
      return (borders) || '';
    },
  },
  methods: {
    async fetchCountry(alphaCode) {
      const url = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`;
      const response = await fetch(url);
      const data = await response.json();
      this.country = data;
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    const { alphaCode } = this.$route.params;
    this.fetchCountry(alphaCode);
  },
};
</script>
<style lang="stylus" scoped>
  #country {
    .country__header {
      padding: 50px 0;
    }

    .country__image {
      max-width: 540px;
      width: 100%;
      margin-top: auto;
      margin-bottom: auto;

      @media (min-width: 480px) {
        margin-right: 30px;
      }
    }

    .country__info {
      color: var(--primary-text-color);
      line-height: 2;
      margin-top: 40px;

      .info__label {
        font-weight: 600;
      }

      .info__bottom {
        margin-top: 60px;

        .info__label {
          @media (max-width: 480px) {
            display: block;
          }
        }

        .bottom__border {
          font-size: 12px;
          margin: 5px;
        }
      }
    }
  }
</style>
