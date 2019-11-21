$(function () {

    $('#denglu').click(function () {

        var login_zhanghao = $('#zhanghao').val().trim();
        var login_mima = $('#mima').val().trim();

        if (login_mima == '' || login_mima == '') {
            alert('账号或密码不能为空');
            return;
        };

        jiceng.denglu(login_zhanghao, login_mima, function (res) {

            if (res.code === 200) {
               
                location.href = './index.html'
            }
        })
 
    })
    


})


