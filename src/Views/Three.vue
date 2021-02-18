<template>
  <div class="container">
      
      <div class="cols">
        <div class="col h--full f-justify--center f-direction--column">
          <div class="intro">
            <h1 class="-md">
              <span class="subtitle">Part 3</span>
              Interview Two
            </h1>
            <p class="-lg">In this part, you will go back to your interviewee, and, having reflected on your first interview and on our recommendations for interviewers, record and transcribe a second interview.</p>
          </div>
          <div class="icon__scroll">
            <img src="@/assets/arrow-down.svg" alt="">
          </div>
        </div>
        <div class="col f-direction--column f-justify--center m-hidden">
          <div class="img img--intro">
            <img class="" src="@/assets/head.png">
          </div>
        </div>
      </div>

      <section>
        <div class="cols">
          
          <div class="col-1 -m-bottom">
            <div class="video">
                <div class="video__wrapper" @click="showVideo($event)">
                  <img src="@/assets/rachel.png" alt="">
                  <i></i>
                </div>
                <div class="video__popup">
                  <div class="video__popup__wrapper" @click="closeVideo($event)"></div>
                  <div class="video__popup__frame">
                    <iframe data-src="https://www.youtube.com/embed/Lr3AGLVpv0Y?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="video__popup__close" @click="closeVideo($event)"></div>
                </div>
            </div>            
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>Here is a recap of the instructions for your first interview:</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div class="cols">
          <div class="col">
            <h1 class="-center">
              <span class="subtitle">Task</span>
              Interview
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div class="cols">
          
          <div class="col-1">
            <div>
              <h2 class="article-title">
                Preparation
              </h2>
            </div>
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>Things you can prepare in advance:</p>
              <ul class="tasks">
                <li>Contact the person you interview to arrange a suitable time for a second interview.</li>
                <li>For this second interview, you will ask your interviewee about their post-lockdown (return-to-work/-university/-public transport/-high street shopping) experiences. You should write down three or four questions on this topic in advance of the interview.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>


      <section>
        <div class="cols">
          
          <div class="col-1">
            <div>
            <h2 class="article-title">
              Before
            </h2>
            </div>
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>On the day of the interview:</p>
              <ul class="tasks">
                <li>The interview should last approximately 15-20 minutes. However, it is important to give yourself and your participant extra time to get comfortable and make sure your recording equipment is set up.</li>
                <li>Arrange for you and your interviewee to be in a quiet and comfortable place for the duration of the interview to minimise any interruptions.</li>
                <li>Turn off or mute your mobile phone and ask your interviewee to do the same.</li>
                <li>If you are using your computer to interview and record, close all extra programs — particularly any Internet browser windows or streaming media. You don’t want any unnecessary and distracting notifications.</li>
                <li>Consider doing a double recording of the audio on your phone, you can download free Voice Recorder apps on IOS or Android.</li>
                <li>If you can, use a hard-wired Internet connection (rather than a wifi connection), as it limits any degradation of the signal.</li>
                <li>If you aren't able to use a hard-wired connection, you should sit as close to the wifi router as possible.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>



      <section>
        <div class="cols">
          
          <div class="col-1">
            <div>
            <h2 class="article-title">
              During
            </h2>
            </div>
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <ul class="tasks">
                <li>Have a glass of water handy, in case you need a drink. </li>
                <li>Introduce the topic of the interview. </li>
                <li>Re-affirm the purpose of the interview. </li>
                <li>Reassure the interviewee about the confidentiality and remind them that it is not a test, so there are no right or wrong answers to questions! </li>
                <li>Let the interviewee know that you are audio recording the conversation.</li>
                <li>When you have finished the interview, save it onto the York St John OneDrive, so that you can access it on any device and be sure that the data is stored securely. You can then delete the interview file from all other devices.</li>
                <li>Overall, have fun!</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div class="cols">
          
          <div class="col-1">
            <div>
            <h2 class="article-title">
              After
            </h2>
            </div>
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <ul class="tasks">
                <li>Listen to your first two questions and your interviewee’s answers. Write down what you hear. If your recording has sub-titles, you can use these as a basis for your written version of your question-answer sequences. Or you can simply listen (several times) and type.</li>
              </ul>
              <p>This time, have a go at including some of these symbols in to your own transcription.</p>
              <Dictionary/>
            </article>
          </div>
        </div>
      </section>

      <div class="block -bg">

        <section>
          <div class="cols">
            <div class="col">
              <h1 class="-center">
                <span class="subtitle">Task</span>
                Reflect
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div class="cols">
            <div class="col">
              <div>
                <p>Think about the differences between your first and second interviews. Reflect on your experience of interviewing and transcribing by asking yourself the following questions:</p>
                <ul class="reflects">
                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What went well?</span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.one.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>


                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What contribution did you make to the interview?</span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.two.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What contribution did the interviewee make to the interview?</span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.three.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>
                  
                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>How long did the transcription take?</span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.four.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What is the relationship between the transcription and the audio/video recording? </span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.five.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What you might do differently next time? </span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.six.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>How did the experience of your first interview inform your approach to the second interview? </span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.seven.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                </ul>

                <div class="submit-form">
                  <button class="btn" @click="sendEmail()">Email the answers</button>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>


      <section>
        <div class="cols">
          <div class="col">
            <div>
              <h2 class="-center">What next</h2>
              <Tabs/>
            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import Dictionary from '../Components/Dictionary.vue'
import Tabs from '../Components/Tabs'
import { general } from '../mixins/general'
export default {
  components: { Dictionary, Tabs },
  name: 'Three',
  mixins: [general],
  data: () => ({
    subject: "Interview | Part 3",
    answers: {
      one: {
        title: 'What went well?',
        value: ''
      },
      two: {
        title: 'What contribution did you make to the interview?  ',
        value: ''
      },
      three: {
        title: 'What contribution did the interviewee make to the interview? ',
        value: ''
      },
      four: {
        title: 'How long did the transcription take? ',
        value: ''
      },
      five: {
        title: 'What is the relationship between the transcription and the audio/video recording?',
        value: ''
      },
      six: {
        title: 'What you might do differently next time?',
        value: ''
      },
      seven: {
        title: 'How did the experience of your first interview inform your approach to the second interview? ',
        value: ''
      }
    }
  })
}
</script>