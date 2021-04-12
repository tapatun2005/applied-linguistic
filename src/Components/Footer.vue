<template>
    <div class="footer">
        <div class="container">
            <div class="cols">
                <div class="col f-justify--center">
                    <div class="footer__img">
                        <img src="@/assets/book.jpg" alt="">
                    </div>
                </div>
                <div class="col-3 f-justify--center">
                    
                        <article class="footer__desc">
                            <h2>
                                York's Hidden Stories
                                <span>Interviews in Applied Linguistics</span>
                            </h2>
                            <p>This book explores the mechanics of storytelling within a study aimed at focusing on a ‘hidden’ population of migrants in the city of York, UK. Taking applied linguistics to mean the consideration of real-world ‘problems’ as identified by a ‘client’, in which the use of (and beliefs about) language is a significant component, the authors describe the benefits and challenges of working in a partnership with a community organisation. With project participants from Africa, Europe, Asia and South and Central America who had lived in York between two and fifty years, the study considers the co-construction of meaning in interviews from a range of practical and theoretical perspectives. The book will be of interest to students, academic researchers and community project leaders who are interested in migration stories and interviews as a method of data collection.</p>

                            <a href="https://www.amazon.co.uk/Yorks-Hidden-Stories-Interviews-Linguistics-ebook/dp/B08M5YJV43/ref=sr_1_1?dchild=1&keywords=zhurauskaya&qid=1613596545&sr=8-1" class="btn -green -sm" target="_blank">Buy</a>
                        </article>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="cols">
                <div class="col">
                    <div class="footer-cc">
                        <p>The content on this website is licensed under CC BY-NC-ND 4.0</p>
                        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank">
                            <img src="@/assets/icon-cc.svg" alt="" class="footer-logo">
                            <img src="@/assets/icon-cc2.svg" alt="" class="footer-logo">
                            <img src="@/assets/icon-cc3.svg" alt="" class="footer-logo">
                            <img src="@/assets/icon-cc4.svg" alt="" class="footer-logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="cookies" v-if="!isCookies" @click="isCookies = true">
        <div class="_wrapper">
            <div class="_text">We use cookies to give you the best online experience. By clicking 'Accept', you agree to use of cookies.</div>
            <div class="btn -green -sm">Accept</div>
        </div>
    </div>
</template>



<script>

export default {
    name: 'Footer',
    data() {
        return {
            isCookies: false
        }
    }
}
</script>