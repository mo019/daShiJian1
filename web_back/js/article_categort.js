$(function(){

    // 从后端取出数据放到页面上
jiceng.wenZhangChaXun(function(res){

    let htmlStr =template('moban',res)
    $('#wenZhangGuanLi').html(htmlStr);

});


$('#addModal').modal({
    show:false,
    backdrop:false
  });

  $('#model_shutoff').click(function(){
    alert('shutoff');
    $('#addModal').modal('hide');
  });

  $('#model_add').click(function(){
    alert('add');
    $('#addModal').modal('hide');
  });

  $('.category_table').delegate('a','click',() => {
      if($(this).hasClass('btn-info')){
        $('#addModal .modal-title').html('修改分类名称');
        $('#addModal').modal('show');
      }
  })
















})