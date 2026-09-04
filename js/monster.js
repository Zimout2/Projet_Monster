"use strict";

let nom = "Inconnue";
let life = 4;
let money = 10;
let awake = true;

let img_kill = document.createElement("img");
img_kill.src = "img/kill.png";

let img_fight = document.createElement("img");
img_fight.src = "img/fight.png";

let img_sleep = document.createElement("img");
img_sleep.src = "img/sleep.png";

let img_run = document.createElement("img");
img_run.src = "img/run.png";

let img_work = document.createElement("img");
img_work.src = "img/work.png";

let img_eat = document.createElement("img");
img_eat.src = "img/eat.png";

let img_new_life = document.createElement("img");
img_new_life.src = "img/new_life.png";

let img_show = document.createElement("img");
img_show.src = "img/show.png";

function init(n, l, m, a) {
  nom = n;
  life = l;
  money = m;
  awake = a;
}

let bouton_show = document.getElementById("b6");
function show() {
  monstre.replaceChild(img_show, monstre.children[0]);
  log(
    nom +
      " possède " +
      life +
      " de point de vie et " +
      " à une monney de : " +
      money +
      " et il est réveillé : " +
      awake,
  );
}

let box = document.querySelector("#actionbox p");

function log(message) {
  let variable = document.createElement("div");
  let texte = document.createTextNode(message);
  variable.append(texte);
  box.insertBefore(variable, box.firstChild);
}

let status = document.querySelector("#status");
let monstre = document.getElementById("monster");

function displayStatus(life, money, awake) {
  status.children[0].textContent = "Life " + life + " : \ud83d\ude00";

  status.children[1].textContent = "Money " + money + " : \u{1F911}";

  status.children[2].textContent = "Awake " + awake + " : \u23F0";

  if (life == 0) {
    status.children[0].textContent = "Life : " + life + " : \u271D";
    monstre.replaceChild(img_kill, monstre.children[0]);
  }
  if (awake == false) {
    status.children[2].textContent = "Awake " + awake + " : \u{1F319}";
  }

  if (money == 0) {
    status.children[1].textContent = "Money " + money + " : \u{1F4B8}";
  }

  if (life < 5) {
    monstre.style.backgroundColor = "#B31B1B";
  } else if (life < 10) {
    monstre.style.backgroundColor = "#ED8B47";
  } else if (life < 15) {
    monstre.style.backgroundColor = "#53B8B8";
  } else if (15 <= life <= 20) {
    monstre.style.backgroundColor = "#cb99c9";
  } else if (life > 20) {
    monstre.style.backgroundColor = "#58855C";
  }

  if (money < 5) {
    monstre.style.borderWidth = "5px";
  } else if (money < 10) {
    monstre.style.borderWidth = "3px";
  } else if (money < 15) {
    monstre.style.borderWidth = "2px";
  } else if (15 <= money <= 20) {
    monstre.style.borderWidth = "1.5px";
  } else if (money > 20) {
    monstre.style.borderWidth = "1px";
  }
}

let bouton_run = document.getElementById("b2");
function run() {
  if (life != 0) {
    if (life >= 8) {
      if (awake == true) {
        if (money >= 10) {
          log(nom + " court pour se libérer l'esprit !");
          life = life - 1;
          monstre.replaceChild(img_run, monstre.children[0]);
          displayStatus(life, money, awake);
        } else {
          log(nom + " n'a pas assez d'argent pour ce battre !");
        }
      } else {
        log(nom + " est train de dormir !");
      }
    } else {
      log(nom + " n'a pas assez dormis !");
    }
  } else {
    log(nom + " est mort !");
  }
}

let bouton_fight = document.getElementById("b3");
function fight() {
  if (life != 0) {
    if (life >= 10) {
      if (awake == true) {
        if (money >= 13) {
          log(nom + " se bat même s'il n'aime pas sa !");
          life = life - 3;
          money = money - 5;
          monstre.replaceChild(img_fight, monstre.children[0]);
          displayStatus(life, money, awake);
        } else {
          log(nom + " n'a pas assez d'argent pour ce battre !");
        }
      } else {
        log(nom + " dors !");
      }
    } else {
      log(nom + " n'a pas assez dormis !");
    }
  } else {
    log(nom + " est mort !");
  }
}

let bouton_work = document.getElementById("b7");
function work() {
  if (life != 0) {
    if (life >= 8) {
      if (awake == true) {
        if (money >= 10) {
          log(nom + " travail");
          life = life - 1;
          money = money + 2;
          monstre.replaceChild(img_work, monstre.children[0]);
          displayStatus(life, money, awake);
        } else {
          log(nom + " n'a pas assez d'argent pour travailler !");
        }
      } else {
        log(nom + " est train de dormir !");
      }
    } else {
      log(nom + " n'a pas assez dormis !");
    }
  } else {
    log(nom + " est mort !");
  }
}

let bouton_eat = document.getElementById("b5");
function eat() {
  if (life != 0) {
    if (life >= 2) {
      if (awake == true) {
        if (money >= 3) {
          log(nom + " mange");
          money = money - 3;
          life = life + 2;
          monstre.replaceChild(img_eat, monstre.children[0]);
          displayStatus(life, money, awake);
        } else {
          log(nom + " n'a pas assez d'argent pour manger !");
        }
      } else {
        log(nom + " est train de dormir !");
      }
    } else {
      log(nom + " n'a pas assez dormis !");
    }
  } else {
    log(nom + " est mort !");
  }
}

let bouton_sleep = document.getElementById("b4");
function sleep() {
  if (life > 0) {
    awake = false;
    money = money + 5;
    monstre.replaceChild(img_sleep, monstre.children[0]);
    displayStatus(life, money, awake);
    log(
      nom +
        " posssédait " +
        life +
        " de point de vie et " +
        " et une monney de : " +
        money +
        " mais maintenant " +
        nom +
        " se repose ! " +
        awake,
    );
    setTimeout(() => {
      life = life + 1;
      awake = true;
      log(
        nom +
          " possède " +
          life +
          " de point de vie et " +
          " à une monney de : " +
          money +
          " mais maintenant " +
          nom +
          " est réveillé ! " +
          awake,
      );
      displayStatus(life, money, awake);
    }, 7 * 1000);
    displayStatus(life, money, awake);
  }
  if (life == 0) {
    log(nom + " est mort");
    displayStatus(life, money, awake);
  }
}
show();

let bouton_new_life = document.getElementById("b1");
function new_life() {
  if (life == 0) {
    life = 10;
    log(nom + " a le droit à une nouvelle vie maintenant !");
    monstre.replaceChild(img_new_life, monstre.children[0]);
    displayStatus(life, money, awake);
  } else {
    log(nom + " n'a pas besoin de changer de vie !");
  }
}

let bouton_kill = document.getElementById("k");
function kill() {
  life = 0;
  awake = false;
  money = 0;
  log(nom + " est mort.");
  monstre.replaceChild(img_kill, monstre.children[0]);
  displayStatus(life, money, awake);
}

function affichage() {
  log(
    nom +
      " possède " +
      life +
      " de point de vie et " +
      " à une monney de : " +
      money +
      " mais maintenant " +
      nom +
      " est réveillé ! " +
      awake,
  );
}

function hasard() {
  let liste = [];
  liste.push(run, fight, work, sleep, eat, affichage, show, new_life, kill);

  let nombre = Math.floor(Math.random() * liste.length);
  liste[nombre]();
}

function go() {
  init("Zimout", 4, 10, true);
  monstre.replaceChild(img_show, monstre.children[0]);
  displayStatus(life, money, awake);
  bouton_show.addEventListener("click", show);
  bouton_eat.addEventListener("click", eat);
  bouton_fight.addEventListener("click", fight);
  bouton_run.addEventListener("click", run);
  bouton_sleep.addEventListener("click", sleep);
  bouton_work.addEventListener("click", work);
  bouton_kill.addEventListener("click", kill);
  bouton_new_life.addEventListener("click", new_life);
  setInterval(hasard, 12 * 1000);
}

window.addEventListener("load", () => {
  go();
});
