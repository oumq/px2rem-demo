# px2rem
### 自适应问题实践，设计稿是公司疫情项目的，尺寸750
### 原理跟网易、手淘的 lib-flexible 类似
````
 1. 动态设置viewport的scale
 2. 动态计算html的font-size
 3. 页面布局时尺寸采用rem，计算公式{$px/$ue-width * 10}rem，基准值可根据自己需要设定。
````
### 当然直接引用插件是最方便的
