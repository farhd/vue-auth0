<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign up</h2>
    <p>
      Create an account
    </p>
    <div class="alert alert-danger" v-if="error">
      <p>
        {{ error }}
      </p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <button type="button" class="btn btn-primary" @click="submit()">
      Create
    </button>
  </div>
</template>

<script>
  import auth from '../auth/index'

  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },

    methods: {
      submit() {
        const credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }

        auth.signup(this, credentials, 'secretquote')
      }
    }
  }
</script>
