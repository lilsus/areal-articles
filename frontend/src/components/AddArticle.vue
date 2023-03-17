<template>
  <v-container>
    <v-form>
    <v-text-field v-model="title" label="Title"></v-text-field>
    <v-text-field v-model="text" label="Text"></v-text-field>
    <v-btn @click="submit">Submit</v-btn>
  </v-form>
  </v-container>
</template>

<script>
export default {
  props: ['articleId'],
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    submit() {
      if (this.articleId) {
        this.$store.dispatch('UPDATE_ARTICLE', {
          id: this.articleId,
          title: this.title,
          text: this.text
        });
      }
      else
        this.$store.dispatch("ADD_ARTICLE", this.$data);

      this.title = '';
      this.text = '';
    }
  }
}
</script>