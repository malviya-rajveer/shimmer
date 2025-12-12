"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { Map } from "./ui/map";

export const GridSectiom = () => {
  return (
    <div className="h-full w-full bg-linear-to-b from-pink-200 from-0% to-zinc-50 to-10%">
      <div className="md: mx-auto mt-[20vh] flex h-screen flex-col items-center lg:max-w-4xl">
        <h1
          className={cn(
            "mt-15 bg-linear-to-b from-zinc-950 to-neutral-600/80 bg-clip-text font-bold tracking-tight text-transparent",
            "text-2xl md:text-4xl",
          )}
        >
          Focus on what matters
        </h1>
        <p className="max-w-70 pt-2 pb-4 text-center text-[11px] text-neutral-600 sm:max-w-xl sm:pt-3 sm:pb-6 md:text-[15px]">
          Bento grids are always a great choise to showcase many things in one
          frame
        </p>
        <div
          className={cn(
            "grid h-full grid-cols-1 gap-2 md:h-[70vh] md:grid-cols-5 md:grid-rows-4",
            "mobile-L:w-80 w-70 md:w-2xl lg:w-full",
          )}
        >
          <div
            className={cn(
              "relative col-span-4 flex h-80 flex-col items-center justify-center rounded-2xl bg-white md:col-span-2 md:row-span-4 md:h-full",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd]",
            )}
          >
            <motion.div
              initial={{
                backgroundPosition: "50% center",
              }}
              whileInView={{
                backgroundPosition: "0% center",
              }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute inset-x-0 inset-y-10 blur-xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom , transparent, black, transparent)",
                background:
                  "repeating-linear-gradient(63deg, var(--color-pink-200) , var(--color-blue-300) 12px, color-mix(in oklab, var(--color-pink-500) 30%, transparent) 20px,  transparent 100px)",
                //   "repeating-linear-gradient(63deg, var(--color-purple-400), var(--color-yellow-800) 12px, color-mix(in oklab, var(--color-violet-600) 30%, transparent) 20px, transparent 180px)",
                backgroundSize: "300% auto",
              }}
            ></motion.div>
            <h2 className="bg-linear-to-b from-black to-neutral-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              120Fps
            </h2>
            <div className="md:text-md mt-2 max-w-60 text-center text-sm text-neutral-700">
              smooth and fast animation which are supercharged with 120Fps
            </div>
          </div>

          <div
            className={cn(
              "relative z-0 flex items-center justify-center overflow-hidden rounded-2xl bg-white",
              "col-span-4 row-span-4 md:col-span-3 md:row-span-2",
              "h-80 md:h-full",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd]",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 -z-10",
                "[background-size:12px_12px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "mask-t-from-0% mask-t-to-60%",
              )}
            />
            <div>
              <h3 className="font-havana bg-linear-to-b from-zinc-900 to-neutral-500 bg-clip-text text-center text-4xl text-transparent md:text-5xl">
                hello hola Namaste
              </h3>
              <p className="mx-auto max-w-50 text-center text-[11px] text-neutral-600 md:max-w-full md:text-sm">
                “Every great idea begins with the courage to imagine.”
              </p>
            </div>
            <div className="absolute right-0 bottom-0 h-[1px] w-50 bg-[linear-gradient(to_right,transparent,red_50%,blue,transparent_90%,transparent_100%)] blur-[2px]"></div>
            <div className="absolute right-0 bottom-0 h-[3px] w-50 bg-[linear-gradient(to_right,transparent,#f9a8d4_50%,blue,transparent_90%,transparent_100%)] blur-[7px]"></div>
          </div>

          <div
            className={cn(
              "pointer-events-none z-20 col-span-4 flex h-15 items-center justify-center rounded-2xl",
              "bg-linear-to-b from-white from-50% to-blue-400/10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd] md:col-span-1 md:h-full",
            )}
          >
            <Image src={"/next.svg"} height={80} width={80} alt=""></Image>
          </div>

          <div
            className={cn(
              "relative z-20 col-span-4 flex h-50 items-center justify-center rounded-2xl",
              "bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd]",
              "md:col-span-2 md:row-span-2 md:h-full",
            )}
          >
            <div className="absolute inset-0">
              <Map></Map>
            </div>
            <h3 className="z-30 text-[13px] text-black/80 md:text-[14px]">
              connect to other talents around the world
            </h3>
          </div>
          <div
            className={cn(
              "pointer-events-none z-20 col-span-4 flex h-15 items-center justify-center rounded-2xl bg-linear-to-b from-white from-50% to-pink-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd]",
              "md:col-span-1 md:h-full",
            )}
          >
            <Image
              className="z-10"
              src={"/framer.webp"}
              height={47}
              width={47}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
      <div className="h-150 w-full md:hidden"></div>
    </div>
  );
};
