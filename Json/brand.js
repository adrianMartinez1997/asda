const { Brands } = require("../src/db");
const brandMockUp = async () => {
  try {
    await Brands.create({
      id: "5adb1af9-0bb2-4ba7-a811-3994c61a43f4",
      name: "Sony",
      image_url:
        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1658326184/5848242ecef1014c0b5e49c8_lbjech.png",
    });
    await Brands.create({
      id: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",
      name: "Shimano",
      image_url:
        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1658427910/pngegg_5_ukasay.png",
    });
    await Brands.create({
      id: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",
      name: "Strong",
      image_url:
        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1658428547/Pngtree_strong_fitness_logo_designs_4192737_e3puw7.png",
    });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = brandMockUp;
