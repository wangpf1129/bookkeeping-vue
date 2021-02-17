<template>
  <svg class="icon">
    <use :xlink:href="'#'+iconName"/>
  </svg>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('@/assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

  export default {
    name: 'Icon',
    props: {
      iconName: String
    },
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    fill: currentColor;
  }
</style>