import { QRCodeCanvas } from "qrcode.react";
import { FormEvent, useState } from "react";

export default function DonateSection() {
  const [selected, setSelected] = useState("bch");

  // Replace these with your actual wallet addresses
  const addresses: Record<string, string> = {
    bch: "bitcoincash:qzre78u72e2x6qgux9y7zcayrxuwclktfs7mmamxk2",
    zano: "zano:Zx123exampleaddress",
    fusd: "fusd:FUSD123exampleaddress",
    btc: "bitcoin:1ABCexampleaddress",
  };

  const cryptos = [
    { id: "bch", label: "Bitcoin Cash (BCH)" },
    { id: "zano", label: "Zano (ZANO)" },
    { id: "fusd", label: "FlexUSD (FUSD)" },
    { id: "btc", label: "Bitcoin (BTC)" },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState("");

  return (
    <section id="donate-now" className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Donate */}
        <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
          <h4 className="font-bold text-lg text-emerald-700">
            Donate With Bitcoin Cash
          </h4>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Support our mission by donating with your preferred cryptocurrency:
            <strong> BCH, Zano, FUSD, or BTC</strong>.
          </p>

          {/* Crypto Options */}
          <div className="mt-6 flex flex-wrap gap-3">
            {cryptos.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium shadow transition ${
                  selected === c.id
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-slate-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* QR Code */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <QRCodeCanvas
              value={addresses[selected]}
              size={160}
              includeMargin={true}
            />
            <p className="text-sm font-mono text-slate-600 break-all text-center">
              {addresses[selected]}
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
          <h4 className="font-bold text-lg text-emerald-700">
            Join Our Newsletter
          </h4>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Stay updated on legacy projects, humanitarian efforts, and ways to
            get involved. Subscribe to our newsletter.
          </p>
          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
            }}
          >
            <input
              type="email"
              required
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-xl font-medium shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
