<template>
  <div class="app">
    <div class="navigation">
      <Navbar />
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply font-medium bg-green-50;
}

.app {
  @apply font-app flex flex-col mx-auto max-w-screen-2xl;
  .content {
    @apply flex flex-col p-2 mx-4 rounded-2xl;
  }
}
</style>
