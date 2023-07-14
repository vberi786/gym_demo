import React from "react";
import { useState } from "react";

const About = () => {
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    if (index === 0) {
      setIndex(index + 1);
    }else if(index === 2){
      setIndex(0);
    } else if (index > 0 ) {
      setIndex(index+1)
    }
  }, 2000);
  console.log('index :>> ', index);
  const [arr, setArr] = useState([
    {
      id: 1,
      name: "Joe Doeg",
      position: "UI/UX",
      description:
        "FVDNVSKBAVKWEBDSCVQABVEIDSAHBVSIADBIbhIIBIBIHBbhifbdchivdisacbcdivvbk",
    },
    {
      id: 2,
      name: "Hans Surjit",
      position: "Developer",
      description: "ierddvbihebdeihbvdhivedbinedibhbeedsnbak",
    },
    {
      id: 3,
      name: "Jay Mehan",
      position: "Doctor",
      description: "dcsddvbihebdeihbvdhivedbinedibhbeedsnbak",
    },
  ]);
  return (
    <div>
      <div className="bg-black">
        <div className="lg:flex justify-around ">
          <div className="bg-[#111528] lg:w-[20%] h-[25rem] border-[4px] border-green-700 rounded-2xl">
            <div className="md:flex items-center">
            <h1 className="lg:text-[70px] text-[64px] text-justify lg:my-24 flex justify-center p-2 text-green-600 ">
              About us 
            </h1>

            </div>
           
          </div>
          <div className="bg-[#090c16] lg:w-[50%] lg:my-24 m-2 p-2 text-justify border-[2px] border-green-700 rounded-xl font-semibold">
            <p className="text-white ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate illum consectetur, modi eius quos commodi fuga rerum
              debitis, eum corrupti aliquam aperiam non obcaecati animi
              temporibus deserunt ex nisi ullam est culpa accusantium mollitia
              necessitatibus labore. Sed error magnam nesciunt aperiam unde et
              nulla similique quos velit at accusantium rerum deleniti officia
              non maiores laboriosam fuga, voluptatem ullam asperiores quibusdam
              dolorum earum illum modi minima! Exercitationem maiores aperiam,
              enim id atque officiis adipisci quaerat odio dolorum
              necessitatibus libero reprehenderit! Quibusdam illum eaque amet
              perferendis optio cumque rem obcaecati totam vitae hic
              voluptatibus quas nisi debitis non ex odit, dolor pariatur unde,
              in sed praesentium! Veniam repellendus cumque dolores ducimus,
              neque id nesciunt ipsam distinctio inventore fuga quam incidunt
              deleniti voluptatum eius velit eaque accusamus eum, quas ad
              voluptas obcaecati numquam tenetur quidem odit. Dicta debitis
              doloremque ratione quisquam atque laborum inventore vel veniam
              exercitationem. Consequatur, quos quasi voluptatum assumenda iure
              dolorem, magnam dolor odio ipsum nostrum odit labore at quae
              adipisci exercitationem dicta natus enim laudantium molestiae
              expedita aliquam delectus porro? Fuga facilis sit incidunt unde
              odit deleniti dicta ipsa amet dolorem commodi, repellat quo
              minima, nemo ex quae inventore aspernatur perferendis quas
              praesentium. Odio temporibus distinctio placeat aperiam vero.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-center ">
          <div className="border-[2px] border-green-700 lg:w-[70%] rounded-2xl">
            <div className="lg:flex justify-around ">
              <div className="lg:w-[30%] m-2 p-2 ">
                <p className="text-white text-justify font-semibold  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum. Incidunt recusandae eaque distinctio esse doloremque debitis neque iste, numquam voluptatem ullam ipsum ad hic quidem suscipit facere mollitia? Quod officiis praesentium blanditiis architecto voluptatem. Deleniti aspernatur fuga nulla laudantium est cum, voluptatum dolores tempore vel odio veritatis iure dolore mollitia nostrum quidem, a libero quae. Placeat, blanditiis sed quam repellat odio suscipit magni ratione deserunt impedit laboriosam, minus animi cumque obcaecati exercitationem eum amet. At accusamus repellat impedit error aliquam necessitatibus soluta dolor veritatis asperiores nulla quos distinctio dolores deleniti, nemo ducimus esse placeat quidem odio temporibus alias similique!
                </p>
              </div>
              <div>
                <img
                  className="lg:h-[110%] lg:relative  lg:bottom-12  "
                  src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0="
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black ">
          <h1 className="lg:text-[90px] font-[Foldit] font-green-400 text-[64px]  lg:my-24  flex justify-center p-4 text-green-600 ">
            Testimonal💁🏻
          </h1>
          <div className="flex justify-around">
            <i
              class="fa fa-arrow-left text-white"
              onClick={() =>
                index === 0 ? setIndex(index) : setIndex(index - 1)
              }
            ></i>
            <i
              class="fa fa-arrow-right text-white"
              onClick={() =>
                index === 2 ? setIndex(index) : setIndex(index + 1)
              }
            ></i>
          </div>
          <div className="lg:flex justify-center">
            <div className="border-[2px] border-green-700 lg:w-[70%] rounded-xl xxs:m-0 lg:m-2 p-3  bg-[#090d29]">
              <div className="lg:flex justify-around ">
                <div className="lg:w-[40%] m-2 p-2 text-center">
                  <h1 className="text-white">{arr[index]?.name}</h1>
                  <h2 className="text-green-400">{arr[index]?.position}</h2>
                </div>
                <div>
                  <h1 className="text-white text-justify m-2 p-2 lg:w-[70%]">
                    {arr[index]?.description}
                  </h1>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
