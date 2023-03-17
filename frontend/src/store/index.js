import { createStore } from 'vuex'
import articleModule from './article'
import articlesModule from './articles'
import commentsModule from './comments'
import analyticsModule from './analytics'

export default createStore({
  modules: {
    article: articleModule,
    articles: articlesModule,
    comments: commentsModule,
    analytics: analyticsModule
  }
})