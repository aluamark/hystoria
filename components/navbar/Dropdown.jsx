import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { products, callsToAction } from "@/lib/constants";

export default function Dropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
        Product
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-4">
          {products.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                />
              </div>
              <div className="flex-auto">
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
            >
              <item.icon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
