var modal = $('#modal');

$(function(){
    // Ventana Modal
    $('img').click(function(){
        var idImg = $(this).attr("id");
        console.log(idImg);
        var srcImg = $(this).attr("src");
        console.log(srcImg);
        showModal(idImg, srcImg);
    });
    hideModal();

    //NavBar
    $('.fa-bars').click(function(){
        $('nav ul li').addClass("show");
        $('.fa-xmark').css("display","block");
        $('.fa-bars').css("display","none");
    });
    $('.fa-xmark').click(function(){
        $('nav ul li').removeClass("show");
        $('.fa-bars').css("display","block");
        $('.fa-xmark').css("display","none");
    });
});

function showModal(idImg, srcImg){
    var imagen = idImg;
    var src = srcImg;
    $('#imgModal').attr("src", srcImg);
    modal.css("display", "block");
}

function hideModal(){
    $('.cerrar').click(function(){
        modal.css("display", "none");
    });
}
