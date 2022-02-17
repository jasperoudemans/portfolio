import MainProject from "../components/MainProject";
import ProfileSection from "../components/ProfileSection";
import Project from "../components/Project";

const Home = () => {
  return (
    <>
      <ProfileSection title="About Me" id="aboutMe">
        <div class="aboutMe">
          <p>
            I am a current student at the coding bootcamp of the University of
            Arizona delivered by Trilogy Education. Before this, I was a high
            school and middle school teacher. I taught French to the
            high-schoolers and Latin to the middle-schoolers. It was my language
            aptitude that first made me wonder if I would be good at
            programming.
          </p>
          <br />
          <br />
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
          </p>
        </div>
      </ProfileSection>

      <br />
      <br />

      <ProfileSection title="Projects" id="work">
        <div class="images">
          <MainProject
            title="Travel Planner"
            src="/images/travelPlanner.png"
            alt="Screenshot of travel planner app"
            href="https://github.com/jasperoudemans/travel-planner"
          />

          <div className="images2">
            <Project
              title="Restaurant Review App"
              src="/images/restaurantReview.png"
              alt="Screenshot of restaurant review app"
              href="https://github.com/jasperoudemans/baby-yelp"
            />

            <Project
              title="HTML Generator (CLI)"
              src="/images/HTMLGenerator.png"
              alt="Project3"
              href="https://github.com/jasperoudemans/team_profile_generator"
            />
          </div>

          <div className="images2">
            <Project
              title="Text Editor (PWA)"
              src="/images/textEditor.png"
              alt="Screenshot of text editor app"
              href="https://github.com/jasperoudemans/textEditor"
            />

            <Project
              title="Social Network API"
              src="/images/socialNetworkAPI.png"
              alt="Screeshot of social network api"
              href="https://github.com/jasperoudemans/social-media-backend-API"
            />
          </div>
        </div>
      </ProfileSection>
    </>
  );
};

export default Home;
