export const state = () => ({
  cure: [
    {
      id: 1,
      brandId: 1,
      cureGroupId: 1,
      name: 'Цифирвон',
      expires: 30,
      buyPrice: 1500,
      sellPrice: 2000,
      icon: 'https://cdn-icons-png.flaticon.com/512/2129/2129410.png'
    },
    {
      id: 2,
      brandId: 2,
      cureGroupId: 2,
      name: 'Мексилобутил',
      expires: 45,
      buyPrice: 500,
      sellPrice: 1000,
      icon: 'https://image.flaticon.com/icons/png/512/1029/1029185.png'
    },
    {
      id: 3,
      brandId: 2,
      cureGroupId: 1,
      name: 'Лагьер',
      expires: 65,
      buyPrice: 200,
      sellPrice: 500,
      icon: 'https://cdn-icons-png.flaticon.com/512/1029/1029134.png'
    },
    {
      id: 4,
      brandId: 3,
      cureGroupId: 4,
      name: 'Мотриникс',
      expires: 120,
      buyPrice: 300,
      sellPrice: 500,
      icon: 'https://img.favpng.com/19/3/3/design-icon-png-favpng-ms5JKpkyjDPJjrg3NMCT8fSa6.jpg'
    },
    {
      id: 5,
      brandId: 3,
      cureGroupId: 3,
      name: 'Локардин',
      expires: 30,
      buyPrice: 400,
      sellPrice: 450,
      icon: 'https://cdn0.iconfinder.com/data/icons/jumpicon-medical-line-1/32/-_Pills-Pill-Cure-Pharmacy-Medicine-Treatment-512.png'
    },
    {
      id: 6,
      brandId: 1,
      cureGroupId: 1,
      name: 'Мокфиринбермин',
      expires: 256,
      buyPrice: 3500,
      sellPrice: 4000,
      icon: 'https://static.thenounproject.com/png/3926978-200.png'
    },
    {
      id: 7,
      brandId: 4,
      cureGroupId: 2,
      name: 'Оккле',
      expires: 356,
      buyPrice: 200,
      sellPrice: 1000,
      icon: 'https://static.thenounproject.com/png/1801802-200.png'
    }
  ]
})

export const getters = {
  getById: (state) => (id) => {
    return state.cure.find((item, index) => {
      return item.id === id
    })
  }
}
