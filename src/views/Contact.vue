 <template>
  <div class="mt-6">
    <h1 class="text-2xl font-bold font-serif">Contact</h1>
    <p>You want to contact me ? Fill the form below or use my social account !</p>
    <form @submit.prevent="submitContact">
      <label class="label-text ml-2 " for="name-input">Name :</label>
      <input type="text" placeholder="John Doe" v-model="name" required id="name-input"
               class="w-full border-accent rounded-sm bg-secondary text-accent placeholder-accent ring-2 max-w-sm m-auto block p-2 mb-3 ">

      <label class="label-text ml-2 " for="email-input">Email :</label>
      <input type="email" placeholder="johndoe@mail.com" v-model="mail" required id="email-input"
             class="w-full border-accent rounded-sm bg-secondary text-accent placeholder-accent ring-2 max-w-sm m-auto block p-2 mb-3">

      <label class="label-text ml-2 " for="subject-input">Subject :</label>
      <input type="text" placeholder="The subject you want to talk about" v-model="subject" required id="subject-input"
             class="w-full border-accent rounded-sm bg-secondary text-accent placeholder-accent ring-2 max-w-sm m-auto block p-2 mb-3">

      <label class="label-text ml-2 " for="message-input">Message :</label>
      <textarea placeholder="Write your message..." cols="30" rows="7" v-model="message" id="message-input"
                class="w-full border-accent rounded-sm bg-secondary text-accent placeholder-accent ring-2 max-w-sm m-auto block p-2 mb-3 "></textarea>
      <button type="submit" class="block rounded-full bg-secondary border-accent w-4/12 pt-2 pb-2 text-center m-auto mt-5">
        Submit
      </button>
    </form>
    <div class="absolute bottom-0 left-0 w-screen flex justify-center">
      <div v-if="alertMsg!== '' "
           class="text-white px-6 py-4 border-0 rounded mb-4 bg-accent min-w-10 font-primary relative pr-12">
        <p>{{ alertMsg }}</p>
        <button @click="alertMsg = '' "
                class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none min-w-80 focus:outline-none">
          <span>×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>


import params from "@/param/params.js";
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      mail: "",
      subject: "",
      message: "",
      alertMsg: ""
    }
  },
  methods: {
    submitContact() {
      let params = new FormData();
      params.append("email", this.mail);
      params.append("name", this.name);
      params.append("subject", this.subject);
      params.append("message", this.message);

      axios.post("https://portfolio.timotheedurand.fr/contact.php", params).then(res => console.log(res.data)).catch(err => {
        console.error(err);
      })


    },
    showAlert() {
      this.alertMsg = params.messages.mailSend;

      setTimeout(function () {
        this.alertMsg = ""
      }.bind(this), params.timeAlert)
    }
  },
}
</script>

<style scoped>
  .label-text {
    font-size: 12px;

  }
</style>
