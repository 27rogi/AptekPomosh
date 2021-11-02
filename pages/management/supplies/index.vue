<template>
  <div class="supplies">
    <div class="controls">
      <button class="ui-button" @click="$router.go(-1)">
        <chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
      </button>
      <h1>Список поставок</h1>
    </div>
    <div class="supplies__list">
      <div v-for="supply in supplies" :key="supply.id" class="supply">
        <h1>Поставка №{{ supply.id }} от {{ $moment(supply.date, 'DD/MM/YYYY').format('DD MMMM YYYY') }}</h1>
        <div class="supply__info">
          <p>
            Номер накладной: <b>{{ supply.waybill }}</b>
          </p>
          <p>
            Принявший кладовщик: <b>{{ supply.user.name }}</b>
          </p>
          <h2>Поставленные лекарства</h2>
          <div class="supply__cure">
            <div v-for="cure in supply.items" :key="cure.id" class="cure">
              <p>
                <AlertOctagonIcon v-if="cure.daysLeft < 20 && cure.daysLeft > 0" class="text-brown-400" />
                <AlertOctagonIcon v-if="cure.daysLeft < 0" class="text-red-500" />
                {{ cure.data.name }} ({{ $store.getters['brands/getById'](cure.data.brandId).name }}) {{ cure.amount }} шт.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, AlertOctagonIcon } from 'vue-feather-icons'

export default {
  components: {
    ChevronLeftIcon,
    AlertOctagonIcon,
  },
  middleware: ['auth'],
  meta: {
    groupId: [1, 3],
  },
  computed: {
    supplies() {
      // detach array from Vuex store to modify its values
      const supplies = JSON.parse(JSON.stringify(this.$store.state.supplies.supplies)).sort((a, b) => {
        const aDate = this.$moment(a.date, 'DD/MM/YYYY')
        const bDate = this.$moment(b.date, 'DD/MM/YYYY')

        if (aDate.isAfter(bDate)) return 1
        if (bDate.isAfter(aDate)) return -1

        return 0
      })

      if (!supplies) return null

      supplies.forEach((supply) => {
        const supplyCureList = this.$store.getters['deliveredCure/getBySupplyId'](supply.id)
        supplyCureList.forEach((cureFromList) => {
          const cure = this.$store.getters['cure/getById'](cureFromList.cureId)
          cureFromList.data = cure
          cureFromList.daysLeft = this.$moment(supply.date, 'DD/MM/YYYY').add(cure.expires, 'days').diff(this.$moment(), 'days')
        })

        supply.user = this.$store.getters['users/getById'](supply.userId)

        supplyCureList.sort((a, b) => {
          return a.data.name.localeCompare(b.data.name)
        })
        supply.items = supplyCureList
      })

      return supplies
    },
  },
}
</script>

<style lang="scss" scoped>
.supplies {
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

  .supplies__list {
    @apply flex flex-col gap-4;
    .supply {
      @apply flex flex-col gap-2 p-4 rounded-xl bg-green-100;
      .supply__info {
        @apply flex flex-col;
        h2 {
          @apply text-xl font-heading font-bold mt-2 mb-2;
        }
        .supply__cure {
          @apply flex flex-row flex-wrap gap-2;
          .cure {
            @apply font-bold px-3 py-1 bg-green-200 rounded-xl;
            p {
              @apply flex flex-row items-center justify-center gap-2;
            }
          }
        }
      }
    }
  }
}
</style>
