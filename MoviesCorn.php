<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page
    header("Location: index.html");
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MoviesCorn</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/logo/moviescorn.png" type="image/icon type">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900display=swap" rel="stylesheet">
   
</head>

<body>
    <div class="first-container  active">

        <nav class="header">
            <div class="first-section">
                <div class="logo">
                    <h1>Movies <br> Corn</h1>
                    <img src="./images/logo/moviescorn.png" alt="logo">
                </div>


                <div class="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="second-section topnav">
                <div class="detail-section navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#trend">South-indian</a></li>
                        <li><a href="#ws">Web Series</a></li>
                        <li><a href="#anime">Anime</a></li>
                        <li><a href="#up">UP-Comming</a></li>
                        <li><a href="#m">Movie Request</a></li>
                    </ul>
                </div>
                <div class="sear">
                  <input type="text" id="searchInput" placeholder="Search movies...">
                    <button class="logout" onclick="searchMovies()"><i class="fa fa-search"></i>    </button>
                </div>
                <div class="search">
                    <button class="logout" onclick="logout()">Logout</button>

                </div>
            </div>

        </nav>

        <ul class='slider'>

            <li class='item' style="background-image: url(./images/chenging-bg/inception.jpg)">
                <div class='content'>
                    <h2 class='title'>INCEPTION</h2>
                    <p class='description'>A thief who steals corporate secrets through the use of dream-sharing
                        technology is given the inverse task of planting an idea into the mind of a CEO. </p>
                    <button>Read More</button>
                </div>
            </li>
            <li class='item' style="background-image: url(./images/chenging-bg/interstellar.jpg)">
                <div class='content'>
                    <h2 class='title'>INSTERSTELLAR</h2>
                    <p class='description'> When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot,
                        Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new
                        planet for humans.</p>
                    <button>Read More</button>
                </div>
            </li>
            <li class='item' style="background-image: url(./images/chenging-bg/jack-sparow.jpg)">
                <div class='content'>
                    <h2 class='title'>JACK-SPAROW"</h2>
                    <p class='description'> Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow
                        to save Elizabeth Swann, the governor's daughter and his love. </p>
                    <button>Read More</button>
                </div>
            </li>
            <li class='item' style="background-image: url(./images/chenging-bg/john.jpg)">
                <div class='content'>
                    <h2 class='title'>JOHN-WICK"</h2>
                    <p class='description'>
                        John Wick is a former hitman grieving the loss of his true love. When his home is broken into,
                        robbed, and his dog killed, he is forced to return to action to exact revenge.
                    </p>
                    <button>Read More</button>
                </div>
            </li>
            <li class='item' style="background-image: url(./images/chenging-bg/money-heist.jpg)">
                <div class='content'>
                    <h2 class='title'>MONEY HIEST</h2>
                    <p class='description'>
                        An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history -
                        stealing 2.4 billion euros from the Royal Mint of Spain.
                    </p>
                    <button>Read More</button>
                </div>
            </li>

        </ul>
        <div class='button'>
            <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
            <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
        </div>
    </div>

    <section class="main-container gls ">

        <div class="second-container   " >
            <div class="small second-container ">
                <h1 class="heading glass" id="trend">South-indian</h1>
                <div class="movie-category-container scrole" id="southIndianContainer" class="scrole"></div>
            </div>
        </div>        
        
        <div class="second-container    ">
            <div class="small second-container ">
                <h1 class="heading glass" id="ws">Web-Series</h1>
                <!-- <div id="webSeriesContainer" class="scrole"></div> -->
                <div class="movie-category-container scrole" id="webSeriesContainer" class="scrole"></div>
            </div>
        </div>
        
        
        <div class="second-container    ">
            <div class="small second-container ">
                <h1 class="heading glass" id="anime">K-Drama</h1>
                <div class="movie-category-container scrole" id="kDramaContainer" class="scrole"></div>
            </div>
        </div>
        
        
        <div class="second-container    ">
            <div class="small second-container ">
                <h1 class="heading glass glass " id="up">UP-Coming Movies</h1>
                <div id="upcomingContainer" class=" movie-category-container scrole"></div>
            </div>
        </div>

        

        <div class="movie-rq glass " id="m">
            <div class="m-one">
                <div class="headingg">
                    <h2>Movie Request Form</h2>
                </div>
                <div class="social">
                    <div class="btnn fb-btn">
                        <a href="https://www.facebook.com/official.pawan21"><i class="fa fa-facebook fb" style="font-size: 40px; color: black;" aria-hidden="true"
                                id="fb"></i></a>
                    </div>
                    <div class="btnn ig-btn">
                        <a href="https://www.instagram.com/official.pawan21/"> <i class="fa fa-instagram" aria-hidden="true" style="font-size: 40px; color: black; " id="ig"></i></a>
                    </div>
                    <div class="btnn tw-btn">
                        <a href="https://twitter.com/PawanMalli65228"><i class="fa fa-twitter" style="font-size: 40px; color: black; "  aria-hidden="true" id="tw twitter"></i></a>
                    </div>
                    <div class="btnn tw-btn">
                        <a href="https://github.com/PawanMallik"><i class="fa fa-github" style="font-size: 40px;   color: black;"  aria-hidden="true" id="gi github"></i></a>
                    </div>
                    <div class="btnn tw-btn">
                        <a href="https://www.linkedin.com/in/pawan-mallik-1b3117214/"><i class="fa fa-linkedin" style="font-size: 40px; color: black; "  aria-hidden="true" id="li linkedin"></i></a>
                    </div>
                    
                </div>
                <h1 >contact us</h1>
            </div>
            <div class="m-two">
                <div class="form">
                    <input type="text" id="full-name" placeholder="Full Name">
                    <input type="email" id="request-email" placeholder="Gmail">
                    <input type="text" id="movie-name" placeholder="Movie Name">
                    <textarea id="note" placeholder="Additional Note"></textarea>
                    <button onclick="submitRequest()">Submit Request</button>
                </div>
            </div>
        </div>
        <footer
            style="height: 70px; width: 100%; ; display: flex; justify-content: center; align-items: center; border-bottom: 4px solid rgb(255, 255, 255); font-weight: 700; border-top: 2px solid rgba(0, 0, 0, 0.468) ; color: black;"
            class="glass">
            <p>Copyright &copy; 2003, all right reserved By Pawan🕊️</p>

        </footer>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <!-- partial -->
    <script src="src/script.js"></script>
    <script src="js/script.js"></script>


    <script>
        burger = document.querySelector('.burger')
        rightNav = document.querySelector('.topnav')

        burger.addEventListener('click', () => {
            rightNav.classList.toggle('topnav');
        })

         function searchMovies() {
      const query = document.getElementById("searchInput").value.trim();
      if (query !== "") {
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
      }
    }
    </script>
</body>

</html>

</body>

</html>