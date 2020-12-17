const inputOrb = $("#input-orb");
const arrow = $("#input-arrow");
const inputObjs = $(".input-obj");
const machine = $("#machine");
const outputOrb = $(".output-orb");
const outputObj = $("#output-obj")

let inputObjId = 0;

inputObjs.each(function(){
  $(this).on('dragstart', function(event) { event.preventDefault(); });
  enableInteraction($(this));
  $(this).on('click', function(){
    if ($(this).attr("interactable") == 1){
      inputObjId = $(this).attr("obj-id");
      enableElement(inputOrb);
      enableInteraction(inputOrb);
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

inputOrb.on("click", function(){
  if ($(this).attr("interactable") == 1){
    inputObjs.each(function(){
      if(!$(this).hasClass("selected")){
        disableElement($(this));
      }
      disableInteraction($(this));
    });
    machine.attr('src', 'srcs/images/Machine2.png');
    disableInteraction($(this));
    enableInteraction(machine);
  }
});

machine.mouseenter(function(){
  if ($(this).attr("interactable") == 1){
    machine.attr('src', 'srcs/images/Machine3.png');
  }
})

machine.on("click", function(){
  if ($(this).attr("interactable") == 1){
    enableElement(outputOrb);
    enableInteraction(outputOrb);
    disableInteraction($(this));
    outputObj.attr('src', 'srcs/images/Out'+ inputObjId +'.png');
  }
});

let end = false;

outputOrb.mouseenter(function(){
  if($(this).attr("interactable") == 1){
    enableElement(outputObj);
    end = true;
  }
})
$(document).on('click', function(){
  if(end){
    resetScene();
    end = false
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
  enableElement(machine);
  machine.attr('src', 'srcs/images/Machine1.png');
}
