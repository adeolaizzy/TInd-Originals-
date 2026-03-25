import tindBabyTee from "@/assets/products/tind-baby-tee.png";
import hazeCrop01 from "@/assets/products/haze crop01.jpg";
import hazeCrop02 from "@/assets/products/haze crop02.jpg";
import tindBabyTeeExtra from "@/assets/products/tind babytee.jpg";
import tindHoodieBack from "@/assets/products/tind-hoodie-backview.png";
import tindHoodieFront from "@/assets/products/tind-hoodie-front-view.png";
import tindHood01 from "@/assets/products/tindhood01.jpg";
import tindHood03 from "@/assets/products/tindhood03.jpg";
import tindHood06 from "@/assets/products/tindhood06.jpg";
import tindPantsBack from "@/assets/products/tind-pants-backview.png";
import tindPantsFront from "@/assets/products/tind-pants-front-viewe.png";

import tindPant01 from "@/assets/products/tindpant01.jpg";
import tindPants01 from "@/assets/products/tindpants01.jpg";
import tindSleevelessTeeBack from "@/assets/products/tind-sleeveless-tee-back-view.png";
import tindSleevelessTee from "@/assets/products/tind-sleeveless-tee.png";
import tindSleeveless01 from "@/assets/products/tind sleeveless01.jpg";
import tindSleeveless03 from "@/assets/products/tind sleeveless03.jpg";
import tindSleeveless05 from "@/assets/products/tind sleeveless05.jpg";
import tindSleevelessBack03 from "@/assets/products/tind sleeveless backview03.jpg";
import tindTankTop from "@/assets/products/tind-tank-top.png";
import driftTank01 from "@/assets/products/drift tank 01.jpg";
import driftTank02 from "@/assets/products/drift tank 02.jpg";
import driftTank03 from "@/assets/products/drift tank03.jpg";


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
    name: "Haze Crop",
    price: 100000.0,
    image: tindBabyTee,
    images: [tindBabyTee, hazeCrop01, hazeCrop02, tindBabyTeeExtra],
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    description: "Premium Haze Crop for everyday comfort.",
  },
  {
    id: "2",
    name: "Faded Hoodie",
    price: 350000.0,
    image: tindHoodieFront,
    images: [tindHoodieFront, tindHoodieBack, tindHood01, tindHood03, tindHood06],
    category: "Hoodies",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Premium hoodie with Faded branding and multiple views.",
  },
  {
    id: "4",
    name: "Faded Pants",
    price: 300000.0,
    image: tindPantsFront,
    images: [tindPantsFront, tindPantsBack, tindPant01, tindPants01],
    category: "Pants",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Premium pants with Faded branding and multiple views.",
  },
  {
    id: "6",
    name: "Find Your Peace Muscle Tee",
    price: 250000.0,
    image: tindSleevelessTee,
    images: [tindSleevelessTee, tindSleevelessTeeBack, tindSleeveless01, tindSleeveless03, tindSleeveless05, tindSleevelessBack03],
    category: "Tees",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Premium Find Your Peace Muscle Tee with multiple views.",
  },
  {
    id: "8",
    name: "Drift Tank",
    price: 200000.0,
    image: tindTankTop,
    images: [tindTankTop, driftTank01, driftTank02, driftTank03],
    category: "Tees",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Premium Drift Tank for everyday comfort.",
  },
];

export const categories = ["All", "Hoodies", "Pants", "Tees"];
