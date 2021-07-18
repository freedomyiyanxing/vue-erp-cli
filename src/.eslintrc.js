/**
 * 此文件为项目配置文件 不得修改
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // 定义ESLint的解析器
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.vue'
    ],
  },
  rules: {
    // 单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/no-unresolved': 0, // 忽略别名
    'import/extensions': 0, // 忽略后缀
    'import/prefer-default-export': 0, // 忽略单个export导出
    // 'no-param-reassign': 0, // 禁止对参数进行赋值
    // 'no-nested-ternary': 0,
    'no-console': 0, // 忽略console
    'linebreak-style': [0, 'windows'], // 忽略换行符
  },
}
