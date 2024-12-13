import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        width: "100vw",
        backgroundColor: "#d0beaa",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          color: "#ab7543",
          fontSize: "13px",
          padding: "30px",
          borderBottom: "1px solid #ab7543",
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span> This project was built using</span>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Next.js & GSAP & Swiper
          </span>
        </div>
        <div style={{ display: "flex", gap: "60px" }}>
          <Link href="/">HOME</Link>
          <Link href="/profile">PROFILE</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
