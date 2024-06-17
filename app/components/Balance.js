import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowDown, FaArrowUp, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const Balance = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between ">
        <p className="text-[#8D7F6D]">Investimentos</p>
        <Button variant="secondary">
          <img src="/assets/Pluss.svg" />
        </Button>
      </div>
      <div className="px-0 py-[24px]">
        <div
          className="rounded-full  flex items-center bg-[#F7F8F9]
 border-[#EAECF0] border-t pt-[24px] text-textColor gap-1 text-[14px]"
        >
          Balanço total
        </div>
        <div className="flex justify-between">
          <span className=" text-textColor text-[24px] font-[600] leading-[38px]">
            R$ 40,206.20
          </span>
          <div
            className="rounded-full px-4 flex items-center bg-[#ECFDF3]
 border-[#ABEFC6] border text-[#067647] gap-1 text-[14px]"
          >
            <FaArrowUp className="text-[#17B26A]" />
            7.2%
          </div>
        </div>
      </div>
      <Card>
        <CardHeader className="space-y-[24px]">
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-start">
              <img
                width={"10px"}
                height={"10px"}
                src="/assets/dot-blue.svg"
                alt="dotblue"
                className="py-[7px]"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#475467]">
                  Renda Fixa
                </p>
                <p className="text-[18px] font-[600]">$148.40</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <img
                width={"10px"}
                height={"10px"}
                src="/assets/dot-blue.svg"
                alt="dotblue"
                className="py-[7px] text-[#BAC1DF]"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#475467]">Ações</p>
                <p className="text-[18px] font-[600]">$614.16</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-start">
              <img
                width={"10px"}
                height={"10px"}
                src="/assets/dot-blue.svg"
                alt="dotblue"
                className="py-[7px]"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#475467]">
                  Fundos <br />
                  imobiliários
                </p>
                <p className="text-[18px] font-[600]">$824.28</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <img
                width={"10px"}
                height={"10px"}
                src="/assets/dot-blue.svg"
                alt="dotblue"
                className="py-[7px]"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#475467]">Cripto</p>
                <p className="text-[18px] font-[600]">$642.48</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-start">
              <img
                width={"10px"}
                height={"10px"}
                src="/assets/dot-blue.svg"
                alt="dotblue"
                className="py-[7px]"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#475467]">
                  Fundos de <br />
                  investimentos
                </p>
                <p className="text-[18px] font-[600]">$290.00</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      <p className="text-end py-[24px]">Ver todas as carteiras</p>
    </div>
  );
};

export default Balance;
