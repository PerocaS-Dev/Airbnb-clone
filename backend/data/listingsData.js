//pure JS/JSON data

const listingsData = [
  //New York
  {
    title: "Central Townhouse in New York",
    city: "New York",
    apartmentType: "Townhouse",
    guests: 4,
    bedroomCount: 2,
    bathroomCount: 2,
    pricePerNight: 413,
    mainImage:
      "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1588983375699-0BTXE2QK9715LVMXVUKP/new+york+town+house.jpg?format=1000whttps://www.radiocityapartments.com/files-sbbasic/ba_radiocityapartments_at/exterior2.jpg?w=720&h=720",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.5,
    ratingCount: 80,
    host: {
      name: "Jacob Morris",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Smart TV", "Kitchen", "Air conditioning", "Wi-Fi"],
    description:
      "A stylish and well-furnished townhouse located close to Times Square. Perfect for family visits or small groups.",
  },
  {
    title: "Serene Apartment in New York",
    city: "New York",
    apartmentType: "Apartment",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 228,
    mainImage:
      "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1680401871797-MDLBZ5VTNIVRP5ZY9484/Francis%2BYork%2BTurnkey%2BLimestone%2BTownhouse%2Bwith%2BPrivate%2BPool%2Bon%2Bthe%2BUpper%2BEast%2BSide%2B21.jpg?format=1000w",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.7,
    ratingCount: 156,
    host: {
      name: "Samantha Williams",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Washer", "Heating", "Wi-Fi", "Air conditioning"],
    description:
      "Relax in this quiet one-bedroom unit located in the Upper East Side, featuring modern appliances and cozy finishes.",
  },
  {
    title: "Elegant Studio in New York",
    city: "New York",
    apartmentType: "Studio",
    guests: 1,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 146,
    mainImage:
      "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_737,h_414/q_auto,f_auto/2662-26/600-washington-apartments-exterior",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.6,
    ratingCount: 70,
    host: {
      name: "Grace Martinez",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Laptop workspace", "Wi-Fi", "Kitchen", "Smart TV"],
    description:
      "Small yet elegant studio ideal for solo travelers or business stays, near Hudson Yards.",
  },
  {
    title: "Cozy Loft in New York",
    city: "New York",
    apartmentType: "Loft",
    guests: 3,
    bedroomCount: 2,
    bathroomCount: 1,
    pricePerNight: 189,
    mainImage:
      "https://media.equityapartments.com/images/c_crop,x_159,y_0,w_1557,h_1080/c_fill,w_737,h_414/q_auto,f_auto/3911-52/777-sixth-avenue-apartments-exterior",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.9,
    ratingCount: 210,
    host: {
      name: "Ryan Brooks",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Pool", "Kitchen", "Wi-Fi", "Heating"],
    description:
      "A clean, modern loft with artistic flair in the heart of SoHo. Walkable to all major attractions.",
  },

  //Paris
  {
    title: "Charming Studio in Paris",
    city: "Paris",
    apartmentType: "Studio",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 154,
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPc8iY6K8Npc9Lzld4XpXB30v0XdovpJqc1d6DT9We1lBimkSXcA41EEWWYDlpbZX8Z4&usqp=CAUq=tbn:ANd9GcTYPc8iY6K8Npc9Lzld4XpXB30v0XdovpJqc1d6DT9We1lBimkSXcA41EEWWYDlpbZX8Z4&usqp=CAU",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.8,
    ratingCount: 132,
    host: {
      name: "Amélie Durand",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Heating", "Laptop workspace", "Air conditioning"],
    description:
      "Enjoy a stylish experience at this centrally-located studio in the Marais district.",
  },
  {
    title: "Elegant Apartment with Eiffel View",
    city: "Paris",
    apartmentType: "Apartment",
    guests: 3,
    bedroomCount: 2,
    bathroomCount: 1,
    pricePerNight: 222,
    mainImage: "https://media.datahc.com/HI693515236.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.9,
    ratingCount: 200,
    host: {
      name: "Étienne Lefèvre",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Air conditioning", "Smart TV", "Kitchen"],
    description:
      "Modern 2-bedroom apartment with views of the Eiffel Tower from the balcony.",
  },
  {
    title: "Cozy Loft in Montmartre",
    city: "Paris",
    apartmentType: "Loft",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 172,
    mainImage:
      "https://www.countryandtownhouse.com/wp-content/uploads/2023/02/Pavillon-Faubourg-exterior-2-les-Parisiens.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.7,
    ratingCount: 88,
    host: {
      name: "Clara Petit",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Washer", "Heating", "Kitchen"],
    description:
      "Charming and artistic loft located near Sacré-Cœur, ideal for couples or solo stays.",
  },
  {
    title: "Historic Flat Near Louvre",
    city: "Paris",
    apartmentType: "Flat",
    guests: 4,
    bedroomCount: 2,
    bathroomCount: 2,
    pricePerNight: 247,
    mainImage:
      "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/4/0/196/566/995/EXTERIOR_O/Hotel-Gabriel-Paris-Marais-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.6,
    ratingCount: 104,
    host: {
      name: "Julien Rousseau",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Elevator", "Kitchen", "Air conditioning"],
    description:
      "Stay in a beautifully restored flat near the Louvre. Walk to cafés, museums, and metro.",
  },

  //Tokyo

  {
    title: "Zen Studio in Shibuya",
    city: "Tokyo",
    apartmentType: "Studio",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 145,
    mainImage:
      "https://cdn.jacadatravel.com/wp-content/uploads/2016/09/accommodation_photos__Palace-Hotel-Tokyo-F-Exterior-Dusk.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.7,
    ratingCount: 92,
    host: {
      name: "Haruto Sato",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Air conditioning", "Washer", "Kitchen"],
    description:
      "Modern minimalist studio in the heart of Shibuya. Close to shops, nightlife, and transport.",
  },
  {
    title: "Modern Apartment in Akihabara",
    city: "Tokyo",
    apartmentType: "Apartment",
    guests: 4,
    bedroomCount: 2,
    bathroomCount: 1,
    pricePerNight: 180,
    mainImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2b/7c/8c/the-peninsula-tokyo-exterior.jpg?w=900&h=500&s=1",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.9,
    ratingCount: 220,
    host: {
      name: "Yuki Tanaka",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Smart TV", "Kitchen", "Air conditioning", "Wi-Fi"],
    description:
      "High-rise apartment with skyline views. Quick access to Akihabara and Ueno Park.",
  },
  {
    title: "Rooftop Loft in Tokyo Bay",
    city: "Tokyo",
    apartmentType: "Loft",
    guests: 3,
    bedroomCount: 2,
    bathroomCount: 2,
    pricePerNight: 210,
    mainImage:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/373B/production/_85293141_028792144-1.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.8,
    ratingCount: 138,
    host: {
      name: "Rika Fujiwara",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Heating", "Washer", "Pool"],
    description:
      "Sleek loft apartment with private rooftop access, perfect for romantic getaways or remote work.",
  },
  {
    title: "Traditional Flat in Asakusa",
    city: "Tokyo",
    apartmentType: "Flat",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 160,
    mainImage:
      "https://www.hilton.com/im/en/TYOHITW/20664156/exteriorsunsetwithsign.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=700&rw=768&rh=430",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.6,
    ratingCount: 101,
    host: {
      name: "Kaito Nakamura",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Kitchen", "Air conditioning", "Laptop workspace"],
    description:
      "Experience old Tokyo in this peaceful flat, just a short walk from Sensoji Temple.",
  },

  //Cape Town

  {
    title: "Modern Villa in Camps Bay",
    city: "Cape Town",
    apartmentType: "Villa",
    guests: 4,
    bedroomCount: 2,
    bathroomCount: 2,
    pricePerNight: 320,
    mainImage:
      "https://capetown.hotelguide.co.za/images/one-and-only-cape-town-exterior-786x500.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.9,
    ratingCount: 134,
    host: {
      name: "Liam van Wyk",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Pool", "Wi-Fi", "Air conditioning", "Smart TV"],
    description:
      "Luxurious villa with pool and breathtaking views of Table Mountain and the ocean.",
  },
  {
    title: "Cozy Apartment Near V&A Waterfront",
    city: "Cape Town",
    apartmentType: "Apartment",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 178,
    mainImage:
      "https://media.radissonhotels.net/image/radisson-collection-hotel-waterfront-cape-town/exterior/16256-113963-f75090814_4k.jpg?impolicy=HomeHero",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.6,
    ratingCount: 92,
    host: {
      name: "Nandi Jacobs",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Washer", "Air conditioning", "Kitchen"],
    description:
      "Chic 1-bedroom apartment near Cape Town’s famous harbor, restaurants, and shops.",
  },
  {
    title: "Stylish Loft in Gardens",
    city: "Cape Town",
    apartmentType: "Loft",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 162,
    mainImage:
      "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/148733/photos/73332471_XL/Island-Club-Hotel-%26-Apartments-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.5,
    ratingCount: 77,
    host: {
      name: "Thabo Mokoena",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Heating", "Laptop workspace", "Kitchen"],
    description:
      "Trendy loft space in Gardens, just minutes from cafes, bars, and Kloof Street.",
  },
  {
    title: "Luxury Townhouse in Sea Point",
    city: "Cape Town",
    apartmentType: "Townhouse",
    guests: 5,
    bedroomCount: 3,
    bathroomCount: 2,
    pricePerNight: 390,
    mainImage:
      "https://images.trvl-media.com/lodging/1000000/30000/22400/22376/dfbb58cb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.8,
    ratingCount: 188,
    host: {
      name: "Leah Smith",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Air conditioning", "Pool", "Smart TV"],
    description:
      "Spacious townhouse with private parking and a stunning rooftop deck overlooking the ocean.",
  },
  //Thailand

  {
    title: "Beachside Bungalow in Phuket",
    city: "Thailand",
    apartmentType: "Bungalow",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 132,
    mainImage:
      "https://www.outthere.travel/wp-content/uploads/2020/07/The-Siam-Bangkok-Thailand_05.jpg",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.9,
    ratingCount: 144,
    host: {
      name: "Somsak Kittisak",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Beach access", "Air conditioning", "Kitchen"],
    description:
      "Relax in this cozy beach bungalow just steps from the sand, perfect for a romantic retreat.",
  },
  {
    title: "Mountain Villa in Chiang Mai",
    city: "Thailand",
    apartmentType: "Villa",
    guests: 4,
    bedroomCount: 2,
    bathroomCount: 2,
    pricePerNight: 198,
    mainImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/55/80/be/building-exterior.jpg?w=900&h=500&s=1",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.8,
    ratingCount: 120,
    host: {
      name: "Anong Namsai",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Wi-Fi", "Pool", "Mountain view", "Air conditioning"],
    description:
      "Escape the crowds and enjoy panoramic mountain views from this tranquil hilltop villa.",
  },
  {
    title: "Urban Loft in Bangkok",
    city: "Thailand",
    apartmentType: "Loft",
    guests: 3,
    bedroomCount: 2,
    bathroomCount: 1,
    pricePerNight: 162,
    mainImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/b9/a9/bangkok-patio.jpg?w=500&h=400&s=1",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.7,
    ratingCount: 97,
    host: {
      name: "Krit Chaiwat",
      avatar:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    amenities: ["Wi-Fi", "Elevator", "Kitchen", "Air conditioning"],
    description:
      "Stylish loft in the heart of Bangkok’s bustling Sukhumvit district — ideal for city lovers.",
  },
  {
    title: "Island Apartment in Koh Samui",
    city: "Thailand",
    apartmentType: "Apartment",
    guests: 2,
    bedroomCount: 1,
    bathroomCount: 1,
    pricePerNight: 176,
    mainImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116474628.jpg?k=93db80aa4f8db50d3e6f99b06edfefcdbf78f71305afef926c77e5664cef70d3&o=&hp=1",
    additionalImages: {
      livingroom:
        "https://5.imimg.com/data5/ANDROID/Default/2022/10/HC/JM/VI/94039745/product-jpeg-500x500.jpg",
      kitchen:
        "https://i.pinimg.com/474x/2a/e1/76/2ae176986948533948a0f690b73b0030.jpg",
      bathroom:
        "https://easyrenovation.ca/wp-content/uploads/2023/10/hotel7.jpg",
      bedroom:
        "https://media.istockphoto.com/id/972664268/photo/3d-rendering-luxury-modern-bedroom-suite-in-hotel.jpg?s=612x612&w=0&k=20&c=TWopCQqyhxk7mIni4HfzcOC6dBmMNxlXRG25zbaAfmY=",
      view: "https://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-06.jpg",
    },
    rating: 4.6,
    ratingCount: 84,
    host: {
      name: "Nok Jirawat",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    amenities: ["Beach access", "Kitchen", "Wi-Fi", "Air conditioning"],
    description:
      "Island-style apartment with ocean views and beach access. Wake up to paradise every morning.",
  },
];

module.exports = listingsData;
