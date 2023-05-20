import Link from "next/link";
import { useEffect, useState } from "react";

export const Masthead = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="masthead" className="min-h-screen hero bg-base-200">
      <div
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } duration-1000 hero-content`}
      >
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">gibsol</h1>
          <p className="py-3 text-xl">
            a <span className="font-bold">fullstack developer </span> based in
            Estonia, dedicated to bringing ideas to life through innovative
            technology solutions.
          </p>
          <div className="flex gap-3">
            <Link href="#about" className="btn btn-primary">
              about me
            </Link>
            <Link href="#contact" className="btn btn-primary">
              contact me
            </Link>
            <Link href="https://github.com/gibsol" className="btn btn-primary">
              github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
