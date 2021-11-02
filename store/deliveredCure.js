export const state = () => ({
  deliveredCure: [
    {
      supplyId: 1,
      cureId: 1,
      amount: 20
    },
    {
      supplyId: 2,
      cureId: 2,
      amount: 20
    },
    {
      supplyId: 2,
      cureId: 3,
      amount: 20
    },
    {
      supplyId: 1,
      cureId: 4,
      amount: 20
    },
    {
      supplyId: 3,
      cureId: 1,
      amount: 20
    },
    {
      supplyId: 3,
      cureId: 4,
      amount: 20
    },
    {
      supplyId: 3,
      cureId: 2,
      amount: 20
    }
  ]
})

export const getters = {
  getBySupplyId: (state) => (id) => {
    return state.deliveredCure.filter((item, index) => {
      return item.supplyId === id
    })
  },
  getByCureId: (state) => (id) => {
    return state.deliveredCure.filter((item, index) => {
      return item.cureId === id
    })
  }
}
