import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects as PROJECTS } from "./data";
import SimplePhotoGallery from "./SimplePhotoGallery";
import ImpactStatsChart from "./ImpactStatsChart";
import DonateSection from "./donation";

type AppProps = {
  setPage: (
    page: "home" | "support" | "aboutRoger",
    hash?: string | null
  ) => void;
};

export default function App({ setPage }: AppProps): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showWallets, setShowWallets] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function openDonate(projectId: number | null) {
    setSelectedProject(projectId);
    setShowWallets(true);
  }

  function closeModal() {
    setShowWallets(false);
    setSelectedProject(null);
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
    alert("Thanks — form submitted (demo)");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-900 font-sans">
      <header className="py-6 sticky top-0 z-40 border-b bg-white/80 backdrop-blur shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-extrabold text-emerald-600">RVP</div>
            {/* <div className="text-sm text-slate-600 font-medium">
              Celebrating Compassion in Crypto
            </div> */}
          </div>
          <nav className="flex gap-4">
            <button
              onClick={() => setPage("aboutRoger")}
              className="hidden md:block px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 font-medium"
            >
              About Roger
            </button>
            <button
              onClick={() => setPage("support")}
              className="px-3 py-2 bg-emerald-600 text-white rounded-lg font-medium shadow hover:bg-emerald-700 transition"
            >
              💚 Support New Projects
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-800">
              Roger Ver Philanthropy
            </h1>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Roger Ver, known as Bitcoin Jesus, is more than a pioneer of
              digital currency. He’s a humanitarian whose generosity has changed
              lives across the globe — from disaster relief and education to
              health and freedom causes..{" "}
              <span className="font-semibold">
                Celebrating Compassion in Crypto
              </span>
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setPage("aboutRoger")}
                className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium shadow hover:bg-slate-900 transition"
              >
                🔎Explore His Legacy
              </button>
              <button
                onClick={() => setPage("support")}
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition"
              >
                💚Support New Projects
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex-1"
          >
            <div className="w-full h-72 md:h-96 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-emerald-200/40 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="text-center relative">
                <img
                  src="/images/roger.jpg"
                  alt="RVP Logo"
                  className="mx-auto w-42 md:w-50"
                />
                {/* <div className="mt-3 text-slate-600 font-medium">
                  Celebrating compassion and impact
                </div> */}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-12">
          {/* <h2 className="text-3xl font-bold text-center mb-12">
            About Roger Ver
          </h2> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
          >
            <p className="text-slate-700 text-lg leading-relaxed">
              <i>
                {" "}
                “Bitcoin is one of the most important inventions in the history
                of humankind. The world is going to change more in the next five
                years than the last 100 years combined because of Bitcoin.”
                Roger Ver (2011){" "}
              </i>
            </p>
          </motion.div>
        </section>

        <ImpactStatsChart />

        {/* Legacy Projects & Achievements Section */}
        <section className="py-16 bg-gray-50" id="legacy">
          <div className="max-w-6xl mx-auto px-6"> 
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
              Legacy Projects & Achievements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                    📚 Education for Freedom
                  </h3>
                  <p className="text-gray-600">
                    $3M+ to the Foundation for Economic Education + school
                    projects in Ghana & Nigeria.
                  </p>
                </div>
                <a
                  href="https://fee.org/articles/roger-ver-gives-fee-highest-valued-known-bitcoin-donation-worth-about-1-million/"
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900"
                >
                  More Details →
                </a>
              </div>

              {/* Coindesk */}

              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                    🚑 Health & Survival
                  </h3>
                  <p className="text-gray-600">
                    Life-saving surgeries, diabetes care, and $1M+ to anti-drug
                    war causes.
                  </p>
                </div>
                <a
                  href="https://www.coindesk.com/markets/2013/11/30/roger-ver-bitcoin-jesus-makes-largest-ever-bitcoin-donation-of-1-million?"
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900"
                >
                  More Details →
                </a>
              </div>

              {/* Humanitarian Aid */}

              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                    🌐 Unstoppable Aid
                  </h3>
                  <p className="text-gray-600">
                    $17k to Atilis Gym owners after bank freezes + direct
                    disaster relief in Texas and Puebla.
                  </p>
                </div>
                <a
                  href="https://web.archive.org/web/20240714084824/https://www.newswire.com/news/bitcoin-com-founder-roger-ver-donates-1000-laptops-copies-of-economics-21456486"
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900"
                >
                  More Details →
                </a>
              </div>

              {/* Recognition */}
              {/* Education */}
              {/* <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Roger Ver’s Donates $10,000
                  </h3>
                  <p className="text-gray-600">
                    Support for <strong>Casa de Amparo Childrens</strong>, Roger
                    Ver’s donates $10,000 BCH to Casa de Amparo Children’s
                    Shelter in 2020.
                  </p>
                </div>
                <a
                  href="https://web.archive.org/web/20200622221122/https://news.bitcoin.com/roger-ver-donates-10k-in-bitcoin-cash-to-casa-de-amparo-childrens-shelter/"
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900"
                >
                  More Details →
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* Media & Stories Section */}
        <section className="py-16 bg-white" id="media">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
              Media & Stories
            </h2>

            <div className="grid  gap-8">
              {/* Testimonial Videos */}
              <div className="bg-gray-50 shadow-md rounded-2xl p-6">
                {/* <h3 className="text-xl font-semibold mb-3">
                  Testimonial Videos
                </h3> */}

                {/* YouTube Embed */}
                <div className="aspect-video rounded-xl overflow-hidden shadow">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/vXmq5TSW04A?si=LykuU5wBBoJjC2gr"
                    title="Testimonial Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-gray-600 mb-4 mt-4">
                  Inspiring stories captured : <br />
                  <strong>The Man Who Changed Lives</strong> Roger Ver’s Legacy
                  of Generosity & Kindness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-center rounded-2xl shadow-lg my-16 mx-6">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Join Us in Continuing the Legacy
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Be part of the movement. Support current community projects
              bringing
              <span className="font-semibold"> clean water</span>,{" "}
              <span className="font-semibold">education</span>, and{" "}
              <span className="font-semibold">financial freedom</span> to
              underserved regions.
            </p>

            <a
              href="#get-involved"
              className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-md hover:bg-gray-100 transition"
            >
              Get Involved
            </a>
          </div>
        </section>
        {/* donation section */}
        <DonateSection />
      </main>

      {showWallets && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-emerald-700">Donate</h3>
              <button
                onClick={closeModal}
                className="text-slate-500 hover:text-slate-700 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {selectedProject ? (
              <p className="text-sm text-slate-600 mt-2">
                Project:{" "}
                <span className="font-medium">
                  {PROJECTS.find((p) => p.id === selectedProject)?.title}
                </span>
              </p>
            ) : (
              <p className="text-sm text-slate-600 mt-2">
                General donations — use any wallet below.
              </p>
            )}

            <div className="mt-6 space-y-4">
              <div className="p-4 border rounded-xl hover:bg-slate-50 transition flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    BCH Wallet
                  </div>
                  <div className="text-xs mt-2 break-all text-slate-600">
                    bitcoincash:qxyz...placeholder
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      copyToClipboard("bitcoincash:qxyz...placeholder")
                    }
                    className="px-3 py-2 bg-slate-100 rounded-xl text-sm"
                  >
                    Copy
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="px-3 py-2 border rounded-xl text-sm"
                  >
                    Open
                  </a>
                </div>
              </div>

              <div className="p-4 border rounded-xl hover:bg-slate-50 transition flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    BTC Wallet
                  </div>
                  <div className="text-xs mt-2 break-all text-slate-600">
                    bc1qxyz...placeholder
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard("bc1qxyz...placeholder")}
                    className="px-3 py-2 bg-slate-100 rounded-xl text-sm"
                  >
                    Copy
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="px-3 py-2 border rounded-xl text-sm"
                  >
                    Open
                  </a>
                </div>
              </div>

              <div className="p-4 border rounded-xl hover:bg-slate-50 transition flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    ETH Wallet
                  </div>
                  <div className="text-xs mt-2 break-all text-slate-600">
                    0xAbc...placeholder
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard("0xAbc...placeholder")}
                    className="px-3 py-2 bg-slate-100 rounded-xl text-sm"
                  >
                    Copy
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="px-3 py-2 border rounded-xl text-sm"
                  >
                    Open
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-slate-100"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
