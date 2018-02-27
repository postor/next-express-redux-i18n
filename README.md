# next-express-redux-i18n


## features

- next.js
- express
- i18next
- redux
- es6 for server code
- eslint
- jwt
- jest && visual test

## run

```
git clone xxx
cd xxx
yarn
yarn dev
```

open http://localhost:3000

## 测试 test

- unit 单元测试 [code](./tests/__tests__/tools/i18n-helper.unit.test.js)
- react snap 渲染html代码对比测试 [code](./tests/__tests__/pages/jest.test.js)
- visual 显示截图对比测试 [code](./tests/__tests__/pages/index.visual.test.js)
- functional 功能性测试 [code](./tests/__tests__/pages/index.function.test.js)

```
yarn test
```

显示测试在第一次运行时只会生成对应截图，不进行比对

visual test will only generate screenshots for the first time


你需要根据你的环境配置puppeteer，可以调整[package.json](./package.json)中的`scripts.jest`配置 和 [tests/utils.js](./tests/utils.js)中的`launch`函数

you need to config puppeteer according to your env, in [package.json](./package.json) you can modify `scripts.jest` and in [tests/utils.js](./tests/utils.js) modify `launch` function