# Engine Extensions

开发中引擎与编辑器是互相耦合的关系，编辑器基于引擎，但引擎又难免会需要知道编辑器内是怎么使用怎么运行的。当引擎代码修改的时候，还需要搜索编辑器代码是否使用到。在这种情况下无法做到模块界限清晰

但只要我们将上下方向对调，就能将模块界限划分的比较清晰: **通用能力以及流程管理由桌面 App 提供，引擎及其能力能力全部由上层注册**

这种思路下我们就需要将所有使用到引擎的模块作为插件，注册到编辑器内。这其中包括场景、构建、导入器等等

所以这个仓库就是存放引擎相关扩展插件的仓库

**注意：在这个仓库内新增模块是无效的，需要通知编辑器内新增**，工作流暂时没有完全分开，后续将逐步解决

## 初始化

首先我们需要安装必要的库

```bash
npm install --no-save --ignore-scripts
```

然后需要初始化仓库的一些基本配置

```bash
npm run init
```

init 会生成一份 config.json 配置，**我们需要手动填写内部的 enginePath**
当我们配置完成后，就可以开始构建代码

```bash
npm run build
```

## 开发

构建完代码后，我们下载 3.4.0 及以上版本的编辑器，通过扩展管理器里的开发者选项卡，可以直接选择这个仓库内 extensions 下的任一插件，并启动它。启动后会自动关闭内置的同名插件，以达到替换的目的

# 测试

```bash
npm test
```

## 带配置初始化

```
npm run init -- --enginePath=/Users/xm10086/Project/Creator/editor-3d/resources/3d/engine
```
