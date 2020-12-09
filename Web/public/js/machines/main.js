const tooltips = $(".tooltip");



tooltips.each(function(){
  const id = $(this).attr("tooltipId");
  const tooltipbox = $("#" + id);

  $(this).hover(function(){
    tooltipbox.addClass("show-tooltip");

    //Place every tooltip box in place
    var offsets = $(this).offset();
    const fontsize = parseInt($(this).css('font-size'));
    console.log(fontsize);
    y = offsets.top + fontsize + 5;
    x = offsets.left;

    tooltipbox.css({left: x + "px", top: y + "px"});

  })
  $(this).mouseleave(function(){
    tooltipbox.removeClass("show-tooltip");
  })
})
