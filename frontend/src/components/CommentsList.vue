<template>
  <ul v-for="comment in comments" :key="comment.id">
    <li>
      {{ comment.text }}
      <v-form v-show="editedId === comment.id">
        <v-text-field v-model="text" label="Text"></v-text-field>
        <v-btn @click="editComment(comment.id)">Edit</v-btn>
      </v-form>
      <v-btn icon="mdi-pencil" @click="editedId = editedId === comment.id ? -1 : comment.id"></v-btn>
      <v-btn icon="mdi-delete" @click="deleteComment(comment.id)"></v-btn>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['articleId'],
  data() {
    return {
      editedId: -1,
      text: ''
    }
  },
  mounted() {
    this.$store.dispatch('GET_COMMENTS', this.articleId);
  },
  computed: {
    comments() {
      return this.$store.getters.comments
    }
  },
  methods: {
    editComment(id) {
      this.$store.dispatch('UPDATE_COMMENT', {
        articleId: this.articleId,
        id: id,
        text: this.text
      });
      this.editedId = -1;
      this.text = '';
    },
    deleteComment(id) {
      if (id === this.editedId) {
        this.editedId = -1;
        this.text = '';
      }
      this.$store.dispatch('DELETE_COMMENT', {
        articleId: this.articleId,
        id: id
      });
    }
  }
}
</script>