const books = [
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    review:
      "A timeless classic that explores human morality and the intricacies of racial prejudice.",
    tags: ["classic", "racial issues", "coming-of-age"],
    pages: 324,
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960,
    rating: 4.8,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8232008-L.jpg",
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    review:
      "A gripping and insightful look into a totalitarian regime and the dangers of excessive political control.",
    tags: ["dystopian", "political", "classic"],
    pages: 328,
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949,
    rating: 4.7,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    review:
      "A delightful exploration of manners, marriage, and society in early 19th-century England.",
    tags: ["romance", "classic", "society"],
    pages: 279,
    publisher: "T. Egerton",
    yearOfPublishing: 1813,
    rating: 4.6,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    review:
      "A tragic love story set in the opulent world of the Roaring Twenties.",
    tags: ["classic", "tragedy", "American dream"],
    pages: 180,
    publisher: "Charles Scribner's Sons",
    yearOfPublishing: 1925,
    rating: 4.5,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8231921-L.jpg",
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Adventure",
    review:
      "A profound and complex novel about the perils of obsession and revenge.",
    tags: ["adventure", "classic", "obsession"],
    pages: 635,
    publisher: "Harper & Brothers",
    yearOfPublishing: 1851,
    rating: 4.2,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228692-L.jpg",
    title: "War and Peace",
    author: "Leo Tolstoy",
    category: "Historical Fiction",
    review:
      "An epic novel that intertwines the lives of several families against the backdrop of Napoleonic Wars.",
    tags: ["historical", "epic", "classic"],
    pages: 1225,
    publisher: "The Russian Messenger",
    yearOfPublishing: 1869,
    rating: 4.9,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8231922-L.jpg",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    category: "Psychological Fiction",
    review:
      "A deep dive into the mind of a young man as he grapples with guilt and redemption.",
    tags: ["psychological", "classic", "redemption"],
    pages: 430,
    publisher: "The Russian Messenger",
    yearOfPublishing: 1866,
    rating: 4.7,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228693-L.jpg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    review: "A candid and introspective look at teenage angst and alienation.",
    tags: ["coming-of-age", "classic", "alienation"],
    pages: 277,
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
    rating: 4.3,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228694-L.jpg",
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Science Fiction",
    review:
      "A chilling portrayal of a dystopian future driven by technology and societal control.",
    tags: ["dystopian", "science fiction", "classic"],
    pages: 268,
    publisher: "Chatto & Windus",
    yearOfPublishing: 1932,
    rating: 4.4,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228695-L.jpg",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Gothic Fiction",
    review:
      "A captivating story of love, morality, and the struggle for independence.",
    tags: ["gothic", "romance", "classic"],
    pages: 500,
    publisher: "Smith, Elder & Co.",
    yearOfPublishing: 1847,
    rating: 4.6,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228696-L.jpg",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    category: "Gothic Fiction",
    review:
      "A dark and passionate tale of love, revenge, and the destructive power of obsession.",
    tags: ["gothic", "romance", "classic"],
    pages: 416,
    publisher: "Thomas Cautley Newby",
    yearOfPublishing: 1847,
    rating: 4.5,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228697-L.jpg",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    review:
      "An epic high-fantasy adventure that continues to capture the imaginations of readers worldwide.",
    tags: ["fantasy", "epic", "adventure"],
    pages: 1178,
    publisher: "George Allen & Unwin",
    yearOfPublishing: 1954,
    rating: 4.9,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228698-L.jpg",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    category: "Fiction",
    review: "A complex tale of love, infidelity, and the search for happiness.",
    tags: ["romance", "classic", "society"],
    pages: 864,
    publisher: "The Russian Messenger",
    yearOfPublishing: 1878,
    rating: 4.8,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228699-L.jpg",
    title: "Frankenstein",
    author: "Mary Shelley",
    category: "Science Fiction",
    review:
      "A groundbreaking work that explores themes of creation, ambition, and the consequences of playing god.",
    tags: ["science fiction", "classic", "horror"],
    pages: 280,
    publisher: "Lackington, Hughes, Harding, Mavor & Jones",
    yearOfPublishing: 1818,
    rating: 4.4,
  },
  {
    imageUrl: "https://covers.openlibrary.org/b/id/8228700-L.jpg",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    review:
      "A delightful tale of adventure and discovery in a richly imagined world.",
    tags: ["fantasy", "adventure", "classic"],
    pages: 310,
    publisher: "George Allen & Unwin",
    yearOfPublishing: 1937,
    rating: 4.8,
  },
];

export default books;
