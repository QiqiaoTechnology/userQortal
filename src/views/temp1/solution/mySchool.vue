<template>
  <div>
    <section
      class="breadcrumb-area breadcrumb-bg"
      :style="'background-image: url(' + bannerInfo.attachmentUrl + ')'"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content text-center">
              <h2>{{ bannerInfo.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->

    <section   v-show="oneView.isDeleted===0" class="campus-area pt-70">
      <div class="container">
        <div class="col-xl-12 col-lg-12">
          <div class="section-title text-center mb-40">
            <h2>
              <span>{{ oneView.title }}</span>
            </h2>
            <p>{{ oneView.subtitle }}</p>
          </div>
        </div>
        <div
          class="campus-box"
          v-for="(item, index) in oneView.children"
          :key="index"
        >
          <img :src="item.coverAttachmentUrl" />
          <div class="campus-box-content">
            <h3 class="title">{{ item.articleTitle }}</h3>
            <span class="post">{{ item.articleDescription }}</span>
          </div>
          <p>{{ item.articleTitle }}</p>
        </div>
      </div>
    </section>
    <!-- category-area -->
    <section   v-show="twoView.isDeleted===0" class="category-area pt-20 pb-20">
      <div class="container">
        <el-row
          :gutter="20"
          type="flex"
          justify="space-between"
          class="category-gutters"
        >
          <el-col :span="4" v-for="(item, indexs) in twoView" :key="indexs">
            <div class="category-item">
              <a>
                <img :src="item.attachmentUrl" />
                <span>{{ item.title }}</span>
              </a>
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
  data() {
    return {
      bannerInfo: {},
      oneView: {},
      twoView: {},
    };
  },
  mounted() {
    if(this.$route.query.pageID){
   this.getTree(this.$route.query.pageID);
  }
  },
  methods: {
  
  getTree(pageID) {
      let that = this;
      let dataForm={
        websiteTemplateId: 1,
        parentElementId: pageID,
      }
      getTreeInfo(dataForm).then((res) => {
        let resData = res.data[0];

        getMaterialList(resData.children[0].websiteElementId).then((ress) => {
        
          that.bannerInfo = ress.data.children[0];
          that.bannerInfo.id = resData.children[0].websiteElementId;
        });

        getArticlelList(resData.children[1].websiteElementId).then((resone) => {
          ;
          that.oneView = resone.data;
          that.oneView.id = resData.children[1].websiteElementId;
        });
        getMaterialList(resData.children[2].websiteElementId).then((restwo) => {
          ;
          that.twoView = restwo.data.children;
          that.twoView.id = resData.children[2].websiteElementId;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
}
</style>
