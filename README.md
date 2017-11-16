# Devil's Lists

> AngelList Auto Applier Chrome Extension

## Installation

```sh
Make sure you have Chrome Developer Enabled
Click 'Load Unpacked Extension' and navigate to the folder
```

## Usage

This extension will add a button to the top of your job search query
Clicking it will fire off a script that will iterate through all the jobs currently on the page, and apply to it.
(optionally) It will also send a message to the poster, with a predefine blurb detailing why you would be good at the job.
As an added feature, the script will read the tags of the posting, and compare it to a predefined list in the script of skills you possess. It will then find the intersection of the two lists, and return a series of matched skills, further 'personalizing' the letter.

```
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
  /* Your Skills Go Here */
];

const createMessage = (founder, title, company, jobTags) => {
  let skills =
    makeSentence(commonValues(jobTags, mySkills))
    return (
      /* Message goes here. You may interpolate any of the variables provided above*?
      )
};

```

## License

MIT © [Wadah Adlan](www.wadah.us)
