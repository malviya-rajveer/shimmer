import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 h-10 min-w-full text-zinc-900 md:min-w-2xl lg:min-w-3xl xl:min-w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="translate-x-2 scale-40 md:scale-50">
            <svg
              width="46"
              height="51"
              viewBox="0 0 46 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.4 30.5L42.4 23.5C42.4 18.7 41.2 14.1 39 10.1L22.7 25.2V50.3H25.8C36.7 50.3 45.6 41.5 45.6 30.5H35.4Z"
                fill="url(#paint0_linear_2_99)"
              />
              <path
                d="M10.2 19.8L3.2 26.8C3.2 31.6 4.4 36.2 6.6 40.2L22.9 25.1V0H19.8C8.9 0 0 8.8 0 19.8H10.2V19.8Z"
                fill="url(#paint1_linear_2_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_99"
                  x1="34.15"
                  y1="10.1"
                  x2="34.15"
                  y2="50.3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3125" stopColor="#A4C7FF" />
                  <stop
                    offset="0.615385"
                    stopColor="#FF62F7"
                    stopOpacity="0.68"
                  />
                  <stop offset="1" stopColor="#FE129B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_99"
                  x1="11.45"
                  y1="0"
                  x2="11.45"
                  y2="40.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3125" stopColor="#A4C7FF" />
                  <stop
                    offset="0.615385"
                    stopColor="#FF62F7"
                    stopOpacity="0.68"
                  />
                  <stop offset="1" stopColor="#FE129B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="font-havana bg-linear-to-b from-zinc-800 to-neutral-600 bg-clip-text pt-2 pl-0.5 text-lg font-semibold text-transparent md:text-2xl">
            Shimmer
          </div>
        </div>
        <div className="mobile-L:text-[11.5px] mobile-L:gap-2 mobile-L:pr-5 flex items-center gap-1 pt-2 pr-2 text-[11px] font-medium text-neutral-700/90 md:gap-3 md:text-sm">
          <Link className="hover:text-neutral-500" href={""}>
            home
          </Link>
          <Link className="hover:text-neutral-500" href={""}>
            product
          </Link>
          <Link className="hover:text-neutral-500" href={""}>
            career
          </Link>
          <Link className="hover:text-neutral-500" href={""}>
            contacts
          </Link>
        </div>
      </div>
      <div className="relative bottom-0.5 h-px w-full [background:linear-gradient(to_right,transparent_0%,var(--color-neutral-200)_10%,var(--color-neutral-200)_87%,transparent)]"></div>
    </div>
  );
};
