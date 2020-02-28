<template>
  <div id="app">
    <!-- <Swipe></Swipe> -->
    <Scroll :scrollX="true" class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
        <div class="item">21</div>
        <div class="item">22</div>
        <div class="item">23</div>
        <div class="item">24</div>
        <div class="item">25</div>
        <div class="item">26</div>
        <div class="item">27</div>
        <div class="item">28</div>
        <div class="item">29</div>
        <div class="item">30</div>
      </div>
    </Scroll>
    qidian
  </div>
</template>

<script>
// import Swipe from './components/Swipe'
import Scroll from './components/Scroll'
export default {
  name: 'App',
  components: {
    // Swipe,
    Scroll
  },
  mounted () {
    let childs = this.$refs.content.children
    let wid =childs.length * 50
    this.$refs.content.style.width = wid + 'px'
    console.log(wid)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* // 要点 */
.wrapper {
  width: 100%;
  overflow: hidden;
}
.content {
  display: flex;
}
.item {
  width: 50px;
  height: 50px;
  text-align: center
}
.item:nth-child(2n+1){
  background-color: pink;
}
.item:nth-child(2n){
  background-color: greenyellow;
}
</style>
