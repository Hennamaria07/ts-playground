let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = { //use either one or together if u add new properties that desn't be exists in both aliases then it will throws an error
  first: "HuXn",
  last: "WebDev",
  age: 29,
//   password: 'je',
//   email: 'huxn@webdev.com',
};

console.log(user);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);