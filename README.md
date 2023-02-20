<!--
 * @Description: readme
 * @Author: 孙少聪
 * @Date: 2022-09-19 09:55:35
 * @LastEditTime: 2022-11-25 15:34:08
 * @LastEditors: 孙少聪
-->
# djk-vue

> 已经包含了 Element UI & axios & iconfont & permission control & lint 技术栈
> 本项目借鉴于

[线上地址](http://panjiachen.github.io/vue-admin-template)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/ACongSun/djk-vue

# 进入项目目录
cd djk-vue

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

