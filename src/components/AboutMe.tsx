export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex flex-col gap-4 px-2 text-right py-28 md:text-center">
        <h2 className="text-6xl">about me</h2>
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-bold">solid knowledge of</p>
          {/* todo: gradient text */}
          <ul className="text-6xl font-bold">
            <li className="text-transparent bg-gradient-to-r from-yellow-500 to-gray-600 bg-clip-text">
              JavaScript
            </li>
            <li className="text-transparent bg-gradient-to-r from-blue-900 to-gray-800 bg-clip-text">
              TypeScript
            </li>
            <li className="text-transparent bg-gradient-to-r from-blue-900 to-gray-600 bg-clip-text">
              React
            </li>
            <li className="text-transparent bg-gradient-to-r from-red-600 to-gray-800 bg-clip-text">
              Java
            </li>
            <li className="text-transparent bg-gradient-to-r from-orange-500 to-gray-800 bg-clip-text">
              Rust
            </li>
          </ul>
        </div>
        <div className="justify-end gap-3 md:justify-center btn-group">
          <button className="btn">get in touch</button>
          <button className="btn">projects</button>
        </div>
      </div>
    </section>
  );
};
