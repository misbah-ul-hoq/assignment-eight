const Contact = () => {
  return (
    <section className="contact-section bg-base-100 py-20">
      <div className="container-center mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Connect with Book Vibe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card card-side shadow-md bg-base-200">
            <div className="card-body side back">
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <p className="text-base mb-4">
                Have questions, feedback, or book recommendations? We'd love to
                hear from you!
              </p>
              <a href="mailto:contact@bookvibe.com" className="btn btn-primary">
                Email Us
              </a>
            </div>
          </div>
          <form className="card shadow-md bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Your message"
                  rows={5}
                ></textarea>
              </div>
              <button className="btn btn-primary mt-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
