export interface Solution {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  hoverIconColor: string;
  linkHoverColor: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NewsItem {
  type: string;
  typeColor: string;
  date: string;
  title: string;
  description: string;
  image: string;
  cta: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  categoryColor: string;
  categoryTextColor: string;
  link: string;
}
