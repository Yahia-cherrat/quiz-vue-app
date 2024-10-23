<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <Header />
    <main class="flex justify-center items-center py-10">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style>

</style>
