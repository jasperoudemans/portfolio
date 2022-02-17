const ProfileSection = ({ title, children, id }) => {
  return (
    <section className="profileSection" id={id}>
      <aside className="aside">
        <h3>{title}</h3>
      </aside>
      {children}
    </section>
  );
};

export default ProfileSection;
