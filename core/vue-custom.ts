import { Vue } from 'nuxt-property-decorator'

export default class VueCustom extends Vue {
  $notify: any
  $t: any
  $route: any
  $router: any
  $config: any
  $i18n: any
  $cookies: any
  $nuxt: any
  $vuetify: any
  $img: any

  get pageWidth(): number {
    return this.$store.state.system.pageWidth
  }

  get $appPage() {
    if (this.$i18n.getLocaleCookie() === 'en') {
      return process.env.NUXT_ENV_APP_PAGE
    }

    return process.env.NUXT_ENV_APP_PAGE + '/vi'
  }

  get $companySite() {
    return process.env.NUXT_ENV_COMPANY_SITE
  }

  $getReading(reading: string) {
    window.location.href = `${this.$appPage}/get-reading?type=${reading}`
  }

  $runServerSide(fn: Function) {
    if (process.server) {
      fn()
    }
  }

  $runClientSide(fn: Function) {
    if (process.client) {
      fn()
    }
  }

  $calcImg(src: string) {
    return src
    // Device breakpoint: https://vuetifyjs.com/en/components/grids/
  }
}
