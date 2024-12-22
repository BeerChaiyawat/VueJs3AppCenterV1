<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue App</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <p>
                {{ $store.ProfileInfo.PreName }} {{ $store.ProfileInfo.Name }} {{ $store.ProfileInfo.SurName }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view /> <!-- Render หน้าแต่ละหน้า -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
