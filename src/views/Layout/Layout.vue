<template>
  <b-row>
    <b-col>
      <Navbar />
      <b-container fluid>
        <div id="content" tabindex="0">
          <slot />
        </div>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'

export default {
  name: 'LayoutView',
  components: {
    Navbar
  }
}
</script>
