//counters
let guesses = 0; //how many guesses made
let hints = 0; //how many hints given
let cheats = 0;
let i = 0; //which question we're on
let quest = []; //array of question objects
let time = 0; //starts with first click
let startTime = 0;
let endTime = 0;
let markers = []; //all the places we've covered
const shakeIcon = "img/shakeIcon.png"; //Shakespeare location icon
const shakeIconSmall = "img/shakeIconSmall.png"; //heart location icon for world map
let marker; //single marker generated with each right answer
let worldMarkers = []; //used for final animation
let worldMap;

//elements
let introText = document.getElementById("introText");
let mainText = document.getElementById("mainText");
let displayIcon = document.getElementById("icon");
let questionNumber = document.getElementById("questionNumber");
let caption = document.getElementById("caption");
let mainImage = document.getElementById("mainImage");
let shakeImage = document.getElementById("shakeImage");


let answerBox = document.getElementById("answerBox");

let congratsText = document.getElementById("congratsText");
let congratsTitle = document.getElementById("congratsTitle");
let map; //map generated after each correct question

let firstButton = document.getElementById("firstButton");
let askButton = document.getElementById("askButton");
let cheatButton = document.getElementById("cheatButton");
let nextButton = document.getElementById("nextQuestionButton");

answerBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    askButton.click()

  }
});

// positive responses
const posResponse = [
  " Bravo!",
  " Congratulations!",
  " Excellent!",
  " Good Going!",
  " Good Work!",
  " Nice Work!",
  " Wow, I didn't think you'd get that!",
  " You did it!",
  " You're an inspiration!",
];
//negative responses
const negResponse = [
  " I almost thought you had it!",
  " It's okay. This is a difficult one.",
  " Maybe next time!",
  " Nice try!",
  " Nope!",
  " Oh, too bad!",
  " Perhaps you'll get it next.",
  " Sorry!",
  " That's not it!",
];

//question constructor
class Question {
  constructor(question, answer, hint, icon, congrats, location) {
    this.answer = answer;
    this.congrats = congrats;
    this.hint = hint;
    this.icon = icon;
    this.location = location;
    this.question = question;
    this.pushToQuest = function () {
      quest.push(this);
    };
    this.pushToMarkers = function () {
      markers.push(this.location);
    };

    this.pushToQuest();
    this.pushToMarkers();
  }
}

// Question 0 input
let answer0 = [
  "scotland",

];
let hint0 = [
  "It starts with an 's'.",
  "It is part of the United Kingdom."
];
let icon0 = "fad fa-users-crown";
let question0 = "Macbeth bloodies his hands for the crown in this country.";
let congrats0 =
  "Medieval Scotland is where the majority of this tale transpires.";
let location0 = [57.07534583112011, -4.391505620419581];

// Question 1 input
let answer1 = ["verona"];
let hint1 = [
  "It starts with a 'V'.",
  "They speak Italian there."
];
let icon1 = "fad fa-stars";
let question1 =
  "This fair city is where Romeo and Juliet fall for one another.";
let congrats1 =
  "The star-crossed lovers lived in Verona.";
let location1 = [45.45564967210432, 10.997322694533345];

// Question 2 input
let answer2 = ["denmark"];
let hint2 = [
  "It starts with a 'D'",
  "They speak Danish there."
];
let icon2 = "fad fa-skull";
let question2 =
  "Hamlet seeks to set things right as the prince of this country.";
let congrats2 =
  "Hamlet is the Prince of Denmark.";
let location2 = [55.57551548621094, 10.497419965237361];

// Question 3 input
let answer3 = ["milan", "milano"];
let hint3 = [
  "It starts with an 'M'",
  "They speak Italian there."
];
let icon3 = "fad fa-wind-warning";
let question3 =
  "Before being set adrift, Prospero is the rightful Duke of this city.";
let congrats3 =
  "Prospero was the rightful Duke of Milan.";
let location3 = [45.498017029527134, 9.210811550300548];

// Question 4 input
let answer4 = ["alexandria"];
let hint4 = [
  "It starts with an 'A'",
  "They speak Arabic there."
];
let icon4 = "fad fa-heart-broken";
let question4 =
  "Antony falls for the beautiful Cleopatra in this city.";
let congrats4 =
  "The aging Roman finds his new love in Alexandria.";
let location4 = [31.272721010811324, 29.979283744186812];

// Question 5 input
let answer5 = ["arden", "ardennes"];
let hint5 = ["It starts with an 'A'",
  "It's south of Birmingham and north of Paris."

];
let icon5 = "fad fa-trees";
let question5 =
  "As You Like it is a gender-bending story that begins in this forest";
let congrats5 =
  "This was a tricky one. While the play may likely take place in the Forest of Arden, near Shakespeare's hometown of Stratford-upon-Avon, others belive it is Ardennes, France.";
let location5 = [49.818045017442394, 4.6138445989870345];

// Question 6 input
let answer6 = ["venice"];
let hint6 = [
  "It starts with an 'V'",
  "They speak Italian there.",

];
let icon6 = "fad fa-skull-crossbones";
let question6 =
  "The tragedy of Othello takes place in this city at war with the Ottoman empire during the period.";
let congrats6 =
  "Othellos is the Moor of Veince, who murders his beloved Desdemona in the 1570s.";
let location6 = [45.50966883839887, 12.302070819475627];

// Question 7 input
let answer7 = ["athens"];
let hint7 = [
  "It starts with an 'A'",
  "They speak Greek there."
];
let icon7 = "fad fa-hand-holding-heart";
let question7 =
  "Shakespeare's Timon is based on a real person who lived in this city in the fifth century BCE.";
let congrats7 =
  "Timon of Athens would be a contemporary of Socrates and Pericles.";
let location7 = [37.99421119692187, 23.703241211044627];

// Question 8 input
let answer8 = ["france"];
let hint8 = [
  "It starts with an 'F'",
  "They speak French there.",

];
let icon8 = "fad fa-rings-wedding";
let question8 =
  "While some of All's Well That Ends Well is set in Italy, it begins in this country, where Bertram is compelled to marry Helena.";
let congrats8 =
  "Helena wins the hand of Bertram by healing the King of France no less--before he runts away to Italy.";
let location8 = [48.85667057298963, 2.348500125436908];

// Question 9 input
let answer9 = ["adriatic"];
let hint9 = [
  "It starts with an 'A'",
  "It sits between Italy and Montenegro.",
];
let icon9 = "fad fa-water";
let question9 = "The Twelfth Night takes place in Illyria, the ancient name for this coast.";
let congrats9 =
  "The Twelfth Night takes place on the coast of the Adriatic Sea, where we can fine Serbia, Slovenia, Bosnia, Albania, Croatia, and Montenegro.";
let location9 = [42.07258647536659, 17.280736566121995];



const q0 = new Question(
  question0,
  answer0,
  hint0,
  icon0,
  congrats0,
  location0
);
const q1 = new Question(
  question1,
  answer1,
  hint1,
  icon1,
  congrats1,
  location1
);

const q2 = new Question(
  question2,
  answer2,
  hint2,
  icon2,
  congrats2,
  location2
);

const q3 = new Question(
  question3,
  answer3,
  hint3,
  icon3,
  congrats3,
  location3
);

const q4 = new Question(
  question4,
  answer4,
  hint4,
  icon4,
  congrats4,
  location4
);

const q5 = new Question(
  question5,
  answer5,
  hint5,
  icon5,
  congrats5,
  location5
);

const q6 = new Question(
  question6,
  answer6,
  hint6,
  icon6,
  congrats6,
  location6
);
const q7 = new Question(
  question7,
  answer7,
  hint7,
  icon7,
  congrats7,
  location7
);
const q8 = new Question(
  question8,
  answer8,
  hint8,
  icon8,
  congrats8,
  location8
);
const q9 = new Question(
  question9,
  answer9,
  hint9,
  icon9,
  congrats9,
  location9
);

// functions

start(); //starts timer

//first time the button is pressed
function ask() {
  mainText.innerHTML = quest[i].question; //show question
  introText.style.display = "none"; //removes intro text
  firstButton.style.display = "none"; //removes first button
  askButton.style.display = "block"; //adds submission button
  cheatButton.style.display = "block"; //adds cheat button
  answerBox.style.display = "block"; //provides a place to answer
  answerBox.value = ""; //clear any values
  answerBox.placeholder = "Type your answer here..."; //placeholder for answer
  mainImage.style.display = "none"; //remove image and caption
  displayIcon.innerHTML = `<i class="fa-10x ${quest[i].icon}"></i>`; //show question icon
  questionNumber.style.display = "block"; //adds submission button
  questionNumber.innerHTML = `Question ${i + 1} of ${quest.length}.`;

}

//test answers
function testSubmission(submission) {
  if (submission) {
    submission = convert(submission);
    if (isInArray(submission)) {
      // right answer
      $("#modal").modal({
        backdrop: true
      }, "handleUpdate"); //open modal popup
      congratsTitle.innerHTML = `<i class="${quest[i].icon}"></i>` + correct(); //show answer title
      congratsText.innerHTML = quest[i].congrats; //show answer text
      initMap(); //show answer location
      autoRotate();
    } else {
      //wrong answer
      guesses++;

      //every 5 wrong answers provide hint
      if (guesses % 3 == 0) {
        window.alert(
          "Hint: " +
          quest[i].hint[
            Math.floor(Math.random() * Math.floor(quest[i].hint.length)) //randomize the hint
          ]
        );
        hints++;
      } else {
        window.alert(inCorrect());
      }
    }
  } else {
    window.alert(
      "Please enter your answer in the box.");
  }
}

function cheat() {
  // right answer
  $("#modal").modal({
    backdrop: true
  }, "handleUpdate"); //open modal popup
  congratsTitle.innerHTML = `<i class="${quest[i].icon}"></i>` + "Well, you're a cheater! "; //show answer title
  congratsText.innerHTML = quest[i].congrats; //show answer text
  initMap(); //show answer location
  autoRotate();
  cheats++;

}

//clean textarea entry
function convert(submission) {
  submission = submission.toLowerCase().trim().split(/,| /); // convert words to lowercase, trims extra spaces, splits into array of words
  return submission;
}

//checks if submission is in the question answer array
function isInArray(cleanResponse) {
  for (let j = 0; j < cleanResponse.length; j++) {
    if (quest[i].answer.includes(cleanResponse[j])) {
      return true;
    }
  }
}

// return random correct response string
function correct() {
  response =
    posResponse[Math.floor(Math.random() * Math.floor(posResponse.length))]; //randomize a correct response message
  return response;
}

// return random incorrect response string
function inCorrect() {
  response =
    negResponse[Math.floor(Math.random() * Math.floor(negResponse.length))]; //randomize incorrect response message
  return response + " Please try again.";
}

//move to next question
function nextQuestion() {
  i++;
  if (i >= quest.length) {
    completed();
  } else {
    ask();
  }
}

//timer start and end
function start() {
  startTime = new Date();
}

function end() {
  endTime = new Date() - startTime;
  endTime /= 60000;
  time = Math.round(endTime);
}

function completed() {
  {
    end(); //end timer
    mainText.innerHTML = '<i class="fad fa-trophy-alt"></i>Congratulations!';
    introText.style.display = "block";

    //display time it took
    if (time < 1) {
      introText.innerHTML = `You successfully completed the challenge in less than a minute! That can't be right!? `;
    } else if (time == 1) {
      introText.innerHTML = `You successfully completed the challenge in one minute! That can't be right!? `;
    } else {
      introText.innerHTML = `You successfully completed the challenge in ${time} minutes! `;
    }

    //display how many (incorrect) guesses
    if (guesses == 1) {
      introText.innerHTML += `It took you ${guesses} guess, `;
    } else {
      introText.innerHTML += `It took you ${guesses} guesses, `;
    }

    //display how many hints received
    if (hints == 1) {
      introText.innerHTML += ` ${hints} hint, `;
    } else {
      introText.innerHTML += ` ${hints} hints, `;
    }

    //display how many cheats received

    if (cheats == 0) {
      introText.innerHTML += `and you didn't cheat once! `;
    } else if (cheats == 1) {
      introText.innerHTML += `and you cheated once! `;
    } else {
      introText.innerHTML += `and you cheated ${cheats} times! `;
    }

    firstButton.style.display = "none";
    askButton.style.display = "none";
    cheatButton.style.display = "none";
    answerBox.style.display = "none";
    questionNumber.style.display = "none";
    mainImage.style.display = "block";
    caption.innerHTML = "The home of Shakespeare in Stratford-upon-Avon.";
    displayIcon.style.display = "none";
    mainImage.style.display = "true";
    shakeImage.src = "img/home.jpg";
  }

  window.setTimeout(launchLastModal, 3000);
}

function launchLastModal() {
  $("#lastModal").modal({
    backdrop: true
  }, "handleUpdate"); //open last modal popup
  initWorldMap();
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: quest[i].location[0],
      lng: quest[i].location[1],
    },
    zoom: 3,
    disableDefaultUI: true,
  });

  marker = new google.maps.Marker({
    position: {
      lat: quest[i].location[0],
      lng: quest[i].location[1]
    },
    map: map,
    icon: shakeIcon,
    animation: google.maps.Animation.DROP,
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function rotate90() {
  const heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setTimeout(rotate90, 5000);
    window.setTimeout(rotate90, 5000);
  }
}

function initWorldMap() {
  worldMap = new google.maps.Map(document.getElementById("worldMap"), {
    center: {
      lat: 52.19562411205975, // center on Shakespeare's birthplace
      lng: -1.6945604787307895,
    },
    zoom: 2,
    disableDefaultUI: true,
  });
  worldMap.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng);
  });
  drop();
}

function drop() {
  clearWorldMarkers();

  for (let j = 0; j < markers.length; j++) {
    addWorldMarkerWithTimeout({
        lat: markers[j][0],
        lng: markers[j][1]
      },
      j * 1000
    );
  }
}

function addWorldMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    worldMarkers.push(
      new google.maps.Marker({
        position: position,
        map: worldMap,
        icon: shakeIconSmall,
        animation: google.maps.Animation.DROP,
      })
    );
  }, timeout);
}

function clearWorldMarkers() {
  for (let i = 0; i < worldMarkers.length; i++) {
    worldMarkers[i].setMap(null);
  }
  worldMarkers = [];
}

function placeMarkerAndPanTo(latLng) {
  new google.maps.Marker({
    position: latLng,
    map: worldMap,
    icon: shakeIcon,
    draggable: true,
  });
  worldMap.panTo(latLng);

  placeMarkerAndPanTo = undefined;
}