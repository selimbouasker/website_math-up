export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 300 300" className="shrink-0">
              <rect width="300" height="300" fill="#059669" rx="60"/>
              <path d="M 215,95 L 119,95 A 42,55 0 0 0 119,205 L 215,205" fill="none" stroke="white" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-xl text-gray-900">Math-up</span>
          </div>
          <a
            href="https://student.math-up.ai/signup"
            className="px-5 py-2.5 bg-[#059669] hover:bg-[#047857] text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#059669]/25"
          >
            Commencer gratuitement
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Les maths <span className="text-[#059669]">autrement</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Une plateforme qui s&apos;adapte au niveau de chaque élève.
            Exercices personnalisés, coach IA intégré, programme tunisien complet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://student.math-up.ai/signup"
              className="px-8 py-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-[#059669]/25 hover:-translate-y-0.5"
            >
              Commencer gratuitement
            </a>
          </div>
          {/* Espace réservé pour la vidéo du fondateur */}
          <div className="mt-16 max-w-3xl mx-auto aspect-video bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-gray-400 text-lg">Vidéo de présentation</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Pourquoi Math-up ?
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Chaque élève est différent. Math-up s&apos;adapte pour que chacun progresse à son rythme.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#059669]/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Adaptation personnalisée</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les exercices s&apos;adaptent automatiquement au niveau de l&apos;élève. Ni trop facile, ni trop difficile.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#059669]/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Coach IA intégré</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un tuteur intelligent qui guide sans donner les réponses. Il aide à comprendre, pas à copier.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#059669]/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Progression visible</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Suivi détaillé par notion et par chapitre. L&apos;élève et les parents voient les progrès en temps réel.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#059669]/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Programme tunisien</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contenu 100% aligné sur le programme CNP. 1ère année secondaire, avec plus de niveaux à venir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-gray-600 mb-8">
            Inscription gratuite, sans carte bancaire. Commence à progresser dès maintenant.
          </p>
          <a
            href="https://student.math-up.ai/signup"
            className="inline-block px-8 py-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-[#059669]/25 hover:-translate-y-0.5"
          >
            Commencer gratuitement
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 300 300" className="shrink-0">
              <rect width="300" height="300" fill="#059669" rx="60"/>
              <path d="M 215,95 L 119,95 A 42,55 0 0 0 119,205 L 215,205" fill="none" stroke="white" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-gray-700">Math-up</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Math-up. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
