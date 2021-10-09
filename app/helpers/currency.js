import { helper } from '@ember/component/helper';

export default helper(function currency(positional, hash = {}) {
  const [number] = positional;
  const { sign = '€' } = hash;
  const dollars = Math.floor(number);
  let cents = Math.floor((number * 100) % 100);

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }

  return `${sign}${dollars}.${cents}`;
});
