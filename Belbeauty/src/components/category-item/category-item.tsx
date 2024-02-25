import { Category } from "../../App";
import "./category-item.styles.scss";

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imgURL})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
