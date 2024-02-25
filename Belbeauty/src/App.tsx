import CategoriesComponent from "./components/categories-component/categories-component";

export interface Category {
  id: number;
  title: string;
  imgURL: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "FACE CARE",
    imgURL: "src/assets/faceCategory.png",
  },
  {
    id: 2,
    title: "BODY CARE",
    imgURL: "src/assets/bodyCare.png",
  },
  {
    id: 3,
    title: "HEAR CARE",
    imgURL: "src/assets/hairCare.png",
  },
  {
    id: 4,
    title: "MEN CARE",
    imgURL: "src/assets/menCategory.png",
  },
  {
    id: 4,
    title: "SUN PROTECTION",
    imgURL: "src/assets/sunProtection.png",
  },
];

const App = () => {
  return <CategoriesComponent categories={categories} />;
};

export default App;
