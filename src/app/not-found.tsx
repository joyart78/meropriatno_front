import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 24px" }}>
      <h1
        style={{
          fontFamily: "var(--font-masiva), sans-serif",
          fontSize: 72,
          color: "var(--purple)",
          marginBottom: 16,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: 18,
          color: "var(--text-light)",
          marginBottom: 32,
        }}
      >
        Страница не найдена
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          padding: "16px 36px",
          background: "var(--orange)",
          color: "var(--white)",
          borderRadius: 50,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        На главную
      </Link>
    </div>
  );
}
