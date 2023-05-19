export const ContactForm = () => {
  return (
    <form id="contact" className="grid justify-center min-h-screen">
      <div className="flex flex-col w-full gap-5 py-48 md:max-w-lg">
        <h2 className="text-5xl">contact</h2>
        <div className="w-full form-control">
          <input
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
            type="text"
            name="company"
            placeholder="company"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <input
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
