
menu_list_array = ["Veg Margherita Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza"];
    
function getmenu(){
    var htmldata="<ol class='menulist'>"

    menu_list_array.sort();

    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
     document.getElementById("addTopings").style.display = "none";
}

function addTopings(){
    document.getElementById("addTopings").style.display = "block";
}

function addItem(){
    var item=document.getElementById("item").value;
    menu_list_array.push(item);
    getmenu();
    }