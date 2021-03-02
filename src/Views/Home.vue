<template>
  <div v-if="loaded" class="container">
      
      <div class="cols">
        <div class="col h--full f-justify--center f-direction--column">
          <div class="intro">
            <h1 class="-lg">Your stories</h1>
            <p class="-lg">Eliciting, recording, transcribing, analysing and theorising research interviews in applied linguistics</p>
          </div>
          <div class="icon__scroll">
            <img src="@/assets/arrow-down.svg" alt="">
          </div>
        </div>
        <div class="col f-direction--column f-justify--center">
          <div class="img img--intro">
            <img class="" src="@/assets/head-home.png">
          </div>
        </div>
      </div>

      <section>
        <div class="cols">
          
          <div class="col-1">
            <div>
            <h2 class="article-title">
              <span>I</span>
              <span>n</span>
              <span>t</span>
              <span>r</span>
              <span>o</span>
            </h2>
            </div>
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>Welcome to our York’s Hidden Stories website!  </p>
              <p>We have written these materials for students and community project workers who are interested in using interviews in their studies and/or work. Perhaps you are curious to know more about the experiences of an individual or group of people, maybe you want to amplify their voices, or to reflect on your own relationship with them.  </p>
              <p>As you work your way through these materials, we will ask you to consider how and why you might use interviews to collect data for your dissertation, and on the possible consequences of your choices for you, your interviewees, and your research. </p>
              <p>We begin with an outline of the contents of the materials you will find here, followed by some detailed guidelines for each of the four parts of the site. Finally, we offer the opportunity for you to feedback on these materials and make recommendations for how they can be further developed. </p>
              <p>The text that is white on green, which you will see in subsequent parts of these materials, is taken directly from our book (Wicaksono and Zhurauskaya, 2020). Please accept our apologies if there are cross references in this text which don’t make sense when taken out of context, we hope that it won’t be too distracting! We have added page numbers, so that you can quote our work if you want to, without having to get hold of our actual book. </p>
              <p><i>Rachel and Dasha </i></p>
            </article>
          </div>
        </div>
      </section>

      <section class="section--lg">
        <div class="cols">
          <div class="col">
            <div class="video">
                <div class="video__wrapper" @click="showVideo($event)">
                  <img src="@/assets/dasha-rachel.png" alt="">
                  <i></i>
                </div>
                <div class="video__popup">
                  <div class="video__popup__wrapper" @click="closeVideo($event)"></div>
                  <div class="video__popup__frame">
                    <iframe data-src="https://www.youtube.com/embed/3vyu2SNw9v4?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="video__popup__close" @click="closeVideo($event)"></div>
                </div>
            </div> 
          </div>
        </div>
      </section>

      <section>
        <div class="cols">
          <div class="col">
            <div>
              <h2 class="-center">Outline</h2>
              <p class="-center">These materials are made up of four parts</p>

              <Tabs/>

            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import Tabs from '../Components/Tabs'
import { general } from '../mixins/general'
export default {
  name: 'Home',
  components: { Tabs },
  mixins: [general],
  data: () => ({
    loaded: false
  }),
  mounted() {
    this.loaded = true
  }
}
</script>