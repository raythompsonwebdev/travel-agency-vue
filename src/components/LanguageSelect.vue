<template>

      <aside id="language-box">
            <form>
              <label for="language">Language: </label>
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
      languageselectitems : languageselectitems
      
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

          console.log("Jamaica")

        }
                      
         
          
                     

           return languageselectitems
          
      }
  }
  
  
   
  
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
