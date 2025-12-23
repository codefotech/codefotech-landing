import Link from "next/link";

const WhoWeAre = () => {
  const stats = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.85519 2.55208C8.90311 1.96169 9.42706 1.6665 10.0001 1.6665C10.5731 1.6665 11.0971 1.96169 12.145 2.55208L13.6033 3.37368C14.6911 3.98651 15.235 4.29293 15.5342 4.80537C15.8334 5.31781 15.8334 5.94281 15.8334 7.19282V8.64018C15.8334 9.89019 15.8334 10.5152 15.5342 11.0276C15.235 11.5401 14.6911 11.8465 13.6033 12.4593L12.145 13.2809C11.0971 13.8713 10.5731 14.1665 10.0001 14.1665C9.42706 14.1665 8.90311 13.8713 7.85519 13.2809L6.39686 12.4593C5.30909 11.8465 4.76521 11.5401 4.46598 11.0276C4.16675 10.5152 4.16675 9.89019 4.16675 8.64018V7.19282C4.16675 5.94281 4.16675 5.31781 4.46598 4.80537C4.76521 4.29293 5.30909 3.98651 6.39686 3.37368L7.85519 2.55208Z"
            stroke="#1CBF73"
            stroke-width="1.2"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 8.47222C7.5 8.47222 8.125 8.47222 8.75 9.58333C8.75 9.58333 10.7353 6.80556 12.5 6.25"
            stroke="#1CBF73"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.0687 12.5L14.6272 15.175C14.9861 16.8936 15.1655 17.753 14.797 18.1602C14.4284 18.5675 13.7884 18.2171 12.5083 17.5165L10.6137 16.4794C10.3112 16.3138 10.1599 16.231 10 16.231C9.84011 16.231 9.68885 16.3138 9.38631 16.4794L7.49173 17.5165C6.21165 18.2171 5.5716 18.5675 5.20304 18.1602C4.83449 17.753 5.01391 16.8936 5.37276 15.175L5.93127 12.5"
            stroke="#1CBF73"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      value: "2+",
      label: "Years Experience",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99992 12.5L7.49992 10M9.99992 12.5C11.164 12.0573 12.2807 11.499 13.3333 10.8334M9.99992 12.5V16.6667C9.99992 16.6667 12.5249 16.2084 13.3333 15C14.2333 13.65 13.3333 10.8334 13.3333 10.8334M7.49992 10C7.94337 8.84957 8.50175 7.74676 9.16659 6.70838C10.1376 5.15587 11.4896 3.87758 13.0941 2.99512C14.6986 2.11266 16.5021 1.65535 18.3333 1.66671C18.3333 3.93338 17.6833 7.91671 13.3333 10.8334M7.49992 10H3.33325C3.33325 10 3.79159 7.47504 4.99992 6.66671C6.34992 5.76671 9.16659 6.66671 9.16659 6.66671M3.74992 13.75C2.49992 14.8 2.08325 17.9167 2.08325 17.9167C2.08325 17.9167 5.19992 17.5 6.24992 16.25C6.84159 15.55 6.83325 14.475 6.17492 13.825C5.85101 13.5159 5.42433 13.3372 4.97677 13.3234C4.52922 13.3096 4.09232 13.4615 3.74992 13.75Z"
            stroke="#D4AC0D"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      value: "50+",
      label: "Projects",
    },
    {
      icon: (
        <img src="/icons/who-we-are/global-icon.svg" alt="Global Clients" />
      ),
      value: "40+",
      label: "Global Clients",
    },
  ];

  return (
    <section className="pt-16 relative">
      <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row items-end justify-between gap-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 items-start flex-1">
          {/* Left Content */}
          <div className="space-y-3 max-w-115">
            <div className="space-y-2">
              <h2 className="text-[24px] font-semibold text-text-dark">
                Who We Are
              </h2>
              <p className="text-[15px] text-text-gray">
                Driven by innovation, guided by excellence
              </p>
            </div>
            <p className="text-[17px] text-text-dark leading-normal">
              At CodeFoTech, we specialize in building scalable software
              solutions that help businesses transform digitally. Our team
              blends technical mastery with creative thinking to deliver
              products that make impact.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-[rgba(120,120,120,0.16)] rounded-lg px-5 py-2 flex items-center gap-2 w-62.5"
              >
                <div className="flex items-center gap-1">
                  <div className="shrink-0">{stat.icon}</div>
                  <span className="text-[20px] font-semibold text-text-dark">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[15px] text-text-dark">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <Link
          href="/about"
          className="bg-secondary hover:bg-primary border border-[rgba(85,175,249,0.24)] text-white px-4 py-2.5 rounded-full font-medium text-[17px] flex items-center gap-2 transition-colors"
        >
          Learn more
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 14.5L21 11L17.5 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 11H21"
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

export default WhoWeAre;
