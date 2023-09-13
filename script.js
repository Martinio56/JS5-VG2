//Oppgave 1-------------------------------------------------------------------------------------------------------------------------

// sumtre = (a, b, c) => a + b + c;

// console.log(sumtre(3,3,3));

//Oppgave 2-------------------------------------------------------------------------------------------------------------------------

// teller = () => {
//     for (let i = 1; i <= 26; i++) {
//         console.log(i);
//     }
// }

// teller();

//Oppgave 3-------------------------------------------------------------------------------------------------------------------------

// tilfe = () => Math.floor(Math.random() * 20) + 20;

// tilfe();

//Oppgave 4-------------------------------------------------------------------------------------------------------------------------

// const boksDiv = document.createElement("div");
// boksDiv.setAttribute("id", "boks");

// document.body.appendChild(boksDiv);

// for (let i = 1; i <= 9; i++) {
  
//   const tekstboks = document.createElement("div");
  
//   const tekst = document.createElement("p");
  
//   tekst.innerHTML = "Røyken VGS";
  
//   tekstboks.appendChild(tekst);
  
//   boksDiv.appendChild(tekstboks);
  
//   tekstboks.style.border = "1px solid black";
//   tekstboks.style.padding = "6px";
//   tekstboks.style.textAlign = "center";
//   tekstboks.style.width = "80px";
//   tekstboks.style.height = "15px";
//   tekstboks.style.fontSize = "14px";
//   tekstboks.style.lineHeight = "1em";

//   tekst.style.margin = "0";
//   tekst.style.padding = "0";
//   tekst.style.fontSize = "inherit";
//   tekst.style.lineHeight = "inherit";
// }

// boksDiv.style.display = "grid";
// boksDiv.style.gridTemplateColumns = "repeat(3, 1fr)";
// boksDiv.style.gridTemplateRows = "repeat(3, 1fr)";
// boksDiv.style.gap = "3px";
// boksDiv.style.border = "1px solid black";
// boksDiv.style.margin = "20px";
// boksDiv.style.width = "290px";
// boksDiv.style.padding = "3px";

//Oppgave 5-------------------------------------------------------------------------------------------------------------------------

// samlign = () => {
//     T1 = Math.floor(Math.random() * 11);
//     T2 = Math.floor(Math.random() * 11);

//     if (T1 > T2) {
//         console.log(`T1 = ${T1} er større enn T2 = ${T2}`);
//     } else if (T1 < T2) {
//         console.log(`T1 = ${T1} er mindre enn T2 = ${T2}`);
//     } else if (T1 == T2) {
//         console.log(`T1 = ${T1} er lik T2 = ${T2}`);
//     }
// }

// samlign();

//Oppgave 6-------------------------------------------------------------------------------------------------------------------------

// T1 = Number(prompt('Skriv et tall'));
// T2 = Number(prompt('Skriv et tall til'));
// M1 = prompt('Skriv +, -, * eller /');

// minus = () => T1 - T2;
// gange = () => T1 * T2;
// dele = () => T1 / T2;
// plus = () => T1 + T2;

// if (M1 == '+') {
//     console.log(plus());
// } else if (M1 == '-') {
//     console.log(minus());
// } else if (M1 == '*') {
//     console.log(gange());
// } else if (M1 == '/') {
//     console.log(dele());
// }

//Oppgave 7-------------------------------------------------------------------------------------------------------------------------

// T1 = Number(prompt('Skriv et tall'));
// T2 = Number(prompt('Skriv et tall til'));
// T3 = Number(prompt('Skriv et tall til igjen'));

// tremax = () => {
//     if (T1 > T2 && T1 > T3) {
//         console.log(`T1 = ${T1} er størst av T2 = ${T2} og T3 = ${T3}`);
//     } else if (T1 < T2 && T2 > T3) {
//         console.log(`T2 = ${T2} er størst av T1 = ${T1} og T3 = ${T3}`);
//     } else if (T1 < T3 && T2 < T3) {
//         console.log(`T3 = ${T3} er størst av T1 = ${T1} og T2 = ${T2}`);
//     }
// }

// tremax();

//Oppgave 8-------------------------------------------------------------------------------------------------------------------------

// sorterTall = (t1, t2, t3, t4, t5) => {
//   const tall = [t1, t2, t3, t4, t5];

//   tall.sort((a, b) => a - b);

//   return tall;
// }

// const T1 = Number(prompt("Skriv inn tall 1:"));
// const T2 = Number(prompt("Skriv inn tall 2:"));
// const T3 = Number(prompt("Skriv inn tall 3:"));
// const T4 = Number(prompt("Skriv inn tall 4:"));
// const T5 = Number(prompt("Skriv inn tall 5:"));

// const sorterteTall = sorterTall(T1, T2, T3, T4, T5);

// console.log("Sorterte tall fra minst til størst: ", sorterteTall);

//Oppgave 9-------------------------------------------------------------------------------------------------------------------------

// nfunc = () => {
//     while (true) {
//         var n = Number(window.prompt("Skriv et tall"))
//         if (n == 1) {
//             console.log("Prosessen er stoppet");
//             break;
//         } else if (n%2 == 0) {
//             console.log("While Loop fortsetter. Resultat er: " + n/2);
//         } else if (n%2 != 0){
//             console.log("While Loop fortsetter. Resultat er: " + (3*n+1));
//         }
//     }
// }

// console.log(nfunc());

//----------------------------------------------------------------------------------------------------------------------------------