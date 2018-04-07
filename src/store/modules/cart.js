const state = {
  products: []
}

const getters = {
  cartProducts: (state) => state.products,
  cartProductsCount: (state) => state.products.length,
  cartSubtotalPrice: (state) => {
    return state.products
      .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
  },
  getItemByNumber: (state) => (number) => {
    return state.products
      .find(i => i.number === number)
  }
}

const mutations = {
  addProduct (state, { item, number, quantity }) {
    const product = { ...item, number: number, quantity: quantity }
    state.products.push(product)
  },
  deleteProduct (state, { number }) {
    state.products = state.products
      .filter(p => p.number !== number)
  }
}

export default {
  state,
  getters,
  mutations
}
