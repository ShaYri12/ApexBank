import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const NewCardsAnnouncement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center ps-[54px]">
      <Card className="flex flex-col items-start md:w-1/2 bg-transparent shadow-none p-0">
        <CardContent>
          <CardHeader className="flex items-center mb-4">
            <img
              aria-hidden="true"
              alt="card icon"
              src="https://placehold.co/32x32"
              className="mr-2"
            />
            <CardTitle className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
              Novos cartões Apex Bank. Em breve!
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-zinc-600 dark:text-zinc-400">
            Quando se trata de administrar suas finanças, a escolha do cartão certo faz toda a diferença.
          </CardDescription>
        </CardContent>
      </Card>
      <div className="mt-6 md:mt-0 flex justify-center">
        <img
          width={"467px"}
          height={"410px"}
          src="/assets/new-card.svg"
          alt="cardimg"
          className="mr-[-15%]"
        />
      </div>
    </div>
  );
};

export default NewCardsAnnouncement;
