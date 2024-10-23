<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <QuizTopic title="🎨 Frontend" description="Test your frontend skills!" topic="frontend" />
    <QuizTopic title="⚙️ Backend" description="How strong is your backend knowledge?" topic="backend" />
    <QuizTopic title="🗄️ Databases" description="Test your database expertise!" topic="databases" />
  </div>
</template>

<script>
import QuizTopic from './QuizTopic.vue';

export default {
  components: {
    QuizTopic
  }
}
</script>

<style scoped>
  
</style>
