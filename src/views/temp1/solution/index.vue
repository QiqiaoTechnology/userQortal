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

    <!-- team-area -->
    <section  v-show="oneView.isDeleted===0"  class="team-area pt-50 pb-70" id="teacherlist">
      <div class="container">
        <div class="">
          <div class="section-title mb-40">
            <h2>
              <span>{{ oneView.title }}</span>
            </h2>
            <p class="ov3">
              {{ oneView.subtitle }}
            </p>
          </div>
        </div>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(item, index) in oneView.children"
            :key="index"
          >
            <div class="team-box mb-50">
              <div class="team-thumb mb-20">
                <img :src="item.coverAttachmentUrl" />
                <ul class="team-social">
                  <li><a @click="toInfo(item)">READ MORE</a></li>
                </ul>
              </div>
              <div class="team-content">
                <h4>
                  <a @click="toInfo(item)"
                    >{{ item.articleTitle }}<span>.</span></a
                  >
                </h4>
                <span class="ov3">{{ item.articleDescription }}</span>
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
  data() {
    return {
      bannerInfo: {},
      oneView: {},
    };
  },
  mounted() {

  if(this.$route.query.pageID){
   this.getTree(this.$route.query.pageID);
  }
 
  },
  methods: {
    toInfo(data) {
      let dataval = {
        articleDescription: data.articleDescription,
        articleTitle: data.articleTitle,
        coverAttachmentUrl: data.coverAttachmentUrl,
        title: this.bannerInfo.title,
        attachmentUrl: this.bannerInfo.attachmentUrl,
      };
      this.$router.push({
        path: "/template_1/menu/teacher/Info",
        query: dataval,
      });
    },

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
          that.oneView = resone.data;
          that.oneView.id = resData.children[1].websiteElementId;
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
