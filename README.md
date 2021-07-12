# sht 前端编码规范
## 命名规范
 ```
 文件命名 一律使用 小写、多单词、使用 - 分割            ( max-count.vue )
 变量命名 一律使用 小驼峰、多单词、以描述性的修饰词结尾   ( maxCount )
 常量命名 一律使用 全大写、多单词、使用_分割            ( MAX_COUNT )
 组件命名 一律使用 大驼峰、多单词、以描述性的修饰词结尾   ( MaxCount )
 css 命名规范 一律使用 小写、多单词、使用 - 分割       ( .max-count {} )

 method 方法命名命名规范
   1、尽量使用常用单词开头（set、get、go、cancel、has、is）
    // bad
      go、nextPage、show、open、login 
    // good
      jumpPage、openCarInfoDialog、handleOpenClick、handleEditChange

 请求数据命名规范
    1、以请求数据方法开头以data结尾
    getListData、postFormData、deleteItemData

 props 命名规范  (严禁使用 attr)
   1、在声明 prop 的时候，其命名应该始终使用小驼峰，而在模板中应该始终使用 kebab-case

   // bad
    <script>
    props: {
      'greeting-text': String
    }
    </script>
   
    <welcome-message greetingText="hi"></welcome-message>
    
    // good
    <script>
    props: {
      greetingText: String
    }
    </script>
    
    <welcome-message greeting-text="hi" />


 例外情况
 1、作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr。
 2、循环变量可以简写，比如：i，j，k 等。
```

## 结构化规范

#####   目录文件夹及子文件规范
- 以下统一管理处均对应相应模块
- 以下全局文件文件均以 index.js 导出，并在 main.js 中导入
- 以下临时文件，在使用后，接口已经有了，发版后清除
- (后期可能根据业务有增)
```
    |-- public                静态资源目录
    |-- src                   源码目录
        |--  api                接口，统一管理
        |--  assets             静态资源，统一管理
        |--  commponents        公用组件，全局文件
        |--  config             配置文件
        |--  page               静态视图页面
        |--  router             路由，统一管理
        |--  store              vuex, 统一管理
        |--  util               工具
        |--  views              业务视图
        |--  .eslintrc.js       eslint配置
        |--  App.vue            根组件
        |--  main.js            入口
    |-- .gitignore            git忽略配置文件
    |-- .prettierrc.js        编码风格配置 
    |-- babel.config.js       babel配置
    |-- package.json
    |-- README.md
    |-- vue.config.js         项目配置文件
    |-- yarn.lock
```
### 业务功能文件结构
```
简要说明: 新增文件必须以-add结尾  详情必须以 details 命名
   |-- purchase-order                 采购订单
        |-- components                公共组件 (相对 列表页、详情、新增)
        |-- index.vue                 采购订单列表                 
        |-- details.vue               采购订单详情
        |-- purchase-order-add.vue    采购订单新增
        |-- utils.js                  公共方法 (相对 列表页、详情、新增)
```

### Vue 文件基本结构
```
<template>
    <div class="contailer">
      <!--必须在div中编写页面-->
    </div>
</template>
<script>
export default {
  name: 'xxxx', // 必须与文件名称一致
  components : {
  },
  data () {
    return {
    }
  },
  mounted() {
  }，
  methods: {
  }
}
</script>
//  1、声明语言，并且添加scoped 2、lang 必须等于 scss
<style lang="scss" scoped>
  .contailer {}
</style>
```

### 模板语法规范
```
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<my-component foo="a" bar="b" baz="c"></my-component>

<!-- good -->
<img
  alt="Vue Logo"
  src="https://vuejs.org/images/logo.png"
>
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

### 组件选项顺序
- name
- components
- props
- data
- computed
- created
- mounted
- metods
- filter
- watch

### 添加注释列表
- 公共组件使用说明
- 各组件中重要函数或者类说明
- 复杂的业务逻辑处理说明
- 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
- 多重 if 判断语句
- 注释块必须以 /**（至少两个星号）开头**/
- 单行注释使用 //

##### 多行注释
```
/**
 * xxx (用途说明 必选)
 * @param id xxx (参数说明  非必选)
 * @return {Promise<void>} String id (返回说明  如果有返回 必写)
 */
async del(id) {
  await setTimeout()
  return id
}
```

### 代码风格
1. 定义变量使用 let ,定义常量使用 const
2. 静态字符串一律使用单引号，动态字符串使用反引号
    ```
      // bad
      const a = 'foobar'
      const b = 'foo' + a + 'bar'
    
      // good
      const a = 'foobar'
      const b = `foo${a}bar`
      const c = 'foobar'
    ```
3. 解构赋值
   ```
   ## 数组解构赋值
   const arr = [1, 2, 3, 4]
   // bad
   const first = arr[0]
   const second = arr[1]
 
   // good
   const [first, second] = arr
   
   ## 对象解构
   const objs = {
      a: 10,
      b: 20,
   }
   // bad
   const a = objs.a;
   const b = objs.b;
   
   // good
   const { a, b } = objs
   
   ## 函数的参数如果是对象的成员，优先使用解构赋值
   // bad
   const getFullName = (user) => {
     const firstName = user.firstName
     const lastName = user.lastName
   }
    
   // good
   const getFullName = (obj) => {
     const { firstName, lastName } = obj
   }
    
   // best
   const getFullName = ({ firstName, lastName }) => {}
   ```
4. 拷贝数组  (使用扩展运算符（...）浅拷贝)
    ```
      const items = [1, 2, 3, 4, 5]
    
      // bad
      const itemsCopy = items
    
      // good
      const itemsCopy = [...items]
    ```
5. 箭头函数
    ```
     // bad
     function fun () {}
   
     // good
     const fun = () => {}
   ```   
6. 模块导入导出
    ```
    如果模块只有一个输出值，就使用 export default，
    如果模块有多个输出值，export
   
     // bad
     import * as myObject from './importModule';
     // good
     import myObject from './importModule';
   ```
7. 指令规范
    - 1 指令有缩写一律采用缩写形式
        ```
         // bad
         v-bind:class="{'show-left'：true}"
         v-on:click="getListData"
       
         // good
         :class="{'show-left'：true}"
         @click="getListData"
      ```
    - 2 v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
      ```
        // bad
        <ul>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>
        
        // good
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.text }}
            </li>
        </ul>
      ```
    - 3 避免 v-if 和 v-for 同时用在一个元素上（性能问题）
      ```
        将数据替换为一个计算属性，让其返回过滤后的列表
        // bad
        <ul>
            <li v-for="user in users" v-if="user.isActive" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
        
        <!-- good -->
        <ul>
            <li v-for="user in activeUsers" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
        
        <script>
        computed: {
            activeUsers: function () {
                return this.users.filter((user) => user.isActive)
            }
        }
        </script>
      
        将 v-if 移动至容器元素上 (比如 ul, ol)
        // bad
        <ul>
            <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
        
        // good
        <ul v-if="shouldShowUsers">
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
      ```
8. Props 规范
    ```
    // bad
    props: ['status']
   
    // good 必选并且必须是 0，1，2
    props: {
      status: {
        type: Number,
        required: true,
        validator: (value) => [0, 1, 2].indexOf(value) !== -1
      }
    }
    
    // good 非必选
    props: {
      status: {
        type: Number,
        default: 0,
      }
    }
    ```
   
## CSS 规范   
1. 省略值为 0 时的单位
    ```
    // bad
    padding-bottom: 0px;
    margin: 0em;
    
    // good
    padding-bottom: 0;
    margin: 0;
   ```
2. 如果 CSS 可以做到，就不要使用 JS   
3. 建议并适当缩写值，提高可读性，特殊情况除外 “建议并适当”是因为缩写总是会包含一系列的值，而有时候我们并不希望设置某一值，反而造成了麻烦，那么这时候你可以不缩写，而是分开写。
当然，在一切可以缩写的情况下，请务必缩写，它最大的好处就是节省了字节，便于维护，并使阅读更加一目了然。
    ```
    // bad
    .box{
        border-top-style: none;
        font-family: palatino, georgia, serif;
        font-size: 100%;
        line-height: 1.6;
        padding-bottom: 2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0;
    }
    
    // good
    .box{
        border-top: 0;
        font: 100%/1.6 palatino, georgia, serif;
        padding: 0 1em 2em;
    }
    ```
4. 元素选择器应该避免在 scoped 中出现


## 函数方法常用动词
```
get 获取/set 设置,
add 增加/remove、delete 删除
edit 编辑/modify 修改,
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```
