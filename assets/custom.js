$(document).ready(function() {
//   if($(document).width() > 1024)
//   {
//     document.body.style.zoom = "90%";
//   }
  setInterval(function(){
    if($('.slidecarthq-overlay.open').length) {
      // $('html').css('overflow','hidden')
      $('body').css('overflow','hidden')
    }
    else {
      // $('html').css('overflow-y','scroll')
      $('body').css('overflow-y','scroll')
    }
  },1000)
  if($(document).width() < 767)
  {
    $('.tt-col-one').addClass('active');
    $('.tt-col-one').css('display','none');
    $('.tt-col-two').css('display','none');
    $('.tt-col-two').removeClass('active'); 
    //$('.addtocart-js').attr('onclick','btnclicked()');
    //$('.thumbprod-button-bg').attr('onclick','btnclicked()');
    //     var first1 = document.getElementById('removeBR').getElementsByTagName('br')[0];
    //     var first2 = document.getElementById('removeBR').getElementsByTagName('br')[1];
    //     first1.remove();
    //     first2.remove();
  }
  $('.tt-btn-addtocart').click(function(){
    $('.tt-stuck-parent-cart .tt-dropdown-menu').css('display','block');
  });



  var currScroll = 0;
  var prevScroll = 0;


  if(screen.width < 767)
  {
    $('#mobile-pd-main').css('display','block');
  }
  else
  {
    var abc = $('#mobile-pd-main');
    var xyz = $('#scrolled');
    xyz.append(abc);
  }
  var productPage = $('#tt-pageContent #shopify-section-product-template').length;
  if(productPage != 0 )
  {
    if(screen.width > 767 )
    {
      window.addEventListener('scroll', function() {
        var divheight = document.getElementById('scrolled').offsetHeight;
        var divwidth = document.getElementById('scrolled').offsetWidth;
        var divparent = document.getElementsByClassName('col-6 hidden-xs')[0].offsetHeight;
        var scrollTOP = $(window).scrollTop();

        if($('.tt-stuck-parent-menu').children().length > 0)
        {
          if(scrollTOP<460)
          {
            $('#scrolled').css('position','fixed');
            document.getElementsByClassName('popup-btn')[0].style.position="fixed";
            $('#scrolled').css('height',divheight);
            $('#scrolled').css('width',divwidth);
            $('#scrolled').css('top','40px');        
            document.getElementsByClassName('popup-btn')[0].style.marginTop="-50px";
          }
          else
          {
            $('#scrolled').css('position','relative');
            document.getElementsByClassName('popup-btn')[0].style.position="relative";
            document.getElementsByClassName('popup-btn')[0].style.marginTop="30px";
            $('#scrolled').css('top',divparent-divheight);
          }
        }
        else
        {
          document.getElementsByClassName('popup-btn')[0].style.marginTop="30px";
          $('#scrolled').css('position','relative');
          document.getElementsByClassName('popup-btn')[0].style.position="relative";
          $('#scrolled').css('top','0px');
        }
        //     prevScroll = currScroll;
        //     currScroll = scrollTOP;
        //     if( currScroll > prevScroll  )
        //     {
        //       $('#headersticky').css('display','none');
        //     }
        //     if( prevScroll > currScroll )
        //     {
        //       $('#headersticky').css('display','block');
        //     }


      });
    }
    ////    reviews LK   ////

    setTimeout(function(){  
      var reviewTotalLength = $('.areviews_load_more_container')[0]?.children;
      for(var i=1 ; i < reviewTotalLength?.length ; i++)
      {
        var hrRevAll = reviewTotalLength[i];
        hrRevAll.remove();
      }
      var imagesRev = $('.grid-x').next('.large-12.cell');
      for(var i=0;i<imagesRev.length;i++)
      {
        imagesRev[i].classList.add('imageReview');
      }
      for(var i=0; i < document.getElementsByClassName('imageReview').length ; i++)
      {
        document.getElementsByClassName('imageReview')[i].setAttribute('style','display:none !important');
      }
      for(var i=2 ; i < $('.user_info_container').children('.grid-x').children().length ; i+=3)
      {
        var reviewCont = $('.user_info_container').children('.grid-x').children();
        reviewCont[i].classList.add('reviewerName'+i+'');
        reviewCont[i-1].classList.add('reviewContent');
        reviewCont[i-2].classList.add('reviewerStars'+i+'');
        $('.reviewerName'+i+'').insertBefore('.reviewerStars'+i+'');
      }
      for(var i =0 ; i < document.getElementsByClassName('reviewContent').length ; i++)
      {
        document.getElementsByClassName('reviewContent')[i].parentElement.parentElement.parentElement.style.height = '210px !important';
      }
      $('#wrapper').children().attr('style','display:flex !important;');
      $('.verified_user').attr('style','display:none !important');
      $('.areviews_user_name').attr('style','font-size:20px !important');
      $('.areviews_slide_image_details').addClass('reviewsDivision');
      $('.reviewsDivision').attr('style','');
      document.getElementById('wrapper')?.children[0]?.classList.add('reviewSlider');
      $('#wrapper')?.children().attr('style','display:flex !important;');
      $('.areviews_hide_text_button').attr('style','display:none !important;');

    
      
    //edit parikshat for review read more part  
      
      $(document).ready(function(){
   
        if($window.width()>768) { var maxLength = 350;}
        else{var maxLength = 230;}
        
    $("#wrapper .grid-x .reviewContent .comment_container .comment").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">Read more</a>');
            $(this).append('<span class="more-text">'+removedStr+'<span class="less-text"> Read Less </span>' + '</span>');
        
          
        }
     
    });
    $(".read-more").click(function(){
      $(this).parent(".comment_theme2").find(".more-text").show();
      $(this).hide();
       
      $(this).parent(".comment_theme2").css("overflow-y","scroll");
       
       });
        
        $(".less-text").click(function(){
         $(this).parent(".more-text").hide();
        $(this).parent(".more-text").parent(".comment_theme2").find(".read-more").show();
          
         $(this).parent(".more-text").parent(".comment_theme2").css("overflow-y","hidden"); 
    });
        
});

      
      
//       if(screen.width < 767)
//       {
//         for(var i=0 ; i < $('#wrapper .grid-x .reviewContent .comment_container .comment').length ; i++)
//         {
//           if($('#wrapper .grid-x .reviewContent .comment_container .comment')[i].innerText.length > 250)
//           {
//             $('#wrapper .grid-x .reviewContent .comment_container .comment')[i].innerText = $('#wrapper .grid-x .reviewContent .comment_container .comment')[i].innerText.slice(0,250) ;
         
           
//           }
//         }
//       }
//       else
//       {
//         for(var i=0 ; i < $('#wrapper .grid-x .reviewContent .comment_container .comment').length ; i++)
//         {
//           if($('#wrapper .grid-x .reviewContent .comment_container .comment')[i].innerText.length > 350)
//           {
           
//           var newtext =  $('#wrapper .grid-x .reviewContent .comment_container .comment')[i].innerText.slice(0,350);
          
           
            
//           }
//         }
//       }
      
      
      
      
      $('.reviewSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000
            }
          }
        ]
      });
    }, 2000);

  }
  //////////////////////////
});



// function btnclicked()
// {
//   setTimeout(function()
//              { 
//     xyz(); 
//              }, 1000);
// }
// function xyz()
// {
//   //$
//   $('#modalAddToCartProduct').removeClass('modal');
//   $('#modalAddToCartProduct').removeClass('fade');
//   $('.pageproduct').removeClass('modal-open');
//   $('#modalAddToCartProduct').removeClass('show');
//   $('.pageproduct').addClass('tt-popup-dropdown');
//   $('.tt-dropdown-obj').addClass('activetoview');
//   $('.tt-dropdown-obj').addClass('active');
// }


function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
 var element = document.getElementById("btn-zoom-trick");
element.classList.toggle("btn_index-play");
}


function btnpddesk()
{
  $('.tt-stuck-parent-cart .tt-dropdown-menu').css('display','block');
}


window.onscroll = function() {myFunction()};
var sticky_filter = document.getElementById("collections_filter");
var sticky = sticky_filter?.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    sticky_filter.classList.add("sticky_filter_row");
  } if(window.pageYOffset == sticky) {
    sticky_filter.classList.remove("sticky_filter_row");
  }
}
