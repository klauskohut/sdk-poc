import Client from 'shopify-buy'

const ShopifyStorefront = {
  initialize(attrs) {
    this.client = Client.buildClient(attrs)
  },
  async fetchAll() {
    const products = await this.client.product.fetchAll().then(products => products)
    return products
  },
  async createCheckout() {
    const checkout = await this.client.checkout.create().then(checkout => checkout)
    return checkout
  },
  addToCart(checkoutId, { itemId, quantity }) {
    const payload = {
      variantId: itemId,
      quantity
    }
    return this.client.checkout.addLineItems(checkoutId, [payload])
  },
  getCheckout(checkoutId) {
    return this.client.checkout.fetch(checkoutId)
  }
}

export default ShopifyStorefront
