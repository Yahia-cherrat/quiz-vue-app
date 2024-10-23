<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Select a Quiz Topic</h2>
    <TopicsContainer />
  </div>
</template>

<script>
  import TopicsContainer from '@/components/TopicsContainer.vue';

  export default {
    components: {
      TopicsContainer
    }
  }
</script>
