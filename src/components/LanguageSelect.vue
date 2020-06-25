<template>

      <aside id="language-box">
            <form>
              <label for="language">Language:
                  <img 
                    id= "flagImg"                                       
                                        
                  />
                </label>
              <select 
                name="language" 
                v-model="languages"
                v-on:click="itemsSearched($event.target.value)"
                                
                >
                <option
                  v-for ="language in languages"
                  :value="language.value"
                  :key="language.id"               
                      
                >
                  {{language.text}}
                  
                </option>
                
              </select>
            </form>
          </aside>

</template>

<script>


export default {

  name: "LanguageSelect",
  props: ["languages"],
    

  data: () => {

    return {
      selected: ' ',
      
    };
  },

  methods:{
    itemsSearched: function (id) {
      this.selected = id                    
    }
  },
  computed: {

      onChange:function (){                 
                
        if(!this.selected ){
                                                  
          console.log("select")                     

        }else if(this.selected == "Jamaica" ){
                                                  
          console.log("Jamaica")                     

        }else if(this.selected == "United_Kingdom" ){
          
          console.log("United_Kingdom")         
                     

        }else if(this.selected == "United_States" ){

           console.log("United_States")                

        }else if(this.selected == "France" ){
 
          console.log("France")
       

        }else if(this.selected == "Spain" ){

          console.log("Spain")
          

        }else if(this.selected == "Germany" ){

          console.log("Germany")           

        }else{
          console.log("Nothing")
        }                           

        return this.languages
          
      }

  }
  
  
   
  
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
