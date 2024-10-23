<template>
  <div @click="goToQuiz" class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-blue-50 hover:shadow-2xl">
    <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'topic'],
  methods: {
    goToQuiz() {
      this.$router.push({ path: `/quiz/${this.topic}` });
    }
  }
};
</script>

<style scoped>
  
</style>
