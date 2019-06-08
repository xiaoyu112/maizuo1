<template>
    <div>
       <ul>
           <li v-for="item in list" :key="item.id">
               <a>
                   <img :src="item.src">
               </a>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
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
        }
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
    a{
        cursor: pointer;
    }
</style>