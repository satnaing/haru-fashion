import Cookie from "js-cookie";
import { useEffect, useState } from "react";

const Product = ({ initialRememberValue }) => {
  const [rememberMe, setRememberMe] = useState<any>(() => initialRememberValue);

  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
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
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log(context.req.cookies.rememberMe);
  const remValue = context.req.cookies.rememberMe;
  return {
    props: {
      initialRememberValue: remValue || "",
    },
  };
};

// export function getServersideProps({ req, res }) {
//   // const cookies = parseCookies(req);
//   // console.log(req);
//   // console.log(res);

//   return {
//     props: {
//       initialRememberValue: req.Cookie,
//     },
//   };
// }

export default Product;
