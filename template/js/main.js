    	$(document).ready(function(){


    		
       setInterval( function(){
        return($('.count_item').text(parseInt($('.count_item').text()) - 1));
      },20000);



       var $page = $('html, body');
       $('a[href*="#"]').click(function() {
         $page.animate({
           scrollTop: $($.attr(this, 'href')).offset().top
         }, 1400);
         return false;
       });



       //-------------------------CLICK------------

       function afterclick(){
        $(".windactiv").fadeOut();
        $(".windactiv").removeClass("windactiv");
        $(".mask").fadeOut();
        $(".to_blur").removeClass("blur");
      }
      $(function() {
        var popwindow = $('.popwindow'); 
        var popbutton = $('.popbutton');
        var politicbutton = $('.politicbutton');
        var politicwind =$('.politicwind');
        $("body").prepend("<div class='mask'></div>");

        politicbutton.click(function(){
          $(".politicwind").fadeIn().addClass("windactiv");
          $(".mask").fadeIn();
          $(".to_blur").addClass("blur");
        });

        popbutton.click(function(){
          $(".popwindow").fadeIn().addClass("windactiv");
          $(".mask").fadeIn();
          $(".to_blur").addClass("blur");
        });
        
        $(".mask, .bw_close").click(function(){
          afterclick();
        });
      });

      function succlick(){
        $("#sucwindow").fadeIn().addClass("windactiv");
        $(".mask").fadeIn();
        $(".to_blur").addClass("blur");
      }
//-------------------------JSON POST--------------
      jQuery(".form").submit(function()
      {
        
        if($(this).hasClass("one")) {
          data = jQuery(".form.one").serialize();
        }
        else{
          data = jQuery(".form.two").serialize();
        }
        url = "mail.php";
        result_id = "sucwindow";
        jQuery.ajax({
          url: url,
          type: "POST",
          data: data,
          dataType: "html",
          success: function(response){
            result = jQuery.parseJSON(response);
              $(".popwindow").fadeOut();
              succlick();
              document.getElementById(result_id).innerHTML = "Имя : "+result.name+"<br>Телефон : "+result.email+"<br>Спасибо за заявку. Ожидайте звонка в ближайшие 15 минут.";    
          },
      error: function(response,thrownError) { // Данные не отправлены
        succlick();
        // result = jQuery.parseJSON(response);
        // document.getElementById(result_id).innerHTML = result;
        $(".sucwindow").html(response);
          alert(response.status); // покажем ответ сервера
          alert(thrownError);
        }
      });  
        $(':input','.form')
        .not(':button, :submit, :reset, :hidden')
        .val('');
        return false; 

      });

//----------------------------- Delivery

$(".deliv_open").click(function(){
  var perem = $(this).parent().css("height");
  if( perem != "0px"){
    perem = "0px";
  } else{
    perem = "100%";
  }
  $(this).parent().css("height",perem)
});

$( "#clickme" ).click(function() {
  $( ".faq_box" ).slideToggle( "slow", function() {
    if ($( "#clickme" ).text() == "Скрыть"){
      $( "#clickme" ).text("Показать")
    }else{
      $( "#clickme" ).text("Скрыть")
    }
  });
});

});