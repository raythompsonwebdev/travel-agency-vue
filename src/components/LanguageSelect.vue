<template>

      <aside id="language-box">
            <form>
              <label for="langs">Language:
                  
                </label>
              <select 
                name="langs" 
                v-model="this.langs"
                v-on:click="itemsSearched($event.target.value);"                                
                >
                <option
                  v-for ="lang in onChange"
                  :value="lang.value"
                  :key="lang.id"             
                      
                >
                  {{lang.text}}
                  
                </option>
                
              </select>
            </form>
          </aside>

</template>

<script>
import axios from 'axios';

export default {

  name: "LanguageSelect",     

  data: () => {

    return {
      selected: ' ',
      langs:[],
          
            
    };
  },
  
  mounted() {
    axios.get("./data-json/languageselect.json").then(response => (this.langs = response.data));
     
  },

  methods:{

    itemsSearched: function (id) {

      this.selected = id  

    }
     
    
  },

  computed: {

      onChange:function (){  

        if(this.selected == "Jamaica" || this.selected == "United_States" || this.selected == "United_Kingdom" || this.selected == "Spain" || this.selected == "France" || this.selected == "Germany" ){

          return console.log(this.selected + this.langs[3].value), this.langs         
          

        }else{
          
          return this.langs
        }   
          
      }

  } 
   

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
