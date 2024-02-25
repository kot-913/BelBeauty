import { Category } from "../../App";
import CategoryItem from "../category-item/category-item";

import "./categories-component.styles.scss";

interface Props {
  categories: Category[];
}

const CategoriesComponent: React.FC<Props> = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default CategoriesComponent;
