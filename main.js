const movies = [
  {title: "Alice in Borderland",
  image: "pictures/Alice_in_Borderland.jpg",
  genre: "Action, Fantasy, Mistery",
  desc: "A group of bored delinquents are transported to a parallel wasteland as part of a survival game.",
  rating: "7,7/10"}, 
  {title: "Stranger Things",
  image: "pictures/stranger_things.jpg",
  genre: "Drama, Fantasy, Horror",
  desc: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
  rating: "8,7/10"},
  {title: "The Witcher",
  image: "pictures/the_witcher.jpg",
  genre: "Action, Adventure, Fantasy",
  desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
  rating: "8,2/10"},
  {title: "Loki",
  image: "pictures/loki.jpg",
  genre: "Action, Adventure, Fantasy",
  desc: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
  rating: "8,3/10"},
  {title: "Mortal Kombat",
  image: "pictures/mortal_kombat.jpg",
  genre: "Action, Adventure, Fantasy",
  desc: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
  rating: "6,1/10"},
  {title: "Aquaman",
  image: "pictures/aquaman.jpg",
  genre: "Action, Adventure, Fantasy",
  desc: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
  rating: "6,9/10"},
  {title: "Jumanji: The Next Level",
  image: "pictures/jumanji.jpg",
  genre: "Action, Adventure, Comedy",
  desc: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
  rating: "6,7/10"},
  {title: "Shazam!",
  image: "pictures/shazam.jpg",
  genre: "Action, Adventure, Comedy",
  desc: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
  rating: "7,0/10"},
  {title: "Raya and The Last Dragon",
  image: "pictures/raya.jpg",
  genre: "Animation, Action, Adventure",
  desc: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
  rating: "7,4/10"},
  {title: "Kung Fu Panda",
  image: "pictures/kungfu_panda.jpg",
  genre: "Animation, Action, Adventure",
  desc: "To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valley's arch-enemy is on his way.",
  rating: "7,6/10"}]

function converthash() {
  if (window.location.hash == '#0') {
    return 0;
  }
  else if (window.location.hash == '#1') {
    return 1;
  }
  else if (window.location.hash == '#2') {
    return 2;
  }
  else if (window.location.hash == '#3') {
    return 3;
  }
  else if (window.location.hash == '#4') {
    return 4;
  }
  else if (window.location.hash == '#5') {
    return 5;
  }
  else if (window.location.hash == '#6') {
    return 6;
  }
  else if (window.location.hash == '#7') {
    return 7;
  }
  else if (window.location.hash == '#8') {
    return 8;
  }
  else if (window.location.hash == '#9') {
    return 9;
  }
}

function load_movie() {
  let n = converthash();
  let data = movies[n]
  document.getElementById("img_movies").src = data.image;
  document.getElementById("img_movies").alt = data.title;
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("genre").innerHTML = data.genre;
  document.getElementById("description").innerHTML = data.desc;
  document.getElementById("rating").innerHTML = "Rating: " + data.rating;
}

load_movie();