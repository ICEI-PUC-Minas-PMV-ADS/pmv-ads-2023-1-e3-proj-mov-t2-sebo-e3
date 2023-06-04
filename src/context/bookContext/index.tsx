import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IBookContext, IProvider } from "./interface";
import { apiBase, postBooks } from "../../services/api";
import { IBooks } from "../../ui/interfaces";
import { AxiosResponse } from "axios";

// const DATA = [
//   {
//     userId: 2,
//     title: "O Pequeno Principe",
//     price: "8",
//     author: "Maquiavel",
//     editor: "Edipro",
//     pages: "176",
//     conservation: "Bom",
//     category: "Ficção Infantil Romance",
//     image: "",
//     id: 1,
//   },
//   {
//     userId: 1,
//     title: "Computation and its Limits",
//     price: "301,74",
//     author: "Paul Cockshott",
//     editor: "Oxford University Press, USA",
//     pages: "248",
//     conservation: "Bom",
//     category: "Tecnologia",
//     image: "https://m.media-amazon.com/images/I/51Rze4-9KrL._SX382_BO1,204,203,200_.jpg",
//     id: 2,
//   },
//   {
//     userId: 1,
//     title: "Os inovadores",
//     price: "37,80",
//     author: "Walter Isaacson",
//     editor: "Intrínseca",
//     pages: "592",
//     conservation: "Ótimo",
//     category: "Tecnologia",
//     image: "https://www.insper.edu.br/wp-content/uploads/2021/12/Os-inovadores.jpg",
//     id: 3,
//   },
//   {
//     userId: 2,
//     title: "Estruturas de Dados e Algoritmos com JavaScript",
//     price: "82,84",
//     author: "Loiane Groner",
//     editor: "Novatec Editora",
//     pages: "408",
//     conservation: "Bom",
//     category: "Tecnologia",
//     image: "https://m.media-amazon.com/images/I/41QGA9y1LZL._SX357_BO1,204,203,200_.jpg",
//     id: 4,
//   },
//   {
//     userId: 1,
//     title: "Entendendo Algoritmos",
//     price: "55,50",
//     author: "Aditya Bhargava",
//     editor: "Novatec Editora",
//     pages: "264",
//     conservation: "Ótimo",
//     category: "Tecnologia",
//     image: "https://m.media-amazon.com/images/I/517I6z9QK4L._SX357_BO1,204,203,200_.jpg",
//     id: 5,
//   },
//   {
//     userId: 2,
//     title: "Nada pode me ferir",
//     price: "38,90",
//     author: "David Goggins",
//     editor: "Editora Sextante",
//     pages: "320",
//     conservation: "Ótimo",
//     category: "Treinamento Esportes Lazer",
//     image: "https://m.media-amazon.com/images/I/41fV1HYPQDL._SX346_BO1,204,203,200_.jpg",
//     id: 6,
//   },
//   {
//     userId: 2,
//     title: "É Assim que Acaba",
//     price: "32,90",
//     author: "Colleen Hoover",
//     editor: "Galera",
//     pages: "368",
//     conservation: "Bom",
//     category: "Literatura Ficção",
//     image: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SX322_BO1,204,203,200_.jpg",
//     id: 7,
//   },
//   {
//     userId: 1,
//     title: "Café com Deus Pai",
//     price: "53,45",
//     author: "Júnior Rostirola",
//     editor: "Editora Vida",
//     pages: "424",
//     conservation: "Bom",
//     category: "Ficção Infantil Romance",
//     image: "https://m.media-amazon.com/images/I/31bTrkXN7ML._SY498_BO1,204,203,200_.jpg",
//     id: 8,
//   },
//   {
//     userId: 1,
//     title: "A Biblioteca da Meia-Noite",
//     price: "35,90",
//     author: "Matt Haig",
//     editor: "Bertrand Brasil",
//     pages: "308",
//     conservation: "Bom",
//     category: "Romance",
//     image: "https://m.media-amazon.com/images/I/51kAYMwbQIL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
//     id: 9,
//   },
//   {
//     userId: 2,
//     title: "Gente Ansiosa",
//     price: "28,08",
//     author: "Fredrik Backman",
//     editor: "Rocco",
//     pages: "368",
//     conservation: "Bom",
//     category: "Ficção Psicológicos",
//     image: "https://m.media-amazon.com/images/I/514JylVAyQL._SY498_BO1,204,203,200_.jpg",
//     id: 10,
//   },
//   {
//     userId: 0,
//     title: "O Principe",
//     price: "8",
//     author: "Maquiavel",
//     editor: "Edipro",
//     pages: "176",
//     conservation: "Bom",
//     category: "auto-ajuda",
//     image: "",
//     id: 11,
//   },
//   {
//     userId: 2,
//     title: "Essencialismo",
//     price: "43,90",
//     author: "Greg McKeown",
//     editor: "Editora Sextante",
//     pages: "272",
//     conservation: "Bom",
//     category: "auto-ajuda",
//     image: "https://m.media-amazon.com/images/I/41DloCOhHsL._SX331_BO1,204,203,200_.jpg",
//     id: 12,
//   },
//   {
//     userId: 1,
//     title: "Hábitos atômicos",
//     price: "41,99",
//     author: "James Clear",
//     editor: "Alta Life",
//     pages: "320",
//     conservation: "Bom",
//     category: "auto-ajuda",
//     image: "https://m.media-amazon.com/images/I/51DOkmV31rL._SX353_BO1,204,203,200_.jpg",
//     id: 13,
//   },
//   {
//     userId: 2,
//     title: "Mindset",
//     price: "42,70",
//     author: "Carol S. Dweck",
//     editor: "Objetiva",
//     pages: "176",
//     conservation: "Bom",
//     category: "auto-ajuda",
//     image: "https://m.media-amazon.com/images/I/41suUFbw-eL._SX346_BO1,204,203,200_.jpg",
//     id: 14,
//   },
//   {
//     userId: 0,
//     title: "O poder do hábito",
//     price: "50,70",
//     author: "Charles Duhigg",
//     editor: "Objetiva",
//     pages: "408",
//     conservation: "Bom",
//     category: "auto-ajuda",
//     image: "https://m.media-amazon.com/images/I/51Xby92J9KL._SX346_BO1,204,203,200_.jpg",
//     id: 15,
//   },
//   {
//     userId: 2,
//     title: "React Native",
//     price: "44,91",
//     author: "Bruna Escudelario",
//     editor: "Casa do Código",
//     pages: "231",
//     conservation: "Bom",
//     category: "Tecnologia",
//     image: "https://m.media-amazon.com/images/I/417Vg37EN8L.jpg",
//     id: 16,
//   },
// ];

const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookProvider: React.FC<IProvider> = ({ children }) => {
  const [bookList, setBookList] = useState<IBooks[]>();
  const [mostWanted, setMostWanted] = useState<IBooks[]>();
  const [tecnology, setTecnology] = useState<IBooks[]>();
  const [selfHelp, setSelfHelp] = useState<IBooks[]>();
  const [cart, setCart] = useState<any>([]);
  const [book, setBook] = useState<IBooks>();

  const getBooks = async () => {
    try {
      const response = await apiBase.get(`books`);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const updateBooksTecnology = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) => book.category === "Tecnologia"
      );
      setTecnology(list);
    }
  }, []);

  const updateBooksSelfHelp = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) => book.category === "auto-ajuda"
      );
      setSelfHelp(list);
    }
  }, []);

  const updateBooksMostWanted = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) =>
          book.category !== "Tecnologia" && book.category !== "auto-ajuda"
      );
      setMostWanted(list);
    }
  }, []);

  const updateBooks = useCallback(async () => {
    const response = await getBooks();

    if (response) {
      setBookList(response);

      return console.log("Livros Carregados");
    }

    return console.log("Livros Em Falta :(");
  }, []);

  const getData = useCallback(() => {
    if (!bookList) {
      updateBooks();
    }
    updateBooksMostWanted(bookList);
    updateBooksSelfHelp(bookList);
    updateBooksTecnology(bookList);
  }, [bookList, updateBooks]);

  useEffect(() => {
    getData();
  }, [getData]);

  const value = useMemo(
    () => ({
      bookList,
      setBookList,
      mostWanted,
      setMostWanted,
      tecnology,
      setTecnology,
      selfHelp,
      setSelfHelp,
      updateBooksMostWanted,
      updateBooksSelfHelp,
      updateBooksTecnology,
      book,
      setBook,
      cart,
      setCart,
    }),
    [
      bookList,
      setBookList,
      mostWanted,
      setMostWanted,
      tecnology,
      setTecnology,
      selfHelp,
      setSelfHelp,
      updateBooksMostWanted,
      updateBooksSelfHelp,
      updateBooksTecnology,
      book,
      setBook,
      cart,
      setCart,
    ]
  );

  return bookList ? (
    <BookContext.Provider value={value}>{children}</BookContext.Provider>
  ) : null;
};

export default BookContext;

export const useBookContext = () => useContext(BookContext);
