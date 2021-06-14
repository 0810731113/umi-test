import { defineConfig } from 'umi';
const path = require('path');
const SentryCliPlugin = require('@sentry/webpack-plugin');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/login', component: '@/pages/LoginPage' },
        {
          path: '/',
          component: '@/pages/index',
          // routes: [
          //   {
          //     path: '/react16',
          //     microApp: 'app1',
          //     microAppProps: { autoSetLoading: false },
          //   },
          //   {
          //     path: '/vue3',
          //     microApp: 'app2',
          //     microAppProps: { autoSetLoading: false },
          //   },
          //   {
          //     path: '/angular9',
          //     microApp: 'app3',
          //     microAppProps: { autoSetLoading: false },
          //   },
          // ],
        },
        // { path: '/react16', microApp: 'app1', },
        // { path: '/vue3', microApp: 'app2', },
      ],
    },
  ],
  fastRefresh: {},
  // base:'/home',
  // publicPath:'/home/',
  // mock: true,
  // chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      // optimization: {
      //   splitChunks: {
      //     chunks: 'all',
      //     minSize: 30000,
      //     minChunks: 3,
      //     automaticNameDelimiter: '.',
      //     cacheGroups: {
      //       vendor: {
      //         name: 'vendors',
      //         test({ resource }) {
      //           return /[\\/]node_modules[\\/]/.test(resource);
      //         },
      //         priority: 10,
      //       },
      //     },
      //   },
      // },
      plugins: [
        new SentryCliPlugin({
          include: './dist/', // 作用的文件夹，如果只想js报错就./dist/js
          // release: process.env.RELEASE_VERSION, // 一致的版本号
          release: '0.0.1', // 一致的版本号
          configFile: 'sentry.properties', // 不用改
          ignore: ['node_modules', 'webpack.config.js'],
          urlPrefix: '~/', //这里指的你项目需要观测的文件如果你的项目有publicPath这里加上就对了
          // authToken: process.env.SENTRY_AUTH_TOKEN,
          authToken:
            '878163c909134427a3ba116f13595baa829af67a8b9a4b52a0ea4adb4780fe86',
        }),
      ],
      devtool: 'cheap-module-source-map',
      // output: {
      //   // path: path.join(__dirname, "dist"),
      //   // filename: "[name].js",
      //   // sourceMapFilename: "[name].js.map",
      // },
    });
  },
  // qiankun: {
  //   master: {
  //     // 注册子应用信息
  //     apps: [
  //       {
  //         name: 'app1', // 唯一 id
  //         entry: '//localhost:7100', // html entry
  //       },
  //       {
  //         name: 'app2', // 唯一 id
  //         entry: '//localhost:7105', // html entry
  //       },
  //       {
  //         name: 'app3', // 唯一 id
  //         entry: '//localhost:7103', // html entry
  //       },
  //     ],
  //   },
  // },
  headScripts: [`https://unpkg.com/zone.js`],
});
