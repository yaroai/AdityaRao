import { IntroGate } from "@/components/intro-gate";
import { Landing } from "@/components/sections/Landing";

// Old long-scroll sections (Hero/Yaro/Projects/Experience/About/Contact/Footer)
// are kept in src/components/sections/ but no longer rendered here. Bring them
// back as dark-styled sections/routes when ready.
export default function Home() {
  return (
    <IntroGate>
      <Landing />
    </IntroGate>
  );
}
