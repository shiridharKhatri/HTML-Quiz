let load = document.querySelector(".loading-screen");
const loadingFunc = () => {
  load.style.display = "none";
};
let quizQsn = [
  {
    question: "What does HTML stand for?",
    a: "Hypertext Makeup Language ",
    b: "Home Tool Markup Language",
    c: "Hyper Text Markup Language",
    d: "None Of The Above",
    ans: "ans3",
  },
  {
    question: "What do you mean by vlink?",
    a: "active link",
    b: "visited link",
    c: "visible link",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question:
      "Which of the following tag is used to define an image in an Html page?",
    a: `<pic>`,
    b: `<image>`,
    c: `<photo>`,
    d: `<img>`,
    ans: "ans4",
  },
  {
    question:
      " Which is the way to add script code directly into your HTML document?",
    a: "External JavaScript",
    b: "Internal JavaScript",
    c: `Both [A] and [B]`,
    d: " None of the above",
    ans: "ans2",
  },
  {
    question:
      "Which attribute is used to specify the path of the video in Html5?",
    a: "type",
    b: "name",
    c: " src",
    d: "alt",
    ans: "ans3",
  },
  {
    question:
      " Which attribute is used to specify horizontal frames of a frameset?",
    a: "cols",
    b: "rows",
    c: " alt",
    d: "hor",
    ans: "ans2",
  },
  {
    question: " Which tag is used to add a JavaScript in your HTML documents ?",
    a: `<script>`,
    b: `<style>`,
    c: `<link>`,
    d: "<stylesheet>",
    ans: "ans1",
  },
  {
    question: "Which of the following tag is used to bold the text",
    a: `<b>`,
    b: `<bold>`,
    c: `<i>`,
    d: `<em>`,
    ans: "ans1",
  },
  {
    question:
      "Which of the following tag is used to define an image in an Html page?",
    a: `<pic>`,
    b: `<image>`,
    c: `<photo>`,
    d: `<img>`,
    ans: "ans4",
  },
  {
    question: "How We know if the given tag contains id",
    a: `#contains`,
    b: `.contains`,
    c: `!contains`,
    d: `*congains`,
    ans: "ans1",
  },
  {
    question: "Who is the father of HTML?",
    a: `Rasmus Lerdorf`,
    b: `Tim Berners-Lee`,
    c: `Brendan Eich`,
    d: `Sergey Brin`,
    ans: "ans2",
  },
  {
    question: "What is the correct syntax of doctype in HTML5?",
    a: `</doctype html>`,
    b: `<doctype html>`,
    c: `<doctype html!>`,
    d: `<!doctype html>`,
    ans: "ans4",
  },
  {
    question:
      "Which of the following is used to read an HTML page and render it?",
    a: `Web server`,
    b: `Web network`,
    c: `Web browser`,
    d: `Web matrix`,
    ans: "ans3",
  },
  {
    question: "In which part of the HTML metadata is contained?",
    a: `head tag`,
    b: `title tag`,
    c: `html tag`,
    d: `body tag`,
    ans: "ans1",
  },
  {
    question: "Which element is used to get highlighted text in HTML5?",
    a: `<u>`,
    b: `<mark>`,
    c: `<highlight>`,
    d: `<b>`,
    ans: "ans2",
  },
  {
    question: "Which of the following is not a HTML5 tag?",
    a: `<track>`,
    b: `<video>`,
    c: `<slider>`,
    d: `<source>`,
    ans: "ans3",
  },
  {
    question: "How do we write comments in HTML?",
    a: `</…….>`,
    b: `<!……>`,
    c: `</……/>`,
    d: `<…….!>`,
    ans: "ans2",
  },
  {
    question:
      "Which of the following is not the element associated with the HTML table layout?",
    a: `alignment`,
    b: `color`,
    c: `size`,
    d: `spanning`,
    ans: "ans2",
  },
  {
    question: "Which element is used for or styling HTML5 layout?",
    a: `CSS`,
    b: `PHP`,
    c: `jQuery`,
    d: `java`,
    ans: "ans1",
  },
  {
    question: `HTML is a subset of ___________`,
    a: `SGMT`,
    b: `SGML`,
    c: `SGME`,
    d: `XHTML`,
    ans: "ans2",
  },
  {
    question:
      "Which of the following HTML tag is used to create an unordered list?",
    a: `<ol>`,
    b: `<ul>`,
    c: `<li>`,
    d: `<unorder>`,
    ans: "ans2",
  },
  {
    question: `What is the work of <address> element in HTML5?`,
    a: `contains IP address`,
    b: `contains home address`,
    c: `contains url`,
    d: `contains contact details for author`,
    ans: "ans4",
  },
  {
    question:
      "Which of the following tag is used to create a text area in HTML Form?",
    a: `<textarea> </textarea>`,
    b: `<text></text>`,
    c: `<input type=”text” />`,
    d: `<input type=”textarea” />`,
    ans: "ans1",
  },
  {
    question: "Which tag is used to create a dropdown in HTML Form?",
    a: `<input>`,
    b: `<select>`,
    c: `<text>`,
    d: `<textarea>`,
    ans: "ans2",
  },
  {
    question: `Which attribute is not essential under iframe?`,
    a: `frameborder`,
    b: `width`,
    c: `height`,
    d: ` src`,
    ans: "ans1",
  },
];

let screen = document.getElementById("screen");
let options = document.querySelectorAll(".option");
let index = 0;
let right = 0,
  wrong = 0;
let audioRight = new Audio("correct.mp3");
let audioWrong = new Audio("wrong.mp3");
let totalLength = quizQsn.length;
const loadQsn = () => {
  if (index == totalLength) {
    return mainDiv();
  }
  let qsnCount = quizQsn[index];
  screen.innerHTML = qsnCount.question;
  options[0].innerText = qsnCount.a;
  options[1].innerText = qsnCount.b;
  options[2].innerText = qsnCount.c;
  options[3].innerText = qsnCount.d;
};
loadQsn();

const checkAns = () => {
  let answer;
  options.forEach((element) => {
    element.addEventListener("click", () => {
      answer = element.id;
      if (answer == quizQsn[index].ans) {
        index++;
        right++;
        audioRight.play();
        loadQsn();
      } else {
        index++;
        wrong++;
        audioWrong.play();
        loadQsn();
      }
      let numb = document.getElementById("nums");
      numb.innerHTML = `<h3>${index + 1} 0f ${totalLength}</h3>`;
    });
  });
};
checkAns();

let success = new Audio("success.mp3");
let fail = new Audio("fail.mp3");

const mainDiv = () => {
  let main = document.querySelector(".mainbox");
  if (right >= 13) {
    main.innerHTML = `
        <h1><i class="fa-brands fa-html5"></i> HTML5 Quiz Result</h1>
        <h3 id="winner"><i class="fa-solid fa-trophy"></i></h3>
        <h5>Congratulations</h5>
        <h6>You have scored ${right} out of ${totalLength} with ${wrong} wrong answer</h6>
        <button id="playAgain" onclick ="reload()">Play again</button>`;
    success.play();
  } else {
    main.innerHTML = `
        <h1><i class="fa-brands fa-html5"></i> HTML5 Quiz Result</h1>
        <h3 id="winner"><i class="fa-regular fa-face-frown-open"></i></h3>
        <h5>You need to practice more</h5>
        <h6>You have scored ${right} out of ${totalLength} with ${wrong} wrong answer</h6>
        <button id="playAgain" onclick ="reload()" >Play again</button>`;
    fail.play();
  }
  checkAns();
};

const reload = () => {
  location.reload();
};