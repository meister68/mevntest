<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" v-model="post.username">
          </div>
        </div>
        </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control" v-model="post.password">
          </div>
        </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:8081/login';
        this.axios.post(uri, this.post).then((res) => {
          this.$router.push({name: 'user'});
          alert(res.status)
        });
      }
    }
  }
</script>