const popupNav = document.getElementById("openconsole");
const popUp = document.querySelector(".popup");
const modal = document.querySelector(".popup");
const quit = document.getElementById("closeconsole");
const projectPage = document.getElementById("projectPage");

//=======================
//Pop Up Box Show/Hide
//=======================
popupNav.addEventListener("click", function () {
  popUp.style.display = "block";
});

quit.addEventListener("click", function () {
  popUp.style.display = "none";
});
function quitForm() {
  let quitfrm = document.getElementById("closeconsole")[0];
  quitfrm.onclick = popUp.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

function closeWindow() {
  window.open("", "_parent", "");
  window.close();
}

// ========================================================================
//Console Commands
// ========================================================================
const KEY_CODES = [38];
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">portfolio</span>',
  about:
    "Hello,<br> my name is Csaba Tisics, I am a 24 year old junior web developer currently living in Vienna. <br>Extremely motivated to constantly develop my skills and grow professionally. Outside of coding, I like to go swimming, playing computer games or going for a tripp in the nature.",
  skills:
    '<span class="code">Languages: </span>HTML, CSS, JavaScript,  <br><span class="code">Technologies:</span> Git, NodeJs, jQuery<br><span class="code">Frameworks:</span> Bootstrap, Express, React',
  education:
    "Philological Gymnasium for talented students „Dezső Kosztolányi”.<br> Subotica, Serbia <br> Autodidactic learning Webdevelopment<br>(Online Courses, FreeCodeCamp, Youtube, Github, Stack Overflow...etc) <br> ",
  resume:
    "<a href='./Csaba_Tisics_Resume.pdf' class='code code-h'>Csaba Tisics resume.pdf</a>",
  experience:
    "I have done a few projects from different web developer bootcamps, which you can check out by going to the <a class='code code-h' href='/projects' target='_blank'>Projects</a> page, where you can view it online or on Github aswell. Unfortunately I have no working experience in the field yet, but I am very excited for a start! ",
  contact:
    'e-mail address: <span class="code">tisitycsaba@yahoo.com</span><br> Tel: <span class="code">+43 660 7943 525</span><br> Social:<ul class="socials"><li><a class=" code social-link" href="https://www.linkedin.com/in/csaba-tisics/" target="_blank" class="code">Linked In</a></li><br> <li><a class="social-link code" href="https://github.com/Csaba1995" target="_blank" >GitHub</a></li></ul>',
};
let userInput, terminalOutput;
/////////////////////////

const app = () => {
  userInput = document.getElementById("userInput");
  consoleInput = document.getElementById("dummyKeyboard");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus({ preventScroll: false });
  console.log("Application loaded");
};

//==================================
//Submit button in console
//==================================
const btn = document.getElementById("submit-btn");

btn.addEventListener("click", function () {
  const input = userInput.innerHTML.toLowerCase();
  let output;

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    consoleInput.value = "";
    userInput.innerHTML = "";
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
    userInput.innerHTML = "";
    consoleInput.value = "";
  }
  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

//=======================
// Catch input
//=======================
const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
    userInput.innerHTML = "";
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;

  var messageBody = document.querySelector("#style-1");
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
};

//============================================
//Inserting Key Codes
//============================================
const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    consoleInput.innerHTML = "";
    consoleInput.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
