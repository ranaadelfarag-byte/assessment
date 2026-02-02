export default function About() {
  return (
    <div id="about" className="bg-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="dog-1.jpg"
            alt="About Dog Insight"
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
            About Dog Insight
          </h2>
          <div className="max-w-lg space-y-3 text-justify">
            <p className="text-lg text-[#555555]">
              Dog Insight is your ultimate guide to all things canine. From
              understanding different dog breeds, health and nutrition tips,
              training advice, to fun stories about our four-legged friends, we
              aim to educate, entertain, and connect dog lovers everywhere.
            </p>
            <p className="text-lg text-[#555555]">
              Our mission is to provide reliable, well-researched, and
              easy-to-understand information so you can give your dog the best
              care and enjoy a happy, healthy life together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
