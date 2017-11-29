<template>
  <div class="ui container">
    <div class="ui grid stackable centered">
      <div class="thirteen wide column center aligned">
        <div class="ui header inverted">
          <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
          <h1>Wellcome, Name</h1>
        </div>
        <div class="row room">
          <div class="ui grid stackable centered">
            <div class="seven wide column center aligned">
              <p>Would you like to do..?</p>
              <div class="ui teal button fluid">
                Create Room
              </div>
              <div class="ui divider"></div>
              <div class="ui teal button fluid">
                Join Room
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    height: 0 !important;
  }

  .ui.button.fluid {
    border-radius: 2px !important;
  }

  .ui.container {
    margin-top: 10em;
  }

  .row.room {
    margin-top: 50px;
  }

  .ui.header img {
    width: 4em !important;
  }
</style>
