// const mySkills = [
//   "Java",
//   "Javascript",
//   "Ruby on Rails",
//   "Ruby",
//   "Adobe Photoshop",
//   "Cascading Style Sheet (CSS)",
//   "React.js",
//   "React/Redux",
//   "HTML",
//   "SCSS",
//   "SASS",
//   "Firebase",
//   "PostgreSQL"
// ];

function makeSentence(array) {
  let string = "";
  array.forEach((word, index) => {
    if (index !== array.length - 1) {
      string = string.concat(word + ", ");
    } else {
      string = string.concat("and " + word);
    }
  });
  return string;
}

function commonValues(arr1, arr2) {
  return arr1.filter(function(value) {
    return arr2.indexOf(value) > -1;
  });
}
let founderName = $("a.profile-link")[0].text.split(" ")[0];
let jobTitle = $("div.title a")[0].text;
let company = $("a.startup-link")[0].text;
let jobTags = $.trim($("div.tags")[0].textContent).split(" · ");
let mySkills = [
  "Java",
  "Javascript",
  "Ruby on Rails",
  "Ruby",
  "Adobe Photoshop",
  "Cascading Style Sheet (CSS)",
  "React.js",
  "React/Redux",
  "HTML",
  "SCSS",
  "SASS",
  "Firebase",
  "PostgreSQL"
];

const createMessage = (founder, title, company, jobTags) =>
  "Hello " +
  founder +
  "," +
  "\nI am a Software Engineer, and I would to apply for the position of " +
  title +
  " over at " +
  company +
  ". I am experienced in " +
  makeSentence(commonValues(jobTags, mySkills)) +
  " and there's no time like the present to learn something new. Problem Solving is my biggest drive, I love tackling challenges. As you're no doubt aware, this blurb seems generic, and thats because it is. This message is 100% automated, and thats why I think you should hire me. \nBest,\nWadah Adlan";

const apply = () => {
  if ($(".add-note-button > a.g-button.blue:visible").length == 0) {
    $(".browse_startups_table_row:visible")
      .first()
      .click();
  }
  $(".add-note-button > a.g-button.blue:visible")
    .first()
    .click();
  let founderName = $("a.profile-link")[0].text.split(" ")[0];
  let jobTitle = $("div.title a")[0].text;
  let company = $("a.startup-link")[0].text;
  let tags = $.trim($("div.tags")[0].textContent).split(" · ");
  $(".interested-note:visible")
    .first()
    .val(createMessage(founderName, jobTitle, company));
  $("a.g-button.blue.interested-with-note-button:visible")
    .first()
    .click();

  let message = `Hello  $(founderName), \n I am a Software Engineer, and I would really love to apply for the position of $(jobTitle) at $(company)`;
  console.log("I am well versed in " + makeSentence(tags));
  console.log("Job Title: " + jobTitle);
  console.log("Company: " + company);
  debugger;
  // $(".js-done").click();
  $("html, body").animate({
    scrollTop: $(document).height() - $(window).height()
  });
  setTimeout(apply, 4000);
};

const $button = $("<input>");
$button.attr({
  type: "button",
  id: "applyAll",
  value: "Apply to All The Jobs!!!"
});
$button.addClass("g-button blue interested-button");
$button.click(() => {
  apply();
});

const insertApplyButton = () => {
  console.log("testing chrome reload");
  let oldButton = $("button.c-button.c-button--transparent");
  if (oldButton.length > 0) {
    console.log(oldButton);
    return oldButton.replaceWith($button);
  } else {
    console.log("retrying");
    setTimeout(insertApplyButton, 500);
  }
};
//
// if (currentPage === "https://angel.co/jobs") {
//   insertApplyButton();
// }

// $( document ).ready(function() {
//
// })

let currentPage = window.location.href;
setInterval(() => {
  debugger
  if (currentPage === "https://angel.co/jobs") {
    insertApplyButton();
  }
}, 2000);
