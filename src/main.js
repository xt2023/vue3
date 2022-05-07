//导入vue这个包，得到Vue构造函数
import Vue from 'vue'
//导入APP.vue根组件，将来要把APP.vue中的模板结构渲染到HTML页面中
// import App from './App.vue'
import Test from './Test.vue'
Vue.config.productionTip = false
//创建Vue的实例对象
new Vue({
  //把render函数指定的组件，渲染到HTML中
  render: h => h(Test),
}).$mount('#app')
//Vue实例中的$mount（）方法作用和el属性完全一样