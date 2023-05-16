/* This is a configuration file for commitlint, a tool used to enforce consistent commit message
formatting in a project. The `module.exports` object contains a set of rules that define the format
and content of commit messages. These rules include things like the allowed types of commits
(`'feat'`, `'fix'`, etc.), the maximum length of the commit message header and body, and whether
certain fields (like the subject or scope) can be empty. These rules help ensure that commit
messages are clear, concise, and consistent across a project. */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /* `'type-enum'` is a rule in the commitlint configuration file that specifies the allowed types of
    commits. The `2` indicates that this rule is a required rule, meaning that if a commit message
    does not conform to this rule, the commit will be rejected. The `'always'` indicates that the
    commit message must always include a type. The array `['build', 'chore', 'ci', 'docs', 'feat',
    'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'translation', 'security', 'changeset']`
    lists the allowed types of commits. These types include things like `'feat'` for new features,
    `'fix'` for bug fixes, `'docs'` for documentation updates, and so on. */
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
    /* These are rules in the commitlint configuration file that specify the format and content of the
    commit message subject. */
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [
      2,
      'always',
      ['components', 'pages', 'utils', 'tests', 'config'],
    ],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
