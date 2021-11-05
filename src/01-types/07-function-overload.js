// ------------------------------------------------------------------------------
// JSDoc实现 函数重载
// https://github.com/microsoft/TypeScript/issues/25590
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// 方式一：
// ------------------------------------------------------------------------------
/**
 * @param {number} acc
 * @param {number} cur
 */
const sumReducer = (acc, cur) => acc + cur;

/**
 * @type {{
 * (nums: number[]): number
 * (...nums: number[]): number
 * }}
 */
const sum = (...nums) => {
  if (Array.isArray(nums[0])) {
    return nums[0].reduce(sumReducer, 0);
  }
  return /** @type {number[]} */ (nums).reduce(sumReducer, 0);
};

sum(1, 2, 3);
sum([1, 2, 3]);

// ------------------------------------------------------------------------------
// 方式二：
// ------------------------------------------------------------------------------
/**
 * This function takes a number and a string.
 * @callback signatureA
 * @param {number} num
 * @param {string} str
 */

/**
 * This function takes a boolean and an object
 * @callback signatureB
 * @param {boolean} bool
 * @param {Object} obj
 */

/**
 * @param {Parameters<signatureA> | Parameters<signatureB>} args
 */
function overloaded(...args) {}

overloaded(1, 'foo');
overloaded(true, { foo: 'bar' });