/**
 * 保留小数点（非四舍五入）
 * @param {Number} n 数值
 * @param {Number} digits 小数点后数字的个数
 * @example toFixed(3.146, 2) // 3.14
 */
export function toFixed(n, digits) {
  return ~~(Math.pow(10, digits) * n) / Math.pow(10, digits);
}

/**
 * 保留小数点（原生toFixed）
 * @param {Number|String} n
 * @param {Number} digits
 */
export function decimalFormat(n, digits = 2) {
  const num = Number(n);
  if (Number.isNaN(num)) {
    return '';
  }

  return num.toFixed(digits);
}

/**
 * 数值显示占位
 * @param {Number|String} n
 * @param {Number} digits
 */
export function countPair(n, digits = 2) {
  return n >= 0 ? Number(n).toFixed(digits) : '--';
}

/**
 * 手机号码显示加密
 * @param {Number|String} n
 */
export function mobileShow(n) {
  return n.replace(n.substring(3, 7), '****');
}

/**
 * 商品价格显示
 * @param {*} min
 * @param {*} max
 * @returns
 */
export function priceIntegerFormat(min, max) {
  if (max && min !== max) {
    return `${decimalFormat(min)}-${decimalFormat(max)}`;
  }

  return decimalFormat(min);
}

/**
 * enumFormatter
 * @param {*} val
 * @param {*} arr
 * @param {*} key
 * @param {*} label
 * @returns
 */
// export function enumFormatter(val, arr, def = '/', key = 'value', label = 'label') {
//   const target = arr.find((v) => v[key] === val)
//   if (label === 'obj') {
//     return target
//   } else {
//     return target ? target[label] : def
//   }
// }