import { productType } from "@/types/product.type";

const DetailProduct = ({ product }: { product: productType }) => {
  return (
    <>
      <h1 className="text-center text-2xl mt-4 font-semibold">Detail Product</h1>
      <div className="m-auto w-[25%] p-3">
        <div className="">
          <img src={product.image && product.image} alt={product.name} />
        </div>
        <h4 className="text-lg font-bold mt-2">{product.name}</h4>
        <p className="text-gray-500">{product.category}</p>
        <p className="font-bold mt-3">
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProduct;
