<template>
  <v-container>
    <v-form>
      <v-text-field v-model="fromDate" type="date"></v-text-field>
      <v-text-field v-model="toDate" type="date"></v-text-field>
      <v-btn @click="getAnalytics">Submit</v-btn>
    </v-form>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ArticleId</th>
          <th class="text-left">Text</th>
          <th class="text-left">CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in analytics" :key="comment.id">
          <th>{{ comment.articleId }}</th>
          <th>{{ comment.text }}</th>
          <th>{{ comment.createdAt }}</th>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fromDate: Date,
      toDate: Date
    }
  },
  computed: {
    analytics() {
      return this.$store.getters.analytics;
    }
  },
  methods: {
    getAnalytics() {
      this.$store.dispatch('GET_ANALYTICS', this.$data);
    }
  }
}
</script>