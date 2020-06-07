<template>

      <aside id="language-box">
            <form>
              <label>Language:</label>
              <select name="language" >

                <option
                  v-for ="languageselectitem in languageselectitems"
                  :value="languageselectitem.country"
                  :key="languageselectitem.id"
                >
                  {{languageselectitem.country}}

                </option>

              </select>
            </form>
          </aside>

</template>

<script>
export default {

  name: "LanguageSelect",
  props:["languageselectitems"]

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" >


</style>
