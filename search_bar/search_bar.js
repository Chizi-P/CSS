//function button_search(){
//    var n = 1;
//    var element_button_search = document.getElementById('button_search').style;
//    var element_search = document.getElementById('search').style;
//    var element_i = document.getElementById('icon_search').style;
//    var a = setInterval(display_none_i,50);
//    function display_none_i(){
//        n -=0.1;
//        element_i.opacity = n ;
//        if(n == 0){
//            element_i.display = "none";
//            clearInterval(a);
//        }
//    }
//    element_button_search.backgroundColor = "white";
//    element_button_search.color = "black";
//    element_button_search.opacity = "1";
//    element_search.display = "block";
//    element_search.width = "160px";
//    element_search.height = "25px";
//}

//search bar
function focus_search_bar_placeholder(){
    document.getElementById('input_button_search').placeholder = "search..";
}
function unfocus_search_bar_placeholder(){
    document.getElementById('input_button_search').placeholder = "";
    document.getElementById('input_button_search').value = "";
}

//fa-search_button
//function click_fa-search_button(){
//    document.getElementById('fa-search').style.backgroundColor = "red";
//}

//html onsearch="myFunction()"

//

