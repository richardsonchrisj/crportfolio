//list of questions
let questions = [
  {
    title: "le chien",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 0,
  },
  {
    title: "la chat",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "l'oiseau",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 2,
  },
  {
    title: "le poisson",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 3,
  },
]

//tail wagging (hint)
let tailwag = document.getElementById("tail")

let hintOption = document.getElementById("hint")

//ears raising (hint)
let eyebrow = document.getElementById("eyebrow")

//actual application object
let app = {
  start: function () {
    this.currPosition = 0
    this.score = 0

    // get alternatives
    let alts = document.querySelectorAll(".alternative")

    //check on click
    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index)
      })
    })
    //hint on hover
    alts.forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        // hint at correct answer
        this.hintAtAnswer(index)
      })
      element.addEventListener("focus", () => {
        // hint at correct answer
        this.hintAtAnswer(index)
      })
    })

    //don't hint after hover
    alts.forEach((element, index) => {
      element.addEventListener("mouseout", () => {
        // hint at correct answer
        this.endHint(index)
      })
    })

    //show first question
    this.showQuestion(questions[this.currPosition])
  },

  showQuestion: function (q) {
    // show question title
    let titleDiv = document.getElementById("quiz-title")
    titleDiv.textContent = q.title

    // show alternatives
    let alts = document.querySelectorAll(".alternative")

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index]
    })
  },

  checkAnswer: function (userSelected) {
    let currQuestion = questions[this.currPosition]

    if (currQuestion.correctAnswer == userSelected) {
      //correct
      console.log("Correct")
      this.score++
      this.showResult(true)
      //refresh stats
      this.updateStats()
    } else {
      //not correct
      console.log("Wrong")
      this.showResult(false)
      //refresh stats
      this.updateStats()
    }

    //increase position
    this.increasePosition()

    //show next question
    this.showQuestion(questions[this.currPosition])
  },

  increasePosition: function () {
    this.currPosition++

    if (this.currPosition == questions.length) {
      //Change this to OVER
      this.currPosition = 0
    }
  },

  hintAtAnswer: function (hovered) {
    if (hintOption.checked) {
      let currQuestion = questions[this.currPosition]

      if (currQuestion.correctAnswer == hovered) {
        //correct
        tailwag.style.animation = "wag .2s infinite"
      } else {
        eyebrow.style.animation = "move2 6s infinite"
      }
    }
  },

  endHint: function (hovered) {
    let currQuestion = questions[this.currPosition]
    tailwag.style.animation = "wag 2s infinite"
    eyebrow.style.animation = "none"
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score")
    scoreDiv.textContent = "Your score: " + this.score
  },

  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result")
    let result = ""

    //checks
    if (isCorrect) {
      result = "Correct! "
    } else {
      //get the current question
      let currQuestion = questions[this.currPosition]

      //get correct asnwer (index)
      let correctAnswIndex = currQuestion.correctAnswer

      //get correct answer (text)
      let correctAnswText = currQuestion.alternatives[correctAnswIndex]

      result = `Sorry, the right answer was ${correctAnswText}.`
    }
    resultDiv.textContent = result
  },
}

app.start()
