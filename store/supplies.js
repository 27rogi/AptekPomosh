export const state = () => ({
  supplies: [
    {
      id: 1,
      userId: 1,
      waybill: '1243312254',
      date: '1/11/2021'
    },
    {
      id: 2,
      userId: 2,
      waybill: '4413355123',
      date: '9/10/2021'
    },
    {
      id: 3,
      userId: 4,
      waybill: '7333542551',
      date: '19/1/2021'
    }
  ]
})

export const getters = {
  getById: (state) => (id) => {
    return state.supplies.find((item, index) => {
      return item.id === id
    })
  }
}
