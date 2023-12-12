
const Footer = () => {
  return (
    <footer className="bg-[#0e2a47] text-white p-1 lg:p-2 text-center fixed bottom-0 left-0 right-0">
      <p className="mb-1 text-[10px] lg:text-xs">&copy; {new Date().getFullYear()} Saifur's Portfolio. All rights reserved.
      </p>
      <span className="text-[10px] lg:text-xs hidden lg:block">Designed and developed with ❤️ by Md Saifur Rahman</span>
    </footer>
  );
};

export default Footer;
