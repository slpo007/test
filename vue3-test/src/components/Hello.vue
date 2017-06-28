<template>
  <div class="hello">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h3 class="mui-title">登录</h3>
    </header>
    <div  class="img-pic"><img src="../assets/images/login-banner_02.png" alt=""></div>
       <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/login-icon_06.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="手机号">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/login-icon_14.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" pattern="[0-9]*" placeholder="密码">
                    </div>
                </div>
            </div>
      <label for="weuiAgree">
                <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
                <span class="weui-agree__text">记住密码</a>
            </span>
            </label>
            <div class="login" >
               <router-link to="/deal" class="weui-btn weui-btn_primary weui-btn_disabled">登录</router-link>           
               </div>
            <div class="am-mt-20 am-ft-center am-ft-orange am-ft-sm">
                <p><b>注册</b></p>
                <p class="am-mt-10">忘记密码？</p>
            </div>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
