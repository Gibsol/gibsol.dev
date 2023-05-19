import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/MOuRUc3z";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const clearForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setInfo("");
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
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
        info,
      }),
    });

    clearForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      id="contact"
      className="grid justify-center min-h-screen"
    >
      <div className="flex flex-col w-full gap-5 py-48 md:max-w-lg">
        <h2 className="text-5xl">contact</h2>
        <div className="w-full form-control">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            name="name"
            placeholder="name"
            className="w-full input input-bordered"
          />
          <label className="label">
            <span className="label-text-alt">
              <span className="text-red-700">*</span> required{" "}
            </span>
          </label>
        </div>
        <div className="w-full form-control">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            placeholder="company"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            placeholder="email"
            className="w-full input input-bordered"
          />
          <label className="label">
            <span className="label-text-alt">
              <span className="text-red-700">*</span> required{" "}
            </span>
          </label>
        </div>
        <div className="w-full form-control">
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
            maxLength={150}
            minLength={50}
            placeholder="additional information"
            name="info"
            className="w-full textarea textarea-bordered textarea-md"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              <span className="text-red-700">*</span> required{" "}
            </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Saada
        </button>
      </div>
    </form>
  );
};
