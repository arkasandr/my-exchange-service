<template>
  <span class="badge" :class="status.class">{{status.name}}</span>
</template>

<script>
import { computed } from 'vue'
export default {

  props: ['type'],
  setup (props) {
    const status = computed(() => {
      if (props.type === 'active') {
        return { name: 'Активно', class: 'primary' }
      } else if (props.type === 'done') {
        return { name: 'Выполнено', class: 'primary' }
      } else if (props.type === 'cancelled') {
        return { name: 'В работе', class: 'warning' }
      } else if (props.type === 'pending') {
        return { name: 'Активно', class: 'danger' }
      }
    })

    return {
      status
    }
  }

}

</script>
