<template>
    <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active : index === currentIndex }" @click="handleClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        titles:{
          type:Array,
          default(){
            return [];
          }
        }
      },
      data(){
        return {
          currentIndex : 0
        }
      },
      methods:{
        handleClick(index){
          this.currentIndex = index;

          this.$emit('tabClick',index);
        }
      }
    }
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
  text-align: center;
  font-size: 15px;

  .tab-control-item {
    flex:1;
    cursor: pointer;

    span {
      padding:5px;
    }

    &.active {
      color: var(--color-high-text);
    }

    &.active span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>
