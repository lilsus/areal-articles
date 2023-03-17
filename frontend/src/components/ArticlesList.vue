<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Title</th>
        <th class="text-left">Text</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.title }}</td>
        <td>{{ article.text }}</td>
        <td>
          <v-btn icon="mdi-information" @click="goToArticle(article.id)"></v-btn>
          <v-btn icon="mdi-delete" @click="deleteArticle(article.id)"></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <AddArticle></AddArticle>
</template>

<script>
  import AddArticle from "@/components/AddArticle.vue";

  export default {
    components: {AddArticle},
    mounted() {
      this.$store.dispatch('GET_ARTICLES');
    },
    computed: {
      articles() {
        return this.$store.getters.articles;
      }
    },
    methods: {
      goToArticle(id) {
        this.$router.push(`/article/${id}`);
      },
      deleteArticle(id) {
        this.$store.dispatch('DELETE_ARTICLE', id);
      }
    }
  }
</script>