import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Sparkles, Send } from "lucide-react"

export default function SneburFamilySite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Effet bleu dynamique en fond */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 rounded-full blur-3xl opacity-20"
      />

      {/* Header */}
      <header className="z-10 text-center mb-8">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          SNEBUR FAMILY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Une communauté soudée, fun et accueillante.
        </motion.p>
      </header>

      {/* Contenu principal */}
      <main className="z-10 w-full max-w-3xl px-6 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-b from-white to-blue-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-600 mb-3" />
              <h2 className="text-2xl font-bold mb-2">Une vraie famille</h2>
              <p className="text-gray-600">
                Snebur Family, c’est une communauté forte, pleine d’énergie et de respect. Rejoins-nous pour partager et t’amuser !
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-b from-white to-blue-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Sparkles className="w-12 h-12 text-sky-500 mb-3" />
              <h2 className="text-2xl font-bold mb-2">Événements & Activités</h2>
              <p className="text-gray-600">
                Participe à nos événements, concours, jeux et soirées animées ! Il y a toujours quelque chose de nouveau à vivre.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Bouton rejoindre */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="z-10 mt-12"
      >
        <a href="https://discord.gg/TONINVITE" target="_blank" rel="noopener noreferrer">
          <Button className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
            <Send className="w-5 h-5" />
            Rejoindre le serveur Discord
          </Button>
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="z-10 mt-12 text-gray-500 text-sm">
        © 2025 Snebur Family — Tous droits réservés
      </footer>
    </div>
  )
}
