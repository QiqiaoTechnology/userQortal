

const tempRouter = [
    {
        path: '/',
        component: resolve => require(['@/views/temp1/home'], resolve),
        name: 'Home',
        meta: {
            nav: '首页'
        }
    },
    {
        path: 'home',
        component: resolve => require(['@/views/temp1/home'], resolve),
        name: 'Home-2',
        meta: {
            nav: '首页'
        }
    },
    {
        path: 'teacher',
        component: resolve => require(['@/views/temp1/solution'], resolve),
        name: 'Teacher',
        meta: {
            nav: '师资团队'
        }
    },
    {
        path: 'teacher/Info',
        component: resolve => require(['@/views/temp1/solution/techerInfo'], resolve),
        name: 'TeacherInfo',
        meta: {
            nav: '师资团队'
        }
    },
    {
        path: 'teacher/join',
        component: resolve => require(['@/views/temp1/solution/techerJoin'], resolve),
        name: 'TeacherJoin',
        meta: {
            nav: '加入我们'
        }
    },
    {
        path: 'mySchool',
        component: resolve => require(['@/views/temp1/solution/mySchool'], resolve),
        name: 'MySchool',
        meta: {
            nav: '我们的校园'
        }
    },
    {
        path: 'newList',
        component: resolve => require(['@/views/temp1/solution/newList'], resolve),
        name: 'NewList',
        meta: {
            nav: '新闻资讯'
        }
    },
    {
        path: 'newList/Info',
        component: resolve => require(['@/views/temp1/solution/newsInfo'], resolve),
        name: 'NewInfo',
        meta: {
            nav: '新闻资讯'
        }
    },
    {
        path: 'classView',
        component: resolve => require(['@/views/temp1/solution/classView'], resolve),
        name: 'ClassView',
        meta: {
            nav: '课程理念'
        }
    }
      
]
export default tempRouter