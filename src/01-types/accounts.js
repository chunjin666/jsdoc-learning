/**
 * @typedef {'normal' | 'premium'} AccountType
 */

const userAccountDefault = {
  id: 1,
  username: 'name1',
  account: 'account',
  age: 18,
  isLogin: false,
  login() {
    this.isLogin = true
  },
  logout() {
    this.isLogin = false
  },
}

export { userAccountDefault }
