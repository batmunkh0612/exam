const string = 'apple, banana, kiwi';

console.log(string.toUpperCase);

// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'

console.log()
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
const array = ['d', 'e', 'c', 'a', 'b'];
array.sort()
console.log(array);
// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
const arr4 = ['d', 'e', 'c', 'a', 'b'];
console.log(arr4);
const arr4_1 = arr4.splice(1,3);
console.log(arr4_1);
// 5. Өгсөн array - ын эхний элемэнтийг устага
const arr5 = ['d', 'e', 'c', 'a', 'b'];
arr5.shift();
console.log(arr5)

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
const arr6 = ['d', 'e', 'c', 'a', 'b'];
arr6.unshift();
console.log(arr6)

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
