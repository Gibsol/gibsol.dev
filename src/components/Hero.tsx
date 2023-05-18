export const Hero = ({
  id,
  title,
  body,
  centered,
  link,
  linkText,
}: {
  id?: string;
  title: string;
  body: string;
  centered?: boolean;
  link?: string;
  linkText?: string;
}) => {
  if ((link && !linkText) || (!link && linkText)) {
    throw new Error("You must provide both link and linkText or neither");
  }

  return (
    <div id={id} className="min-h-screen hero bg-base-200">
      <div className={`${centered && "text-center"} hero-content`}>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
          {link && linkText && (
            <button className="btn btn-primary">Get Started</button>
          )}
        </div>
      </div>
    </div>
  );
};
