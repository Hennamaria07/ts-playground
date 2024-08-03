type P = {
    name: string;
    age: number;
    readonly email: string;
  };
  
  const userDetail: P = {
    name: "John",
    age: 20,
    email: "test@gmail.com",
  };
  
  console.log(userDetail.email); // Valid
//   user.email = "john@gmail.com" // 🚫 Not Valid