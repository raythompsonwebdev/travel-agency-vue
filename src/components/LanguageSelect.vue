<template>

      <aside id="language-box">
            <form>
              <label for="language">Language:<img id="flagImg" :src="'assets/images/flags/Jamaica.jpg'" :alt="'banner-image'"/></label>
              <select 
                name="language" 
                v-model="languageselectitems"
                v-on:click="itemsSearched($event.target.value)"
                                
                >
                <option
                  v-for ="languageselectitem in onChange"
                  :value="languageselectitem.value"
                  :key="languageselectitem.id"               
                      
                >
                  {{languageselectitem.text}}
                  
                </option>
                
              </select>
            </form>
          </aside>

</template>

<script>

import languageselectitems from "./data/languageselectitems.js";

export default {

  name: "LanguageSelect",  

  data: () => {

    return {
      selected: ' ',
      image:' ',
      languageselectitems:languageselectitems    
      
      
      
    };
  },

  methods:{
    itemsSearched: function (id) {

      this.selected = id  

    }
  },
  computed: {
      onChange:function (){ 
        
        if(this.selected == "Jamaica" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/Jamaica.jpg')      

          console.log("Jamaica")

        }else if(this.selected == "United_Kingdom" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/United_Kingdom.jpg')      

          console.log("United_Kingdom")

        }else if(this.selected == "United_States" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/USA.gif')      

          console.log("United_States")

        }else if(this.selected == "France" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/France.jpg')      

          console.log("France")

        }else if(this.selected == "Spain" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/Spain.jpg')      

          console.log("Spain")

        }else if(this.selected == "Germany" ){

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/Germany.jpg')      

          console.log("Germany")

        }else{

          document.querySelector('#flagImg').setAttribute('src', './assets/images/flags/Jamaica.jpg')

        }                           

        return languageselectitems
          
      }
  }
  
  
   
  
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
