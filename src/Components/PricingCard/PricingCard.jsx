const PricingCard = ({ pricing }) => {
  const {
    name,
    description,
    price,
    features,
    popular,
    buttonText,
  } = pricing;

  return (
    <div
      className={`card w-96 shadow-sm mb-25 border border-gray-200 ${
        popular
          ? "bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white"
          : "bg-base-200"
      }`} 
    >
      <div className="card-body flex flex-col relative">
        {popular && (
          <span className="badge badge-xs badge-warning bg-amber-200 absolute  left-1/2  -top-2  -translate-x-1/2">
            Most Popular
          </span>
        )}

        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>

          <p
            className={`text-xl ${
              popular ? "text-gray-200" : "text-[#627382]"
            }`}
          >
            {description}
          </p>

          <p className="text-3xl font-bold">
            {price}
            <span
              className={`text-xl ${
                popular ? "text-white" : "text-[#627382]"
              }`}
            >
              /Month
            </span>
          </p>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-sm">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-4 me-2 inline-block ${
                  popular ? "text-white" : "text-success"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <button
            className={`btn w-full rounded-full border-none ${
              popular
                ? "bg-white"
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
            }`}
          >
            {popular ? (
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                {buttonText}
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;