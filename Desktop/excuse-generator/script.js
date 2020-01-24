window.onload = () => {
  const who = ["the dog", "my granma", "his turtle", "my bird"];
  const what = ["eat", "pissed", "crushed", "broked"];
  const when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const randomNumber1 = Math.floor(Math.random() * who.length);
  console.log(who[randomNumber1]);
  const randomNumber2 = Math.floor(Math.random() * what.length);
  console.log(what[randomNumber2]);
  const randomNumber3 = Math.floor(Math.random() * when.length);
  console.log(when[randomNumber3]);
  this.document.getElementById("excuse").innerHTML = "Hello world";
  this.console.log(Math.floor(Math.random() * 5));
  this.console.log(who.length);
  this.console.log(what.length);
  this.console.log(when.length);
  this.console.log(who[3]);
  this.console.log(what[3]);
  this.console.log(when[5]);
};
