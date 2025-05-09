export interface IPag {
  total_items: number;
  total_pages: number;
  current_page: number;
  next: string | null;
  previous: number | null;
}
