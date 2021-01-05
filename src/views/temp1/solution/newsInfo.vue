<template>
  <div>
    <section
      class="breadcrumb-area breadcrumb-bg"
      :style="'background-image: url(' + viewVal.attachmentUrl + ')'"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content text-center">
              <h2>{{ viewVal.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->
    <section class="blog-area gray-bg pt-40 pb-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="classic-blog-post blog-details-wrap">
              <div class="blog-content">
                <h4>{{ viewVal.articleTitle }}</h4>
                <div class="blog-details-meta">
                  <ul>
                    <li>
                      <i class="el-icon-user-solid"></i
                      ><a href="#">{{ viewVal.articleAuthor || "空" }}</a>
                    </li>
                    <li>
                      <i class="el-icon-date"></i
                      >{{ viewVal.createTime || "空" }}
                    </li>
                  </ul>
                </div>
                <img
                  :src="viewVal.coverAttachmentUrl"
                  :title="viewVal.articleTitle"
                />
                <div
                  v-html="viewVal.articleContent"
                  style="margin-top: 20px"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {
  getTreeInfo,
  getMaterialList,
} from "../../../http/home";
export default {
  data() {
    return {
      viewVal: {
        articleDescription:'',
        articleTitle:'',
        articleContent:'',
        coverAttachmentUrl:'',
        attachmentUrl:'',
        title:''
        },
    };
  },
  created() {
     
    const queryParam = this.$route.query;
    if (queryParam.attachmentUrl) {
       this.viewVal.articleDescription= queryParam.articleDescription,
        this.viewVal.articleTitle= queryParam.articleTitle,
       this.viewVal.articleContent=queryParam.articleContent,
        this.viewVal.coverAttachmentUrl=queryParam.coverAttachmentUrl,
       this.viewVal.attachmentUrl=queryParam.attachmentUrl
         this.viewVal.title=queryParam.title
    } else {
      
           this.viewVal.articleDescription= queryParam.articleDescription,
        this.viewVal.articleTitle= queryParam.articleTitle,
       this.viewVal.articleContent=queryParam.articleContent,
        this.viewVal.coverAttachmentUrl=queryParam.coverAttachmentUrl,
      this.viewVal.attachmentUrl=''
         this.viewVal.title=''
    this.getTree(70);
    }
  },
  methods: {
    getTree(pageID){
         let dataForm={
        websiteTemplateId: 1,
        parentElementId: pageID,
      }
      let that=this
       getTreeInfo(dataForm).then((res) => {
                      const resData = res.data[0]
        getMaterialList(resData.children[0].websiteElementId).then((ress) => {
          
          let dataval=ress.data.children[0]
          that.viewVal.attachmentUrl = dataval.attachmentUrl
          that.viewVal.title =dataval.title
        })
       })
    }
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
}
</style>
