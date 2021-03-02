<template>
    <nav :class="{ 'is-active': isOpen }">
        <!-- <router-link @click="toggleDelay" to='/'>Homepage</router-link>
        <router-link @click="toggleDelay" to='/one'>Part One</router-link>
        <router-link @click="toggleDelay" to='/two'>Part Two</router-link>
        <router-link @click="toggleDelay" to='/three'>Part Three</router-link>
        <router-link @click="toggleDelay" to='/four'>Part Four</router-link> -->

        <ul class="tabs -menu">
             
                <li class="tab">
                    <router-link @click="toggleDelay" to='/one'>
                        <div class="_img">
                        <div class="_count">1</div>
                        <img src="@/assets/head-one.png" alt="">
                        </div>
                        <div class="_content">
                        <div class="_title">Interview One and Reflect</div>
                        <div class="_icon">
                            <img src="@/assets/arrow-right.svg" alt="">
                        </div>
                        </div>
                    </router-link>
                </li>
            
            
           
                <li class="tab">
                     <router-link @click="toggleDelay" to='/two'>
                        <div class="_img">
                        <div class="_count">2</div>
                        <img src="@/assets/head-two.png" alt="">
                        </div>
                        <div class="_content">
                        <div class="_title">Input and Reflect </div>
                        <div class="_icon">
                            <img src="@/assets/arrow-right.svg" alt="">
                        </div>
                        </div>
                    </router-link>
                </li>
            
             
                <li class="tab">
                    <router-link @click="toggleDelay" to='/three'>
                        <div class="_img">
                            <div class="_count">3</div>
                            <img src="@/assets/head-three.png" alt="">
                        </div>
                        <div class="_content">
                        <div class="_title">Interview Two</div>
                        <div class="_icon">
                            <img src="@/assets/arrow-right.svg" alt="">
                        </div>
                        </div>
                    </router-link>
                </li>
            
                <li class="tab">
                    <router-link @click="toggleDelay" to='/four'>
                        <div class="_img">
                        <div class="_count">4</div>
                        <img src="@/assets/head-four.png" alt="">
                        </div>
                        <div class="_content">
                        <div class="_title">Reflect and Recommend</div>
                        <div class="_icon">
                            <img src="@/assets/arrow-right.svg" alt="">
                        </div>
                        </div>
                     </router-link>
                </li>
           
        </ul>
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
        },
        toggleDelay() {
            setTimeout(() => {
                this.isOpen = !this.isOpen
            }, 500)
        }
    }
}
</script>