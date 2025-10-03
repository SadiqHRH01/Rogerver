import { QRCodeCanvas } from "qrcode.react";
import { FormEvent, useEffect, useState } from "react";

export default function DonateSection() {
  const [selected, setSelected] = useState("bch");

  const addresses: Record<string, string> = {
    bch: "bitcoincash:qramt3n0wag6l0an0tgyncyshqr470629guveqy8pw",
    btc: "bitcoin:1HUiSpfmwY5qLtRGu3k1HTQzj3E8HB8Pz8",
    zano:
      "ZxCBnMrBFBR8y211uuyk1D5SxbyuwGMfoTWtRf314CnNeT2FAGjbA1S9eaRjKsN2NKaz82hP3DSX1VbXxxGLLQYA15MscqcQM",
    fusd:
      "ZxCBnMrBFBR8y211uuyk1D5SxbyuwGMfoTWtRf314CnNeT2FAGjbA1S9eaRjKsN2NKaz82hP3DSX1VbXxxGLLQYA15MscqcQM",
  };

  const cryptos = [
    { id: "bch", label: "Bitcoin Cash (BCH)" },
    { id: "zano", label: "Zano (ZANO)" },
    { id: "fusd", label: "FUSD" },
    { id: "btc", label: "Bitcoin (BTC)" },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  useEffect(() => {
    setCopyStatus("idle");
  }, [selected]);

  const handleCopy = async () => {
    const address = addresses[selected];

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = address;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopyStatus("copied");
    } catch (error) {
      console.error("Failed to copy address", error);
      setCopyStatus("error");
    }
  };

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterEmail("");
  };

  const selectedCrypto = cryptos.find((crypto) => crypto.id === selected);

  return (
    <section id="donate-now" className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
          <h4 className="font-bold text-lg text-emerald-700">
            Donate With {selectedCrypto?.label ?? "Bitcoin Cash (BCH)"}
          </h4>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Support our mission with your preferred cryptocurrency. Every
            contribution directly funds grassroots humanitarian and legacy
            preservation projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {cryptos.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelected(crypto.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium shadow transition ${
                  selected === crypto.id
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-slate-700"
                }`}
                type="button"
              >
                {crypto.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <QRCodeCanvas
              value={addresses[selected]}
              size={160}
              includeMargin={true}
            />
            <p className="text-sm font-mono text-slate-600 break-all text-center">
              {addresses[selected]}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-700 transition"
            >
              {copyStatus === "copied"
                ? "Copied to clipboard"
                : copyStatus === "error"
                ? "Copy failed. Try again"
                : "Copy address"}
            </button>
            {copyStatus === "error" && (
              <p className="text-xs text-red-500">
                Your browser may not support automatic copying. Please copy the
                address manually.
              </p>
            )}
          </div>
        </div>

        <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
          <h4 className="font-bold text-lg text-emerald-700">Stay Connected</h4>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Subscribe for updates on new field reports, community projects, and
            upcoming donation campaigns.
          </p>
          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              required
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
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
