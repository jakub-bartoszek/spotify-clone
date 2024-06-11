"use client";

import { useEffect, useState } from "react";
import AuthModal from "@/components/modals/auth-modal";
import UploadModal from "@/components/modals/upload-modal";
import SubscribeModal from "../modals/subscribe-modal";
import { ProductWithPrice } from "@/types/types";

interface ModalProviderProps {
 products: ProductWithPrice[];
}

const ModalProvider = ({ products }: ModalProviderProps) => {
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
  setIsMounted(true);
 }, []);

 if (!isMounted) {
  return null;
 }

 return (
  <>
   <AuthModal />
   <UploadModal />
   <SubscribeModal products={products} />
  </>
 );
};

export default ModalProvider;
