export const state = () => ({
  brands: [
    {
      id: 1,
      name: "Алифир",
      location: "Россия"
    },
    {
      id: 2,
      name: "Эушвецтек",
      location: "Германия"
    },
    {
      id: 3,
      name: "Ollo",
      location: "США"
    },
    {
      id: 4,
      name: "Медикрафт",
      location: "Россия"
    }
  ]
})

export const getters = {
  getById: state => id => {
    return state.brands.find((item, index) => {
      return item.id === id;
    });
  },
}
