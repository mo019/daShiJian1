$(function () {


    $('#tanchu').click(function () {

        jiceng.tuichu(function (res) {

            if (res.code == 200) {
                alert(res.msg);
                location.href = './login.html';
            } else {
                return;
            };
        });

    });



    jiceng.xianshi(function (res) {

        $('#mingzi').text(res.data.nickname);
        $('.touxiang').prop('src', res.data.user_pic);

    });





});
