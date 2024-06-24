function checkMovies(array) {
  let movies = [];

  for (let command of array) {

    if (command.includes("addMovie")) {
      let tokens = command.split("addMovie ");
      let movieTitle = tokens[1];

      let movieObj = {name: movieTitle};
      movies.push(movieObj);
    }else if (command.includes("directedBy")) {
      let tokens = command.split(" directedBy ");
      let movieTitle = tokens[0];
      let directorName = tokens[1];

      let movieFound = movies.find(m => m.name === movieTitle);

      if (movieFound) {
        movieFound.director = directorName;
      }
    }else if (command.includes("onDate")) {
      let tokens = command.split(" onDate ");
      let movieTitle = tokens[0];
      let currDate = tokens[1];

      let movieFound = movies.find(m => m.name === movieTitle);

      if (movieFound) {
        movieFound.date = currDate;
      }
    }
  }

  let fullInfoMovies = movies.filter(m => m.name && m.director && m.date);
  
  for (let movie of fullInfoMovies) {
    console.log(JSON.stringify(movie));
  }
}

checkMovies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'])