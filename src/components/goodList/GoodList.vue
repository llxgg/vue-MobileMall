<template>
    <div class="good-list">
      <div class="good-item" v-for="(item,index) in goodList" :key="index">
        <img :src="item.show.img" alt="">
        <div class="info">
          <div class="title">{{item.title}}</div>
          <span class="price">{{item.price}}</span>
          <span class="Collection">收藏{{item.cfav}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        goodList:{
          type:Array,
          default(){
            return [];
          }
        }
      },
      data(){
        return {

        }
      }
    }
</script>

<style scoped lang="less">
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 6px;

  .good-item {
    width: 49%;
    min-height: 252px;
    padding: 3px;
    margin: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 2px rgba(100,100,100,.4);

    img {
      width: 100%;
      vertical-align: middle;
    }

    .info {
      padding: 6px;
      width: 100%;

      .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

      }

      .price {
        color: red;
        font-size: 14px;
        margin-right: 26px;
      }

      .Collection {
        font-size: 13px;
        position: relative;
      }

      .Collection::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
      }

    }
  }
}
</style>
