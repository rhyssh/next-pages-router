import { fetcher } from "@/lib/swr/fetcher";
import { productType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: productType }) => {
  const { query } = useRouter();
  // console.log(query);

  //!client side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  // console.log(data);
  return (
    <div>
      {/* //!client side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* //!server-side & static-side */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   console.log(params.product);
//   //? fetch data
//   const res = await fetch(`http:localhost:3000/api/product/${params.product}`);
//   const response = await res.json();
//   console.log(response);
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: productType) => ({
    params: {
      product: product.id,
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
  // console.log(params.product);
  //? fetch data
  const res = await fetch(`http:localhost:3000/api/product/${params.product}`);
  const response = await res.json();
  console.log(response);
  return {
    props: {
      product: response.data,
    },
  };
}
