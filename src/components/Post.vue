<template>
  <div >
    <div class="card mb-5">
<!--      <img src="..." class="card-img-top" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <p>{{postId}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:
      ['postId']
    ,
    name: "Post",
    data: () => ({
    }),

    computed: {

    },
    mounted() {
      console.log('im mounted', this.postId)
      this.$emit('loaded', this.postId)
      let currentArray = JSON.parse(localStorage.getItem('postIds'));
      currentArray.push(this.postId);
      localStorage.postIds = JSON.stringify(currentArray)
    }
  }
</script>

<style scoped>

</style>
