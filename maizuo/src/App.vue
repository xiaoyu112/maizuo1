<template>
  <div id="app">
    <Footer/>
    <router-view/>
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
</style>
