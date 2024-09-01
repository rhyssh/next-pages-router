// import ProductView from "@/views/Product";
// import { productType } from "@/types/product.type";

// const ProductPage = (props: { products: productType[] }) => {
//   const { products } = props;
//   return (
//     <div>
//       <ProductView products={products} />
//     </div>
//   );
// };

const ProductStatic = () => {
  return (
    <div>
      <p>product static page</p>
    </div>
  );
};

export default ProductStatic;

// export default ProductPage;

// export async function getStaticProps() {
//   //? fetch data
//   const res = await fetch("http:localhost:3000/api/products");
//   const response = await res.json();

//   console.log(response);

//   return {
//     props: {
//       products: response.data,
//     },
//   };
// }
