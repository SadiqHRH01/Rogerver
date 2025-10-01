type AboutRogerPageProps = {
  setPage: (
    page: "home" | "support" | "aboutRoger",
    hash?: string | null
  ) => void;
};

export default function AboutRogerPage({ setPage }: AboutRogerPageProps) {
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
              onClick={() => setPage("support")}
              className="px-3 py-2 bg-emerald-600 text-white rounded-lg font-medium shadow hover:bg-emerald-700 transition"
            >
              💚 Support New Projects
            </button>
          </nav>
        </div>
      </header>
      <div className="relative bg-gradient-to-b from-emerald-50 via-white to-white">
  <div className="container mx-auto px-6 py-20">
    {/* Hero Section with Gradient */}
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <img
          src="/images/img8.jpg" // <-- replace with your image path
          alt="Roger Ver"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-emerald-500 shadow-xl object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
        🌍 About Roger Ver
      </h1>
      <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
        A tribute to Roger Ver’s lifelong generosity and impact.
      </p>
    </div>

    {/* Intro */}
    <div className="bg-white shadow-xl rounded-3xl p-8 mb-14 border border-slate-100 max-w-4xl mx-auto">
      <p className="text-slate-600 leading-relaxed text-lg">
        Roger Ver, often called <strong>“Bitcoin Jesus”</strong>, has
        demonstrated that cryptocurrency can be more than a financial tool — it
        can be a lifeline, a force for freedom, and a platform for compassion.
        His philanthropy and advocacy have touched countless lives across the
        globe.
      </p>
    </div>

    {/* Quote Banner */}
    <div className="relative max-w-4xl mx-auto mb-16">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-3xl shadow-lg p-10 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 mx-auto mb-4 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h.01M15 12h.01M7.5 15h9a2.5 2.5 0 002.5-2.5v-5a2.5 2.5 0 00-2.5-2.5h-9A2.5 2.5 0 005 7.5v5A2.5 2.5 0 007.5 15z"
          />
        </svg>
        <p className="text-xl md:text-2xl italic font-medium leading-relaxed">
          “Bitcoin gives people all over the world access to a more free and
          open financial system.”
        </p>
        <p className="mt-4 text-sm opacity-90">— Roger Ver</p>
      </div>
    </div>

    {/* Sections */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Education */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
          📚 Education & Opportunity
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Donated over <strong>$3,000,000</strong> to the Foundation for
            Economic Education (FEE), expanding digital education worldwide.
          </li>
          <li>
            Supported schools in Ghana, Nigeria, and beyond with books,
            technology & resources.
          </li>
          <li>
            Funded scholarships and educational programs promoting literacy and
            liberty.
          </li>
        </ul>
      </div>

      {/* Health */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          🚑 Health & Survival
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Contributed over <strong>$1,000,000</strong> to anti-drug war causes,
            championing reform.
          </li>
          <li>
            Sponsored life-saving surgeries & medical supplies for children with
            diabetes.
          </li>
          <li>
            Delivered fast aid during hurricanes in Texas & earthquakes in Puebla
            using Bitcoin Cash.
          </li>
        </ul>
      </div>
      {/* Humanitarian */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          🌐 Humanitarian Support & Freedom Causes
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Donated <strong>$500,000+</strong> to AntiWar.com and{" "}
            <strong>$1,000,000+</strong> to Brownstone.org.
          </li>
          <li>
            Gave <strong>$17,000 in BCH</strong> to Atilis Gym owners when banks
            froze their accounts.
          </li>
          <li>
            Supported <strong>Save the Children</strong>, pioneering crypto-based
            donations for relief.
          </li>
          <li>
            Empowered communities in Antigua, Nigeria, and across the Global South
            with resources.
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-amber-600 mb-4">
          🏆 Achievements & Recognition
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Author of Amazon Best-Seller <em>“Hijacking Bitcoin.”</em>
          </li>
          <li>
            Featured in documentaries: <em>The Rise and Rise of Bitcoin</em>{" "}
            (2014), <em>The Bitcoin Gospel</em> (2015),{" "}
            <em>Bitcoin: The End of Money</em> (2015), and more.
          </li>
          <li>
            Media features: CNN, FOX, RT, Wired, Forbes, Wall Street Journal, New
            York Times.
          </li>
          <li>Fluent in Japanese and a Brazilian Jiu-Jitsu Black Belt.</li>
          <li>
            Recognized as one of the earliest and most influential voices for
            Bitcoin as peer-to-peer electronic cash.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
