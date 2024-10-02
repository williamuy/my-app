// HomePage.tsx or index.tsx

import { ModeToggle } from "@/components/ModeToggle";
import AuroraBackgroundDemo from "../components/example/aurora-background-demo"; // Adjust the path as necessary
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AuroraBackgroundDemo />
      <ModeToggle />
      {/* Other components and content */}
    </div>
  );
};

export default HomePage;
