<template>
  <!-- 每一个item -->
    <div class="tab-bar-item" @click="handleClick">
      <!-- 这里面的图片，文字都是外部传递进来的，所以也要用插槽 -->
      <!-- 注意：因为插槽是直接替换里面的内容的，所以最好用div包裹，判断条件给div设置 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>

      <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div>-->
    </div>
</template>

<script>
export default {
  name: 'tab-bar-item',
  props: {
    path: String,

    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true // 动态值，是否活跃，必须是动态的，只能用计算属性
    }
  },
  computed: {
    isActive () {
      // 只有活跃的 路由才存在 $route.path，其他的没有这个对象
      return this.$route.path.includes(this.path) // 判断$route.path 是否和当前的path相等
    },
    activeStyle () { // 颜色，是否是活跃，活跃则有颜色
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    handleClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped lang="less">
  .tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-top: 3px;
      margin-bottom: 2px;
    }

    .active {
      color:red;
    }
  }
</style>
