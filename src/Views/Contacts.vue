<template>
    <div class="container">
        <div class="cols">
          <div class="col h--full f-justify--center f-direction--column">
            <div class="intro">
              <h1>Contact us</h1>
              <!-- <p>You can contact us by sending an email:</p> -->
              <form @submit="sendEmail()" class="contact">
                <input type="text" placeholder="Your name" required v-model="answers.one.value">
                <input type="email" placeholder="Your email" required v-model="answers.two.value">
                <textarea placeholder="Message" required v-model="answers.three.value"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div class="col f-direction--column f-justify--center">
            <div class="img img--intro">
              <img class="" src="@/assets/head-home.png">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { general } from '../mixins/general'
export default {
  name: 'Contacts',
  mixins: [general],
  data() {
    return {
      mailTo: "R.Wicaksono@yorksj.ac.uk",
      subject: "Contact Us | Website",
      answers: {
        one: {
          title: 'Your name',
          value: ''
        },
        two: {
          title: 'Your email',
          value: ''
        },
        three: {
          title: 'Message',
          value: ''
        }
      }
    }
  }
}
</script>