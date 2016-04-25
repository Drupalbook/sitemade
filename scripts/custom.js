(function($){
  $(document).ready(function(){
    $('.colorbox').colorbox();
    
    $('#block-search-form .form-text').val('Поиск');
    $('#block-search-form .form-text').blur(function(){
      if(this.value==''){
        this.value='Поиск';
      }
    });   
    $('#block-search-form .form-text').focus(function(){
      if(this.value=='Поиск'){
        this.value='';
      }
    });
  
    $('<i class="fa fa-file-code-o online-html-demo"></i>').insertBefore('.html-demo');
    $('<i class="fa fa-print"></i>').prependTo('.book_printer');
    $('<i class="fa fa-comments-o"></i>').prependTo('.comment-add a');
    $('<i class="fa fa-comments-o"></i>').prependTo('h2.comment-title');
    $('<i class="fa fa-plus"></i>').prependTo('.book_add_child');
    $('<i class="fa fa-user"></i>').prependTo('.username');
    $('<i class="fa fa-remove"></i>').prependTo('.comment-delete');
    $('<i class="fa fa-pencil"></i>').prependTo('.comment-edit');
    $('<i class="fa fa-reply"></i>').prependTo('.comment-reply');
    $('<i class="fa fa-angle-double-right"></i>').prependTo('.node-readmore a');
    $('<i class="fa fa-level-up"></i>').prependTo('.page-up');
    $('<i class="fa fa-question"></i>').prependTo('.menu-9816 a');
    $('<i class="fa fa-drupal"></i>').prependTo('.menu-9817 a');
    $('<i class="fa fa-sign-in"></i>').prependTo('.menu-9819 a');
    $('<i class="fa fa-skype"></i>').prependTo('.contact-skype');
    $('<i class="fa fa-envelope-o"></i>').prependTo('.contact-email a');
    $('<i class="fa fa-mobile"></i>').prependTo('.contact-phone');
    $('<i class="fa fa-sign-out"></i>').appendTo('.secondary-menu .menu-4 a');
    $('<i class="fa fa-tag"></i>').prependTo('.field-type-taxonomy-term-reference a');

     
 

      
      

  });
})(jQuery);
