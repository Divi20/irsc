$(document).ready(function(){
  $("#test").on('click', function() {
  
    $.fancybox.open({
      src  : '#hidden-content',
      type : 'inline',
      opts : {
        afterShow : function( instance, current ) {
          console.info('done!');
        }
      }
    });
    
  });

  $('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $("#vd1").on('click', function() {
  
    $.fancybox.open({
      src  : '#hidden-content2',
      type : 'inline',
      opts : {
        afterShow : function( instance, current ) {
          console.info('done!');
        }
      }
    });
  });
 
})

