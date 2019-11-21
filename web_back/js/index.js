$(function(){
    $('#tanchu').click(function(){
        var jieshou = confirm('您确定退出吗');
        if(jieshou == true){
            location.href = './login.html'
        }else{
              return;
        }
    })
})
$.get('http://localhost:8000/admin/getuser',function(res){
    $('name').html = 'asd'
})