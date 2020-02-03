<template>
  <div id="layout-mode" @click="toggleMode()">
    <font-awesome-icon class="layout-icon" :icon="['fas', 'moon']" /> {{ changeTo }} Mode
  </div>
</template>

<script>
export default {
  name: 'ALayoutMode',
  data() {
    return {
      darkMode: true,
      templates: [
        {
          name: 'Dark',
          background: '#202c37',
          elColor: '#2b3945',
          textColor: '#ffffff',
          shadow: '#252525',
        },
        {
          name: 'Light',
          background: '#fafafa',
          elColor: '#ffffff',
          textColor: '#111517',
          shadow: '#eeeeee',
        },
      ],
    };
  },
  computed: {
    changeTo() {
      if (this.darkMode) return this.templates[1].name;
      return this.templates[0].name;
    },
  },
  methods: {
    currentTemplate() {
      const template = this.darkMode ? 'Dark' : 'Light';
      return this.templates.find(({ name }) => name === template);
    },
    toggleMode() {
      this.darkMode = !this.darkMode;
      this.setNewTemplate();
    },
    setNewTemplate() {
      const currentTemplate = this.currentTemplate();

      document.documentElement.style
        .setProperty('--primary-background-color', currentTemplate.background);
      document.documentElement.style
        .setProperty('--primary-el-color', currentTemplate.elColor);
      document.documentElement.style
        .setProperty('--primary-text-color', currentTemplate.textColor);
      document.documentElement.style
        .setProperty('--primary-shadow-color', currentTemplate.shadow);
    },
  },
};
</script>

<style lang="stylus" scoped>
  #layout-mode {
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;

    .layout-icon {
      padding-right: 5px;
    }
  }
</style>
