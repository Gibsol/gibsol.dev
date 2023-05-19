import Link from "next/link";
import { useEffect, useState } from "react";

export const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="introduction" className="min-h-screen hero">
      <div className="text-center hero-content">
        <div
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } duration-1000 max-w-md`}
        >
          <h1 className="text-5xl font-bold">gibsol</h1>
          <p className="py-6 text-xl">a fullstack developer based in Estonia</p>
          <div className="gap-3 btn-group">
            <Link className="btn" href="#about">
              about me
            </Link>
            <Link className="btn" href="https://github.com/gibsol">
              github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
