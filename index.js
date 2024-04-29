
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let periodCount = document.getElementById("period-count")
let homeFoul = document.getElementById("home-foul")
let guestFoul = document.getElementById("guest-foul")
let homeCount = 0
let guestCount = 0
let currentPeriod = 1
let homeFoulCount = 0
let guestFoulCount = 0
let intervalId;


function incrementByOneHome() {
    homeCount += 1
    homeScore.textContent = homeCount
    highlightLeader()
}

function incrementByTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount
    highlightLeader()
}

function incrementByThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount
    highlightLeader()
}

function incrementByOneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
    highlightLeader()
}

function incrementByTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
    highlightLeader()
}

function incrementByThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
    highlightLeader()
}

function resetScore() {
    homeCount = 0
    guestCount = 0
    currentPeriod = 1
    homeFoulCount = 0
    guestFoulCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    periodCount.textContent = currentPeriod
    homeFoul.textContent = homeFoulCount
    guestFoul.textContent = guestFoulCount
    highlightLeader();
    clearInterval(intervalId);
    resetTimer();
    startTimer();
}

function highlightLeader() {
    if (homeCount > guestCount) {
        document.querySelector('.home-score-container').classList.add('highlight-leader')
        document.querySelector('.guest-score-container').classList.remove('highlight-leader')
    } else if (guestCount > homeCount) {
        document.querySelector('.home-score-container').classList.remove('highlight-leader')
        document.querySelector('.guest-score-container').classList.add('highlight-leader')    
    } else {
        document.querySelector('.home-score-container').classList.remove('highlight-leader')
        document.querySelector('.guest-score-container').classList.remove('highlight-leader') 
    }
}

// console.log(document.querySelector('.home-score-container').classList.add('highlight-Leader'))
// console.log(document.querySelector('.guest-score-container').classList.add('highlight-Leader'))

function changePeriod() {
    if (currentPeriod < 4) {
        currentPeriod += 1
    } else {
        currentPeriod = 1
    }
    periodCount.textContent = currentPeriod
    // Reset the timer
    clearInterval(intervalId); // Stop the timer interval
    resetTimer(); // Reset the timer to "00:00" 
    // Start the timer again
    startTimer(); // Call the function to start the timer
}

 function infcrementByOneFoulHome() {
        homeFoulCount +=1 
        homeFoul.textContent = homeFoulCount
 }
 
  function infcrementByOneFoulGuest() {
        guestFoulCount +=1 
        guestFoul.textContent = guestFoulCount
 }

// Get the timer element
let timerElement = document.getElementById('timer');

// Function to update the timer text
function updateTimer(minutes, seconds) {
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to reset the timer to "00:00"
function resetTimer() {
    updateTimer(0, 0); // Reset timer to "00:00"
}

// Start the timer
function startTimer() {
    let seconds = 0;
    let minutes = 0;
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 12) {
                clearInterval(intervalId); // Stop the timer when it reaches 12 minutes
                resetTimer(); // Reset the timer to "00:00"
                return;
            }
        }
        updateTimer(minutes, seconds);
    }, 1000); // Update timer every second
}

window.onload = function() {
    startTimer(); // Call startTimer function when the page loads
};

