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
              <h2>{{bannerInfo.title}}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
			<!-- breadcrumb-area-end -->

				<section v-show="oneView.isDeleted===0" class="join-area pt-70 pb-40" id="jobData">
				<div class="container">
					<div class="col-xl-12 col-lg-12">
						<div class="section-title mb-40">
							<h2><span>{{oneView.title}}</span></h2>
							<p>{{oneView.subtitle}}</p>
												</div>
					</div>
					<div class="join-count">
						<div class="tabs-vertical">				
							<div class="tabs-content-placeholder">
								<div class="tab-content-active tab-box">
									<div class="infoBox" v-for="(item,index) in oneView.children" :key="index">
										<div v-html="item.articleContent"></div>
											
								</div>
								

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
  getBannerList,
  getMaterialList,
  getArticlelList,
} from "../../../http/home";

export default {
  data() {
    return {
      bannerInfo: {},
      oneView:{},
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
			
          that.oneView = resone.data;
          that.oneView.id = resData.children[1].websiteElementId;
        });
      });
    },
  },
};
</script>
<style src='../style/bootstrap.min.css' scoped></style>
<style src='../style/animate.min.css' scoped></style>
<style src='../style/default.css' scoped></style>
<style src='../style/style1.css' scoped></style>
<style src='../style/responsive.css' scoped></style>
<style lang="scss" scoped>
.el-row {
  width: 100%;
}
</style>