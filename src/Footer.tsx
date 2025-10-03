import {
  Mail,
  Link as LinkIcon,
  Info,
  ShieldAlert,
  HeartHandshake,
} from "lucide-react";

type FooterProps = {
  setPage: (
    page: "home" | "support" | "aboutRoger",
    hash?: string | null
  ) => void;
};

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="mt-20 border-t py-16 bg-slate-50/80 backdrop-blur">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-700">
        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <Mail size={20} className="text-emerald-600" />
            Contact
          </h4>
          <p className="text-sm mt-3">Support@rvptribute.org</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <LinkIcon size={20} className="text-emerald-600" />
            Quick Links
          </h4>
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

        {/* Free Roger Ver Link (Mobile) */}
        <div className="lg:hidden">
          <h4 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <HeartHandshake size={20} className="text-emerald-600" />
            Advocacy
          </h4>
          <a
            href="https://www.freerogernow.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mt-3 block hover:text-emerald-600 transition font-medium"
          >
            Free Roger Now
          </a>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <ShieldAlert size={20} className="text-emerald-600" />
            Disclaimer
          </h4>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            This is a tribute platform, not officially managed by Roger Ver.
          </p>
        </div>

        {/* Free Roger Ver Link (Desktop) */}
        <div className="hidden lg:flex flex-col items-start justify-start">
          <h4 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <HeartHandshake size={20} className="text-emerald-600" />
            Advocacy
          </h4>
          <a
            href="https://www.freerogernow.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition text-sm"
          >
            Free Roger Now
          </a>
        </div>
      </div>
    </footer>
  );
}
