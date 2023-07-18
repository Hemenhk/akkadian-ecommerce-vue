import bo from "../../../assets/images/bo.jpg";
import cb from "../../../assets/images/cb.jpg";
import cp from "../../../assets/images/cp.jpg";
import mp from "../../../assets/images/mp.jpg";
import sss from "../../../assets/images/sss.jpg";

const product = [
  {
    id: 1,
    title: "Beard Oil",
    price: 19.99,
    description:
      "Made with natural oils, this beard oil will hydrate your skin and beard",
    image: bo,
    category: "beard",
  },
  {
    id: 2,
    title: "Conditioning Balm",
    price: 24.99,
    description:
      "Made with natural oils and butter, this balm will deeply hydrate your skin and beard",
    image: cb,
    category: "beard",
  },
  {
    id: 3,
    title: "Cream Pomade",
    price: 19.99,
    description:
      "Made with natural ingredients this cream pomade will style your hair and leave a medium finish.",
    image: cp,
    category: "hair",
  },
  {
    id: 4,
    title: "Matte Paste",
    price: 19.99,
    description:
      "Made with natural ingredients this matte paste will style your hair and leave a matte finish.",
    image: mp,
    category: "hair",
  },
  {
    id: 5,
    title: "Sea Salt Spray",
    price: 19.99,
    description:
      "Made with natural ingredients this sea salt spray will style your hair and beard and leave a matte finish.",
    image: sss,
    category: ["hair", "beard"],
  },
];

const productModule = {
  namespaced: true,
  state: {
    products: product,
  },
};

export default productModule;
