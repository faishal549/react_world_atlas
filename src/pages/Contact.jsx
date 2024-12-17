export const Contact =()=>{

    const handleFormSubmit =(formData)=>{
         const inputData = Object.fromEntries(formData.entries())
         console.log(inputData)
    }
    return (
        <>
          <section className="container">
          <h2>Contact Us.</h2>
          <hr/>
            <div className="form-div">
                <form action={handleFormSubmit}>
                    <input type ="text" 
                    className="form-control"
                    required 
                    autoComplete="off"
                    placeholder="Enter your name"
                    name="username" />

                   <input type ="email" 
                   className="form-control"
                    required 
                    autoComplete="off"
                    placeholder="email"
                    name="email" />

                    <textarea 
                    className="form-control"
                     rows="5"
                     type="text"
                     placeholder="Write your text.."
                     required
                     autoComplete="off"
                     name="textarea"
                    />
                    <button type="submit" value="send" className="btn">Send</button>
                </form>
            </div>
          </section>

        </>
    )
}