import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image1} className="w-[320px] absolute bottom-0" alt="" />
          </div>
          {/* Second col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br
             from-brandYellow to-brandYellow/90
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              className="w-[320px] absolute -right-4 lg:to-[40px] bottom-16"
              alt=""
            />
          </div>
          {/* Third col  */}
          <div
            className="sm:col-span-2 py-10 pl-5  bg-gradient-to-br from-primary to-primary/90
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* four col  */}
          <div
            className="sm:col-span-2 py-10 pl-5
             bg-gradient-to-br from-gray-400/90 to-gray-100
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  PlayStation
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-whight"}
                />
              </div>
            </div>
            <img
              src={Image4}
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
              alt=""
            />
          </div>
          {/* five col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br
             from-brandGreen/90 to-brandGreen/90
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  VR
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image5}
              className="w-[320px] absolute -right-4 lg:to-[40px] bottom-0"
              alt=""
            />
          </div>
          {/* six col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br
             from-brandBlue to-brandBlue/90
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image6}
              className="w-[200px] absolute right-0 bottom-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
