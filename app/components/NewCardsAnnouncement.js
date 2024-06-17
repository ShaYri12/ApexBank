import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const NewCardsAnnouncement = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row items-center ps-[54px] justify-between">
      <Card className="flex flex-col items-start md:w-1/2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0 flex flex-col gap-[24px]">
          <CardHeader className="flex items-start p-0 gap-[24px]">
            <img
              width={"39px"}
              height={"30px"}
              aria-hidden="true"
              alt="card icon"
              src="/assets/card-icon.svg"
            />
            <CardTitle className="text-[48px] text-[#28365C] font-[600] leading-[60px] tracking-[-2%]">
              Novos cartões Apex Bank. Em breve!
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-[20px] text-[#475467] font-[400] leading-[30px]">
            Quando se trata de administrar suas finanças, a escolha do cartão
            certo faz toda a diferença.
          </CardDescription>
        </CardContent>
      </Card>
      <div className="mt-6 md:mt-0 flex justify-center">
        <img
          width={"467px"}
          height={"410px"}
          src="/assets/new-card.svg"
          alt="cardimg"
          className="md:mr-[-13%] mr-0"
        />
      </div>
    </div>
  );
};

export default NewCardsAnnouncement;
