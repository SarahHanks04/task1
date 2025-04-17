import { NavLink } from "@/types/navLink";

export async function fetchSearchablePages(): Promise<NavLink[]> {
  const res = await fetch('/api/pages');
  if (!res.ok) throw new Error('Failed to fetch searchable pages');
  return res.json();
}