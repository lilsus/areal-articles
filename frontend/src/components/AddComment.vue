<template>
  <v-form>
    <v-textarea v-model="text" rows="2"></v-textarea>
    <v-btn @click="addComment">Comment</v-btn>
  </v-form>
</template>

<script>
export default {
  props: ['articleId'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addComment() {
      this.$store.dispatch('ADD_COMMENT', {
        articleId: this.articleId,
        text: this.text
      })
      this.text = '';
    }
  }
}
</script>