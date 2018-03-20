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


in `tests/launch.json`, you can add other puppeteer launch options refer https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions 

在`tests/launch.json`中, 你可以给添加更多的启动参数，参考 https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions 

```
{
  "executablePath":"C:\\Users\\josh\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe",
}
```

and if you are using root , a launch config is needed, launch.json | 如果你使用root账号还需要配置launch参数

```
{
  "args": ["--no-sandbox"]
}
```


## CI/CD/DEVOPS

如果你使用docker cloud，那么只需要fork本仓库后关联到docker cloud的仓库即可

if you are using docker cloud, then the only thing you need to do is fork this repo and then connect to your docker cloud repo

[postor/nextjs-cd](https://store.docker.com/community/images/postor/nextjs-cd) 就是fork之后通过docker cloud构建且通过测试的例子，你可以使用docker cloud的服务启动，也可以直接使用`docker run`命令来启动它

[postor/nextjs-cd](https://store.docker.com/community/images/postor/nextjs-cd) is an example built and tested by docker cloud, you can create service on docker cloud, also you can use `docker run`

```
docker run -p80:80 -t postor/nextjs-cd
```