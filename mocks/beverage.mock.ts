import { BeverageGroup, Beverage } from "../types/beverage";

// Beverage Groups (yellow header rows in Excel)
export const beverageGroups: BeverageGroup[] = [
  {
    id: "1",
    englishName: "CÀ PHÊ TRUYỀN THÔNG",
    vietnameseName: "Cà phê truyền thống",
  },
  {
    id: "2",
    englishName: "CÀ PHÊ ESPRESSO",
    vietnameseName: "Cà phê Espresso",
  },
  {
    id: "3",
    englishName: "CÀ PHÊ Ủ LẠNH",
    vietnameseName: "Cà phê ủ lạnh",
  },
  {
    id: "4",
    englishName: "TRÀ TRÁI CÂY",
    vietnameseName: "Trà trái cây",
  },
  {
    id: "5",
    englishName: "ĐÁ XAY CÀ PHÊ",
    vietnameseName: "Đá xay cà phê",
  },
  {
    id: "6",
    englishName: "ĐÁ XAY KHÔNG CÀ PHÊ",
    vietnameseName: "Đá xay không cà phê",
  },
  {
    id: "7",
    englishName: "TRÀ SỮA",
    vietnameseName: "Trà sữa",
  },
  {
    id: "8",
    englishName: "NƯỚC ÉP",
    vietnameseName: "Nước ép",
  },
  {
    id: "9",
    englishName: "MATCHA/HOUJICHA",
    vietnameseName: "Matcha/Houjicha",
  },
  {
    id: "10",
    englishName: "THỨC UỐNG KHÁC",
    vietnameseName: "Thức uống khác",
  },
  {
    id: "11",
    englishName: "NGUYÊN LIỆU SƠ CHẾ",
    vietnameseName: "Nguyên liệu sơ chế",
  },
];

// Beverages based on Excel structure
export const beverages: Beverage[] = [
  // CÀ PHÊ ĐEN (Black Coffee) - STT: 1
  {
    id: "1",
    englishName: "CÀ PHÊ ĐEN",
    vietnameseName: "Cà phê đen",
    groupId: "1",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Đường que",
        brand: "Biên Hoà",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê vào tách",
      "Phục vụ đường riêng bên ngoài, kèm 1 ly đá (nếu dùng lạnh)",
    ],
  },
  
  // CÀ PHÊ SỮA (Milk Coffee) - STT: 2
  {
    id: "2",
    englishName: "CÀ PHÊ SỮA",
    vietnameseName: "Cà phê sữa",
    groupId: "1",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 20,
      },
    ],
    instructionSteps: [
      "Cho sữa đặc vào tách",
      "Chiết xuất cà phê vào tách",
      "Khuấy đều và phục vụ",
    ],
  },
  
  // BẠC XỈU NÓNG (Hot Bac Xiu) - STT: 3
  {
    id: "3",
    englishName: "BẠC XỈU NÓNG",
    vietnameseName: "Bạc xỉu nóng",
    groupId: "1",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Sữa đặc",
        brand: "Nhất Hương",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 50,
      },
    ],
    instructionSteps: [
      "Cho sữa đặc vào tách",
      "Chiết xuất cà phê vào tách",
      "Đổ nước sôi vào",
      "Khuấy đều và phục vụ nóng",
    ],
  },
  
  // BẠC XỈU ĐÁ (Iced Bac Xiu) - STT: 3.1
  {
    id: "3.1",
    englishName: "BẠC XỈU ĐÁ",
    vietnameseName: "Bạc xỉu đá",
    groupId: "1",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Sữa đặc",
        brand: "Nhất Hương",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 50,
      },
      {
        name: "Đá viên",
        brand: "-",
        unitsOfMeasurement: "ly",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho sữa đặc vào ly",
      "Chiết xuất cà phê vào ly",
      "Đổ nước sôi vào và khuấy đều",
      "Thêm đá viên vào",
      "Phục vụ lạnh",
    ],
  },
  
  // CÀ PHÊ MUỐI (Salt Coffee) - STT: 4
  {
    id: "4",
    englishName: "CÀ PHÊ MUỐI",
    vietnameseName: "Cà phê muối",
    groupId: "1",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Muối",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 1,
      },
      {
        name: "Đường que",
        brand: "Biên Hoà",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho muối vào tách",
      "Chiết xuất cà phê vào tách",
      "Khuấy đều để muối tan",
      "Phục vụ đường riêng bên ngoài",
    ],
  },

  // ========== CÀ PHÊ ESPRESSO GROUP ==========
  // ESPRESSO - ID: 1
  {
    id: "espresso",
    englishName: "ESPRESSO",
    vietnameseName: "ESPRESSO",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Đường que",
        brand: "Biên Hoà",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
      {
        name: "Bánh quy",
        brand: "Cofidis",
        unitsOfMeasurement: "cái",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê vào tách",
      "Phục vụ với đường riêng và bánh quy bên ngoài",
    ],
  },
  
  // AMERICANO - ID: 2.1
  {
    id: "americano",
    englishName: "AMERICANO",
    vietnameseName: "AMERICANO",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê vào tách",
      "Rót nước sôi vào tách",
    ],
  },
  
  // ICE AMERICANO - ID: 2.2
  {
    id: "ice-americano",
    englishName: "ICE AMERICANO",
    vietnameseName: "ICE AMERICANO",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Nước lọc",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê",
      "Cho cà phê và nước lọc vào ly",
      "Thêm đá đầy ly",
    ],
  },
  
  // CAPUCCINO (HOT) - ID: 3.1
  {
    id: "capuccino-hot",
    englishName: "CAPUCCINO (HOT)",
    vietnameseName: "CAPUCCINO (HOT)",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Đường que",
        brand: "Biên Hoà",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
      {
        name: "Bánh quy",
        brand: "Cofidis",
        unitsOfMeasurement: "cái",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê vào tách",
      "Đánh sữa tạo phom, rót vào tách",
      "Phục vụ với đường riêng và bánh quy bên ngoài",
    ],
  },
  
  // ICE CAPUCCINO - ID: 3.2
  {
    id: "ice-capuccino",
    englishName: "ICE CAPUCCINO",
    vietnameseName: "ICE CAPUCCINO",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê.",
      "Cho sữa và đường vào ly, khuấy đều. Thêm đá cách miệng ly 1cm.",
      "Rót cà phê vào. Đánh sửa tạo phom, vớt phân phom sửa vào ly.",
    ],
  },
  
  // MAPLE LATTE - ID: 4
  {
    id: "maple-latte",
    englishName: "MAPLE LATTE",
    vietnameseName: "MAPLE LATTE",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Syrup Maple",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 25,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Đường que",
        brand: "Biên Hoà",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
      {
        name: "Bánh quy",
        brand: "Cofidis",
        unitsOfMeasurement: "cái",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Rót syrup vào tách",
      "Chiết xuất cà phê vào tách",
      "Đánh sữa tạo phom, rót vào tách (art tạo hình)",
      "Phục vụ với đường riêng và bánh quy bên ngoài",
    ],
  },
  
  // MOCHA COFFEE - ID: 5
  {
    id: "mocha-coffee",
    englishName: "MOCHA COFFEE",
    vietnameseName: "MOCHA COFFEE",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Sauce socola",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Đường que",
        brand: "-",
        unitsOfMeasurement: "que",
        quantity: 1,
      },
      {
        name: "Bánh quy",
        brand: "Cofidis",
        unitsOfMeasurement: "cái",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Rót sốt socola vào tách",
      "Chiết xuất cà phê vào tách",
      "Đánh sữa tạo phom, rót vào tách",
      "Sử dụng sốt socola để tạo hình trên bề mặt foam sữa",
      "Phục vụ với đường riêng và bánh quy bên ngoài",
    ],
  },
  
  // CARAMEL SALTED MACHIATO - ID: 6
  {
    id: "caramel-salted-machiato",
    englishName: "CARAMEL SALTED MACHIATO",
    vietnameseName: "CARAMEL SALTED MACHIATO",
    groupId: "2",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Sauce Salted Caramel",
        brand: "Da Vinci",
        unitsOfMeasurement: "gr",
        quantity: 25,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê",
      "Rót sauce caramel vào ly, lăn đều ly để trang trí",
      "Rót sữa tươi và đường vào ly khuấy nhẹ",
      "Cho đá đầy ly và rót cà phê vào",
      "Đánh sữa lấy foam, vớt phần foam sữa vào ly. Decor sauce caramel",
    ],
  },
  
  // BANANA LATTE - ID: 7
  {
    id: "banana-latte",
    englishName: "BANANA LATTE",
    vietnameseName: "BANANA LATTE",
    groupId: "2",
    ingredients: [
      {
        name: "Bột chuối",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 11,
      },
      {
        name: "Kem sữa",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Thạch chuối",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Chuối sấy",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
    ],
    instructionSteps: [
      "Chiết xuất cà phê",
      "Hoà tan bột chuối với 20ml nước sôi trong ly",
      "Cho tiếp sữa tươi + đường vào khuấy đều",
      "Cho thạch vào ly và thêm đá cách miệng ly 1cm.",
      "Rót cà phê vào",
      "Rót tiếp kem sữa vào và decor chuối sấy",
    ],
  },

  // ========== CÀ PHÊ Ủ LẠNH (COLD BREW) GROUP ==========
  // BASIC COLDBREW COFFEE
  {
    id: "basic-coldbrew",
    englishName: "BASIC COLDBREW COFFEE",
    vietnameseName: "Basic Coldbrew Coffee",
    groupId: "3",
    ingredients: [
      {
        name: "Cà phê coldbrew",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
    ],
    instructionSteps: [
      "Rót cà phê vào ly và cho đá đầy ly",
    ],
  },
  
  // COLDBREW COFFEE WITH FRESH MILK
  {
    id: "coldbrew-fresh-milk",
    englishName: "COLDBREW COFFEE WITH FRESH MILK",
    vietnameseName: "Coldbrew Coffee với sữa tươi",
    groupId: "3",
    ingredients: [
      {
        name: "Cà phê coldbrew",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Syrup Vanila",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 100,
      },
    ],
    instructionSteps: [
      "Rót cà phê vào ly và cho syrup vào khuấy đều",
      "Thêm đá đầy ly",
    ],
  },
  
  // HALLABONG COLD BREW COFFEE
  {
    id: "hallabong-coldbrew",
    englishName: "HALLABONG COLD BREW COFFEE",
    vietnameseName: "Hallabong Cold Brew Coffee",
    groupId: "3",
    ingredients: [
      {
        name: "Cà phê coldbrew",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 180,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "khoanh",
        quantity: 2,
      },
      {
        name: "Xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho mứt vào ly và rót cà phê vào khuấy đều",
      "Thêm đá đầy ly",
      "Trang trí 2 khoanh quýt tươi và lá xạ hương",
    ],
  },
  
  // HAZELNUT COLDBREW COFFEE
  {
    id: "hazelnut-coldbrew",
    englishName: "HAZELNUT COLDBREW COFFEE",
    vietnameseName: "Hazelnut Coldbrew Coffee",
    groupId: "3",
    ingredients: [
      {
        name: "Cà phê coldbrew",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 180,
      },
      {
        name: "Syrup Hazelnut",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
    ],
    instructionSteps: [
      "Rót cà phê vào ly và cho syrup vào khuấy đều",
      "Thêm đá đầy ly",
    ],
  },
  
  // CARAMEL SALTED CREAM COLDBREW
  {
    id: "caramel-salted-cream-coldbrew",
    englishName: "CARAMEL SALTED CREAM COLDBREW",
    vietnameseName: "Caramel Salted Cream Coldbrew",
    groupId: "3",
    ingredients: [
      {
        name: "Cà phê coldbrew",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 180,
      },
      {
        name: "Syrup Vanila",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Kem béo",
        brand: "Nhật Hương",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Sauce Salted Caramel",
        brand: "Da Vinci",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Cà phê hạt",
        brand: "Arabica",
        unitsOfMeasurement: "hạt",
        quantity: 3,
      },
    ],
    instructionSteps: [
      "Rót cà phê và syrup vào ly khuấy đều",
      "Thêm đá cách miệng ly 1cm",
      "Đánh bông hỗn hợp kem béo và sốt caramel, rót vào ly",
      "Trang trí 3 hạt cà phê",
    ],
  },

  // ========== TRÀ TRÁI CÂY (FRUIT TEA) GROUP ==========
  // TRÀ MƠ ĐÀO (Peach Apricot Tea) - ID: 1
  {
    id: "tra-mo-dao",
    englishName: "TRÀ MƠ ĐÀO",
    vietnameseName: "Trà mơ đào",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà đen",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Sốt Mơ đào",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Cốt tắc",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Cam vàng",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 2,
      },
      {
        name: "Đào ngâm",
        brand: "Shuangfu",
        unitsOfMeasurement: "miếng",
        quantity: 3,
      },
      {
        name: "Mơ sấy dẻo",
        brand: "-",
        unitsOfMeasurement: "viên",
        quantity: 3,
      },
      {
        name: "Cam sấy",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 1,
      },
      {
        name: "Xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 5 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn hợp ra ly và topping đào ngâm",
      "Thêm mơ sấy và trang trí cam khô, xạ hương",
    ],
  },
  
  // TRÀ VẢI BÁ TƯỚC (Earl Grey Lychee Tea) - ID: 2
  {
    id: "tra-vai-ba-tuoc",
    englishName: "TRÀ VẢI BÁ TƯỚC",
    vietnameseName: "Trà vải bá tước",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà đen",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Mứt vải",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 35,
      },
      {
        name: "Syrup Smoky Early Tea",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Cốt chanh",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Vải lọn",
        brand: "NIF",
        unitsOfMeasurement: "quả",
        quantity: 3,
      },
      {
        name: "Chanh khô",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 1,
      },
      {
        name: "Lá rosemary",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 5 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn hợp ra ly và topping vải ngâm",
      "Trang trí chanh khô và rosemary",
    ],
  },
  
  // TRÀ QUẢ MỌNG (Berry Tea) - ID: 3
  {
    id: "tra-qua-mong",
    englishName: "TRÀ QUẢ MỌNG",
    vietnameseName: "Trà quả mọng",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Syrup Dâu",
        brand: "Boduo",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Syrup Việt quất",
        brand: "Boduo",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Syrup Mâm xôi",
        brand: "Boduo",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Tắc",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Đường",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Dâu",
        brand: "-",
        unitsOfMeasurement: "trái",
        quantity: 1,
      },
      {
        name: "Việt quất",
        brand: "-",
        unitsOfMeasurement: "trái",
        quantity: 5,
      },
      {
        name: "Mâm xôi",
        brand: "-",
        unitsOfMeasurement: "trái",
        quantity: 5,
      },
      {
        name: "Chanh khô",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 1,
      },
      {
        name: "Hoa tươi",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 4,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 6 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn hợp ra ly và topping 3 loại quả mọng tươi",
      "Trang trí chanh khô và hoa tươi",
    ],
  },
  
  // TRÀ NHO XANH HOA NHÀI (Green Grape Jasmine Tea) - ID: 4
  {
    id: "tra-nho-xanh-hoa-nhai",
    englishName: "TRÀ NHO XANH HOA NHÀI",
    vietnameseName: "Trà nho xanh hoa nhài",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Mứt nho xanh kiwi",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Mứt hoa nhài",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Cốt chanh",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 3,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Nho xanh",
        brand: "-",
        unitsOfMeasurement: "quả",
        quantity: 3,
      },
      {
        name: "Chanh khô",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 1,
      },
      {
        name: "Hoa cơm cháy",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 5 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn ra ly, topping nho tươi (bổ đôi)",
      "Trang trí chanh khô, lá dứa",
    ],
  },
  
  // TRÀ LÊ HOA ANH ĐÀO (Pear Cherry Blossom Tea) - ID: 5
  {
    id: "tra-le-hoa-anh-dao",
    englishName: "TRÀ LÊ HOA ANH ĐÀO",
    vietnameseName: "Trà lê hoa anh đào",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Mứt lê hoa anh đào",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 45,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Thạch nổ hồng",
        brand: "Shuangfu",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Lê tươi",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Hoa hồng sấy khô",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 3 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn ra ly, topping thạch nổ",
      "Trang trí lê tươi và rắc vụn hoa",
    ],
  },
  
  // TRÀ LỰU HIBISCUS (Pomegranate Hibiscus Tea) - ID: 6
  {
    id: "tra-luu-hibiscus",
    englishName: "TRÀ LỰU HIBISCUS",
    vietnameseName: "Trà lựu hibiscus",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Mứt lựu nha đam",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Syrup Mixology Hibiscus Punch",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Tắc",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Lựu tươi",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Hoa Hibicus đóng lon",
        brand: "NIF",
        unitsOfMeasurement: "bông",
        quantity: 2,
      },
      {
        name: "Lá rosemary",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 5 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn ra ly, topping lựu tươi và hibiscus đóng lon",
      "Trang trí lá rosemary",
    ],
  },
  
  // TRÀ QUÝT GỪNG MẬT ONG (Tangerine Ginger Honey Tea) - ID: 7
  {
    id: "tra-quyt",
    englishName: "TRÀ QUÝT",
    vietnameseName: "Trà quýt",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 120,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Nước ép quýt cô đặc",
        brand: "Sunquick",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Gừng mật ong",
        brand: "Vi Á",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "Khoanh",
        quantity: 3,
      },
      {
        name: "Hoa cơm cháy",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 2 - 5 vào shake, rót trà vào",
      "Thêm đá và shake mạnh",
      "Rót hỗn ra ly, topping quýt tươi",
      "Trang trí hoa cơm cháy",
    ],
  },

  {
    id: "tra-quyt-gung-mat-ong-nong",
    englishName: "TRÀ QUÝT GỪNG MẬT ONG NÓNG",
    vietnameseName: "Trà quýt gừng mật ong nóng",
    groupId: "4",
    ingredients: [
      {
        name: "Cốt trà lài",
        brand: "Benny",
        unitsOfMeasurement: "ml",
        quantity: 100,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      // {
      //   name: "Nước ép quýt cô đặc",
      //   brand: "Sunquick",
      //   unitsOfMeasurement: "ml",
      //   quantity: 5,
      // },
      {
        name: "Gừng mật ong",
        brand: "Vi Á",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Nước đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "Khoanh",
        quantity: 3,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 100,
      },
    ],
    instructionSteps: [
      "Cho tất cả và chung",
      "Cho nước sôi và khuấy"
    ],
  },

  // ========== ĐÁ XAY CÀ PHÊ (BLENDED COFFEE) GROUP ==========
  // MOCHA
  {
    id: "mocha-blended",
    englishName: "MOCHA",
    vietnameseName: "Mocha",
    groupId: "5",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Cà phê hạt",
        brand: "Mixed",
        unitsOfMeasurement: "hat",
        quantity: 2,
      },
      {
        name: "Sauce chocolate",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 35,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-6 + đá vào máy xay. Xay 30s",
      "Dùng sauce choco trang trí bên trong thành ly và rót hỗn hợp vào ly",
      "Bắt whip và trang trí thêm sauce chocolate",
    ],
  },
  
  // HELZANUT
  {
    id: "helzanut-blended",
    englishName: "HELZANUT",
    vietnameseName: "Helzanut",
    groupId: "5",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Cà phê hạt",
        brand: "Mixed",
        unitsOfMeasurement: "hat",
        quantity: 2,
      },
      {
        name: "Syrup Helzanut",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 35,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Vụn dẻ cười",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 3,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1 - 6 + đá vào máy xay. Xay 30s",
      "Rót hỗn hợp vào ly và bắt whip",
      "Trang trí vụn dẻ cười",
    ],
  },
  
  // PEANUT
  {
    id: "peanut-blended",
    englishName: "PEANUT",
    vietnameseName: "Peanut",
    groupId: "5",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Cà phê hạt",
        brand: "Mixed",
        unitsOfMeasurement: "hat",
        quantity: 2,
      },
      {
        name: "Sauce Peanut",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 25,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 35,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Đậu phộng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-7 + đá vào máy xay. Xay 30s",
      "Dùng sauce peanut trang trí bên trong thành ly và rót hỗn hợp vào ly",
      "Bắt whip và rắc đậu phộng trang trí",
    ],
  },
  
  // CARAMEL
  {
    id: "caramel-blended",
    englishName: "CARAMEL",
    vietnameseName: "Caramel",
    groupId: "5",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "gr",
        quantity: 18,
      },
      {
        name: "Cà phê hạt",
        brand: "Mixed",
        unitsOfMeasurement: "hat",
        quantity: 2,
      },
      {
        name: "Sauce Salted Caramel",
        brand: "Da Vinci",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 35,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1 - 6 + đá vào máy xay. Xay 30s",
      "Dùng sauce caramel trang trí bên trong thành ly và rót hỗn hợp vào ly",
      "Bắt whip và trang trí thêm sauce caramel",
    ],
  },

  // ========== ĐÁ XAY KHÔNG CÀ PHÊ (BLENDED COFFEE-FREE) GROUP ==========
  // JAVA CHIP
  {
    id: "java-chip",
    englishName: "JAVA CHIP",
    vietnameseName: "Java Chip",
    groupId: "6",
    ingredients: [
      {
        name: "Bột cacao",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
      {
        name: "Sauce chocolate",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 25,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Bột frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Kẹo socola chip",
        brand: "-",
        unitsOfMeasurement: "viên",
        quantity: 10,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1 - 6 + đá vào máy xay. Xay 30s",
      "Rót hỗn hợp vào ly và bắt whip",
      "Trang trí keo socola",
    ],
  },
  
  // MATCHA
  {
    id: "matcha-blended",
    englishName: "MATCHA",
    vietnameseName: "Matcha",
    groupId: "6",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 8,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 35,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1 - 6 + đá vào máy xay. Xay 30s",
      "Rót hỗn hợp vào ly và bắt whip",
      "Rắc bột matcha trang trí",
    ],
  },
  
  // PINACOLADA
  {
    id: "pinacolada",
    englishName: "PINACOLADA",
    vietnameseName: "Pinacolada",
    groupId: "6",
    ingredients: [
      {
        name: "Syrup Pinacolada",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 25,
      },
      {
        name: "Cốt dừa",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Nước đường",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Sữa tươi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 50,
      },
      {
        name: "Thơm ngâm",
        brand: "NIF",
        unitsOfMeasurement: "khoanh",
        quantity: 1,
      },
      {
        name: "Vụn dừa nướng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Thơm khô",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 2,
      },
      {
        name: "Lá rosemary",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-5 + đá vào máy xay. Xay 30s",
      "Dăm nửa khoanh thơm ngâm trong ly và rót hỗn hợp vào ly",
      "Rắc vụn dừa nướng và trang trí thơm khô, lá rosemary",
    ],
  },
  
  // CHEESE BISCUITS
  {
    id: "cheese-biscuits",
    englishName: "CHEESE BISCUITS",
    vietnameseName: "Cheese Biscuits",
    groupId: "6",
    ingredients: [
      {
        name: "Bánh quy phô mai",
        brand: "Ritz",
        unitsOfMeasurement: "cái",
        quantity: 2,
      },
      {
        name: "Bột phô mai",
        brand: "Eurodeli",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
      {
        name: "Frappe",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
      {
        name: "Đá",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 250,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1 - 6 + đá vào máy xay. Xay 30s",
      "Rót hỗn hợp vào ly và bắt whip",
      "Rắc bột phô mai trang trí",
    ],
  },

  // ========== TRÀ SỮA (MILK TEA) GROUP ==========
  // TRÀ SỮA BÁ TƯỚC
  {
    id: "tra-sua-ba-tuoc",
    englishName: "TRÀ SỮA BÁ TƯỚC",
    vietnameseName: "Trà sữa bá tước",
    groupId: "7",
    ingredients: [
      {
        name: "Cốt trà sữa",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Syrup Smoky Earl Grey",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 20,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Trân châu",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
    ],
    instructionSteps: [
      "Cho trà sữa, syrup và đường vào ly, khuấy đều",
      "Thêm trân châu vào ly và cho đá đầy ly",
    ],
  },
  
  // TRÀ SỮA Ô LONG PHONG LAN
  {
    id: "tra-sua-o-long-phong-lan",
    englishName: "TRÀ SỮA Ô LONG PHONG LAN",
    vietnameseName: "Trà sữa ô long phong lan",
    groupId: "7",
    ingredients: [
      {
        name: "Cốt trà sữa ô long Phong Lan",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Trân châu 3Q",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Hoa cơm cháy",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho trà sữa và đường vào ly, khuấy đều",
      "Thêm đá vào ly và múc trân châu vào",
      "Trang trí hoa cơm cháy",
    ],
  },
  
  // TRÀ SỮA QUẾ GỪNG
  {
    id: "tra-sua-que-gung",
    englishName: "TRÀ SỮA QUẾ GỪNG",
    vietnameseName: "Trà sữa quế gừng",
    groupId: "7",
    ingredients: [
      {
        name: "Cốt trà sữa ô long Phong Lan",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Mứt gừng",
        brand: "Vị Á",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
      {
        name: "Trân châu",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Quế cây khô",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
    ],
    instructionSteps: [
      "Cho trà sữa, mứt và đường vào ly, khuấy đều",
      "Thêm đá vào ly và múc trân châu vào",
      "Cắm cây quế trang trí",
    ],
  },
  
  // TRÀ SỮA GẠO RANG
  {
    id: "tra-sua-gao-rang",
    englishName: "TRÀ SỮA GẠO RANG",
    vietnameseName: "Trà sữa gạo rang",
    groupId: "7",
    ingredients: [
      {
        name: "Cốt trà sữa gạo rang",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Trân châu 3Q",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Hoa cơm cháy",
        brand: "-",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho trà sữa và đường vào ly, khuấy đều",
      "Thêm đá vào ly và múc trân châu vào",
      "Trang trí hoa cơm cháy",
    ],
  },
  
  // TRÀ SỮA CHÔM CHÔM
  {
    id: "tra-sua-chom-chom",
    englishName: "TRÀ SỮA CHÔM CHÔM",
    vietnameseName: "Trà sữa chôm chôm",
    groupId: "7",
    ingredients: [
      {
        name: "Cốt trà sữa",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 180,
      },
      {
        name: "Syrup Helzanut",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Cà phê",
        brand: "Mixed",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 15,
      },
      {
        name: "Chôm chôm",
        brand: "NIF",
        unitsOfMeasurement: "quả",
        quantity: 5,
      },
    ],
    instructionSteps: [
      "Nghiền 2 quả chôm chôm trong ly",
      "Cho nguyên liệu từ 1-4 (cốt trà, syrup, cà phê, đường) vào ly, khuấy đều",
      "Thêm đá vào ly và topping 3 quả chôm chôm",
    ],
  },

  // ========== NƯỚC ÉP (JUICE) GROUP ==========
  // CAM - CÀ RỐT (Orange - Carrot)
  {
    id: "cam-ca-rot",
    englishName: "CAM - CÀ RỐT",
    vietnameseName: "Cam - cà rốt",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Cam tươi",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Nước cốt",
        brand: "Cà rốt tươi",
        unitsOfMeasurement: "ml",
        quantity: 50,
      },
      {
        name: "Muối",
        brand: "-",
        unitsOfMeasurement: "vài hạt",
        quantity: 1,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Cam vàng",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 2,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Vắt cam lấy nước cốt rót vào ly",
      "Cho muối + đường vào ly khuấy đều",
      "Thêm đá đầy ly, ép cà rốt rót vào",
      "Decor cam vàng, lá xạ hương",
    ],
  },
  
  // LƯU (Pomegranate)
  {
    id: "luu",
    englishName: "LƯU",
    vietnameseName: "Lựu",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Lưu tươi",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Lưu tươi",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Ép lấy nước cốt rót vào ly",
      "Cho đường vào ly khuấy đều",
      "Thêm đá đầy ly và decor lưu tươi, lá xạ hương",
    ],
  },
  
  // LÊ (Pear)
  {
    id: "le",
    englishName: "LÊ",
    vietnameseName: "Lê",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Lê tươi",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Lê tươi",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Ép lấy nước cốt rót vào ly",
      "Cho đường vào ly khuấy đều",
      "Thêm đá đầy ly và decor lê tươi (cắt hạt lựu), lá xạ hương",
    ],
  },
  
  // NHO XANH (Green Grape)
  {
    id: "nho-xanh",
    englishName: "NHO XANH",
    vietnameseName: "Nho xanh",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Nho tươi",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Nho tươi",
        brand: "-",
        unitsOfMeasurement: "quả",
        quantity: 2,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Muối",
        brand: "-",
        unitsOfMeasurement: "vài hạt",
        quantity: 1,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Ép lấy nước cốt rót vào ly",
      "Cho đường + muối vào ly khuấy đều",
      "Thêm đá đầy ly và decor nho tươi, lá xạ hương",
    ],
  },
  
  // TÁO XANH (Green Apple)
  {
    id: "tao-xanh",
    englishName: "TÁO XANH",
    vietnameseName: "Táo xanh",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Táo tươi",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Táo tươi",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 25,
      },
      {
        name: "Muối",
        brand: "-",
        unitsOfMeasurement: "vài hạt",
        quantity: 1,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Ép lấy nước cốt rót vào ly",
      "Cho đường + muối vào ly khuấy đều",
      "Thêm đá đầy ly và decor táo tươi, lá xạ hương",
    ],
  },
  
  // QUÝT (Mandarin)
  {
    id: "quyt",
    englishName: "QUÝT",
    vietnameseName: "Quýt",
    groupId: "8",
    ingredients: [
      {
        name: "Nước cốt",
        brand: "Quýt tươi",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "quả",
        quantity: 1,
      },
      {
        name: "Đường",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Lá xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Quýt lột vỏ, ép lấy nước cốt rót vào ly",
      "Cho đường vào ly khuấy đều",
      "Thêm đá đầy ly và decor quýt tươi, lá xạ hương",
    ],
  },

  // ========== MATCHA/HOUJICHA GROUP ==========
  // MATCHA LATTE
  {
    id: "matcha-latte",
    englishName: "MATCHA LATTE",
    vietnameseName: "Matcha Latte",
    groupId: "9",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Syrup vanila",
        brand: "Pomona",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
    ],
    instructionSteps: [
      "Rây bột matcha vào bát",
      "Thêm 30ml nước sôi, dùng whisk khuấy tan",
      "Cho tất cả nguyên liệu còn lại vào ly, khuấy đều",
      "Thêm đá đầy ly và rót matcha vào",
    ],
  },
  
  // MATCHA LATTE OAT MILK
  {
    id: "matcha-latte-oat-milk",
    englishName: "MATCHA LATTE OAT MILK",
    vietnameseName: "Matcha Latte Oat Milk",
    groupId: "9",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Sữa yến mạch",
        brand: "Qatside",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 20,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
    ],
    instructionSteps: [
      "Rây bột matcha vào bát",
      "Thêm 30ml nước sôi, dùng whisk khuấy tan",
      "Cho tất cả nguyên liệu còn lại vào ly, khuấy đều",
      "Thêm đá đầy ly và rót matcha vào",
    ],
  },
  
  // MATCHA COLD WISK
  {
    id: "matcha-cold-wisk",
    englishName: "MATCHA COLD WISK",
    vietnameseName: "Matcha Cold Wisk",
    groupId: "9",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Syrup vani",
        brand: "Da Vinci",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Whipping",
        brand: "On Top",
        unitsOfMeasurement: "bông",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Rây bột matcha vào cốc đo",
      "Thêm 50ml sữa tươi và dùng frother khuấy tan matcha",
      "Cho syrup + sữa đặc + 100ml sữa tươi vào ly, khuấy đều",
      "Thêm đá đầy ly và rót matcha vào",
      "Bắt whip",
    ],
  },
  
  // MATCHA STRAWBERRY CREAMS
  {
    id: "matcha-strawberry-creams",
    englishName: "MATCHA STRAWBERRY CREAMS",
    vietnameseName: "Matcha Strawberry Creams",
    groupId: "9",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 3,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Syrup dâu",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
    ],
    instructionSteps: [
      "Hoà tan bột matcha với 30ml nước sôi, dùng frother",
      "Cho sữa đặc + sữa tươi + syrup vào ly, khuấy đều",
      "Thêm đá đầy ly và rót matcha vào",
    ],
  },
  
  // MATCHA WITH FRESH COCONUT
  {
    id: "matcha-fresh-coconut",
    englishName: "MATCHA WITH FRESH COCONUT",
    vietnameseName: "Matcha với dừa tươi",
    groupId: "9",
    ingredients: [
      {
        name: "Nước dừa tươi",
        brand: "Cocoxim",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Đường nước",
        brand: "Glofood",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Bột matcha",
        brand: "Uji",
        unitsOfMeasurement: "gr",
        quantity: 3,
      },
    ],
    instructionSteps: [
      "Cho nước dừa và đường vào ly, khuấy đều",
      "Thêm đá cách miệng ly 1cm",
      "Cho matcha và kem béo vào cốc đo, dùng frother khuấy đều",
      "Rót vào ly",
    ],
  },

  // ========== THỨC UỐNG KHÁC (OTHER DRINKS) GROUP ==========
  // SỮA CHUÔI (Banana Milk)
  {
    id: "sua-chuoi",
    englishName: "SỮA CHUÔI",
    vietnameseName: "Sữa chuối",
    groupId: "10",
    ingredients: [
      {
        name: "Bột chuối",
        brand: "Pomona",
        unitsOfMeasurement: "gr",
        quantity: 10,
      },
      {
        name: "Nước đường",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 20,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 20,
      },
      {
        name: "Sữa tươi",
        brand: "Barista Milk",
        unitsOfMeasurement: "ml",
        quantity: 180,
      },
    ],
    instructionSteps: [
      "Hoà tan bột chuối với 20ml nước sôi",
      "Rót sữa tươi + sữa đặc + đường vào ly, khuấy đều",
      "Thêm đá",
    ],
  },
  
  // HALLABONG YAKULK
  {
    id: "hallabong-yakulk",
    englishName: "HALLABONG YAKULK",
    vietnameseName: "Hallabong Yakulk",
    groupId: "10",
    ingredients: [
      {
        name: "Syrup sữa chua",
        brand: "Boduo",
        unitsOfMeasurement: "ml",
        quantity: 40,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Nước ép quýt cô đặc",
        brand: "Sunquick",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Thạch nổ hồng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 30,
      },
      {
        name: "Xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 80,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-3 + nước sôi vào shake, khuấy đều",
      "Thêm đá và shake mạnh",
      "Rót hỗn hợp ra ly",
      "Thêm topping thạch nổ và decor xạ hương",
    ],
  },
  
  // HALLABONG YOGURT
  {
    id: "hallabong-yogurt",
    englishName: "HALLABONG YOGURT",
    vietnameseName: "Hallabong Yogurt",
    groupId: "10",
    ingredients: [
      {
        name: "Sữa chua có đường",
        brand: "Vinamilk",
        unitsOfMeasurement: "hủ",
        quantity: 1,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Nước ép quýt cô đặc",
        brand: "Sunquick",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Cốt chanh",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "ml",
        quantity: 15,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "khoanh",
        quantity: 3,
      },
      {
        name: "Xạ hương",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-5 vào ly, khuấy đều",
      "Thêm đá và topping quýt tươi",
      "Decor lá hương thảo",
    ],
  },
  
  // HALLABONG SODA
  {
    id: "hallabong-soda",
    englishName: "HALLABONG SODA",
    vietnameseName: "Hallabong Soda",
    groupId: "10",
    ingredients: [
      {
        name: "Nước ép quýt cô đặc",
        brand: "Sunquick",
        unitsOfMeasurement: "ml",
        quantity: 10,
      },
      {
        name: "Mứt quýt",
        brand: "Cholocwon",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Cốt chanh",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Nước đường",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 5,
      },
      {
        name: "Soda",
        brand: "Schweppes",
        unitsOfMeasurement: "lon",
        quantity: 1,
      },
      {
        name: "Quýt tươi",
        brand: "-",
        unitsOfMeasurement: "khoanh",
        quantity: 2,
      },
      {
        name: "Chanh khô",
        brand: "-",
        unitsOfMeasurement: "lát",
        quantity: 2,
      },
      {
        name: "Lá hương thảo",
        brand: "-",
        unitsOfMeasurement: "nhánh",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho nguyên liệu từ 1-4 vào ly, khuấy đều",
      "Cho đá đầy ly và fill up soda",
      "Trang trí chanh khô bên trong ly",
      "Trang trí quýt tươi bên trên với lá hương thảo",
    ],
  },

  // ========== NGUYÊN LIỆU SƠ CHẾ (PREPARED INGREDIENTS) GROUP ==========
  // CÀ PHÊ Ủ LẠNH (COLDBREW)
  {
    id: "coldbrew-base",
    englishName: "CÀ PHÊ Ủ LẠNH",
    vietnameseName: "Cà phê ủ lạnh (Coldbrew)",
    groupId: "11",
    ingredients: [
      {
        name: "Cà phê",
        brand: "Arabica",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Nước lọc",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 1000,
      },
    ],
    instructionSteps: [
      "Cho nước vào dụng cụ ủ, sau đó cho cà phê vào",
      "Khuấy nhẹ đến khi cà phê ướt đều",
      "Đậy nắp và đặt vào tủ lạnh, bảo quản 12 giờ",
      "Sau 12 giờ, lọc lấy cà phê và sử dụng",
      "Lưu ý: Cà phê cần được xay ở mức độ thô",
    ],
  },
  
  // CỐT TRÀ ĐEN (BLACK TEA CONCENTRATE)
  {
    id: "cot-tra-den",
    englishName: "CỐT TRÀ ĐEN",
    vietnameseName: "Cốt trà đen",
    groupId: "11",
    ingredients: [
      {
        name: "Trà đen",
        brand: "Benny",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 1000,
      },
    ],
    instructionSteps: [
      "Cho trà và nước sôi vào dụng cụ, ủ trong 9 phút",
      "Lọc lấy cốt trà, sau đó thêm đá đến khi thể tích đạt 1200ml và khuấy đều để làm lạnh",
      "Rót vào dụng cụ ủ để sử dụng",
      "Thu được 1200ml cốt trà",
    ],
  },
  
  // CỐT TRÀ LÀI (JASMINE TEA CONCENTRATE)
  {
    id: "cot-tra-lai",
    englishName: "CỐT TRÀ LÀI",
    vietnameseName: "Cốt trà lài",
    groupId: "11",
    ingredients: [
      {
        name: "Trà lài",
        brand: "Benny",
        unitsOfMeasurement: "gr",
        quantity: 40,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 1000,
      },
    ],
    instructionSteps: [
      "Cho trà và nước sôi vào dụng cụ, ủ trong 9 phút",
      "Lọc lấy cốt trà, sau đó thêm đá đến khi thể tích đạt 1200ml và khuấy đều để làm lạnh",
      "Rót vào dụng cụ ủ để sử dụng",
      "Thu được 1200ml cốt trà",
    ],
  },
  
  // CỐT TRÀ SỮA TRUYỀN THỐNG (TRADITIONAL MILK TEA CONCENTRATE)
  {
    id: "cot-tra-sua-truyen-thong",
    englishName: "CỐT TRÀ SỮA TRUYỀN THỐNG",
    vietnameseName: "Cốt trà sữa truyền thống",
    groupId: "11",
    ingredients: [
      {
        name: "Trà đen",
        brand: "Benny",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Trà lài",
        brand: "Benny",
        unitsOfMeasurement: "gr",
        quantity: 20,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 2000,
      },
      {
        name: "Bột sữa",
        brand: "90A",
        unitsOfMeasurement: "gr",
        quantity: 200,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 200,
      },
      {
        name: "Muối hồng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho trà và nước sôi vào dụng cụ, ủ trong 30 phút",
      "Ép nhẹ lá trà, sau đó lọc lấy cốt trà",
      "Cho bột sữa + sữa đặc + muối vào và khuấy đều đến khi hỗn hợp tan hoàn toàn",
      "Sử dụng rây lọc lại một lần nữa và bảo quản trong tủ lạnh",
    ],
  },
  
  // CỐT TRÀ SỮA Ô LONG PHONG LAN (PHONG LAN OOLONG MILK TEA CONCENTRATE)
  {
    id: "cot-tra-sua-o-long-phong-lan",
    englishName: "CỐT TRÀ SỮA Ô LONG PHONG LAN",
    vietnameseName: "Cốt trà sữa ô long phong lan",
    groupId: "11",
    ingredients: [
      {
        name: "Trà ô long Phong Lan",
        brand: "Phương Hoàng",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 2000,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 200,
      },
      {
        name: "Bột sữa",
        brand: "90A",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Sữa tươi",
        brand: "Western",
        unitsOfMeasurement: "gr",
        quantity: 200,
      },
      {
        name: "Muối hồng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho trà và nước sôi vào dụng cụ, ủ trong 25 phút",
      "Lọc lấy cốt trà",
      "Cho bột sữa + sữa đặc vào và khuấy đều đến khi hỗn hợp tan hoàn toàn",
      "Sử dụng rây lọc lại một lần nữa và bảo quản trong tủ lạnh",
    ],
  },
  
  // CỐT TRÀ SỮA GẠO RANG (ROASTED RICE MILK TEA CONCENTRATE)
  {
    id: "cot-tra-sua-gao-rang",
    englishName: "CỐT TRÀ SỮA GẠO RANG",
    vietnameseName: "Cốt trà sữa gạo rang",
    groupId: "11",
    ingredients: [
      {
        name: "Trà gạo rang",
        brand: "Novia",
        unitsOfMeasurement: "gr",
        quantity: 80,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 2000,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Bột sữa",
        brand: "90A",
        unitsOfMeasurement: "gr",
        quantity: 200,
      },
      {
        name: "Muối hồng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cho trà và nước sôi vào cốc ủ, ủ trong 15 phút",
      "Cho bột sữa + sữa đặc vào cốc khác",
      "Lọc trà vào cốc chứa hỗn hợp sữa và khuấy đều đến khi hỗn hợp tan hoàn toàn",
      "Sử dụng rây lọc lại một lần nữa, để nguội và bảo quản trong tủ lạnh",
    ],
  },
  
  // KEM SỮA (Milk Cream)
  {
    id: "kem-sua",
    englishName: "KEM SỮA",
    vietnameseName: "Kem sữa",
    groupId: "11",
    ingredients: [
      {
        name: "Kem béo",
        brand: "Nhất Hương",
        unitsOfMeasurement: "gr",
        quantity: 500,
      },
      {
        name: "Sữa đặc",
        brand: "NSPN",
        unitsOfMeasurement: "gr",
        quantity: 50,
      },
      {
        name: "Muối hồng",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
    ],
    instructionSteps: [
      "Cho tất cả nguyên liệu vào ca, sử dụng máy đánh trứng đánh đều hỗn hợp",
      "Đánh đến khi hỗn hợp sánh mịn, bảo quản tủ mát",
    ],
  },
  
  // WHIPPING (ON TOP)
  {
    id: "whipping-on-top",
    englishName: "WHIPPING (ON TOP)",
    vietnameseName: "Whipping (On Top)",
    groupId: "11",
    ingredients: [
      {
        name: "Kem On Top",
        brand: "RICH'S",
        unitsOfMeasurement: "gr",
        quantity: 450,
      },
      {
        name: "Gas",
        brand: "-",
        unitsOfMeasurement: "viên",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Đổ kem vào, lắp bình",
      "Lắp 1 viên gas và lắc mạnh bình khoảng 20 lần. Sử dụng và bảo quản trong tủ mát",
      "Mỗi lần sử dụng lắc mạnh bình 5-6 lần và rửa sạch với kem sau khi sử dụng",
      "Khi lượng kem trong bình còn nhiều nhưng hỗn hợp ra lỏng, thay thế 1 viên gas mới và lắc mạnh bình",
    ],
  },
  
  // THẠCH CHUÔI (Banana Jelly)
  {
    id: "thach-chuoi",
    englishName: "THẠCH CHUÔI",
    vietnameseName: "Thạch chuối",
    groupId: "11",
    ingredients: [
      {
        name: "Bột matcha",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 5,
      },
      {
        name: "Bột rau câu dẻo",
        brand: "-",
        unitsOfMeasurement: "gói",
        quantity: 1,
      },
      {
        name: "Đường cát",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 75,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 800,
      },
    ],
    instructionSteps: [
      "Cho bột jelly và bột matcha vào nước sôi khuấy cho tan hoàn toàn",
      "Sử dụng vợt lọc vào khuôn. Để nguội và bảo quản lạnh",
      "Cắt thạch thành 32 phần",
    ],
  },
  
  // TRÂN CHÂU TRUYỀN THỐNG (Traditional Boba/Tapioca Pearls)
  {
    id: "tran-chau-truyen-thong",
    englishName: "TRÂN CHÂU TRUYỀN THỐNG",
    vietnameseName: "Trân châu truyền thống",
    groupId: "11",
    ingredients: [
      {
        name: "Trân châu",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 500,
      },
      {
        name: "Đường cát",
        brand: "-",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Đường đen",
        brand: "Boduo",
        unitsOfMeasurement: "gr",
        quantity: 100,
      },
      {
        name: "Nước sôi",
        brand: "-",
        unitsOfMeasurement: "ml",
        quantity: 2000,
      },
    ],
    instructionSteps: [
      "Bật chế độ nấu TC, cho nước vào nồi",
      "Nước sôi, cho TC vào ray sàng nhẹ rồi thả từ từ vào nồi. Vừa thả TC vừa dùng tay khuấy đều để trân châu không bị dính",
      "Đậy nắp và nấu trong 25 phút. 10 phút mở nồi đảo TC 1 lần",
      "Sau khi nấu xong, chuyển chế độ ủ TC trong 25 phút",
      "Xong quá trình ủ, đổ TC ra và rửa lại với nước lạnh",
      "Cho lại TC vào nồi + đường cát + đường đen đảo đều",
      "Đậy nắp và bật chế độ bảo ôn để giữ ẩm TC",
      "Trước khi múc TC, đảo đều để TC không bị dính",
    ],
  },
];

// Helper function to get all data
export function getAllBeverageData() {
  return {
    groups: beverageGroups,
    beverages: beverages,
  };
}

// Helper function to get beverages by group
export function getBeveragesByGroup(groupId: string): Beverage[] {
  return beverages.filter((beverage) => beverage.groupId === groupId);
}

// Get a beverage by ID
export function getBeverageById(beverageId: string): Beverage | undefined {
  return beverages.find((beverage) => beverage.id === beverageId);
}

// Get the group for a beverage
export function getGroupByBeverageId(beverageId: string): BeverageGroup | undefined {
  const beverage = beverages.find((b) => b.id === beverageId);
  if (beverage && beverage.groupId) {
    return beverageGroups.find((group) => group.id === beverage.groupId);
  }
  return undefined;
}
