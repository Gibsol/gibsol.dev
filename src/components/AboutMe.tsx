export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex flex-col gap-4 px-2 text-right py-28 md:text-center">
        <h2 className="text-5xl">about me</h2>
        <div>
          <p className="text-4xl font-bold">solid knowledge of</p>
          {/* todo: gradient text */}
          <ul className="text-4xl font-bold">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Rust</li>
          </ul>
        </div>
        <div className="justify-center gap-3 btn-group">
          <button className="btn">get in touch</button>
          <button className="btn">projects</button>
        </div>
      </div>
    </section>
  );
};
