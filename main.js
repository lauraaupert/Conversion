// if (window.find("ft" || "feet")) {
//     console.log(window.find("ft" || "feet"))
// }

//suggestions for finding and replacing window text

//jquery
// if (window.find("ft" || "feet")) {
// $("body").children().each(function () {
//     console.log($(this).children())
//     console.log($( "feet" ).find( $(this).html("feet") ))

//     $( "body" ).find( $(this).html("feet") ).css( "background-color", "red" );
// //     $(this).html("feet").attr("style", "background-color: red")
// //     // $(this).html( $(this).html().replace("feet","$") );
// //     // $(this).html( $(this).html().attr("style", "background-color: yellow") );

// });
// }

//javascript


function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;

let valuesToConvert = [];

for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    if (textnodes[i].nodeValue.toLowerCase() === "feet") {
        // textnodes[i].parentNode.addAttribute("style", "background-color: red")
        valuesToConvert.push(textnodes[i].parentNode)
        console.log(textnodes[i])
    }
    // textnodes[i].nodeValue = _nv.toLowerCase().replace("feet","HELLO")
    // .classList.add("convert");
}

console.log(valuesToConvert)

valuesToConvert.forEach(element => {
    element.classList.add("convert");
})