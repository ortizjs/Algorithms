// function ada(year){
//   let tuesday = 0;
//   let sum = 0;
//   while(tuesday <= 2) {
//     if (num < 2) {
//       sum += ((6 + 2) - num);
//       num = 2;
//       tuesday += 1;
//     } else if (num > 2) {
//       sum += (2 - num);
//       num = 2
//       tuesday += 1
//     }
//   }
//   return sum;
// }

// let ada = function (year) {
//     let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let date = new Date("October 1, " + year).getUTCDay();
//     let day = 0;
//     let count = 0;
//     while (count < 2) {
//         day += 1;
//         if (weekdays[(date % 7)] === "Tuesday") {
//             count += 1
//         }
//         date += 1;
//     }
//     console.log(day)
//     // return day;
// }
const ada = function (year) {
    let date = new Date("October 1, " + year).getUTCDay();

    let day = 0;
    let count = 0;
    while (count < 2) {
        day += 1;
        if ((date % 7) === 2) {
            count += 1;

        }
        date += 1;

    }
    console.log(day + " result");
};
ada(2019);