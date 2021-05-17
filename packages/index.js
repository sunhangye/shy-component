import SLink from './sLink'
// 存放组件的数组
const components = [
  SLink
]

// 定义install方法，接受Vue作为参数
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  // 遍历component数组，来进行全局注册
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export {
  // 导出的对象必须有install,才能被Vue.use()方法安装
  install,
  // 以下是具名的组件列表
  SLink
}
