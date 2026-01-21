import React, { useState } from "react";

export default function useCopyPaste() {
  const [copied, setCopy] = useState("");

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopy(text);
    console.log("Copied text: ", text);
  };
  return [copied, copy];
}
