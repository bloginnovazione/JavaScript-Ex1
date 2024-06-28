<!DOCTYPE html>
<html lang="en">


<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
  function onMouseClick() {
     document.getElementById("parag").style.fontWeight = "bold";
     document.getElementById("parag").style.backgroundColor = "yellow";
   }
   function onMouseOverEvent() {
     document.getElementById("parag").style.textDecoration = "underline";
     document.getElementById("parag").style.backgroundColor = "orange";
   }
   function onMouseOutEvent() {
     document.getElementById("parag").style.fontSize = "16px";
     document.getElementById("parag").style.backgroundColor = "lightblue";
   }
    </script>
</head>

<body>
    <p id="parag" onclick='onMouseClick()'  onmouseover="onMouseOverEvent()" onmouseout="onMouseOutEvent()">Anything that can go wrong will go wrong</p>
</body>
</html>
