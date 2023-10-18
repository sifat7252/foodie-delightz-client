import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer flex flex-col lg:flex-row lg:justify-around justify-center items-center p-10 bg-base-200 text-base-content mt-4">
  <aside className="flex flex-col justify-center items-center">
    <img src="https://i.ibb.co/BqrMv41/logo-no-background.png" alt="logo" className="h-50 w-64 flex justify-center items-center" />
    
    <p>Copyright © 2023 - All right reserved by Foodie Delightz</p>
  </aside> 
  <div className="grid grid-cols-3 gap-10">
  <nav className="grid">
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Brand</Link> 
    <Link className="link link-hover">Foods</Link> 
    <Link className="link link-hover">Bavardage</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav className="grid">
    <header className="footer-title">Company</header> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav className="grid">
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
  </div>
</footer>
        </div>
    );
};

export default Footer;