<template>
  <div v-if="content" class="container">
      <div class="cols">
        <div class="col h--full f-justify--center f-direction--column">
          <div class="intro">
            <h1>Your stories</h1>
            <p class="-lg">Eliciting, recording, transcribing, analysing and theorising research interviews in applied linguistics</p>
          </div>
        </div>
        <div class="col">
          <div class="img img--intro">
            <img class="" src="@/assets/head.jpg">
          </div>
          <div class="video--intro"></div>
        </div>
      </div>
  </div>
</template>

<script>
import { http } from '../utils/ajax'
export default {
  name: 'Home',
  data: () => ({
    content: null
  }),
  created() {
    http.get(`homepage`)
      .then(response => {
        this.content = response.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>