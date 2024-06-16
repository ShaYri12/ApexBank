import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const NewCardsAnnouncement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
      <Card className="flex flex-col items-start md:w-1/2 bg-transparent shadow-none">
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
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img
          aria-hidden="true"
          alt="bank cards"
          src="https://placehold.co/400x300"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default NewCardsAnnouncement;
