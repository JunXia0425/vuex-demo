<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="incre">增加</button>
    <button @click="decre(2)">减少2</button>
    <button @click="increment">map增加</button>
    <button @click="decrement({amount: 4})">map减少4</button>
    <button @click="asyncIncre">2s后减少1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapState(['count'])
  },
  methods: {
    incre () {
      this.$store.commit('increment')
    },
    decre (a) {
      // this.$store.commit('decrement',{amount: a})
      this.$store.commit({type:'decrement',amount: a})
      
    },
    //映射,可以直接用了
    ...mapMutations(['increment','decrement']),
    //映射 action
    ...mapActions(['asyncIncre'])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
