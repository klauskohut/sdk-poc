import Shopify from './shopify-storefront'

const platforms = {
  shopify: {
    initialize: Shopify.initialize,
    fetchProducts: Shopify.fetchAll,
    createCheckout: Shopify.createCheckout,
    addToCart: Shopify.addToCart,
    getCheckout: Shopify.getCheckout,
  }
}

const storefront = {
  initialize(platform, attrs) {
    this.platform = platform
    return platforms[platform].initialize(attrs)
  },
  fetchProducts() {
    return platforms[this.platform].fetchProducts()
  },
  createCheckout() {
    return platforms[this.platform].createCheckout().then(checkout => {
      localStorage.setItem('checkoutId', checkout.id)
      return checkout
    })
  },

  async addToCart({ itemId, quantity }) {
    let checkoutId = await localStorage.getItem('checkoutId')
    if (!checkoutId) checkoutId = await this.createCheckout().then(checkout => checkoutId = checkout.id)
    return platforms[this.platform].addToCart(checkoutId, { itemId, quantity })
  },

  getCheckout(checkoutId) {
    return platforms[this.platform].getCheckout(checkoutId)
  }
}

export default storefront
