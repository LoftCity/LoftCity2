<template>
  
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">LoftCity</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link class="link" to ='/'>Главная</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="link" to ='/All_apartments'>Все квартиры</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="link" to ='/Documents'>Документация</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="link" to ='/About'>О нас</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>

</template>

<style scoped>
.link{
  color:white;
}
</style>