// let navbar = document.querySelector('.header .navbar');

// window.onscroll=()=>{
//     navbar.classList.remove('active');
//     if(window.scrollY>0){
//         document.querySelector('.header').classList.add('active');
//     }else{
//         document.querySelector('.header').classList.remove('active');
//     }
// };

document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn")) {
        showMainPage();
    }
});

function showSignup() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("signup-box").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

function showMainPage() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("main-page").style.display = "block";
}



function signup() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let otp = document.getElementById("otp").value;

    if (!username || !email || !password || !otp) {
        alert("Please fill all fields.");
        return;
    }

    fetch("php/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "username=" + encodeURIComponent(username) +
            "&email=" + encodeURIComponent(email) +
            "&password=" + encodeURIComponent(password) +
            "&otp=" + encodeURIComponent(otp)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Signup successful! Redirecting...");
                window.location.href = "index.html"; // Redirect to login page
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            alert("Network error: " + error);
        });
}


function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    fetch("php/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                window.location.href = "MoviesCorn.php"; // Redirect after login
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            alert("Network error: " + error);
        });
}


// function login() {
//     let username = document.getElementById("login-username").value;
//     let password = document.getElementById("login-password").value;

//     if (username === "" || password === "") {
//         alert("Please enter both username and password.");
//         return;
//     }

//     fetch("php/login.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password),
//         credentials: 'include' // 👈 IMPORTANT: this keeps the session
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === "success") {
//             window.location.href = "MoviesCorn.php";
//         } else {
//             alert("Error: " + data.message);
//         }
//     })
//     .catch(error => {
//         alert("Network error: " + error);
//     });
// }




function submitRequest() {
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("request-email").value;
    let movieName = document.getElementById("movie-name").value;
    let note = document.getElementById("note").value;

    if (!fullName || !email || !movieName || !note) {
        alert("Please fill in all required fields.");
        return;
    }

    fetch("./php/submit_request.php", {  // Ensure 'php/' is correct
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "full_name=" + encodeURIComponent(fullName) +
              "&email=" + encodeURIComponent(email) +
              "&movie_name=" + encodeURIComponent(movieName) +
              "&note=" + encodeURIComponent(note)
    })
    
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Movie request submitted successfully!");
            document.getElementById("movie-request-form").reset();
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Request Error:", error);
        alert("Network error. Try again.");
    });
}


function showForgotPassword() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("forgot-password-box").style.display = "block";
}





function sendOTP() {
    let email = document.getElementById("signup-email").value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    fetch("php/send_otp.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + encodeURIComponent(email)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("OTP sent successfully to your email.");
                document.getElementById("otp").style.display = "block";
                document.getElementById("verify-btn").style.display = "block";
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            alert("Network error: " + error);
        });
}


function sendForgotOTP() {
    let email = document.getElementById("forgot-email").value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    fetch("php/send_forgot_otp.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + encodeURIComponent(email)
    })
        .then(response => response.json()) // Convert to JSON
        .then(data => {
            if (data.status === "success") {
                alert("OTP sent! Check your email.");
                document.getElementById("forgot-otp").style.display = "block";
                document.getElementById("new-password").style.display = "block";
                document.getElementById("reset-btn").style.display = "block";
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            alert("Network error: Unable to send OTP. Check console for details.");
        });
}

function resetPassword() {
    let email = document.getElementById("forgot-email").value;
    let otp = document.getElementById("forgot-otp").value;
    let newPassword = document.getElementById("new-password").value;

    if (!email || !otp || !newPassword) {
        alert("All fields are required.");
        return;
    }

    fetch("php/reset_password.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + encodeURIComponent(email) +
            "&otp=" + encodeURIComponent(otp) +
            "&new_password=" + encodeURIComponent(newPassword)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Password reset successful! Redirecting to login...");
                window.location.href = "index.html"; // Redirect to login page
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            alert("Network error: " + error);
        });
}

function logout() {
    fetch("php/logout.php", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Logged out successfully!");
                window.location.href = "index.html"; // Redirect to login
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error("Logout Error:", error);
            alert("Network error. Try again.");
        });
}






 const southIndianMovies = [
  {
    title: "96",
    poster: "./images/movie-posters/south-indian-movie/96.jpg",
    rating: 4.5,
    description: "96 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/14O3YTMzaXZGeOm_7S_EV4haTKm1RjdGn/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/14O3YTMzaXZGeOm_7S_EV4haTKm1RjdGn/view?usp=drive_link"
  },
  {
    title: "Animal",
    poster: "./images/movie-posters/south-indian-movie/animal.jpeg",
    rating: 4.5,
    description: "Animal Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/1vChf7KiB5YFfIae9Q-4plOfDrC-czqvg/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/1vChf7KiB5YFfIae9Q-4plOfDrC-czqvg/view?usp=drive_link"
  },
  {
    title: "Bramayugam",
    poster: "./images/movie-posters/south-indian-movie/bramayagum.jpg",
    rating: 3,
    description: "Bramayugam Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/1TFrUmBs9JUdJijdCQkQzzMLB0L_sdvzS/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/1TFrUmBs9JUdJijdCQkQzzMLB0L_sdvzS/view?usp=drive_link"
  },
  {
    title: "Hanuman",
    poster: "./images/movie-posters/south-indian-movie/Hanuman.jpeg",
    rating: 4,
    description: "Hanuman Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/1LYd7QNgUU9kZUHYuAQKe0anOvbwtXnkI/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/1LYd7QNgUU9kZUHYuAQKe0anOvbwtXnkI/view?usp=drive_link"
  },
  {
    title: "Hridayam",
    poster: "./images/movie-posters/south-indian-movie/hridiyam.jpeg",
    rating: 4,
    description: "Hridayam Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/1gt6q49nqPWJAnNN5h7cGB3kXaA2aXt4j/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/1gt6q49nqPWJAnNN5h7cGB3kXaA2aXt4j/view?usp=drive_link"
  },
  {
    title: "Premalu",
    poster: "./images/movie-posters/south-indian-movie/Premalu.jpg",
    rating: 4,
    description: "Premalu Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://drive.google.com/file/d/1FQ8ujmt3CR0b48OIRBz7WElOMVdhcJLY/view?usp=drive_link",
    downloadLink: "https://drive.google.com/file/d/1FQ8ujmt3CR0b48OIRBz7WElOMVdhcJLY/view?usp=drive_link"
  },
  {
    title: "Virupaksha",
    poster: "./images/movie-posters/south-indian-movie/virupaksam.jpeg",
    rating: 4,
    description: "Virupaksha Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "movies/movies.html",
    downloadLink: "movies/movies.html"
  },
  {
    title: "Yodha",
    poster: "./images/movie-posters/south-indian-movie/yodha.jpg",
    rating: 3,
    description: "Yodha Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "movies/movies.html",
    downloadLink: "movies/movies.html"
  }
];

const webSeries = [
  {
    title: "Money Heist",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Money Heist S01 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Squid Game",
    poster: "./images/movie-posters/webseries/squid-game.webp",
    rating: 4,
    description: "Squid Game – Season 1 (2021) Hindi Dubbed WEB-DL 1080p - 720p - 480p",
    watchLink: "webseries/my deamon/index.html",
    downloadLink: "webseries/my deamon/downlode.html"
  },
  {
    title: "House of The Dragon",
    poster: "./images/movie-posters/webseries/house-of-the-dragon.webp",
    rating: 4,
    description: "House of the Dragon (2024) (Season 2) Hindi HDRip 720p – 480p – 1080p – Episode 1 Added",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Scam 2023",
    poster: "./images/movie-posters/webseries/scam-2003.webp",
    rating: 4,
    description: "Scam 2003 (Season 1) Dual Audio Hindi HDRip – 720p – 480p",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "The Wheel of Time",
    poster: "./images/movie-posters/webseries/the-wheel-of-time.webp",
    rating: 4,
    description: "The Wheel of Time 2023 (Season 2) Dual Audio Hindi HDRip – 720p – 480p (COMPLETE)",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Farzi",
    poster: "./images/movie-posters/webseries/farzi.webp",
    rating: 4,
    description: "Farzi (2023) Season 1 Hindi HDRip – 720p – 480p",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "The Mandalorian",
    poster: "./images/movie-posters/webseries/the-mandalorian.webp",
    rating: 4,
    description: "The Mandalorian (2020) Season 2 Hindi Dual Audio HDRip – 720p – 480p",
    watchLink: "movies/movies.html",
    downloadLink: "movies/movies.html"
  },
  {
    title: "Rocket Boys",
    poster: "./images/movie-posters/webseries/rocket-boys.webp",
    rating: 4,
    description: "Rocket Boys 2023 Season 2 Hindi HDRip – 720p – 480p",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  }
];


const kDramaMovies = [
  {
    title: "Queen of Tears",
    poster: "./images/movie-posters/k-drama/queen-of-tears.jpeg",
    description: "Queen of Tears (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "My Demon",
    poster: "./images/movie-posters/k-drama/my-demon.jpg",
    description: "My Demon (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "./webseries/my deamon/index.html",
    downloadLink: "./webseries/my deamon/downlode.html"
  },
  {
    title: "Fight for MY Way",
    poster: "./images/movie-posters/k-drama/fight-for-my-way.jpeg",
    description: "Fight for MY Way (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "W-To-The-World",
    poster: "./images/movie-posters/k-drama/w-to-the-world.jpeg",
    description: "W-To-The-World (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Love Unexpected",
    poster: "./images/movie-posters/k-drama/love-unexpected.jpeg",
    description: "Love Unexpected (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Big Mouth",
    poster: "./images/movie-posters/k-drama/big-mouth.jpg",
    description: "Big Mouth (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "THe King Eternal",
    poster: "./images/movie-posters/k-drama/the-king-eternal.jpg",
    description: "THe King Eternal (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Vincenzo",
    poster: "./images/movie-posters/k-drama/vincenzo.jpeg",
    description: "Vincenzo (Hindi Dubbed) | Movie-dox",
    rating: 4,
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  }
];

const upcoming = [
  {
    title: "Money Heist",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Money Heist S01 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Rampage",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Rampage Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "John Wick",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "John-Wick part-1 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Inception",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Inception Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Money Heist",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Money Heist S01 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Rampage",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Rampage Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "John Wick",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "John-Wick part-1 Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  },
  {
    title: "Inception",
    poster: "./images/movie-posters/webseries/money-heist.jpg",
    rating: 4,
    description: "Inception Dual Audio {Hindi-English} NetFlix WEB Series WEB-DL ESub",
    watchLink: "https://gplinks.co/XRs7",
    downloadLink: "https://gplinks.co/XRs7"
  }
];


  function renderMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear container

    movies.forEach(movie => {
      let starsHtml = "";
      for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="fa fa-star${i <= movie.rating ? " checked" : ""}"></span>`;
      }

      const movieHtml = `
        <div class="small-section glass">
          <div class="img">
            <img class="img-poster" src="${movie.poster}" alt="movie-images" />
          </div>
          <div class="M-detail">
            <h1>${movie.title}</h1>
            <div class="i">${starsHtml}</div>
            <p>${movie.description}</p>
          </div>
          <div class="downlode-watch">
            <a class="buttonn" href="${movie.watchLink}"><i class="fa fa-play-circle-o"></i>Watch</a>
            <a class="buttonn" href="${movie.downloadLink}"><i class="fa fa-download"></i>Download</a>
          </div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", movieHtml);
    });
  }

  // Render all arrays
  renderMovies(kDramaMovies, "kDramaContainer");
  renderMovies(webSeries, "webSeriesContainer");
  renderMovies(southIndianMovies, "southIndianContainer");
  renderMovies(upcoming, "upcomingContainer");


// search Option

