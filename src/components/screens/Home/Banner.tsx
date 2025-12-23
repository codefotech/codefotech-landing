import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const Banner = () => {
  return (
    <section className="py-4 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-[40px] font-semibold leading-normal text-primary">
              Innovating Digital Solutions for Businesses Worldwide !
            </h1>

            {/* Description */}
            <p className="text-[17px] font-normal text-text-gray leading-normal">
              Empowering growth through tailored software, intelligent
              automation, and scalable technology solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-8 pt-6">
              <Link
                href="/consultation"
                className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-full font-medium text-[17px] flex items-center gap-2 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 9.09H20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6947 13.7H15.7037"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6947 16.7H15.7037"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9955 13.7H12.0045"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9955 16.7H12.0045"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.29431 13.7H8.30329"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.29431 16.7H8.30329"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get a Free Consultation
              </Link>

              <Link
                href="/portfolio"
                className="bg-[rgba(0,122,255,0.16)] hover:bg-[rgba(0,122,255,0.24)] text-secondary px-6 py-3 rounded-full font-medium text-[17px] flex items-center gap-2 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12V8.44C4 4.02 5.02 3 9.44 3H14.56C18.98 3 20 4.02 20 8.44V15.56C20 20 18.98 21 14.56 21H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.65 10C11.8926 10 12.9 8.99264 12.9 7.75C12.9 6.50736 11.8926 5.5 10.65 5.5C9.40736 5.5 8.4 6.50736 8.4 7.75C8.4 8.99264 9.40736 10 10.65 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.67 18.9501L7.6 15.6401C8.39 15.1101 9.53 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/home/hero.svg"
              alt="Digital Solutions Illustration"
              width={500}
              height={333}
              priority
              className="w-full max-w-125 h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
