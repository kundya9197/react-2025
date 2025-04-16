import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const validateName = (value) => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (value.trim().length < 4 && !namePattern.test(value)) {
      return alert("Name must be at least 4 characters long and Name can only contain letters and spaces.");
    } 
    // else if (!namePattern.test(value)) {
    //   return "Name can only contain letters and spaces.";
    // }
    return "";
  }

  const handelChange = (event) => {
    setName(event.target.value);
    setError(validateName(event.target.value)); //validate on input change
  }
  const handelSubmit = (event) => {
    event.preventDefault();
    const validationError = validateName(name);
    if (validationError) {
      setError(validationError)
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 my-8 p-4 outline-dashed'>
        <h1 className='text-center text-3xl py-2'>Form Validation</h1>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name='name'
            value={name}
            onChange={handelChange}
            placeholder='name'
            className='w-half' /> <br />
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
          <button type="submit" disabled={error !== ""}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
