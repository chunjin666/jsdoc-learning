import shopStore from './shopStore';
import createStoreBehavior from './createStoreBehavior';

Page({
  behaviors: [createStoreBehavior(shopStore)],

  onLoad() {
    console.log('data', this.data);
    shopStore.getShopList();
  },

  /**
   * @param {WechatMiniprogram.TouchEvent} e
   */
  onSelectShopItem(e) {
    e.target;
    const shopId = Number(e.currentTarget.dataset.id);
    // 由于 createStoreBehavior 把 store 的 action 也映射到了 page 上
    // 其实也可以这么使用：this.selectShop(shopId)，不过由于不太直观，这种方式建议只在 wxml 中使用
    shopStore.selectShop(shopId);
  },
});
