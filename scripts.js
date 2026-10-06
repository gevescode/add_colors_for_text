// 1. Declare required elements once at the top of the file
const p1 = document.getElementById("p1");
const div2 = document.getElementById("div2");
const button1 = document.getElementById("button1");

function get_color(){
    const colorsList = ["red", "orange", "yellow", "green", "blue", 
        "purple", "pink", "brown", "black", "gray", "silver", "gold", 
        "beige", "lavender", "coral", "olive", "teal", "lime", 
        "indigo", "salmon"];
    let number_color = Math.floor(Math.random() * colorsList.length);
    return colorsList[number_color];
}

// 2. Create a new element, assign the class, and append it to div2
function new_input_color(){
    const new_input = document.createElement("input");
    new_input.type = "color";
    new_input.value = get_color();
    new_input.className = "input_color";
    div2.append(new_input);
}

// 3. Listen for clicks across the entire page (Event Delegation)
document.body.addEventListener('click', function(event) {
    // Check if the clicked element has the 'input_color' class
    if (event.target.classList.contains('input_color')) {
        event.preventDefault(); // Prevent the color picker palette from opening
        p1.style.color = event.target.value; // event.target refers to the clicked input
    }
});

// 4. Attach click event listener to the add button
button1.addEventListener('click', new_input_color);