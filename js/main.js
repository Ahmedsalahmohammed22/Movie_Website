let menuBar = document.getElementById("menu-bars");
let navigationBar = document.querySelector(".navigation");
let sideBar = document.querySelector(".side-bar");


menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle("fa-times");
    navigationBar.classList.toggle("activeNavigation");
    sideBar.classList.toggle("showSideBar");

})


let form = document.getElementById("form");



let age = document.getElementById("age");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
// valid or invalid name 
let inValidName = document.getElementById("invalid-name");
let ValidName = document.getElementById("valid-name");
// name error 
let nameError = document.getElementById("name-error");
        /* ***************************************** */
// valid or invalid email
let inValidEmail = document.getElementById("invalid-email");
let ValidEmail = document.getElementById("valid-email");
let emailError = document.getElementById("email-error");

        /* ***************************************** */
// valid or invalid phone 
let inValidphone = document.getElementById("invalid-phone");
let Validphone = document.getElementById("valid-phone");
let phoneError = document.getElementById("phone-error");

        /* ***************************************** */
// valid or invalid age 
let inValidage = document.getElementById("invalid-age");
let Validage = document.getElementById("valid-age");
let ageError = document.getElementById("age-error");

        /* ***************************************** */
// valid or invalid  password
let inValidpassword = document.getElementById("invalid-password");
let Validpassword = document.getElementById("valid-password");
let passwordError = document.getElementById("password-error");

        /* ***************************************** */
// valid or invalid  Repassword
let inValidRePassword = document.getElementById("invalid-rePassword");
let ValidRePassword = document.getElementById("valid-rePassword");
let rePasswordError = document.getElementById("rePassword-error");


let btn = document.getElementById("btn");



form.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
    if(validateForm() === true){
        form.reset();
    }

});
btn.addEventListener("click" , ()=>{
    // form.reset();
})





function validateForm(){
    // Check valid userName
    let valid = true;
    let userName = document.getElementById("user-name").value.trim();
    if(userName === "" ){
        inValidName.classList.add("activeForm");
        ValidName.classList.remove("activeForm");
        nameError.innerHTML = "Please Enter Your Name";
        nameError.classList.add("activeText");
        valid = false;
    }else{
        ValidName.classList.add("activeForm");
        inValidName.classList.remove("activeForm");
        nameError.classList.remove("activeText");
        valid = true;
    }

                  // ***********************************************
    // check valid email
    let email = document.getElementById("email").value.trim();
    let emailRe = /\w+@\w+.(com|net|org)/;
    let validEmail = emailRe.test(email);
    if(validEmail){
        ValidEmail.classList.add("activeForm");
        inValidEmail.classList.remove("activeForm");
        emailError.classList.remove("activeText");
        valid = true;
    }else{
        inValidEmail.classList.add("activeForm");
        ValidEmail.classList.remove("activeForm");
        emailError.innerHTML = "Please Enter Valid Email";
        emailError.classList.add("activeText");
        valid = false;
    }
                               /* *********************************************** */
    // check phone 
    let phone = document.getElementById("phone").value.trim();
 
    let phoneRe = /01(0|1|2|5)\d{8}/;
    let validPhone = phoneRe.test(phone);
    if(validPhone){
        Validphone.classList.add("activeForm");
        inValidphone.classList.remove("activeForm");
        phoneError.classList.remove("activeText");
        valid = true;
    }else{
        inValidphone.classList.add("activeForm");
        Validphone.classList.remove("activeForm");
        phoneError.innerHTML = "Please Enter Valid Phone";
        phoneError.classList.add("activeText");
        valid = false;
    }
                                   /* *********************************************** */
    // check Age 
    let age = document.getElementById("age").value.trim();
    let ageRe = /\d{2}|50/;
    let validAge = ageRe.test(age);
    if(validAge){
        Validage.classList.add("activeForm");
        inValidage.classList.remove("activeForm");
        ageError.classList.remove("activeText");
        valid = true;
    }else{
        inValidage.classList.add("activeForm");
        Validage.classList.remove("activeForm");
        ageError.innerHTML = "Please Enter Valid age was between [10] [50]";
        ageError.classList.add("activeText");
        valid = false;
    }
                                       /* *********************************************** */
    // check Password
    let password = document.getElementById("password").value.trim();
    let passwordRe = /\w+\d+/;
    let validPassword = passwordRe.test(password);
    if(validPassword && password !== ""){
        Validpassword.classList.add("activeForm");
        inValidpassword.classList.remove("activeForm");
        passwordError.classList.remove("activeText");
        valid = true;
    }else{
        inValidpassword.classList.add("activeForm");
        Validpassword.classList.remove("activeForm");
        passwordError.innerHTML = "Please Enter Valid password contains at least word and numbers";
        passwordError.classList.add("activeText");
        valid = false;
    }

                                           /* *********************************************** */
    // check RePassword
    let Repassword = document.getElementById("Repassword").value.trim();
    if(password === Repassword && Repassword!== ""){
        ValidRePassword.classList.add("activeForm");
        inValidRePassword.classList.remove("activeForm");
        rePasswordError.classList.remove("activeText");
        valid = true;
    }else{
        inValidRePassword.classList.add("activeForm");
        ValidRePassword.classList.remove("activeForm");
        rePasswordError.innerHTML = "Two passwords are different";
        rePasswordError.classList.add("activeText");
        valid = false;
    }

    return valid;


}

              /*************************************** */
// get movies from API 
let title = document.getElementById("title");
let card = document.getElementById("cards");
let nowPlaying = document.getElementById("now-playing");
let Popular = document.getElementById("popular");
let Rated = document.getElementById("rated");
let News = document.getElementById("News");
let UpComing = document.getElementById("Upcoming");
let imagePath = "https://image.tmdb.org/t/p/w500/";

// get Movies by default


window.addEventListener("load" , getMovieByDefault);

function getMovieByDefault(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=18e837e9f7547e901a9332f4ee91efa4`)
    .then(response => response.json())
    .then(data => {
        let movie = ``;
        let Movies = [];
        Movies = data.results;
        if(data.results){
            data.results.forEach(movies => {
                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
            
        }
        card.innerHTML = movie;
                        /*********************************************************** */
                // search movie from Defaultpage  
        let searchPage = document.getElementById("searchPage");
        searchPage.onsubmit = function(e){
            e.preventDefault();
            searchMoviesPage();
        }
        function searchMoviesPage(){
            let moviesPage = document.getElementById("search").value.trim();
            let movie = ``;
            for(let i = 0 ; i <Movies.length ; i++){
                if(Movies[i].title.toLowerCase().includes(moviesPage.toLowerCase())){
                    movie+=`
                        <div class="movie-item" data-id= "${Movies[i].id}">
                            <div class="movie-image">
                                <img src="${imagePath + Movies[i].poster_path}" alt="${Movies[i].title}" />
                            </div>
                            <div class="movie-info">
                                <h2>${Movies[i].title}</h2>
                                <p>
                                    ${Movies[i].overview}
                                </p>
                                <p>${Movies[i].vote_average}</p>
                                <span>${Movies[i].release_date}</span>
                            </div>
                        </div>
                        `
                }
            }
            card.innerHTML = movie;
                        
        }
    });
}


// get Movies Now Playing
nowPlaying.addEventListener("click" , getMovieNP);

function getMovieNP(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=18e837e9f7547e901a9332f4ee91efa4`)
    .then(response => response.json())
    .then(data => {
        let Title = ``;
        let movie = ``;
        let Movies = [];
        Movies = data.results;
    
        if(data.results){
            Title = `<h2>Now Playing...</h2>`;
            data.results.forEach(movies => {

                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
            
        }
        title.innerHTML = Title;
        card.innerHTML = movie;

                        /*********************************************************** */
                // search movie from Now Playing page  
        let searchPage = document.getElementById("searchPage");
        searchPage.onsubmit = function(e){
            e.preventDefault();
            searchMoviesPage();
        }
        function searchMoviesPage(){
            let moviesPage = document.getElementById("search").value.trim();
            let movie = ``;
            for(let i = 0 ; i <Movies.length ; i++){
                if(Movies[i].title.toLowerCase().includes(moviesPage.toLowerCase())){
                    movie+=`
                            <div class="movie-item" data-id= "${Movies[i].id}">
                                <div class="movie-image">
                                    <img src="${imagePath + Movies[i].poster_path}" alt="${Movies[i].title}" />
                                </div>
                                <div class="movie-info">
                                    <h2>${Movies[i].title}</h2>
                                    <p>
                                        ${Movies[i].overview}
                                    </p>
                                    <p>${Movies[i].vote_average}</p>
                                    <span>${Movies[i].release_date}</span>
                                </div>
                            </div>
                        `
                }
            }
            card.innerHTML = movie;
                
        }

    })
}

// get Movies popular
Popular.addEventListener("click" , getMoviePopular);

function getMoviePopular(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18e837e9f7547e901a9332f4ee91efa4`)
    .then(response => response.json())
    .then(data => {
        let Title = ``;
        let movie = ``;
        let Movies = [];
        Movies = data.results;
        
        if(data.results){
            Title = `<h2>Popular...</h2>`;
            data.results.forEach(movies => {

                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
            
        }
        title.innerHTML = Title;
        card.innerHTML = movie;
                /*********************************************************** */
                // search movie from popular page  
        let searchPage = document.getElementById("searchPage");
        searchPage.onsubmit = function(e){
            e.preventDefault();
            searchMoviesPage();
        }
        function searchMoviesPage(){
            let moviesPage = document.getElementById("search").value.trim();
            let movie = ``;
            for(let i = 0 ; i <Movies.length ; i++){
                if(Movies[i].title.toLowerCase().includes(moviesPage.toLowerCase())){
                    movie+=`
                            <div class="movie-item" data-id= "${Movies[i].id}">
                                <div class="movie-image">
                                    <img src="${imagePath + Movies[i].poster_path}" alt="${Movies[i].title}" />
                                </div>
                                <div class="movie-info">
                                    <h2>${Movies[i].title}</h2>
                                    <p>
                                        ${Movies[i].overview}
                                    </p>
                                    <p>${Movies[i].vote_average}</p>
                                    <span>${Movies[i].release_date}</span>
                                </div>
                          </div>
                          `
                        }
            }
            card.innerHTML = movie;
        
        }
    })
}

// get Movies Top-Rated
Rated.addEventListener("click" , getMovieTopRated);

function getMovieTopRated(){
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=18e837e9f7547e901a9332f4ee91efa4`)
    .then(response => response.json())
    .then(data => {
        let Title = ``;
        let movie = ``;
        let Movies = [];
        Movies = data.results;
        
        if(data.results){
            Title = `<h2>Top-Rated...</h2>`;
            data.results.forEach(movies => {

                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
            
        }
        title.innerHTML = Title;
        card.innerHTML = movie;
        /*********************************************************** */
                // search movie from Top-Rated page
        let searchPage = document.getElementById("searchPage");
        searchPage.onsubmit = function(e){
         e.preventDefault();
         searchMoviesPage();
        }
        function searchMoviesPage(){
            let moviesPage = document.getElementById("search").value.trim();
            let movie = ``;
            for(let i = 0 ; i <Movies.length ; i++){
                if(Movies[i].title.toLowerCase().includes(moviesPage.toLowerCase())){
                    movie+=`
                    <div class="movie-item" data-id= "${Movies[i].id}">
                        <div class="movie-image">
                            <img src="${imagePath + Movies[i].poster_path}" alt="${Movies[i].title}" />
                        </div>
                        <div class="movie-info">
                            <h2>${Movies[i].title}</h2>
                            <p>
                                ${Movies[i].overview}
                            </p>
                            <p>${Movies[i].vote_average}</p>
                            <span>${Movies[i].release_date}</span>
                        </div>
                  </div>
                  `
                }
            }
            card.innerHTML = movie;

        }
    })
}

// get Movies UpComing
UpComing.addEventListener("click" , getMovieUpcoming);

function getMovieUpcoming(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=18e837e9f7547e901a9332f4ee91efa4`)
    .then(response => response.json())
    .then(data => {
        let Title = ``;
        let movie = ``;
        let Movies = [];
        Movies = data.results;
        if(data.results){
            Title = `<h2>UpComing...</h2>`;
            data.results.forEach(movies => {

                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
            
        }

        title.innerHTML = Title;
        card.innerHTML = movie;
        /***************************************** */
        // search movie from page UpComing 
        let searchPage = document.getElementById("searchPage");
        searchPage.onsubmit = function(e){
         e.preventDefault();
         searchMoviesPage();
        }
        function searchMoviesPage(){
            let moviesPage = document.getElementById("search").value.trim();
            let movie = ``;
            for(let i = 0 ; i <Movies.length ; i++){
                if(Movies[i].title.toLowerCase().includes(moviesPage.toLowerCase())){
                    movie+=`
                    <div class="movie-item" data-id= "${Movies[i].id}">
                        <div class="movie-image">
                            <img src="${imagePath + Movies[i].poster_path}" alt="${Movies[i].title}" />
                        </div>
                        <div class="movie-info">
                            <h2>${Movies[i].title}</h2>
                            <p>
                                ${Movies[i].overview}
                            </p>
                            <p>${Movies[i].vote_average}</p>
                            <span>${Movies[i].release_date}</span>
                        </div>
                  </div>
                  `
                }
            }
            card.innerHTML = movie;

        }
    })
}


// search movies from API
let searchApi = document.getElementById("searchApi");
searchApi.addEventListener("submit", e=>{
    e.preventDefault();
    getMoviesApi();
}

)
function getMoviesApi(){
    let moviesApi = document.getElementById("search-input").value.trim();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=18e837e9f7547e901a9332f4ee91efa4&query=${moviesApi}`)
    .then(response => response.json())
    .then(data =>{
        let movie = ``;
        if(data.results){
            data.results.forEach(movies => {

                movie+=`
                <div class="movie-item" data-id= "${movies.id}">
                    <div class="movie-image">
                        <img src="${imagePath + movies.poster_path}" alt="${movies.title}" />
                    </div>
                    <div class="movie-info">
                        <h2>${movies.title}</h2>
                        <p>
                            ${movies.overview}
                        </p>
                        <p>${movies.vote_average}</p>
                        <span>${movies.release_date}</span>
                    </div>
              </div>
              `
            });
        }else{
            getMovieByDefault();
        }
            card.innerHTML = movie; 
        })
}





