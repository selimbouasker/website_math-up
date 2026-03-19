"use client";

import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg width="28" height="28" viewBox="0 0 300 300" className="shrink-0 sm:w-8 sm:h-8">
              <rect width="300" height="300" fill="#059669" rx="60"/>
              <path d="M 215,95 L 119,95 A 42,55 0 0 0 119,205 L 215,205" fill="none" stroke="white" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg sm:text-xl text-gray-900 whitespace-nowrap">Math <span className="text-[#059669]">Up</span></span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/ambassadeur"
              className="relative px-3 sm:px-4 py-2 text-[#059669] hover:text-[#047857] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="hidden sm:inline">Ambassadeur</span>
              <span className="absolute top-1.5 right-1.5 sm:top-1 sm:right-0 w-2 h-2 bg-[#34D399] rounded-full animate-pulse" />
            </a>
            {/* Desktop buttons */}
            <a
              href="https://student.math-up.ai/signup"
              className="hidden sm:inline-block px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white rounded-xl text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Créer un compte
            </a>
            <a
              href="https://student.math-up.ai/login"
              className="hidden sm:inline-block px-4 py-2 border border-gray-300 hover:border-[#059669] text-gray-700 hover:text-[#059669] rounded-xl text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Se connecter
            </a>
            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden p-2 text-gray-700"
              aria-label="Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
            <a
              href="https://student.math-up.ai/signup"
              className="w-full text-center px-4 py-3 bg-[#059669] hover:bg-[#047857] text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Créer un compte
            </a>
            <a
              href="https://student.math-up.ai/login"
              className="w-full text-center px-4 py-3 border border-gray-300 hover:border-[#059669] text-gray-700 hover:text-[#059669] rounded-xl text-sm font-semibold transition-colors"
            >
              Se connecter
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Les maths <span className="text-[#059669]">autrement</span>
          </h1>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Math Up s&apos;adapte au niveau de chaque élève. Exercices personnalisés, coach IA intégré, programme tunisien complet. <span className="text-[#059669] font-bold">Gratuit et sans engagement.</span>
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="https://www.instagram.com/math_up_tn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#059669] hover:text-[#047857] font-semibold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Suivez-nous sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Pourquoi Math <span className="text-[#059669]">Up</span> ?
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Chaque élève est différent. Math Up s&apos;adapte pour que chacun progresse à son rythme.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" stroke="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Parcours personnalisé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adapté à ton vrai niveau, pas à ta classe. Les exercices s&apos;ajustent automatiquement : ni trop facile, ni trop difficile.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Coach IA intégré</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un tuteur intelligent qui t&apos;aide à chaque étape. Il guide sans donner les réponses : il aide à comprendre, pas à copier.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Progression visible</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                On ne peut pas améliorer ce qu&apos;on ne peut pas mesurer. Suivi détaillé notion par notion, pour l&apos;élève et les parents.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Programme tunisien</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contenu 100% conforme au programme officiel. Chaque chapitre est découpé en notions conçues pour être maîtrisées.
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
            Tous les élèves peuvent progresser avec la bonne méthode. Inscription gratuite, sans carte bancaire.
          </p>
          <a
            href="https://student.math-up.ai/signup"
            className="inline-block px-8 py-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl text-lg font-bold transition-colors"
          >
            Commencer gratuitement
          </a>
        </div>
      </section>

      {/* Ambassadeur */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#111827] rounded-3xl p-10 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 text-xs font-bold text-[#34D399] uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#34D399] rounded-full animate-pulse" />
            Recrutement ouvert
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Deviens <span className="text-[#059669]">Ambassadeur</span> Math Up
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Représente Math Up dans ton lycée, gagne un accès premium gratuit, une lettre de recommandation et une expérience unique pour ton CV.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/ambassadeur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl text-lg font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              En savoir plus
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
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
            <span className="font-semibold text-gray-700">Math Up</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/math_up_tn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#059669] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Math Up. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
