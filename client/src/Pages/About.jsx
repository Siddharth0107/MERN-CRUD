import { useAuth } from "../store/Auth";
import { NavLink } from "react-router-dom"

const About = () => {
  const { user } = useAuth();
  return (
    <div>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">

              <p> Welcome {user ? `${user.name}, to our website` : `to our website`} </p>
              <h1>Why Choose Us?</h1>
              <p>We are innovative and passionate about the work we do. We always come up with new ways to enrich your revenue to greater heights. Extraordinary and High Quality services: We have a supreme team who works rigorously to grown businesses beyond clients expectations.</p>
              <p>We offer the best customer service in the industry. Our team is dedicated to providing you with a positive experience from start to finish.</p>
              <p>We use the highest quality materials and construction methods to ensure that our products are built to last.</p>
              <p>We have a team of experienced and qualified professionals who are experts in their field.</p>
              <p>We offer a wide range of products and services to meet the needs of our customers.</p>
              <div className="btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>

                <NavLink to="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </NavLink>
              </div>
            </div>
            {/* //hero images */}
            <div className="hero-image">
              <img src="./src/about.png" width="400" height="400" alt="about" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
