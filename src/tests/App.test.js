// // testing file extension must be like .test.js or .spac.js, .js file ko ek special folder me dalna hai to iska nam hona chahiyye __tests__ 
// import { render, screen, logRoles } from '@testing-library/react';
// import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// test("testing 1", () => {  // in place of test i can use it keyword
//   render(<App />)
  
//   // element ko ham testId se bhi catch kar sakte hai uske liye hame uss element ko ek id provide karna padegi
//   // kisi bhi element ka kya role hai vo ham kaise find kar sakte hai uske liye ek method hai logRoles ko import kar sakte hai 
//   logRoles(screen.getByTestId("myrootdiv"));

//   // best way to catch element using ByText method ye sabse badiya method hai 

//   // App component ke andar jo bhi element render ho rhe hai unhe hame catch karne ke liiye screen keyword ka use karenge 
//   const buttonElem =  screen.getByRole("button", {name: "test button", exact: false })  // name ke andar button ka text hai  // or case insensitive banane ke liye ham exact: false ka use kar sakte hai
//   // input element ka role hai textbox and button ka button hai and ul ka list and li ka listitem and h1 ka heading
  
//   // ab ham kya expact karte hai iss button element se 
//   // assert statement likhenge means jo ham expact kar rhe hai usse assert karo
//   expect(buttonElem).toBeInTheDocument();

//   // const buttonElem =  screen.queryByRole("button", {name: "test button", exact: false })  // name ke andar button ka text hai  // or case insensitive banane ke liye ham exact: false ka use kar sakte hai
//   // expect(buttonElem).not.toBeInTheDocument(); // getByRole se element ko catch karenge to yha hame error dekhne ko milegi kyonki ab button to exist hi nhi karta hai in that situation hame button ko queryByRole ya getBy se element ko catch karna chahiye ye hame null show karenge console me 
//   // expect(buutonElem).toBeNull(); // toBeNull ka bhi use kar sakte hai instead of .not.toBeInTheDocument()  

// });
