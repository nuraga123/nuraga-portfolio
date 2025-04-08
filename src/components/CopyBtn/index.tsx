import Image from "next/image";
import styles from "./styles.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";

export const CopyBtn = ({ text }: { text: string }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    toast.success(`copy: ${text}`);

    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <button type="button" className={styles.copy_btn} onClick={handleCopy}>
      <Image
        src={`/img/copy${isCopy ? "-checked" : ""}.png`}
        alt={"copy"}
        width={35}
        height={35}
        priority={true}
      />
    </button>
  );
};
