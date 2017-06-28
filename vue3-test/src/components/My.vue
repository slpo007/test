
<template>
  <div id="my">
   <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item " href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">交易</span>
        </a>
        <router-link to='/Delivery detail' class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">交收</span>
        </router-link>
        <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">资讯</span>
        </a>
        <a class="mui-tab-item mui-active" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>
    <div class="container">
        <div class="page">
            <div class="my-header my-header-img" >
                <div class="pic">
                </div>
                <div class="am-color-mian am-ft-sm am-mt-5 am-ft-center">登录/注册</div>
            </div>
            <div class="page__bd">
            <div class="weui-cells padding-top-zero">

                <a class="weui-cell weui-cell_access" href="我的-资产管理-充值.html">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/my-icon_07.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <p>资产管理</p>
                    </div>
                </a>
                <!--<a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/my-icon_17.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <p>交易历史</p>
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/my-icon_27.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <p>收支明细</p>
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/my-icon_37.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <p>交易明细</p>
                    </div>
                </a>-->

                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/my-icon_37.png" class="icon-list" width="20px" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <p>资金流水</p>
                    </div>
                </a>
            </div>
        </div>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
