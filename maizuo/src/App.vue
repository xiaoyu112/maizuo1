<template>
  <div id="app">

    <router-view/><Footer/>
  </div>
</template>

<script>
import axios from "axios"
import Footer from "./components/common/footer"
export default {
  //  created(){
  //   this.$axios.get("").then((res)=>{
  //      console.log(res)
  //    })
  //  }
  components:{
    Footer,
  }
}
</script> 
<style lang="scss">
  .app{
    position: absolute;
  }
  .app footer{
    position: fixed;
    bottom:0;
    left:0;
    right:0;

  }
</style>
