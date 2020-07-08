Day 6

Open command prompt / terminal (if on mac) and navigate to the bvue folder
Type in the following command and hit enter
npm install bootstrap-vue bootstrap axios

Next let’s set up the BootstrapVue package & css - Modify main.js
Add the following lines -
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


Create a new file under components folder called MyTable.vue
https://bootstrap-vue.org/docs/components/table
Copy the code from the first example: Basic usage and paste it into MyTable.vue

Modify App.vue
comment out the following lines - we don't want the hello world message
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
//import HelloWorld from './components/HelloWorld.vue'

include the new file - add the following line below "import HelloWorld" line
import MyTable from './components/MyTable.vue'

Modify components as - comment out helloworld references
  components: {
    //HelloWorld
    MyTable
  }



npm run serve

launch the following link
http://localhost:8080/

You should see the table.

See if you can get rid of the Vue icon on top
