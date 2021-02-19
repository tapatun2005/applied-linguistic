<template>
    <ul class="tabs">
        <li class="tab">
                    <router-link @click="toggleDelay" to='/one'>
                        <div class="_img">
                        <div class="_count">1</div>
                        <img src="@/assets/head.png" alt="">
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
                        <img src="@/assets/head.png" alt="">
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
                            <img src="@/assets/head.png" alt="">
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
                        <img src="@/assets/head.png" alt="">
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
</template>

<script>
export default {
    name: 'Tabs'
}
</script>