export default function PasswordHashingPost() {
  return (
    <main
      style={{
        maxWidth: 850,
        margin: "0 auto",
        padding: "2rem 1rem",
        lineHeight: 1.7,
      }}
    >
      <h1>Password Hashing (and why apps don’t store your real password)</h1>

      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=60"
        alt="Laptop screen with code representing cybersecurity"
        style={{
          width: "100%",
          borderRadius: 12,
          margin: "1rem 0 1.5rem",
        }}
      />

      <p>
        When you create an account somewhere, your password should never be
        stored exactly as you typed it. That would be a security disaster.
        Instead, modern applications use <strong>password hashing</strong>.
      </p>

      <p>
        Hashing turns your password into a one-way scrambled value called a
        <strong> hash</strong>. It can be checked for a match later, but it
        cannot realistically be reversed back into the original password.
      </p>

      <h2>Why it matters</h2>
      <p>
        If a database is ever leaked, attackers won’t see everyone’s real
        passwords. They’ll only see hashed values, which are significantly
        harder to use.
      </p>

      <h2>Salt adds protection</h2>
      <p>
        A <strong>salt</strong> is random data added before hashing. This ensures
        that even if two users have the same password, their stored hashes will
        be different.
      </p>

      <h2>Hashing vs Encryption</h2>
      <p>
        Encryption is reversible with the correct key. Hashing is intentionally
        non-reversible. For passwords, hashing is the correct approach.
      </p>

      <h2>What happens during login</h2>
      <ol>
        <li>You create an account → the system stores a hashed version of your password.</li>
        <li>You log in later → the system hashes what you typed again.</li>
        <li>If the hashes match → access is granted.</li>
      </ol>

      <p>
        Most modern applications use specialized password hashing algorithms
        like <strong>bcrypt</strong> or <strong>Argon2</strong> because they are
        designed to resist brute-force attacks.
      </p>

      <p>
        The takeaway: password hashing protects users even if something goes
        wrong behind the scenes.
      </p>
    </main>
  );
}
