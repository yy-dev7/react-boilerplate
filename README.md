#react-boilerplate ── 一个简单灵活的React脚手架

[react-boilerplate](https://github.com/mervynyang/react-boilerplate)

我理想中的React脚手架是简单且灵活的，

- 简单是指能提供基本的功能，比如编译JSX、解析ES6语法、热更新等。
- 灵活是指能够自由的选择Redux还是Mobx、是否需要添加react-router等其他第三方库，并且能很方便的自行修改webpack的构建文件。

像vue-loader就是一个很好的例子。它具有基本的功能，但是又可以灵活的选择性添加vue-router,vuex等，不像其他一些脚手架，你很难去原来的配置上改变成完全符合你自己需求。因此，我模仿vue-loader构建了一个React脚手架。

### 开始
```bash
$ git clone https://github.com/mervynyang/react-boilerplate.git
$ cd react-boilerplate
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

### styles
- 默认是支持sass，就目前的流行程度和语法设计上来看，sass是优于less的。所以，建议你用sass去写css。
- CSS Module我个人认为是非常不错的css模块化解决方案，像facebook也有在用，推荐使用。
- React引入CSS Module其实是比较麻烦的，你需要这么写：
```
import styles from "./style.css";

<div className={style.className}></div>
```
所以我用到了`react-css-modules`，现在你只需要这么写：
```
import "./style.css"

<div styleName="className">
```
相比之下，简单优雅很多。

### 模版文件
几乎所有的业务组件最开始都是相似的，其实就是一个简单的React class，然后根据业务模块的名字命名class，这个重复的过程很无聊。所以我们需要一些模版去帮我们生成初始化的结构。

这里我用到了[redux-cli](https://github.com/SpencerCDixon/redux-cli)，你需要先手动全局安装`npm i redux-cli -g `，然后就可以在命令行这样去使用了：
```bash
#木偶组件
redux g dumb 组件名

#业务组件
redux g smart 模块名
```
它会自动创建预定义的模版文件，当然，你可以在`blueprints`这个目录修改模版文件。

### Eslint
默认用的是`airbnb`规范，你可以在`.eslintrc.js`这个文件中找到它，可以参考[eslint规则](http://eslint.org/docs/rules/)。
