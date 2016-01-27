 function visitContinents() {
   var continents = ["Australia", "Africa","Antarctica", "Eurasia","America"];
   var response, count = 0;
    for(var index=0; index < continents.length; index++) {
         response = confirm("Have you been to " + continents[index] + "?");
         if(response) count++;
    }

    alert("You have been to " + count + " continents!");
 }


 function forInLoop(){

   var continents = ["Australia", "Africa","Antarctica", "Eurasia","America"];
   var response, count = 0;

   for (var index in continents){
        response = confirm("Have you been to " + continents[index] + "?");
        if(response) count++;
   }
   alert("You have been to " + count + " continents!");

 }

  function forInObject(){
   var response, count=0;
   var onePerson = {intials:"DR", age:40, job:"Professor"};

   for(var property in onePerson) {
     alert(property + "=" + onePerson[property]);

   }

  }

  function forOfLoop(){

    var continents = ["Australia", "Africa","Antarctica", "Eurasia","America"];
    var response, count = 0;

    for (var continent of continents){
         response = confirm("Have you been to " + continent + "?");
         if(response) count++;
    }
    alert("You have been to " + count + " continents!");

  }

  // infinite loop

  function infiniteLoop() {

    for( ; ;) {

      alert("Wellcom!");
    }
  }

  function loopVarieties() {

    var number=1;
     for( ; number < 12; number++) {

        alert(number + " times 9 = " + number *9);
     }

     for (var rabbits = 2, generation = 1; generation <= 12; generation++, rabbits*=2) {
          alert("gen: " + generation + "total: " + rabbits);

     }

  }

  function loopControls() {

    var total_amount =0;

    while(true) {
    this_amount=prompt("How much in this account");
    this_amount=parseFloat(this_amount);
    if(this_amount>0)
       total_amount += this_amount;
    else
       break;

    }

    var year, great_years=[];
    for(year = 2014; year <= 2016; year++) {
      correct = confirm( year + " was great for you?");
      if(!correct) continue;
      great_years.push(year);
    }

    alert("Your great years were: " + great_years)

  }

  function rabbitSearch() {

    var pets = ["dog", "rabbit", "cat", "rabbit"];
    var rabbitPositions=[], startSearchAt=0;

    do {
      foundAt = pets.indexOf("rabbit", startSearchAt);
      if(foundAt != -1) {
        rabbitPositions.push(foundAt);
        startSearchAt= foundAt+1;
      }

    } while(foundAt !=-1)

    console.log(rabbitPositions);
    console.log(pets.lastIndexOf("cat"));
    console.log(pets.slice(1,2));
    console.log(pets.splice(1,1));
    console.log(pets.splice(1,0, "rat"));
    console.log(pets.splice(1,1, "cow", "ox"));
    console.log(pets);
    pets.forEach( function (element,index,array){
    console.log(index + " " + " " + element);
    });

    }

    function mapTest() {
      var square = function(e1) {return e1* e1; };
      var counter = 0;
      var results1 = [];
      var numbers = [1,2,3,4];
      var results = numbers.map(square);

      while(counter < numbers.length) {
         numbers.forEach( function (element, index, array){
                      results1[index] = element * element;});
        counter++;
      }
      console.log(results1);
      console.log(numbers);
      console.log(results);
  }


  function handleClick(event) {

   event.stopPropagation();
   var node = event.target;
   var thisPath = node.nodeName;

   while (node.parentNode) {

      node= node.parentNode;
      thisPath = node.nodeName + " > " + thisPath;

   }

   alert(thisPath);

  }

  function attachHandler(node) {

     if(node == null) return;
     node.onClick= handleClick;

     for(var i=0; i < node.childNodes.length; i++)

      attachHandler(node.childNodes[i]);

  }

  function change_color1() {

     document.body.childNodes[1].childNodes[1].style.color="red";

  }

  function change_color2() {

     document.getElementsByTagName("h2")[0].style.color = "yellow";

  }

  function change_color3() {

     document.getElementById("cute_text").style.color="blue";

     the_node=document.getElementById("cute_text");
     the_node.setAttribute("style","color:red");

  }

  function createAndAddNodes()  {

     var newItem=document.createElement("hr");
     var destParent= document.getElementsByTagName("body")[0];
     destParent.insertBefore(newItem, destParent.firstChild);

     var result= document.createTextNode("This is dynamically added Text!");
     document.getElementById("cute_text").appendChild(result);
  }

  function deleteNode() {

    var this_node=document.getElementById("cute_text");
    this_node.parentNode.removeChild(this_node);

    var theNode= document.getElementById("theBody");

    while(theNode.firstChild)
        theNode.removeChild(theNode.firstChild);

  }

  function cloneNodes() {

    var the_node=document.getElementById("theBody").childNodes[3];
    var the_clone=the_node.cloneNode(true);
    document.getElementById("theBody").appendChild(the_clone);

  }

 function change_color(new_color){

   document.getElementById("cute_text").style.background=new_color;

 }

 function set_things_up() {
    var wait_duration = prompt("how long do you want to sleep?");
    setTimeout(show_wake_up_message, wait_duration);

 }

 function show_wake_up_message(){
   alert("wake up");
 }

 var the_timer, x_position = 0, the_image;

 function set_timer() {
     the_image=document.getElementById("imgs");
     x_position=x_position+1;
     the_image.style.left=x_position;
     the_timer = setTimeout(set_timer, 50);
 }

 var the_timer_interval;

 function setInter() {

  the_timer_interval=setInterval(show_wake_up_message, 8000);

 }

var int_timer;
 function do_timer() {

   the_image=document.getElementById("imgs");
   x_position=x_position+1;
   the_image.style.left=x_position;

 }

 //window.onload=setInter;
 window.addEventListener("load",set_timer);
 window.addEventListener("load",int_timer=setInterval(do_timer,50));
 window.addEventListener("load",setInter);

 var theBody= document.getElementById("theBody");
 theBody.removeEventListener("load",setInter);
