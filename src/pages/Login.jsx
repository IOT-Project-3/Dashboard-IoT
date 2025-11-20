import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // 👉 Ici tu pourras ajouter ton appel API / gestion d’auth
        // try {
        //   ...
        // } catch (err) {
        //   setError("Identifiants incorrects");
        // }
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
                <Card className="w-full max-w-md border-slate-800 bg-slate-900/80 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-50">
                            Heureux de vous retrouver !
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Connectez-vous pour accéder à votre espace.
                        </CardDescription>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-6">
                            {/* Email */}
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-slate-200">
                                    Adresse e-mail
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="admin@exemple.com"
                                    className="bg-slate-900/60 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-500/60"
                                />
                            </div>

                            {/* Mot de passe */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-slate-200">
                                        Mot de passe
                                    </Label>
                                </div>

                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        autoComplete="current-password"
                                        placeholder="Votre mot de passe"
                                        className="bg-slate-900/60 border-slate-700 pr-10 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-500/60"
                                    />

                                    <div className="absolute">
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                    </div>
                                    <a
                                        href="/mot-de-passe-oublie"
                                        className="text-xs text-indigo-400 hover:text-indigo-300 flex flex-row-reverse "
                                    >
                                        Mot de passe oublié ?
                                    </a>
                                </div>
                            </div>

                            {/* Erreur */}
                            {error && (
                                <Alert variant="destructive" className="border-red-900/60 bg-red-950/40">
                                    <AlertDescription className="text-sm text-red-200">
                                        {error}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </CardContent>

                        <CardFooter>
                            <Button
                                type="submit"
                                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white shadow-md shadow-indigo-500/30"
                            >
                                Connexion
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </main>
    );
}

export default Login;
