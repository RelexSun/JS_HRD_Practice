const select = document.getElementById("#selectInput");
const input = document.getElementById("#userInput");
const msg = document.getElementById("#msg");
const btn = document.getElementById("#btn");

const img = document.getElementById("#img");
const h2 = document.getElementById("#h1");
const p = document.getElementById("#p");

img.src = "";
h2.innerText = "";
p.innerText = "";
img.className = "";

input.disabled = true;
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (select.value === "number") {
      numChoice(input.value);
    } else {
      strChoice(input.value);
    }
  }
});

select.onchange = (e) => {
  const choice = e.target.value;
  switch (choice) {
    case "text":
      input.setAttribute("type", "text");
      input.disabled = false;
      break;
    case "number":
      input.setAttribute("type", "number");
      input.disabled = false;
      break;
    default:
      input.disabled = true;
      break;
  }
};

const numChoice = (c) => {
  switch (c) {
    case "1":
      img.src = "image/cap.jpg";
      h2.innerText = "Captain America";
      p.innerText =
        "A frail young man transformed into a super-soldier during World War II, Steve Rogers became the symbol of hope as Captain America. He fought against HYDRA and was frozen in ice for decades before awakening in the modern era. Known for his unshakable morality and leadership, he played a key role in the Avengers before retiring and passing his shield to Sam Wilson.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "2":
      img.src = "image/thor.jpg";
      h2.innerText = "Thor Odinson";
      p.innerText =
        "The God of Thunder and prince of Asgard, Thor is a powerful warrior wielding the enchanted hammer, Mjolnir. Initially arrogant, he learned humility and became one of Earth’s greatest protectors. He battled Loki, Ultron, and Thanos, and after losing Asgard, he eventually found a new purpose as a more laid-back yet still formidable hero.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "3":
      img.src = "image/iron.jpg";
      h2.innerText = "Iron Man";
      p.innerText =
        "A billionaire genius, playboy, and philanthropist, Tony Stark created the Iron Man suit after being captured by terrorists. He later improved his armor and became a founding member of the Avengers. His intelligence, charisma, and leadership played a crucial role in saving the world multiple times. He ultimately sacrificed himself to defeat Thanos in Avengers: Endgame.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "4":
      img.src = "image/hulk.jpg";
      h2.innerText = "Hulk";
      p.innerText =
        "A brilliant scientist specializing in gamma radiation, Bruce Banner was exposed to a gamma explosion, transforming him into the Hulk—an unstoppable, rage-fueled giant. Initially struggling to control his alter ego, he later found a balance, merging his intellect with the Hulk’s strength to become “Smart Hulk.”";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "5":
      img.src = "image/hawk.jpg";
      h2.innerText = "Hawkeye";
      p.innerText =
        "A master archer and S.H.I.E.L.D. agent, Clint Barton is one of the most skilled marksmen in the world. Despite lacking superpowers, his precision, strategy, and unwavering loyalty made him a crucial part of the Avengers. After losing his family to the Snap, he briefly became the ruthless vigilante Ronin before reuniting with his loved ones.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "6":
      img.src = "image/black.jpg";
      h2.innerText = "Black Widow";
      p.innerText =
        "A former Russian spy and assassin, Natasha Romanoff defected to S.H.I.E.L.D. and became one of its top agents. Skilled in hand-to-hand combat, espionage, and marksmanship, she played a critical role in the Avengers. She sacrificed herself in Endgame to obtain the Soul Stone, ensuring the team’s victory against Thanos.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    default:
      msg.innerText = "Error message";
      break;
  }
  input.value = "";
};

const strChoice = (c) => {
  switch (c) {
    case "captain":
      img.src = "image/cap.jpg";
      h2.innerText = "Captain America";
      p.innerText =
        "A frail young man transformed into a super-soldier during World War II, Steve Rogers became the symbol of hope as Captain America. He fought against HYDRA and was frozen in ice for decades before awakening in the modern era. Known for his unshakable morality and leadership, he played a key role in the Avengers before retiring and passing his shield to Sam Wilson.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "thor":
      img.src = "image/thor.jpg";
      h2.innerText = "Thor Odinson";
      p.innerText =
        "The God of Thunder and prince of Asgard, Thor is a powerful warrior wielding the enchanted hammer, Mjolnir. Initially arrogant, he learned humility and became one of Earth’s greatest protectors. He battled Loki, Ultron, and Thanos, and after losing Asgard, he eventually found a new purpose as a more laid-back yet still formidable hero.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "iron":
      img.src = "image/iron.jpg";
      h2.innerText = "Iron Man";
      p.innerText =
        "A billionaire genius, playboy, and philanthropist, Tony Stark created the Iron Man suit after being captured by terrorists. He later improved his armor and became a founding member of the Avengers. His intelligence, charisma, and leadership played a crucial role in saving the world multiple times. He ultimately sacrificed himself to defeat Thanos in Avengers: Endgame.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "hulk":
      img.src = "image/hulk.jpg";
      h2.innerText = "Hulk";
      p.innerText =
        "A brilliant scientist specializing in gamma radiation, Bruce Banner was exposed to a gamma explosion, transforming him into the Hulk—an unstoppable, rage-fueled giant. Initially struggling to control his alter ego, he later found a balance, merging his intellect with the Hulk’s strength to become “Smart Hulk.”";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "hawkeye":
      img.src = "image/hawk.jpg";
      h2.innerText = "Hawkeye";
      p.innerText =
        "A master archer and S.H.I.E.L.D. agent, Clint Barton is one of the most skilled marksmen in the world. Despite lacking superpowers, his precision, strategy, and unwavering loyalty made him a crucial part of the Avengers. After losing his family to the Snap, he briefly became the ruthless vigilante Ronin before reuniting with his loved ones.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    case "blackwidow":
      img.src = "image/black.jpg";
      h2.innerText = "Black Widow";
      p.innerText =
        "A former Russian spy and assassin, Natasha Romanoff defected to S.H.I.E.L.D. and became one of its top agents. Skilled in hand-to-hand combat, espionage, and marksmanship, she played a critical role in the Avengers. She sacrificed herself in Endgame to obtain the Soul Stone, ensuring the team’s victory against Thanos.";
      img.className = "object-cover w-full h-full";
      msg.innerText = "";
      break;
    default:
      msg.innerText = "Error message";
      break;
  }
  input.value = "";
};
