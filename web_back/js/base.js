
var dizhi = 'http://localhost:8000';
// var zhanghao  = $('#zhanghao').val().trim();
// var mima = $('#mima').val().trim();


//  jiceng就是接口调用封装的对象
var jiceng = {

    denglu: function (zhanghao, mima, login_huidiao) {
        $.post(dizhi + '/admin/login',
            { user_name: zhanghao, password: mima },
            function (res) {
                login_huidiao(res)
            })
    },

    xianshi: function (index_huidiao) {
        $.get('http://localhost:8000/admin/getuser', function (res) {
            index_huidiao(res);
        })
    },

    tuichu: function (tanchu) {
        $.post(dizhi + '/admin/logout', function (res) {
            tanchu(res);
        })
    }







}