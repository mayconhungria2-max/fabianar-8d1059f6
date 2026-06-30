import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

import fabianaVibeDuoImg from "@/assets/fabiana-vibe-duo.png";
import fabianaVibeEssenceAdImg from "@/assets/fabiana-vibe-essence-ad.png";


import perfumeFem from "@/assets/perfume-feminino.png";
import perfumeMasc from "@/assets/perfume-masculino.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fabiana Rocha Fashion — Perfumes de Luxo" },
      { name: "description", content: "Fragrâncias autorais para a mulher poderosa. Explore a coleção Fabiana Rocha Fashion." },
      { property: "og:title", content: "Fabiana Rocha Fashion — A essência da mulher poderosa" },
      { property: "og:description", content: "Perfumes de luxo. Coleção autoral, feita à mão em Grasse." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

type Category = "Feminino" | "Masculino";
type Perfume = {
  name: string;
  notes: string;
  family: string;
  category: Category;
  volume: string;
  price: string;
};

const feminineCollection: Perfume[] = [
  { name: "La Vie Est Belle", notes: "Íris · Pera · Patchouli", family: "Floral Gourmand", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Coco Mademoiselle", notes: "Rosa · Jasmim · Patchouli", family: "Floral Amadeirado", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Olympea", notes: "Baunilha salgada · Flor de sal · Âmbar", family: "Oriental Floral", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Scandal", notes: "Mel · Gardênia · Madeiras", family: "Floral Doce", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Burberry Her", notes: "Frutas vermelhas · Jasmim · Almíscar", family: "Frutal Floral", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Libre", notes: "Flor de laranjeira · Lavanda · Almíscar", family: "Floral Oriental", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "212 Rose", notes: "Rosa · Pêssego · Sândalo", family: "Floral Frutado", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Light Blue", notes: "Maçã · Cedro · Bambu", family: "Cítrico Floral", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Good Girl", notes: "Cacau · Tuberosa · Fava tonka", family: "Oriental Gourmand", category: "Feminino", volume: "55ml", price: "R$ 110" },
  { name: "Fame", notes: "Jasmim · Almíscar · Baunilha", family: "Oriental Floral", category: "Feminino", volume: "55ml", price: "R$ 110" },
];

const masculineCollection: Perfume[] = [
  { name: "1 Million", notes: "Bergamota · Lavanda · Fava tonka", family: "Aromático Fougère", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Sauvage", notes: "Bergamota · Vetiver · Sândalo", family: "Amadeirado Aromático", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Invictus", notes: "Toranja · Gengibre · Madeiras", family: "Amadeirado Aquático", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "D&G King", notes: "Tabaco · Couro · Mel", family: "Oriental Amadeirado", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "My Self", notes: "Chá preto · Cardamomo · Cedro", family: "Amadeirado Especiado", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Bleu Chanel", notes: "Pimenta · Lavanda · Âmbar", family: "Oriental Fougère", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Phantom", notes: "Cardamomo · Sândalo · Almíscar", family: "Amadeirado Aromático", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Bad Boy", notes: "Limão siciliano · Alecrim · Madeiras", family: "Cítrico Aromático", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "Acqua di Gio", notes: "Café · Tabaco · Couro", family: "Oriental Amadeirado", category: "Masculino", volume: "55ml", price: "R$ 110" },
  { name: "212 VIP Men", notes: "Absinto · Gengibre · Couro", family: "Amadeirado Especiado", category: "Masculino", volume: "55ml", price: "R$ 110" },
];

const testimonials = [
  { q: "Não é só perfume. É presença.", a: "Camila R., São Paulo" },
  { q: "Recebo elogios o dia inteiro. Vicia.", a: "Larissa M., Rio de Janeiro" },
  { q: "A fragrância mais sofisticada que já usei.", a: "Beatriz S., Belo Horizonte" },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-foreground/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display italic text-2xl tracking-tight">
          Fabiana Rocha<span className="text-[var(--rose-deep)]">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] uppercase text-foreground/70">
          <li><a href="#colecao" className="hover:text-foreground transition">Coleção</a></li>
          <li><a href="#historia" className="hover:text-foreground transition">História</a></li>
          <li><a href="#contato" className="hover:text-foreground transition">Contato</a></li>
        </ul>
        <a href="#colecao" className="text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-foreground text-background hover:bg-[var(--rose-deep)] transition">
          Comprar
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-luxe">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[var(--rose-deep)] mb-6">Nova Coleção · 2026</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            A essência da <em className="text-[var(--rose-deep)]">mulher poderosa</em>.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-md mx-auto leading-relaxed">
            Fragrâncias autorais, criadas em Grasse, embaladas em frascos esculpidos à mão.
            Uma assinatura olfativa para quem comanda o próprio universo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a href="#colecao" className="px-8 py-4 rounded-full bg-foreground text-background text-xs tracking-[0.3em] uppercase hover:bg-[var(--rose-deep)] transition shadow-soft">
              Explorar Coleção
            </a>
            <a href="https://wa.me/5511986639418" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-foreground/20 text-xs tracking-[0.3em] uppercase hover:border-foreground transition">
              Fale pelo WhatsApp
            </a>
          </div>
          <div className="mt-14 flex justify-center items-center gap-8 text-xs text-foreground/60">
            <div><span className="block font-display text-2xl text-foreground">12k+</span>clientes</div>
            <div className="w-px h-8 bg-foreground/15" />
            <div><span className="block font-display text-2xl text-foreground">4.9★</span>avaliação média</div>
            <div className="w-px h-8 bg-foreground/15" />
            <div><span className="block font-display text-2xl text-foreground">100%</span>cruelty free</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Campaign() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-6 relative">
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-rose blur-xl opacity-20 -z-10" />
          <img
            src={fabianaVibeDuoImg}
            alt="Fabiana Rocha com os frascos Vibe Essence Inspirações"
            width={1160}
            height={1380}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-6 lg:pl-8">
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[var(--rose-deep)] mb-6">Campanha 2026</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Por trás de cada mulher de sucesso, há uma <em className="text-[var(--rose-deep)]">fragrância inesquecível</em>.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-lg">
            Uma campanha protagonizada por Fabiana Rocha — Empresária, criadora e rosto da marca.
            Porque a confiança também se usa em spray.
          </p>
          <blockquote className="mt-10 pl-6 border-l-2 border-[var(--rose-deep)] font-display italic text-2xl text-foreground/90 max-w-md">
            "Eu queria um perfume que dissesse, antes de mim, que eu cheguei."
            <span className="block mt-3 text-xs tracking-[0.3em] uppercase not-italic text-foreground/50">— Fabiana Rocha, fundadora</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

function VibeEssenceAd() {
  return (
    <section className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp} className="relative">
          <img
            src={fabianaVibeEssenceAdImg}
            alt="Fabiana Rocha apresentando Vibe Essence Inspirações Parfum"
            width={1148}
            height={1434}
            loading="lazy"
            className="w-full rounded-[1.5rem] object-cover shadow-soft"
          />
        </motion.div>
        <motion.div {...fadeUp} className="lg:pl-6">
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[var(--rose-deep)] mb-6">Edição Vibe Essence</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            A essência que <em className="text-[var(--rose-deep)]">marca presença</em>.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-lg">
            Vibe Essence Inspirações Parfum é uma fragrância feita para mulheres que não passam despercebidas.
            Notas envolventes, fixação prolongada e um toque dourado de sofisticação.
          </p>
          <div className="mt-10 flex items-baseline gap-4">
            <span className="font-display text-4xl text-foreground">R$ 110</span>
            <span className="text-sm text-foreground/50 tracking-wide uppercase">Frasco 55ml</span>
          </div>
          <a
            href="#colecao"
            className="mt-8 inline-block bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[var(--rose-deep)] transition-colors"
          >
            Comprar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}




function Collection() {
  const [tab, setTab] = useState<Category>("Feminino");
  const list = tab === "Feminino" ? feminineCollection : masculineCollection;
  return (
    <section id="colecao" className="py-28 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center mb-6">
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Catálogo Exclusivo</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
            Fragrâncias <em className="text-[#D4AF37]">Inspiradas</em>, Essência Própria.
          </h2>
          <p className="mt-6 text-base text-white/70 max-w-2xl mx-auto">
            Fragrâncias exclusivas inspiradas nos perfumes mais desejados do mundo,
            com excelente fixação e qualidade premium.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mt-10 mb-14">
          {(["Feminino", "Masculino"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`px-8 py-3 rounded-full text-[10px] tracking-[0.3em] uppercase transition border ${
                tab === c
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <ProductCard key={p.name} perfume={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ perfume, index }: { perfume: Perfume; index: number }) {
  const { name, notes, family, category, volume, price } = perfume;
  const img = category === "Feminino" ? perfumeFem : perfumeMasc;
  const waMsg = encodeURIComponent(`Olá! Tenho interesse no perfume ${name} (${category}, ${volume}).`);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6 overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(212,175,55,0.35)]"
    >
      <div className="absolute top-4 right-4 z-10 text-[9px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] bg-black/40 backdrop-blur">
        {category}
      </div>
      <div className="aspect-[3/4] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-black">
        <img
          src={img}
          alt={`Frasco ${name}`}
          width={600}
          height={800}
          loading="lazy"
          className="h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ filter: "drop-shadow(0 25px 40px rgba(212,175,55,0.25))" }}
        />
      </div>
      <div className="mt-5">
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37]/80">{family}</p>
        <div className="mt-2 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-white">{name}</h3>
          <span className="text-xs tracking-wider text-white/60">{volume}</span>
        </div>
        <p className="mt-2 text-xs tracking-[0.1em] text-white/55 leading-relaxed">{notes}</p>

        <div className="mt-4 flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-white/50">
          <span className="inline-flex items-center gap-1">
            <span className="size-1 rounded-full bg-[#D4AF37]" /> Alta Fixação
          </span>
          <span className="text-white/20">·</span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1 rounded-full bg-[#D4AF37]" /> Premium
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-display text-xl text-[#D4AF37]">{price}</span>
          <a
            href={`https://wa.me/5511986639418?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-black text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white transition"
          >
            Comprar
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Story() {
  return (
    <section id="historia" className="py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div {...fadeUp}>
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[var(--rose-deep)] mb-6">Nossa História</span>
          <h2 className="font-display text-4xl sm:text-5xl text-balance leading-[1.1]">
            De um sonho em São Paulo a um laboratório em <em className="text-[var(--rose-deep)]">Grasse</em>.
          </h2>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
            Fabiana Rocha Fashion nasceu da obsessão por fragrâncias que durassem o dia inteiro
            sem perder elegância. Hoje, cada criação é assinada em parceria com mestres
            perfumistas franceses, e cada frasco é numerado à mão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 bg-[var(--rose-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[var(--rose-deep)] mb-4">Quem usa, ama</span>
          <h2 className="font-display text-4xl sm:text-5xl">Vozes da nossa comunidade</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-3xl bg-background p-8 shadow-rose border border-foreground/5"
            >
              <div className="text-[var(--rose-deep)] text-4xl font-display leading-none">"</div>
              <blockquote className="mt-2 font-display text-2xl italic leading-snug text-foreground/90">{t.q}</blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.3em] uppercase text-foreground/50">{t.a}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="contato" className="py-28 bg-background">
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto px-6 lg:px-10 text-center rounded-3xl bg-gradient-rose py-20 shadow-rose"
      >
        <h2 className="font-display text-4xl sm:text-5xl text-balance">Receba as próximas criações em primeira mão.</h2>
        <p className="mt-4 text-foreground/70 max-w-md mx-auto">Lançamentos limitados, edições privadas e convites exclusivos.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="seu@email.com"
            className="flex-1 px-6 py-4 rounded-full bg-background/80 backdrop-blur border border-foreground/10 outline-none focus:border-foreground/40 transition text-sm"
          />
          <button className="px-8 py-4 rounded-full bg-foreground text-background text-xs tracking-[0.3em] uppercase hover:bg-[var(--rose-deep)] transition">
            Assinar
          </button>
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-background/80 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display italic text-3xl text-background">Fabiana Rocha<span className="text-[var(--rose)]">.</span></div>
          <p className="mt-4 text-sm text-background/60 max-w-xs">A essência da mulher poderosa. Perfumaria autoral, feita à mão em Grasse.</p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-background mb-4">Loja</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#colecao" className="hover:text-[var(--rose)] transition">Coleção</a></li>
            <li><a href="#" className="hover:text-[var(--rose)] transition">Edições limitadas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-background mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>contato@fabianarochafashion.com</li>
            <li>+55 11 98663-9418</li>
            <li>São Paulo · Grasse</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-background/50">
        <p>© 2026 Fabiana Rocha Fashion. Todos os direitos reservados.</p>
        <p>Feito com obsessão por detalhe.</p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511986639418"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Campaign />
      <VibeEssenceAd />
      <Collection />
      <Story />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
