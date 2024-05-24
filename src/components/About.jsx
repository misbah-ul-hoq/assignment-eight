const About = () => {
  return (
    <section className="about-section bg-base-100 py-20">
      <div className="container-center mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          About Book Vibe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="about-content">
            <p className="text-base mb-4 leading-relaxed">
              Book Vibe is a passionate community for book lovers of all kinds.
              We believe that reading can be a transformative experience, and we
              are here to help you discover new favorites, connect with fellow
              readers, and share your love of books.
            </p>
            <p className="text-base mb-4 leading-relaxed">
              Our website offers a variety of features to enhance your reading
              journey. Browse through our extensive book database, track your
              reading progress, create custom shelves, and join book clubs to
              discuss your favorite reads with others.
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Discover new books based on your interests.</li>
              <li>Connect with readers who share your taste in books.</li>
              <li>Write reviews and share your thoughts on books.</li>
              <li>Track your reading progress and set reading goals.</li>
              <li>Find book recommendations from our passionate community.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
