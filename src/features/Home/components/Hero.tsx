export default function Hero() {
  return (
    <div className="bg-[#F9F9F9] py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-8">
        <div className="md:w-1/2 flex flex-col gap-10">
          <h1 className="text-5xl font-bold text-[#333333]">
            Discover <span className="text-[#C57D36]">Dog Insight</span>{" "}
            Infinitely
          </h1>
          <p className="text-sm text-[#555555]">
            Your ultimate resource for dog breeds, health tips, training advice,
            and fun stories. Learn, explore, and enjoy everything canine!
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                document
                  .getElementById("list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-[#C57D36] hover:bg-[#c26f1d] text-white rounded-lg"
            >
              View Breeds
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-[#C57D36] text-[#C57D36] rounded-lg"
            >
              About
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="dog.png"
            alt="Happy Dog"
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
