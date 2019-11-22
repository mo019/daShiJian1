
var dizhi = 'http://localhost:8000';

// 账号登陆接口
var jiben_denglu = 'http://localhost:8000/admin/login';
// 显示用户头像名字等信息接口
var jiben_xianshi = 'http://localhost:8000/admin/getuser';
// 登出接口
var jiben_tuichu = 'http://localhost:8000/admin/logout';
// 文章类别查询
var jiben_wenZhangChaXun = 'http://localhost:8000/admin/category_search'


//  jiceng就是接口调用封装的对象
var jiceng = {


    // 账号登陆接口
    denglu: function (zhanghao, mima, login_huidiao) {
        $.post(jiben_denglu,
            { user_name: zhanghao, password: mima },
            function (res) {
                login_huidiao(res)
            })
    },
    //    显示用户头像名字等信息接口
    xianshi: function (index_huidiao) {
        $.get(jiben_xianshi, function (res) {
            index_huidiao(res);
        })
    },
    // 登出接口
    tuichu: function (tanchu) {
        $.post(jiben_tuichu, function (res) {
            tanchu(res);
        })
    },
    // 文章类别查询
    wenZhangChaXun: function (chaXun) {
        $.get(jiben_wenZhangChaXun, function (res) {
            chaXun(res);
        })
    }










}