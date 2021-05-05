import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import cookie from "cookie";

const Product = () => {
  const [rememberMe, setRememberMe] = useState<any>(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Cookie.set("rememberMe", rememberMe);
  }, [rememberMe]);

  return (
    <>
      remember me
      <input
        type="checkbox"
        value={rememberMe}
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
      <p>Post: {id}</p>
    </>
  );
};

export default Product;
