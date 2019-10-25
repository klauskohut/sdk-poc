# storefront-sdk-poc

> Storefront SDK PoC


This contains a nuxtjs app with really simple abstraction layer built on top `js-buy-sdk` in the `sdk` folder, extendable to other storefront apis in the future.

This sdk be in its own package in the future.

The current flow grabs the Shopify store products, and adds the ability to add products to cart and check them out.


1. [Create an API authentication in Shopify](https://help.shopify.com/en/api/storefront-api/getting-started#storefront-api-authentication)
2. Create a `.env` file with the following:
```
STORE_DOMAIN=store.url
STORE_TOKEN=token
STORE_PLATFORM=shopify
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
