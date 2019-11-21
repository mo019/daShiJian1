$(function(){
    $('#tanchu').click(function(){
        var jieshou = confirm('您确定退出吗');
        if(jieshou == true){
            location.href = './login.html'
        }else{
              return;
        }
    });

    jiceng.xianshi(function(res){
        console.log(res.data)
        
       $('#mingzi').text(res.data.nickname);
       $('.touxiang').prop('src',res.data.user_pic);

       


    });
     




});
