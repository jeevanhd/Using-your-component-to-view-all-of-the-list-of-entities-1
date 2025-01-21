import BookCard from "./components/bookcard.jsx";
import books from "./components/books.json";
function App() {
  return (
    <div>
      <div className="grid grid-cols-3">
        {books?.map((book) => {
          return (
            <div
              key={book.id}
              style={{ margin: "auto" }}
            >
              <BookCard
                image={book.image}
                name={book.name}
                author={book.author}
                genre={book.genre}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
