/*global $*/
$(function(){
  $('.nav-bar-toggle-btn').click(function(){
    var iEl = $('i',$(this))
    iEl.toggleClass('left').toggleClass('right')
    $('.nav-main-content').toggle()
  })
})
