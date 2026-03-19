"use client";

import { useState } from "react";
import Link from "next/link";

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden"
    >
      <button
        className="w-full px-6 py-5 bg-transparent border-none font-[inherit] text-base font-bold text-gray-900 text-left cursor-pointer flex items-center justify-between transition-colors duration-200 hover:text-emerald-600"
        onClick={() => setOpen(!open)}
      >
        {question}
        <svg
          className="w-6 h-6 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function AmbassadeurPage() {
  return (
    <>
      <style>{`
        .hero-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #059669;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .steps-container::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 48px;
          bottom: 48px;
          width: 2px;
          background: linear-gradient(180deg, #059669, #A7F3D0);
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-[12px] border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <svg width="32" height="32" viewBox="0 0 300 300">
              <rect width="300" height="300" fill="#059669" rx="60" />
              <path
                d="M 215,95 L 119,95 A 42,55 0 0 0 119,205 L 215,205"
                fill="none"
                stroke="white"
                strokeWidth="36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-extrabold text-gray-900">
              Math <span className="text-emerald-600">Up</span>
            </span>
          </Link>
          <a
            href="#candidature"
            className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold no-underline transition-colors duration-200 hover:bg-emerald-700"
          >
            Postuler maintenant
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section pt-[140px] pb-20 px-6 text-center relative overflow-hidden">
        <div className="hero-badge inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 text-[13px] font-bold text-emerald-600 uppercase tracking-wider mb-7">
          Recrutement ouvert
        </div>
        <h1 className="text-[52px] font-black leading-[1.1] text-gray-900 max-w-[700px] mx-auto mb-5 max-md:text-[34px]">
          Deviens <span className="text-emerald-600">Ambassadeur</span> Math{" "}
          <span className="text-emerald-600">Up</span>
        </h1>
        <p className="text-xl font-medium text-gray-600 max-w-[550px] mx-auto mb-9 leading-normal max-md:text-base">
          Rejoins le programme, repr&eacute;sente Math{" "}
          <span className="text-emerald-600">Up</span> dans ton lyc&eacute;e et gagne des
          avantages exclusifs.
        </p>
        <a
          href="#candidature"
          className="inline-flex items-center gap-2.5 px-10 py-4 bg-emerald-600 text-white rounded-2xl text-lg font-extrabold no-underline transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(5,150,105,0.25)] group"
        >
          Je veux postuler
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="transition-transform duration-200 group-hover:translate-x-[3px]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      {/* STATS */}
      <div className="max-w-[900px] mx-auto mb-20 grid grid-cols-3 gap-6 px-6 max-md:grid-cols-1 max-md:max-w-[320px]">
        <div className="bg-white border border-gray-200 rounded-[20px] py-8 px-6 text-center">
          <div className="text-[40px] font-black text-emerald-600 leading-none mb-2">24</div>
          <div className="text-sm font-semibold text-gray-500">Gouvernorats &agrave; couvrir</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-[20px] py-8 px-6 text-center">
          <div className="text-[40px] font-black text-emerald-600 leading-none mb-2">100%</div>
          <div className="text-sm font-semibold text-gray-500">Gratuit pour toi</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-[20px] py-8 px-6 text-center">
          <div className="text-[40px] font-black text-emerald-600 leading-none mb-2">1er</div>
          <div className="text-sm font-semibold text-gray-500">
            Programme ambassadeur EdTech en Tunisie
          </div>
        </div>
      </div>

      {/* MISSIONS */}
      <section className="py-20 px-6 max-md:py-[60px]">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-[2px] mb-3">
            Tes missions
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Ce qu&apos;on attend de toi
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-[500px] mx-auto">
            Des actions simples qui font une vraie diff&eacute;rence.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {/* Mission 1 */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-7 flex gap-4 items-start transition-all duration-200 hover:border-emerald-200 hover:shadow-[0_4px_20px_rgba(5,150,105,0.08)]">
            <div className="w-12 h-12 min-w-[48px] bg-emerald-50 rounded-[14px] flex items-center justify-center text-[22px]">
              <svg width="24" height="24" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                Parler de Math <span className="text-emerald-600">Up</span> autour de toi
              </h3>
              <p className="text-sm text-gray-500 leading-normal">
                Partage ton lien de parrainage &agrave; tes camarades, dans tes groupes, &agrave; ton rythme.
              </p>
            </div>
          </div>

          {/* Mission 2 */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-7 flex gap-4 items-start transition-all duration-200 hover:border-emerald-200 hover:shadow-[0_4px_20px_rgba(5,150,105,0.08)]">
            <div className="w-12 h-12 min-w-[48px] bg-emerald-50 rounded-[14px] flex items-center justify-center text-[22px]">
              <svg width="24" height="24" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">Poster de temps en temps</h3>
              <p className="text-sm text-gray-500 leading-normal">
                Une story Insta, un TikTok, un post Facebook... On te fournit les visuels et les
                textes, tu publies quand tu veux.
              </p>
            </div>
          </div>

          {/* Mission 3 */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-7 flex gap-4 items-start transition-all duration-200 hover:border-emerald-200 hover:shadow-[0_4px_20px_rgba(5,150,105,0.08)]">
            <div className="w-12 h-12 min-w-[48px] bg-emerald-50 rounded-[14px] flex items-center justify-center text-[22px]">
              <svg width="24" height="24" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">Nous faire des retours</h3>
              <p className="text-sm text-gray-500 leading-normal">
                Ce que tes camarades pensent, ce qu&apos;ils aiment, ce qu&apos;on peut am&eacute;liorer. Ton
                avis compte.
              </p>
            </div>
          </div>

          {/* Mission 4 */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-7 flex gap-4 items-start transition-all duration-200 hover:border-emerald-200 hover:shadow-[0_4px_20px_rgba(5,150,105,0.08)]">
            <div className="w-12 h-12 min-w-[48px] bg-emerald-50 rounded-[14px] flex items-center justify-center text-[22px]">
              <svg width="24" height="24" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                Utiliser Math <span className="text-emerald-600">Up</span> toi-m&ecirc;me
              </h3>
              <p className="text-sm text-gray-500 leading-normal">
                Le meilleur ambassadeur, c&apos;est celui qui utilise vraiment le produit et qui y
                croit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-20 px-6 max-md:py-[60px]">
        <div className="bg-gray-900 rounded-[32px] max-w-[1000px] mx-auto py-16 px-12 text-white max-md:px-6 max-md:py-12 max-md:rounded-none">
          <div className="text-center mb-14">
            <div className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-[2px] mb-3">
              Contreparties
            </div>
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Ce que tu gagnes vraiment
            </h2>
            <p className="text-base text-gray-400 mt-3 max-w-[500px] mx-auto">
              Des avantages qui comptent pour ton avenir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-[700px] mx-auto max-md:grid-cols-1">
            <div className="flex items-start gap-3.5 p-5 bg-white/5 border border-white/[0.08] rounded-2xl">
              <div className="w-10 h-10 min-w-[40px] bg-emerald-600/15 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Acc&egrave;s premium gratuit</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Tant que tu es ambassadeur, tu as acc&egrave;s &agrave; toutes les fonctionnalit&eacute;s de Math{" "}
                  <span className="text-emerald-600">Up</span> gratuitement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 bg-white/5 border border-white/[0.08] rounded-2xl">
              <div className="w-10 h-10 min-w-[40px] bg-emerald-600/15 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Dossier universitaire</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Exp&eacute;rience concr&egrave;te &agrave; mettre dans ton dossier de bourse ou d&apos;admission &agrave;
                  l&apos;&eacute;tranger.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 bg-white/5 border border-white/[0.08] rounded-2xl">
              <div className="w-10 h-10 min-w-[40px] bg-emerald-600/15 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Lettre de recommandation</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Sign&eacute;e par les fondateurs, pour tes candidatures futures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 bg-white/5 border border-white/[0.08] rounded-2xl">
              <div className="w-10 h-10 min-w-[40px] bg-emerald-600/15 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">
                  Exp&eacute;rience pro sur ton CV
                </h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  &quot;Ambassadeur d&apos;une startup EdTech&quot; — &ccedil;a vaut de l&apos;or pour ton profil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20 px-6 max-md:py-[60px]">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-[2px] mb-3">
            Processus
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Comment &ccedil;a marche ?
          </h2>
        </div>

        <div className="steps-container max-w-[700px] mx-auto relative">
          <div className="flex gap-6 items-start mb-10 relative">
            <div className="w-[50px] h-[50px] min-w-[50px] bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-extrabold relative z-[1] shadow-[0_0_0_6px_#FAFBFC]">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5 mt-1">
                Remplis le formulaire
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dis-nous qui tu es, dans quel lyc&eacute;e tu es, et pourquoi tu veux rejoindre le
                programme.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start mb-10 relative">
            <div className="w-[50px] h-[50px] min-w-[50px] bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-extrabold relative z-[1] shadow-[0_0_0_6px_#FAFBFC]">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5 mt-1">Entretien rapide</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                On te recontacte sous 48h pour un court entretien (15-20 min). Juste un &eacute;change
                pour faire connaissance et valider ta motivation.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start mb-10 relative">
            <div className="w-[50px] h-[50px] min-w-[50px] bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-extrabold relative z-[1] shadow-[0_0_0_6px_#FAFBFC]">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5 mt-1">Tu rejoins le groupe</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Acc&egrave;s au groupe WhatsApp priv&eacute;, visuels pr&ecirc;ts &agrave; poster, et ton lien de parrainage
                perso.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start relative">
            <div className="w-[50px] h-[50px] min-w-[50px] bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-extrabold relative z-[1] shadow-[0_0_0_6px_#FAFBFC]">
              4
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5 mt-1">
                Tu repr&eacute;sentes Math <span className="text-emerald-600">Up</span>
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Partage, parraine, et fais grandir la communaut&eacute; Math Up autour de toi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-md:py-[60px]">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-[2px] mb-3">
            Questions fr&eacute;quentes
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">FAQ</h2>
        </div>

        <div className="max-w-[700px] mx-auto">
          <FaqItem
            question="C'est ouvert à quel niveau scolaire ?"
            answer="Tous les niveaux du lycée : 1ère, 2ème, 3ème et bac. Peu importe ta section."
          />
          <FaqItem
            question="Ça prend combien de temps par semaine ?"
            answer="Environ 1 à 2 heures par mois. L'essentiel c'est de partager ton lien et de poster de temps en temps. On te facilite le travail avec du contenu prêt à l'emploi."
          />
          <FaqItem
            question="Je dois payer quelque chose ?"
            answer="Non, rien du tout. Le programme est 100% gratuit. C'est toi qui gagnes des avantages."
          />
          <FaqItem
            question="Il y a un processus de sélection ?"
            answer="Oui, il y a un petit processus de sélection. Après ton formulaire, on te propose un court entretien (15-20 min) pour s'assurer de ta motivation et que le programme te correspond. Rien de stressant, c'est surtout un échange pour faire connaissance."
          />
          <FaqItem
            question="Je suis dans une région hors Tunis, je peux postuler ?"
            answer="Absolument ! On cherche des ambassadeurs partout en Tunisie : Sousse, Sfax, Gabès, Kairouan, Bizerte... Plus on couvre de régions, mieux c'est."
          />
          <FaqItem
            question="Je ne suis pas fort en maths, je peux quand même postuler ?"
            answer={
              <>
                Bien s&ucirc;r ! On ne cherche pas des premiers de la classe, on cherche des gens
                motiv&eacute;s qui ont envie de faire d&eacute;couvrir Math{" "}
                <span className="text-emerald-600">Up</span>. C&apos;est ta motivation et ton
                &eacute;nergie qui comptent.
              </>
            }
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center pt-20 pb-[100px] px-6" id="candidature">
        <h2 className="text-[40px] font-black text-gray-900 mb-4">
          Pr&ecirc;t &agrave; rejoindre l&apos;aventure Math{" "}
          <span className="text-emerald-600">Up</span> ?
        </h2>
        <p className="text-base text-gray-500 mb-8">
          Les places sont limit&eacute;es. Postule maintenant et fais partie des premiers
          ambassadeurs.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 px-10 py-4 bg-emerald-600 text-white rounded-2xl text-lg font-extrabold no-underline transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(5,150,105,0.25)] group"
        >
          Remplir le formulaire
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="transition-transform duration-200 group-hover:translate-x-[3px]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 px-6 border-t border-gray-100 text-[13px] text-gray-400">
        <p>
          Math <span className="text-emerald-600 font-bold">Up</span> — Les maths autrement.{" "}
          <a href="https://math-up.ai" className="text-emerald-600 no-underline font-semibold">
            math-up.ai
          </a>
        </p>
      </footer>
    </>
  );
}
