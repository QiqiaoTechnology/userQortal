<template>
  <div></div>
</template>
<script>
import { currentWebsiteTemplate } from "../http/home";
export default {
  name: "loanAuditVin",

  data() {
    return {};
  },
  created() {
    this.currentWebsiteTemplate();
  },
  computed: {
    calHeight() {
      return window.innerHeight - 5 + "px";
    },
  },
  methods: {
    currentWebsiteTemplate() {
      let that = this;
      currentWebsiteTemplate().then((res) => {
         if (res.data === 1) {
          this.$router.push({
            path: "/template_1/menu",
            query: this.addForm,
          });
        }
        if (res.data === 2) {
          this.$router.push({
            path: "/template_2/menu",
            query: this.addForm,
          });
        }
        if (res.data === 3) {
          this.$router.push({
            path: "/template_3/menu",
            query: this.addForm,
          });
        }
      });
    },
  },
};
</script>
 
<style scoped>
</style>