<template>
  <div>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import VueCustom from '../core/vue-custom'

@Component
export default class Default extends VueCustom {
}
</script>
<style lang="postcss" scoped>
</style>
