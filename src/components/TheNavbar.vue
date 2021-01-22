<template>
  <header class="navbar">
    <strong>TaskExchange</strong>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Все задачи
        </router-link>
      </li>
      <li>
        <router-link to="/new">
          Создать
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>

</style>
