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
  "PostgreSQL",
  "React Native"
];

const createMessage = (founder, title, company, jobTags) => {
  let skills =
    makeSentence(commonValues(jobTags, mySkills)) ||
    "Javascript, Ruby, and Python, and their various implementations;";

  return (
    "Hello " +
    founder +
    "," +
    "\nI am a Software Engineer, and I would to apply for the position of " +
    title +
    " over at " +
    company +
    ". I am experienced in " +
    skills +
    " and I feel there's no time like the present to learn something new. Problem Solving is my biggest motivator, as I love tackling challenges. As you're no doubt aware, this blurb seems generic, and thats because it is. This message is 100% automated, and thats why I think you should hire me. \nBest,\nWadah Adlan"
  );
};

const apply = index => {
  if ($(".add-note-button > a.g-button.blue:visible").length == 0) {
    $(".browse_startups_table_row:visible")
      .first()
      .click();
  }
  $(".add-note-button > a.g-button.blue:visible")
    .first()
    .click();
  let founder = $("textarea.interested-note")[index].placeholder.split(" ")[4];
  let title = $("div.title a")[index].text;
  let company = $("a.startup-link")[index].text;
  let jobTags = $.trim($("div.tags")[index].textContent).split(" · ");
  $(".interested-note:visible")
    .first()
    .val(createMessage(founder, title, company, jobTags));
  $("a.g-button.blue.interested-with-note-button:visible")
    .first()
    .click();

  $(".js-done").click();
  $("html, body").animate({
    scrollTop: $(document).height() - $(window).height()
  });
  index += 1;
  setTimeout(() => apply(index), 2000);
};

const $button = $("<input>");
$button.attr({
  type: "button",
  id: "applyAll",
  value: "Apply to All The Jobs!!!"
});
$button.addClass("g-button blue interested-button");
$button.on("click", () => {
  apply(0);
});

const insertApplyButton = () => {
  let oldButton = $("button.c-button.c-button--transparent");
  if (oldButton.length > 0) {
    return oldButton.replaceWith($button);
  } else {
    console.log("retrying");
    setTimeout(insertApplyButton, 500);
  }
};
//
let currentPage = window.location.href;
if (currentPage === "https://angel.co/jobs") {
  insertApplyButton();
}
