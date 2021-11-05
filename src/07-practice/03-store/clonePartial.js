/**
 * @template T
 * @param {T[]} arr1
 * @param {T[]} arr2
 * @returns {T[]}
 */
function arrSubtract(arr1, arr2) {
  return arr1.filter(function (item) {
    return arr2.indexOf(item) === -1;
  });
}

/**
 * 克隆对象一部分属性（浅克隆）`includes`和`excludes`只取一个，优先`includes`
 * @param {Record<PropertyKey,any>} source 复制源对象
 * @param {PropertyKey[]} [includes] 要复制的属性列表
 * @param {PropertyKey[]} [excludes] 要忽略的属性列表
 * @param {Record<PropertyKey,any>} [target] 要复制到的目标对象，不传复制到新对象
 */
export function clonePartial(
  source,
  includes = [],
  excludes = [],
  target = {}
) {
  if (includes && includes.length) {
    return includes.reduce((tar, key) => {
      tar[key] = source[key];
      return tar;
    }, target);
  } else {
    return arrSubtract(Object.keys(source), excludes || []).reduce(
      (tar, key) => {
        tar[key] = source[key];
        return tar;
      },
      target
    );
  }
}
