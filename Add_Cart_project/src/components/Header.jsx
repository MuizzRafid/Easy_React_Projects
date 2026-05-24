import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { state } = useCart();

  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <header className="mx-auto my-2 flex items-center h-22 justify-between px-2 xl:w-5/6">
      <h2 className="text-2xl font-bold xl:text-3xl">MegaStore</h2>

      <div>
        {totalItems > 0 && (
          <span className="flex items-center justify-center absolute top-4 w-6 ml-2 h-6 p-1 text-[20px] rounded-2xl bg-red-600 text-white">
            {totalItems}
          </span>
        )}

        <i
          className="bx bx-cart cursor-pointer text-3xl transition-colors hover:text-amber-600 xl:text-4xl"
          onClick={() => navigate("/cart")}
        ></i>
      </div>
    </header>
  );
}
