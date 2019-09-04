<template>

      <aside id="language-box">
            <form>
              <label>Language:</label>
              <select name="language">
                <option :value="languageselect.country" v-for="languageselect in languageselect" v-bind:key="languageselect.id">{{languageselect.country}}</option>
                
              </select>
            </form>
          </aside>
    
</template>

<script>
export default {
    
  name: "LanguageSelect",
  props:["languageselect"]
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >
</style>