<template>
  <div class="container text-center">
    <h1>Welcome to the Home Page</h1>
    <p>This is the homepage of our Vue app.</p>

    <!-- ย้าย Counter มาที่นี่ -->
    <Counter />
  </div>
</template>
<script>
import Counter from "../components/Counter.vue";

export default {
  name: "Home",
  components: {
    Counter, // Import Counter component
  },
};
</script>
