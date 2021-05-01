'use strict';
let personalMovieDB ={
    count: null,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    countMovies: function () {
        personalMovieDB.count = +prompt('Скільки фільмів ви подивилися?','');

    },

    listOfFilms: function () {
        for (let i = 0; i <2; i++) {
            let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
            let point = +prompt('На скільки оціните?','');
            if (lastMovie != null && point != null  && lastMovie !== '' && point !== '' && lastMovie.length<50){
                personalMovieDB.movies[lastMovie] = point;
            }else{
                i--
            }
        }
    },

    checkCount: function () {
        if (personalMovieDB.count < 10){
            console.log('переглянуто мало фільмів')
        }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log('ви класичний глядач')
        }else if (personalMovieDB.count > 30){
            console.log('кіноман')
        }else {
            console.log('произошла ошибка')
        }
    },

    showMyDB: function (){
        if (!personalMovieDB.privat){
              console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat
            ?personalMovieDB.privat = false
            :personalMovieDB.privat = true;

    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++) {
            let generGenres=  prompt(`Ваш любимый жанр под номером ${i}`,'');

            if (generGenres != null && generGenres !== ''){
                personalMovieDB.genres[i-1] = generGenres;

            }else{
                i--
            }
        }
        personalMovieDB.genres.forEach(function (name, index) {
            console.log(`Любимый жанр ${index+1} - это ${name}`)
        })
    }
};
personalMovieDB.countMovies();
personalMovieDB.listOfFilms();
personalMovieDB.checkCount();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();


