<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
    <div class="container-fluid">
      <!-- Brand -->
      <a class="navbar-brand" href="/">Vue App</a>

      <!-- Toggle button for responsive -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar content -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Home link -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <!-- About link -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>

        <!-- User Info -->
        <div class="d-flex align-items-center">
          <p class="mb-0">
            {{ $store.ProfileInfo.PreName }} {{ $store.ProfileInfo.Name }} {{ $store.ProfileInfo.SurName }}
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* เพิ่มเงาและความสวยงาม */
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1030; /* ทำให้ Navbar อยู่ด้านบนสุด */
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007bff;
}
</style>
