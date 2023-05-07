import React from "react";
import Shop from './components/Shop'
import { ContextProvider } from './components/CartContext';
export default function App() {
  return (
 <>
 <ContextProvider>
<Shop/>
</ContextProvider>
 </>
  );
}
