<template>
  <div>
    <m-header/>
    <router-view/>
  </div>
</template>

<script>
import MHeader from './components/molecules/m-header.vue';

export default {
  name: 'app',
  components: {
    MHeader,
  },
};
</script>
