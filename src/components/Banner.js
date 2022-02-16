const Banner = () => {
  return (
    <section className="banner">
      <img
        src="https://images.unsplash.com/photo-1506908423287-b833c9eaacf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="banner"
        id="banner"
      />

      <div className="profile">
        <img
          src="/images/profile-picture.jpeg"
          alt="My face"
          className="profile-pic"
        />
      </div>
    </section>
  );
};

export default Banner;
