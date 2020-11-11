<template>
  <div id="main">
      <div class="top-bar">
          <div class="side">

          </div>
          <div class="side" style="margin-right: 7px">
              <div class="button green">

              </div>
              <div class="button yellow">
                  
              </div>
              <div class="button red">
                  
              </div>
          </div>
      </div>
      <div class="image">
          <router-view class="content"/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #main {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 50fr;
    }
    .top-bar {
        -webkit-app-region: drag;
        display: flex;
        width: 100%;
        background-color: #21252b;
        flex-direction: row;
    }
    .content { 
        -webkit-app-region: no-drag;
        height: 100%; 
        overflow-x: hidden; 
        overflow-y: auto; 
        text-align:justify; 
    } 
    .side {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .button {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 2px;
    }
    .red {
        background-color: #F04A62;
    }
    .yellow {
        background-color: #AA47BC;
    }
    .green {
        background-color: #5C6BC0;
    }
    .image {
        background-image: url('../assets/background.png');
    }
</style>