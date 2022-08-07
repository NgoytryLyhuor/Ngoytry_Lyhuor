window.addEventListener("scroll",function()
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var count = 1

function totalpayment()
{
    document.getElementById('counter').innerHTML = count;
    if(count > 1)
    {
        count = count-(count-1);
        document.getElementById('counter').innerHTML=count;
    }
    }
    
function plus()
{
    count += 1;
    document.getElementById('counter').innerHTML =count ;    
    if(count >20)
    {
        document.getElementById('counter').innerHTML ="20" ;
        count -=1;
    }
}
function min()
{
    count -= 1;
    document.getElementById('counter').innerHTML =count ;   
    if(count < 1 )
    {
        count +=1;
        document.getElementById('counter').innerHTML =count ;   
    }
}
var bell = 0;
function note()
{
    bell +=1 ;
    document.getElementById('note').innerHTML = bell+"!";
}
//----------to login form -------------
function login()
{
    window.open("./loginform.html");
}
//----------signout--------------
function signout()
{
    window.open("./loginform.html");
    window.close("./afterlogin.html")
}
//---------------- Qjuery
$(document).ready(function()
{
    $(".login").click(function()
    {
        $(".user").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
        {
            width: "toggle"
        });
    });
});
$(document).ready(function()
{
    $(".exit").click(function()
    {
        $(".user").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
        {
            width: "hide"
        });
    });
});
$(document).ready(function()
{
    $(".full_sc").click(function()
    {
        $(".user").animate(
        {
            width: "hide"
        });
    });
});

//==================payment
$(document).ready(function()
{
    $(".shopp").click(function()
    {
        $(".payment").animate(
        {
            width: "toggle"
        });
        $(".user").animate(
        {
            width: "hide"
        });
        $(".full_sc").animate(
        {
            width: "toggle"
        });
    });
});
$(document).ready(function()
{
    $(".shoping_item").click(function()
    {
        $(".payment").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
        {
            width: "toggle"
        });
    });
});
$(document).ready(function()
{
    $(".exit_payment").click(function()
    {
        $(".payment").animate(
        {
            width: "hide"
        });
        $(".full_sc").animate(
        {
            width: "toggle"
        });
    });
});
$(document).ready(function()
{
    $(".full_sc").click(function()
    {
        $(".full_sc").animate(
        {
            width: "hide"
        });
        $(".payment").animate(
        {
            width: "hide"
        });
        $(".success").animate(
        {
            width: "hide"
        }
        )
    });
});
//==========scroll top
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(this).scrollTop() > 500)
        {
            $('#topBtn').fadeIn();
        }
        else{
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function()
    {
        $('html , body').animate({scrollTop : 0},100);
    })
});
//===========choose_food
$(document).ready(function()
{
    $(".exit_choose").click(function()
    {
        $(".choose").animate(
        {
            width: "hide"
        });
        $(".full_sc").animate(
        {
            width: "toggle"
        });
    });
    $(".choose_sc").click(function()
    {
        $(".choose").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
        {
            width: "toggle" 
        });
    })
    $(".full_sc").click(function()
    {
        $(".choose").animate(
        {
            width: "hide"
        });
    })
    //-------------- img click --------------
    $(".menu_on").click(function()
    {
        $(".choose").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
            {
                width: "toggle"
            }
        );
    })

    //---------------to payment--------------
    $(".topayment").click(function()
    {
        $(".choose").animate(
        {
            width: "hide"
        });
        $(".full_sc").animate(
        {
            width: "toggle" 
        });
    })
    //------------order success-----------------
    $(".orderBtn").click(function()
    {
        $(".success").animate(
        {
            width: "toggle"
        });
        $(".full_sc").animate(
        {
            width: "show" 
        });
        $(".payment").animate(
        {
            width: "hide" 
        });
    })

    // ==============image catch==============
    $(".choose_sc").click(function()
    {
        var getsrc = $(this).parents(".row_food").find(".nav_food img").attr('src');
        var getname = $(this).parents(".row_food").find(".shop_name").children('p').text();
        var getprice = $(this).parents(".row_food").find(".shop_name").children('span').text();

        $(".choose").find(".choose_name").html('<p>'+getname+'</p>');
        $(".choose").find(".choose_img").html('<img src="'+getsrc+'"  width="100%" height="100%"  alt="">');
        $(".choose").find(".choose_price").html('<p>'+"From $ "+getprice+'</p>');
        
    });
    //================to Payment==============
    var totalpayment = 0;
    var rial = 1;
    $(".topayment").click(function()
    {
        var dollarUSLocale = Intl.NumberFormat('en-US');
        var name = $(this).parents(".choose").find(".choose_name").children('p').text();
        var qty =$(this).parents(".choose").find(".food_num").children('span').text();
        var getprice = $(this).parents(".choose").find(".choose_price").children('p').text().replace(/[^0-9]/gi, '');
        var catch_dolla = $(this).parents(".payment").find("#total_food_price_dolla").children('p').text().replace(/[^0-9]/gi, '');
        totalpayment = totalpayment + (getprice * qty);
        rial = totalpayment*4000;
        $(".payment").find(".total_food_name").append('<p>'+name+'</p>');
        $(".payment").find(".total_food_qty").append('<p>'+qty+'</p>');
        $(".payment").find("#total_food_price_dolla").html('<p>'+"Total in dolla : $ "+totalpayment+'</p>');
        $(".payment").find("#total_food_price_rial").html('<p>'+"Total in rial : "+rial+" ៛"+'</p>');
    })


})

