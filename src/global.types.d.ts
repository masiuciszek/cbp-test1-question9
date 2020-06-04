interface NavData {
  name: string;
  path: string;
}

interface Content {
  id: number;
  text: string;
}

interface FrontMatter {
  date: string;
  excerpt: string;
  path: string;
  tags: Array<string>;
  title: string;
}
