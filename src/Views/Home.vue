<template>
  <div v-if="content" class="container">
      
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
            <img class="" src="@/assets/head.png">
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
              <p>These materials ask you to consider how and why you might use interviews to collect data for your dissertation, and on the possible consequences of your choices for you, your interviewees and your research.</p>

              <p>We begin with an outline of the contents of the materials, followed by some detailed guidelines for each of the four parts of the session. Finally, we offer the opportunity for you to feedback on these materials and make recommendations for how they can be further developed.</p>

              <p>In working your way through these materials, we hope that you will reflect on why and how interviews can generate and/or answer research questions about how ‘real world’ problems that (are believed to) involve language may be solved. If you wish, you may contribute your interview transcripts and (anonymised) reflections to an ongoing research project that we (Dasha and Rachel) are conducting. More details about our project, and how to participate, are provided in the detailed guidelines to part one of these materials.</p>

              <p>The text in boxes that you will see in subsequent parts of these materials is taken directly from the book on which the information here is based (Wicaksono and Zhurauskaya, 2020). Please accept our apologies if there are cross references in this text which don’t make sense when taken out of context, we hope that it won’t be too distracting! We have added page numbers to the text boxes, so that you can quote our work if you want to, without having to get hold of our actual book. </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section--lg">
        <div class="cols">
          <div class="col">
            <div class="video">
                <div class="video__wrapper" @click="showVideo($event)">
                  <img src="@/assets/rachel.png" alt="">
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
    content: 'one'
  })
}
</script>