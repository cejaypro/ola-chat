import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Check, Minus, ShieldCheck, Fish, Gift, Quote, Anchor } from "lucide-react";
import heroImg from "@/assets/hero-pescaria.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Cole aqui o link da plataforma de pagamento quando estiver disponível. */
const CHECKOUT_URL = "";

/** Links do rodapé — preencha quando as páginas existirem. */
const FOOTER_LINKS = [
  { label: "Política de Privacidade", href: "" },
  { label: "Termos de Uso", href: "" },
  { label: "Contato", href: "" },
];

const TITLE = "Do Zero ao Primeiro Peixe — Guia digital de pesca para iniciantes";
const DESC =
  "Aprenda o passo a passo para começar na pescaria: equipamentos, iscas, nós e pesca em rios, lagos e represas. Ebook digital por R$ 29,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#guia", label: "O guia" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#bonus", label: "Bônus" },
  { href: "#oferta", label: "Oferta" },
  { href: "#duvidas", label: "Dúvidas" },
];

const ANTES = [
  "Não sabe qual vara ou molinete escolher.",
  "Compra iscas sem saber se são adequadas.",
  "Tem dificuldade para montar o equipamento.",
  "Não entende por que os peixes não estão atacando.",
  "Fica dependendo de outras pessoas para aprender.",
];
const DEPOIS = [
  "Saberá escolher equipamentos mais adequados ao seu objetivo.",
  "Entenderá como montar seu conjunto de pesca.",
  "Conhecerá diferentes tipos de iscas e suas aplicações.",
  "Terá mais conhecimento sobre o comportamento dos peixes.",
  "Poderá planejar suas pescarias com muito mais confiança.",
];

const MODULOS: { t: string; d: ReactNode }[] = [
  { t: "Fundamentos da pescaria", d: "Entenda como a pescaria funciona, conheça os principais conceitos e descubra o que realmente importa para começar." },
  {
    t: "Escolhendo os equipamentos certos",
    d: (
      <>
        Aprenda sobre:
        <ul className="mt-2 grid gap-1">
          {["Varas de pesca.", "Molinetes e carretilhas.", "Linhas e líderes.", "Anzóis.", "Boias e chumbadas.", "Acessórios essenciais."].map((i) => (
            <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{i}</li>
          ))}
        </ul>
      </>
    ),
  },
  { t: "Como montar seu equipamento", d: "Aprenda a preparar seu conjunto de pesca, conectar os componentes e entender a função de cada peça." },
  { t: "Conhecendo os principais nós de pesca", d: "Conheça nós utilizados na pescaria e entenda como fazer conexões mais seguras entre linha, anzol e outros componentes." },
  { t: "O mundo das iscas", d: "Descubra as diferenças entre iscas naturais e artificiais e aprenda a escolher de acordo com o peixe, o ambiente e as condições da pescaria." },
  { t: "Como escolher iscas para diferentes peixes", d: "Entenda quais características considerar na escolha das iscas e como adaptar sua estratégia às espécies que pretende capturar." },
  { t: "Pescaria em rios", d: "Aprenda a observar correnteza, profundidade, estruturas e possíveis pontos de alimentação dos peixes." },
  { t: "Pescaria em lagos e represas", d: "Entenda as particularidades desses ambientes e como procurar os melhores pontos para tentar sua captura." },
  { t: "Entendendo o comportamento dos peixes", d: "Aprenda sobre alimentação, movimentação, temperatura da água e outros fatores que podem influenciar a atividade dos peixes." },
  { t: "Técnicas e erros comuns", d: "Conheça técnicas básicas, aprenda a reconhecer uma fisgada e evite erros frequentes de quem está começando." },
  { t: "Cuidados durante a pescaria", d: "Conheça cuidados com segurança, manuseio dos peixes, conservação dos equipamentos e respeito às regras locais de pesca." },
  { t: "Preparando sua primeira pescaria", d: "Organize tudo o que aprendeu e prepare-se para colocar o conhecimento em prática." },
];

const DIFERENCIAIS = [
  ["Linguagem simples", "explicações acessíveis, sem complicações desnecessárias."],
  ["Conteúdo organizado", "aprenda na ordem certa, construindo sua base aos poucos."],
  ["Aplicação prática", "conheça os equipamentos e as técnicas que fazem parte da pescaria."],
  ["Para diferentes ambientes", "fundamentos aplicáveis à pescaria em rios, lagos e represas."],
  ["Para diferentes idades", "não importa se você está começando jovem ou decidiu aprender depois de muitos anos."],
];

const BONUS = [
  ["Checklist da Primeira Pescaria", "Uma lista prática para conferir seus equipamentos, acessórios e materiais antes de sair de casa."],
  ["Guia Rápido de Iscas", "Um material de consulta para entender as características das principais categorias de iscas e quando considerar cada uma."],
  ["Guia Visual de Nós de Pesca", "Um material complementar com ilustrações e orientações passo a passo para aprender a executar nós úteis na pescaria."],
  ["Diário da Minha Pescaria", "Um planejador para registrar locais visitados, condições da água, iscas utilizadas, espécies encontradas e aprendizados de cada experiência."],
];

const DEPOIMENTOS = [
  "Espaço para relato de um leitor sobre o que aprendeu e como aplicou o conhecimento.",
  "Espaço para relato de um leitor sobre a escolha dos equipamentos ou das iscas.",
  "Espaço para relato de um leitor sobre sua evolução na pescaria.",
];

const FAQ = [
  ["Nunca pesquei na vida. Esse guia é para mim?", "Sim! O material foi pensado principalmente para quem deseja aprender desde o absoluto zero, sem precisar ter experiência anterior."],
  ["Preciso ter equipamentos profissionais para começar?", "Não. Uma das propostas do guia é ajudar você a entender os equipamentos e fazer escolhas mais adequadas ao seu objetivo, sem acreditar que precisa comprar tudo o que existe no mercado."],
  ["Vou aprender a utilizar molinete e vara de pesca?", "Sim. O conteúdo aborda os principais equipamentos, suas funções e os fundamentos para montar seu conjunto de pesca."],
  ["O guia ensina quais iscas utilizar?", "Sim. Você aprenderá sobre diferentes tipos de iscas e os fatores que devem ser considerados para escolher uma opção adequada a cada situação."],
  ["Posso aprender a pescar em rios, lagos e represas?", "Sim. O ebook apresenta fundamentos e técnicas básicas para compreender as particularidades desses ambientes."],
  ["O conteúdo serve para quem já tem alguma experiência?", "Sim. Mesmo quem já pesca pode aproveitar o material para revisar fundamentos, compreender melhor os equipamentos e organizar seus conhecimentos."],
  ["Preciso ter barco para começar?", "Não necessariamente. Existem modalidades de pesca realizadas diretamente da margem, desde que o local permita e ofereça condições seguras."],
  ["O acesso é físico ou digital?", "O produto é um ebook digital. Você poderá consultar o material em dispositivos compatíveis, como celular, tablet ou computador."],
  ["Vou conseguir pegar peixes depois de ler?", "O guia vai ajudar você a compreender os fundamentos e se preparar melhor para suas pescarias. Entretanto, nenhuma técnica garante capturas, pois o resultado também depende das condições ambientais, das espécies, do local e da execução."],
  ["Como funciona a garantia?", "Você conta com o prazo legal de 7 dias para exercer seu direito de arrependimento nas compras realizadas fora do estabelecimento comercial, conforme a legislação aplicável."],
];

function CtaButton({ children, size = "md" }: { children: ReactNode; size?: "md" | "lg" }) {
  const [notice, setNotice] = useState(false);
  const cls = `inline-flex items-center justify-center rounded-full bg-gold text-accent-foreground font-bold uppercase tracking-wide shadow-gold transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 text-center ${
    size === "lg" ? "px-8 py-5 text-base md:text-lg" : "px-7 py-4 text-sm md:text-base"
  }`;
  if (CHECKOUT_URL) {
    return <a href={CHECKOUT_URL} className={cls} rel="noopener">{children}</a>;
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href="#oferta"
        className={cls}
        onClick={(e) => {
          const onOffer = (e.currentTarget as HTMLElement).closest("#oferta");
          if (onOffer) {
            e.preventDefault();
            setNotice(true);
          }
        }}
      >
        {children}
      </a>
      {notice && (
        <p role="status" className="text-xs opacity-80">Link de compra será configurado.</p>
      )}
    </div>
  );
}

function SectionTitle({ eyebrow, children, light }: { eyebrow?: string; children: ReactNode; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-accent" : "text-water"}`}>{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{children}</h2>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest-foreground/10 bg-forest/85 text-forest-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" className="flex items-center gap-2 font-display text-lg font-bold">
          <Fish className="h-5 w-5 text-accent" aria-hidden /> Do Zero ao Primeiro Peixe
        </a>
        <nav className="hidden gap-7 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium opacity-80 transition hover:text-accent hover:opacity-100">{n.label}</a>
          ))}
        </nav>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" className="border-t border-forest-foreground/10 px-5 pb-5 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-forest-foreground/10 py-3 font-medium">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div id="topo" className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end text-forest-foreground">
        <img src={heroImg} alt="Pescador em silhueta lançando a linha em um rio ao amanhecer" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[25%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:pb-24">
          <div className="max-w-3xl animate-rise">
            <span className="inline-block rounded-full border border-accent/60 bg-forest/40 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-accent">GUIA DIGITAL PARA INICIANTES</span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Você já foi pescar cheio de expectativa e voltou para casa sem pegar absolutamente nada?
            </h1>
            <div className="mt-6 space-y-3 text-base opacity-90 md:text-lg">
              <p>Você prepara tudo, escolhe um lugar, coloca a isca no anzol e espera... Mas os peixes não aparecem.</p>
              <p>E a dúvida começa: será que estou usando a isca errada? Será que montei o equipamento corretamente? Será que estou pescando no lugar errado?</p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <CtaButton size="lg">Quero aprender a pescar agora</CtaButton>
              <p className="text-sm tracking-wide opacity-75">Acesso digital • Conteúdo para iniciantes • Aprenda no seu ritmo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest pb-20 text-forest-foreground">
        <div className="mx-auto max-w-3xl space-y-5 px-5 text-center text-lg">
          <p className="opacity-85">A verdade é que começar na pescaria pode ser muito mais complicado do que parece quando ninguém ensina o básico da maneira certa.</p>
          <p className="opacity-85">E não importa se você tem 25, 40 ou 65 anos. Nunca é tarde para aprender.</p>
          <p className="font-display text-2xl font-bold leading-snug md:text-3xl">
            Com o guia <span className="text-accent">Do Zero ao Primeiro Peixe</span>, você vai aprender o passo a passo para começar na pescaria, escolher seus equipamentos, identificar as melhores iscas e entender como pescar em rios, lagos e represas.
          </p>
          <p className="opacity-85">Tudo explicado de maneira simples, mesmo que você nunca tenha segurado uma vara de pesca.</p>
          <div className="pt-4"><CtaButton size="lg">Quero aprender a pescar agora</CtaButton></div>
          <p className="text-sm tracking-wide opacity-70">Acesso digital • Conteúdo para iniciantes • Aprenda no seu ritmo</p>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section id="guia" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="O guia">Imagine chegar ao local da pescaria sabendo exatamente o que fazer.</SectionTitle>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-lg text-muted-foreground">
            <p>Em vez de ficar perdido tentando descobrir qual equipamento utilizar, qual isca colocar ou como montar sua linha, você terá muito mais clareza sobre cada etapa.</p>
            <p>O <strong className="text-foreground">Do Zero ao Primeiro Peixe</strong> é um ebook desenvolvido para ensinar os fundamentos da pescaria de maneira prática e organizada.</p>
            <p>Você vai entender como funciona cada equipamento, como preparar seu conjunto de pesca, quais iscas considerar para diferentes situações e como identificar os melhores momentos e locais para tentar sua captura.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-8">
              <h3 className="text-2xl font-bold text-muted-foreground">Antes</h3>
              <ul className="mt-5 space-y-3">
                {ANTES.map((a) => (
                  <li key={a} className="flex gap-3 text-muted-foreground"><Minus className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{a}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-elegant">
              <h3 className="text-2xl font-bold">Depois de estudar o guia</h3>
              <ul className="mt-5 space-y-3">
                {DEPOIS.map((a) => (
                  <li key={a} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-14 text-center font-display text-2xl md:text-3xl">
            Não é sobre ter o equipamento mais caro.<br />
            <span className="text-water">É sobre saber utilizar corretamente aquilo que você tem.</span>
          </p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="conteudo" className="bg-water-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="O que você vai receber">Um verdadeiro ponto de partida para entrar no mundo da pescaria!</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Ao adquirir o Do Zero ao Primeiro Peixe, você terá acesso a um conteúdo organizado para acompanhar sua evolução desde os primeiros preparativos até o momento de tentar sua primeira captura.
          </p>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULOS.map((m, i) => (
              <li key={m.t} className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <span className="font-display text-4xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{m.t}</h3>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-water">Por que escolher o Do Zero ao Primeiro Peixe?</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">Porque você não precisa aprender tudo da maneira mais difícil.</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>Talvez você já tenha pesquisado vídeos, perguntado para conhecidos ou tentado aprender sozinho.</p>
              <p>O problema é que muitas vezes você encontra informações espalhadas, explicações complicadas e recomendações de equipamentos que nem sempre são necessários para quem está começando.</p>
              <p>E isso pode acabar gerando mais dúvidas do que respostas.</p>
              <p>O Do Zero ao Primeiro Peixe foi pensado justamente para facilitar esse começo.</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Veja o que torna esse guia uma excelente escolha:</p>
            <ul className="mt-5 space-y-4">
              {DIFERENCIAIS.map(([t, d]) => (
                <li key={t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <Anchor className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <p><strong>{t}:</strong> <span className="text-muted-foreground">{d}</span></p>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 border-l-4 border-accent pl-5">
              <p className="font-display text-xl font-bold">Você não precisa gastar uma fortuna para começar. Precisa primeiro entender o que está fazendo.</p>
              <p className="text-muted-foreground">E ter essas informações organizadas pode evitar compras equivocadas e horas de tentativa e erro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section id="bonus" className="bg-forest py-20 text-forest-foreground md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Bônus exclusivos" light>E tem mais! Você também recebe materiais complementares para facilitar sua experiência.</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-center opacity-80">Além do ebook principal, sua oferta pode incluir quatro materiais extras para ajudar na preparação das suas pescarias.</p>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {BONUS.map(([t, d], i) => (
              <article key={t} className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-7 transition hover:border-accent/60">
                <div className="flex items-center gap-3 text-accent">
                  <Gift className="h-5 w-5" aria-hidden />
                  <span className="text-xs font-bold tracking-[0.2em]">BÔNUS {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold">{t}</h3>
                <p className="mt-2 opacity-80">{d}</p>
                <p className="mt-4 text-xs uppercase tracking-wider opacity-60">Material complementar incluso</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center font-display text-2xl font-bold">Tudo isso para você não precisar organizar suas primeiras experiências sozinho!</p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Depoimentos">A melhor parte é ver seu conhecimento evoluindo a cada pescaria.</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">Cada pescador começa de algum lugar. E aprender o básico é um passo importante para desenvolver suas próprias experiências na água.</p>
          <p className="mt-10 text-center font-bold">Veja aqui o que leitores que utilizaram o guia têm a dizer:</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <figure key={d} className="rounded-2xl border-2 border-dashed border-border p-7">
                <Quote className="h-6 w-6 text-accent" aria-hidden />
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-water">[Inserir depoimento real {String(i + 1).padStart(2, "0")}]</p>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Os depoimentos reais de leitores serão adicionados aqui.</p>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Oferta">Quanto vale chegar à sua próxima pescaria sabendo o que está fazendo?</SectionTitle>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-lg text-muted-foreground">
            <p>Pense em tudo que você pode gastar tentando aprender sozinho.</p>
            <p>Uma vara inadequada, uma isca que não combina com a situação, acessórios desnecessários ou até mesmo uma montagem incorreta.</p>
            <p>Cada tentativa sem orientação pode trazer novas dúvidas e gastos evitáveis.</p>
            <p>Agora imagine ter um material organizado para consultar antes de comprar seus equipamentos e preparar sua próxima pescaria.</p>
            <p>É exatamente essa a proposta do Do Zero ao Primeiro Peixe.</p>
            <p className="font-bold text-foreground">E você não precisa gastar caro para começar a aprender!</p>
          </div>
          <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-forest p-8 text-center text-forest-foreground shadow-elegant md:p-12">
            <p className="font-display text-xl">Seu acesso completo por apenas:</p>
            <p className="mt-2 font-display text-6xl font-bold text-accent md:text-7xl">R$ 29,90</p>
            <p className="mt-5 opacity-85">Você recebe o ebook digital e os materiais complementares incluídos nesta oferta.</p>
            <p className="mt-3 text-sm opacity-75">Sem mensalidade. Sem precisar participar de aulas ao vivo. Estude no seu próprio ritmo e consulte o conteúdo quando precisar.</p>
            <div className="mt-8"><CtaButton size="lg">Quero garantir meu acesso por R$ 29,90</CtaButton></div>
            <p className="mt-5 font-semibold">Comece hoje a construir seu conhecimento na pescaria!</p>
            <p className="mt-3 text-xs opacity-60">Pagamento realizado pela plataforma de compra. Acesso digital conforme as instruções enviadas após a confirmação.</p>
          </div>

          {/* GARANTIA */}
          <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row">
            <ShieldCheck className="h-14 w-14 shrink-0 text-water" aria-hidden />
            <div className="space-y-3 text-muted-foreground">
              <h3 className="text-2xl font-bold text-foreground">Você pode conhecer o material com tranquilidade!</h3>
              <p>Sabemos que comprar algo pela internet pode gerar dúvidas.</p>
              <p>Por isso, sua compra conta com a proteção prevista na legislação brasileira.</p>
              <p>Você terá 7 dias para avaliar o produto e, caso decida desistir da compra dentro desse prazo, poderá solicitar o reembolso conforme o direito de arrependimento previsto no Código de Defesa do Consumidor.</p>
              <p>A ideia é que você tenha tranquilidade para conhecer o conteúdo e avaliar se ele atende às suas expectativas.</p>
              <p className="font-bold text-foreground">Você não precisa tomar essa decisão com medo de ficar sem opção.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle eyebrow="FAQ">Perguntas frequentes</SectionTitle>
          <Accordion type="single" collapsible className="mt-12">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline hover:text-water md:text-lg">
                  {i + 1}. {q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center"><CtaButton>Quero aprender a pescar agora</CtaButton></div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-forest py-14 text-forest-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-display text-xl font-bold"><Fish className="h-5 w-5 text-accent" aria-hidden />DO ZERO AO PRIMEIRO PEIXE</p>
              <p className="mt-2 text-accent">Seu primeiro passo para aprender a pescar!</p>
              <p className="mt-3 text-sm opacity-75">Um guia digital desenvolvido para quem deseja conhecer o mundo da pescaria e aprender os fundamentos necessários para começar.</p>
            </div>
            <div className="space-y-2 text-sm opacity-80">
              <p>Atendimento e suporte: [INSERIR E-MAIL OU CANAL DE ATENDIMENTO]</p>
              <p>Responsável pelo produto: [NOME DA EMPRESA OU RESPONSÁVEL]</p>
              <p>CNPJ/CPF: [INSERIR DADO DO FORNECEDOR]</p>
              <nav aria-label="Links legais" className="flex flex-wrap gap-x-4 gap-y-1 pt-3">
                {FOOTER_LINKS.map((l) =>
                  l.href ? (
                    <a key={l.label} href={l.href} className="underline-offset-4 hover:text-accent hover:underline">{l.label}</a>
                  ) : (
                    <span key={l.label} className="opacity-60" title="Link a configurar">[{l.label}]</span>
                  ),
                )}
              </nav>
            </div>
          </div>
          <div className="mt-10 border-t border-forest-foreground/15 pt-6 text-xs opacity-65">
            <p>© 2026 — Todos os direitos reservados.</p>
            <p className="mt-2">O conteúdo é educativo e não representa garantia de captura de peixes. Respeite a legislação de pesca, os períodos de defeso e as regras ambientais aplicáveis ao local onde você pretende pescar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
