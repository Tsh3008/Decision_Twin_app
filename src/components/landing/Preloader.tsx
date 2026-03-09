const Preloader = () => {
  return (
    <div className="home-preloader" role="status" aria-label="Loading home page">
      <div className="home-preloader__spinner" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export { Preloader };
