interface PageInfo {
  title: string;
}

export function PageInfo(data: PageInfo): void {
  data.title = data.title || 'Default title';
  document.title = data.title;
}