<template>
  <div v-if="content" class="container">
      
      <div class="cols">
        <div class="col h--full f-justify--center f-direction--column">
          <div class="intro">
            <h1 class="-md">
              <span class="subtitle">Part 1</span>
              Interview one and Reflect
            </h1>
            <p class="-lg">In part one we begin with some practical instructions for your first interview; including how to prepare, who to interview, and how to evidence that your interviewee understands and agrees to the role of research participant.</p>
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
            <div class="video">
                <div class="video__wrapper" @click="showVideo($event)">
                  <img src="@/assets/rachel.png" alt="">
                  <i></i>
                </div>
                <div class="video__popup">
                  <div class="video__popup__wrapper" @click="closeVideo($event)"></div>
                  <div class="video__popup__frame">
                    <iframe data-src="https://www.youtube.com/embed/kbfqlAipLEQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="video__popup__close" @click="closeVideo($event)"></div>
                </div>

            </div>            
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>We suggest a topic for your interviews and an interview ‘style’. We also offer some options for recording the interview and beginning to convert the data you elicit from your interviewee into information for a research project. Finally, we ask you to write a short paragraph on what went well in your first interview and what you might do differently next time.</p>
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
              <h3>Things to prepare before interview</h3>
              <ul class="tasks">
                <li>The interview should last approximately 15-20 minutes. However, it is importable to give yourself and your participant extra time to get comfortable and make sure your recording equipment is set up.  </li>
                <li>Arrange for you and your interviewee to be in a quiet and comfortable place for the time of the interview to minimise any interruptions.  </li>
                <li>Turn off or mute your mobile phone and ask your interviewee to do the same. </li>
                <li> If you are using your computer to interview and record, close all extra programs — particularly any Internet browser windows or streaming media. You don’t want any unnecessary and distracting notifications. </li>
                <li>Consider doing a double recording of the audio on your phone, you can download free Voice Recorder apps on IOS or Android. </li>
                <li> If you can, use a hard-wired Internet connection (rather than a wifi connection), as it limits any degradation of the signal. </li>
                <li>If you aren't able to use a hard-wired connection, you can sit as close to the wifi router as possible.</li>
                <li>When you have finished the interview, save it onto the York St John OneDrive, so that you can access it on any device and be sure that the data is stored securely. You can then delete the interview file from all other device</li>
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
              <ul class="tasks">
                <li>The interview should last approximately 15-20 minutes. However, it is importable to give yourself and your participant extra time to get comfortable and make sure your recording equipment is set up.   </li>
                <li>Arrange for you and your interviewee to be in a quiet and comfortable place for the time of the interview to minimise any interruptions. </li>
                <li>Turn off or mute your mobile phone and ask your interviewee to do the same. </li>
                <li> If you are using your computer to interview and record, close all extra programs — particularly any Internet browser windows or streaming media. You don’t want any unnecessary and distracting notifications. </li>
                <li>Consider doing a double recording of the audio on your phone, you can download free Voice Recorder apps on IOS or Android. </li>
                <li>If you can, use a hard-wired Internet connection (rather than a wifi connection), as it limits any degradation of the signal.</li>
                <li> If you aren't able to use a hard-wired connection, you can sit as close to the wifi router as possible. </li>
                <li>When you have finished the interview, save it onto the York St John OneDrive, so that you can access it on any device and be sure that the data is stored securely. You can then delete the interview file from all other devices.</li>
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
                <li>Introduce yourself and the topic of the interview.</li>
                <li> Re-affirm the purpose of the interview.  </li>
                <li>Reassure the interviewee about the confidentiality and remind them that it is not a test so there are no right or wrong answers to questions! </li>
                <li>Let the interviewee know that you are audio recording the conversation. </li>
                <li>When you have finished the interview, save it onto the York St John OneDrive, so that you can access it on any device and be sure that the data is stored securely. You can then delete the interview file from all other devices.</li>
                <li>Overall, have fun! </li>
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
                <li> In order to begin to convert your data into information for a research project, you will need to write down the words you used to ask your questions and the words your interviewee used to answer them – this is called ‘transcribing’.   </li>
                <li> If you used subtitles on Skype during your interview, you can use them to help you turn the subtitles into transcription. </li>
                <li>Listen to your first two questions and your interviewee’s answers. Write down what you hear. If your recording has sub-titles, you can use these as a basis for your written version of your question-answer sequences. Or you can simply listen (several times) and type.  </li>
               </ul>
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
                <p>Reflect on your experience of interviewing and transcribing by asking yourself the following questions</p>
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



                </ul>

                <div class="submit-form">
                  <h3>Submit answers</h3>
                  <div class="participant">
                      <input type="text" v-model="name" placeholder="Your name">
                      <input type="email" v-model="email" placeholder="Your contact email">
                  </div>
                  <button class="btn" @click="sendEmail()">Send answer</button>
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
              <h2 class="-center">Documents</h2>
              <ul class="downloads">

                <li class="download">
                  <div class="_img">
                    <img src="@/assets/icon-pdf.png" alt="">
                  </div>
                  <div class="_content">
                    <div class="_title">RESEARCH CONSENT FORM A</div>
                    <div class="_icon">
                      <img src="@/assets/download.svg" alt="">
                    </div>
                  </div>
                </li>


                <li class="download">
                  <div class="_img">
                    <img src="@/assets/icon-pdf.png" alt="">
                  </div>
                  <div class="_content">
                    <div class="_title">RESEARCH CONSENT FORM B</div>
                    <div class="_icon">
                      <img src="@/assets/download.svg" alt="">
                    </div>
                  </div>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="cols">
          <div class="col">
            <div>
              <h2 class="-center">What next</h2>
              <ul class="tabs">

                <li class="tab">
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
                </li>

                <li class="tab">
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
                </li>
                
                <li class="tab">
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
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import { http } from '../utils/ajax'
export default {
  name: 'Home',
  data: () => ({
    content: 'one',
    email: '',
    name: '',
    answers: {
      one: {
        title: 'What went well?',
        value: ''
      },
      two: {
        title: 'What contribution did you make to the interview? ',
        value: ''
      },
      three: {
        title: 'What contribution did the interviewee make to the interview?',
        value: ''
      },
      four: {
        title: 'How long did the transcription take?',
        value: ''
      },
      five: {
        title: 'What is the relationship between the transcription and the audio/video recording?',
        value: ''
      },
      six: {
        title: 'What you might do differently next time?',
        value: ''
      }
    }
  }),
  created() {
    http.get(`homepage`)
      .then(response => {
        this.content = response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    expand(event) {
        const target = event.currentTarget
        const parent = target.parentNode
        const isOpen = parent.classList.contains('is-active')
        parent.classList[isOpen ? 'remove' : 'add']('is-active')

        if (!isOpen) {
          parent.querySelector('textarea').focus()
        }
    },
    showVideo(event) {
      console.log('event')
        const target = event.currentTarget
        const popup = target.parentNode.querySelector('.video__popup')
        const iframe = popup.querySelector('iframe')
        iframe.src = iframe.dataset.src
       popup.classList.add('is-active')
    },
    closeVideo(event) {
        const target = event.currentTarget
        const parent = target.parentNode
        const iframe = parent.querySelector('iframe')
        iframe.src = ''
        parent.classList.remove('is-active')
    },
    checkEmpty(event) {
      const target = event.currentTarget
      const parent = target.parentNode.parentNode
      console.log(target.value)
      if (target.value === '') {
        parent.classList.add('is-empty')
        parent.classList.remove('is-not-empty')
      } else {
        parent.classList.remove('is-empty')
        parent.classList.add('is-not-empty')
      }
    },
    sendEmail(){
        const subject = 'Part one'
        const mailtoBody = `
Name: ${ this.name === '' ? 'N/A' : this.name }%0A 
Contact email: ${ this.email === '' ? 'N/A' : this.email }%0A 
%0A
%0A
${Object.keys(this.answers).map(key => `
${this.answers[key].title}%0A
${this.answers[key].value}%0A
%0A
`).join('')
}
`

       window.location.href = `mailto:you@example.com?subject=${subject}&body=${mailtoBody}`
    }
  }
}
</script>