<template>
    <div>
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <virtual-list :size="100" :remain="2"  class="fullHeight">
            <post  :postId="index" v-for="(post, index) in 100" :key="index">
            </post>>
          </virtual-list>

        </div>
      </div>
    </div>
</template>

<script>
import Post from "./components/Post";
import virtualList from 'vue-virtual-scroll-list'


export default {
  name: 'App',
  data: ()=> ({
    postIds: []
  }),
  components: {
    Post,
      'virtual-list': virtualList

  },
  methods: {
    setIdsToCookies(data) {
      this.postIds.push(data)

    },
    sendViewedPost(){

      setInterval(() => {

        let viewedPosts = JSON.parse(localStorage.getItem('postIds'))
        let sentPosts = JSON.parse(localStorage.getItem('sentIds'))

        let needToSend = this.lodash.difference(viewedPosts, sentPosts)

        console.log(needToSend); // TODO Axios

        sentPosts = [...new Set(this.lodash.concat(sentPosts, viewedPosts))];
        localStorage.sentIds = JSON.stringify(sentPosts)
        localStorage.postIds = JSON.stringify([])
      }, 5000);



    },

  },
  created() {
    // this.fetchOnApi()
    localStorage.postIds = JSON.stringify([])
    localStorage.sentIds = JSON.stringify([])
    this.sendViewedPost()
  }
}
</script>

<style>
  .fullHeight {
    min-height: 100vh;
  }

</style>
