enum badgeColours {
  "JUNIOR" = "var(--orange-bg)",
  "SENIOR" = "var(--dark-bg)",
}

export interface IBadge<T extends keyof typeof badgeColours> {
  badge: T;
}
