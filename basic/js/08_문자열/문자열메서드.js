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

// 문자열.substring(시작인덱스, 끝인덱스)
// - 문자열에서 지정한 인덱스 구간의 문자열을 추출하여 새로운 문자로 반환
// > 시작인덱스 ~ 끝인덱스-1

text = "JavaScript";

console.log(text.substring(0,4)); // "Java"
console.log(text.substring(4)); // "Script"
console.log(text.substring(4,10)); // "Script"

// 인덱스 순서 자동 교환: (4,10)으로 판단
console.log(text.substring(10, 4)); // "Script"

// 음수는 0으로 처리: (0,4)로 판단
console.log(text.substring(-3, 4)); // "Java"


// indexOf(검색값, 인덱스)
// - 문자열 또는 배열에서 특정값이 처음으로 등장하는 위치(index) 반환
// - 찾는 값이 없으면 -1

console.log(text.indexOf("S"));// 4
console.log(text.indexOf("Script"));// 4
console.log(text.indexOf("script"));// -1 (대소문자 구분)
console.log(text.indexOf("a",2));// 3 (2번 인덱스부터 검색)

let fruits = ["apple","banana","orange"];

console.log(fruits.indexOf("banana"));// 1
console.log(fruits.indexOf("kiwi"));// -1

// 포함 여부 확인
if (text.indexOf("Java") !== -1) {
console.log("포함됨");
}

// includes()
// - 문자열 또는 배열에서 특정값이 포함되어 있는지 확인
// - 결과는 true or false

text = "Hello World";

console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (대소문자 구분)
console.log(text.includes("Hello", 1)); // false (1번째 문자부터 검색)

let arr = [1, 2, 3, 4];

console.log(arr.includes(3)); // true
console.log(arr.includes(5)); // false

// 예시
if ($btn.text().includes('k')) current *= 1000;
// 버튼 텍스트가 3.6k인 경우 k가 포함되어있는지 확인 > true
// true면 숫자 3.6에서 3600으로 반환, false면 숫자 그대로 사용

// split() <--> join()
// - 문자열을 지정한 구분자를 기준으로 나눠 배열로 반환
"apple,banana,orange".split(","); // ["apple", "banana", "orange"]
"2025-12-16".split("-"); // ["2025", "12", "16"]
"hello world".split(" "); // ["hello", "world"]
"abc".split(""); // ["a", "b", "c"]
"a-b-c-d".split("-",2); // ["a", "b"]

// 예시: 이메일 아이디 / 도메인 분리
const email ="user@test.com";
const [id, domain] = email.split("@");


// 1. length
"hello".length              // 5

// 2. charAt()
"apple".charAt(1)           // "p"

// 3. at()
// - 인덱스가 음수면 오른쪽에서부터 
"apple".at(-1)              // "e"

// 4. substring()
"abcdef".substring(1, 4)    // "bcd"

// 5. slice()
// - 인덱스가 음수면 오른쪽에서부터 
"abcdef".slice(-3)          // "def"

// 6. substr() (과거 방식)
"abcdef".substr(2, 3)       // "cde"

// 7. indexOf()
"banana".indexOf("na")      // 2

// 8. lastIndexOf()
// - indexOf()랑 반대, 끝에서 시작방향으로 찾음
"banana".lastIndexOf("na")  // 4

// 9. includes()
"hello".includes("ell")     // true

// 10. startsWith()
"hello".startsWith("he")    // true

// 11. endsWith()
"hello".endsWith("lo")      // true

// 12. toUpperCase()
"Hello".toUpperCase()       // "HELLO"

// 13. toLowerCase()
"Hello".toLowerCase()       // "hello"

// 14. replace()
"apple".replace("p", "b")   // "abp                                 le"

// 15. replaceAll()
"a-a-a".replaceAll("a","b") // "b-b-b"

// 16. split()
"a,b,c".split(",")          // ["a","b","c"]

// 17. trim()
"  hi  ".trim()             // "hi"

// 18. trimStart()
"  hi".trimStart()          // "hi"

// 19. trimEnd()
"hi  ".trimEnd()            // "hi"

// 20. repeat()
"ha".repeat(3)              // "hahaha"

// 21. concat()
"a".concat("b")             // "ab"

