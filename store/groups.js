export const state = () => ({
  groups: [
    {
      id: 1,
      name: 'Администратор'
    },
    {
      id: 2,
      name: 'Фармацевт'
    },
    {
      id: 3,
      name: 'Кладовщик'
    },
    {
      id: 4,
      name: 'Системный администратор'
    }
  ]
})

export const getters = {
  verify: (state) => (groupId) => {
    const group = state.groups.find((group, index) => {
      return group.groupId === groupId
    })
    if (group) return group.groupId === groupId
  },
  getById: (state) => (id) => {
    const group = state.groups.find((item, index) => item.id === id)
    console.log(group)
    return group
  }
}
