<template>
    <div v-if="content" class="container">
        <h2>{{ content.title }}</h2>
    </div>
</template>

<script>
import create  from '../mixins/create'

export default {
  name: 'Contacts',
  mixins: [create]
}
</script>