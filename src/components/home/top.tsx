import Image from "next/image"
import topImage from "@/assets/top.png"
import backImage from "@/assets/back.png"

const Top = (): JSX.Element => {
  return (
    <section id="top" className="relative">
      <div className="absolute top-0 left-0 z-10">
        <Image src={topImage} alt="" />
      </div>
      <div className="">
        <Image src={backImage} alt="" />
      </div>
    </section>
  )
}

export default Top
