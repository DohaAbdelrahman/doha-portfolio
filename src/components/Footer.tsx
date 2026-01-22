const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card/50 border-t border-primary/20">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
