<template>
  <div class="font-sans">
    <Nuxt />
    <Footer />
    <CopyrightInfo />
  </div>
</template>

<style>
/* This ensures that all Korean text breaks on words and not on letters */
html {
  line-break:strict;
  word-break:keep-all;
}
</style>
