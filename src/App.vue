<template>
  <div>
    <TopMenu />
    <div class="container my-5">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  mounted() {

  },
  components: {
    TopMenu,
    MyFooter
  }
}
</script>