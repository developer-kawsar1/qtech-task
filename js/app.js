// let sideBar = 
$(".th_bar").click(function() {
    $(".mobile_manu").addClass("side_bar_active")
    $(".mobile_manu_overly").addClass("active")
})
$(".close_manu").click(function() {
    $(".mobile_manu").removeClass("side_bar_active")
    $(".mobile_manu_overly").removeClass("active")
})

document.querySelector(".mobile_manu_overly").addEventListener("click", () => {
    $(".mobile_manu").removeClass("side_bar_active")
    $(".mobile_manu_overly").removeClass("active")
})
$(".drowp_down_manu_icon").click(function() {
    $(this).next(".mobile_manu_ul li ul").slideToggle();
    $(this).toggleClass("mobile_manu_li_active")
})
