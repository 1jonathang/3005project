// our server code will never be bundled with the client code
// this is the equivalent of an api route, came with next 14.0
"use server";

export const login = (values: any) => {
  console.log(values);
};
