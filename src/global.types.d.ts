interface NavData {
  name: string;
  path: string;
}

interface Content {
  id: number;
  text: string;
  img: string;
  blackQuote: string;
}

interface FrontMatter {
  date: string;
  excerpt: string;
  path: string;
  tags: Array<string>;
  title: string;
}
