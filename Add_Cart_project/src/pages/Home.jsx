import ProductCard from "../components/ProductCard";
import { Products } from "../data/Product";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 gap-5 w-full mx-auto my-24 xl:w-10/12">
      {Products.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
