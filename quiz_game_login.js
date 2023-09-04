
function addUser() {
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;

    if (player1Name.trim() === "" || player2Name.trim() === "") {
        alert("Please enter both player names.");
    } else {
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        
        window.location.href = "quiz_game_page.html";
    }
}



function send() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const questionHeader = document.createElement("h3");
    questionHeader.textContent = `${num1} X ${num2}`;

    const answerInput = document.createElement("input");
    answerInput.setAttribute("type", "number");
    answerInput.setAttribute("placeholder", "Your Answer");

    const checkButton = document.createElement("button");
    checkButton.textContent = "Check";
    checkButton.addEventListener("click", checkAnswer);

    const questionDiv = document.createElement("div");
    questionDiv.appendChild(questionHeader);
    questionDiv.appendChild(answerInput);
    questionDiv.appendChild(checkButton);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
    outputDiv.appendChild(questionDiv);

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    imput_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br<br><button class='btn btn-info'"
    row = question_number + imput_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
