// a.Va returna minimul functiei dintr-un array.
// b.Va afisa numerele divizibile cu 3 din intervalul (x, y).
// c. Se returneaza media aritmetica a numerelor din intervalul (1,n).
// d. Returneaza produsul numereul consecutive din intervalul (1, number).
// e. Returneaza o valoare booleana daca numarul dat ca parametru este prim sau nu. Daca conditia din if este adevarata, return false, in caz contrar, return true.
// f. Functia verifica daca numarul dat ca parametru este prim sau nu. Daca conditia din if este adevarata, return factor, in caz contrar, return 1.
// g. Functia va returna numarul a ridicat la puterea b.
// h. Functia va returna numarul maxim dintr-un array.
// i. Functia returneaza maximul dintr-un array. //in if y = a[o]?
// j. Functia verifica daca un array este palindrome sau nu.
// k. Functia verifica daca un string este palindrome sau nu.
// l. Functia va afisa elementele divizibile cu 2 dintr-un array, in sens invers.
// m. Functia returneaza cate elemente din array sunt egale cu x.
// n. In interiorul functiei se adauga un element nou (x) array-ului, acest element fiind dat ca parametru, si se va afisa in consola noul array. 
//o. Functia returneaza produsul numerelor din intervalul [x, y].
//p. Functia afiseaza numerele duplicate dintr-un array.
//q. Functia returneaza elementele array-urilor in cazul in care acestea nu sunt goale.


//a. 
function displayStars(n) {
  str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n"
  }
  console.log(str)
}
displayStars(5)


//b. 
function displayStars2(n) {
  str = "";
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n - 1; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*"
    }
    str += "\n"
  }
  console.log(str)
}
displayStars2(5)


//c.
function digitsCount(n) {
  let contor = 1;
  while (n / 10 >= 1) {
    n = n / 10;
    contor++;
  }
  return contor;
}
console.log('Numarul este alcatuit din ', digitsCount(2222), ' cifre');


//d.
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let res = 0; y = x
  while (y > 0) {
    let lastDigit = y % 10;
    res = (res * 10) + lastDigit
    y = (y / 10) | 0;
  }
  return x === res
}
console.log('E palindrome ', isPalindrome(1331))

function isPalindrome2(x) {
  if (x < 0) {
    return false;
  }
  i = 0; j = x.length - 1;
  while (j >= 0) {
    if (x[i] !== x[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log('E palindrome ', isPalindrome2([1, 4, 3, 4, 1]))
console.log('E palindrome ', isPalindrome2([1, 4, 3, 4, 6, 1]))
