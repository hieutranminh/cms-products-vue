<template>
  <div class="text-center">
    <div class="text-404">404</div>
    <p class="text-notfound">Page Not Found</p>
    <router-link tag="a" :to="{name: 'Dashboard'}" class="text-back-dashboard">← Back to Dashboard</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound',
  }
</script>
