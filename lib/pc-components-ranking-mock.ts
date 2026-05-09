export type PcComponentTier = "夯" | "顶级" | "人上人" | "npc" | "拉完了";
export type PcComponentSentiment = "positive" | "neutral" | "mixed" | "negative";
export type PcComponentRecommendationLevel = "recommend" | "consider" | "avoid";

export type PcComponentRankingItem = {
  id: string;
  brand: string;
  model: string;
  productName: string;
  tier: PcComponentTier;
  rank: number;
  summary: string;
  pros: string[];
  cons: string[];
  tags: string[];
  score: number;
  valueScore: number;
  qualityScore: number;
  sentiment: PcComponentSentiment;
  recommendationLevel: PcComponentRecommendationLevel;
};

const tierMap = {
  hang: "夯",
  top: "顶级",
  elite: "人上人",
  npc: "npc",
  trash: "拉完了"
} as const;

type Row = [
  id: string,
  brand: string,
  model: string,
  productName: string,
  tier: keyof typeof tierMap,
  rank: number,
  summary: string,
  pros: string[],
  cons: string[],
  tags: string[],
  score: number,
  valueScore: number,
  qualityScore: number,
  sentiment: PcComponentSentiment,
  recommendationLevel: PcComponentRecommendationLevel
];

const item = (row: Row): PcComponentRankingItem => {
  const [id, brand, model, productName, tier, rank, summary, pros, cons, tags, score, valueScore, qualityScore, sentiment, recommendationLevel] = row;
  return { id, brand, model, productName, tier: tierMap[tier], rank, summary, pros, cons, tags, score, valueScore, qualityScore, sentiment, recommendationLevel };
};

export const cpuRanking = ([
  ["cpu-001", "AMD", "Ryzen 7 7800X3D", "AMD Ryzen 7 7800X3D", "hang", 1, "这是最新版本测试数据。", ["游戏帧率强", "功耗温度舒服", "X3D口碑极高"], ["生产力不是最顶", "价格不算低"], ["游戏神U", "B站吹爆", "闭眼买"], 96, 92, 95, "positive", "recommend"],
  ["cpu-002", "AMD", "Ryzen 5 7500F", "AMD Ryzen 5 7500F", "hang", 2, "预算党真香U，省下的钱直接加显卡。", ["性价比极高", "AM5平台门槛低", "游戏够用"], ["没核显", "多核生产力一般"], ["卷王", "图吧真香", "装机热门"], 94, 99, 86, "positive", "recommend"],
  ["cpu-003", "AMD", "Ryzen 7 9800X3D", "AMD Ryzen 7 9800X3D", "top", 3, "新一代游戏答案，强是真的强，贵也是真的贵。", ["游戏性能顶", "能效好", "讨论热度高"], ["首发溢价明显", "平台成本高"], ["新神U", "X3D", "高端游戏"], 93, 80, 98, "positive", "recommend"],
  ["cpu-004", "Intel", "Core i5-14600KF", "Intel i5-14600KF", "top", 4, "性能很能打，但功耗和温度别装看不见。", ["游戏生产力均衡", "多核强", "价格常有活动"], ["功耗高", "散热压力大", "14代争议"], ["能打", "功耗争议", "装机区常客"], 87, 79, 88, "mixed", "consider"],
  ["cpu-005", "Intel", "Core i7-14700KF", "Intel i7-14700KF", "elite", 5, "多核猛，适合又剪视频又打游戏的人。", ["生产力强", "游戏也稳", "大厂整机常见"], ["功耗夸张", "散热成本高", "缩缸讨论劝退"], ["生产力", "高功耗", "争议"], 84, 68, 88, "mixed", "consider"],
  ["cpu-006", "AMD", "Ryzen 5 9600X", "AMD Ryzen 5 9600X", "npc", 6, "能买，但对比老甜品没那么炸。", ["能效好", "单核强", "平台新"], ["价格不够卷", "升级感不明显"], ["普通强", "不够香"], 80, 74, 86, "neutral", "consider"],
  ["cpu-007", "Intel", "Core i5-13600KF", "Intel i5-13600KF", "npc", 7, "老将还在，但现在更多是看价格捡漏。", ["性能依旧够", "二手讨论多", "板U选择多"], ["平台后续弱", "功耗不低"], ["老甜品", "捡漏"], 78, 78, 79, "neutral", "consider"],
  ["cpu-008", "Intel", "Core Ultra 7 265K", "Intel Ultra 7 265K", "trash", 8, "名字很新，口碑没跟上，装机圈观望味很重。", ["平台新", "能效有进步"], ["游戏口碑弱", "价格高", "换平台成本大"], ["观望", "不够香", "争议"], 66, 55, 76, "negative", "avoid"]
] as Row[]).map(item);

export const motherboardRanking = ([
  ["motherboard-001", "MSI", "B650M MORTAR WIFI", "微星 B650M 迫击炮 WIFI", "hang", 1, "装机标准答案，问就是迫击炮。", ["供电稳", "BIOS成熟", "口碑长期在线"], ["外观偏直男", "好价要蹲"], ["标准答案", "迫击炮", "AM5热门"], 95, 92, 94, "positive", "recommend"],
  ["motherboard-002", "ASRock", "B650 Steel Legend WiFi", "华擎 B650 Steel Legend WiFi", "hang", 2, "白色板里很能打，海景房党很难绕开。", ["白色颜值高", "规格扎实", "性价比不错"], ["BIOS风格有人不习惯"], ["白板", "钢铁传奇", "海景房"], 92, 90, 90, "positive", "recommend"],
  ["motherboard-003", "ASUS", "TUF GAMING B650M-PLUS WIFI", "华硕 TUF B650M 重炮手 WIFI", "top", 3, "稳是真的稳，贵也是真的贵。", ["做工稳定", "品牌认可高", "售后认知强"], ["华硕税明显", "性价比一般"], ["TUF", "稳定", "华硕税"], 88, 74, 93, "mixed", "consider"],
  ["motherboard-004", "GIGABYTE", "B650M AORUS ELITE AX", "技嘉 B650M 小雕 AX", "top", 4, "规格在线，活动价时很有竞争力。", ["供电不错", "接口够用", "品牌认知高"], ["软件体验一般", "价格波动大"], ["小雕", "主流", "活动价"], 86, 82, 88, "positive", "consider"],
  ["motherboard-005", "MAXSUN", "iCraft B760M WIFI", "铭瑄 iCraft B760M WIFI", "elite", 5, "白色海景房味很浓，颜值党会心动。", ["颜值高", "白色主题", "价格有吸引力"], ["品牌争议还在", "BIOS不算强项"], ["白色", "iCraft", "颜值党"], 82, 81, 78, "mixed", "consider"],
  ["motherboard-006", "Colorful", "CVN B650M GAMING FROZEN", "七彩虹 CVN B650M GAMING FROZEN", "npc", 6, "性价比有，但 BIOS 调性还是劝退一部分人。", ["价格友好", "白色好看", "基础规格够"], ["BIOS口碑一般", "高端感不足"], ["CVN", "性价比", "白板"], 77, 83, 73, "neutral", "consider"],
  ["motherboard-007", "MSI", "PRO B760M-A WIFI DDR5", "微星 PRO B760M-A WIFI DDR5", "npc", 7, "办公和普通游戏都稳，但没啥情绪价值。", ["稳定", "接口够", "价格常规"], ["外观普通", "讨论度低"], ["稳", "商务感", "普通"], 75, 76, 78, "neutral", "consider"],
  ["motherboard-008", "Generic", "H610M Entry Board", "H610M 丐版主板", "trash", 8, "能亮机，但别给自己找不痛快。", ["便宜", "基础能用"], ["供电丐", "接口少", "升级空间小"], ["丐中丐", "避雷", "亮机板"], 58, 62, 48, "negative", "avoid"]
] as Row[]).map(item);

export const ramRanking = ([
  ["ram-001", "KINGBANK", "银爵 DDR5 6400 32GB", "金百达银爵 DDR5 6400 32G", "hang", 1, "DDR5 入门卷王，图吧已经吹到包浆。", ["价格狠", "频率够高", "装机热度高"], ["颗粒批次要看", "马甲质感一般"], ["卷王", "DDR5", "图吧热门"], 94, 98, 82, "positive", "recommend"],
  ["ram-002", "Gloway", "天策 DDR5 6000 32GB", "光威天策 DDR5 6000 32G", "hang", 2, "国货真香，普通玩家不用想太复杂。", ["价格稳定", "兼容性不错", "售后认知高"], ["外观朴素", "超频看体质"], ["国货", "真香", "6000甜点"], 91, 94, 84, "positive", "recommend"],
  ["ram-003", "Acer Predator", "Hermes DDR5 6800 RGB", "宏碁掠夺者 Hermes DDR5 6800", "top", 3, "高频 RGB 都给到，装机区认可度挺高。", ["频率高", "灯效强", "做工不错"], ["价格偏高", "平台兼容要确认"], ["高频", "RGB", "掠夺者"], 88, 78, 91, "positive", "consider"],
  ["ram-004", "Asgard", "女武神 DDR5 6400 RGB", "阿斯加特女武神 DDR5 6400 RGB", "top", 4, "海景房里很出片，性能也不是花瓶。", ["颜值高", "RGB好看", "频率实用"], ["价格波动大", "批次讨论多"], ["女武神", "海景房", "RGB"], 86, 82, 86, "positive", "consider"],
  ["ram-005", "G.SKILL", "Trident Z5 Royal DDR5", "芝奇皇家戟 DDR5", "elite", 5, "桌搭人上人，插上去就知道钱花在哪。", ["颜值顶", "质感强", "高端识别度高"], ["贵", "性价比不走这条路"], ["皇家戟", "信仰", "高端"], 84, 62, 94, "mixed", "consider"],
  ["ram-006", "Corsair", "Dominator Titanium DDR5", "海盗船 Dominator Titanium DDR5", "elite", 6, "高端灯条味很正，但价格也很有距离感。", ["做工强", "灯效优秀", "品牌调性足"], ["溢价高", "软件生态有人吐槽"], ["海盗船", "高端灯条", "信仰"], 82, 60, 92, "mixed", "consider"],
  ["ram-007", "Kingston", "Fury Beast DDR5 6000", "金士顿 Fury Beast DDR5 6000", "npc", 7, "很稳，但现在看起来不够卷。", ["稳定", "兼容性好", "品牌强"], ["价格不够狠", "外观普通"], ["稳", "大厂", "普通"], 77, 72, 84, "neutral", "consider"],
  ["ram-008", "Generic", "DDR5 Mystery IC Kit", "杂牌 DDR5 颗粒盲盒", "trash", 8, "便宜到离谱的条子，后面经常靠运气续命。", ["价格低"], ["颗粒不明", "兼容风险", "售后弱"], ["颗粒盲盒", "避雷", "杂牌"], 55, 58, 45, "negative", "avoid"]
] as Row[]).map(item);

export const ssdRanking = ([
  ["ssd-001", "ZHITAI", "TiPlus7100 1TB", "致态 TiPlus7100 1TB", "hang", 1, "国货真香，装机区提到 SSD 经常绕不开它。", ["速度够快", "口碑稳定", "价格合理"], ["高负载温度要注意"], ["国货真香", "热门", "PCIe4.0"], 94, 93, 91, "positive", "recommend"],
  ["ssd-002", "Lexar", "NM790 2TB", "雷克沙 NM790 2TB", "hang", 2, "无缓存争议归争议，实际口碑就是很香。", ["价格狠", "速度强", "2TB热度高"], ["无独立缓存", "重度写入党谨慎"], ["无缓存争议", "性价比", "2TB热门"], 92, 96, 84, "positive", "recommend"],
  ["ssd-003", "WD_BLACK", "SN850X 2TB", "西数 SN850X 2TB", "top", 3, "老牌旗舰盘，稳到没什么故事。", ["性能强", "口碑稳", "适合PS5/PC"], ["价格偏高", "发热要散热片"], ["老牌稳", "旗舰", "黑盘"], 90, 80, 95, "positive", "recommend"],
  ["ssd-004", "Samsung", "990 Pro 2TB", "三星 990 Pro 2TB", "top", 4, "顶级但贵，属于强者税。", ["性能顶", "软件生态好", "品牌认可高"], ["价格高", "历史固件事件让人记得"], ["旗舰", "三星", "贵"], 88, 72, 96, "mixed", "consider"],
  ["ssd-005", "Crucial", "T500 2TB", "英睿达 T500 2TB", "elite", 5, "懂一点 SSD 的玩家会觉得它挺香。", ["性能强", "大厂颗粒", "口碑上升"], ["存在感不如三星西数", "价格看活动"], ["高端", "低调强", "大厂"], 85, 80, 90, "positive", "consider"],
  ["ssd-006", "Acer Predator", "GM7 1TB", "宏碁掠夺者 GM7 1TB", "npc", 6, "曾经很热，现在更多是正常选择。", ["价格常有优势", "速度够用"], ["无缓存讨论", "热度下降"], ["无缓存", "普通", "好价"], 77, 82, 74, "neutral", "consider"],
  ["ssd-007", "Kioxia", "EXCERIA PLUS G3 1TB", "铠侠 EXCERIA PLUS G3 / SE10", "npc", 7, "稳，但没有让人立刻下单的冲动。", ["原厂颗粒", "稳定", "品牌可靠"], ["热度一般", "速度不算顶"], ["原厂", "稳", "低调"], 75, 76, 80, "neutral", "consider"],
  ["ssd-008", "Generic", "White-label QLC SSD", "山寨白片 SSD", "trash", 8, "便宜到上头，数据丢了就清醒。", ["便宜"], ["颗粒不明", "掉速明显", "售后风险大"], ["避雷", "白片", "数据无价"], 50, 55, 35, "negative", "avoid"]
] as Row[]).map(item);

export const powerSupplyRanking = ([
  ["psu-001", "Super Flower", "LEADEX HG 850W", "振华 LEADEX HG 850W", "hang", 1, "老口碑电源，装机老哥看到会点头。", ["用料稳", "口碑久", "价格合理"], ["外观不算潮", "型号多容易看花"], ["老口碑", "稳定", "金牌"], 94, 90, 95, "positive", "recommend"],
  ["psu-002", "Seasonic", "FOCUS GX-850", "海韵 FOCUS GX 850", "hang", 2, "海韵老口碑，买它就是图省心。", ["稳定", "售后认知强", "转换效率好"], ["价格略高", "线材手感普通"], ["海韵", "省心", "老牌"], 92, 84, 96, "positive", "recommend"],
  ["psu-003", "Super Flower", "LEADEX VII 1000W ATX 3.0", "振华 LEADEX VII 1000W", "top", 3, "新平台高端卡准备得很足，价格也不算离谱。", ["ATX 3.0", "供电稳", "余量足"], ["千瓦对普通人过剩"], ["ATX3.0", "高端", "余量"], 88, 80, 94, "positive", "consider"],
  ["psu-004", "ASUS", "ROG Thor 1000W Platinum II", "华硕 ROG 雷神 1000W", "elite", 4, "信仰税拉满，侧透里确实很有面子。", ["颜值强", "屏显有辨识度", "用料顶"], ["贵", "性价比低"], ["ROG", "信仰", "人上人"], 88, 58, 98, "mixed", "consider"],
  ["psu-005", "Seasonic", "PRIME TX-1000", "海韵 PRIME TX-1000", "elite", 5, "电源里的西装暴徒，但普通玩家真用不到。", ["顶级稳定", "转换效率高", "质保强"], ["价格高", "需求门槛高"], ["钛金", "旗舰", "土豪"], 86, 55, 99, "mixed", "consider"],
  ["psu-006", "Great Wall", "GX 850W", "长城 GX 850W", "npc", 6, "国货稳定款，没那么酷但能干活。", ["价格友好", "渠道多", "基础稳定"], ["外观普通", "高端感弱"], ["国货", "稳定", "普通"], 78, 82, 78, "neutral", "consider"],
  ["psu-007", "DeepCool", "PQ850M", "九州风神 PQ850M", "npc", 7, "讨论度一般，但实际用着挺安静。", ["稳定", "全模组", "价格常有活动"], ["存在感不高", "型号认知弱"], ["全模组", "低调", "好价"], 76, 78, 80, "neutral", "consider"],
  ["psu-008", "Generic", "700W Gaming PSU", "杂牌额定 700W 电源", "trash", 8, "电源别玩抽卡，炸一次全家桶都沉默。", ["便宜", "包装看着猛"], ["虚标风险", "保护不足", "售后不稳"], ["避雷", "虚标", "别省电源"], 45, 50, 30, "negative", "avoid"]
] as Row[]).map(item);

export const cpuCoolerRanking = ([
  ["cooler-001", "Thermalright", "Peerless Assassin 120 SE", "利民 PA120 SE", "hang", 1, "散热器卷王，便宜到同行沉默。", ["压制力强", "价格离谱", "装机热度高"], ["体积大", "安装要看内存高度"], ["卷王", "风冷神", "图吧热门"], 96, 99, 90, "positive", "recommend"],
  ["cooler-002", "Thermalright", "Frost Spirit 140", "利民 FS140", "hang", 2, "大块头有大智慧，压高功耗 U 很安心。", ["散热强", "价格仍然香", "噪音控制不错"], ["机箱兼容要确认", "外观朴素"], ["大双塔", "性价比", "压得住"], 93, 94, 91, "positive", "recommend"],
  ["cooler-003", "DeepCool", "AK620", "九州风神 AK620", "top", 3, "做工和颜值比普通风冷更有高级感。", ["做工好", "外观克制", "散热稳"], ["价格高于卷王", "体积较大"], ["双塔", "质感", "稳定"], 88, 80, 92, "positive", "consider"],
  ["cooler-004", "DeepCool", "Assassin IV", "九州风神冰立方 Assassin IV", "top", 4, "高端风冷颜值代表，摆在机箱里很有存在感。", ["外观强", "静音不错", "做工扎实"], ["价格高", "体积占空间"], ["冰立方", "高端风冷", "颜值"], 86, 74, 94, "positive", "consider"],
  ["cooler-005", "Valkyrie", "A360", "瓦尔基里 A360", "elite", 5, "360 水冷海景房热度很高，桌搭党很吃这套。", ["颜值高", "水冷氛围强", "压制力够"], ["价格偏高", "水冷维护风险"], ["360水冷", "海景房", "颜值"], 84, 72, 88, "mixed", "consider"],
  ["cooler-006", "ASUS", "ROG Ryujin III 360", "华硕 ROG 龙神 III 360", "elite", 6, "人上人水冷，贵到让人开始谈信仰。", ["屏幕效果强", "品牌排面足", "性能强"], ["价格夸张", "性价比低"], ["龙神", "ROG", "信仰税"], 82, 45, 96, "mixed", "consider"],
  ["cooler-007", "Thermalright", "AX120 R SE", "利民 AX120 R SE", "npc", 7, "便宜能用，小 U 随便压。", ["价格低", "安装简单", "够用"], ["压高端U吃力", "质感普通"], ["便宜", "够用", "入门"], 76, 90, 68, "neutral", "consider"],
  ["cooler-008", "Generic", "240mm RGB AIO", "杂牌 240 水冷", "trash", 8, "灯挺亮，漏不漏全看命。", ["便宜", "RGB看着热闹"], ["漏液风险", "噪音大", "售后弱"], ["避雷", "杂牌水冷", "翻车"], 48, 52, 35, "negative", "avoid"]
] as Row[]).map(item);

export const pcCaseRanking = ([
  ["case-001", "DeepCool", "CH560", "九州风神 CH560", "hang", 1, "风道好、价格稳，实用党很难不爱。", ["散热风道强", "价格合理", "装机友好"], ["外观不算极致", "体积偏大"], ["风道", "实用", "装机热门"], 93, 92, 90, "positive", "recommend"],
  ["case-002", "SAMA", "黑洞", "先马黑洞", "hang", 2, "静音老口碑，宿舍和卧室党很吃。", ["静音表现好", "价格友好", "老牌口碑"], ["颜值偏传统", "闷热配置要注意风扇"], ["静音", "老口碑", "实用"], 90, 91, 84, "positive", "recommend"],
  ["case-003", "LIAN LI", "O11 Vision", "联力 O11 Vision", "top", 3, "海景房标杆，装完就是小红书模板。", ["颜值顶", "展示效果强", "做工好"], ["贵", "需要搭配风扇预算"], ["海景房", "联力", "展示柜"], 89, 70, 94, "positive", "consider"],
  ["case-004", "Phanteks", "NV5", "追风者 NV5", "top", 4, "曲面玻璃氛围感很足，RGB 党容易上头。", ["视觉冲击强", "空间合理", "海景房效果好"], ["风扇要另算", "理线需要耐心"], ["曲面玻璃", "RGB", "海景房"], 87, 78, 88, "positive", "consider"],
  ["case-005", "Fractal Design", "North", "Fractal North 木纹机箱", "elite", 5, "木纹机箱热度高，摆客厅也不像游戏机。", ["设计高级", "质感强", "辨识度高"], ["价格高", "不是纯散热取向"], ["木纹", "高级感", "桌搭"], 86, 68, 92, "positive", "consider"],
  ["case-006", "LIAN LI", "O11D EVO RGB", "联力 O11D EVO RGB", "elite", 6, "RGB 海景房浓度超标，拍照是真的出片。", ["模块化强", "灯效氛围好", "做工稳"], ["预算高", "容易越装越贵"], ["RGB", "海景房", "人上人"], 84, 64, 92, "mixed", "consider"],
  ["case-007", "Huntkey", "S960 暴风雪", "航嘉 S960 暴风雪", "npc", 7, "便宜海景房，能出效果但别期待太满。", ["价格低", "外观跟得上潮流", "空间还行"], ["做工普通", "细节一般"], ["低价海景房", "普通", "入门"], 74, 84, 68, "neutral", "consider"],
  ["case-008", "Generic", "Tempered Glass Hotbox", "闷罐玻璃机箱", "trash", 8, "正面全玻璃看着帅，硬件在里面蒸桑拿。", ["外观看着亮", "价格低"], ["风道差", "温度高", "积灰难受"], ["闷罐", "避雷", "烤硬件"], 52, 58, 40, "negative", "avoid"]
] as Row[]).map(item);

export const pcComponentsRankingMap = {
  cpu: cpuRanking,
  motherboard: motherboardRanking,
  ram: ramRanking,
  ssd: ssdRanking,
  "power-supply": powerSupplyRanking,
  "cpu-cooler": cpuCoolerRanking,
  "pc-case": pcCaseRanking
};
