/**
 * 从url中获取参数对象
 * @param {string} url
 * @returns {Record<string, any>}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  /** @type {Record<string, any>} */
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * 从url中获取参数对象
 * @param {string} url
 * @returns {Record<string, any>}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ');
  if (!search) {
    return {};
  }
  /** @type {Record<string, any>} */
  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach((v) => {
    const index = v.indexOf('=');
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });
  return obj;
}

/**
 * @param {Record<string, any>} json
 * @returns {string}
 */
export function obj2Param(json) {
  if (!json) return '';
  return Object.keys(json)
    .map((key) => {
      if (json[key] === undefined) return '';
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
    .filter((val) => !!val)
    .join('&');
}
