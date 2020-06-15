// 导出配置，其最后会和
// configureWebpack配置别名
// resolve:解决
// alias：取别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // "@": "src"此为系统配置的别名
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
// 配置好别名后，导入对比
// 之前：@import "./assets/css/base.css";
// 现在：@import "assets/css/base.css";
