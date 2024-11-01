export type Item = {
  name: string;
  slug: string;
}

export const navList: { name: string, items: Item[] }[] = [
  {
    name: '家具製作相關',
    items: [
      {
        name: "家具製作列表",
        slug: "manufacture-list",
      }
    ]
  }
]
