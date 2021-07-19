module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 100], // section-header 文字说明 长度不可超过 72
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', //新功能
        'fix', //：修补bug
        'docs', //：文件
        'style', //： 格式（不影响程序的执行）
        'refactor', //：重置（即不是新增功能，也不是修改bug的程序变动）
        'test', //：增加测试
        'chore', //：构建过程、辅助包 的修改
        'revert', //: 回滚到上一个版本
      ]
    ]
  }
};
