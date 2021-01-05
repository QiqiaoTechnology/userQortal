<template id="com2">
  <div>
    <router-view ref="childItem" />
  </div>
</template>
<script>

export default {
  name: 'com2',
  data() {
    return {
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
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
    }
   }
}
</script>
<style src='./css/bootstrap.min.css' scoped></style>
<style src='./css/owl.carousel.css' scoped></style>
<style src='./css/owl.theme.default.css' scoped></style>
<style src='./css/font-awesome.min.css' scoped></style>
<style src='./css/magnific-popup.css' scoped></style>
<style src='./css/style2.css' scoped></style>
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
