import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  'GET /api/tags': mockjs.mock({
    'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
  'GET /api/person': mockjs.mock({
    'list|10': [{ name: '@cname()', idCard: '@id()', address: '@city(true)' }],
  }),
};
