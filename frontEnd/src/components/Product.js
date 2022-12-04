
//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/Actions/CartAction";

export default function Product({ el }) {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://star-media.com.au/wp-content/uploads/2020/03/6CC8DBB8-1622-4418-8C2C-E8B4A7B49A90.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Label:{el.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:{el.priceTtc}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {el.inStock > 0 ? (
              <p className="mb-1 text-danger">In Stock: {el.inStock}</p>
            ) : (
              <p className="mb-1 text-danger">Out Stock</p>
            )}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {el.isGift == true ? (
              <p className="mb-1 text-danger">
                <CardGiftcardIcon /> Gift
              </p>
            ) : (
              <p>
                <CardGiftcardIcon /> Not Gift
              </p>
            )}
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          onClick={() => dispatch(addProductToCart({ product: el._id }))}
        >
          Add to Cart
          <ShoppingCartIcon />
        </Button>
      </Card>
    </div>
  );
}
