import Footer from "../components/common/navbar/footer";
import Navbar from "../components/common/navbar/navbar";
import Landing from "../modules/landing";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Landing />
      </div>
      <Footer/>
    </>
  );
}

export default Home;
