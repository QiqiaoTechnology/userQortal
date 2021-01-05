
import * as http from './base'


const getMenuList = (websiteTemplateId) => {
  return http.fetch('/qiqiao/websiteElement/getMenuBarList/'+ websiteTemplateId)
}
const getTreeInfo = (dataForm) => {
  return http.fetch('/qiqiao/websiteElement/getTree', dataForm)
}
const getBannerList = (websiteElementId) => {
  return http.fetch('/qiqiao/websiteElement/bannerByModule/'+websiteElementId)
}

const getBannerListByPage = (data) => {
  return http.fetch('/qiqiao/banner/findByPage',data)
}
const getMaterialList = (websiteElementId) => {
  return http.fetch('/qiqiao/websiteElement/attachmentMaterialByModule/'+websiteElementId)
}
const getArticlelList = (websiteElementId) => {
  return http.fetch('/qiqiao/websiteElement/articleByModule/'+websiteElementId)
}
const getArticleListByPage = (dataForm) => {
  return http.fetch('/qiqiao/article/findMyArticle', dataForm)
}
const updateBannerModule = (websiteElementId,bannerId) => {
  return http.put('/qiqiao/websiteElement/updateBannerModule/'+websiteElementId+'/'+bannerId)
}
const findByAttachmentType = (dataForm) => {
  return http.fetch('/qiqiao/attachmentMaterial/findByAttachmentType', dataForm)
}
const updateArticleModule = (websiteElementId,upArticleId,articleId) => {
  return http.put('/qiqiao/websiteElement/updateArticleRegion/'+websiteElementId+'/'+upArticleId,articleId)
}
const updateMaterialModule = (websiteElementId,upMaterialId) => {
  return http.put('/qiqiao/websiteElement/updateAttachmentMaterialRegion/'+websiteElementId+'/'+upMaterialId)
}
const updateModuleTitle = (dataForm) => {
  return http.put('/qiqiao/websiteElement/updateMetaDataOfModule/',dataForm)
}
const getBasicColumnList = () => {
  return http.fetch('/qiqiao/basicInfo/enterpriseBasicInfo')
}
const getEnterpriseInfo = () => {
  return http.fetch('/qiqiao/friendshipLink/listForWeb')
}
const currentWebsiteTemplate = () => {
  return http.fetch('/qiqiao/websiteTemplate/currentWebsiteTemplate')
}


export { getMenuList,getTreeInfo,getBannerList,getBannerListByPage ,getMaterialList,getArticlelList,getArticleListByPage,
  updateArticleModule,updateBannerModule,findByAttachmentType,updateMaterialModule,updateModuleTitle,getBasicColumnList,getEnterpriseInfo,currentWebsiteTemplate}