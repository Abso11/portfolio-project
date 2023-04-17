module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      ['build', 'docs', 'chore', 'feat', 'fix', 'release', 'refactor', 'revert', 'test', 'deps']
    ],
    'function-rules/scope-enum': [
      2,
      'always',
      ({ scope }) => (/^((NO-TICKET)|([A-Z]+-[0-9]+))/.test(scope) ? [true] : [false, 'wrong scope'])
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 5],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower-case']
  }
};
