import { productType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

const ProductView = ({ products }: { products: productType[] }) => {
  return (
    <div className="w-full px-[5%]">
      <h1 className="text-center text-[32px] font-bold">Product</h1>
      <div className="flex">
        {products.length > 0 ? (
          <>
            {products.map((product: productType) => (
              <Link href={`/product/${product.id}`} className="w-[25%] p-3" key={product.id}>
                <div className="">
                  {/* <img src={product.image} alt={product.name} /> */}
                  <Image src={product.image} alt={product.name} width={500} height={500} />
                </div>
                <h4 className="text-lg font-bold mt-2">{product.name}</h4>
                <p className="text-gray-500">{product.category}</p>
                <p className="font-bold mt-3">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div className="w-[25%] p-3 animate-pulse">
            <div className="w-full aspect-square bg-gray-300" />
            <div className="w-full h-[20px] mt-[5px] bg-gray-300" />
            <div className="w-full h-[16px] bg-gray-300 mt-[5px]" />
            <div className="w-full h-[16px] mt-[10px] bg-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
