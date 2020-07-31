// 为了统一管理首页的请求，防止都放在首页导致结构杂乱

import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
// 只有导出时是default时，别人引用才可以省去大括号.
//import NavBar from "components/common/navbar/NavBar";
//否则只能是
//import { getHomeMultidata } from "network/home";

//首页底部商品tab列表实际的接口是/home/data？type=pop&page=1,所以需要传参
export function getHomeGoods(type,page) {
  return request({
    url:"/home/data",
    params: {
      type,
      page
    }
  })
}

