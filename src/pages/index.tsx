import { getLayout } from "@/layouts";
import Home from "@/components/PageGroups/Home";

const Homepage = () => {
  return (
    <Home />
  );
};

Homepage.getLayout = getLayout;

export default Homepage;
