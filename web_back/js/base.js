
    var dizhi = 'http://localhost:8000';
    // var zhanghao  = $('#zhanghao').val().trim();
    // var mima = $('#mima').val().trim();


    //  jiceng就是接口调用封装的对象
    var jiceng = {
         

        denglu:function (zhanghao,mima,huidiao){
            $.post(dizhi + '/admin/login',
            {user_name:zhanghao,password:mima},
            function(res){
                huidiao(res)
            })
        },

        



    
}