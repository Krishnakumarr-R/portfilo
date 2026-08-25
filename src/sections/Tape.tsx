import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Reliable",
  "Full Stack",
  "DevOps",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-none gap-4">
                {words.map((word) => (
                  <div className="inline-flex gap-4 items-center" key={word}>
                    <span className="text-gray-900 text-sm font-extrabold uppercase">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

