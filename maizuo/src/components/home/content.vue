<template>
  <div id="content">
        <div class="img-header">
            <img :src="img"/>
        </div>
        <div class="navi">
            <ul>
                <li v-for="(item,index) in naviList" ><a href="##" @click="handleToggle(index)">{{item}}</a></li>
            </ul>
        </div>
  </div>
</template>

<script>

export default {
      data(){
          return{
            img:"https://static.maizuo.com/v5/upload/ce6da101ebaf09e14536133f44a69c38.jpg?x-oss-process=image/quality,Q_70",
            naviList:["正在热映","即将上映"]
         }
      },
      methods:{
          handleToggle(index){
              this.$emit("handleToggle",index)
          }
      }
}
</script>

<style>
#content{
    width: 100%;
    height: 5.18rem;
    position: fixed;
}
.img-header{
    width: 7.5rem;
    height: 4.2rem;
}
.img-header>img{
    width: 100%;
    height: 100%;
}
.navi{
    width: 7.5rem;
    height: .98rem;
    background: #fff;
}
.navi>ul{
    width: 100%;
    height: 100%;
    display: flex;
}
.navi>ul>li{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.navi>ul>li>a{
    height: .98rem;
    color:#191a1b;
    font-size: .28rem;
    line-height: .98rem
}

.navi>ul>li:nth-of-type(1)>a{
    color:#ff5f16;
    border-bottom: 2px solid #ff5f16;
}
</style>