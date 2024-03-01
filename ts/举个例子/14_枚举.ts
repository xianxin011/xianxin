// 枚举类型用于取值被限定在一定范围内的场景，比如一周只能有七天

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0); // true

console.log(Days[0] === "Sun"); // true