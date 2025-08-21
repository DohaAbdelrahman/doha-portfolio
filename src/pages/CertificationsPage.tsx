import Navigation from "@/components/Navigation";
import { Certifications } from "@/components/Certifications";
import Footer from "@/components/Footer";

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;