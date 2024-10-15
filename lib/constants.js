import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

export const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const tiers = [
  {
    name: "Freemium",
    id: "tier-free",
    href: "#",
    priceMonthly: "₱0",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: ["200mb limit for photos and videos"],
    featured: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#",
    priceMonthly: "₱250",
    description: "Full customization of profile and larger file storage.",
    features: [
      "5gb limit for photos and videos",
      "Full profile customization",
      "Physical Aluminum QR Code",
    ],
    featured: true,
  },
];
