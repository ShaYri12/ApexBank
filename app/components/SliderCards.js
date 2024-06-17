import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PiMonitor } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscLink } from "react-icons/vsc";

const SliderCards = () => {
  return (
    <div className="md:hidden">
      <p className="text-[#8D7F6D] font-[600] pb-4">
        Gastos por categoria do cartão
      </p>
      <div className="space-y-[12px]">
        <Card className=" bg-[#F5FAFF] outline-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <PiMonitor className="h-[40px] w-[40px] bg-[#D1E9FF] rounded-full p-2 text-[#175CD3]" />

              <div className="flex flex-col w-full">
                <div className="flex items-center text-[14px] justify-between">
                  <h4 className="font-[600] text-[#194185]">Subscription</h4>
                  <p className="font-light text-[#175CD3]">R$ 25,00</p>
                </div>
                <span className="h-[8px] relative my-2 bg-[#D1E9FF] rounded-full w-full">
                  <span className="h-[8px] absolute top-[-12px] left-0 my-3 bg-[#175CD3] rounded-full w-[60%]"></span>
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className=" bg-[#F5FAFF] outline-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <HiOutlineShoppingBag className="h-[40px] w-[40px] bg-[#D1E9FF] rounded-full p-2 text-[#175CD3]" />

              <div className="flex flex-col w-full">
                <div className="flex items-center text-[14px] justify-between">
                  <h4 className="font-[600] text-[#194185]">Food and booze</h4>
                  <p className="font-light text-[#175CD3]">R$ 225,00</p>
                </div>
                <span className="h-[8px] relative my-2 bg-[#D1E9FF] rounded-full w-full">
                  <span className="h-[8px] absolute top-[-12px] left-0 my-3 bg-[#175CD3] rounded-full w-[80%]"></span>
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className=" bg-[#F5FAFF] outline-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <LuShoppingCart className="h-[40px] w-[40px] bg-[#D1E9FF] rounded-full p-2 text-[#175CD3]" />

              <div className="flex flex-col w-full">
                <div className="flex items-center text-[14px] justify-between">
                  <h4 className="font-[600] text-[#194185]">Groceries</h4>
                  <p className="font-light text-[#175CD3]">R$ 00,00</p>
                </div>
                <span className="h-[8px] relative my-2 bg-[#D1E9FF] rounded-full w-full">
                  {/* <span className="h-[8px] absolute top-[-12px] left-0 my-3 bg-[#175CD3] rounded-full w-[60%]"></span> */}
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className=" bg-[#EDEEF3] outline-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <VscLink className="h-[40px] w-[40px] bg-[#D1E9FF] rounded-full p-2 text-[#175CD3]" />

              <div className="flex flex-col w-full">
                <div className="flex items-center text-[14px] justify-between">
                  <h4 className="font-[600] text-[#194185]">Savings</h4>
                  <p className="font-light text-[#175CD3]">R$ 00,00</p>
                </div>
                <span className="h-[8px] relative my-2 bg-[#D1E9FF] rounded-full w-full">
                  {/* <span className="h-[8px] absolute top-[-12px] left-0 my-3 bg-[#175CD3] rounded-full w-[60%]"></span> */}
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default SliderCards;
