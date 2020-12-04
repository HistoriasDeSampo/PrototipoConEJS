const inputOrb = $("#input-orb");
const arrow = $("#input-arrow");
const inputObjs = $(".input-obj");
const machine = $("#machine");
const outputOrb = $("#output-orb");
const outputObj = $("#output-obj")

inputObjs.each(function(){
  $(this).on('dragstart', function(event) { event.preventDefault(); });
  enableInteraction($(this));
  $(this).on('click', function(){
    if ($(this).attr("interactable") == 1){
      enableElement(arrow);
      enableInteraction(arrow);
      inputObjs.each(function(){
        enableElement($(this));
        enableInteraction($(this));
        deselectElement($(this));
      });
      disableInteraction($(this));
      disableElement($(this));
      selectElement($(this));
    }
  });
})

console.log(inputOrb);
console.log(arrow);

inputOrb.on('dragstart', function(event) { event.preventDefault(); });
arrow.on('dragstart', function(event) { event.preventDefault(); });

function selectElement(obj){
  obj.addClass("selected");
}

function deselectElement(obj){
  obj.removeClass("selected");
}

function enableInteraction(obj){
  obj.addClass("interactable");
  obj.attr("interactable",1);
}

function disableInteraction(obj){
  obj.removeClass("interactable");
  obj.attr("interactable",0);
}

function disableElement(obj){
  obj.removeClass("enabled");
  obj.addClass("disabled");
}

function enableElement(obj){
  obj.removeClass("disabled");
  obj.addClass("enabled");
}

// inputOrb.on('click', function(){
//   if ($(this).attr("interactable") == 1){
//     enableElement(arrow);
//     enableInteraction(arrow);
//     disableInteraction($(this));
//     disableElement($(this));
//   }
// });

arrow.on("click", function(){
  if ($(this).attr("interactable") == 1){
    disableElement(inputOrb);
    disableInteraction(inputOrb);
    inputObjs.each(function(){
      if(!$(this).hasClass("selected")){
        disableElement($(this));
      }
      disableInteraction($(this));
    });
    disableInteraction($(this));
    disableElement($(this));
    enableElement(machine);
    enableInteraction(machine);
  }
});

machine.on("click", function(){
  if ($(this).attr("interactable") == 1){
    enableElement(outputOrb);
    enableInteraction(outputOrb);
    disableInteraction($(this));
  }
});

outputOrb.mouseenter(function(){
  if($(this).attr("interactable") == 1){
    enableElement(outputObj);
  }
}).mouseleave(function(){
  if($(this).attr("interactable") == 1){
    resetScene();
  }
});


function resetScene(){
  inputObjs.each(function(){
    enableInteraction($(this));
    enableElement($(this));
    deselectElement($(this));
  });
  enableElement(inputOrb);
  disableElement(machine);
  disableInteraction(machine);
  disableElement(arrow);
  disableInteraction(arrow);
  disableElement(outputOrb);
  disableInteraction(outputOrb);
  disableElement(outputObj);
}
