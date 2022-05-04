$(function(){
  $(".btn-primary").click(function(){
    $('.toast').toast('show');
  });

  $('.toast').on('show.bs.toast', function(){
    alert('The toast is about to be shown.');
  });
  $('.toast').on('shown.bs.toast', function(){
    alert('The toast is now fully shown.');
  });
  $('.toast').on('hide.bs.toast', function(){
    alert('The toast is about to be hidden.');
  });
  