<template>
  <div class="quiz-view max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div v-if="currentQuestionIndex < questions.length">
      <h1 class="text-2xl font-bold mb-8 text-center">{{ topicTitle }} Quiz</h1>

      <!-- Current Question -->
      <div class="mb-8">
        <p class="text-lg font-semibold mb-4">{{ currentQuestion.text }}</p>
        <ul class="space-y-4">
          <li v-for="(answer, idx) in currentQuestion.answers" :key="idx">
            <label class="flex items-center space-x-3">
              <input 
                type="radio" 
                :name="'question' + currentQuestionIndex" 
                :value="idx" 
                v-model="selectedAnswers[currentQuestionIndex]" 
                class="form-radio text-blue-500 h-4 w-4" 
              />
              <span>{{ answer }}</span>
            </label>
          </li>
        </ul>
      </div>

      <!-- Next/Submit Button -->
      <button 
        @click="nextQuestion" 
        :disabled="selectedAnswers[currentQuestionIndex] === null"
        class="w-full py-3 mt-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition disabled:opacity-50">
        {{ isLastQuestion ? 'Submit Quiz' : 'Next Question' }}
      </button>
    </div>

    <!-- Score Display -->
    <div v-else class="text-center">
      <h1 class="text-3xl font-bold mb-8">Your Score: {{ score }}/{{ questions.length }}</h1>
      <p class="text-lg mb-8">You got {{ score }} out of {{ questions.length }} questions correct!</p>

      <!-- Play Again Button -->
      <button 
        @click="playAgain" 
        class="w-full py-3 mt-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
        Play Again
      </button>
    </div>
  </div>
</template>

<script>
import quizData from '@/data.js';

export default {
  props: ['topic'],
  data() {
    return {
      questions: [],
      selectedAnswers: [],
      currentQuestionIndex: 0,
      score: 0
    };
  },
  computed: {
    topicTitle() {
      return this.topic ? this.topic.name : 'Unknown Topic'
    },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1
    }
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    loadQuestions() {
      const topicData = quizData.find((data) => data.topic === this.topic.name);
      if (topicData) {
        this.questions = topicData.questions;
        this.selectedAnswers = new Array(this.questions.length).fill(null)
      }
    },
    nextQuestion() {
      if (this.isLastQuestion) {
        this.calculateScore()
      } else {
        this.currentQuestionIndex++
      }
    },
    calculateScore() {
      this.score = this.selectedAnswers.reduce((total, answer, index) => {
        return answer === this.questions[index].correctAnswer ? total + 1 : total;
      }, 0)
      this.currentQuestionIndex = this.questions.length
    },
    playAgain() {
      this.currentQuestionIndex = 0
      this.selectedAnswers = new Array(this.questions.length).fill(null)
      this.score = 0
      this.$router.push({ path: '/' })
    }
  }
};
</script>

<style scoped>
  .quiz-view {
    padding: 20px;
  }
  .question {
    margin-bottom: 20px;
  }
</style>
