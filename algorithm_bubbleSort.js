//schwer: alle Tipps werden angezeigt, mittel: zwei Tipps werden angezeigt, leicht: nur ein Tipp wird angezeigt
var help_information = ["Schreibe einen Algorithmus, der die Zahlen aufsteigend sortiert. \
    Dabei sollen immer die zwei nebeneinanderliegenden Nachbarn vertauscht werden, außer, \
    sie sind bereits in der richtigen Reihenfolge. </br>", 
    "Zur Überprüfung, ob zwei Nachbarn in einem Arraydurchlauf vertauscht wurden, verwende die Variable swapped. </br>",
    "Du benötigst zwei Schleifen: eine um einmal über das Array zu iterieren, und eine um solange über das Array zu iterieren, bis alle Elemente sortiert sind. </br>"
    ]

// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}
//
//// Function to print an array 
//function printArray(arr, size) {
//  var i;
//  for (i = 0; i < size; i++)
//      console.log(arr[i] + " ");
//}

// Driver program
//var n = arr.length;
//bubbleSort(arr, n);
//console.log("Sorted array: ");
//printArray(arr, n);



function checkCode() {
    if (difficulty == -1) {
        alert("Wähle zuerst einen Schwierigkeitsgrad.")
        return
    }
    allow_show_solution = true
    var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
    var whole_program = ""; 
    var program_code_section = document.getElementById("algorithm_implementation")
    for (var i = 0; i < program_code_section.children.length; i++) {
        if (program_code_section.children[i].id.substring(0,11) == "given_code-") {
            console.log("given code " + i)
            whole_program += lines[i] + "\n"
        } else if (program_code_section.children[i].id.substring(0,13) == "program_line-") {
            console.log("program_line-" + i)
            var text_container = document.getElementById("program_line-" + i).children[0]
            if (text_container == null) {
                console.error("input field not found")
                return
            }
            var text = text_container.value
            // if (text == null ||text == "") {
            //     console.error("at least one input field is empty")
            //     return
            // }
            whole_program += text + "\n"
        }
    }
    var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
    var arr_copy = arr.slice(); 
    var n = arr_copy.length;
    whole_program = "("+whole_program+")(arr_copy, n)"
    try {
        eval(whole_program)
        console.log("result1_eval: "+ JSON.stringify(arr_copy))
    } catch(e) {
        alert("Dein Code konnte nicht kompiliert werden.")
    }

    if(JSON.stringify(arr.sort()) != JSON.stringify(arr_copy)) {
        alert("Dein Programm sortiert das Array nicht. Die Lösung sollte " + JSON.stringify(arr.sort()) + " sein. Ihre Lösung war " + JSON.stringify(arr_copy) + ".")
    }
    else {
        alert("Glückwunsch, dein Programm sortiert das Array!")
    }

    console.log(whole_program)
}

function show_algorithm_implementation_code() {
    var container = document.getElementById("algorithm_implementation")
    container.innerHTML = ""
    for (var i = 0; i < lines_formatted.length; i++) {
        if (lines_show[i] < difficulty) {
            container.innerHTML += "<div id=\"given_code-"+i+"\">" +  lines_formatted[i] + "</br>" + "</div>"
        }
        else {
            container.innerHTML += "<div id=\""+"program_line-" + i +"\"><input type=\"text\" >" + "</br>" + "</div>"
        }
    }
}

function showSolution() {
    if (allow_show_solution) {
        var container = document.getElementById("solution")
        container.innerHTML = ""
        for (var i = 0; i < lines_formatted.length; i++) {
            container.innerHTML += "<div id=\"solution-"+i+"\">" +  lines_formatted[i] + "</br>" + "</div>"
        }
    }
}

function show_help_information() {
    if (difficulty == -1) {
        alert("Wähle zuerst einen Schwierigkeitsgrad aus.")
    }
    if (allow_show_help_information) {
        var container = document.getElementById("help_information_window")
        container.innerHTML = ""
        var j = 4 - difficulty
        for (var i = 0; i < j; i++) {
            container.innerHTML += help_information[i]
        }
    }
    else {
        var container = document.getElementById("help_information_window").innerHTML = ""
    }
}

function setDifficulty(difficulty_new) {
    difficulty = difficulty_new 
    show_algorithm_implementation_code()
    show_help_information()
}

function switch_help_information() {
    //allow_show_help_information = !allow_show_help_information
    //if (allow_show_help_information) {
    //    document.getElementById("button_help_information").innerText = "Tipps verbergen"
    //} else {
    //    document.getElementById("button_help_information").innerText = "Tipps anzeigen"
    //}
    allow_show_help_information = document.getElementById("checkbox_help_information").checked
    show_help_information()
}

function show_next_algorithm() {
    alert("not yet implemented")
}

var difficulty = -1
var allow_show_help_information = false
var allow_show_solution = false
            //   [0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0]
var lines_show = [0,0,0,1,2,1,2,3,3,3,2,0,0,1,2,0,0] // [0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0] // 0: immer anzeigen , 1: schwer, 2: mittel, 3: leicht


var lines_formatted = ["function bubbleSort(arr, n) {",
                        "&emsp;var i, j, temp;",
                        "&emsp;var swapped;",
                        "&emsp;for (i = 0; i < n - 1; i++) {",
                        "&emsp;&emsp;swapped = false;",
                        "&emsp;&emsp;for (j = 0; j < n - i - 1; j++) {",
                        "&emsp;&emsp;&emsp;if (arr[j] > arr[j + 1]) {",
                        "&emsp;&emsp;&emsp;&emsp;temp = arr[j];",
                        "&emsp;&emsp;&emsp;&emsp;arr[j] = arr[j + 1];",
                        "&emsp;&emsp;&emsp;&emsp;arr[j + 1] = temp;",
                        "&emsp;&emsp;&emsp;&emsp;swapped = true;",
                        "&emsp;&emsp;&emsp;}",
                        "&emsp;&emsp;}",
                        "&emsp;&emsp;if (swapped == false)",
                        "&emsp;&emsp;break;",
                        "&emsp;}",
                        "}"]

var lines = ["function bubbleSort(arr, n) {",
              "var i, j, temp;",
              "var swapped;",
              "for (i = 0; i < n - 1; i++) {",
              "swapped = false;",
              "for (j = 0; j < n - i - 1; j++) {",
              "if (arr[j] > arr[j + 1]) {",
              "temp = arr[j];",
              "arr[j] = arr[j + 1];",
              "arr[j + 1] = temp;",
              "swapped = true;",
              "}",
              "}",
              "if (swapped == false)",
              "break;",
              "}",
              "}"]