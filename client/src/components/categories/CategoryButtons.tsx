import { categories } from '../../pages/Home/data';
import BackgroundTransparentButton from '../buttons/BackgroundTransparentButton';
import Button from '../buttons/Button';

const CategoryButtons = () => {
  return <BackgroundTransparentButton content={categories} />;
};
export default CategoryButtons;
