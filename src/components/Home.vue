<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Get a free Chuck Norris quote!</h1>
    <button type="button" class="btn btn-primary" v-on:click="getQuote()">
      Get a quote
    </button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },

    methods: {
      getQuote() {
        this.$http
          .get('http://localhost:3001/api/random-quote')
          .then((data) => {
            this.quote = data.body
          })
          .catch((err) => console.log(err))
      }
    }
  }
</script>
