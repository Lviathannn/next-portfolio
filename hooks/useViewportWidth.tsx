"use client";
import { useEffect, useState } from "react";

function useViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth) {
      setViewportWidth(window.innerWidth);
    }

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Gunakan array kosong agar useEffect hanya dijalankan sekali pada saat mount

  return viewportWidth;
}

export default useViewportWidth;
