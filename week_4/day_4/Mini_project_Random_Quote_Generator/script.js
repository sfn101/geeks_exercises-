document.addEventListener("DOMContentLoaded", () => {
  let quotes = [
    {
      id: 0,
      author: "Albert Einstein",
      quote: "Strive not to be a success, but rather to be of value.",
      likes: 0,
    },
    {
      id: 1,
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
      likes: 0,
    },
    {
      id: 2,
      author: "Nelson Mandela",
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      likes: 0,
    },
    {
      id: 3,
      author: "Steve Jobs",
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      likes: 0,
    },
    {
      id: 4,
      author: "Oscar Wilde",
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      likes: 0,
    },
    {
      id: 5,
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
      likes: 0,
    },
    {
      id: 6,
      author: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      likes: 0,
    },
    {
      id: 7,
      author: "Maya Angelou",
      quote:
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      likes: 0,
    },
    {
      id: 8,
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
      likes: 0,
    },
    {
      id: 9,
      author: "Leonardo da Vinci",
      quote: "Simplicity is the ultimate sophistication.",
      likes: 0,
    },
    {
      id: 10,
      author: "Confucius",
      quote: "It does not matter how slowly you go as long as you do not stop.",
      likes: 0,
    },
    {
      id: 11,
      author: "Eleanor Roosevelt",
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      likes: 0,
    },
    {
      id: 12,
      author: "Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world.",
      likes: 0,
    },
    {
      id: 13,
      author: "Franklin D. Roosevelt",
      quote: "The only thing we have to fear is fear itself.",
      likes: 0,
    },
    {
      id: 14,
      author: "Mark Twain",
      quote: "If you tell the truth, you don't have to remember anything.",
      likes: 0,
    },
    {
      id: 15,
      author: "Isaac Newton",
      quote:
        "If I have seen further it is by standing on the shoulders of Giants.",
      likes: 0,
    },
    {
      id: 16,
      author: "Socrates",
      quote: "An unexamined life is not worth living.",
      likes: 0,
    },
    {
      id: 17,
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
      likes: 0,
    },
    {
      id: 18,
      author: "Helen Keller",
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      likes: 0,
    },
    {
      id: 19,
      author: "George Bernard Shaw",
      quote:
        "Life isn't about finding yourself. Life is about creating yourself.",
      likes: 0,
    },
    {
      id: 20,
      author: "Winston Churchill",
      quote: "If you're going through hell, keep going.",
      likes: 0,
    },
    {
      id: 21,
      author: "Maya Angelou",
      quote: "Try to be a rainbow in someone's cloud.",
      likes: 0,
    },
    {
      id: 22,
      author: "Mark Twain",
      quote:
        "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      likes: 0,
    },
    {
      id: 23,
      author: "Eleanor Roosevelt",
      quote: "No one can make you feel inferior without your consent.",
      likes: 0,
    },
    {
      id: 24,
      author: "Oscar Wilde",
      quote:
        "I am so clever that sometimes I don't understand a single word of what I am saying.",
      likes: 0,
    },
  ];

  let lastQuoteId = null;
  let currentFilteredQuotes = [];
  let currentFilteredIndex = 0;

  const quoteContainer = document.getElementById("quote-container");
  const quoteTextElem = document.getElementById("quote-text");
  const quoteAuthorElem = document.getElementById("quote-author");
  const likeCountElem = document.getElementById("like-count");
  const wordCountElem = document.getElementById("word-count");
  const charCountElem = document.getElementById("char-count");

  const generateBtn = document.getElementById("generate-btn");
  const likeBtn = document.getElementById("like-btn");
  const wordsBtn = document.getElementById("words-btn");
  const charsBtn = document.getElementById("chars-btn");

  const addQuoteForm = document.getElementById("add-quote-form");
  const newQuoteInput = document.getElementById("new-quote-input");
  const newAuthorInput = document.getElementById("new-author-input");

  const filterForm = document.getElementById("filter-form");
  const filterAuthorInput = document.getElementById("filter-author-input");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const displayQuote = (quote) => {
    if (!quote) {
      quoteTextElem.textContent = "No quote found.";
      quoteAuthorElem.textContent = "— System";
      quoteContainer.dataset.quoteId = "";
      likeCountElem.textContent = "";
      return;
    }
    quoteTextElem.textContent = quote.quote;
    quoteAuthorElem.textContent = `— ${quote.author}`;
    quoteContainer.dataset.quoteId = quote.id;
    likeCountElem.textContent = quote.likes;
    clearCounts();
  };

  const clearCounts = () => {
    wordCountElem.textContent = "";
    charCountElem.textContent = "";
  };

  const updateNavButtons = () => {
    const disabled = currentFilteredQuotes.length <= 1;
    prevBtn.disabled = disabled;
    nextBtn.disabled = disabled;
  };

  const handleGenerateQuote = () => {
    if (quotes.length === 0) {
      displayQuote(null);
      return;
    }

    let newQuote;
    if (quotes.length === 1) {
      newQuote = quotes[0];
    } else {
      do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        newQuote = quotes[randomIndex];
      } while (newQuote.id === lastQuoteId);
    }

    lastQuoteId = newQuote.id;
    currentFilteredQuotes = [];
    filterAuthorInput.value = "";
    updateNavButtons();
    displayQuote(newQuote);
  };

  const handleLike = () => {
    const currentId = parseInt(quoteContainer.dataset.quoteId, 10);
    if (isNaN(currentId)) return;

    const quote = quotes.find((q) => q.id === currentId);
    if (quote) {
      quote.likes++;
      likeCountElem.textContent = quote.likes;
    }
  };

  const handleWordCount = () => {
    const currentId = parseInt(quoteContainer.dataset.quoteId, 10);
    if (isNaN(currentId)) return;

    const quote = quotes.find((q) => q.id === currentId);
    if (quote) {
      const wordCount = quote.quote.trim().split(/\s+/).length;
      wordCountElem.textContent = wordCount;
    }
  };

  const handleCharCount = () => {
    const currentId = parseInt(quoteContainer.dataset.quoteId, 10);
    if (isNaN(currentId)) return;

    const quote = quotes.find((q) => q.id === currentId);
    if (quote) {
      const charCount = quote.quote.replace(/\s/g, "").length;
      charCountElem.textContent = charCount;
    }
  };

  const handleAddQuote = (e) => {
    e.preventDefault();
    const quote = newQuoteInput.value.trim();
    const author = newAuthorInput.value.trim();

    if (quote && author) {
      const newId =
        quotes.length > 0 ? Math.max(...quotes.map((q) => q.id)) + 1 : 0;
      const newQuote = { id: newId, author, quote, likes: 0 };
      quotes.push(newQuote);
      newQuoteInput.value = "";
      newAuthorInput.value = "";
      displayQuote(newQuote);
    } else {
      alert("Please fill in both the quote and author fields.");
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const authorName = filterAuthorInput.value.trim().toLowerCase();
    if (!authorName) {
      currentFilteredQuotes = [];
      updateNavButtons();
      return;
    }

    currentFilteredQuotes = quotes.filter((q) =>
      q.author.toLowerCase().includes(authorName)
    );

    if (currentFilteredQuotes.length > 0) {
      currentFilteredIndex = 0;
      displayQuote(currentFilteredQuotes[currentFilteredIndex]);
    } else {
      displayQuote({
        quote: `No quotes found for "${filterAuthorInput.value}".`,
        author: "System",
        likes: "N/A",
      });
      quoteContainer.dataset.quoteId = "";
    }
    updateNavButtons();
  };

  const handleNavigation = (direction) => {
    if (currentFilteredQuotes.length <= 1) return;

    if (direction === "next") {
      currentFilteredIndex =
        (currentFilteredIndex + 1) % currentFilteredQuotes.length;
    } else if (direction === "prev") {
      currentFilteredIndex =
        (currentFilteredIndex - 1 + currentFilteredQuotes.length) %
        currentFilteredQuotes.length;
    }

    displayQuote(currentFilteredQuotes[currentFilteredIndex]);
  };

  generateBtn.addEventListener("click", handleGenerateQuote);
  likeBtn.addEventListener("click", handleLike);
  wordsBtn.addEventListener("click", handleWordCount);
  charsBtn.addEventListener("click", handleCharCount);
  addQuoteForm.addEventListener("submit", handleAddQuote);
  filterForm.addEventListener("submit", handleFilter);
  prevBtn.addEventListener("click", () => handleNavigation("prev"));
  nextBtn.addEventListener("click", () => handleNavigation("next"));

  handleGenerateQuote();
});
