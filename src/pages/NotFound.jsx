import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen w-screen overflow-x-hidden bg-slate-900">
      {/* Gauche */}
      <div className="relative flex-[7] h-screen overflow-hidden">
        <img
          src="/login/val-de-loir-bg.png"
          alt="img-bg"
          className="h-full w-full object-cover"
        />
        <img
          src="/login/logo.png"
          alt="Logo"
          className="absolute left-6 top-6 w-64"
        />
        {/* petit voile pour lisibilité optionnel */}
      </div>

      {/* Droite */}
      <div className="flex flex-[3] w-full max-w-[50vw] min-h-screen items-center justify-center bg-slate-900 px-6 sm:px-10">
        <Card className="w-full max-w-md border-slate-800 bg-slate-900/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-50">
              404 — Oups !
            </CardTitle>
            <CardDescription className="text-slate-400">
              La page que vous cherchez n’existe pas ou a été déplacée.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-200">
            <p className="text-sm text-slate-300">
              Vérifiez l’URL, ou utilisez un des raccourcis ci-dessous.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate(-1)}
                className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-100 hover:bg-slate-800"
              >
                Revenir en arrière
              </button>

              <Link
                to="/"
                className="w-full rounded-md bg-indigo-500 px-4 py-2 text-center text-white hover:bg-indigo-400"
              >
                Retour à l’accueil
              </Link>

              <Link
                to="/connexion"
                className="w-full rounded-md border border-indigo-500/50 bg-transparent px-4 py-2 text-center text-indigo-300 hover:bg-indigo-500/10"
              >
                Aller à la connexion
              </Link>
            </div>
          </CardContent>

          <CardFooter className="text-xs text-slate-500">
            Si le problème persiste, contactez l’administrateur.
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

export default NotFound;
