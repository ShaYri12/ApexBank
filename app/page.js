import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";

const dashboard = () => {
  return (
    <main className="flex flex-col px-[32px] gap-[32px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-start gap-[12px] px-[16px] py-[20px] rounded-[12px] border border-[#EAECF0] bg-white shadow-sm">
          <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
            <img
              width={"24px"}
              height={"24px"}
              className="absolute"
              src="/assets/receber.svg"
              alt="Receber"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-textColor font-[600] text-[16px] leading-[24px]">
              Receber
            </h3>
            <p className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
              Pix (Depósito, Cobrança e Chave); Emitir boletos; Receber TED
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[12px] px-[16px] py-[20px] rounded-[12px] border border-[#EAECF0] bg-white shadow-sm">
          <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
            <img
              width={"24px"}
              height={"24px"}
              className="absolute"
              src="/assets/pagar.svg"
              alt="Pagar"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-textColor font-[600] text-[16px] leading-[24px]">
              Pagar
            </h3>
            <p className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
              Pix (Pagar, Transferência); TED/DOC; Pagar boleto/conta; Câmbio
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[12px] px-[16px] py-[20px] rounded-[12px] border border-[#EAECF0] bg-white shadow-sm">
          <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
            <img
              width={"24px"}
              height={"24px"}
              className="absolute"
              src="/assets/investir2.svg"
              alt="Investir"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-textColor font-[600] text-[16px] leading-[24px]">
              Investir
            </h3>
            <p className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
              Ações, Títulos, Imóveis e Fundos
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[12px] px-[16px] py-[20px] rounded-[12px] border border-[#EAECF0] bg-white shadow-sm">
          <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
            <img
              width={"24px"}
              height={"24px"}
              className="absolute"
              src="/assets/comprar2.svg"
              alt="Comprar"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-textColor font-[600] text-[16px] leading-[24px]">
              Comprar
            </h3>
            <p className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
              Em breve novidades para compra de criptomoedas
            </p>
          </div>
        </div>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 grid flex-1 ">
        <div class="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
              Saldo total
            </h2>
            <span class="text-zinc-500 dark:text-zinc-400">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v2a2 2 0 11-4 0v-2m4 0H9"
                ></path>
              </svg>
            </span>
          </div>
          <div class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            R$ 00,00
          </div>
          
          <h3 class="text-md font-semibold text-zinc-600 dark:text-zinc-300 mb-4">
            Evolução do saldo
          </h3>
          <div class="text-center text-zinc-500 dark:text-zinc-400 mb-4">
            Não há registros suficientes para gerar o gráfico
          </div>
          <div class="flex justify-between text-zinc-500 dark:text-zinc-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
          </div>
        </div>

        <div>
          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Order Oe31b70H
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Truck className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <MoreVertical className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
                <div className="font-semibold">Order Details</div>
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator className="my-2" />
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <div className="font-semibold">Shipping Information</div>
                  <address className="grid gap-0.5 not-italic text-muted-foreground">
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div className="grid auto-rows-max gap-3">
                  <div className="font-semibold">Billing Information</div>
                  <div className="text-muted-foreground">
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Customer Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Customer</dt>
                    <dd>Liam Johnson</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a href="mailto:">liam@acme.com</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a href="tel:">+1 234 567 890</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Payment Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      Visa
                    </dt>
                    <dd>**** **** **** 4532</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronRight className="h-3.5 w-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
