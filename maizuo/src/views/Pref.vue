<template>
    <div>
        <a class="ss">
            <button @click="back"> <</button>
        </a>
       <ul>
           <li v-for="item in list" :key="item.id" >
               <a>
                   <img :src="item.src" @click="look(item.id)">
               </a>
           </li>
       </ul>

        <fresh></fresh>
    </div>
</template>
<script>
//    import fresh from "./fresh.vue"
export default {
        components:{
            fresh
        },
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.$axios.get("http://localhost:3000/data").then((res)=>{
               this.list=res.data
                console.log(res.data)

            })
        },
        back(){
            this.$router.go(-1)
        },
        look(id){

        }
    }
}
</script>
<style scoped>
    ul{
        margin-top:0.8rem;
    }
    img{
        width: 100%;
    }
    a{
        cursor: pointer;
    }

    .ss{
        width:100%;
        height:0.8rem;
        line-height:0.8rem;
        overflow: hidden;
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index: 10;
        background: #fff;
    }

    .ss button{

        border:none;
        width:0.4rem;
        height:0.6rem;
        font-size:0.6rem;
        background: #fff;
        color: #ccc;
        padding:0.1rem 0.3rem;
    }
</style>