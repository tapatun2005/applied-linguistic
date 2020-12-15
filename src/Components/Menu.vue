<template>
    <nav :class="{ 'is-active': isOpen }">
        <router-link to='/'>Homepage</router-link>
        <router-link to='/pages'>Pages</router-link>
        <router-link to='/tasks'>Tasks</router-link>
        <router-link to='/contacts'>Contacts</router-link>
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