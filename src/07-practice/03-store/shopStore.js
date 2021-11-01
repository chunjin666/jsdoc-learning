/**
 * @typedef {Object} ShopInfo
 * @property {number} id 门店ID
 * @property {string} name 门店名称
 * @property {string} code 门店编号
 */

import createStore from './createStore'

export default createStore({
  /** @type {ShopInfo} */
  // @ts-ignore
  currentShop: {},
  /** @type {ShopInfo[]} */
  shopList: [],

  /**
   *
   * @returns {Promise<ShopInfo[]>}
   */
  async getShopList(useCache = true) {
    if (this.shopList.length) {
      return Promise.resolve(this.getShopList())
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        this.shopList = [
          { id: 1, code: '1', name: '111' },
          { id: 2, code: '2', name: '222' },
        ]
        this.currentShop = this.shopList[0]
        resolve(this.shopList)
      }, 1000)
    })
  },

  refreshShopList() {
    this.getShopList(false)
  },

  /**
   * @param {number} shopId 
   */
  selectShop(shopId) {
    this.currentShop = /** @type {ShopInfo} */ (this.shopList.find((shop) => shop.id === shopId))
  },
})
