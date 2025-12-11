import { Chromatext } from "./ui/chroma-text";
import { cn } from "@/lib/utils";
import { BeamsFall } from "./ui/beamsFall";

export const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen min-w-screen items-center justify-center [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_10.32%,_#ffcddf_49.28%,_#b3ceff_90.68%,_#d3dcfb_100%)]">
      <div
        className={cn(
          "absolute left-0 mt-18 h-[87vh] rounded-tr-md border border-black/5 text-black",
          "[box-shadow:_inset_-2px_5px_20px_white,_inset_-2px_2px_1px_white,inset_0px_0px_200px_rgba(255,_255,_255,_0.1)] backdrop-blur-3xl",
          "mobile-L:min-w-70 break-1440:w-230 min-w-50 md:min-w-130 lg:min-w-164 xl:min-w-210 2xl:min-w-250",
        )}
      ></div>
      <div
        className={cn(
          "absolute right-0 mt-18 h-[87vh] rounded-tl-md border border-black/5",
          "[box-shadow:inset_2px_5px_20px_white,inset_3px_0px_2px_white,inset_0px_0px_200px_rgba(255,_255,_255,_0.1)]",
          "backdrop-blur-3xl md:min-w-50 lg:min-w-80 xl:min-w-100 2xl:min-w-120",
          "mobile-L:min-w-25 break-1440:w-120 min-w-20",
        )}
      >
        <BeamsFall></BeamsFall>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className={cn(
            "pointer-events-none z-10 bg-linear-to-b from-zinc-950 to-neutral-500/80 bg-clip-text",
            "font-sans font-bold tracking-tighter text-transparent md:pb-2",
            "mobile-L:text-3xl text-2xl md:text-4xl xl:text-6xl",
          )}
        >
          Modern web {""}
          <Chromatext word={"designs"}></Chromatext> that feel{" "}
          <span className="bg-linear-to-b from-zinc-950 to-neutral-500/80 bg-clip-text text-transparent">
            amazing
          </span>
        </h1>
        <h1
          className={cn(
            "font-havana pointer-events-none z-0 bg-radial",
            "bg-[radial-gradient(46%_90%_at_42%_79%,#ff6bfc_20%,rgb(156_97_255)_100%)] bg-clip-text",
            "pt-1 not-only:text-transparent lg:pt-2",
            "text-3xl md:text-[40px] lg:text-5xl xl:text-6xl",
          )}
        >
          the best they can be
        </h1>
        <p
          className={cn(
            "z-10 mx-auto max-w-70 pt-2.5 text-center text-[10px] text-neutral-700",
            "mobile-L:text-[11px] md:text-[13px] lg:text-sm",
            "mobile-L:max-w-80 md:max-w-md lg:max-w-lg",
          )}
        >
          We are innovating the webs with featuring eye-soothing colors and
          delightful interactions.
        </p>
        <div className="z-50 flex items-center justify-center">
          <button
            className={cn(
              "relative top-5 z-10 cursor-pointer rounded-full bg-neutral-800 py-2",
              "text-white [box-shadow:inset_0px_0px_0px_white,inset_0px_0px_10px_#171717]",
              // "mobile-L:ml-33 ml-25 md:ml-57 lg:ml-55",
              "w-25 md:w-30 lg:w-40",
              "text-[12px] md:text-sm",
            )}
          >
            Join the wishlist
          </button>
        </div>
      </div>
      <div className="absolute -bottom-4 h-50 w-full bg-zinc-50 mask-t-from-10% mask-t-to-60%"></div>
    </div>
  );
};
