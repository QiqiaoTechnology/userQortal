<template id="com1">
  <div>
   <self-header
      :bg_color="header_color"
      :hd_position="header_position"
      :hover_flag="header_hover"
      :logo_img="companyForm.enterpriseLogoAttachmentUrl"
    />
    <router-view ref="childItem" @headFix="head_fix" />
    <self-footer :com="companyForm" :link-list="linkList" :menu-list="titleList" />
    <div class="backtop" @click="backTop" v-show="show_backtop">
      <i class="el-icon-arrow-up"></i>
    </div>
    <self-loading></self-loading>
  </div>
</template>
<script>


import {
  getBasicColumnList,
  getEnterpriseInfo
} from '../../http/home'
import selfHeader from "./components/Header";
import selfFooter from "./components/Footer";
import selfLoading from "./components/loading.vue";

export default {
    name: 'com1',
  components: {
    selfHeader,
    selfFooter,
    selfLoading,
  },
  data() {
    return {
      companyForm:{},
      linkList:[],
      titleList:[],
      bannerEdit: false,
      header_color: "", // header背景色
      header_position: "", // header定位
      header_hover: "", // header图标是否显示白光划过效果
      show_backtop: false, // 是否显示回到顶部按钮
    };
  },
  mounted() {
    this.getEnterpriseInfo()
    this.getBasicColumnList()
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
        getEnterpriseInfo() {
      getEnterpriseInfo().then(res => {
                  this.linkList = res.data
      
      })
    },
    getBasicColumnList() {
      getBasicColumnList().then(res => {
                this.companyForm = res.data
      })
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop === 0) this.header_color = "transparent";
      if (scrollTop > 100) this.header_color = "rgba(3,3,3,.8)";
      if (scrollTop > 200) this.show_backtop = true;
      if (scrollTop < 200) this.show_backtop = false;
    },
    backTop() {
      // 让回到顶部更加平滑
      let scrollTop;
      var time = setInterval(() => {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        window.scroll(0, scrollTop - 50);
        if (scrollTop === 0) clearInterval(time);
      }, 50);
    },
    head_fix(val) {
      this.header_position = val[0];
      this.header_hover = val[1];
    },
    cancelForm() {
      this.dialog = false;
      this.dialogArticle = false;
    },
  },
};
</script>
<style src='./style/bootstrap.min.css'></style>
<style src='./style/animate.min.css'></style>
<style src='./style/default.css'></style>
<style src='./style/style1.css'></style>
<style src='./style/responsive.css'></style>
<style lang="scss">
span {
  outline-color: #fff;
}
.el-drawer__body {
  overflow: auto;
}
.editbtn {
  width: 60px;
  height: 60px;
  background-color: rgb(255, 135, 36);
  text-align: center;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 50%;
  cursor: pointer;
  transition: transform 0.3s;
  animation: rotateIn 0.8s;
  &:hover {
    transform: scale(1.2);
  }
  i {
    color: #ffffff;
    font-size: 30px;
  }
}
ul {
  list-style: none;
}
.backtop {
  width: 60px;
  height: 25px;
  background-color: rgb(255, 135, 36);
  text-align: center;
  position: fixed;
  z-index: 999;
  right: 5%;
  bottom: 0;
  cursor: pointer;
  transition: transform 0.3s;
  animation: rotateIn 0.8s;
  &:hover {
    transform: scale(1.2);
  }
  i {
    color: #ffffff;
    font-size: 30px;
  }
}
.demo-drawer__footer {
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  .el-button {
    width: 30%;
  }
}
.el-card__body {
  padding: 0px 10px;
}
.el-form--inline .el-form-item {
  display: block;
  margin-right: 10px;
  margin-bottom: 5px;
}

.el-row {
  width: 100%;
}
</style>
