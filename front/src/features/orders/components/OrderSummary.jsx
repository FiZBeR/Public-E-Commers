import React from "react";
import ContactHelp from "./ContactHelp";

const OrderSummary = () => {
  return (
    <div className="lg:col-span-4 sticky top-24">
      <div className="bg-white dark:bg-white/5 rounded-[2rem] p-6 lg:p-8 shadow-sm border border-[#f0f4f2] dark:border-white/5 flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Resumen del pedido
        </h3>
        {/*<!-- Costs -->*/}
        <div className="flex flex-col gap-4 pb-6 border-b border-dashed border-gray-200 dark:border-white/10">
          <div className="flex justify-between items-center text-sm">
            <span className="text-sage dark:text-gray-400">Subtotal</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              $115.00
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-sage dark:text-gray-400">
              Envío
            </span>
            <span className="font-semibold text-[#2d5a27] dark:text-primary">
              Gratis
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-sage dark:text-gray-400">Estimated Tax</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              $0.00
            </span>
          </div>
        </div>
        {/*<!-- Total -->*/}
        <div className="flex justify-between items-end">
          <span className="text-base font-medium text-slate-900 dark:text-white">
            Total
          </span>
          <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            $115.00
          </span>
        </div>
        {/*<!-- Promo Code -->*/}
        <div className="flex flex-col gap-2 mt-2">
          <label
            className="text-xs font-semibold uppercase tracking-wider text-sage dark:text-gray-500 ml-3"
            for="promo"
          >
            Codigo de Promo
          </label>
          <div className="relative">
            <input
              className="w-full h-12 rounded-full bg-background-light dark:bg-black/20 px-5 text-sm placeholder-sage/60 focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all hover:border border-[#2d5a27]"
              id="promo"
              placeholder="Añade una promo a tu cesta"
              type="text"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-white dark:bg-white/10 rounded-full text-xs font-bold text-black hover:text-white dark:text-primary shadow-sm hover:bg-[#2d5a27] dark:hover:bg-white/20 transition-colors">
              Apply
            </button>
          </div>
        </div>
        {/*<!-- Checkout Button -->*/}
        <button className="w-full bg-[#2d5a27] hover:bg-[#2d5a27]/90 dark:bg-primary dark:text-[#2d5a27] dark:hover:bg-primary/90 text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-[#2d5a27]/20 dark:shadow-primary/20 flex items-center justify-center gap-2 mt-4 transition-all active:scale-[0.98]">
          Finalizar Pedido
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-sage dark:text-gray-500">
          <span className="material-symbols-outlined text-[14px]">lock</span>
            Pago seguro
        </div>
      </div>
      
      <ContactHelp />
    </div>
  );
};

export default OrderSummary;
