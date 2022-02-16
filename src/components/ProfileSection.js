const ProfileSection = ({ title, children }) => {
  return (
    <section className="profileSection">
      <aside className="aside">
        <h3>{title}</h3>
      </aside>
      {children}
    </section>
  );
};

export default ProfileSection;
