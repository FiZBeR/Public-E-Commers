import React from "react";

const ContactHelp = () => {
  return (
    <div className="mt-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex gap-4 items-start">
      <div className="bg-white dark:bg-black/20 rounded-full p-2 text-leaf-green dark:text-primary shrink-0">
        <span className="material-symbols-outlined text-[20px]">support_agent</span>
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white">
          Need help?
        </p>
        <p className="text-xs text-sage mt-1">
          Our garden faeries are available 24/7 to assist with your order.
        </p>
        <a
          className="text-xs font-bold text-leaf-green dark:text-primary mt-2 block hover:underline"
          href="#"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default ContactHelp;
