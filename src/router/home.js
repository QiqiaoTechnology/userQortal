

const temptwoRouter=[
    {
        path: '/',
        component: resolve => require(['@/views/temp2/home'], resolve),
        name: 'Tem2_Home',
        meta: {
            nav: '首页'
        }
    },
    {
        path: 'home',
        component: resolve => require(['@/views/temp2/home'], resolve),
        name: 'Tem2_Home-2',
        meta: {
            nav: '首页'
        }
    }
      
]
export default temptwoRouter