import NavbarComp from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarComp />
      <div className="Content">{children}</div>
    </>
  );
}
