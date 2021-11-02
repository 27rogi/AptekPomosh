<template>
  <div class="cure">
    <div class="controls">
      <button class="ui-button" @click="$router.go(-1)">
        <chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
      </button>
      <h1>Список лекарств</h1>
    </div>
    <div class="cure__table">
      <vue-good-table style-class="vgt-table striped" :columns="columns" :rows="rows" theme="green" />
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { ChevronLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    VueGoodTable,
    ChevronLeftIcon,
  },
  middleware: ['auth'],
  meta: {
    groupId: [1, 2],
  },
  data() {
    return {
      columns: [
        {
          label: 'Название',
          field: 'name',
        },
        {
          label: 'Производитель',
          field: 'brandId',
          formatFn: (value) => {
            return this.$store.getters['brands/getById'](value).name
          },
        },
        {
          label: 'Группа лекарств',
          field: 'cureGroupId',
          formatFn: (value) => {
            return this.$store.getters['cureGroups/getById'](value).name
          },
        },
      ],
    }
  },
  computed: {
    rows() {
      const cureList = this.$store.state.cure.cure

      return cureList
    },
  },
}
</script>

<style lang="scss" scoped>
.cure {
  .controls {
    @apply flex flex-row items-center gap-2;
    .ui-button {
      @apply p-3;
    }
  }
  h1 {
    @apply font-heading text-2xl font-bold;
  }
  @apply flex flex-col gap-4;
}
</style>
