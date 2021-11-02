export const state = () => ({
  cureGroups: [
    {
      id: 1,
      name: "Алифир"
    },
    {
      id: 2,
      name: "Эушвецтек"
    },
    {
      id: 3,
      name: "Ollo"
    },
    {
      id: 4,
      name: "Медикрафт"
    }
  ]
})

export const getters = {
  getById: state => id => {
    return state.cureGroups.find((item, index) => {
      return item.id === id;
    });
  },
}
