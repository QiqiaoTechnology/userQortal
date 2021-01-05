<template>
  <div>
    <self-header
      :bg-color="header_color"
      :hd-position="header_position"
      :hover-flag="header_hover"
      :logo-img="companyForm.enterpriseLogoAttachmentUrl"
    />
    <router-view ref="childItem" @headFix="head_fix" />
    <self-footer :com="companyForm" :link-list="linkList" :menu-list="titleList" />
    <div v-show="show_backtop" class="backtop" @click="backTop">
      <i class="el-icon-arrow-up" />
    </div>
  </div>
</template>
<script>

import selfHeader from './components/Header'
import selfFooter from './components/Footer'
import {
    getBasicColumnList,
  getEnterpriseInfo
} from '../../http/home.js'

import Pagination from './components/Pagination'

export default {
  components: {
    selfHeader,
    selfFooter,
    Pagination
  },
  data() {
    return {
      total: 0,
      atotal: 0,
      mtotal: 0,
      dialogMaterial: false,
      editWebsiteElementId: '',
      editArticleId: '',
      oldMaterialId: '',
      titleList: [],
      srcList: [],
      initSrcList: [],
      innerDrawer: false,
      bannerList: [],
      MaterialList: [],
      articleList: [],
      itemForm: {},
      articleForm: {},
      dialog: false,
      dialogArticle: false,
      loading: false,
      companyForm: {},
      linkList: [],
      queryParam: {
        page: 1,
        size: 1
      },
      MqueryParam: {
        page: 1,
        size: 6,
        title: null,
        attachmentType: 2
      },
      aQueryParam: {
        page: 1,
        size: 5,
        articleTitle: null,
        articleType: 2
      },
      bannerEdit: false,
      header_color: '', // header背景色
      header_position: '', // header定位
      header_hover: '', // header图标是否显示白光划过效果
      show_backtop: false // 是否显示回到顶部按钮
    }
  },
  mounted() {
    this.getEnterpriseInfo()
    this.getBasicColumnList()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    
    getEnterpriseInfo() {
      getEnterpriseInfo().then(res => {
        debugger
        this.linkList = res.data
      })
    },
    getBasicColumnList() {
      const data = {
        page: 1,
        size: 10
      }
      getBasicColumnList(data).then(res => {
        debugger  
        this.companyForm = res.data
      
      })
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop === 0) this.header_color = 'transparent'
      if (scrollTop > 100) this.header_color = 'rgba(3,3,3,.8)'
      if (scrollTop > 200) this.show_backtop = true
      if (scrollTop < 200) this.show_backtop = false
    },
    backTop() {
      // 让回到顶部更加平滑
      let scrollTop
      var time = setInterval(() => {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        window.scroll(0, scrollTop - 50)
        if (scrollTop === 0) clearInterval(time)
      }, 50)
    },
    head_fix(val) {
      this.header_position = val[0]
      this.header_hover = val[1]
    },
    cancelForm() {
      this.dialog = false
      this.dialogArticle = false
      this.innerDrawer = false
      this.$refs['childItem'].getTree()
    }
  }
}
</script>
<style src='./style/animate.css'></style>
<style src='./style/icomoon.css'></style>
<style src='./style/bootstrap.css'></style>
<style src='./style/magnific-popup.css'></style>
<style src='./style/style3.css'></style>
<style lang="scss">
.selectInput{
      width: 400px;
    position: absolute;
    top: 15px;
    left: 120px;
     .el-input__inner {
    height: 30px;
    line-height: 30px;
}
}
span {
  outline-color: #fff;
}
.el-drawer__body {
  overflow: auto;
  padding-bottom: 45px;
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
  height: 45px;
  background-color:#50CB86;
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
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #fff;

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
figure {
    margin: 0px;
}
.artBtn{
  position:absolute;
  top: 10px;
  left: 100px;
}
</style>
