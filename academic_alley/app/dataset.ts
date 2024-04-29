export interface iTextbook {
  title: string;
  author: string;
  ISBN: number;
  price: number;
}

export interface iCartItem {
  name: string,
  price: number,
  qty: number
}

export const textbooks: iTextbook[] = [
  {
    title: "Computer Architecture: A Quantitative Approach",
    author: "John L. Hennessy, David A. Patterson",
    ISBN: 9780128119068,
    price: 109.99,
  },
  {
    title: "Software Engineering: A Practictioner's Approach",
    author: "Roger S. Pressman",
    ISBN: 9781259872976,
    price: 259.99,
  },
  {
    title: "Head First Java, 3rd Edition",
    author: "Kathy Sierra, Bert Bates, Trisha Gee",
    ISBN: 9781491910771,
    price: 119.99,
  },
  {
    title:
      "Elementary Differential Equations and Boundary Value Problems, 11th Edition",
    author: "William E. Boyce, Richard C. Diprima, Douglas B. Meade",
    ISBN: 9780470317976,
    price: 159.99,
  },
];
