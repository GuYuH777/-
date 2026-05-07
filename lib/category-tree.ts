import type { CategoryId, Language, LocalizedText } from "@/types/product";

export type LeafCategory = {
  id: string;
  parentId: string;
  level: 3;
  labels: LocalizedText;
  description: LocalizedText;
  slug: string;
  highSearchVolume: boolean;
  rankingFriendly: boolean;
  recommendedItems: number;
  children: [];
};

export type CategoryNode = {
  id: string;
  parentId?: string;
  level: 1 | 2;
  labels: LocalizedText;
  description: LocalizedText;
  children: Array<CategoryNode | LeafCategory>;
};

const text = (zh: string, en: string, ja: string): Record<Language, string> => ({
  zh,
  en,
  ja
});

const leaf = (
  parentId: string,
  slug: string,
  zh: string,
  en: string,
  ja: string,
  highSearchVolume = true,
  rankingFriendly = true,
  recommendedItems = 15
): LeafCategory => ({
  id: slug,
  parentId,
  level: 3,
  labels: text(zh, en, ja),
  description: text("适合做具体排行榜和搜索落地页。", "Good for a focused ranking and search landing page.", "具体的なランキングページに向いています。"),
  slug,
  highSearchVolume,
  rankingFriendly,
  recommendedItems,
  children: []
});

const branch = (
  id: string,
  labels: LocalizedText,
  description: LocalizedText,
  children: Array<CategoryNode | LeafCategory>,
  parentId?: string
): CategoryNode => ({
  id,
  parentId,
  level: parentId ? 2 : 1,
  labels,
  description,
  children
});

export const categoryTree: CategoryNode[] = [
  branch("digital" satisfies CategoryId, text("数码电子", "Digital & Electronics", "デジタル家電"), text("手机、电脑、音频、影像和智能设备。", "Phones, computers, audio, imaging, and smart devices.", "スマホ、PC、オーディオ、映像、スマート機器。"), [
    branch("phones-tablets", text("手机 / 平板", "Phones & Tablets", "スマホ・タブレット"), text("换机、备用机、平板和学习娱乐设备。", "Main phones, backup phones, tablets, and study devices.", "買い替え、サブ機、タブレット。"), [
      leaf("phones-tablets", "flagship-phones", "旗舰手机", "Flagship Phones", "フラッグシップスマホ", true, true, 20),
      leaf("phones-tablets", "midrange-phones", "中端手机", "Midrange Phones", "ミドルレンジスマホ", true, true, 20),
      leaf("phones-tablets", "budget-phones", "千元机", "Budget Phones", "低価格スマホ", true, true, 18),
      leaf("phones-tablets", "tablets-for-study", "学习平板", "Study Tablets", "学習タブレット", true, true, 16)
    ], "digital"),
    branch("computers-office", text("电脑 / 办公", "Computers & Office", "PC・オフィス"), text("笔记本、显示器、键鼠和生产力设备。", "Laptops, monitors, keyboards, mice, and productivity gear.", "ノートPC、モニター、キーボード、マウス。"), [
      leaf("computers-office", "thin-light-laptops", "轻薄本", "Thin and Light Laptops", "薄型軽量ノートPC", true, true, 20),
      leaf("computers-office", "gaming-laptops", "游戏本", "Gaming Laptops", "ゲーミングノートPC", true, true, 20),
      leaf("computers-office", "monitors", "显示器", "Monitors", "モニター", true, true, 18),
      leaf("computers-office", "mechanical-keyboards", "机械键盘", "Mechanical Keyboards", "メカニカルキーボード", true, true, 18)
    ], "digital"),
    branch("audio-wearables", text("音频 / 穿戴", "Audio & Wearables", "オーディオ・ウェアラブル"), text("耳机、音箱、手表和健康穿戴。", "Headphones, speakers, watches, and wearable health devices.", "イヤホン、スピーカー、時計、ウェアラブル。"), [
      leaf("audio-wearables", "noise-cancelling-headphones", "降噪耳机", "Noise Cancelling Headphones", "ノイズキャンセリングヘッドホン", true, true, 20),
      leaf("audio-wearables", "true-wireless-earbuds", "真无线耳机", "True Wireless Earbuds", "完全ワイヤレスイヤホン", true, true, 20),
      leaf("audio-wearables", "bluetooth-speakers", "蓝牙音箱", "Bluetooth Speakers", "Bluetoothスピーカー", true, true, 16),
      leaf("audio-wearables", "smart-watches", "智能手表", "Smart Watches", "スマートウォッチ", true, true, 18)
    ], "digital"),
    branch("charging-accessories", text("充电 / 配件", "Charging & Accessories", "充電・アクセサリ"), text("移动电源、充电器、手机壳和线材。", "Power banks, chargers, cases, and cables.", "モバイルバッテリー、充電器、ケース、ケーブル。"), [
      leaf("charging-accessories", "power-banks", "充电宝", "Power Banks", "モバイルバッテリー", true, true, 20),
      leaf("charging-accessories", "gan-chargers", "氮化镓充电器", "GaN Chargers", "GaN充電器", true, true, 16),
      leaf("charging-accessories", "phone-cases", "手机壳", "Phone Cases", "スマホケース", true, true, 15),
      leaf("charging-accessories", "usb-c-cables", "数据线", "USB-C Cables", "USB-Cケーブル", true, true, 14)
    ], "digital"),
    branch("cameras-smart-home", text("影像 / 智能家居", "Imaging & Smart Home", "映像・スマートホーム"), text("相机、拍摄设备、路由器和智能家居入口。", "Cameras, creator gear, routers, and smart-home gateways.", "カメラ、撮影機材、ルーター、スマートホーム。"), [
      leaf("cameras-smart-home", "mirrorless-cameras", "微单相机", "Mirrorless Cameras", "ミラーレスカメラ", true, true, 18),
      leaf("cameras-smart-home", "action-cameras", "运动相机", "Action Cameras", "アクションカメラ", true, true, 16),
      leaf("cameras-smart-home", "home-routers", "家用路由器", "Home Routers", "家庭用ルーター", true, true, 18),
      leaf("cameras-smart-home", "smart-door-locks", "智能门锁", "Smart Door Locks", "スマートロック", true, true, 16)
    ], "digital")
  ]),
  branch("beauty" satisfies CategoryId, text("美妆护肤", "Beauty & Skincare", "美容・スキンケア"), text("护肤、彩妆、个护和功效成分。", "Skincare, makeup, personal care, and active ingredients.", "スキンケア、メイク、パーソナルケア、成分。"), [
    branch("basic-skincare", text("基础护肤", "Basic Skincare", "基礎スキンケア"), text("洁面、水乳、面霜和基础修护。", "Cleansers, toners, lotions, creams, and repair basics.", "洗顔、化粧水、乳液、クリーム、補修。"), [
      leaf("basic-skincare", "gentle-cleansers", "温和洁面", "Gentle Cleansers", "低刺激洗顔", true, true, 18),
      leaf("basic-skincare", "toners-lotions", "爽肤水 / 化妆水", "Toners & Lotions", "化粧水", true, true, 16),
      leaf("basic-skincare", "face-creams", "面霜", "Face Creams", "フェイスクリーム", true, true, 18),
      leaf("basic-skincare", "repair-moisturizers", "屏障修护乳", "Barrier Repair Moisturizers", "バリア補修乳液", true, true, 16)
    ], "beauty"),
    branch("sun-protection", text("防晒 / 美白", "Sun Protection & Brightening", "日焼け止め・美白"), text("防晒、淡斑和提亮。", "Sunscreen, spot care, and brightening.", "日焼け止め、シミケア、透明感。"), [
      leaf("sun-protection", "daily-sunscreens", "日常通勤防晒", "Daily Sunscreens", "日常用日焼け止め", true, true, 20),
      leaf("sun-protection", "outdoor-sunscreens", "户外防晒", "Outdoor Sunscreens", "アウトドア日焼け止め", true, true, 18),
      leaf("sun-protection", "brightening-serums", "美白精华", "Brightening Serums", "美白美容液", true, true, 18),
      leaf("sun-protection", "spot-correctors", "淡斑产品", "Spot Correctors", "シミケア", true, true, 16)
    ], "beauty"),
    branch("makeup-base", text("底妆", "Base Makeup", "ベースメイク"), text("粉底、遮瑕、定妆和妆前。", "Foundation, concealer, setting, and primers.", "ファンデ、コンシーラー、仕上げ、下地。"), [
      leaf("makeup-base", "liquid-foundations", "粉底液", "Liquid Foundations", "リキッドファンデ", true, true, 20),
      leaf("makeup-base", "cushion-foundations", "气垫", "Cushion Foundations", "クッションファンデ", true, true, 18),
      leaf("makeup-base", "concealers", "遮瑕", "Concealers", "コンシーラー", true, true, 16),
      leaf("makeup-base", "setting-powders", "散粉 / 定妆粉", "Setting Powders", "フェイスパウダー", true, true, 16)
    ], "beauty"),
    branch("color-makeup", text("彩妆", "Color Makeup", "ポイントメイク"), text("口红、眼影、腮红和眉笔。", "Lip products, eyeshadow, blush, and brow products.", "リップ、アイシャドウ、チーク、眉メイク。"), [
      leaf("color-makeup", "lipsticks", "口红", "Lipsticks", "口紅", true, true, 20),
      leaf("color-makeup", "lip-glosses", "唇釉", "Lip Glosses", "リップグロス", true, true, 18),
      leaf("color-makeup", "eyeshadow-palettes", "眼影盘", "Eyeshadow Palettes", "アイシャドウパレット", true, true, 18),
      leaf("color-makeup", "blushes", "腮红", "Blushes", "チーク", true, true, 16)
    ], "beauty"),
    branch("personal-care", text("个护 / 美发", "Personal Care & Hair", "パーソナルケア・ヘア"), text("洗护、身体护理和美容工具。", "Hair care, body care, and beauty tools.", "ヘアケア、ボディケア、美容ツール。"), [
      leaf("personal-care", "shampoos", "洗发水", "Shampoos", "シャンプー", true, true, 18),
      leaf("personal-care", "hair-masks", "发膜", "Hair Masks", "ヘアマスク", true, true, 16),
      leaf("personal-care", "body-lotions", "身体乳", "Body Lotions", "ボディローション", true, true, 18),
      leaf("personal-care", "beauty-devices", "美容仪", "Beauty Devices", "美容家電", true, true, 18)
    ], "beauty")
  ]),
  branch("appliances" satisfies CategoryId, text("家用电器", "Home Appliances", "生活家電"), text("清洁、厨房、空气、洗护和影音家电。", "Cleaning, kitchen, air, laundry, and entertainment appliances.", "掃除、キッチン、空気、洗濯、AV家電。"), [
    branch("cleaning-appliances", text("清洁电器", "Cleaning Appliances", "掃除家電"), text("扫拖、吸尘、洗地和除螨。", "Robot vacuums, vacuums, floor washers, and mite removers.", "ロボット掃除機、掃除機、水拭き、布団クリーナー。"), [
      leaf("cleaning-appliances", "robot-vacuums", "扫拖机器人", "Robot Vacuums", "ロボット掃除機", true, true, 20),
      leaf("cleaning-appliances", "wet-dry-vacuums", "洗地机", "Wet Dry Vacuums", "水拭き掃除機", true, true, 20),
      leaf("cleaning-appliances", "cordless-vacuums", "无线吸尘器", "Cordless Vacuums", "コードレス掃除機", true, true, 18),
      leaf("cleaning-appliances", "mattress-vacuums", "除螨仪", "Mattress Vacuums", "布団クリーナー", true, true, 16)
    ], "appliances"),
    branch("kitchen-appliances", text("厨房电器", "Kitchen Appliances", "キッチン家電"), text("空气炸锅、电饭煲、咖啡和破壁。", "Air fryers, rice cookers, coffee, and blenders.", "エアフライヤー、炊飯器、コーヒー、ブレンダー。"), [
      leaf("kitchen-appliances", "air-fryers", "空气炸锅", "Air Fryers", "エアフライヤー", true, true, 18),
      leaf("kitchen-appliances", "rice-cookers", "电饭煲", "Rice Cookers", "炊飯器", true, true, 20),
      leaf("kitchen-appliances", "coffee-machines", "咖啡机", "Coffee Machines", "コーヒーメーカー", true, true, 18),
      leaf("kitchen-appliances", "high-speed-blenders", "破壁机", "High-Speed Blenders", "高速ブレンダー", true, true, 16)
    ], "appliances"),
    branch("air-comfort", text("空气 / 环境", "Air & Comfort", "空気・快適家電"), text("空调、净化、除湿和取暖。", "AC, purifiers, dehumidifiers, and heaters.", "エアコン、空気清浄、除湿、暖房。"), [
      leaf("air-comfort", "air-conditioners", "空调", "Air Conditioners", "エアコン", true, true, 20),
      leaf("air-comfort", "air-purifiers", "空气净化器", "Air Purifiers", "空気清浄機", true, true, 18),
      leaf("air-comfort", "dehumidifiers", "除湿机", "Dehumidifiers", "除湿機", true, true, 16),
      leaf("air-comfort", "space-heaters", "取暖器", "Space Heaters", "ヒーター", true, true, 16)
    ], "appliances"),
    branch("laundry-care", text("洗护电器", "Laundry & Care", "洗濯・ケア家電"), text("洗衣机、烘干机、挂烫和护理。", "Washers, dryers, steamers, and garment care.", "洗濯機、乾燥機、スチーマー、衣類ケア。"), [
      leaf("laundry-care", "washing-machines", "洗衣机", "Washing Machines", "洗濯機", true, true, 20),
      leaf("laundry-care", "dryers", "烘干机", "Dryers", "乾燥機", true, true, 18),
      leaf("laundry-care", "garment-steamers", "挂烫机", "Garment Steamers", "衣類スチーマー", true, true, 16),
      leaf("laundry-care", "hair-dryers", "吹风机", "Hair Dryers", "ドライヤー", true, true, 20)
    ], "appliances"),
    branch("home-entertainment", text("影音家电", "Home Entertainment", "ホームエンタメ"), text("电视、投影、音响和游戏显示。", "TVs, projectors, soundbars, and gaming displays.", "テレビ、プロジェクター、サウンドバー、ゲーム表示機器。"), [
      leaf("home-entertainment", "tvs", "电视", "TVs", "テレビ", true, true, 20),
      leaf("home-entertainment", "projectors", "投影仪", "Projectors", "プロジェクター", true, true, 18),
      leaf("home-entertainment", "soundbars", "回音壁", "Soundbars", "サウンドバー", true, true, 16),
      leaf("home-entertainment", "gaming-tvs", "游戏电视", "Gaming TVs", "ゲーム向けテレビ", true, true, 14)
    ], "appliances")
  ]),
  branch("baby" satisfies CategoryId, text("母婴用品", "Baby & Maternity", "ベビー・マタニティ"), text("喂养、纸尿裤、出行、护理和孕产用品。", "Feeding, diapers, travel, care, and maternity goods.", "授乳、おむつ、外出、ケア、マタニティ用品。"), [
    branch("feeding", text("喂养用品", "Feeding", "授乳・食事"), text("奶瓶、奶嘴、辅食和消毒。", "Bottles, nipples, baby food, and sterilizing.", "哺乳瓶、乳首、離乳食、消毒。"), [
      leaf("feeding", "baby-bottles", "奶瓶", "Baby Bottles", "哺乳瓶", true, true, 18),
      leaf("feeding", "bottle-nipples", "奶嘴", "Bottle Nipples", "哺乳瓶乳首", true, true, 14),
      leaf("feeding", "baby-food-makers", "辅食机", "Baby Food Makers", "離乳食メーカー", true, true, 15),
      leaf("feeding", "sterilizers", "消毒器", "Sterilizers", "消毒器", true, true, 16)
    ], "baby"),
    branch("diapers-wipes", text("纸尿裤 / 湿巾", "Diapers & Wipes", "おむつ・おしりふき"), text("纸尿裤、拉拉裤、湿巾和护理垫。", "Diapers, pull-ups, wipes, and changing pads.", "おむつ、パンツ、おしりふき、シート。"), [
      leaf("diapers-wipes", "diapers-newborn", "新生儿纸尿裤", "Newborn Diapers", "新生児用おむつ", true, true, 18),
      leaf("diapers-wipes", "pull-up-pants", "拉拉裤", "Pull-Up Pants", "パンツおむつ", true, true, 18),
      leaf("diapers-wipes", "baby-wipes", "婴儿湿巾", "Baby Wipes", "おしりふき", true, true, 16),
      leaf("diapers-wipes", "changing-pads", "隔尿垫", "Changing Pads", "防水シート", true, true, 14)
    ], "baby"),
    branch("travel-safety", text("出行安全", "Travel & Safety", "外出・安全"), text("推车、安全座椅、背带和餐椅。", "Strollers, safety seats, carriers, and high chairs.", "ベビーカー、チャイルドシート、抱っこ紐、椅子。"), [
      leaf("travel-safety", "strollers", "婴儿推车", "Strollers", "ベビーカー", true, true, 20),
      leaf("travel-safety", "child-safety-seats", "儿童安全座椅", "Child Safety Seats", "チャイルドシート", true, true, 20),
      leaf("travel-safety", "baby-carriers", "婴儿背带", "Baby Carriers", "抱っこ紐", true, true, 16),
      leaf("travel-safety", "high-chairs", "儿童餐椅", "High Chairs", "ベビーチェア", true, true, 16)
    ], "baby"),
    branch("baby-care", text("洗护护理", "Baby Care", "ベビーケア"), text("洗发沐浴、润肤、理发和体温。", "Bath, lotion, grooming, and temperature care.", "入浴、保湿、グルーミング、体温管理。"), [
      leaf("baby-care", "baby-body-wash", "婴儿沐浴露", "Baby Body Wash", "ベビーソープ", true, true, 16),
      leaf("baby-care", "baby-lotions", "婴儿润肤乳", "Baby Lotions", "ベビーローション", true, true, 16),
      leaf("baby-care", "baby-hair-clippers", "婴儿理发器", "Baby Hair Clippers", "ベビー用バリカン", true, true, 14),
      leaf("baby-care", "baby-thermometers", "婴儿体温计", "Baby Thermometers", "ベビー体温計", true, true, 15)
    ], "baby"),
    branch("maternity", text("孕产用品", "Maternity", "マタニティ"), text("待产、哺乳、产后修复和孕期护理。", "Hospital bags, nursing, postpartum recovery, and pregnancy care.", "入院準備、授乳、産後ケア、妊娠ケア。"), [
      leaf("maternity", "nursing-bras", "哺乳内衣", "Nursing Bras", "授乳ブラ", true, true, 14),
      leaf("maternity", "maternity-pillows", "孕妇枕", "Maternity Pillows", "抱き枕", true, true, 15),
      leaf("maternity", "breast-pumps", "吸奶器", "Breast Pumps", "搾乳器", true, true, 18),
      leaf("maternity", "hospital-bag-items", "待产包", "Hospital Bag Items", "入院バッグ用品", true, true, 16)
    ], "baby")
  ]),
  branch("sports" satisfies CategoryId, text("运动户外装备", "Sports & Outdoor Gear", "スポーツ・アウトドア"), text("跑步、健身、骑行、露营和球类。", "Running, fitness, cycling, camping, and ball sports.", "ランニング、フィットネス、自転車、キャンプ、球技。"), [
    branch("running-gear", text("跑步装备", "Running Gear", "ランニング用品"), text("跑鞋、手表、腰包和恢复。", "Shoes, watches, belts, and recovery.", "シューズ、時計、ポーチ、リカバリー。"), [
      leaf("running-gear", "running-shoes", "跑鞋", "Running Shoes", "ランニングシューズ", true, true, 20),
      leaf("running-gear", "sports-watches", "运动手表", "Sports Watches", "スポーツウォッチ", true, true, 18),
      leaf("running-gear", "running-belts", "跑步腰包", "Running Belts", "ランニングベルト", true, true, 14),
      leaf("running-gear", "recovery-foam-rollers", "泡沫轴", "Foam Rollers", "フォームローラー", true, true, 14)
    ], "sports"),
    branch("fitness-training", text("健身训练", "Fitness Training", "フィットネス"), text("力量、有氧、瑜伽和家庭训练。", "Strength, cardio, yoga, and home training.", "筋トレ、有酸素、ヨガ、ホームトレーニング。"), [
      leaf("fitness-training", "yoga-mats", "瑜伽垫", "Yoga Mats", "ヨガマット", true, true, 16),
      leaf("fitness-training", "adjustable-dumbbells", "可调哑铃", "Adjustable Dumbbells", "可変式ダンベル", true, true, 15),
      leaf("fitness-training", "treadmills", "跑步机", "Treadmills", "ランニングマシン", true, true, 18),
      leaf("fitness-training", "resistance-bands", "弹力带", "Resistance Bands", "レジスタンスバンド", true, true, 14)
    ], "sports"),
    branch("camping-hiking", text("徒步露营", "Camping & Hiking", "キャンプ・登山"), text("背包、帐篷、睡袋和照明。", "Backpacks, tents, sleeping bags, and lights.", "バックパック、テント、寝袋、ライト。"), [
      leaf("camping-hiking", "hiking-backpacks", "徒步背包", "Hiking Backpacks", "登山バックパック", true, true, 18),
      leaf("camping-hiking", "camping-tents", "露营帐篷", "Camping Tents", "キャンプテント", true, true, 18),
      leaf("camping-hiking", "sleeping-bags", "睡袋", "Sleeping Bags", "寝袋", true, true, 16),
      leaf("camping-hiking", "camping-lights", "露营灯", "Camping Lights", "キャンプライト", true, true, 16)
    ], "sports"),
    branch("cycling", text("骑行装备", "Cycling Gear", "サイクリング用品"), text("头盔、车灯、码表和骑行服。", "Helmets, lights, computers, and cycling apparel.", "ヘルメット、ライト、サイコン、ウェア。"), [
      leaf("cycling", "bike-helmets", "骑行头盔", "Bike Helmets", "自転車ヘルメット", true, true, 16),
      leaf("cycling", "bike-lights", "自行车灯", "Bike Lights", "自転車ライト", true, true, 14),
      leaf("cycling", "bike-computers", "码表", "Bike Computers", "サイクルコンピューター", true, true, 15),
      leaf("cycling", "cycling-shorts", "骑行裤", "Cycling Shorts", "サイクルパンツ", true, true, 14)
    ], "sports"),
    branch("ball-sports", text("球类运动", "Ball Sports", "球技"), text("羽毛球、网球、篮球和足球。", "Badminton, tennis, basketball, and football.", "バドミントン、テニス、バスケ、サッカー。"), [
      leaf("ball-sports", "badminton-rackets", "羽毛球拍", "Badminton Rackets", "バドミントンラケット", true, true, 18),
      leaf("ball-sports", "tennis-rackets", "网球拍", "Tennis Rackets", "テニスラケット", true, true, 16),
      leaf("ball-sports", "basketball-shoes", "篮球鞋", "Basketball Shoes", "バスケットシューズ", true, true, 18),
      leaf("ball-sports", "football-boots", "足球鞋", "Football Boots", "サッカースパイク", true, true, 16)
    ], "sports")
  ]),
  branch("food" satisfies CategoryId, text("食品饮料 / 零食", "Food, Drinks & Snacks", "食品・飲料・お菓子"), text("早餐、饮料、零食、速食和健康食品。", "Breakfast, drinks, snacks, instant meals, and health foods.", "朝食、飲料、お菓子、即食、健康食品。"), [
    branch("breakfast-instant", text("早餐速食", "Quick Breakfast", "時短朝食"), text("麦片、咖啡、面包和代餐。", "Granola, coffee, bread, and meal replacements.", "グラノーラ、コーヒー、パン、置き換え食品。"), [
      leaf("breakfast-instant", "granola-cereal", "麦片谷物", "Granola & Cereal", "グラノーラ", true, true, 18),
      leaf("breakfast-instant", "instant-coffee", "速溶咖啡", "Instant Coffee", "インスタントコーヒー", true, true, 18),
      leaf("breakfast-instant", "meal-replacement-shakes", "代餐奶昔", "Meal Replacement Shakes", "置き換えシェイク", true, true, 16),
      leaf("breakfast-instant", "whole-wheat-bread", "全麦面包", "Whole Wheat Bread", "全粒粉パン", true, true, 15)
    ], "food"),
    branch("snacks", text("零食", "Snacks", "お菓子"), text("办公室、追剧、低卡和进口零食。", "Office, binge-watching, low-calorie, and imported snacks.", "オフィス、動画視聴、低カロリー、輸入菓子。"), [
      leaf("snacks", "office-snacks", "办公室零食", "Office Snacks", "オフィスお菓子", true, true, 18),
      leaf("snacks", "low-calorie-snacks", "低卡零食", "Low-Calorie Snacks", "低カロリーお菓子", true, true, 18),
      leaf("snacks", "chips", "薯片", "Chips", "ポテトチップス", true, true, 16),
      leaf("snacks", "imported-snacks", "进口零食", "Imported Snacks", "輸入菓子", true, true, 16)
    ], "food"),
    branch("drinks", text("饮料", "Drinks", "飲料"), text("低糖、茶饮、气泡水和功能饮料。", "Low sugar, tea drinks, sparkling water, and functional drinks.", "低糖、茶飲料、炭酸水、機能性飲料。"), [
      leaf("drinks", "low-sugar-drinks", "低糖饮料", "Low Sugar Drinks", "低糖飲料", true, true, 18),
      leaf("drinks", "sparkling-water", "气泡水", "Sparkling Water", "炭酸水", true, true, 16),
      leaf("drinks", "ready-to-drink-tea", "即饮茶", "Ready-to-Drink Tea", "ペットボトル茶", true, true, 16),
      leaf("drinks", "energy-drinks", "功能饮料", "Energy Drinks", "エナジードリンク", true, true, 15)
    ], "food"),
    branch("instant-meals", text("方便速食", "Instant Meals", "即食食品"), text("方便面、自热、预制菜和冷冻食品。", "Instant noodles, self-heating meals, ready meals, and frozen food.", "インスタント麺、加熱式、惣菜、冷凍食品。"), [
      leaf("instant-meals", "instant-noodles", "方便面", "Instant Noodles", "インスタント麺", true, true, 18),
      leaf("instant-meals", "self-heating-hotpots", "自热火锅", "Self-Heating Hotpots", "自己加熱火鍋", true, true, 15),
      leaf("instant-meals", "ready-meals", "预制菜", "Ready Meals", "ミールキット", true, true, 18),
      leaf("instant-meals", "frozen-dumplings", "速冻水饺", "Frozen Dumplings", "冷凍餃子", true, true, 16)
    ], "food"),
    branch("health-food", text("健康食品", "Health Food", "健康食品"), text("蛋白、益生菌、坚果和维生素。", "Protein, probiotics, nuts, and vitamins.", "プロテイン、乳酸菌、ナッツ、ビタミン。"), [
      leaf("health-food", "protein-bars", "蛋白棒", "Protein Bars", "プロテインバー", true, true, 16),
      leaf("health-food", "whey-protein", "乳清蛋白粉", "Whey Protein", "ホエイプロテイン", true, true, 18),
      leaf("health-food", "mixed-nuts", "每日坚果", "Mixed Nuts", "ミックスナッツ", true, true, 16),
      leaf("health-food", "probiotics", "益生菌", "Probiotics", "乳酸菌サプリ", true, true, 16)
    ], "food")
  ]),
  branch("pet" satisfies CategoryId, text("宠物用品", "Pet Products", "ペット用品"), text("猫狗主粮、猫砂、清洁、出行和智能用品。", "Food, litter, cleaning, travel, and smart pet gear.", "フード、猫砂、清掃、外出、スマート用品。"), [
    branch("cat-products", text("猫咪用品", "Cat Products", "猫用品"), text("猫粮、猫砂、猫抓板和猫窝。", "Cat food, litter, scratchers, and beds.", "キャットフード、猫砂、爪とぎ、ベッド。"), [
      leaf("cat-products", "cat-food", "猫粮", "Cat Food", "キャットフード", true, true, 20),
      leaf("cat-products", "cat-litter", "猫砂", "Cat Litter", "猫砂", true, true, 20),
      leaf("cat-products", "cat-scratchers", "猫抓板", "Cat Scratchers", "爪とぎ", true, true, 15),
      leaf("cat-products", "cat-beds", "猫窝", "Cat Beds", "猫ベッド", true, true, 14)
    ], "pet"),
    branch("dog-products", text("狗狗用品", "Dog Products", "犬用品"), text("狗粮、牵引、玩具和清洁。", "Dog food, leashes, toys, and cleaning.", "ドッグフード、リード、おもちゃ、ケア。"), [
      leaf("dog-products", "dog-food", "狗粮", "Dog Food", "ドッグフード", true, true, 20),
      leaf("dog-products", "dog-leashes", "牵引绳", "Dog Leashes", "リード", true, true, 16),
      leaf("dog-products", "dog-toys", "狗狗玩具", "Dog Toys", "犬用おもちゃ", true, true, 15),
      leaf("dog-products", "dog-pee-pads", "狗尿垫", "Dog Pee Pads", "ペットシーツ", true, true, 16)
    ], "pet"),
    branch("pet-cleaning", text("宠物清洁", "Pet Cleaning", "ペット清掃"), text("洗护、除味、梳毛和清洁电器。", "Grooming, deodorizing, brushing, and cleaning devices.", "シャンプー、消臭、ブラシ、清掃家電。"), [
      leaf("pet-cleaning", "pet-shampoos", "宠物沐浴露", "Pet Shampoos", "ペットシャンプー", true, true, 15),
      leaf("pet-cleaning", "pet-deodorizers", "宠物除味剂", "Pet Deodorizers", "ペット消臭剤", true, true, 15),
      leaf("pet-cleaning", "pet-brushes", "宠物梳子", "Pet Brushes", "ペットブラシ", true, true, 14),
      leaf("pet-cleaning", "pet-cleaning-devices", "宠物清洁电器", "Pet Cleaning Devices", "ペット掃除家電", true, true, 16)
    ], "pet"),
    branch("pet-smart-devices", text("智能宠物用品", "Smart Pet Devices", "スマートペット用品"), text("喂食、饮水、猫砂盆和监控。", "Feeders, fountains, litter boxes, and cameras.", "給餌器、給水器、トイレ、カメラ。"), [
      leaf("pet-smart-devices", "auto-feeders", "自动喂食器", "Auto Feeders", "自動給餌器", true, true, 18),
      leaf("pet-smart-devices", "pet-water-fountains", "宠物饮水机", "Pet Water Fountains", "ペット給水器", true, true, 18),
      leaf("pet-smart-devices", "self-cleaning-litter-boxes", "自动猫砂盆", "Self-Cleaning Litter Boxes", "自動猫トイレ", true, true, 18),
      leaf("pet-smart-devices", "pet-cameras", "宠物摄像头", "Pet Cameras", "ペットカメラ", true, true, 14)
    ], "pet"),
    branch("pet-travel", text("宠物出行", "Pet Travel", "ペット外出"), text("航空箱、背包、推车和车载用品。", "Carriers, backpacks, strollers, and car gear.", "キャリー、リュック、カート、車用品。"), [
      leaf("pet-travel", "pet-carriers", "宠物航空箱", "Pet Carriers", "ペットキャリー", true, true, 16),
      leaf("pet-travel", "pet-backpacks", "宠物背包", "Pet Backpacks", "ペットリュック", true, true, 15),
      leaf("pet-travel", "pet-strollers", "宠物推车", "Pet Strollers", "ペットカート", true, true, 14),
      leaf("pet-travel", "car-seat-covers-for-pets", "宠物车垫", "Pet Car Seat Covers", "ペット用車シート", true, true, 13)
    ], "pet")
  ]),
  branch("home" satisfies CategoryId, text("家居家装", "Home & Interior", "家具・インテリア"), text("睡眠、收纳、清洁、装修和氛围家居。", "Sleep, storage, cleaning, renovation, and home ambience.", "睡眠、収納、清掃、リフォーム、インテリア。"), [
    branch("sleep-home", text("睡眠家居", "Sleep", "睡眠用品"), text("床垫、枕头、床品和香薰。", "Mattresses, pillows, bedding, and fragrance.", "マットレス、枕、寝具、香り。"), [
      leaf("sleep-home", "pillows", "枕头", "Pillows", "枕", true, true, 18),
      leaf("sleep-home", "mattresses", "床垫", "Mattresses", "マットレス", true, true, 20),
      leaf("sleep-home", "bedding-sets", "床品四件套", "Bedding Sets", "寝具セット", true, true, 16),
      leaf("sleep-home", "aroma-diffusers", "香薰机", "Aroma Diffusers", "アロマディフューザー", true, true, 15)
    ], "home"),
    branch("storage-organization", text("收纳整理", "Storage & Organization", "収納"), text("收纳箱、衣架、置物架和厨房收纳。", "Storage boxes, hangers, shelves, and kitchen organization.", "収納ボックス、ハンガー、ラック、キッチン収納。"), [
      leaf("storage-organization", "storage-boxes", "收纳箱", "Storage Boxes", "収納ボックス", true, true, 18),
      leaf("storage-organization", "clothes-hangers", "衣架", "Clothes Hangers", "ハンガー", true, true, 15),
      leaf("storage-organization", "shelves", "置物架", "Shelves", "ラック", true, true, 16),
      leaf("storage-organization", "kitchen-storage", "厨房收纳", "Kitchen Storage", "キッチン収納", true, true, 18)
    ], "home"),
    branch("home-cleaning", text("家居清洁", "Home Cleaning", "住まいの清掃"), text("拖把、清洁剂、除霉和一次性用品。", "Mops, cleaners, mold removers, and disposable goods.", "モップ、洗剤、カビ取り、使い捨て用品。"), [
      leaf("home-cleaning", "mops", "拖把", "Mops", "モップ", true, true, 16),
      leaf("home-cleaning", "bathroom-cleaners", "浴室清洁剂", "Bathroom Cleaners", "浴室洗剤", true, true, 15),
      leaf("home-cleaning", "mold-removers", "除霉剂", "Mold Removers", "カビ取り剤", true, true, 16),
      leaf("home-cleaning", "trash-bags", "垃圾袋", "Trash Bags", "ゴミ袋", true, true, 14)
    ], "home"),
    branch("renovation-materials", text("装修建材", "Renovation Materials", "リフォーム資材"), text("灯具、开关、五金和墙面材料。", "Lights, switches, hardware, and wall materials.", "照明、スイッチ、金物、壁材。"), [
      leaf("renovation-materials", "ceiling-lights", "吸顶灯", "Ceiling Lights", "シーリングライト", true, true, 18),
      leaf("renovation-materials", "smart-switches", "智能开关", "Smart Switches", "スマートスイッチ", true, true, 15),
      leaf("renovation-materials", "door-locks", "门锁", "Door Locks", "ドアロック", true, true, 16),
      leaf("renovation-materials", "wall-paint", "乳胶漆", "Wall Paint", "壁用塗料", true, true, 16)
    ], "home"),
    branch("furniture-decor", text("家具软装", "Furniture & Decor", "家具・インテリア"), text("沙发、椅子、窗帘和地毯。", "Sofas, chairs, curtains, and rugs.", "ソファ、椅子、カーテン、ラグ。"), [
      leaf("furniture-decor", "sofas", "沙发", "Sofas", "ソファ", true, true, 18),
      leaf("furniture-decor", "ergonomic-chairs", "人体工学椅", "Ergonomic Chairs", "エルゴノミクスチェア", true, true, 20),
      leaf("furniture-decor", "curtains", "窗帘", "Curtains", "カーテン", true, true, 15),
      leaf("furniture-decor", "rugs", "地毯", "Rugs", "ラグ", true, true, 15)
    ], "home")
  ])
];
