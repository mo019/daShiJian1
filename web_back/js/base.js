
let dizhi = 'http://localhost:8000';

// 账号登陆接口
let jiben_denglu = 'http://localhost:8000/admin/login';
// 显示用户头像名字等信息接口
let jiben_xianshi = 'http://localhost:8000/admin/getuser';
// 登出接口
let jiben_tuichu = 'http://localhost:8000/admin/logout';
// 文章类别查询
let jiben_wenZhangChaXun = 'http://localhost:8000/admin/category_search'


//  jiceng就是接口调用封装的对象
let jiceng = {
    // 账号登陆接口
    denglu: (zhanghao, mima, login_huidiao) => { 
        $.post(jiben_denglu, { user_name: zhanghao, password: mima }, (res) => login_huidiao(res)) 
    },
    //    显示用户头像名字等信息接口
    xianshi: index_huidiao => $.get(jiben_xianshi, res => index_huidiao(res)),
    // 登出接口
    tuichu: tanchu => $.post(jiben_tuichu, res => tanchu(res)),
    // 文章类别查询
    wenZhangChaXun: chaXun => $.get(jiben_wenZhangChaXun, res => chaXun(res))










}