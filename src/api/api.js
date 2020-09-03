import axios from 'axios';

let base = '';//添加域名
//登录
export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};
  //获取用户列表
export const getUserList = params => {
  return axios.get(`${base}/user/list`, {
    params: params
  });
};
   //获取用户列表（分页）
export const getUserListPage = params => {
  // console.log('已经进入api获取用户信息界面')
  return axios.get(`${base}/user/listpage`, {
    params: params
  });
};
    //删除用户
export const removeUser = params => {
  return axios.get(`${base}/user/remove`, {
    params: params
  });
};
  //批量删除用户
export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, {
    params: params
  });
};
//编辑用户
export const editUser = params => {
  return axios.get(`${base}/user/edit`, {
    params: params
  });
};
   //新增用户
export const addUser = params => {
  return axios.get(`${base}/user/add`, {
    params: params
  });
};



// export const getImg1 = params => {
//   return axios.get(`${base}/movie/top250`, {
//     params: params
//   });
// };
