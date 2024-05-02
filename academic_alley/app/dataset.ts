export interface iTextbook {
  title: string;
  author: string;
  ISBN: number;
  price: number;
}

export interface iCartItem {
  name: string;
  price: number;
  qty: number;
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
  {
    title: "Introduction to Psychology",
    author: "James W. Kalat",
    ISBN: 9781337294722,
    price: 75.99
  },
  {
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    ISBN: 9781305260381,
    price: 89.95
  },
  {
    title: "Biology: Concepts and Connections",
    author: "Neil A. Campbell, Jane B. Reece, Martha R. Taylor, Eric J. Simon, Jean L. Dickey, Kelly A. Hogan",
    ISBN: 9780135594307,
    price: 123.99
  },
  {
    title: "Chemistry: The Central Science",
    author: "Theodore L. Brown, H. Eugene LeMay, Bruce E. Bursten, Catherine Murphy, Patrick Woodward, Matthew E. Stoltzfus",
    ISBN: 9780134988801,
    price: 99.99
  },
  {
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    ISBN: 9781305271080,
    price: 109.99
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose, Keith W. Ross",
    ISBN: 9780133594140,
    price: 79.95
  }
];
