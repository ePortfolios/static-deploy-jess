export default function ReactNativePost() {
  return (
    <main
      style={{
        maxWidth: 850,
        margin: "0 auto",
        padding: "2rem 1rem",
        lineHeight: 1.7,
      }}
    >
      <h1>React Native, Expo, and Me Fighting the iOS Simulator</h1>

      <p>
        This week I set up React Native using Expo and the iOS Simulator. It was
        not instant. There was some Xcode drama. There were missing runtimes.
        There was a brief moment where nothing would open and I questioned my
        life choices.
      </p>

      <p>But once it clicked, it really clicked.</p>

      <h2>What felt different</h2>

      <p>
        The biggest mental shift for me was remembering that this is not the
        web. There is no <code>div</code>. No CSS files the way I’m used to
        them. You work with components like <code>View</code> and{" "}
        <code>Text</code>, and styles live in JavaScript using{" "}
        <code>StyleSheet.create()</code>.
      </p>

      <p>
        Also, no “px.” Everything is just numbers. That alone forced my brain to
        slow down and think differently.
      </p>

      <h2>The setup process</h2>

      <ul>
        <li>Install Xcode</li>
        <li>Install an iOS simulator runtime (this part matters)</li>
        <li>
          Run <code>npx expo start</code>
        </li>
        <li>Open the simulator and connect through Expo Go</li>
      </ul>

      <p>
        Once I saw my text change live in the simulator, it felt familiar again.
        Same React mindset. Different surface.
      </p>

      <p>
        Overall takeaway: the hardest part was environment setup. After that,
        it’s just building. And, I'm excited to keep building and learning more
        about React Native and Expo.
      </p>
    </main>
  );
}
