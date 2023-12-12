
const Footer = () => {
  return (
    <footer className="bg-[#0e2a47] text-white p-2 text-center fixed bottom-0 left-0 right-0">
      <p className="mb-1 text-xs">&copy; {new Date().getFullYear()} Saifur's Portfolio. All rights reserved.</p>
      <p className="text-xs">Designed and developed with ❤️ by Md Saifur Rahman</p>
    </footer>
  );
};

export default Footer;
