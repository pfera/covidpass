<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <h1 class="text-2xl font-bold text-primary flex flex-row align-middle justify-start">

      <NuxtLink :to="localePath('/')" class="inline-block pr-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24L12 16L20 8" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      {{ $t('about.title') }}
    </h1>
    
    <div v-html="$md.render(this.$t('about.md'))" class="md"></div>

    <a href="https://ko-fi.com/covidpass" target="_blank">
      <div class="flex justify-center w-full bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-5 px-3 focus:outline-none" >
        <span class="mx-auto" >
          <svg class="inline-block pr-1" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M36.98 26.28C36.104 26.3826 35.2218 26.4227 34.34 26.4V17.76H36.14C36.7191 17.7409 37.2941 17.8619 37.8164 18.1126C38.3387 18.3633 38.7928 18.7363 39.14 19.2C39.7736 19.9791 40.1134 20.9559 40.1 21.96C40.1971 22.9368 39.9334 23.9155 39.3587 24.7113C38.7839 25.5071 37.9379 26.0651 36.98 26.28ZM44.42 20.28C44.253 19.1856 43.8566 18.1388 43.2569 17.2082C42.6572 16.2777 41.8677 15.4843 40.94 14.88C39.3944 13.791 37.5508 13.2044 35.66 13.2H9.26003C8.90712 13.2496 8.58244 13.4204 8.34163 13.6831C8.10081 13.9458 7.95884 14.2841 7.94003 14.64V15C7.94003 15 7.82003 26.64 8.06003 33C8.1184 34.0092 8.56161 34.9575 9.29835 35.6496C10.0351 36.3416 11.0092 36.7248 12.02 36.72C12.02 36.72 24.14 36.72 29.9 36.6H30.74C34.1 35.76 34.34 32.64 34.34 30.96C40.94 31.2 45.62 26.52 44.42 20.28Z" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.6201 25.56C29.3001 23.52 29.4201 20.28 26.5401 18.96C23.6601 17.64 21.2601 20.4 21.2601 20.4C20.4752 19.4369 19.3428 18.8214 18.1077 18.6867C16.8726 18.552 15.6342 18.9088 14.6601 19.68L14.5401 19.8C13.1001 21.36 13.5801 24 14.6601 25.44C16.1629 27.0963 19.3842 29.9533 20.8037 31.1948C21.1969 31.5386 21.7854 31.5159 22.1549 31.1469C23.6045 29.6992 27.0044 26.2911 27.6201 25.56Z" fill="#27215B"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="48" height="48" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
          </svg>

          {{ $t('about.supportButton') }}
        </span>
      </div>
    </a>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log(this.$t('about.md'))
  }
})
</script>