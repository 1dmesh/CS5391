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

export interface iRoommateInfo {
  moveInDate: Date;
  gender: "male" | "female" | "nonbinary" | "other";
  rent: number;
}

export interface iPerson {
  id: string;
  name: string;
  email: string;
  type: "Faculty" | "Student";
  department: string;
  roommateInfo?: iRoommateInfo | undefined;
}

export const people: iPerson[] = [
  {
    id: "person0",
    name: "John Doe",
    email: "johnd@uni.edu",
    type: "Student",
    department: "Mathematics",
    roommateInfo: {
      moveInDate: new Date("2024-08-25"),
      gender: "male",
      rent: 912
    }
  },
  {
    id: "person2",
    name: "Jane Doe",
    email: "jane@uni.edu",
    type: "Student",
    department: "Art and Design",
    roommateInfo: {
      moveInDate: new Date("2024-08-19"),
      gender: "female",
      rent: 856
    }
  },
  {
    id: "person3",
    name: "Craig Boone",
    email: "trex@uni.edu",
    type: "Faculty",
    department: "Computer Science",
  },
  {
    id: "person4",
    name: "Sunny Smiles",
    email: "goodspringsgal@uni.edu",
    type: "Student",
    department: "Engineering",
  },
  {
    id: "person5",
    name: "Joe Cobb",
    email: "cobb@uni.edu",
    type: "Faculty",
    department: "Engineering",
  },
  {
    id: "person6",
    name: "Arcade Gannon",
    email: "gannon@uni.edu",
    type: "Student",
    department: "Physics",
    roommateInfo: {
      moveInDate: new Date("2024-08-10"),
      gender: "male",
      rent: 1219
    }
  },
  {
    id: "person7",
    name: "Lily Bowen",
    email: "bighorn@uni.edu",
    type: "Student",
    department: "Biology",
    roommateInfo: {
      moveInDate: new Date("2024-08-12"),
      gender: "female",
      rent: 789
    }
  },
  {
    id: "person9",
    name: "Valerie Frizzle",
    email: "frizz@uni.edu",
    type: "Faculty",
    department: "Education"
  },
]