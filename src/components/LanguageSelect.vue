<template>

      <aside id="language-box">
            <form>
              <label>Language:</label>
              <select 
                name="language" 
                v-model="languageselectitems"
                                
                >

                <option
                  v-for ="languageselectitem in languageselectitems"
                  :value="languageselectitem.value"
                  :key="languageselectitem.id"                  
                >
                  

                </option>
                
              </select>
            </form>
          </aside>

</template>

<script>
export default {

  name: "LanguageSelect",
  props:["languageselectitems"],

    

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
