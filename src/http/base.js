import axios from "axios";
import router from "../router";
import Vue from "vue";
import { Message } from "element-ui";
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://81.69.18.147/wisdom";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    Vue.prototype.$loading.show();
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      Vue.prototype.$loading.hide();
    }, 0.8 * 1000);

    if (response.data.code !== 200) {
      if (response.data.code === 401) {
        // to re-login
        Message({
          message: "您的登录信息已过期请关闭当前页面并重新登录",
          type: "error",
          duration: 5 * 1000000,
        });
      } else {
        Message({
          message: response.data.message || "Error",
          type: "error",
          duration: 5 * 1000,
        });
      }
      return Promise.reject(new Error(response.data.message || "Error"));
    } else {
      return response;
    }
    // return response
  },
  (err) => {
    setTimeout(() => {
      Vue.prototype.$loading.hide();
    }, 0.8 * 1000);
    if (err.response) {
      switch (err.response.status) {
        case 404:
          router.replace({
            path: "/error-404",
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        case 500:
          router.replace({
            path: "/error-500",
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
      }
    }
    return Promise.reject(new Error(err.response.data.error || err.message));
  }
);

/**
 * @param  {string} url
 * @param  {object} params={}
 */
const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
/**
 * @param  {string} url
 * @param  {object} data={}
 */
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * @param  {string} url
 * @param  {object} data={}
 */
const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
/**
 * @param  {string} url
 * @param  {object} params={}
 */
const del = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { axios, fetch, post, put, del };
