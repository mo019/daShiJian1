$(function(){

    // 从后端取出数据放到页面上
jiceng.wenZhangChaXun(function(res){

    var htmlStr =template('moban',res)
    $('#wenZhangGuanLi').html(htmlStr);

});
// var htmlStr = template('moban',res)
// console.log(htmlStr)
// $('#wenZhangGuanLi').html(htmlStr);
















})