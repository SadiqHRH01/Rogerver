import CountUp from "react-countup";
import { DollarSign, Globe, HeartHandshake } from "lucide-react";

export default function ImpactStatsChart() {
  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-emerald-700">
          A Legacy of Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Donations Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform duration-300">
            <DollarSign
              className="w-12 h-12 mx-auto text-emerald-500 mb-4"
              strokeWidth={1.5}
            />
            <div className="text-4xl font-extrabold text-emerald-600">
              $<CountUp end={6} duration={2.5} separator="," />
              M+
            </div>
            <p className="text-slate-600 mt-2 font-medium">
              Donated to humanitarian causes
            </p>
          </div>

          {/* Global Initiatives Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform duration-300">
            <Globe
              className="w-12 h-12 mx-auto text-blue-500 mb-4"
              strokeWidth={1.5}
            />
            <div className="text-4xl font-extrabold text-blue-600">
              <CountUp end={10} duration={2} />+
            </div>
            <p className="text-slate-600 mt-2 font-medium">
              Global initiatives funded
            </p>
          </div>

          {/* Lives Touched Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform duration-300">
            <HeartHandshake
              className="w-12 h-12 mx-auto text-amber-500 mb-4"
              strokeWidth={1.5}
            />
            <div className="text-4xl font-extrabold text-amber-600">
              <CountUp end={1000} duration={2} separator="," />+
            </div>
            <p className="text-slate-600 mt-2 font-medium">
              Lives touched through direct aid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}