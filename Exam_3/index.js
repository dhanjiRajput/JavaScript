let questions = [

  {
    "question": "How do you write 'Hello World' in an alert box?",
    "options": {
      "A": "msg('Hello World');",
      "B": "alertBox('Hello World');",
      "C": "alert('Hello World');",
      "D": "msgBox('Hello World');"
    },
    "correct": "alert('Hello World');"
  },
  {
    "question": "Which of the following is not a reserved word in JavaScript?",
    "options": {
      "A": "interface",
      "B": "throws",
      "C": "program",
      "D": "short"
    },
    "correct": "program"
  },
  {
    "question": "What is the correct way to write a JavaScript array?",
    "options": {
      "A": "var colors = (1:'red', 2:'green', 3:'blue')",
      "B": "var colors = 'red', 'green', 'blue'",
      "C": "var colors = ['red', 'green', 'blue']",
      "D": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    },
    "correct": "var colors = ['red', 'green', 'blue']"
  },
  {
    "question": "Which event occurs when the user clicks on an HTML element?",
    "options": {
      "A": "onchange",
      "B": "onclick",
      "C": "onmouseclick",
      "D": "onmouseover"
    },
    "correct": "onclick"
  },
  {
    "question": "How do you declare a JavaScript variable?",
    "options": {
      "A": "variable carName;",
      "B": "var carName;",
      "C": "v carName;",
      "D": "string carName;"
    },
    "correct": "var carName;",
  },
  {
    "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
    "code": "<p id='demo'>This is a demonstration.</p>",
    "options": {
      "A": "document.getElementById('demo').innerHTML = 'Hello World!';",
      "B": "document.getElementByName('demo').innerHTML = 'Hello World!';",
      "C": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
      "D": "document.getElement('p').innerHTML = 'Hello World!';"
    },
    "correct": "document.getElementById('demo').innerHTML = 'Hello World!';"
  },
  {
    "question": "How do you create a function in JavaScript?",
    "options": {
      "A": "function myFunction()",
      "B": "function:myFunction()",
      "C": "function = myFunction()",
      "D": "function => myFunction()"
    },
    "correct": "function myFunction()"
  },
  {
    "question": "How do you call a function named 'myFunction'?",
    "options": {
      "A": "call myFunction()",
      "B": "call function myFunction()",
      "C": "myFunction()",
      "D": "Call.myFunction()"
    },
    "correct": "myFunction()"
  },
  {
    "question": "How can you add a comment in JavaScript?",
    "options": {
      "A": "'This is a comment",
      "B": "<!--This is a comment-->",
      "C": "//This is a comment",
      "D": "*This is a comment*"
    },
    "correct": "//This is a comment"
  },
  {
    "question": "What will the following code return: Boolean(10 > 9)?",
    "options": {
      "A": "false",
      "B": "true",
      "C": "NaN",
      "D": "undefined"
    },
    "correct": "true"
  },
  {
    "question": "Which operator is used to assign a value to a variable?",
    "options": {
      "A": "*",
      "B": "x",
      "C": "=",
      "D": "-"
    },
    "correct": "="
  },
  {
    "question": "What is the correct JavaScript syntax to write 'Hello World'?",
    "options": {
      "A": "('Hello World')",
      "B": "document.write('Hello World')",
      "C": "response.write('Hello World')",
      "D": "('Hello World').document.write"
    },
    "correct": "document.write('Hello World')"
  },
  {
    "question": "Which method can be used to find the length of a string?",
    "options": {
      "A": "length()",
      "B": "getLength()",
      "C": "strlen()",
      "D": "length"
    },
    "correct": "length"
  },
  {
    "question": "Which built-in method sorts the elements of an array?",
    "options": {
      "A": "changeOrder(order)",
      "B": "order()",
      "C": "sort()",
      "D": "arrange()"
    },
    "correct": "sort()"
  },
  {
    "question": "Which of the following is a way to create an object in JavaScript?",
    "options": {
      "A": "var obj = {};",
      "B": "var obj = ();",
      "C": "var obj = [];",
      "D": "var obj = <>;"
    },
    "correct": "var obj = {};"
  },
  {
    "question": "How do you round the number 7.25 to the nearest integer?",
    "options": {
      "A": "Math.rnd(7.25)",
      "B": "Math.round(7.25)",
      "C": "rnd(7.25)",
      "D": "round(7.25)"
    },
    "correct": "Math.round(7.25)"
  },
  {
    "question": "How can you detect the client’s browser name?",
    "options": {
      "A": "navigator.appName",
      "B": "browser.name",
      "C": "client.navName",
      "D": "window.browser"
    },
    "correct": "navigator.appName"
  },
  {
    "question": "Which JavaScript method is used to access an HTML element by id?",
    "options": {
      "A": "getElementById()",
      "B": "getElement(id)",
      "C": "getElementByID()",
      "D": "getIdElement()"
    },
    "correct": "getElementById()"
  },
  {
    "question": "What is the correct syntax for referring to an external script called 'script.js'?",

    "options": {
      "A": "script name='script.js'",
      "B": "script src='script.js'",
      "C": "script href='script.js'",
      "D": "script ref='script.js'"
    },
    "correct": "script src='script.js'",
  },
];

//Function for Print Question
const uimaker = (item, index) => {
  let h3 = document.createElement("h3");
  h3.innerHTML = `${index + 1}.  ${item.question}`;

  let hr = document.createElement("hr");

  let span1 = document.createElement("h5");
  span1.innerHTML = item.options.A;

  let span2 = document.createElement("h5");
  span2.innerHTML = item.options.B;

  let span3 = document.createElement("h5");
  span3.innerHTML = item.options.C;

  let span4 = document.createElement("h5");
  span4.innerHTML = item.options.D;

  span1.addEventListener("click", () => {
    if (span1.innerHTML == item.correct) {
      span1.style.color = "green";
    } else {
      span1.style.color = "red";
    }
  })

  span2.addEventListener("click", () => {
    if (span2.innerHTML == item.correct) {
      span2.style.color = "green";
    } else {
      span2.style.color = "red";
    }
  })
  span3.addEventListener("click", () => {
    if (span3.innerHTML == item.correct) {
      span3.style.color = "green";
    } else {
      span3.style.color = "red";
    }
  })
  span4.addEventListener("click", () => {
    if (span4.innerHTML == item.correct) {
      span4.style.color = "green";
    } else {
      span4.style.color = "red";
    }
  })

  let div1 = document.createElement("div");
  div1.append(h3, hr, span1, span2, span3, span4);

  document.getElementById("show_data").append(div1);

  h3.setAttribute("class", "h3");
  hr.setAttribute("id", "hr");
  span1.setAttribute("class", "answer");
  span2.setAttribute("class", "answer");
  span3.setAttribute("class", "answer");
  span4.setAttribute("class", "answer");
  div1.setAttribute("id", "box");
}

//Call Function to Display
questions.map((item, index) => {
  uimaker(item, index);
})

//New Added Question
const handledata = (e) => {
  e.preventDefault();

  let flag = false;
  let flag1 = false;
  let push_new_question = {
    question: document.getElementById("add_question").value,

    options: {
      A: document.getElementById("a_answer").value,
      B: document.getElementById("b_answer").value,
      C: document.getElementById("c_answer").value,
      D: document.getElementById("d_answer").value,
    },
    correct: document.getElementById("correct_answer").value,
  }
  if (push_new_question.options.A != push_new_question.correct && push_new_question.options.B != push_new_question.correct && push_new_question.options.C != push_new_question.correct && push_new_question.options.D != push_new_question.correct) {
    alert("Enter Correct Answer");
  } else {
    flag = true;
    let user = "dk";
    let pass = "dk";

    let u = prompt("Enter User Name..");
    let p = prompt("Enter Password...");
    if (user != u && pass != p) {
      alert("Sorry....! You are Not Valid Admin to Add Queston...");
    }
    else {
      flag1 = true;
    }
  }

  if (flag && flag1) {
    questions.push(push_new_question);
    uimaker(push_new_question, questions.length - 1);
    document.getElementById("data").reset();
  }
}

document.querySelector("#data").addEventListener("submit", handledata);