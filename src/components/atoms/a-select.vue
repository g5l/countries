<template>
  <select class="select" v-model="selected">
    <option disabled value="">Filter by Region</option>
    <option :value="option" v-for="option in options" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'ASelect',
  data() {
    return {
      selected: '',
    };
  },
  props: {
    options: Array,
  },
};
</script>

<style lang="stylus" scoped>
  .select {
    width: 100%;
    background: var(--primary-el-color);
    color: var(--primary-text-color);
    box-shadow: 0 0 7px 1px var(--primary-shadow-color);
    border: none;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 16px 18px;

    &:focus {
      outline: none;
    }

    option {
    }
  }
</style>
