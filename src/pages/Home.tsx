import Header from "../components/layout/Header";
import About from "../features/Home/components/About";
import DogBreeds from "../features/Home/components/DogBreeds";
import Hero from "../features/Home/components/Hero";
export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <DogBreeds/>
    </>
  );
}
