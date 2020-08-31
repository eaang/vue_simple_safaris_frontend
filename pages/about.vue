<template>
  <div>
    <NavbarWhite />

    <!-- Header Section -->
    <AboutHeader />

    <!-- Founders -->
    <AboutFounders />

    <!-- Map -->
    <AboutMap />
  </div>
</template>

<script>
export default {
  data() {
  },
  head() {
    return {
      title: 'Simple Safaris - About',
    }
  }
}
</script>

<style>
.title-dark {
  color: #1a1915;
}
.content-light {
  color: #807f7d;
}
.content-medium {
  color: #9c9780;
}
.section-background-dark {
  background-color: #646152;
}
.section-background-light {
  background-color: #9c9780;
}
</style>