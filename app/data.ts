// GitHub profilinden (github.com/mehmetkalayci) derlenen CV verisi.

export const profile = {
  name: "Mehmet Kalaycı",
  title: "Software Developer · Full-Stack",
  location: "Türkiye",
  avatar: "/avatar.png",
  hireable: true,
  about:
    "Ölçeklenebilir, güvenli, güvenilir ve bakımı kolay sistemler geliştirme konusunda deneyimli bir yazılım geliştiricisiyim. Full-stack geliştirmeye odaklanıyor, her zaman kalite ve sadeliği hedefliyorum.",
  links: [
    { label: "GitHub", href: "https://github.com/mehmetkalayci", text: "github.com/mehmetkalayci" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mmt94", text: "linkedin.com/in/mmt94" },
  ],
  stats: [
    { value: "82", label: "Public repo" },
    { value: "28", label: "Takipçi" },
    { value: "2014", label: "GitHub'da" },
  ],
};

export const skills = [
  { group: "Diller & Framework'ler", items: ["PHP", "Laravel", "Node.js", "TypeScript", "JavaScript", "Express.js", "C# / .NET", "Dart"] },
  { group: "Frontend & Mobil", items: ["React", "Next.js", "Vue", "Tailwind CSS", "Redux", "Flutter", "Three.js"] },
  { group: "Veritabanı & DevOps", items: ["MySQL", "Docker", "GitHub Actions", "Jenkins", "CI/CD", "RabbitMQ"] },
  { group: "Diğer", items: ["JWT", "OAuth2", "Cedar", "GraphQL", "Chrome Extensions", "Makine Öğrenmesi"] },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href: string;
  demo?: string;
  stars?: number;
};

export const projects: Project[] = [
  {
    name: "LEACH",
    description: "Kablosuz Sensör Ağlarında (WSN) enerji verimli protokollerin simülasyonu.",
    tech: ["MATLAB"],
    href: "https://github.com/mehmetkalayci/LEACH",
    stars: 10,
  },
  {
    name: "chatpdf",
    description: "PDF dokümanlarla sohbet uygulaması — OpenAI, Pinecone ve Stripe entegrasyonu.",
    tech: ["TypeScript", "Next.js", "OpenAI"],
    href: "https://github.com/mehmetkalayci/chatpdf",
    demo: "https://app-chatpdf.vercel.app",
  },
  {
    name: "lottielab-export",
    description: "LottieLab animasyonlarını .lottie veya .json olarak dışa aktaran hafif bir Chrome eklentisi.",
    tech: ["JavaScript", "Chrome Extension"],
    href: "https://github.com/mehmetkalayci/lottielab-export",
  },
  {
    name: "chatgpt2jira",
    description: "ChatGPT üzerinden Jira'ya görev ekleyen Chrome eklentisi.",
    tech: ["JavaScript", "Chrome Extension"],
    href: "https://github.com/mehmetkalayci/chatgpt2jira",
  },
  {
    name: "Car",
    description: ".NET ile geliştirilmiş mikroservis mimarili uygulama.",
    tech: ["C#", ".NET", "Microservices"],
    href: "https://github.com/mehmetkalayci/Car",
  },
  {
    name: "BitkiTanimaDeploy",
    description: "Keras ile eğitilmiş derin öğrenme modeliyle bitki tanıma.",
    tech: ["Keras", "Python", "HTML"],
    href: "https://github.com/mehmetkalayci/BitkiTanimaDeploy",
    demo: "https://plant-classification.vercel.app",
  },
  {
    name: "menu_app",
    description: "Restoran menü mobil uygulaması.",
    tech: ["Dart", "Flutter"],
    href: "https://github.com/mehmetkalayci/menu_app",
    stars: 1,
  },
  {
    name: "vue-embeddable-widget",
    description: "Herhangi bir siteye gömülebilen Vue tabanlı widget.",
    tech: ["Vue", "JavaScript"],
    href: "https://github.com/mehmetkalayci/vue-embeddable-widget",
    demo: "https://vue-embeddable-widget.vercel.app",
  },
  {
    name: "YSA",
    description: "Yapay sinir ağları ile hava durumu tahmini.",
    tech: ["MATLAB", "Neural Networks"],
    href: "https://github.com/mehmetkalayci/YSA",
  },
  {
    name: "HuffmanAlgorithmHW",
    description: "Huffman kodlaması ile dosya sıkıştırma.",
    tech: ["C#", "Algoritmalar"],
    href: "https://github.com/mehmetkalayci/HuffmanAlgorithmHW",
  },
];
