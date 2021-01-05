

const temp3Router = [
    {
        path: '/',
        component: resolve => require(['@/views/temp3/home'], resolve),
        name: 'T3Home',
        meta: {
          nav: '首页'
        }
      },
      {
        path: 'home',
        component: resolve => require(['@/views/temp3/home/index'], resolve),
        name: 'T3Home-2',
        meta: {
          nav: 'home'
        }
      },
      {
        path: 'work',
        component: resolve => require(['@/views/temp3/solution/work'], resolve),
        name: 'Work',
        meta: {
          nav: 'work'
        }
      },
      {
        path: 'about',
        component: resolve => require(['@/views/temp3/solution/about'], resolve),
        name: 'About',
        meta: {
          nav: 'about'
        }
      },
      {
        path: 'serves',
        component: resolve => require(['@/views/temp3/solution/server'], resolve),
        name: 'Serves',
        meta: {
          nav: 'serves'
        }
      },
      {
        path: 'news',
        component: resolve => require(['@/views/temp3/solution/news'], resolve),
        name: 'TNews',
        meta: {
          nav: 'news'
        }
      }
      
]
export default temp3Router