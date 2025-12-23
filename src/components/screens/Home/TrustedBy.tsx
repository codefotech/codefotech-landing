import Image from "next/image";

const TrustedBy = () => {
  const logos = [
    { alt: "Client 1" },
    { alt: "Client 2" },
    { alt: "Client 3" },
    { alt: "Client 4" },
    { alt: "Client 5" },
  ];

  return (
    <section>
      <div className="space-y-2 mb-8">
        <h2 className="text-[24px] font-semibold text-text-dark">
          Trusted by Global Businesses & Startups
        </h2>
        <p className="text-[15px] text-text-gray">
          100+ projects delivered across industries
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-14">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[120px] h-[96px] bg-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <span className="text-gray-400 text-sm">{logo.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
