export default function Home() {
  return (
    <main
      style={{
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
      }}
    >
      <h1>Jess’s tiny static site </h1>

      <p style={{ maxWidth: 720, lineHeight: 1.6 }}>
        This is my deploy a static site assignment. I kept it intentionally
        pretty simple because the goal here was proving that I understand
        deployment, GitHub, and live hosting, not building a full design system
        in one sitting. If you are reading this, the dev server is running and
        everything is wired up correctly. Woo hoo!
      </p>

      <p style={{ marginTop: 18 }}>— Jess 2026</p>
    </main>
  );
}
