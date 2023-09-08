import Cards from "../components/Cards";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image5 from "../assets/image-5.png";
import StoreCard from "../components/StoreCard";
import HorizontalScroll from "../components/scroll/HorizontalScroll";
import CallSection from "../components/CallSection";
import Cards2 from "../components/Cards2";
import Card3 from "../components/Card3";
import Crousel from "../components/Crousel";

function Landing() {
  return (
    <>
      <div className="bg-black">
        <div className="flex">
          <Cards
            desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
            image={Image1}
          />{" "}
          <Cards
            desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
            image={Image1}
          />{" "}
          <Cards
            desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
            image={Image1}
          />
        </div>

        <div className="py-20 mx-auto w-10/12 flex gap-9 flex-wrap justify-center">
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />{" "}
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />{" "}
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />{" "}
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />{" "}
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />{" "}
          <StoreCard
            image={Image2}
            heading={"Garuda Mall | Store 1"}
            tags={["EBO", "Second Floor"]}
            address={"Magrath Rd, Ashok Nagar, Banglore"}
          />
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <HorizontalScroll
          start={"0%"}
          end={"-70%"}
          styleClasses={"flex gap-5  mx-auto"}
        >
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
        "
          />
          <Cards2
            image={Image3}
            heading={"Strategic Location"}
            desc="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur iusto ab nihil tempore modi ipsam vitae quam aperiam omnis?
      "
          />
        </HorizontalScroll>
      </div>
      <CallSection />
      <HorizontalScroll start={"0%"} end={"-75%"} styleClasses={"flex"}>
        <Card3
          heading={"One"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quisquam?
"
          image={Image5}
        />{" "}
        <Card3
          heading={"Two"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quisquam?
"
          image={Image5}
        />{" "}
        <Card3
          heading={"Three"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quisquam?
"
          image={Image5}
        />{" "}
        <Card3
          heading={"Four"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quisquam?
"
          image={Image5}
        />
      </HorizontalScroll>
      <Crousel />
    </>
  );
}

export default Landing;
