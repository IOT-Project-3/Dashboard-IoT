import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  };

  return (
    <main className="flex min-h-screen">
      {/* Colonne gauche : image plein écran */}
      <div className="relative w-1/1 h-screen overflow-hidden">
        <img
          src="/login/val-de-loir-bg.png"
          alt="img-bg"
          className="w-full h-full object-cover"
        />
        <img
          src="/login/logo.png"
          alt="Logo"
          className="absolute top-6 left-6 w-64"
        />
      </div>

      {/* Colonne droite : formulaire */}
      <div className="flex w-1/2 min-h-screen items-center justify-center bg-slate-900 px-10">
        <section className="flex flex-col justify-center w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-50">
              Mot de passe oublié
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Indiquez votre adresse e-mail, nous vous enverrons un lien pour
              réinitialiser votre mot de passe.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200"
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="admin@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>

            {/* Messages */}
            {error && (
              <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {success && (
              <p className="text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 rounded-lg px-3 py-2">
                {success}
              </p>
            )}

            {/* Bouton */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:ring-offset-2 focus:ring-offset-slate-950 transition"
            >
              Envoyer le lien de réinitialisation
            </button>

            <div className="text-xs text-slate-400 text-center">
              <a href="/connexion" className="underline hover:text-slate-200">
                Revenir à la page de connexion
              </a>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default ForgotPassword;
