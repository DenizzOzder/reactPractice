import React, { useState } from "react";

export default function useCounter() {
  // Custom Hookun State ve Fonksiyonları
  const [count, setCount] = useState(0);

  // Artırma ve Azaltma Fonksiyonları
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return { count, increase, decrease }; // Gerekli Değerleri Döndür
}
