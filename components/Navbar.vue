<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <div>
        <p>/ап</p>
      </div>
      <p>Аптек<span>Помощь</span></p>
    </div>
    <div class="navbar__items">
      <nuxt-link
        v-for="link in availableLinks"
        :key="link.name"
        :to="link.path"
        >{{ link.name }}</nuxt-link
      >
      <nuxt-link v-if="user && user.groupId" to="/account/logout">
        Выйти из системы
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Панель управления',
          path: '/',
        },
        {
          name: 'Пользователи',
          path: '/management/users',
          groupId: [4],
        },
      ],
    }
  },
  computed: {
    availableLinks() {
      if (this.user) {
        return this.$data.links.filter((link) => {
          if (link.groupId && Array.isArray(link.groupId)) {
            if (this.user.groupId && link.groupId.includes(this.user.groupId))
              return link
            else return null
          } else {
            return link
          }
        })
      } else {
        return null
      }
    },
  },
  methods: {
    isVisible(groupId) {
      if (groupId) {
        if (this.user.groupId) return groupId === this.user.groupId
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply flex flex-row bg-opacity-70 bg-green-100 p-2 m-4 items-center rounded-2xl;
  .navbar__logo {
    @apply flex font-medium items-center;
    > div {
      @apply flex text-xl font-bold text-white bg-green-400 p-2 rounded-xl;
    }
    > p {
      @apply text-lg font-bold ml-2 text-gray-800;
      span {
        @apply text-green-400;
      }
    }
  }
  .navbar__items {
    @apply ml-auto;
    a {
      @apply mx-2 font-semibold text-gray-600;
      &:hover,
      &.nuxt-link-exact-active {
        @apply text-green-400;
      }
    }
  }
}
</style>
