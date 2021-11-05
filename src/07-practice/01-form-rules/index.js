import FormRules from './FormRules';

const rules = FormRules({
  a: { bytelength: 50 },
  b: { email: true },
  c: { equalTo: 'a' },
  d: { lengthrange: [3, 10], message: 'must be between 3 and 10 characters' },
  e: { min: 3, message: 'must be at least 3 characters' },
  f: { max: 10, message: 'must be at most 10 characters' },
  g: { pattern: /^[a-z]+$/i, message: 'must be all lowercase letters' },
  h: [
    { required: 'h字段' },
    {
      validator: (rule, value, param, models) => {
        if (['abc', 'def', 'ghi'].includes(value) === false) {
          return '内容不合法，请重新输入';
        }
        return '';
      },
    },
  ],
  i: { lengthrange: [1, 2] },
});

Page({
  data: {
    form: {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
    },
    rules,
  },
});
