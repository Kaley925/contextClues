$(document).ready(function () {
  //making a list of the accusations

  //var i = 1;
  var FRIEND_NAME = ["Sylvanas", "Jailer", "Ner'zhul", "Dormazain", "Razanal"]
  var WEAPON_NAME = ['Chaos bolt','Pyroblast', 'Fists Of Fury', 'Convoke', 'Tiger palm', 'Mind Blast','Shadowfiend','Combustion','Metamorphasis','Eye Beam','Hunt','Ashen Hallow','Judgement','Mortal Strike','Mutilate', 'Rupture','Templars Verdict','Rising Sun Kick','Jelly cat','Smite'];
  var LOCATION_NAME = ['Korthia','Ravendreth','Ardenweald','Maldraxxus','Bastion']
  //var createHeading = function() {

  for (var i = 1; i < 101; i++) {
    var heading = $(`<h3>Accusation${i}</h3>`);
    console.log("test");
    //clicking on an accusation
    heading.click(notification(i));

    $("body").append(heading);
  }

  function notification(i) {
    function fun() {
      alert(
        `Accusation ${i}: I accuse ${FRIEND_NAME[i % FRIEND_NAME.length]}, with the ${WEAPON_NAME[i % WEAPON_NAME.length]} in the ${LOCATION_NAME[i % LOCATION_NAME.length]}!`
      );
    }
    return fun;
  }
}); /*jquery listener close*/
//remainer i % array.length
