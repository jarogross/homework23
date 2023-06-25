class Movie {
  constructor(title, releaseYear, actors) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.actors = actors;
  }

  printDetail() {
    console.log(`Film: ${this.title}`);
    console.log(`Rok: ${this.releaseYear}`);
    console.log('Herci:');
    this.actors.forEach(actor => console.log(actor));
  }

  printLongestActor() {
    let longestActor = '';
    this.actors.forEach(actor => {
      if (actor.length > longestActor.length) {
        longestActor = actor;
      }
    });
    console.log(`Najdlhšie meno herca: ${longestActor}`);
  }
}

let button = document.getElementById("btn");

button.addEventListener("click", function() {

    let title = document.getElementById("title").value;

    let year = document.getElementById("year").value;

    let actors = document.getElementById("actors").value.split(",").map(actor => actor.trim());

   

    let movie = new Movie(title, year, actors);

    movie.printDetail();

    movie.printLongestActor();

});
