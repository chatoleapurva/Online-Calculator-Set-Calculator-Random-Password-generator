let screen = document.getElementById('display');
buttons = document.querySelectorAll("button");
let screenValue = "";

// Add variables in input tag
// create a function called enterinput
function enterinput(input) 
{
    console.log(input);
    buttonText = input.value;
    screenValue +=buttonText;
    screen.value = screenValue;
}

for (item of buttons) 
{
    item.addEventListener("click", (e) => 
    {
        buttonText = e.target.innerText;
        if(buttonText == "X") 
        {
         buttonText = "*";
         screenValue +=buttonText;
         screen.value = screenValue;
        }
        else if(buttonText == "C") 
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") 
        {
            var result;
            try {
                result = eval(screenValue);
            } catch (error) {
                result = "Expression error";
            }
            screen.value = result;
        } 
        else 
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
}