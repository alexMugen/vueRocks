import Vue from 'vue'
import Router from 'vue-router'

const Welcome = resolve => {
  require.ensure(['@/components/Welcome'], () => {
    resolve(require('@/components/Welcome'))
  })
}
const MainTitle = resolve => {
  require.ensure(['@/components/MainTitle'], () => {
    resolve(require('@/components/MainTitle'))
  })
}
const Hello = resolve => {
  require.ensure(['@/components/HelloWorld'], () => {
    resolve(require('@/components/HelloWorld'))
  })
}
const DataBinding = resolve => {
  require.ensure(['@/components/DataBinding'], () => {
    resolve(require('@/components/DataBinding'))
  })
}
const Methods = resolve => {
  require.ensure(['@/components/Methods'], () => {
    resolve(require('@/components/Methods'))
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      components: {
        default: Welcome,
        MainTitle
      }
    },
    {
      path: '/hello-world',
      name: 'hello-world',
      components: {
        default: Hello,
        MainTitle
      }
    },
    {
      path: '/data-binding',
      name: 'dataBinding',
      components: {
        default: DataBinding,
        MainTitle
      }
    },
    {
      path: '/methods',
      name: 'methods',
      components: {
        default: Methods,
        MainTitle
      }
    }
  ]
})
