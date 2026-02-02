import Logo from "../common/Logo";

function Header() {
  return (
    <header className="flex h-12 items-center justify-between gap-4  bg-[#F9F9F9] px-8 transition-all ease-linear max-sm:px-4">
      <Logo />
      <div className="flex items-center gap-6 max-sm:w-full max-sm:justify-between max-sm:gap-3"></div>
    </header>
  );
}

export default Header;
