import Navigation from "@/components/Navigation";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;