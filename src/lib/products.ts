import tindBabyTee from "@/assets/products/tind-baby-tee.png";
import tindHoodieBack from "@/assets/products/tind-hoodie-backview.png";
import tindHoodieFront from "@/assets/products/tind-hoodie-front-view.png";
import tindPantsBack from "@/assets/products/tind-pants-backview.png";
import tindPantsFront from "@/assets/products/tind-pants-front-viewe.png";
import tindSleevelessTeeBack from "@/assets/products/tind-sleeveless-tee-back-view.png";
import tindSleevelessTee from "@/assets/products/tind-sleeveless-tee.png";
import tindTankTop from "@/assets/products/tind-tank-top.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  sizes: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tind Baby Tee",
    price: 50.0,
    image: tindBabyTee,
    images: [tindBabyTee],
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    description: "Soft baby tee for everyday comfort.",
  },
  {
    id: "2",
    name: "Tind Hoodie (Back View)",
    price: 80.0,
    image: tindHoodieBack,
    images: [tindHoodieBack, tindHoodieFront],
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    description: "Classic hoodie with Tind branding.",
  },
  {
    id: "3",
    name: "Tind Hoodie (Front View)",
    price: 80.0,
    image: tindHoodieFront,
    images: [tindHoodieFront, tindHoodieBack],
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    description: "Classic hoodie front design.",
  },
  {
    id: "4",
    name: "Tind Pants (Back View)",
    price: 70.0,
    image: tindPantsBack,
    images: [tindPantsBack, tindPantsFront],
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable pants, back view.",
  },
  {
    id: "5",
    name: "Tind Pants (Front View)",
    price: 70.0,
    image: tindPantsFront,
    images: [tindPantsFront, tindPantsBack],
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable pants, front view.",
  },
  {
    id: "6",
    name: "Tind Sleeveless Tee (Back View)",
    price: 40.0,
    image: tindSleevelessTeeBack,
    images: [tindSleevelessTeeBack, tindSleevelessTee],
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    description: "Sleeveless tee, back view.",
  },
  {
    id: "7",
    name: "Tind Sleeveless Tee",
    price: 40.0,
    image: tindSleevelessTee,
    images: [tindSleevelessTee, tindSleevelessTeeBack],
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    description: "Sleeveless tee, front view.",
  },
  {
    id: "8",
    name: "Tind Tank Top",
    price: 35.0,
    image: tindTankTop,
    images: [tindTankTop],
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    description: "Classic tank top.",
  },
];

export const categories = ["All", "Jackets", "Hoodies", "T-Shirts", "Bottoms"];
