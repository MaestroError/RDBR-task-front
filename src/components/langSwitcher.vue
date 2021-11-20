<template>
<div class="bg-green-400 text-white p-2 fixed top-4 right-6 cursor-pointer rounded-md">
  <a v-if="$i18n.locale == 'en'" @click="switchLocale('ge')" href="#ge">GE</a>
  <a v-if="$i18n.locale == 'ge'" @click="switchLocale('en')" href="#en">EN</a>
</div>
</template>

<style scoped>
  .arrow {
    max-width:15px;
  }
</style>

<script>
export default {
  name: 'langSwitcher',
  emits: [
    "language_changed"
  ],
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
      this.$emit("language_changed");
    }
  },
}
</script>