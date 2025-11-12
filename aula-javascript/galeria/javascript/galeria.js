//$(document).ready(function(){
$(function () {
    $(".imgPeq").click(function () {
        $(".imgPeq").removeClass("imgSelecionado");
        $(this).addClass("imgSelecionado");

        $(".imgPeq").fadeIn(1000);
        $(this).fadeOut(1000);

        let arq = $(this).attr("src");

        $("#principal").attr("src", arq);
    });
});