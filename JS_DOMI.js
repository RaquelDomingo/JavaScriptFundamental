<!DOCTYPE html>
<html>
<head>
    <title>JS DOM I</title>
</head>
<body>
    <ul id="main">
        <!-- this is empty-->
    </ul>
    <div id="target">
        
    </div>

    <script>
    function appendList(array, id){
        for (let i = 0; i < array.length; i++){
            let e = document.createElement("li")
            e.innerHTML = array[i];
            document.getElementById(id).appendChild(e);
        }
    };
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
    appendList(students, target_id);

    {/*superAppend*/}
    function superAppend(array, element, id){
        for(let i = 0; i<array.length; i++){
            let e = document.createElement(element);
            e.innerHTMl = array[i];
            document.getElementById(id).appendChild(e);
        }
    };
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
        
    appendList(students, target_id);
    superAppend(students, "h1", "target");
    </script>
</body>
</html>
