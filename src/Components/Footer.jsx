import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content border-t border-[#242728] bg-[#0d0d0d] p-10">
      <aside>
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-[0_0_24px_rgba(220,38,38,0.35)]">
          <span className="text-2xl font-extrabold leading-none text-red-600">
            L
          </span>
        </span>
        <p>
          Lincord Security
          <br />
          Offensive security engagements that
          <br />
          secures your infrastructure.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/services" className="link link-hover">
          Network Pentest
        </Link>
        <Link to="/services" className="link link-hover">
          Web App Pentest
        </Link>
        <Link to="/services" className="link link-hover">
          Internal AD Pentest
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  );
}