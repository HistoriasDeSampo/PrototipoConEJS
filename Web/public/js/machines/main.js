const tooltips = $(".tooltiptxt");

$(".close").click(function(){

  $(this).closest('.tooltipbox').removeClass("show-tooltip");
})


tooltips.each(function(){
  const id = $(this).attr("tooltipId");
  const tooltipbox = $("#" + id);

  $(this).mouseenter(function(){
    tooltipbox.addClass("show-tooltip");

    //Place every tooltip box in place
    var offsets = $(this).offset();
    const fontsize = parseInt($(this).css('font-size'));
    y = offsets.top + fontsize + 5;
    x = offsets.left;

    displacement = Math.max(0, x + 256 - parseInt($(window).width()));
    tooltipbox.css({left: x - displacement + "px", top: y + "px"});

  }).mouseleave(function(){
    tooltipbox.removeClass("show-tooltip");
  })
})
