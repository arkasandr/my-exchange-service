<!--<template>-->
<!--  <h1 v-if="firstElementAdding" class="text-white center">Задач пока нет</h1>-->

<!--&lt;!&ndash;  <div v-for="item in tasks" :key="item">&ndash;&gt;-->
<!--&lt;!&ndash;    <component&ndash;&gt;-->
<!--&lt;!&ndash;      :is="'Task'"&ndash;&gt;-->
<!--&lt;!&ndash;      :idx=item.idx&ndash;&gt;-->
<!--&lt;!&ndash;      :title=item.title&ndash;&gt;-->
<!--&lt;!&ndash;      :date=item.date&ndash;&gt;-->
<!--&lt;!&ndash;      :description=item.description&ndash;&gt;-->
<!--&lt;!&ndash;    ></component>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->

<!--  <h3 class="text-white">Всего активных задач: 0</h3>-->
<!--  <div class="card">-->
<!--    <h2 class="card-title">-->
<!--      Название задачи-->
<!--      <AppStatus :type="'done'"/>-->
<!--    </h2>-->
<!--    <p>-->
<!--      <strong>-->
<!--        <small>-->
<!--          {{new Date().toLocaleDateString()}}-->
<!--        </small>-->
<!--      </strong>-->
<!--    </p>-->
<!--    <button class="btn primary">Посмотреть</button>-->
<!--  </div>-->
<!--&lt;!&ndash;  &lt;!&ndash;    <div class="text-white center">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;      <h3 v-if="firstElementAdding">Добавьте первый блок, чтобы увидеть результат</h3>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;      <div v-for="item in componentName" :key="item">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;        <component :is="item.type" :resume="item.content"></component>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;      </div>&ndash;&gt;&ndash;&gt;-->

<!--  &lt;!&ndash;    </div>&ndash;&gt;-->
<!--</template>-->

  <template>
  <h1 class="text-white center" v-if=!tasks.length>Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'"/>
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

  setup () {
    const store = useStore()
    const tasks = computed(() => store.getters.tasks)

    return {
      tasks
      // idx,
      // title,
      // date,
      // description,
    }
  },
  components: { AppStatus }
}
</script>
