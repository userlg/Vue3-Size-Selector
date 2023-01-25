import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.mount('#app')

//------Welcome Messae
console.log("Welcome to the size selector App");


app.config.errorHandler = (err, instance, info) => {
    console.log(err);
  }



