import pufferJacket from "@/assets/products/puffer-jacket.png";
import techJacket from "@/assets/products/tech-jacket.png";
import pinkHoodie from "@/assets/products/pink-hoodie.png";
import blackHoodie from "@/assets/products/black-hoodie.png";
import cargoPants from "@/assets/products/cargo-pants.png";
import creamTee from "@/assets/products/cream-tee.png";
import greySweatshirt from "@/assets/products/grey-sweatshirt.png";
import brownTrackpants from "@/assets/products/brown-trackpants.png";
import navyVest from "@/assets/products/navy-vest.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Heat-Reactive Star Camo Puffer Jacket",
    price: 150.0,
    image: pufferJacket,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    description: "Premium puffer jacket featuring our signature star camouflage pattern with heat-reactive technology. Sustainable materials, oversized fit.",
  },
  {
    id: "2",
    name: "Star Camo Tech Jacket",
    price: 120.0,
    image: techJacket,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight technical jacket with pink camouflage print. Water-resistant, breathable fabric with adjustable hood.",
  },
  {
    id: "3",
    name: "Star Logo Zip-Up Hoodie",
    price: 85.0,
    image: pinkHoodie,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Oversized zip-up hoodie in soft pink with embroidered star logo. 100% organic cotton, brushed fleece interior.",
  },
  {
    id: "4",
    name: "Graphic Logo Pullover Hoodie",
    price: 90.0,
    image: blackHoodie,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Black oversized pullover hoodie with signature graphic print. Heavy-weight organic cotton, kangaroo pocket.",
  },
  {
    id: "5",
    name: "Utility Cargo Joggers",
    price: 75.0,
    image: cargoPants,
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    description: "Military-inspired cargo joggers in olive green. Multiple utility pockets, elasticated cuffs, drawstring waist.",
  },
  {
    id: "6",
    name: "Abstract Print Oversized Tee",
    price: 45.0,
    image: creamTee,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Cream oversized tee with abstract graphic print. 100% organic cotton, drop shoulder fit.",
  },
  {
    id: "7",
    name: "Star Logo Crewneck Sweatshirt",
    price: 70.0,
    image: greySweatshirt,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    description: "Grey oversized crewneck with minimal star logo embroidery. Heavyweight french terry, relaxed fit.",
  },
  {
    id: "8",
    name: "Essential Trackpants",
    price: 65.0,
    image: brownTrackpants,
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    description: "Earth-tone trackpants with drawstring waist and tapered leg. Soft brushed cotton, embroidered logo.",
  },
  {
    id: "9",
    name: "Puffer Vest Gilet",
    price: 110.0,
    image: navyVest,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    description: "Navy puffer vest with sustainable recycled fill. Zip front, stand collar, side pockets.",
  },
];

export const categories = ["All", "Jackets", "Hoodies", "T-Shirts", "Bottoms"];
