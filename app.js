// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

// 1-task
// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle(6, 9);
// Output: 54, 30;

// function rectangle(a, b) {
//   let s = a * b;
//   let p = 2 * (a + b);
//   console.log(`${s}, ${p}`);
// }

// rectangle(6, 9);

// 2-task
// Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)

// function rectangle(a) {
//   let p = 3 * a;
//   let _p = p / 2;
//   let s = Math.sqrt(_p * (_p - a) * (_p - a) * (_p - a));
//   console.log(`${s}, ${p}`);
// }

// rectangle(6);

// 3-task
// Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY

// function sum(n) {
//   let counter = 0;
//   for (let i = 0; i <= n; i++) {
//     counter += i;
//   }
//   return counter;
// }

// const result = sum(7);
// console.log(result);

// 4-task
// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// function isSquare(k) {
//   if (k > 0) {
//     return Number.isInteger(Math.sqrt(k));
//   } else {
//     return "0 da katta son kiriting";
//   }
// }

// console.log(isSquare(4));

// 5-task
// Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// function digitCount(k) {
//   return String(k).length;
// }
// console.log(digitCount(8791));

// 6-task
// Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

// function getDigitSum(n) {
//   let sum = 0;
//   let num = String(n).split("");

//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   return sum;
// }
// console.log(getDigitSum(456));

// 7-task
// Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40

// function timeToHMS(T) {
//   let h = Math.floor(T / 3600);
//   let m = Math.floor((T / 60) % 60);
//   let s = T % 60;

//   return `${h}h:${m}m:${s}s:`;
// }

// console.log(timeToHMS(7262));

// 8-task bu ishlashi uchun 86-92 qatorlarni comentdan chiqarish kerak
// Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00c
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

// function incTime(H, M, S) {
//   let seconds = H * 3600 + M * 60 + S + 1;
//   return timeToHMS(seconds);
// }

// console.log(incTime(1, 59, 59));

// UYGA VAZIFA

// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243
// function power(a, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }
//   return result;
// }
// console.log(power(3, 5));

// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24
// function mean(a, b) {
//   let arifmetigi = (a + b) / 2;
//   let geometrigi = Math.sqrt(a * b);
//   console.log(`${arifmetigi}, ${geometrigi}`);
// }

// mean(12, 48);

// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1
// function sing(n) {
//   return n > 0 ? 1 : n < 0 ? -1 : 0;
// }

// console.log(sing(1))

// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   return D > 0 ? 2 : D == 0 ? 1 : 0;
// }

// console.log(numberOfRoots(1, -6, 9));

// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY
// function areaCircle(R) {
//   return Math.PI * R ** 2;
// }

// console.log(areaCircle(3).toFixed(2));

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27
// function sumRange(A, B) {
//   if (A > B) return 0;
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumRange(8, 10));

// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(A, B, S) {
//   switch (S) {
//     case "+":
//       return A + B;
//     case "-":
//       return A - B;
//     case "*":
//       return A * B;
//     case "/":
//       return A / B;
//     default:
//       return 0;
//   }
// }
// console.log(calc(7, 8, "+"))

// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true
// function isEven(K) {
//   return K % 2 == 0 ? true : false;
// }
// console.log(isEven(148));

// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//   const arr = [a, b, c];
//   arr.sort((x, y) => x - y);
//   console.log(arr[0], arr[1], arr[2]);
// }

// sortABC(10, 5, 8);

// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY

// function isPowerN(K, N) {
//   if (K < 1 || N <= 1) return K === 1;

//   while (K % N === 0) {
//     K = K / N;
//   }

//   return K === 1;
// }

// console.log(isPowerN(64, 4));

// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// function isPrime(N) {
//   if (N <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(5));

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4
// function isPrime(N) {
//   if (N <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) return false;
//   }
//   return true;
// }

// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) count++;
//   }
//   return count;
// }

// console.log(numberOfPrime(10));

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1
// function digitCount(K) {
//   return String(K).length;
// }

// function digitNth(K, N) {
//   let str = String(K);
//   if (N > str.length) return -1;
//   return Number(str[N - 1]);
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5));

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// function inverseNumber(N) {
//   return Number(String(N).split("").reverse().join(""));
// }

// console.log(inverseNumber(56814));

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

// function inverseNumber(N) {
//   return Number(String(N).split("").reverse().join(""));
// }

// function isPalindrom(N) {
//   if (N > 0) {
//     return N == inverseNumber(N);
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrom(16788761));

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

// function factorial(N) {
//   if (N < 0) return 1;
//   let result = 1;
//   for (let i = 2; i <= N; i++) result *= i;
//   return result;
// }

// console.log(factorial(5));

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) sum += i;
//   }
//   return sum;
// }

// console.log(getSum3(15));

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

// function sumOddEven(N) {
//   let even = 0,
//     odd = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) even += i;
//     else odd += i;
//   }
//   console.log(even, odd);
// }

// sumOddEven(10);

// Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400

// function invertTime(H, M, S) {
//   return H * 3600 + M * 60 + S;
// }

// console.log(invertTime(0, 6, 40));

// Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// // decTime(0, 6, 40) => 00:06:39
// function timeToHMS(T) {
//   let s = T % 60;
//   let m = Math.floor((T / 60) % 60);
//   let h = Math.floor(T / 3600);

//   return `${h}h:${m}m:${s}s:`;
// }

// function incTime(H, M, S) {
//   let seconds = H * 3600 + M * 60 + S - 1;
//   return timeToHMS(seconds);
// }

// console.log(incTime(0, 6, 40));

// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.
// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// console.log(isLeapYear(2020));

// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   if (M === 2) return isLeapYear(Y) ? 29 : 28;
//   else if ([4, 6, 9, 11].includes(M)) return 30;
//   else return 31;
// }
// console.log(monthDays(2, 2020));
// console.log(monthDays(3, 2021));

// Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   if (M === 2) return isLeapYear(Y) ? 29 : 28;
//   else if ([4, 6, 9, 11].includes(M)) return 30;
//   else return 31;
// }

// function prevDate(D, M, Y) {
//   if (D == 1) {
//     return `${monthDays(M - 1, Y)}.${M - 1}.${Y}`;
//   } else {
//     return `${D - 1}.${M}.${Y}`;
//   }
// }
// console.log(prevDate(10, 3, 2022));

// Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   if (M === 2) return isLeapYear(Y) ? 29 : 28;
//   else if ([4, 6, 9, 11].includes(M)) return 30;
//   else return 31;
// }

// function nextDate(D, M, Y) {
//   let sana = monthDays(M, Y);
//   if (sana == D) {
//     return `01.${M + 1}.${Y}`;
//   } else {
//     return `${D + 1}.${M}.${Y}`;
//   }
// }
// console.log(nextDate(10, 3, 2022));

// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24

// function getDividersNumberAndSum(N) {
//   let count = 0;
//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       count++;
//       sum += i;
//     }
//   }

//   return `${count}, ${sum}`;
// }

// // Misol
// console.log(getDividersNumberAndSum(12));
