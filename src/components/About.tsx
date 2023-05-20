import Link from "next/link";

export const About = () => {
  const tech = [
    "React",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "Rust",
    "SQL",
  ];

  return (
    <section id="about" className="min-h-screen hero bg-base-200">
      <div className="duration-1000 hero-content">
        <div className="max-w-md">
          <div className="flex flex-col gap-3 py-4 text-md">
            <h2 className="text-xl font-bold">About me</h2>
            <p>
              I am <span className="font-bold">Paul</span>, a full-stack
              developer with expertise in
              {tech.map((t) => (
                <span key={t} className="font-bold">
                  {" "}
                  {t}
                  {tech.indexOf(t) === tech.length - 1 ? "" : ","}
                </span>
              ))}{" "}
              I love diving into the world of technology and creating innovative
              solutions.
            </p>
            <p>
              When I am not coding, I have a range of hobbies that keep me
              balanced. Playing musical instruments allows me to express my
              creativity and unwind. I am an avid reader, always exploring new
              ideas through books. Sports keep me active and energized, and
              spending quality time with loved ones is something I cherish.
            </p>
            <p>
              I am thrilled about the opportunity to bring my technical skills
              and diverse interests to your team. Lets connect and discuss how
              we can achieve great things together!
            </p>
          </div>
          <div className="flex gap-3">
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
