<template>
  <div v-if="user" class="dashboard">
    <div class="dashboard__userinfo">
      <h1>
        Здравствуйте, <b>{{ user.name }}</b>
      </h1>
      <h2>
        Уровень допуска:
        <b>{{ $store.getters['groups/getById'](user.groupId).name }}</b>
      </h2>
    </div>
    <div v-if="hasGroup([1, 4])" class="dashboard__categories">
      <h1 class="dashboard__category-title">Пользователи</h1>
      <div class="dashboard__blocks">
        <router-link to="/management/users">
          <div class="block__icon">
            <users-icon size="3x"></users-icon>
          </div>
          <h1>Список пользователей</h1>
          <p>Просмотр пользователей в системе</p>
        </router-link>
        <router-link to="/management/users/add">
          <div class="block__icon">
            <user-plus-icon size="3x"></user-plus-icon>
          </div>
          <h1>Добавить пользователя</h1>
          <p>Создание новой учетной записи для сотрудника</p>
        </router-link>
      </div>
    </div>
    <div v-if="hasGroup([3, 4])" class="dashboard__categories">
      <h1 class="dashboard__category-title">Поставки</h1>
      <div class="dashboard__blocks">
        <router-link to="/management/supplies">
          <div class="block__icon">
            <truck-icon size="3x"></truck-icon>
          </div>
          <h1>Поставленные лекарства</h1>
          <p>Просмотр информации о поставках</p>
        </router-link>
        <router-link to="/management/supplies/add">
          <div class="block__icon">
            <file-plus-icon size="3x"></file-plus-icon>
          </div>
          <h1>Новая поставка</h1>
          <p>Внесение информации о новой поставке</p>
        </router-link>
      </div>
    </div>
    <div v-if="hasGroup([2, 4])" class="dashboard__categories">
      <h1 class="dashboard__category-title">Лекарства</h1>
      <div class="dashboard__blocks">
        <router-link to="/management/cure/count">
          <div class="block__icon">
            <box-icon size="3x"></box-icon>
          </div>
          <h1>Лекарства на складе</h1>
          <p>Просмотр количества лекарств на складе</p>
        </router-link>
        <router-link to="/management/cure">
          <div class="block__icon">
            <users-icon size="3x"></users-icon>
          </div>
          <h1>Список лекарств</h1>
          <p>Просмотр лекарств в системе</p>
        </router-link>
        <router-link to="/management/cure/brands">
          <div class="block__icon">
            <users-icon size="3x"></users-icon>
          </div>
          <h1>Список производителей</h1>
          <p>Просмотр производителей лекарств в системе</p>
        </router-link>
        <router-link to="/management/cure/brands/add">
          <div class="block__icon">
            <file-plus-icon size="3x"></file-plus-icon>
          </div>
          <h1>Добавить производителя</h1>
          <p>Добавление нового производителя лекарств</p>
        </router-link>
        <router-link to="/management/cure/add">
          <div class="block__icon">
            <file-plus-icon size="3x"></file-plus-icon>
          </div>
          <h1>Добавить лекарство</h1>
          <p>Добавление нового лекарства</p>
        </router-link>
      </div>
    </div>
    <div v-if="hasGroup([1, 4])" class="dashboard__categories">
      <h1 class="dashboard__category-title">Формирование отчетов</h1>
      <div class="dashboard__blocks">
        <router-link to="/management/reports/cure">
          <div class="block__icon">
            <file-text-icon size="3x" />
          </div>
          <h1>Отчеты по наличию лекарств</h1>
          <p>Управление отчетами по наличию лекарств на складе и сортировка по группам</p>
        </router-link>
        <router-link to="/management/reports/sales">
          <div class="block__icon">
            <file-text-icon size="3x" />
          </div>
          <h1>Отчеты по продажам</h1>
          <p>Управление отчетами по продаже лекарств и сортировка по группам</p>
        </router-link>
        <router-link to="/management/reports/facture">
          <div class="block__icon">
            <file-text-icon size="3x" />
          </div>
          <h1>Отчеты "Счет-фактура"</h1>
          <p>Просмотр отчетов вида "Счет-фактура"</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { UsersIcon, UserPlusIcon, BoxIcon, FilePlusIcon, TruckIcon, FileTextIcon } from 'vue-feather-icons'
export default {
  components: {
    UsersIcon,
    UserPlusIcon,
    BoxIcon,
    FilePlusIcon,
    TruckIcon,
    FileTextIcon,
  },
  middleware: 'auth',
  methods: {
    hasGroup(groupIds) {
      return groupIds.includes(this.user.groupId)
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  @apply flex flex-col gap-12 mb-16;
  .dashboard__userinfo {
    @apply flex flex-col gap-2;
    h1 {
      @apply text-2xl font-heading;
    }
    h2 {
      @apply text-xl;
    }
  }
  .dashboard__categories {
    @apply flex flex-col gap-4;
    .dashboard__category-title {
      @apply text-2xl font-heading font-bold;
    }
    .dashboard__blocks {
      @apply flex flex-wrap gap-4;
      > a {
        width: 24rem;
        @apply flex flex-col p-6 bg-green-100 rounded-2xl gap-2;
        .block__icon {
          @apply text-green-600;
        }
        h1 {
          @apply font-app font-bold text-xl text-green-800;
        }
        &:hover {
          @apply bg-green-200;
        }
      }
    }
  }
}
</style>
