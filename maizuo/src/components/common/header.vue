<template>
    <div>
        <header>
            <a @click="backs"> <</a>
            <p>渔船上的营养师</p>
            <i class="icon icon-sousuo"></i>
        </header>
            <hr>
            <div class="mulu">
                <ul>
                    <li>
                        <span>推荐</span>
                    </li>
                    <li>
                        <span>销量</span>
                        <span>
                            <img src="../../assets/img/up.png">
                            <img src="../../assets/img/down.png">
                        </span>

                    </li>
                    <li>
                        <span>价格</span>
                        <span>
                             <img src="../../assets/img/up.png">
                        <img src="../../assets/img/down.png">

                        </span>
                    </li>
                </ul>
            </div>
    </div>


</template>
<script>
    export default {
        methods:{
            backs(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        overflow: hidden;
        margin: 0;
        padding: 0;
        z-index: 300;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        font-size:23px;
    }
    header p{
        flex:1;
        width: 72%;
        text-align: center;
        font-size: 17px;
        justify-content: center;
        align-items: center;
        color: #2e2f30;
    }
    header a{
        margin-left: 0.28rem;
        vertical-align: middle;
        width: 11%;
        align-items: center;
    }
    header i{
        margin-right:0.2rem;
    }
    .mulu{
        height: 0.88rem;
        font-size: 14px;
        width: 100%;
        z-index: 10;
        background-color: #fff;
        position: fixed!important;
        top: 0.87rem;
    }
    .mulu ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mulu ul li{
        width: 33.33%;
        height: 0.88rem;
        line-height:0.88rem;

        font-size: 14px;
        text-align: center;
    }
    .mulu ul li img{

        width:0.15rem;
        height:0.15rem;
        display: block;
    }
    .mulu ul li span{
        padding:0 0.1rem;
        display: inline-block;
        overflow: hidden;
    }
</style>