// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
for (let i = 0; i < 101; i ++ ) {
    console.log(i);
}


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
for (let j = 60; j > 29; j -- ) {
    if (j % 2 != 0 ) {
        console.log(j)
    }
}

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
let string = "";
for ( let j = 7; j > 0; j -- ) {
    for (let i = 1; i < 8; i ++) {
        if(i==j){
            string = string + "+";
        }
        else{
            string = string + "#"
        }
    }
    console.log(string);
    string = "";
}


// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй
function convertRegNum(register) {
    let on = register[2]+register[3];
    let sar = register[4]+register[5];
    let odor = register[6]+register[7];
    let huis = register[register.length-1];
    let string = "";
    if (on < 30) {
        string = string + "20" + on
    }
    else {
        string = string + "19" + on
    }
    string = string + "-" + sar + "-" + odor + " онд төрсөн";
    if (huis % 2 ===0) {
        string = string + " эмэгтэй"
    }
    else{
        string = string + " эрэгтэй"
    }
    return string
}

console.log(convertRegNum("AB90020321"));

// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
let red = document.getElementsByClassName("red-boxes");
for(let i = 0; i < red.length;i++){
    red[i].style.backgroundColor = "red";
}
// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
let blue = document.querySelector("#blue-box").style.backgroundColor = "blue";



// 7. Бүх div - ийг бор болго;
let div = document.getElementsByTagName("div");
for(let i = 0; i < div.length;i++){
    div[i].style.backgroundColor = "brown";
}

// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
let $section = document.createElement('section');
let $article = document.createElement('article');
$section.className = "box";
$section.style.backgroundColor = "black";
$section.style.marginTop = "15px";

$article.className = "box";
$article.id ="green"
$article.style.backgroundColor = "red";
$article.style.borderRadius = "50%";
document.body.append($section);
$section.append($article);
