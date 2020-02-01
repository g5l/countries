<template>
  <button :class="{ 'small': small }" class="button">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    small: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
  .button {
    background: var(--primary-el-color);
    color: var(--primary-text-color);
    box-shadow: 0 0 7px 1px var(--primary-shadow-color);
    font-size: 14px;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &.small {
      padding: 5px 25px;
    }
  }
</style>
