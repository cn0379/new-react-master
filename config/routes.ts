export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './Login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: '欢迎',
                icon: 'smile',
                component: './Welcome',
              },
              {
                "path": "/echarts",
                "name": "Echarts",
                "icon": "smile",
                component: './echatrs/index.tsx',
                "exact": true
              },
              {
                path: '/js',
                name: 'Js',
                icon: 'smile',
                routes: [
                  {
                    path: '/js/algorithm',
                    name: '算法',
                    icon: 'smile',
                    component: './Js/algorithm'
                  },
                  {
                    path: '/js/game',
                    name: '游戏',
                    icon: 'smile',
                    component: './Js/game'
                  }
                ]
              },
              {
                path: '/css',
                name: 'CSS',
                icon: 'smile',
                routes: [
                  {
                    path: '/css/animation',
                    name: '动画',
                    icon: 'smile',
                    component: './CSS'
                  }
                ]
              },
              {
                path: '/react',
                name: 'React',
                icon: 'smile',
                routes: [
                  {
                    path: '/react/theory',
                    name: '理论 ',
                    icon: 'smile',
                    component: './React'
                  }
                ]
              },
              {
                path: '/content',
                name: '内容管理',
                icon: 'smile',
                routes: [
                  {
                    path: '/content/articleList',
                    name: '文章列表',
                    icon: 'smile',
                    component: './content/Article'
                  }
                ]
              },
              {
                path: '/hello-world',
                name: 'hello-world',
                icon: 'smile',
                component: './HelloWorld'
              },
              {
                path: '/news',
                name: '每日新闻',
                icon: 'smile',
                component: './news/News'
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
