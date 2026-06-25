import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DecrementItems, IncrementItems } from "../store/CartSlicer";

function getItemPrice(item) {
  return (item?.defaultPrice || item?.price || 0) / 100;
}

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const itemTotal = items.reduce(
    (total, item) => total + getItemPrice(item) * item.quantity,
    0
  );
  const deliveryFee = items.length ? 38 : 0;
  const platformFee = items.length ? 6 : 0;
  const grandTotal = itemTotal + deliveryFee + platformFee;

  if (!items.length) {
    return (
      <main className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link to="/" className="text-3xl font-extrabold text-[#ff5200]">
              Swiggy
            </Link>
            <p className="text-xl font-semibold text-gray-700">Checkout</p>
          </div>
        </div>

        <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-800">
            Your cart is empty
          </h1>
          <p className="mb-8 text-xl text-gray-500">
            Add something tasty from a restaurant to see it here.
          </p>
          <Link
            to="/restaurant"
            className="rounded bg-[#ff5200] px-8 py-4 text-xl font-bold text-white shadow"
          >
            Browse Restaurants
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-3xl font-extrabold text-[#ff5200]">
            Swiggy
          </Link>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-800">Secure Checkout</p>
            <p className="text-gray-500">{totalItems} items in your cart</p>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <div className="bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4 border-b pb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#ff5200]">
                  Delivery order
                </p>
                <h1 className="mt-1 text-3xl font-bold text-gray-900">
                  Review your food
                </h1>
              </div>
              <Link
                to="/restaurant"
                className="rounded border border-[#ff5200] px-5 py-2 font-bold text-[#ff5200]"
              >
                Add more
              </Link>
            </div>

            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-5 border-b pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-gray-500">
                      Rs. {getItemPrice(item).toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-5">
                    <div className="flex items-center overflow-hidden rounded border border-green-600 bg-white font-bold text-green-700">
                      <button
                        onClick={() => dispatch(DecrementItems(item))}
                        className="px-4 py-2 text-xl"
                      >
                        -
                      </button>
                      <span className="min-w-10 px-2 text-center text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(IncrementItems(item))}
                        className="px-4 py-2 text-xl"
                      >
                        +
                      </button>
                    </div>
                    <p className="w-24 text-right text-lg font-bold text-gray-800">
                      Rs. {(getItemPrice(item) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <p className="mb-2 text-2xl font-bold text-gray-900">
              Delivery details
            </p>
            <p className="text-gray-600">
              Delivering to Delhi, India. You can connect this area with a real
              address form later.
            </p>
          </div>
        </div>

        <aside className="h-fit bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Bill details
          </h2>

          <div className="space-y-3 border-b pb-5 text-lg text-gray-600">
            <div className="flex justify-between">
              <span>Item total</span>
              <span>Rs. {itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>Rs. {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform fee</span>
              <span>Rs. {platformFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 flex justify-between text-2xl font-extrabold text-gray-900">
            <span>To Pay</span>
            <span>Rs. {grandTotal.toFixed(2)}</span>
          </div>

          <button className="mt-6 w-full bg-[#ff5200] px-5 py-4 text-xl font-bold text-white shadow">
            Proceed to Pay
          </button>
        </aside>
      </section>
    </main>
  );
}
