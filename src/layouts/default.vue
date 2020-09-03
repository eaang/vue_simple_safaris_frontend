<template>
  <div class="font-sans">
    <NavbarSide class="absolute invisible" />
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
.logo-text {
  font-family: 'proxima-nova', sans-serif;
}
</style>
