<template>
  <div id="deal">
  <header class="mui-bar mui-bar-nav">
        <router-link to='/' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">交易</h1>
    </header>
        <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">交易</span>
        </a>
        <router-link to='/Delivery detail' class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">交收</span>
        </router-link>
        <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">资讯</span>
        </a>
        <router-link to='/My' class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
     <div class="container">
        <div class="page">
            <div class="weui-flex tab-item">
                <div class="weui-flex__item"><div class="placeholder"></div></div>
                <div class="tab-item-list triangle-top">农产品</div>
                <div class="tab-item-list">贵金属</div>
                <div class="tab-item-list">现货</div>
                <div class="weui-flex__item"><div class="placeholder"></div></div>
            </div>
            </div>
            <div class="page__bd">
            <div class="weui-cells padding-top-zero weui-cells-border-none">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>竹笋</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>东北大米</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>白菜</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>竹笋</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>东北大米</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>白菜</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>竹笋</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>东北大米</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>白菜</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
            </div>
        </div>
            </div>
   </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
