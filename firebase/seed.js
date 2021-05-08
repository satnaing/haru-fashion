export const seedDatabase = (db) => {
  const products = [
    {
      name: "Baby Doll Flower Dark Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBabyDollFlowerDarkDress-img1.jpg?alt=media&token=83394e55-a40b-46aa-ae0c-a394be3fa6a1",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBabyDollFlowerDarkDress-img2.jpg?alt=media&token=f072e6a4-a989-4de6-9f6b-7d309459ab13",
      category: "women",
      price: 199.99,
    },
    {
      name: "Baby Doll Flower Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBabyDollFlowerDress-img1.jpg?alt=media&token=55dfc6b4-380e-410c-86fc-7d49f85bc971",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBabyDollFlowerDress-img2.jpg?alt=media&token=00aa517a-eef8-4078-9851-ed7b9cc5b568",
      category: "women",
      price: 169.99,
    },
    {
      name: "Balloon Fit Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBalloonFitJeans-img1.jpg?alt=media&token=ec1e0381-a6af-4ce2-aede-64678c7b3f57",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBalloonFitJeans-img2.jpg?alt=media&token=94a490e4-7576-4b8b-8ea3-a64878e6cb96",
      category: "men",
      price: 199.99,
    },
    {
      name: "Balloon Wide Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBalloonWideJeans-img1.jpg?alt=media&token=d1a69d0e-ab0a-49c3-9274-e8a853263c05",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBalloonWideJeans-img2.jpg?alt=media&token=bf8e916e-d3be-4fe4-8866-f2fd6942b62e",
      category: "men",
      price: 50.0,
    },
    {
      name: "Black Flare Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBlackFlareJeans-img1.jpg?alt=media&token=94f4e09d-1ea4-4ab1-9d76-0da5a39f3c2a",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FBlackFlareJeans-img2.jpg?alt=media&token=10496fd3-5f0d-4137-90dd-3f78eec37307",
      category: "women",
      price: 199.99,
    },
    {
      name: "Cut-Out Dress With Shoulder Pads",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FCut-OutDressWithShoulderPads-img1.jpg?alt=media&token=4cc8c6d2-cedc-4551-9ab5-bb52bee7c1b9",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FCut-OutDressWithShoulderPads-img2.jpg?alt=media&token=e94a5cfc-43fd-4dd2-bef0-a3b3f03bb54d",
      category: "women",
      price: 239.0,
    },
    {
      name: "Dress With Shirring And Tie",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FDressWithShirringAndTie-img1.webp?alt=media&token=1b921103-35f7-436d-bbdb-b4e0b409ab39",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FDressWithShirringAndTie-img2.jpg?alt=media&token=070fd37d-30bf-41a4-85f4-6c3d6e462135",
      category: "women",
      price: 150.0,
    },
    {
      name: "Drop-Shoulder Coat",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FDrop-ShoulderCoat-img1.jpg?alt=media&token=fbc0c8b9-41e0-4441-b2ac-d105c04dd2b0",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FDrop-ShoulderCoat-img2.jpg?alt=media&token=b1b156ef-b032-4a52-bb78-efd0ccb1fc35",
      category: "women",
      price: 210.0,
    },
    {
      name: "Faux Suede Bomber Jacket",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFauxSuedeBomberJacket-img1.jpg?alt=media&token=f90a9e32-6941-448d-bf3f-c3f5bc80a0df",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFauxSuedeBomberJacket-img2.jpg?alt=media&token=970e90da-897e-475b-8791-2cfce7b42f0c",
      category: "men",
      price: 89.99,
    },
    {
      name: "Fitted Corset Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFittedCorsetDress-img1.jpg?alt=media&token=bbce53bc-3494-4822-be60-7e579a9f0ae6",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFittedCorsetDress-img2.jpg?alt=media&token=0761316a-10e5-4c68-affb-10ae3d4bbe23",
      category: "women",
      price: 120.0,
    },
    {
      name: "Fitted Printed Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFittedPrintedDress-img1.jpg?alt=media&token=5d1ebf2e-08e0-4655-aece-1101d43e7d9b",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFittedPrintedDress-img2.jpg?alt=media&token=de22025b-4e57-47e0-9598-cd47876fb270",
      category: "women",
      price: 180.0,
    },
    {
      name: "Flared Ribbed Trousers",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFlaredRibbedTrousers-img2.jpg?alt=media&token=d5f62528-4d80-4896-8446-09b310ec61af",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFlaredRibbedTrousers-img1.jpg?alt=media&token=b3f09230-0e75-4c1e-81c9-c91b4c3ae554",
      category: "women",
      price: 159.0,
    },
    {
      name: "Floral Midi Skirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFloralMidiSkirt-img1.jpg?alt=media&token=d82e7c88-95a1-419b-b562-dc6efbcbc787",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFloralMidiSkirt-img2.jpg?alt=media&token=986733fa-724c-4236-85cf-bd6154366f7c",
      category: "women",
      price: 89.99,
    },
    {
      name: "Gray Flare Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FGrayFlareJeans-img1.jpg?alt=media&token=5d20f43e-96a5-43e3-a72c-6d330da23190",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FGrayFlareJeans-img2.jpg?alt=media&token=680135f7-efbf-4840-af32-4bda1f021279",
      category: "women",
      price: 199.99,
    },
    {
      name: "Greenish Brown Dresse",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FGreenishBrownDress-img1.jpg?alt=media&token=c8013cf6-cae6-40c2-9cbc-6fc51aca1966",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FGreenishBrownDress-img2.jpg?alt=media&token=55740ae6-ac9c-4d2f-a62b-f3a991786c8d",
      category: "women",
      price: 80.0,
    },
    {
      name: "Joggers With Mesh Detail",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FJoggersWithMeshDetail-img1.jpg?alt=media&token=0199a663-a84f-45d2-ba51-5f1206c479eb",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FJoggersWithMeshDetail-img2.jpg?alt=media&token=c144e821-f283-4dfd-a505-96bbaf829415",
      category: "men",
      price: 90.0,
    },
    {
      name: "Long Sleeve Checked Shirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FLong%20SleeveCheckedShirt-img1.jpg?alt=media&token=4112c526-f7c6-4145-b382-a8fe5b26671c",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FLong%20SleeveCheckedShirt-img2.jpg?alt=media&token=3a9c3759-d7c5-484f-a6b0-288b205c06f5",
      category: "men",
      price: 60.0,
    },
    {
      name: "Pinky Wide-Leg Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPinkyWide-LegJeans-img1.jpg?alt=media&token=967ebf1c-edf7-43c4-ad06-81c979c4b9aa",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPinkyWide-LegJeans-img2.jpg?alt=media&token=030dcf9f-5058-44c1-93f1-1efcb71b5447",
      category: "women",
      price: 89.99,
    },
    {
      name: "Oversized Check Overshirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FOversizedCheckOvershirt-img1.jpg?alt=media&token=6d2c0eb4-b342-4e4b-a4e6-4d19d5cb0515",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FOversizedCheckOvershirt-img2.jpg?alt=media&token=089a2a18-8242-40c4-a845-562934ba4a00",
      category: "women",
      price: 200.0,
    },
    {
      name: "Pinky Oversized Check Over shirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPinkyOversizedCheckOvershirt-img1.jpg?alt=media&token=89209e14-0acd-454c-997a-87748ec7c58d",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPinkyOversizedCheckOvershirt-img2.jpg?alt=media&token=3b0b1ea2-27b3-4c08-93e7-014b6c09a6e8",
      category: "women",
      price: 80.0,
    },
    {
      name: "Pleated Midi Skirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedMidiSkirt-img1.jpg?alt=media&token=a3ad8032-f706-4ad3-87db-0a6d971aafed",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedMidiSkirt-img2.jpg?alt=media&token=77a631ae-e35d-4c25-aace-1b8c9c65d6dd",
      category: "women",
      price: 199.99,
    },
    {
      name: "Pleated Shirt Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedShirtDress-img1.jpg?alt=media&token=fbbebda0-ea6c-493d-b4f8-7bfea245758e",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedShirtDress-img2.jpg.webp?alt=media&token=e672bd8a-723c-4fa2-98f7-414b0ab5404a",
      category: "women",
      price: 199.99,
    },
    {
      name: "Quilted Bomber Jacket",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FQuiltedBomberJacket-img1.jpg?alt=media&token=564fd7de-bfaa-4efb-bbd3-35b26cb974f9",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FQuiltedBomberJacket-img2.jpg?alt=media&token=0a3d2b11-e47e-4eeb-a4e0-8641e19f9007",
      category: "women",
      price: 199.99,
    },
    {
      name: "Ripped Midi Skirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FRippedMidiSkirt-img1.jpg?alt=media&token=3455029e-0734-4ebe-ac64-9a6d92e822a5",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FRippedMidiSkirt-img2.jpg?alt=media&token=391518fb-4eac-43f0-8435-768a6d3db9b3",
      category: "women",
      price: 199.99,
    },
    {
      name: "Short-sleeved White Corset",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShort-sleevedWhiteCorset-img1.jpg?alt=media&token=97726be8-f06e-4307-9fa1-1255f50d5b3d",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShort-sleevedWhiteCorset-img2.jpg?alt=media&token=aba3f4f2-6dcc-40e8-aa37-bc88236675a3",
      category: "women",
      price: 199.99,
    },
    {
      name: "Short Polo Dress",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortPoloDress-img1.webp?alt=media&token=ad7b8492-6e5d-4fec-8d5d-d2fd78dc17c4",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortPoloDress-img2.jpg?alt=media&token=accd197e-fc5c-4ca5-94ed-6a0b9da3a107",
      category: "women",
      price: 199.99,
    },
    {
      name: "Short Polo Dress Black",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortPoloDressBlack-img1.jpg?alt=media&token=a4053896-52a2-4c00-b94f-9e9c9757bdb1",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortPoloDressBlack-img2.jpg?alt=media&token=2881fd68-ed21-4022-918a-6f2d8c5a6445",
      category: "women",
      price: 199.99,
    },
    {
      name: "Short Sleeve Cardigan",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortSleeveCardigan-img1.jpg?alt=media&token=06491f2a-21bb-448a-859e-d4d31811e550",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortSleeveCardigan-img2.jpg?alt=media&token=0352a96c-cc6b-40c5-a92a-1ed51322975f",
      category: "women",
      price: 199.99,
    },
    {
      name: "Short Straight Coat",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortStraightCoat-img1.jpg?alt=media&token=fd3b3da3-bae3-4ec7-a02f-790dfa13712e",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FShortStraightCoat-img2.jpg?alt=media&token=ff26ad6a-5249-4939-a7df-fffcb2d3efbb",
      category: "women",
      price: 199.99,
    },
    {
      name: "White Flare Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FWhiteFlareJeans-img1.jpg?alt=media&token=1466cc89-a946-48fd-a16c-3dd2514b2ad9",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FWhiteFlareJeans-img2.jpg?alt=media&token=ce7be1fd-00c7-4327-8ed7-a97bdfc948a8",
      category: "women",
      price: 199.99,
    },
    {
      name: "Wide-Leg Jeans",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FWide-LegJeans-img1.jpg?alt=media&token=7c6fb9a5-91cb-42d3-b500-5ad3e9b32270",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FWide-LegJeans-img2.jpg?alt=media&token=fc3a0031-6d46-4291-ba19-626d7d145453",
      category: "women",
      price: 199.99,
    },
    {
      name: "Zebra Print Midi Skirt",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FZebraPrintMidiSkirt-img1.jpg?alt=media&token=c853ad7c-bca6-438e-a3ff-8f775a3c483a",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FZebraPrintMidiSkirt-img2.jpg?alt=media&token=918cda49-533d-481b-b253-5e5f30ba3c97",
      category: "women",
      price: 199.99,
    },
    {
      name: "Zipped Joggers",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fugiat enim distinctio hic numquam vero pariatur corrupti eius nisi repellat expedita id quod saepe error animi temporibus sint eveniet, voluptas repellendus non. Sapiente blanditiis totam quas voluptatibus molestiae, vero quasi cum delectus nobis voluptatum dicta ut dolorem est magnam repellat.",
      img1:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FZippedJoggers-img1.jpg?alt=media&token=c443c9f5-a740-4ae6-b4f1-9e1036504631",
      img2:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FZippedJoggers-img2.jpg?alt=media&token=316b1d0a-7975-4f74-bc9f-c3020536e166",
      category: "women",
      price: 199.99,
    },
  ];
  products.map((product, index) =>
    db.collection("products").add({
      id: index + 1,
      name: product.name,
      desc: product.desc,
      details: product.details,
      img1: product.img1,
      img2: product.img2,
      category: product.category,
      price: product.price,
    })
  );
};
