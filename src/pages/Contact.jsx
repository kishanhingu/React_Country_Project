export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            className="form-control"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter Your E-mail"
            className="form-control"
          />

          <textarea
            name="message"
            rows="10"
            placeholder="Enter Message"
            autoComplete="off"
            required
            className="form-control"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
