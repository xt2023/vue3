<template>
<div>
  <div class="test-box">
    <p>这是用户自定义的vue------{{username}}</p>
  </div>
  <button @click="changeName">修改用户名</button>
</div>
</template>

<script>
//默认导出固定写法
export default  {
  //data数据源
  //注意：vue组件中的data不像之前一样，不能指向对象
  //注意：组件中的data必须是一个函数
  data (){
    return {
      //这个return的数组中可以定义格式
      username :'admin'
    }
  },
  methods: {
    changeName () {
      //在组件中，this就是组件实例
      this.username='娃哈哈'
    }
  },
  //当前组件中的侦听器
  watch :{},
  //当前组件中的计算属性
  computed:{},
  //当前组件中的过滤器
  filters:{}
}
</script>



<style lang="less">
  .test-box {
    background-color: pink;
    p {
      color: red;
    }
  }
</style>