
export default [
    {
        path: '/error-500',
        component: resolve => require(['@/views/temp1/error/500'], resolve),
        name: 'Error-500'
    },
    {
        path: '*',
        component: resolve => require(['@/views/temp1/error/404'], resolve),
        name: 'Error-404'
    }
      
]