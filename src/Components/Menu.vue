<template>
    <nav :class="{ 'is-active': isOpen }">
        <router-link to='/'>Homepage</router-link>
        <router-link to='/one'>Part One</router-link>
        <router-link to='/two'>Part Two</router-link>
        <router-link to='/three'>Part Three</router-link>
        <router-link to='/four'>Part Four</router-link>
    </nav>
    <div 
        @click="toggle" 
        class="menu__toggle"
    >
        <span>{{ isOpen ? '-' : '+'}}</span>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data: () => ({
        isOpen: false
    }),
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>