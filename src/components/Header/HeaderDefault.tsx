/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from "react";
import {Popover, Transition} from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
// Constants
import ROUTE_CONFIG from "@/constants/route.config";
import ThemeChanger from "../DaisyUI/ThemeChanger";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentReportIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const HeaderDefault = () => {
  const route = useRouter();

  const [navMenu, setNavMenu] = useState(ROUTE_CONFIG);

  useEffect(() => {
    const data = navMenu?.map((each) => {
      const atLeastOneChildDisplay = !!each?.children?.find((submenu) =>
        submenu?.displayOn?.includes("mainmenu"),
      );

      if (
        !!each?.children &&
        each?.children?.length > 0 &&
        atLeastOneChildDisplay
      ) {
        const found = each.children.find(
          (child) => `${each.path}/${child.path}` === route?.route,
        );
        each.current = found?.id ?? false;
      } else {
        each.current = each.path === route?.route;
      }
      return each;
    });
    setNavMenu(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route?.route]);

  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          {navMenu.map((menu) => {
            if (menu?.displayOn?.includes("mainmenu")) {
              const atLeastOneChildDisplay = !!menu?.children?.find(
                (submenu: {displayOn: string | string[]}) =>
                  submenu?.displayOn?.includes("mainmenu"),
              );

              if (atLeastOneChildDisplay) {
                return (
                  <Popover key={menu.id} className="relative">
                    {({open}) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-base" : "text-neutral",
                            "group bg-white rounded-md inline-flex items-center hover:text-base font-medium focus:outline-none",
                          )}
                        >
                          <span>{menu?.title ?? "-"}</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-base" : "text-neutral",
                              "ml-2 h-5 w-5 group-hover:text-base",
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {menu?.children?.map((submenu) => (
                                  <button
                                    key={submenu.id}
                                    onClick={() => route.push(menu.path)}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    {!!submenu?.icon && (
                                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-base-300 text-white sm:h-12 sm:w-12">
                                        <submenu.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    )}
                                    <div className="ml-4">
                                      <p className="text-base text-left font-medium text-gray-900">
                                        {submenu.title}
                                      </p>
                                      <p className="mt-1 text-left text-sm text-gray-500">
                                        {submenu.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                );
              }

              return (
                <button
                  key={menu.id}
                  onClick={() => route.push(menu.path)}
                  className="text-neutral font-medium hover:text-base"
                >
                  {menu.title}
                </button>
              );
            }
            return <></>;
          })}
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <ThemeChanger />
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-focus"
          >
            Sign up
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderDefault;
