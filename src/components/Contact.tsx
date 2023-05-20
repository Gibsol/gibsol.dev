import { validateEmail } from "@/utils/validateEmail";
import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/MOuRUc3z";

export const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const clearForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    } else {
      setIsValidEmail(true);
    }

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        message,
      }),
    });
    clearForm();
  };

  return (
    <section
      onSubmit={onSubmit}
      id="contact"
      className="min-h-screen hero bg-base-200"
    >
      <form>
        <div className="hero-content">
          <div className="max-w-md">
            <h2 className="text-xl font-bold">contact me</h2>
            <div className="flex flex-col gap-3 py-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="name"
                placeholder="your name"
                className="w-full max-w-xs input input-bordered"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="your company"
                className="w-full max-w-xs input input-bordered"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="your email"
                className="w-full max-w-xs input input-bordered"
              />
              {!isValidEmail && (
                <p className="text-xs text-error">Please enter a valid email</p>
              )}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={50}
                placeholder="your message"
                className="w-full max-w-xs textarea textarea-bordered textarea-md"
              ></textarea>
              <button type="submit" className="btn">
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
