import Image from "next/image"
import styles from "./../styles/Header.module.css"
import LoginNavBar from "./LoginNavBar"

export default function Header() {
  return <div className={styles.headerContainer + " position-relative"}>
    <LoginNavBar />
    <Image
      layout="responsive"
      alt=""
      objectFit="cover"
      src="/img/DO-es-20220207-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      className="opacity-50"
      height={40}
      width="100%"
    />
  </div>
}
