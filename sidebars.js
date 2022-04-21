module.exports = {
  docs: [
    {
      type: 'category',
      label: '简介',
      items: [
        "introduction/readme",
        "introduction/quickstart"
      ],
    },{
      type: 'category',
      label: '浏览器拓展',
      items: [],
    },
    {
      type: 'link',
      label: '云端模板', // 链接标签
      href: '/api', // 内部路径
    },{
      type: 'link',
      label: '更新日志', // 链接标签
      href: '/changelog', // 内部路径
    },
  ],
};