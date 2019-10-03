<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="post.username">
          </div>
        </div>
        </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="post.email">
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
          <button class="btn btn-primary">Register</button>
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
        let uri = 'http://localhost:8081/register';
        this.axios.post(uri, this.post).then((res) => {
          this.$router.push({name: 'register'});
          (error) => { alert(error.res) }
        });
      }
    }
  }
</script>