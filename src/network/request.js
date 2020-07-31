import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/x6",
    timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1.请求拦截
  instance.interceptors.request.use(
  // 请求拦截掉后，要记得再把请求返回出去，否则内部发生真正请求，获取不到请求 
  // 用途：1.请求头中的一些信息不符合服务器要求，要处理下，比如header
  // 2.比如每次发送请求时，希望在界面显示一个加载图标，动画
  // 3.某些网络请求，必须携带一些令牌，比如token。如果没有则进行提示登录
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
  // 这里返回的事promise，其他地方调用直接返回。then()
}
