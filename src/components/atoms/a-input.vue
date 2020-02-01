<template>
  <input
    class="input"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AInput',
  props: {
    placeholder: String,
    value: String,
  },
};
</script>

<style lang="stylus" scoped>
  .input {
    background: var(--primary-el-color);
    color: var(--primary-text-color);
    box-shadow: 0 0 7px 1px var(--primary-shadow-color);
    border: none;
    border-radius: 5px;
    padding: 16px 30px;
    font-size: 12px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: var(--primary-text-color);
    }
    &::-moz-placeholder {
      color: var(--primary-text-color);
    }
    &:-ms-input-placeholder {
      color: var(--primary-text-color);
    }
    &:-moz-placeholder {
      color: var(--primary-text-color);
    }
  }
</style>
