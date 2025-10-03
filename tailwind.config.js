/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/pages/**/*.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {"light": {
    "primary": "#E74C3C",    // Vermelho Vibrante (Ação/Destaque - Molho de tomate/Calor)
    "secondary": "#F1C40F",  // Amarelo Ouro (Detalhes - Queijo derretido/Massa dourada)
    "accent": "#2ECC71",     // Verde Azeitona (Toque de Frescor - Manjericão/Azeitonas)
    "neutral": "#5A4436",    // Marrom Escuro (Texto/Solidez - Borda/Fundo rústico)
    "base-100": "#ECF0F1",   // Bege Claro (Fundo Principal - Leveza/Clareza)
    "base-200": "#FAFAFA",   // Fundo Secundário (variação leve)
    "base-300": "#F5F5F5",   // Borda/Separador (variação média)
    "info": "#3B82F6",       // Padrão (Informação)
    "success": "#10B981",    // Padrão (Sucesso/Confirmação)
    "warning": "#F59E0B",    // Padrão (Atenção)
    "error": "#EF4444"       // Padrão (Erro)
  }},
  {
    "dark": {
      "primary": "#E74C3C",    // Vermelho Vibrante (Mantido como Destaque/Ação)
      "secondary": "#F1C40F",  // Amarelo Ouro (Mantido para Ícones/Detalhes)
      "accent": "#2ECC71",     // Verde Azeitona (Mantido para Frescor/Notificações)
      "neutral": "#ECF0F1",    // Bege Claro Invertido (Para Textos Principais)
      "base-100": "#1D232A",   // Fundo Principal Escuro (Quase Preto, para contraste suave)
      "base-200": "#2A323C",   // Fundo de Componentes/Cards (Um pouco mais claro que o base-100)
      "base-300": "#4B5563",   // Bordas/Separadores (Tom de cinza escuro)
      "info": "#3B82F6",       // Padrão (Informação)
      "success": "#10B981",    // Padrão (Sucesso/Confirmação)
      "warning": "#F59E0B",    // Padrão (Atenção)
      "error": "#EF4444"       // Padrão (Erro)
    }
  },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
