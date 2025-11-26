
export interface Product {
  id: number;
  name: string;
  name_ar?: string;
  brand: string;
  price: number;
  description: string;
  description_ar?: string;
  image: string;
  notes: string[];
  notes_ar?: string[];
  size: string;
  category: string;
  category_ar?: string;
  gender: 'Women' | 'Men' | 'Unisex';
  gender_ar?: string;
  family: string;
  family_ar?: string;
  collection?: string;
  tags?: string[];
}

export interface Review {
  id: number;
  author: string;
  role: string;
  role_ar?: string;
  content: string;
  content_ar?: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: "Amira Benali",
    role: "Verified Buyer",
    role_ar: "عميل موثوق",
    content: "The packaging was exquisite, and the scent 'Midnight Rose' is absolutely hauntingly beautiful. Araluxe is my new go-to for luxury.",
    content_ar: "التغليف كان رائعًا، ورائحة 'Midnight Rose' جميلة بشكل ساحر. هذا المتجر هو وجهتي الجديدة للفخامة.",
    rating: 5
  },
  {
    id: 2,
    author: "Karim Tazi",
    role: "Collector",
    role_ar: "جامع عطور",
    content: "I was looking for a specific vintage oud and found the Royal Collection here. Authenticity is top-notch. Fast delivery to Casablanca.",
    content_ar: "كنت أبحث عن عود عتيق محدد ووجدت المجموعة الملكية هنا. الأصالة ممتازة. توصيل سريع إلى الدار البيضاء.",
    rating: 5
  },
  {
    id: 3,
    author: "Sarah El Idrissi",
    role: "Verified Buyer",
    role_ar: "عميل موثوق",
    content: "Customer service helped me pick the perfect gift for my husband. The packaging feels like a gift in itself. Highly recommended.",
    content_ar: "ساعدتني خدمة العملاء في اختيار الهدية المثالية لزوجي. التغليف يبدو وكأنه هدية بحد ذاته. أنصح به بشدة.",
    rating: 5
  }
];

export const products: Product[] = [
  // --- WOMEN ---
  {
    id: 1,
    name: "Coco Mademoiselle",
    name_ar: "كوكو ماديموزيل",
    brand: "CHANEL",
    price: 1450,
    description: "Irresistibly sexy, irrepressibly spirited. A sparkling Amber fragrance that recalls a daring young Coco Chanel.",
    description_ar: "جذابة بشكل لا يقاوم، مفعمة بالحيوية. عطر عنبر متلألئ يذكرنا بجراءة كوكو شانيل الشابة.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop", 
    notes: ["Orange", "Patchouli", "Turkish Rose"],
    notes_ar: ["برتقال", "باتشولي", "ورد تركي"],
    size: "100ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Oriental",
    family_ar: "شرقي",
    collection: "French Heritage Collection",
    tags: ["Best Seller", "Evening"]
  },
  {
    id: 4,
    name: "Bloom Profumo",
    name_ar: "بلوم بروفومو",
    brand: "GUCCI",
    price: 1180,
    description: "An authentic, single-note jasmine scent that is delicate, sweet, and purely floral, creating a rich white floral scent.",
    description_ar: "رائحة ياسمين أصلية بنوتة واحدة، رقيقة وحلوة وزهرية بامتياز، تخلق رائحة زهور بيضاء غنية.",
    image: "https://foryou.ma/cdn/shop/files/IMG-5453.jpg?v=1703425500&width=1100", 
    notes: ["Jasmine", "Tuberose", "Rangoon Creeper"],
    notes_ar: ["ياسمين", "مسك الروم", "ياسمين هندي"],
    size: "30ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Floral",
    family_ar: "زهري",
    tags: ["Fresh", "Daytime"]
  },
  {
    id: 8,
    name: "Libre Intense",
    name_ar: "ليبر إنتنس",
    brand: "YVES SAINT LAURENT",
    price: 1250,
    description: "The scent of freedom, a statement fragrance for those who live by their own rules.",
    description_ar: "رائحة الحرية، عطر مميز لأولئك الذين يعيشون وفقًا لقواعدهم الخاصة.",
    image: "https://beautysuccess.co/media/catalog/product/cache/c99cef55d98cdf49be7bb6788546ef95/l/i/libre-edp-intense.jpg", 
    notes: ["Lavender", "Orange Blossom", "Vanilla"],
    notes_ar: ["لافندر", "زهر البرتقال", "فانيليا"],
    size: "90ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Oriental",
    family_ar: "شرقي",
    tags: ["Intense", "Winter"]
  },
  {
    id: 10,
    name: "La Vie Est Belle",
    name_ar: "لا في إي بيل",
    brand: "LANCÔME",
    price: 1100,
    description: "A universal declaration to the beauty of life. Iris is the key ingredient of this floral eau de parfum.",
    description_ar: "إعلان عالمي لجمال الحياة. السوسن هو المكون الرئيسي لهذا العطر الزهري.",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop", 
    notes: ["Iris", "Patchouli", "Gourmand"],
    notes_ar: ["سوسن", "باتشولي", "جورماند"],
    size: "75ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Floral",
    family_ar: "زهري",
    tags: ["Sweet", "Classic"]
  },
  {
    id: 11,
    name: "Black Opium",
    name_ar: "بلاك أوبيوم",
    brand: "YVES SAINT LAURENT",
    price: 1300,
    description: "A glam rock fragrance full of mystery and energy. Black coffee accord paired with sensual vanilla.",
    description_ar: "عطر جلام روك مليء بالغموض والطاقة. مزيج القهوة السوداء مع الفانيليا الحسية.",
    image: "https://media.sephora.eu/content/dam/digital/pim/published/Y/YVES_SAINT_LAURENT/P1920022/23512-media_3.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined", 
    notes: ["Black Coffee", "White Flowers", "Vanilla"],
    notes_ar: ["قهوة سوداء", "زهور بيضاء", "فانيليا"],
    size: "50ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Oriental",
    family_ar: "شرقي",
    tags: ["Night", "Sexy"]
  },
   {
    id: 12,
    name: "J'adore Eau de Parfum",
    name_ar: "جادور أو دو بارفان",
    brand: "DIOR",
    price: 1550,
    description: "Finely crafted down to the last detail, like a custom-made flower. Essence of Ylang-Ylang from the Comoros.",
    description_ar: "مصمم بدقة حتى آخر تفصيل، مثل زهرة مخصصة. جوهر الإيلنغ من جزر القمر.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    notes: ["Ylang-Ylang", "Damascus Rose", "Jasmine"],
    notes_ar: ["إيلنغ", "ورد دمشقي", "ياسمين"],
    size: "100ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Women",
    gender_ar: "نساء",
    family: "Floral",
    family_ar: "زهري",
    collection: "French Heritage Collection"
  },

  // --- MEN ---
  {
    id: 2,
    name: "Sauvage Elixir",
    name_ar: "سوفاج إليكسير",
    brand: "DIOR",
    price: 1320,
    description: "Fresh, crisp, and invigorating. Captures the essence of a morning breeze by the Atlantic coast with powerful woody notes.",
    description_ar: "منعش وحيوي. يجسد جوهر نسيم الصباح على ساحل المحيط الأطلسي مع نوتات خشبية قوية.",
    image: "https://shop-beauty.dior.ma/cdn/shop/products/Y0996311_C099600755_E01_GHC_1080x.jpg?v=1641293340", 
    notes: ["Bergamot", "Pepper", "Amberwood"],
    notes_ar: ["برغموت", "فلفل", "خشب العنبر"],
    size: "60ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Men",
    gender_ar: "رجال",
    family: "Fresh",
    family_ar: "منعش",
    tags: ["Best Seller", "Fresh"]
  },
  {
    id: 7,
    name: "Oud Wood",
    name_ar: "عود وود",
    brand: "TOM FORD",
    price: 2850,
    description: "A deep, intense oud fragrance softened by hints of vanilla and spice. The ultimate statement of power.",
    description_ar: "عطر عود عميق ومكثف مخفف بلمسات من الفانيليا والتوابل. البيان النهائي للقوة.",
    image: "https://marionnaud.ma/cdn/shop/products/Capture_d_ecran_2022-02-24_a_11.04.40_1800x1800.png?v=1645697086", 
    notes: ["Oud", "Sandalwood", "Vetiver"],
    notes_ar: ["عود", "خشب الصندل", "نجيل الهند"],
    size: "100ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Men",
    gender_ar: "رجال",
    family: "Woody",
    family_ar: "خشبي",
    collection: "Royal Oud Collection",
    tags: ["Luxury", "Oud"]
  },
  {
    id: 9,
    name: "Eros Flame",
    name_ar: "إيروس فليم",
    brand: "VERSACE",
    price: 980,
    description: "Striking contrast between noble citrus and delicate floral notes, creating a passionate trail.",
    description_ar: "تباين مذهل بين الحمضيات النبيلة والنوتات الزهرية الرقيقة، مما يخلق أثراً شغوفاً.",
    image: "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?q=80&w=800&auto=format&fit=crop", 
    notes: ["Lemon", "Pepper", "Rose"],
    notes_ar: ["ليمون", "فلفل", "ورد"],
    size: "100ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Men",
    gender_ar: "رجال",
    family: "Spicy",
    family_ar: "حار",
    tags: ["Bold", "Youthful"]
  },
  {
    id: 13,
    name: "Bleu de Chanel",
    name_ar: "بلو دو شانيل",
    brand: "CHANEL",
    price: 1600,
    description: "A woody, aromatic fragrance for the man who defies convention; a provocative blend of citrus and woods.",
    description_ar: "عطر خشبي عطري للرجل الذي يتحدى التقاليد؛ مزيج مثير من الحمضيات والأخشاب.",
    image: "https://parfum.homes/cdn/shop/files/519b7lNw8RS._SL1111__1_1445x_e848a851-3438-467f-ac57-a7cbdf28b5cc.webp?v=1699306664&width=823", 
    notes: ["Citrus", "Labdanum", "Sandalwood"],
    notes_ar: ["حمضيات", "لابدانوم", "خشب الصندل"],
    size: "100ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Men",
    gender_ar: "رجال",
    family: "Woody",
    family_ar: "خشبي",
    tags: ["Classic", "Professional"]
  },
  {
    id: 14,
    name: "Acqua Di Gio",
    name_ar: "أكوا دي جيو",
    brand: "GIORGIO ARMANI",
    price: 950,
    description: "Inspired by the fresh sea, warm sun and the richness of the earth. A contemporary expression of masculinity.",
    description_ar: "مستوحى من البحر المنعش، والشمس الدافئة، وثراء الأرض. تعبير معاصر عن الرجولة.",
    image: "https://kosmenia.ma/cdn/shop/files/Armani_acqua_di_gio_eau_de_parfum_P_2048x.jpg?v=1728734786", 
    notes: ["Marine Notes", "Bergamot", "Cedar"],
    notes_ar: ["نوتات بحرية", "برغموت", "أرز"],
    size: "75ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Men",
    gender_ar: "رجال",
    family: "Fresh",
    family_ar: "منعش",
    tags: ["Summer", "Clean"]
  },
  {
    id: 15,
    name: "The One",
    name_ar: "ذا ون",
    brand: "DOLCE & GABBANA",
    price: 1150,
    description: "Elegant and sensual, a fragrance that is both classic and modern, vibrant and engaging.",
    description_ar: "أنيق وحسي، عطر كلاسيكي وعصري في آن واحد، نابض بالحياة وجذاب.",
    image: "https://kosmenia.ma/cdn/shop/products/the_one_for_men_edp_dolce_gabbana_f_grande.jpg?v=1614467223",
    notes: ["Grapefruit", "Ginger", "Tobacco"],
    notes_ar: ["جريب فروت", "زنجبيل", "تبغ"],
    size: "100ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Men",
    gender_ar: "رجال",
    family: "Spicy",
    family_ar: "حار",
    tags: ["Date Night", "Warm"]
  },

  // --- UNISEX ---
  {
    id: 3,
    name: "Soleil Blanc",
    name_ar: "سولاي بلان",
    brand: "TOM FORD",
    price: 2550,
    description: "Warm and radiant, this scent envelops you in a golden glow of amber and citrus, reminiscent of a private island sunset.",
    description_ar: "دافئ ومشرق، يغلفك هذا العطر بتوهج ذهبي من العنبر والحمضيات، يذكرنا بغروب الشمس في جزيرة خاصة.",
    image: "https://beautysuccess.co/media/catalog/product/cache/6c50e39195975ee27448d422dd4412e0/e/a/eau-soleil-blanc-2.jpg", 
    notes: ["Coco de Mer", "Ylang Ylang", "Bergamot"],
    notes_ar: ["كوكو دو مير", "إيلنغ", "برغموت"],
    size: "50ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Oriental",
    family_ar: "شرقي",
    collection: "Rare Flowers Collection",
    tags: ["Summer", "Luxury", "Niche"]
  },
  {
    id: 5,
    name: "Santal 33",
    name_ar: "سانتال 33",
    brand: "LE LABO",
    price: 2200,
    description: "Creamy sandalwood meets spicy cardamom in this unisex fragrance that screams sophisticated luxury.",
    description_ar: "خشب الصندل الكريمي يلتقي بالهيل الحار في هذا العطر للجنسين الذي يصرخ بالفخامة الراقية.",
    image: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=800&auto=format&fit=crop", 
    notes: ["Sandalwood", "Cardamom", "Leather"],
    notes_ar: ["خشب الصندل", "هيل", "جلد"],
    size: "50ml",
    category: "Cologne",
    category_ar: "كولونيا",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Woody",
    family_ar: "خشبي",
    collection: "Prestige Niche Collection",
    tags: ["Niche", "Iconic"]
  },
  {
    id: 6,
    name: "Neroli Portofino",
    name_ar: "نيرولي بورتوفينو",
    brand: "TOM FORD",
    price: 1950,
    description: "A bright explosion of mandarin and orange blossom to uplift your spirits instantly. Crisp and sparkling.",
    description_ar: "انفجار مشرق من الماندرين وزهر البرتقال لرفع معنوياتك على الفور. منعش ومتلألئ.",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.12192.avif", 
    notes: ["Neroli", "Orange Blossom", "Amber"],
    notes_ar: ["نيرولي", "زهر البرتقال", "عنبر"],
    size: "50ml",
    category: "Body Mist",
    category_ar: "معطر جسم",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Fresh",
    family_ar: "منعش",
    tags: ["Citrus", "Light", "Niche"]
  },
  {
    id: 16,
    name: "Baccarat Rouge 540",
    name_ar: "باكارات روج 540",
    brand: "MAISON FRANCIS KURKDJIAN",
    price: 3200,
    description: "Luminous and sophisticated, this amber floral wood breeze lays on the skin like an amber, floral and woody breeze.",
    description_ar: "مضيء وراقي، نسيم الخشب الزهري العنبري يستقر على الجلد مثل نسيم عنبري وزهري وخشبي.",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop", 
    notes: ["Saffron", "Jasmine", "Amberwood"],
    notes_ar: ["زعفران", "ياسمين", "خشب العنبر"],
    size: "70ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Oriental",
    family_ar: "شرقي",
    collection: "Prestige Niche Collection",
    tags: ["Luxury", "Masterpiece", "Niche"]
  },
  {
    id: 17,
    name: "Tobacco Vanille",
    name_ar: "توباكو فانيلي",
    brand: "TOM FORD",
    price: 2900,
    description: "Opulent. Warm. Iconic. Reminiscent of an English gentleman's club and blended with rich spices, vanilla and tobacco flower.",
    description_ar: "فخم. دافئ. أيقوني. يذكرنا بنادي السادة الإنجليزي وممزوج بالتوابل الغنية والفانيليا وزهرة التبغ.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", 
    notes: ["Tobacco Leaf", "Vanilla", "Cocoa"],
    notes_ar: ["أوراق التبغ", "فانيليا", "كاكاو"],
    size: "100ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Spicy",
    family_ar: "حار",
    collection: "Private Blend",
    tags: ["Warm", "Winter", "Niche"]
  },
  {
    id: 18,
    name: "Bal d'Afrique",
    name_ar: "بال دافريك",
    brand: "BYREDO",
    price: 2100,
    description: "A warm and romantic vetiver inspired by Paris in the late 20's and its infatuation with African culture.",
    description_ar: "نجيل الهند الدافئ والرومانسي المستوحى من باريس في أواخر العشرينيات وشغفها بالثقافة الأفريقية.",
    image: "https://bychoukry.ma/cdn/shop/products/BAL-D_AFRIQUE_1200x1200.jpg?v=1574073881", 
    notes: ["Marigold", "Vetiver", "Cedar"],
    notes_ar: ["ماريجولد", "نجيل الهند", "أرز"],
    size: "50ml",
    category: "Perfume",
    category_ar: "عطر",
    gender: "Unisex",
    gender_ar: "للجنسين",
    family: "Woody",
    family_ar: "خشبي",
    tags: ["Artistic", "Unique", "Niche"]
  }
];

export const uniqueBrands = Array.from(new Set(products.map(p => p.brand)));
export const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
export const uniqueGenders = Array.from(new Set(products.map(p => p.gender)));
