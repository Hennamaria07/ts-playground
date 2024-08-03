type UserInfo = {
    first: string;
    last: string;
    age: number;
  };
  
  type AccountDetails = {
    email: string;
    password: string;
  };
  
  type UserDetail = UserInfo & AccountDetails;
  
  const luffy: UserDetail = {
    first: "HuXn",
    last: "WebDev",
    age: 18,
    email: "test@gmail.com",
    password: "strongpassword123",
  };
  
  console.log(
    `Name: (${luffy.first} ${luffy.last}) Age: (${luffy.age}) Email: (${luffy.email}) Password: (${luffy.password})`
  );

//   ERROR CASE
// type Detail1 = {
//     name: string;
//     age: number;
// }

// type Detail2 = {
//     name: number;
//     password: string;
// }

// type InvalidUserDetail = Detail1 & Detail2;

// const invalidUser: InvalidUserDetail = {
//     name: "Alex", 
//     age: 20,
//     password: "strongpassword123",
// }