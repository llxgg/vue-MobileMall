<template>
    <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recommend",
      props:{ // 传递数据
        recommend:{
          type:Array, // 类型
          default(){ // 默认值
            return [];
          }
        }
      }
    }
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding:10px 0 20px;
  border-bottom: 8px solid #f4f4f4;


  .recommend-item {
    flex:1;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>
