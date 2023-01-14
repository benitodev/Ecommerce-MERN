import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
const FavoriteButton = ({ addToWishList }: { addToWishList: () => void }) => {
  return (
    <IconButton onClick={addToWishList}>
      <FavoriteBorderIcon />
    </IconButton>
  );
};
export default FavoriteButton;
