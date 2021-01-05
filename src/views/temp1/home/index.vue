<template>
  <div>
    <section>
      <el-carousel trigger="click" height="500px" @change="loadAnimate">
        <el-carousel-item
          v-for="(item, index) in bannerInfo.bannerDetailList"
          :key="index"
        >
          <figure>
            <img :src="item.attachmentUrl" width="100%" />
            <figcaption>
              <h1
                :class="{ bounceInDown: slider_index == index }"
                style="color: #fe5a2c"
              >
                {{ item.title }}
              </h1>
              <br />
              <p :class="{ fadeInUp: slider_index == index }">
                {{ item.subtitle }}
              </p>
              <br />
            </figcaption>
          </figure>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section v-show="twoView.isDeleted===0" class="academic-area pt-80 pb-80">
      <div class="featured-courses-shape"></div>
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="24"
            ><div class="section-title text-center mb-40">
              <h2>
                <span>{{ twoView.title }}</span>
              </h2>
              <p>{{ twoView.subtitle }}</p>
            </div>
          </el-col>
        </el-row>
        <div class="academic-list">
          <el-row :gutter="20">
            <el-col
              :span="6"
              ontouchstart="this.classList.toggle('hover');"
              v-for="(item, index) in twoView.children"
              :key="index"
            >
              <div class="academic-container">
                <div
                  class="front"
                  :style="
                    'background-image: url(' + item.coverAttachmentUrl + ')'
                  "
                >
                  <div class="inner">
                    <p class="ov3">{{ item.articleTitle }}</p>
                    <!-- <span>{{item.articleTitle}}</span> -->
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p class="ov13">
                      {{ item.articleDescription }}
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="courses-shape">
        <img src="../img/courses/courses_shape01.png" alt="" />
      </div>
      <div class="courses-shape courses-shape-2">
        <img src="../img/courses/courses_shape02.png" alt="" />
      </div>
    </section>
    <section
     v-show="oneView.isDeleted===0"
      class="cta-area cta-bg"
      :style="'background-image: url(' + oneViewDs.coverAttachmentUrl + ')'"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title white-title text-center mb-15 web-font">
              <h2 class="web-font mb-20">
                <span>{{ oneViewDs.articleTitle }}</span>
              </h2>
              <p>
                {{ oneViewDs.articleDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- cta-area-end -->

    <!-- top-courses -->
    <section  v-show="threeView.isDeleted===0" class="top-courses pt-110 pb-70">
      <div class="courses-overlay-text">News</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-70">
              <h2>
                <span>{{ threeView.title }}</span>
              </h2>
              <p>{{ threeView.subtitle }}</p>
            </div>
          </div>
        </div>

        <el-row :gutter="20">
          <el-col
            :span="8"
            class="grid-item grid-sizer cat-three cat-four"
            v-for="(item, index1) in threeView.children"
            :key="index1"
          >
            <div class="top-courses-item top-courses-two mb-50">
              <div class="top-courses-thumb">
                <a target="_blank"
                  ><img :src="item.coverAttachmentUrl" alt=""
                /></a>
                <!-- <div class="bestseller">燕英资讯</div> -->
              </div>
              <div class="top-courses-content">
                <div class="top-courses-tag">
                  <span>{{ item.articleTitle }}</span>
                </div>
                <p>
                  {{ item.articleDescription }}
                </p>
                <div class="top-courses-bottom">
                  <ul>
                    <li class="courses-avatar">
                      <i class="far fa-user-circle"></i>{{ item.articleAuthor }}
                    </li>
                    <li class="courses-price">{{ item.createTime }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <!-- top-courses-end -->

    <!-- category-area -->
    <section  v-show="fourView.isDeleted===0" class="category-area category-bg pt-110 pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-70">
              <h2>
                <span>{{ fourView.title }}</span>
              </h2>
              <p>{{ fourView.subtitle }}</p>
            </div>
          </div>
        </div>
        <el-row :gutter="10">
          <el-col
            :span="4"
            v-for="(item, index2) in fourView.children"
            :key="index2"
          >
            <div class="category-item">
              <a>
                <img :src="item.coverAttachmentUrl" />
                <span>{{ item.articleTitle }}<br /></span>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <!-- category-area-end -->

    <!-- Blog-area -->
    <section
     v-show="fiveView.isDeleted===0"
      class="blog-area position-relative pt-110 pb-90"
      style="position: relative"
    >
      <div class="blog-bg"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title full-white-title text-center mb-70">
              <h2>{{ fiveView.title }}</h2>
              <p>{{ fiveView.subtitle }}</p>
            </div>
          </div>
        </div>
        <el-row :gutter="20">
          <el-col
            :span="8"
            v-for="(item, index3) in fiveView.children"
            :key="index3"
          >
            <div class="blog-post-item mb-30">
              <div class="blog-post-thumb position-relative">
                <a target="_blank" @click.prevent="toNesInfo(item)"
                  ><img :src="item.coverAttachmentUrl" alt=""
                /></a>
              </div>
              <div class="blog-post-content">
                <div class="blog-post-meta">
                  <ul>
                    <li><i class="el-icon-user-solid"></i>{{ item.articleAuthor||'暂无' }}</li>
                    <li>
                      <i class="el-icon-date"></i>{{ item.createTime||'暂无' }}
                    </li>
                  </ul>
                </div>
                <h4>
                  <a target="_blank" @click.prevent="toNesInfo(item)">{{ item.articleTitle }}</a>
                </h4>
                <p>
                  {{ item.articleDescription }}
                </p>
                <a class="arrow-btn" @click.prevent="toNesInfo(item)" target="_blank">Read More <span></span></a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import {
  getTreeInfo,
  getBannerList,
  getMaterialList,
  getArticlelList,
} from "../../../http/home";

export default {
  name: "Home",
  data() {
    return {
      slider_index: 0,
      bannerInfo: [],
      oneViewDs: {},
      dataForm: {
        websiteTemplateId: 1,
        parentElementId: 1,
      },
      oneView: {},
      twoView: {},
      threeView: {},
      fourView: {},
      fiveView: {},
    };
  },
  created() {
    this.$emit("headFix", ["fixed", false]);
    sessionStorage.setItem("token", "");
    this.getTree();
  },
  methods: {
       toNesInfo(data){
          let dataval = {
        articleDescription: data.articleDescription,
        articleTitle: data.articleTitle,
        articleContent:data.articleContent,
        coverAttachmentUrl: data.coverAttachmentUrl,
           };
      this.$router.push({
        path: "/template_1/menu/newList/Info",
        query: dataval,
      });
  },
    loadAnimate(index) {
      this.slider_index = index;
    },
    getTree() {
      let that = this;
      getTreeInfo(that.dataForm).then((res) => {
        let resData = res.data[0];
        getBannerList(resData.children[0].websiteElementId).then((resone) => {
          that.bannerInfo = resone.data.children;
          that.bannerInfo.id = resData.children[0].websiteElementId;
        });
        getArticlelList(resData.children[1].websiteElementId).then((restwo) => {
          that.twoView = restwo.data;
          that.twoView.id = resData.children[1].websiteElementId;
        });
        getArticlelList(resData.children[2].websiteElementId).then((ress) => {
          that.oneView = ress.data;
          that.oneViewDs = ress.data.children[0];
          that.oneView.id = resData.children[2].websiteElementId;
        });
        getArticlelList(resData.children[3].websiteElementId).then(
          (resthree) => {
            that.threeView = resthree.data;
            that.threeView.id = resData.children[3].websiteElementId;
          }
        );
        getArticlelList(resData.children[4].websiteElementId).then(
          (resfour) => {
            that.fourView = resfour.data;
            that.fourView.id = resData.children[4].websiteElementId;
          }
        );
        getArticlelList(resData.children[5].websiteElementId).then(
          (resfive) => {
            that.fiveView = resfive.data;
            that.fiveView.id = resData.children[5].websiteElementId;
          }
        );
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.el-row {
  width: 100%;
}

figure {
  color: #ffffff;
  text-align: left;
  &::before {
    background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }
  figcaption {
    bottom: 0;
    left: 6%;
    margin: 0 auto;
    position: absolute;
    right: 6%;
    top: 40%;
    width: 1170px;
    padding: 0 15px;
    h1 {
      font-size: 46px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
    .slider-button {
      background-color: #fe8724;
      border-color: #fe8724;
      color: #ffffff;
      width: 180px;
      height: 40px;
      font-size: 18px;
      transition: transform 2s;
      &:hover {
        transform: translateY(10px);
      }
    }
  }
}

// 动画类
.bounceInDown {
  animation: bounceInDown 1s linear;
}
.fadeInUp {
  animation: fadeInUp 1s linear;
}
</style>
