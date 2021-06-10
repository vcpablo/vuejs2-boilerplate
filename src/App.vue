<template>
  <div id="app" role="main">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
