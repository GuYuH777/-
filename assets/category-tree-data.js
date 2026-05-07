(function () {
  const text = (zh, en, ja) => ({ zh, en, ja });
  const branch = (id, zh, en, ja, children, parentId) => ({
    id,
    parentId,
    level: parentId ? 2 : 1,
    labels: text(zh, en, ja),
    description: text("按中国用户真实搜索习惯整理。", "Organized around real product-search intent.", "実際の検索意図に合わせたカテゴリです。"),
    slug: id,
    children
  });
  const leaf = (parentId, id, zh, en, ja, highSearchVolume = true, rankingFriendly = true, recommendedItems = 15) => ({
    id,
    parentId,
    level: 3,
    labels: text(zh, en, ja),
    description: text("适合做具体排行榜和搜索落地页。", "Good for a focused ranking and search landing page.", "具体的なランキングページに向いています。"),
    slug: id,
    highSearchVolume,
    rankingFriendly,
    recommendedItems,
    children: []
  });

  window.categoryTreeData = [
    branch("digital", "数码电子", "Digital & Electronics", "デジタル家電", [
      branch("pc-components", "电脑配件", "PC Components", "PCパーツ", [
        leaf("pc-components", "gpu", "显卡", "GPU", "GPU", true, true, 20),
        leaf("pc-components", "cpu", "CPU处理器", "CPU Processors", "CPUプロセッサ", true, true, 20),
        leaf("pc-components", "motherboard", "主板", "Motherboards", "マザーボード", true, true, 18),
        leaf("pc-components", "ram", "内存", "RAM", "メモリ", true, true, 18),
        leaf("pc-components", "ssd", "SSD固态硬盘", "SSD Storage", "SSDストレージ", true, true, 18),
        leaf("pc-components", "power-supply", "电源", "Power Supplies", "電源ユニット", true, true, 16),
        leaf("pc-components", "cpu-cooler", "CPU散热器", "CPU Coolers", "CPUクーラー", true, true, 15),
        leaf("pc-components", "pc-case", "机箱", "PC Cases", "PCケース", true, true, 15)
      ], "digital"),
      branch("pc-peripherals", "电脑外设", "PC Peripherals", "PC周辺機器", [
        leaf("pc-peripherals", "mechanical-keyboard", "机械键盘", "Mechanical Keyboards", "メカニカルキーボード", true, true, 18),
        leaf("pc-peripherals", "gaming-mouse", "游戏鼠标", "Gaming Mice", "ゲーミングマウス", true, true, 18),
        leaf("pc-peripherals", "monitor", "显示器", "Monitors", "モニター", true, true, 20),
        leaf("pc-peripherals", "gaming-headset", "游戏耳机", "Gaming Headsets", "ゲーミングヘッドセット", true, true, 16),
        leaf("pc-peripherals", "microphone", "麦克风", "Microphones", "マイク", true, true, 15),
        leaf("pc-peripherals", "webcam", "摄像头", "Webcams", "ウェブカメラ", true, true, 14),
        leaf("pc-peripherals", "mousepad", "鼠标垫", "Mousepads", "マウスパッド", true, true, 14),
        leaf("pc-peripherals", "speaker", "桌面音箱", "Desktop Speakers", "デスクトップスピーカー", true, true, 15)
      ], "digital"),
      branch("smartphones", "手机", "Smartphones", "スマートフォン", [
        leaf("smartphones", "flagship-phone", "旗舰手机", "Flagship Phones", "フラッグシップスマホ", true, true, 20),
        leaf("smartphones", "midrange-phone", "中端手机", "Midrange Phones", "ミドルレンジスマホ", true, true, 20),
        leaf("smartphones", "budget-phone", "千元机", "Budget Phones", "低価格スマホ", true, true, 18),
        leaf("smartphones", "gaming-phone", "游戏手机", "ゲーミングスマホ", true, true, 16),
        leaf("smartphones", "compact-phone", "小屏手机", "Compact Phones", "小型スマホ", true, true, 14)
      ], "digital"),
      branch("tablet", "平板电脑", "Tablets", "タブレット", [
        leaf("tablet", "student-tablet", "学生平板", "Student Tablets", "学生向けタブレット", true, true, 16),
        leaf("tablet", "drawing-tablet", "绘画平板", "Drawing Tablets", "描画タブレット", true, true, 15),
        leaf("tablet", "gaming-tablet", "游戏平板", "Gaming Tablets", "ゲーミングタブレット", true, true, 14),
        leaf("tablet", "productivity-tablet", "办公平板", "Productivity Tablets", "仕事用タブレット", true, true, 15)
      ], "digital"),
      branch("audio", "音频设备", "Audio Devices", "オーディオ機器", [
        leaf("audio", "tws-earbuds", "真无线耳机", "True Wireless Earbuds", "完全ワイヤレスイヤホン", true, true, 20),
        leaf("audio", "noise-cancel-headphones", "降噪耳机", "Noise Cancelling Headphones", "ノイズキャンセリングヘッドホン", true, true, 20),
        leaf("audio", "sports-earbuds", "运动耳机", "Sports Earbuds", "スポーツイヤホン", true, true, 16),
        leaf("audio", "portable-speaker", "蓝牙音箱", "Portable Bluetooth Speakers", "Bluetoothスピーカー", true, true, 16)
      ], "digital")
    ]),
    branch("beauty", "美妆护肤", "Beauty & Skincare", "美容・スキンケア", [
      branch("skincare", "护肤", "Skincare", "スキンケア", [
        leaf("skincare", "serum", "精华", "Serums", "美容液", true, true, 20),
        leaf("skincare", "face-mask", "面膜", "Face Masks", "フェイスマスク", true, true, 18),
        leaf("skincare", "sunscreen", "防晒", "Sunscreens", "日焼け止め", true, true, 20),
        leaf("skincare", "cleanser", "洗面奶", "Cleansers", "洗顔料", true, true, 18),
        leaf("skincare", "face-cream", "面霜", "Face Creams", "フェイスクリーム", true, true, 18),
        leaf("skincare", "toner", "爽肤水", "Toners", "化粧水", true, true, 16),
        leaf("skincare", "eye-cream", "眼霜", "アイクリーム", true, true, 16),
        leaf("skincare", "acne-treatment", "祛痘产品", "Acne Treatments", "ニキビケア", true, true, 16)
      ], "beauty"),
      branch("haircare", "洗护", "Hair & Body Care", "ヘア・ボディケア", [
        leaf("haircare", "shampoo", "洗发水", "Shampoos", "シャンプー", true, true, 18),
        leaf("haircare", "conditioner", "护发素", "Conditioners", "コンディショナー", true, true, 15),
        leaf("haircare", "hair-mask", "发膜", "Hair Masks", "ヘアマスク", true, true, 16),
        leaf("haircare", "hair-oil", "护发精油", "Hair Oils", "ヘアオイル", true, true, 16),
        leaf("haircare", "body-wash", "沐浴露", "Body Wash", "ボディソープ", true, true, 18)
      ], "beauty"),
      branch("makeup", "彩妆", "Makeup", "メイク", [
        leaf("makeup", "foundation", "粉底液", "Foundations", "ファンデーション", true, true, 20),
        leaf("makeup", "powder", "散粉", "Setting Powders", "フェイスパウダー", true, true, 16),
        leaf("makeup", "lip-gloss", "唇釉", "Lip Glosses", "リップグロス", true, true, 18),
        leaf("makeup", "mascara", "睫毛膏", "Mascara", "マスカラ", true, true, 16),
        leaf("makeup", "eyebrow-pencil", "眉笔", "Eyebrow Pencils", "アイブロウペンシル", true, true, 15),
        leaf("makeup", "blush", "腮红", "Blush", "チーク", true, true, 16)
      ], "beauty")
    ]),
    branch("home-appliance", "家用电器", "Home Appliances", "生活家電", [
      branch("small-appliance", "小家电", "Small Appliances", "小型家電", [
        leaf("small-appliance", "hair-dryer", "吹风机", "Hair Dryers", "ドライヤー", true, true, 20),
        leaf("small-appliance", "electric-toothbrush", "电动牙刷", "Electric Toothbrushes", "電動歯ブラシ", true, true, 18),
        leaf("small-appliance", "shaver", "剃须刀", "Shavers", "電気シェーバー", true, true, 16),
        leaf("small-appliance", "massager", "按摩仪", "Massagers", "マッサージ機", true, true, 16),
        leaf("small-appliance", "humidifier", "加湿器", "Humidifiers", "加湿器", true, true, 16)
      ], "home-appliance"),
      branch("kitchen-appliance", "厨房家电", "Kitchen Appliances", "キッチン家電", [
        leaf("kitchen-appliance", "air-fryer", "空气炸锅", "Air Fryers", "エアフライヤー", true, true, 18),
        leaf("kitchen-appliance", "rice-cooker", "电饭煲", "Rice Cookers", "炊飯器", true, true, 20),
        leaf("kitchen-appliance", "coffee-machine", "咖啡机", "Coffee Machines", "コーヒーメーカー", true, true, 18),
        leaf("kitchen-appliance", "water-purifier", "净水器", "Water Purifiers", "浄水器", true, true, 18),
        leaf("kitchen-appliance", "microwave", "微波炉", "Microwaves", "電子レンジ", true, true, 16)
      ], "home-appliance"),
      branch("large-appliance", "大家电", "Large Appliances", "大型家電", [
        leaf("large-appliance", "air-conditioner", "空调", "Air Conditioners", "エアコン", true, true, 20),
        leaf("large-appliance", "washing-machine", "洗衣机", "Washing Machines", "洗濯機", true, true, 20),
        leaf("large-appliance", "refrigerator", "冰箱", "Refrigerators", "冷蔵庫", true, true, 20),
        leaf("large-appliance", "tv", "电视", "TVs", "テレビ", true, true, 20),
        leaf("large-appliance", "robot-vacuum", "扫地机器人", "Robot Vacuums", "ロボット掃除機", true, true, 20)
      ], "home-appliance")
    ]),
    branch("sports", "运动户外装备", "Sports & Outdoor Gear", "スポーツ・アウトドア", [
      branch("sports-shoes", "运动鞋", "Sports Shoes", "スポーツシューズ", [
        leaf("sports-shoes", "running-shoes", "跑鞋", "Running Shoes", "ランニングシューズ", true, true, 20),
        leaf("sports-shoes", "football-boots", "足球鞋", "Football Boots", "サッカースパイク", true, true, 16),
        leaf("sports-shoes", "basketball-shoes", "篮球鞋", "Basketball Shoes", "バスケットシューズ", true, true, 18),
        leaf("sports-shoes", "training-shoes", "训练鞋", "Training Shoes", "トレーニングシューズ", true, true, 16)
      ], "sports"),
      branch("outdoor", "户外装备", "Outdoor Gear", "アウトドア用品", [
        leaf("outdoor", "camping-tent", "露营帐篷", "Camping Tents", "キャンプテント", true, true, 18),
        leaf("outdoor", "hiking-backpack", "登山包", "Hiking Backpacks", "登山バックパック", true, true, 18),
        leaf("outdoor", "outdoor-jacket", "冲锋衣", "Outdoor Jackets", "アウトドアジャケット", true, true, 18),
        leaf("outdoor", "cycling-gear", "骑行装备", "Cycling Gear", "サイクリング用品", true, true, 16)
      ], "sports")
    ]),
    branch("food", "食品饮料/零食", "Food, Drinks & Snacks", "食品・飲料・お菓子", [
      branch("snacks", "零食", "Snacks", "お菓子", [
        leaf("snacks", "potato-chips", "薯片", "Potato Chips", "ポテトチップス", true, true, 16),
        leaf("snacks", "protein-snack", "蛋白零食", "Protein Snacks", "プロテインスナック", true, true, 16),
        leaf("snacks", "chocolate", "巧克力", "Chocolate", "チョコレート", true, true, 16),
        leaf("snacks", "nuts", "坚果", "Nuts", "ナッツ", true, true, 16)
      ], "food"),
      branch("drinks", "饮料", "Drinks", "飲料", [
        leaf("drinks", "coffee-drink", "咖啡饮料", "Coffee Drinks", "コーヒー飲料", true, true, 18),
        leaf("drinks", "milk-tea", "奶茶", "Milk Tea", "ミルクティー", true, true, 18),
        leaf("drinks", "energy-drink", "能量饮料", "Energy Drinks", "エナジードリンク", true, true, 15),
        leaf("drinks", "sparkling-water", "气泡水", "Sparkling Water", "炭酸水", true, true, 16)
      ], "food")
    ]),
    branch("pet", "宠物用品", "Pet Products", "ペット用品", [
      branch("cat-products", "猫用品", "Cat Products", "猫用品", [
        leaf("cat-products", "cat-food", "猫粮", "Cat Food", "キャットフード", true, true, 20),
        leaf("cat-products", "cat-litter", "猫砂", "Cat Litter", "猫砂", true, true, 20),
        leaf("cat-products", "cat-toy", "猫玩具", "Cat Toys", "猫用おもちゃ", true, true, 15),
        leaf("cat-products", "auto-feeder", "自动喂食器", "Auto Feeders", "自動給餌器", true, true, 18)
      ], "pet"),
      branch("dog-products", "狗用品", "Dog Products", "犬用品", [
        leaf("dog-products", "dog-food", "狗粮", "Dog Food", "ドッグフード", true, true, 20),
        leaf("dog-products", "dog-leash", "狗绳", "Dog Leashes", "リード", true, true, 16),
        leaf("dog-products", "pet-cleaner", "宠物清洁用品", "Pet Cleaning Supplies", "ペット清掃用品", true, true, 15),
        leaf("dog-products", "dog-toy", "狗玩具", "Dog Toys", "犬用おもちゃ", true, true, 15)
      ], "pet")
    ]),
    branch("baby", "母婴用品", "Baby & Maternity", "ベビー・マタニティ", [
      branch("baby-feeding", "喂养用品", "Feeding Supplies", "授乳・食事用品", [
        leaf("baby-feeding", "baby-formula", "奶粉", "Baby Formula", "粉ミルク", true, true, 20),
        leaf("baby-feeding", "baby-bottle", "奶瓶", "Baby Bottles", "哺乳瓶", true, true, 18),
        leaf("baby-feeding", "baby-food", "辅食", "Baby Food", "離乳食", true, true, 16),
        leaf("baby-feeding", "sterilizer", "消毒器", "Sterilizers", "消毒器", true, true, 16)
      ], "baby"),
      branch("baby-care", "婴儿护理", "Baby Care", "ベビーケア", [
        leaf("baby-care", "diaper", "纸尿裤", "Diapers", "おむつ", true, true, 20),
        leaf("baby-care", "baby-wipes", "湿巾", "Baby Wipes", "おしりふき", true, true, 18),
        leaf("baby-care", "baby-lotion", "婴儿润肤乳", "Baby Lotion", "ベビーローション", true, true, 16),
        leaf("baby-care", "baby-shampoo", "婴儿洗护", "Baby Shampoo & Wash", "ベビーシャンプー", true, true, 16)
      ], "baby")
    ]),
    branch("home", "家居家装", "Home & Interior", "家具・インテリア", [
      branch("furniture", "家具", "Furniture", "家具", [
        leaf("furniture", "ergonomic-chair", "人体工学椅", "Ergonomic Chairs", "エルゴノミクスチェア", true, true, 20),
        leaf("furniture", "mattress", "床垫", "Mattresses", "マットレス", true, true, 20),
        leaf("furniture", "desk", "书桌", "Desks", "デスク", true, true, 16),
        leaf("furniture", "sofa", "沙发", "Sofas", "ソファ", true, true, 18)
      ], "home"),
      branch("home-decor", "家居装饰", "Home Decor", "インテリア装飾", [
        leaf("home-decor", "desk-lamp", "台灯", "Desk Lamps", "デスクライト", true, true, 16),
        leaf("home-decor", "aroma-diffuser", "香薰机", "Aroma Diffusers", "アロマディフューザー", true, true, 15),
        leaf("home-decor", "storage-box", "收纳盒", "Storage Boxes", "収納ボックス", true, true, 16),
        leaf("home-decor", "curtain", "窗帘", "Curtains", "カーテン", true, true, 15)
      ], "home")
    ])
  ];
})();
