

export const state = () => ({
  users: [
    {
      id: 1,
      name: "Архипов Дмитрий Анатольевич",
      password: "demo1",
      groupId: 1,
    },
    {
      id: 2,
      name: "Рогов Адриан Дмитрьевич",
      password: "demo2",
      groupId: 2,
    },
    {
      id: 3,
      name: "Захаров Гордий Юлианович",
      password: "demo3",
      groupId: 3,
    },
    {
      id: 4,
      name: "Рыженков Игорь Юрьевич",
      password: "demo4",
      groupId: 4,
    }
  ]
})

export const getters = {
  getById: state => id => {
    return state.users.find((item, index) => {
      return item.id === id;
    });
  },
}
