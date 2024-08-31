import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";


const ProductPage = () => {
  // const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);
  const { push } = useRouter();
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  const { data, error, isLoading } = useSWR("api/products", fetcher);

  
  // !ini menggunakan use ueffect
  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
