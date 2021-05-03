import CartProvider from "./CartProvider";
import TextProvider from "./TestContext";

const MainProvider = ({ children }) => (
  <MainProvider>
    <TextProvider>
      <CartProvider>{children}</CartProvider>
    </TextProvider>
  </MainProvider>
);

export default MainProvider;
