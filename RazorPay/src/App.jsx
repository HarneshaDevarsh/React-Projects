import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FinanceSection from "./FinanceSection";
import ResponsivePage from "./ResponsivePage";
import DeveloperSection from "./DeveloperSection";
import Footer from "./Footer";
import RazorpaySection from "./RazorpaySection";
import AcceptPaymentsSection from "./AcceptPaymentsSection";


export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <FinanceSection/>
      <AcceptPaymentsSection/>
      <ResponsivePage/>
      <DeveloperSection/>
      <RazorpaySection/>

      <Footer/>
    </div>
  );
}