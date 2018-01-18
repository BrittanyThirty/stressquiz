$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    var stress = 0;
    var health = 0;
    var methods = 0;

    $("input:checkbox[name=stress-warnings]:checked").each(function() {
      stress += 1;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      health += 1;
    });
    $("input:checkbox[name=coping-methods]:checked").each(function()  {
      methods += 1;
    });
    console.log (stress);
    if ((stress + health) >= 5) {
      if (methods >= 3) {
        $('#good-job').toggle();
      } else {
        $('#stress-advice').toggle();
      }
    } else {
        $('#no-worries').toggle();
    }
  });
});



// var stress = a;
// var health = b;
// var methods = c;
    // alert(stresses);


// $("form#stress_survey").submit(function(event){
//   event.preventDefault();
//   $("#work-responses").show();
//   $("input:checkbox[name=work-transportation]:checked").each(function(){
//     var workTransportationMode = $(this).val();
//     $('#work-responses').append(workTransportationMode + "<br>");
//   });
//   $("#fun-responses").show();
//   $("input:checkbox[name=fun-transportation]:checked").each(function(){
//     var funTransportationMode = $(this).val();
//     $('#fun-responses').append(funTransportationMode + "<br>");
//   });
//   $('#transportation_survey').hide();
// });
// });



  // <form id="stress_survey">

// stress-warnings
// health-symptoms
// coping-methods


// <span id="stress-advice">
//
// <span id="good-job">
//
// <span id="no-worries">
