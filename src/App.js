import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 class="mainHeader">Jasper Oudemans</h1>
        <nav>
          <ul>
            <li>
              <a href="#aboutMe">About me</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
            <li>
              <a
                href="/downloadable/jasperOUDEMANS-resume.pdf"
                download="jasperOUDEMANS-resume"
                id="resume"
              >
                Resume PDF
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="banner">
        <img
          src="https://images.unsplash.com/photo-1506908423287-b833c9eaacf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="banner"
          id="banner"
        />

        <div class="profile">
          <img
            src="/images/profile-picture.jpeg"
            alt="Picture of me"
            class="profile-pic"
          />
        </div>
      </section>

      <main>
        <section class="aboutMeSection" id="aboutMe">
          <aside class="aside">
            <h3>About</h3>
            <h3>me</h3>
          </aside>

          <div class="aboutMe">
            <p>
              I am a current student at the coding bootcamp of the University of
              Arizona delivered by Trilogy Education. Before this, I was a high
              school and middle school teacher. I taught French to the
              high-schoolers and Latin to the middle-schoolers. It was my
              language aptitude that first made me wonder if I would be good at
              programming.
            </p>
            <br />
            <br />
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
            </p>
          </div>
        </section>

        <br />
        <br />

        <section class="work-section" id="work">
          <aside class="aside">
            <h3>Work</h3>
          </aside>

          <div class="images">
            <div class="relative big">
              <div class="label">
                <h4>Travel Planner</h4>
              </div>
              <img
                src="/images/travelPlanner.png"
                alt="Screenshot of travel planner app"
                class="img"
                id="project1"
              />
              <div class="filter">
                <a href="https://github.com/jasperoudemans/travel-planner"></a>
              </div>
            </div>

            <div class="images2">
              <div class="relative small">
                <div class="label">
                  <h4>Restaurant Review App</h4>
                </div>

                <img
                  src="/images/restaurantReview.png"
                  alt="Screenshot of restaurant review app"
                  class="img2"
                />
                <div class="filter">
                  <a href="https://github.com/jasperoudemans/baby-yelp"></a>
                </div>
              </div>

              <div class="relative small">
                <div class="label">
                  <h4>HTML Generator (CLI)</h4>
                </div>

                <img
                  src="/images/HTMLGenerator.png"
                  alt="Project3"
                  class="img2"
                />
                <div class="filter">
                  <a href="https://github.com/jasperoudemans/team_profile_generator"></a>
                </div>
              </div>
            </div>

            <div class="images2">
              <div class="relative small">
                <div class="label">
                  <h4>Text Editor (PWA)</h4>
                </div>
                <img
                  src="/images/textEditor.png"
                  alt="Screenshot of text editor app"
                  class="img2"
                />
                <div class="filter">
                  <a href="https://github.com/jasperoudemans/textEditor"></a>
                </div>
              </div>

              <div class="relative small">
                <div class="label">
                  <h4>Social Network API</h4>
                </div>
                <img
                  src="/images/socialNetworkAPI.png"
                  alt="Screeshot of social network api"
                  class="img2"
                />
                <div class="filter">
                  <a href="https://github.com/jasperoudemans/social-media-backend-API"></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <br />
      <br />

      <footer class="footer">
        <div class="footer-section" id="contact">
          <aside>
            <h3>Contact me</h3>
          </aside>

          <div class="contact">
            <ul class="contact-info">
              <li>707-590-****</li>
              <li>
                <a href="mailto:jasperoudemans@gmail.com">
                  jasperoudemans@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/jasperoudemans">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jasper-oudemans/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
