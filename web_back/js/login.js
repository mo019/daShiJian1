$(function () {



    $('#denglu').click(function () {
        $('#zhanghao').val().trim();
        $('#mima').val().trim();
        if ($('#zhanghao').val().trim() == '' || $('#mima').val().trim() == '') {
            alert('账号或密码不能为空');
            return;
        }

        $.post('http://localhost:8000/admin/login',{user_name:$('#zhanghao').val().trim(),password:$('#mima').val().trim()},function(res){
            if(res.code == 200){
               location.href = './index.html';
            }else{
                alert('登录失败');
                return;
            }
            
        })



    })
})

