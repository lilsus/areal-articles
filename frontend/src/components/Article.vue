<template>
  <v-container>
    <v-card>
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-text>{{ article.text }}</v-card-text>
      <v-card-text>
        <CommentsList v-if='articleId' :article-id="articleId"></CommentsList>
        <AddComment :article-id="articleId"></AddComment>
      </v-card-text>
      <v-card-text>
        <AddArticle v-show="isEdited" :article-id="article.id"></AddArticle>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="isEdited = !isEdited">Edit</v-btn>
        <v-btn @click="deleteArticle(article.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import AddComment from "@/components/AddComment.vue";
import AddArticle from "@/components/AddArticle.vue";
import CommentsList from "@/components/CommentsList.vue";

export default {
  components: {CommentsList, AddArticle, AddComment},
  props: ['articleId'],
  data() {
    return {
      isEdited: false
    }
  },
  mounted() {
    this.$store.dispatch('GET_ARTICLE', this.articleId);
  },
  computed: {
    article() {
      return this.$store.getters.article;
    }
  },
  methods: {
    deleteArticle(id) {
      this.$store.dispatch('DELETE_ARTICLE', id);
      this.$router.push('/');
    }
  }
}
</script>