<template>
  <div>
    <section
      class="breadcrumb-area breadcrumb-bg"
      :style="'background-image: url('+bannerInfo.attachmentUrl+')'"
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

    <!-- blog-area -->
    <section id="newlist" class="blog-area gray-bg pt-60 pb-60">
      <div class="container">
        <el-row :gutter="10">
          <el-col :span="6">
            <aside class="blog-sidebar">
              <div class="widget mb-30">
                <div class="single-sidebar white-bg">
                  <!-- <div class="sidebar-title mb-25">
                   <span>标签分类</span> 
                  </div> -->
                  <div class="cat-list">
                    <ul>
                      <div v-for="(item,indexs) in titleList" :key="indexs">
                       <li v-if="item.isDeleted!==1">
                        <a
                          :class="item.id===oneView.websiteElementId?'isactive':''"
                          @click.stop="toArticle(item.id)"
                        ><i class="fas fa-caret-right" /> {{ item.title }}</a>

                      </li>
                     </div>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </el-col>
          <el-col :span="18">
            <div v-for="(item, index) in oneView.children" :key="index"  v-show="oneView.isDeleted===0">
              <div class="classic-blog-post mb-20">
                <div class="blog-thumb">
                  <a
                   @click.prevent="toNesInfo(item)"
                    target="_blank"
                  ><img
                    :src="item.coverAttachmentUrl"
                    alt="img"
                  ></a>
                </div>
                <el-col :span="24" class="blog-content">
                  <div class="classic-blog-tag mb-10">
                    <ul>
                      <li><i class="el-icon-user-solid" /></li>
                      <li class="avatar">{{ item.articleAuthor }}</li>
                    </ul>
                  </div>
                  <h4>
                    <a @click.prevent="toNesInfo(item)" target="_blank">{{ item.articleTitle }}</a>
                  </h4>
                  <p>{{ item.articleDescription }}</p>
                  <div class="classic-blog-meta">
                    <ul>
                      <li class="blog-post-date">
                        <i class="el-icon-date" />{{ item.createTime }}
                      </li>
                      <li class="blog-more-read">
                        <a href="#" @click.prevent="toNesInfo(item)" target="_blank">READ MORE</a>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </div>
            </div>

          </el-col>
        </el-row>
      </div>
    </section>
    <!-- blog-area-end -->

  </div>
</template>
<script>
import {
  getTreeInfo,
  getMaterialList,
  getArticlelList,
} from "../../../http/home";

export default {
  data() {
    return {
      bannerInfo: {},
      titleList: [],
       websiteElementIdVal: '',
      oneView: {},
      listData: []

    }
  },
  mounted() {
  if(this.$route.query.pageID){
   this.getTree(this.$route.query.pageID);
  }
  },
  methods: {
      toNesInfo(data){
          let dataval = {
        articleDescription: data.articleDescription,
        articleTitle: data.articleTitle,
        articleContent:data.articleContent,
        coverAttachmentUrl: data.coverAttachmentUrl,
        title: this.bannerInfo.title,
        attachmentUrl: this.bannerInfo.attachmentUrl,
      };
      this.$router.push({
        path: "/template_1/menu/newList/Info",
        query: dataval,
      });
  },
    toArticle(websiteElementId) {
      this.websiteElementIdVal = websiteElementId
      getArticlelList(websiteElementId).then((resone) => {
        this.oneView = resone.data
            })
    },
   getTree(pageID) {
      let that = this;
      let dataForm={
        websiteTemplateId: 1,
        parentElementId: pageID,
      }
      getTreeInfo(dataForm).then((res) => {
                const resData = res.data[0]
        getMaterialList(resData.children[0].websiteElementId).then((ress) => {
          that.bannerInfo = ress.data.children[0]
          that.bannerInfo.id = resData.children[0].websiteElementId
        })
        that.titleList = []
        for (let i = 1; i < resData.children.length; i++) {
          const titleData = {
            id: resData.children[i].websiteElementId,
            title: resData.children[i].title
          }
          that.titleList.push(titleData)
        }
        if (this.websiteElementIdVal) {
          this.getList(this.websiteElementIdVal)
        } else {
           const data = resData.children.slice(1).find(res => res.isDeleted !== 1)
          this.getList(data.websiteElementId)
        }
      })
    },
    getList(webId) {
      getArticlelList(webId).then((resone) => {
        this.oneView = resone.data
      })
    }
  },

}

</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
}
.blog-thumb{
	max-width: 30%;
	margin-right: 20px;
}
.isactive{
  color: #fe5a2c;
}

</style>
