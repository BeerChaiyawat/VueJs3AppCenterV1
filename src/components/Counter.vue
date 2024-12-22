<template>
  <div class="container text-center mt-5">
    <h1>Counter Example</h1>
    <p>Count: {{ $store.count }}</p>
    <p>Double Count: {{ $store.doubleCount }}</p>
    <button class="btn btn-success" @click="$store.increment">Increment</button>
    <button class="btn btn-danger ms-2" @click="$store.decrement">Decrement</button>
  </div>
</template>

<script>

export default {
  name: 'Counter',
};
</script>
