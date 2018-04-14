const test = require('ava');
const isBalanced = require('./is-balanced');

test(`Level 1 Test`, (t) => {
  const src = '{[()]}';
  const result = isBalanced(src);
  const expected = true;

  t.is(result, expected, 'Fail Level 1 Test');
});

test(`Level 2 Test`, (t) => {
  const src = '{[()[]]({}[({}[])])}';
  const result = isBalanced(src);
  const expected = true;

  t.is(result, expected, 'Fail Level 2 Test');
});
