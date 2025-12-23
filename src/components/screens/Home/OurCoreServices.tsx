import Link from "next/link";

const OurCoreServices = () => {
  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "Custom web and mobile applications built with cutting-edge technologies to bring your vision to life.",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Leverage artificial intelligence and machine learning to automate processes and gain insights.",
    },
    {
      title: "E-commerce Development",
      description:
        "Scalable online stores with seamless payment integration and exceptional user experience.",
    },
    {
      title: "LMS Development",
      description:
        "Comprehensive learning management systems designed to enhance education and training experiences.",
    },
    {
      title: "ERP Development",
      description:
        "Enterprise resource planning solutions to streamline operations and improve business efficiency.",
    },
    {
      title: "UI & UX Design",
      description:
        "Intuitive and visually stunning user interfaces that deliver exceptional user experiences and drive engagement.",
    },
  ];

  return (
    <section className="py-8">
      {/* Header */}
      <div className="space-y-1 mb-12">
        <h2 className="text-[28px] font-semibold text-text-dark leading-normal">
          Our Core Services
        </h2>
        <p className="text-[20px] text-text-gray leading-normal">
          Transforming ideas into exceptional digital experiences through
          innovative technology solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        {/* First Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-[200px]"
            >
              {/* Placeholder Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-gray-500 text-xs">
                    Image Placeholder
                  </span>
                </div>
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4">
                <h3 className="text-[20px] font-medium text-white leading-normal mb-2">
                  {service.title}
                </h3>
                <p className="text-[14px] text-white/90 leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.slice(3, 6).map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-[200px]"
            >
              {/* Placeholder Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-gray-500 text-xs">
                    Image Placeholder
                  </span>
                </div>
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4">
                <h3 className="text-[20px] font-medium text-white leading-normal mb-2">
                  {service.title}
                </h3>
                <p className="text-[14px] text-white/90 leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore All Services Button */}
      <div className="flex justify-end mt-[16px]">
        <Link
          href="/services"
          className="bg-secondary hover:bg-primary text-white font-medium text-[20px] flex items-center gap-2 transition-colors py-3 px-6 rounded-full"
        >
          Explore All Services
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default OurCoreServices;
