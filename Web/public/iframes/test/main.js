let inputOrb = $("#input-orb");
let arrow = $("#input-arrow");

console.log(inputOrb);
console.log(arrow);

inputOrb.on('click', function(){
  arrow.removeClass("disabled");
  arrow.addClass("enabled");
});
