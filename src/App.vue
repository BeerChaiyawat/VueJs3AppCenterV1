<template>
  <div id="app">
    <Navbar /> <!-- เรียกใช้ Component Navbar -->
    <router-view /> <!-- Render หน้าแต่ละหน้า -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Import Navbar

export default {
  name: 'App',
  components: {
    Navbar, // ลงทะเบียน Component
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
