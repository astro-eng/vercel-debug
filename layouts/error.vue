<template>
  <h1>Error</h1>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import VueCustom from '../core/vue-custom'

@Component
export default class Error extends VueCustom {
  layout: string = 'empty'
}
</script>
