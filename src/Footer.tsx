import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

type FooterProps = {
  setPage: (
    page: "home" | "support" | "aboutRoger",
    hash?: string | null
  ) => void;
};

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="mt-20 border-t py-12 bg-white/80 backdrop-blur">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg text-slate-800">Contact</h4>
          <p className="text-sm text-slate-600 mt-3">
            Email: hello@rvp-tribute.org
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="https://twitter.com/YourHandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com/YourChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg text-slate-800">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <button
                onClick={() => setPage("aboutRoger")}
                className="hover:text-emerald-600 transition text-left"
              >
                About Roger Ver
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage("home", "#legacy")}
                className="hover:text-emerald-600 transition text-left"
              >
                Legacy Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage("home", "#donate-now")}
                className="hover:text-emerald-600 transition text-left"
              >
                Get Involved
              </button>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-bold text-lg text-slate-800">Disclaimer</h4>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            This is a tribute platform, not officially managed by Roger Ver.
          </p>
        </div>
      </div>
    </footer>
  );
}
