<template>
  <div id="main">
      <div class="top-bar">
          <div class="side">
              Roulette.io
          </div>
          <div class="side" style="margin-right: 7px">
              <div class="button green" @click="minimizeApp" />
              <div class="button yellow" />
              <div class="button red" @click="closeApp" />
          </div>
      </div>
      <div class="image">
          <div class="content">
              <router-view />
          </div>
      </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  data: () => {
    return {
      close: false
    }
  },
  methods: {
    isCloseFocus: function () {
        this.close = !this.close
    },
    closeApp: function () {
        ipcRenderer.send('close-me')
    },
    minimizeApp: function () {
        ipcRenderer.send('minimize-me')
    }
  }

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
        width: auto;
        background-color: #21252b;
        flex-direction: row;
        border-radius: 10px 10px 0 0;
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
        -webkit-app-region: no-drag;
        display: flex;
        width: 16px;
        height: 16px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 2px;
        background-size: 10px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .button:hover {
        cursor:pointer;
    }
    .red {
        background-color: #F04A62;
    }
    .red:hover {
        background-image: url('../assets/close.png');
    }
    .yellow {
        background-color: #AA47BC;
    }
    .green {
        background-color: #5C6BC0;
    }
    .green:hover {
        background-image: url('../assets/minimize.png');
    }
    .image {
        background-image: url('../assets/background.png');
        border-radius: 0 0 10px 10px;
    }
    .icon {
        height: 10px;
        width: 10px;
    }
</style>