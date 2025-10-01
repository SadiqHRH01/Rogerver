import { motion } from "framer-motion";

type SupportPageProps = {
  setPage: (
    page: "home" | "support" | "aboutRoger",
    hash?: string | null
  ) => void;
};

export default function SupportPage({ setPage }: SupportPageProps) {
  return (
    <>
      <header className="py-6 sticky top-0 z-40 border-b bg-white/80 backdrop-blur shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-extrabold text-emerald-600">RVP</div>
          </div>
          <nav className="flex gap-4">
            <button
              onClick={() => setPage("home")}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => setPage("aboutRoger")}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 font-medium"
            >
              About Roger
            </button>
          </nav>
        </div>
      </header>
      <div className="container mx-auto px-6 py-16">
        <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-1 md:pr-10 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
              Support Projects 💚
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              The RVP platform is committed to building futures where
              opportunity, dignity, and sustainability come together. Our focus
              is on projects that create long-term change in people’s lives.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex-1 mt-10 md:mt-0"
          >
            <div className="w-full h-72 md:h-96 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/images/img1.jpg"
                alt="Children benefiting from projects"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        <h2 className="text-4xl text-center font-extrabold text-slate-800 mb-12">
          Our Mission
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Education Card */}
          <div className="bg-white shadow-lg rounded-3xl p-8 mb-12 border border-slate-100">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4 flex items-center gap-2">
              📚 Education & Youth Empowerment
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Education is the foundation of opportunity. RVP-supported
              initiatives provide young people with access to learning
              materials, digital labs, and training in areas like coding,
              freelancing, and blockchain.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              By combining education with mentorship and scholarships, we ensure
              that students not only stay in school but are also equipped with
              the skills to participate in the global digital economy.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              This work gives youth the chance to shape their own futures, earn
              independently, and contribute to their communities.
            </p>
          </div>

          {/* Clean Water Card */}
          <div className="bg-white shadow-lg rounded-3xl p-8 mb-12 border border-slate-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              🌊 Clean Water for Communities
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Water is life, and access to clean, safe water transforms
              everything around it. RVP projects focus on installing boreholes
              and wells, teaching local communities how to maintain them, and
              promoting sanitation practices that improve health.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              When families don’t have to spend hours searching for water,
              children can go to school, women can work, and entire communities
              can move forward together.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Clean water doesn’t just improve health — it fuels education,
              equality, and economic progress.
            </p>
          </div>

          {/* Tree Planting Card */}
          <div className="bg-white shadow-lg rounded-3xl p-8 mb-12 border border-slate-100">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
              🌱 Tree Planting Initiative
            </h2>
            <p className="text-slate-600 leading-relaxed">
              “Instead of Fees, Plant Trees” is more than just a slogan — it’s a
              vision for how crypto can give back to the world. Transaction fees
              in traditional finance systems often drain value away from people,
              but in the crypto space, we can choose to channel that value
              toward restoring our planet.
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-600">
              <li>
                🌍 Offset the environmental footprint of technology growth.
              </li>
              <li>
                🌳 Create greener spaces in schools, communities, and public
                areas.
              </li>
              <li>
                👩‍👩‍👦 Link every planted tree to a story of empowerment — whether
                it’s a scholarship awarded, a borehole built, or a youth
                trained.
              </li>
            </ul>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Each tree becomes a living symbol of freedom and sustainability:
              where others would collect fees, we plant trees instead. This
              initiative connects financial innovation with environmental
              action, showing that crypto-driven generosity can help heal the
              earth as well as empower people.
            </p>
          </div>
          {/* Donate Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">💵 Support This Mission</h2>
            <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Every contribution goes directly into projects that provide
              education, clean water, and environmental renewal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setPage("home", "#donate-now")}
                className="px-6 py-3 bg-white text-emerald-700 hover:bg-slate-100 rounded-xl font-semibold shadow transition"
              >
                Donate with Bitcoin Cash
              </button>
              <button
                onClick={() => setPage("home", "#impact")}
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold shadow transition"
              >
                See What Your Donation Funds
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
