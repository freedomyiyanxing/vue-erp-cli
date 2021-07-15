/**
 * 此文件为项目配置文件 不得修改
 * @type {{parserOptions: {parser: string, sourceType: string}, extends: [string, string], root: boolean, rules: {quotes: [number, string, {allowTemplateLiterals: boolean, avoidEscape: boolean}]}, env: {node: boolean, browser: boolean, es6: boolean}}}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    // 定义ESLint的解析器
    parser: "babel-eslint",
    sourceType: "module",
  },
  settings: {
    "import/extensions": [
      ".js",
      ".vue"
    ]
  },
  rules: {
    // 单引号
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-param-reassign": 0,
  }
}
