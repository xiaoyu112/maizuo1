<template>
    <div>
        <headers></headers>
        <div class="list">
            <ul>
                <li v-for="item in arr">
                    <img :src="item.sku.imgUrl">
                    <p>{{item.masterName}}</p>
                    <span>{{item.slaveName}}</span>
                    <h6>￥{{item.sku.price/100}}</h6>
                </li>
            </ul>
        </div>
    </div>


</template>
<script>
    import headers from "../components/common/header.vue";
    export default {
        data(){
          return {
              arr:[]
          }
        },
        components:{
            headers
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.$axios.get("http://localhost:3000/list").then((res)=>{
                    this.arr=res.data
                    console.log(res.data)
                })
            }
        }
    }
</script>
<style scoped>
    .list{
        margin-top:1.7rem;
    }
    .list ul{
        background-color: #fff;
        padding: 15px 4vw 0;
    }
    .list ul li img{
        width: 3.45rem;
        height: 3.45rem;

    }
    .list ul li p{
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
    }
    .list ul li span{
        font-size: 12px;
        margin-bottom: 0.2rem;
        color: #797d82;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .list ul li h6{
        font-size: 15px;
        color: #c03131;
    }
</style>