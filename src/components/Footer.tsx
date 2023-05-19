import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 footer footer-center text-base-content">
      <div>
        <p>
          Licensed under{" "}
          <Link
            className="link"
            href="https://github.com/Gibsol/gibsol.dev/blob/main/LICENSE"
          >
            The Unlicense
          </Link>
        </p>
      </div>
    </footer>
  );
};
