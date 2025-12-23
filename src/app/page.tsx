import Banner from "@/components/screens/Home/Banner";
import TrustedBy from "@/components/screens/Home/TrustedBy";
import WhoWeAre from "@/components/screens/Home/WhoWeAre";
import Container from "@/components/shared/Container";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Background Ellipses */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-br from-secondary/15 to-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-br from-primary/10 to-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <Banner />

        <Container>
          <TrustedBy />
        </Container>
      </div>
      <Container>
        <WhoWeAre />
      </Container>
    </>
  );
};

export default Home;
