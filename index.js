koconst express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// const userRouter = require("./app/routes/user.routes");

var corsOptions = {
  origin: "http://localhost:4200",
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/user.routes")(app);
require("./app/routes/note.routes")(app);

const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// app.use(userRouter);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello Dev." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


<!DOCTYPE html>
<html>
<head>
    <title>Simple Timer</title>
</head>
<body>
    <div>
        <span id="timer">00:00</span>
    </div>
    <button id="startButton">Start</button>
    <button id="pauseButton">Pause</button>
    <button id="resumeButton">Resume</button>

    <script>
        let timer;
        let timerRunning = false;
        let timeInSeconds = 0;

        const timerDisplay = document.getElementById("timer");
        const startButton = document.getElementById("startButton");
        const pauseButton = document.getElementById("pauseButton");
        const resumeButton = document.getElementById("resumeButton");

        function updateTimerDisplay() {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerDisplay.textContent = formattedTime;
        }

        function startTimer() {
            if (!timerRunning) {
                timer = setInterval(function () {
                    timeInSeconds++;
                    updateTimerDisplay();
                }, 1000);
                timerRunning = true;
            }
        }

        function pauseTimer() {
            if (timerRunning) {
                clearInterval(timer);
                timerRunning = false;
            }
        }

        function resumeTimer() {
            if (!timerRunning) {
                startTimer();
            }
        }

        startButton.addEventListener("click", startTimer);
        pauseButton.addEventListener("click", pauseTimer);
        resumeButton.addEventListener("click", resumeTimer);
    </script>
</body>
</html>
