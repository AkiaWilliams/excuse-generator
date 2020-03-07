window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  const pronoun = ["A", "The"];
  const subject = ["jogger", "raccon", "dog", "driver", "comedian", "pincone"];
  const action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  const possetion = ["homework", "laptop", "car", "shoe"];
  const where = ["on the street", "in my driveway", "in my driveway"];

  const proIndex = Math.floor(Math.random() * pronoun.length);
  const subIndex = Math.floor(Math.random() * subject.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const possetionIndex = Math.floor(Math.random() * possetion.length);
  const whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndex] +
    "" +
    subject[subIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex]
  );
};
