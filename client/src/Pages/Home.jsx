import React from "react";

const Home = () => {
  return (
    <div>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome to the best Mern Company</p>
              <h1>A warm welcome to all</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem iure veniam mollitia esse harum quis molestias nobis
                accu! Iusto accusamus explicabo nostrum! Earum unde aliquid rem?
              </p>
              <div className="btn btn-primary">
                <a href="./contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="./services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="image"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered companies</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="div1">
            <h2>24x7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>

      {/* 3rd section  */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="image"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are happy to help</p>
            <h1>Get started today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              illum ipsum culpa dolore perferendis voluptate consectetur iusto
              sed rem vitae.
            </p>
            <div className="btn btn-primary">
              <a href="./contact">
                <button className="btn">connect now</button>
              </a>
              <a href="./services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>


      </section>

      
    </div>
  );
};

export default Home;
