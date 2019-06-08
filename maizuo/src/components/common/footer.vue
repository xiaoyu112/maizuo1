<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in tabBar" class="tablist" :key="index">
        <router-link :to="{name:item.name}" tag="li">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.text}}</span>
        </router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        tabBar: [
          {
            text: "电影",
            icon: "&#xe619;",
            name: "home"
          },
          {
            text: "影院",
            icon: "&#xe60e;",
            name: "video"
          },
          {
            text: "特惠",
            icon: "&#xe610;",
            name: "pref"
          },
          {
            text: "我的",
            icon: "&#xe7b7;",
            name: "me"
          }
        ]
      };
    }
 
};
</script>

<style scoped lang="scss">
$color: #f5f5f5, #666666,red;
.footer {
  position: absolute;
  width: 100%;
  height: .98rem;
  left: 0;
  bottom: 0;
  box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
  background: nth($color, 1);
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .tablist {
      width: 100%;
      height: 100%;

      .router-link-active {
        color: nth($color, 3);
      }

      li {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:nth($color, 2);
        .iconfont {
          font-size: .32rem;
          margin-bottom: .04rem;
        }

        span {
          font-family: Microsoft Yahei, -apple-system-font, Helvetica Neue,
            sans-serif;
        }
      }
    }
  }
}
</style>