/** 
* 문자열.chatAr(index)
*   - 인덱스는 0부터 시작
*   - 문자열에서 지정한 위치(index)의 뮨자 1개를 반환하는 메서드 
*/
let str ="JavaScript";

console.log(str.charAt(0));// "J"
console.log(str.charAt(4));// "S"
console.log(str.charAt(20));// "" (빈 문자열)
console.log(str.charAt(-1));// "" (음수는 무시)


/** 
* 문자열.length
*   - 문자열에 포함된 문자의 갯수를 반환하는 속성
*/
let text ="JavaScript";
console.log(text.length); // 10

let msg ="Hello World";
console.log(msg.length); // 11 (공백 포함)

"".length; // 0, 공백 갯수만큼 출력


/** 
* 문자열.replace(찾을내용, 바꿀내용)
    - 문자열에서 찾을 내용을 바꿀 내용으로 대체하여 반환
    - 같은 문자열 여러개가 있어도 맨 처음 문자열만 변경
*/
text = "Hello World";
let result = text.replace("World", "JavaScript");
console.log(result); // Hello JavaScript

let t = "apple apple apple";
console.log(t.replace("apple", "banana")); // banana apple apple


// 문자열.replace(정규식, "문자열")
// 문자열.replace(/문자열/g, "문자열")
t = "apple apple apple";
console.log(t.replace(/apple/g, "banana")); // banana banana banana
// g : global(전체) 치환 옵션

// [^0-9.] < 0부터 9까지의 숫자와 .을 제외한 모든 문자는 제거
// '' < 빈 문자열로 치환(제거)
"3.6k".replace(/[^0-9.]/g, '') // "3.6"
"1,234명".replace(/[^0-9.]/g, '') // "1234"


// String(12345): 12345를 문자열로 변환 ("12345")
// replace("234", "000"): "234"를 찾아서 000으로 변환 ("10005")
String(12345).replace("234", "000");  // "10005"

