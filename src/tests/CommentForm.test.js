import { fireEvent, render, screen } from '@testing-library/react';
import CommentForm from '../components/CommentForm';
import userEvent from '@testing-library/user-event'

// esa bhi kar sakte hai 
// agar do cases related hai ek dusre se to ham unhe group kar sakte hai 
// describe("test cases related to button", () => {
//     test("Initial Conditions", () => {
//         render(<CommentForm/>)
    
//         const commentInput = screen.getByRole("textbox")
//         expect(commentInput).toBeInTheDocument()
        
//         const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact: false})
//         expect(checkbox).toBeInTheDocument()
    
//         const submitButton = screen.getByRole("button", {name:"comment", exact: false})
//         expect(submitButton).toBeDisabled()
//     })  
    
//     test("Enable submit button on type and checkbox click", () => {
    
//     })
// })


test("Initial Conditions", () => {
    render(<CommentForm/>)

    const commentInput = screen.getByRole("textbox")
    expect(commentInput).toBeInTheDocument()
    
    // const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact: false})
    // const checkbox = screen.getByTestId("terms-checkbox");
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument()
    
    const submitButton = screen.getByRole("button", {name:"comment", exact: false})
    expect(submitButton).toBeDisabled()
})  

test("Enable submit button on type and checkbox click", async () => {
    render(<CommentForm/>)

    // teen tarah se ham checkbox ko catch kar sakte hai 
    // const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact: false})
    // const checkbox = screen.getByTestId("terms-checkbox");
    const checkbox = screen.getByRole("checkbox");
    
    const submitButton = screen.getByRole("button", {name:"comment", exact: false})
    const commentInput = screen.getByPlaceholderText('write your comment here', {exact : false})

    // instead of fireEvent we can use userEvent which is from our testing librar
    // fireEvent.change(commentInput, {target:{value: "something"}})
    // fireEvent.click(checkbox);

    // expect(submitButton).toBeEnabled();
    
    // fireEvent.click(checkbox);
    // expect(submitButton).toBeDisabled();

    await userEvent.type(commentInput, "something")
    await userEvent.click(checkbox);
    expect(submitButton).toBeEnabled();
    
    await userEvent.click(checkbox);
    expect(submitButton).toBeDisabled();
})