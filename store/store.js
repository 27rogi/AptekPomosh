export const state = () => ({
  store: [
    {
      cureId: 1,
      amount: 50,
    },
    {
      cureId: 2,
      amount: 10,
    },
    {
      cureId: 3,
      amount: 100,
    },
    {
      cureId: 4,
      amount: 30,
    },
    {
      cureId: 5,
      amount: 10,
    },
    {
      cureId: 6,
      amount: 20,
    }
  ]
})

export const getters = {
  getByCureId: state => id => {
    return state.store.find((item, index) => {
      return item.cureId === id;
    });
  },
}
