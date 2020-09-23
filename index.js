var zt = {
	/* 章節 */
	"Earth":    "地球",
	"Rhom":     "洛姆",
	"Corsus":   "克爾蘇斯",
	"Yaesha":   "耶莎",

	/* 事件類別 */
	"Item Drop":   "掉落物品",
	"Miniboss":   "小王",
	"World Boss":   "世界王",
	"Siege":   "圍城",
	"Side Dungeon":   "旁支地下城",
	"Point of Interest":   "關鍵點",

	"Trait Book":	"<span class=\"label\">物品</span> 知識手卷",
	"Simulacrum":	"<span class=\"label\">物品</span> 擬像",
	"Aces Coin":	"<span class=\"label\">物品</span> 奇特的錢幣；※ 將錢幣拿給女商人換取手槍；<span class=\"label\">手槍</span> 馬格南左輪手槍",
	"Reggies Ring":	"<span class=\"label\">物品</span> 污穢戒指；※ 將戒指拿給黑人並對話換取特性；<span class=\"label\">特性</span> 拾荒者",
	"Mad Merchant":	"<span class=\"label\">頭</span> 扭曲面具；※ 戴上面具與傳點旁的大樹對話獲取特性；<span class=\"label\">特性</span> 樹皮",
	"Drifter Mask":	"<span class=\"label\">頭</span> 流浪者面具",
	"Hunters Hideout":	"<span class=\"label\">手槍</span> 狩獵手槍；<span class=\"label\">特性</span> 暗影行者",
	"Supply Run Assault Rifle":	"<span class=\"label\">長槍</span> 突擊步槍；<span class=\"label\">特性</span> 精神",
	"Liz Chicago Typewriter":	"<span class=\"label\">長槍</span> 芝加哥打字機；※ 兩個NPC都不能死；※ 斜角45度開門有機率不用鑰匙也可以開門",
	"Gunslingers Charm":	"<span class=\"label\">項鍊</span> 槍手神符",
	"Letos Amulet":	"<span class=\"label\">項鍊</span> 萊托的項鍊；※ 牆上寫有「ONLY THE PENITENT MAN MAY PASS」字樣，蹲下後進入",
	"Root Cultist":	"<span class=\"label\">戒指</span> 根蔓飾環（攻擊心臟前與NPC對話）；<span class=\"label\">戒指</span> 編織棘刺（攻擊心臟後擊殺NPC）",
	"Heart Seeker":	"<span class=\"label\">戒指</span> 追心者",
	"Sage Stone":	"<span class=\"label\">戒指</span> 賢者之石",
	"Mothers Ring":	"<span class=\"label\">戒指</span> 母親的戒指",
	"Ring Of Evasion":	"<span class=\"label\">戒指</span> 閃避戒指",
	"Pillar Of Stone":	"<span class=\"label\">戒指</span> 石之抵柱",
	"Gunsligners Ring":	"<span class=\"label\">戒指</span> 槍手戒指",
	"Aggressors Bane":	"<span class=\"label\">戒指</span> 入侵者之災禍",
	"Riphide Letos Armor":	"<span class=\"label\">套裝</span> 萊托套裝；先\"開啟萊托算法\"，再\"關閉萊托算法\"，此時傳送裝置會將玩家隨機傳送到該副本中的任意位置，玩家只需反覆進入裝置直到被傳送至隱藏房間，拿到萊托套裝。",
	"Nexus":	"根蔓中樞；暫無重點要記",
	"The Mangler":	"<span class=\"label-boss\">Boss</span> 撕裂者；<span class=\"label\">武器改裝</span>  播種者",
	"Root Shrine":	"<span class=\"label-boss\">Boss</span> 根蔓神祠；<span class=\"label\">套裝</span> 扭曲套裝",
	"Shroud":	"<span class=\"label-boss\">Boss</span> 暗蘊；<span class=\"label\">武器改裝</span>  響草",
	"Gorefist":	"<span class=\"label-boss\">Boss</span> 血腥鐵拳；<span class=\"label\">武器改裝</span>  尖剌斗篷",
	"Splitter":	"※ 開啟萊托的演算法固定傳送至詛咒車站；<span class=\"label-boss\">Boss</span> 扒皮者；<span class=\"label\">武器改裝</span>  閃爍披風；※ 關閉萊托的演算法隨機傳送到B2（場景偏紅的集骨堆）；<span class=\"label\">套裝</span> 萊托套裝",
	"Ent Boss":	"<span class=\"label-boss\">Boss</span> 樹精；<span class=\"label\">長槍</span> 孢子噴射（正常）；<span class=\"label\">近戰</span> 石化大錘（斷腳）",
	"Singe":	"<span class=\"label-boss\">Boss</span> 燒焦；<span class=\"label\">手槍</span> 噴火者（正常）；<span class=\"label\">近戰</span> 陰燃（斷尾）",
	"Brabus":	"<span class=\"label-boss\">Boss</span> 布拉巴斯【盜賊】；<span class=\"label\">武器改裝</span>  爆炸射擊；<span class=\"label\">特性</span> 冷若冰霜（沒懷表殺隊友）；<span class=\"label\">套裝</span> 盜賊套裝（有懷表與頭目對話）",
	"The Clean Room":	"<span class=\"label\">近戰</span> 荒原行者流星錘",
	"Cleansing Jewel":	"<span class=\"label\">項鍊</span> 淨化寶珠",
	"Brutal Mark":	"<span class=\"label\">項鍊</span> 殘暴印記",
	"Talisman Of Animosity":	"<span class=\"label\">項鍊</span> 敵意護符",
	"Band Of Strength":	"<span class=\"label\">戒指</span> 力量戒指",
	"Deceivers Band":	"<span class=\"label\">戒指</span> 欺騙者戒指",
	"Ring Of Elusion":	"<span class=\"label\">戒指</span> 逃避戒指",
	"Hunters Halo":	"<span class=\"label\">戒指</span> 獵人光暈",
	"Ezlans Band":	"<span class=\"label\">戒指</span> 艾茲蘭的指環",
	"Armor Vault":	"<span class=\"label\">套裝</span> 阿卡里套裝",
	"Raze":	"<span class=\"label-boss\">Boss</span> 夷平；<span class=\"label\">武器改裝</span>  召喚",
	"Scourge":	"<span class=\"label-boss\">Boss</span> 天災；<span class=\"label\">武器改裝</span>  沙漠氣息",
	"Claviger":	"<span class=\"label-boss\">Boss</span> 持鑰者；<span class=\"label\">近戰</span> 滅世（留小怪）；<span class=\"label\">長槍</span> 粒子加速器（不留小怪）；<span class=\"label\">物品</span> 咆哮鑰匙；<span class=\"label\">特性</span> 回復",
	"Hound Master":	"<span class=\"label-boss\">Boss</span> 大錘；<span class=\"label\">物品</span> 控制棒；<span class=\"label\">武器改裝</span>  嚎叫怪的免疫力；※ 回商人處使用控制棒；<span class=\"label-boss\">Boss</span> 古代構造體；<span class=\"label\">武器改裝</span>  鋼鐵哨兵",
	"The Harrow":	"<span class=\"label-boss\">Boss</span> 釘耙；<span class=\"label\">物品</span> 咆哮鑰匙；<span class=\"label\">手槍</span> 玷污者（正常）；<span class=\"label\">近戰</span> 失落魚叉（打腳打到跪再拔掉背上魚叉）",
	"Shade And Shatter":	"<span class=\"label-boss\">Boss</span> 暗影和粉碎；<span class=\"label\">武器改裝</span>  黑淚帳幕",
	"The Lost Gantry":	"<span class=\"label\">長槍</span> 射線步槍",
	"Galenic Charm":	"<span class=\"label\">項鍊</span> 醫療神符",
	"Rock Of Anguish":	"<span class=\"label\">項鍊</span> 痛苦之岩",
	"Butchers Fetish":	"<span class=\"label\">項鍊</span> 屠夫靈偶",
	"Gravity Stone":	"<span class=\"label\">戒指</span> 重力之石",
	"Devouring Loop":	"<span class=\"label\">戒指</span> 吞噬循環",
	"Razor Stone":	"<span class=\"label\">戒指</span> 剃刀之石",
	"Blood Font":	"<span class=\"label\">戒指</span> 血泉",
	"Leech Ember":	"<span class=\"label\">戒指</span> 水蛭餘燼",
	"The Unclean One":	"<span class=\"label-boss\">Boss</span> 不潔者；<span class=\"label\">長槍</span> 毀滅者；<span class=\"label\">特性</span> 饕餮",
	"Ixillis":	"<span class=\"label-boss\">Boss</span> 伊克希利斯十五、十六號；<span class=\"label\">手槍</span> 蟲巢炮；<span class=\"label\">近戰</span> 守護生物之斧；※ 將心藏交給不滅之王；<span class=\"label\">近戰</span> 劈裂者；※ 將心藏交給精靈女王；<span class=\"label\">長槍</span> 弩；<span class=\"label\">套裝</span> 屠殺者套裝",
	"Canker":	"<span class=\"label-boss\">Boss</span> 潰瘍；<span class=\"label\">武器改裝</span>  腐蝕光環",
	"Thrall":	"<span class=\"label-boss\">Boss</span> 魔奴；<span class=\"label\">武器改裝</span>  魔潮；<span class=\"label\">特性</span> 催化劑",
	"Abandoned Throne":	"廢棄王座；擊殺100只白色甲蟲後會出現一隻藍色甲蟲，將其擊殺以獲得乳白甲殼",
	"Graveyard Elf":	"沼澤墓園；<span class=\"label\">特性</span> 效能；在沼澤精靈的湯裡放入伊斯卡爾藥瓶的寄生蟲；<span class=\"label\">戒指</span> 不潔者戒指；離開地圖再回去小屋",
	"Hive Wisps":	"<span class=\"label\">戒指</span> 靈魂餘燼；擊破所有藍色的蟲卵；<span class=\"label\">特性</span> 召喚；不被鬼火擊中",
	"Fetid Pool":	"<span class=\"label\">項鍊</span> 銹蝕項鍊；戴上鏽蝕項鏈，進入靈偶之池中央的酸液池中，蹲下，一段時間後即可獲得酸蝕鑰匙；<span class=\"label\">項鏈</span> 黑暗之心；藏寶室第一層；<span class=\"label\">戒指</span> 英雄戒指；<span class=\"label\">特性</span> 加固；藏寶室第二層",
	"Brain Bug":	"<span class=\"label\">套裝</span> 甲殼套裝；低語之廳、針刺巢穴、奇異隘口中，擊殺圓湖裡的黑甲蟲，獲得硬化甲。殼在感染寄生蟲的狀態下從馬爾戈什購買；<span class=\"label\">特性</span> 發光；在感染寄生蟲的情況下與馬爾戈什對話，交出甲殼。甲殼在廢棄王座擊殺100只白色甲蟲後會出現一隻藍色甲蟲，將其擊殺以獲得乳白甲殼",
	"Queens Temple":	"與與女王獲得任務道具密碼晶石魔符；有出現沼澤墓園的情況下，在感染寄生蟲的情況下與女王對話，可以獲得任務道具伊斯卡爾藥瓶；<span class=\"label-boss\">Boss</span> 伊斯卡爾女皇；<span class=\"label\">手槍</span> 伊斯卡爾之驕傲；<span class=\"label\">特性</span> 步法；<span class=\"label\">武器改裝</span> 追尋者；在BOSS戰進入第二階段時讓BOSS跪下的狀態下被落石砸死獲得",
	"Dream Eater":	"<span class=\"label\">武器改裝</span> 裂隙行者",
	"Barb Terror":	"<span class=\"label\">武器改裝</span> 易爆鋼毛",
	"Sketterling":	"針刺巢穴、奇異隘口、低語之廳會出現紅色甲蟲(補充資訊二)，擊敗隨機掉落樂禍項鍊、伊斯卡爾獵人指環、螳螂戒指。黑色甲蟲(補充資訊二)擊敗掉落硬化甲殼",
	"Doe Shrine":	"※ 演奏鹿之歌獲取項練；鹿之歌：5433412321；<span class=\"label\">項鍊</span> 拾荒者飾品；※ 在任意有鐘處演奏守護生物之歌獲取特性；守護生物之歌：11341132；<span class=\"label\">特性</span> 迅捷",
	"Vengeance Idol":	"<span class=\"label\">項鍊</span> 復仇神像",
	"Reanimators":	"<span class=\"label\">項鍊</span> 靈魂之錨（消滅復活者）",
	"Storm Amulet":	"<span class=\"label\">項鍊</span> 風暴項鍊",
	"Stone Of Balance":	"<span class=\"label\">戒指</span> 平衡之石",
	"Hunters Band":	"<span class=\"label\">戒指</span> 獵人指環",
	"Keepers Ring":	"<span class=\"label\">戒指</span> 守衛的戒指",
	"Pearl Of Luminescence":	"<span class=\"label\">戒指</span> 螢光珍珠",
	"Ring Of Shadows":	"<span class=\"label\">戒指</span> 暗影戒指",
	"Celerity Stone":	"<span class=\"label\">戒指</span> 迅捷之石（固定在地宮盡頭）",
	"The Ravager Shrine":	"<span class=\"label\">套裝</span> 長老套裝",
	"Blink Thief":	"<span class=\"label-boss\">Boss</span> 閃爍盜賊；<span class=\"label\">長槍</span> 彈跳步槍",
	"Onslaught":	"<span class=\"label-boss\">Boss</span> 猛攻；<span class=\"label\">武器改裝</span>  閃爍權杖",
	"Storm Caller":	"<span class=\"label-boss\">Boss</span> 風暴召喚者；<span class=\"label\">武器改裝</span>  風暴召喚者",
	"Scald And Sear":	"<span class=\"label-boss\">Boss</span> 燙傷和灼燒；<span class=\"label\">武器改裝</span>  野火射擊",
	"Kin Caller":	"<span class=\"label-boss\">Boss</span> 典獄長；<span class=\"label\">武器改裝</span>  萬劍之歌",
	"The Ravager":	"<span class=\"label-boss\">Boss</span> 劫掠者【狼王】；<span class=\"label\">手槍</span> 叢林神之詛咒；<span class=\"label\">特性</span> 奧術攻擊；※ 演奏催眠之歌獲取武器材料；催眠之歌：51512341；<span class=\"label\">近戰</span> 叢林神之傷痕；※ 在任意有鐘處演奏守護生物之歌獲取特性；守護生物之歌：11341132；<span class=\"label\">特性</span> 迅捷",
	"Totem Father":	"<span class=\"label-boss\">Boss</span> 圖騰之父；<span class=\"label\">長槍</span> 風暴之眼（藍色圖騰）；<span class=\"label\">近戰</span> 風暴之聲（紅色圖騰）；<span class=\"label\">特性</span> 奧術攻擊",

	"Settlement": "傳送點",
	"Wailing Wood": "慟哭之林；哭泣的樹；※ 把樹打死獲取項鍊；<span class=\"label\">項鍊</span> 扭曲神像",
	"Mud Tooth": "泥牙的藏身處；※ 不停的與 NPC 對話獲項鍊；<span class=\"label\">項鍊</span> 懷錶",
	"Monolith": "巨石碑；<span class=\"label\">套裝</span> 虛空套裝；密碼：請至巨石碑建築物後方牆壁上尋找符號順序",
	"Old Man And Construct": "老人與構造體；<span class=\"label\">項鍊</span> 治療者神符；<span class=\"label\">戒指</span> 黑日珠寶；※ 持續花錢與商人買情報獲取套裝；<span class=\"label\">套裝</span> 骨質套裝；※ 構造體需用控制棒來觸發；<span class=\"label-boss\">Boss</span> 古代構造體；<span class=\"label\">武器改裝</span>  鋼鐵哨兵",
	"Ruins": "遺跡；單純的記錄點；無重點要記",
	"Flautist": "長笛手；※ 演奏長笛手之歌獲取戒指；長笛手之歌：345321；<span class=\"label\">戒指</span> 狼之心；※ 在任意有鐘處演奏守護生物之歌獲取特性；守護生物之歌：11341132；<span class=\"label\">特性</span> 迅捷",
	"Stuck Merchant": "遇難商人；<span class=\"label\">近戰</span> 長矛；<span class=\"label\">身</span> 光耀保護者；<span class=\"label\">腳</span> 光耀腿甲；<span class=\"label\">物品</span> 奇異的物品（在車上）；※ 找到物品使用的機關處；<span class=\"label-boss\">Boss</span> 根蔓懼魔；<span class=\"label\">頭</span> 光耀面容；<span class=\"label\">戒指</span> 守護生物之戒（返回商人處）",

	"Fairview":	"創始人的藏身處",
	"Westcourt":	"西苑",
	"Marrow Pass":	"骨髓隘口",
	"The Tangled Pass":	"糾結隘口",
	"The Warren":	"狡兔三窟",
	"Junktown":	"垃圾鎮",
	"Find Monkey Key":	"哀傷原野",
	"The Gallows":	"絞刑架",
	"Hidden Grotto":	"隱秘石窟",
	"The Hidden Sanctum":	"秘密聖所",
	"The Ash Yard":	"灰燼庭院",
	"Research Station Alpha":	"研究站 α（萊托的實驗室）",
	"Cutthroat Channel":	"割喉管道",
	"Sunken Passage":	"沉沒通道",
	"The Choking Hollow":	"窒息山谷",

	"The Eastern Wind":	"東風",
	"The Scouring Waste":	"沖刷荒原",
	"The Ardent Temple":	"熱誠神廟",
	"The Purge Hall":	"清洗大廳",
	"The Burrows":	"地洞",
	"The Bunker":	"地堡",
	"Concourse Of The Sun":	"太陽合流",
	"Vault Of The Heralds":	"傳令官的地下室",
	"The Iron Rift":	"鋼鐵裂隙",
	"Shackled Canyon":	"鐐銬峽谷",
	"Loom Of The Black Sun":	"黑日隱像",

	"The Fetid Glade":	"惡臭林地",
	"The Mist Fen":	"迷霧沼澤",
	"The Capillary":	"毛細管",
	"The Grotto":	"石窟",
	"The Drowned Trench":	"淹埋溝濠",
	"Circlet Hatchery":	"環形孵化場",
	"Fetid Pools":	"靈偶之池",
	"Strange Pass":	"奇異隘口",
	"Hall Of Whispers":	"低語之廳",
	"Needle Lair":	"針刺巢穴",
	"Iskal Temple":	"伊斯卡爾神廟",
	/* 
	密碼晶石
	與伊斯卡爾女王對話獲得任務道具迷宮晶石/密碼晶石
	<span class=\"label\">特性</span> 集中
	第一次點亮石碑
	<span class=\"label\">特性</span> 血之紐帶
	第二次點亮石碑
	<span class=\"label\">套裝</span> 迷宮套裝
	第三次點亮石碑
	*/

	"The Verdant Strand":	"青翠海濱",
	"The Scalding Glade":	"燙傷林地",
	"Ahanae's Lament":	"阿哈內之挽歌",
	"Martyr's Sanctuary":	"劫掠者神廟；烈士避難所",
	"Forgotten Undercroft":	"遺忘地穴",
	"Widow's Vestry":	"寡婦的法衣室",
	"Widow's Pass":	"寡婦隘口",
	"Withering Village":	"枯萎村莊",
	"The Hall Of Judgement":	"審判大廳",
	"Heretic's Nest":	"異教徒巢穴",
	
	"City":	"（冒險模式）城市 City ",
};

String.prototype.zt = function(fg)
{
	if(this == 'City') fg = 1;
	var s = this.replace(/ [ ]+/g,' ');
	if( fg == 3 ) return s + '<br />' + (zt[s] || '').split('；').join('<br />');
	else if( fg == 1 ) return $.map((zt[s] || s).split('；'),function(a){return '<span title="' + s + '">' + a + '</span>'}).join('<br />');
    return zt[s] || s;
};

sublocations = {
    "RootCultist": "MarrowPass",
    "RootWraith": "TheHiddenSanctum",
    "RootBrute": "SunkenPassage",
    "Brabus": "CutthroatChannel",
    "RootTumbleweed": "TheTangledPass",
    "RootEnt": "TheChokingHollow",
    "RootDragon": "TheAshYard",
    "HuntersHideout": "HiddenGrotto",
    "MadMerchant": "Junktown",
    "LizAndLiz": "TheWarren",
    "LastWill": "FindMonkeyKey",
    "RootShrine": "TheGallows",
    "SwarmMaster": "TheIronRift",
    "HoundMaster": "TheBurrows",
    "Sentinel": "ShackledCanyon",
    "Vyr": "TheArdentTemple",
    "WastelandGuardian": "LoomOfTheBlackSun",
    "TheHarrow": "TheBunker",
    "TheLostGantry": "ConcourseOfTheSun",
    "ArmorVault": "VaultOfTheHeralds",
    "TheCleanRoom": "ThePurgeHall",
    "SlimeHulk": "TheDrownedTrench",
    "Fatty": "TheFetidGlade",
    "Tyrant": "TheCapillary",
    "SwampGuardian": 'The Grotto',
    'KinCaller': "TheHallOfJudgement",
    "BlinkFiend": "Widow'sPass",
    'StuckMerchant': "MerchantDungeon",
    'BlinkThief': 'ForgottenUndercroft',
    "StormCaller": "Heretic'sNest",
    "ImmolatorAndZephyr": "WitheringVillage",
    'Wolf': "TheScaldingGlade",
    'TotemFather': "TheScaldingGlade",
    'TheRisen': "Ahanae'sLament",
    'DoeShrine': "Widow'sVestry",
    'WolfShrine': "Martyr'sSanctuary",
    "Splitter": "ResearchStationAlpha",
    "BarbTerror": "NeedleLair",
    "QueensTemple": "IskalTemple",
    "BrainBug": "StrangePass",
    "Wisp": "CircletHatchery",
    "FetidPool": "FetidPools",
    "FlickeringHorror": "HallOfWhispers"
}

mainLocations = {
 "City Overworld Zone1": "Fairview",
 "City Overworld Zone2": "Westcourt",
 "Wasteland Overworld Zone1": "TheEasternWind",
 "Wasteland Overworld Zone2": "TheScouringWaste",
 "Jungle Overworld Zone1": "TheVerdantStrand",
 "Jungle Overworld Zone2": "TheScaldingGlade",
 "Swamp Overworld Zone1": "TheFetidGlade",
 "Swamp Overworld Zone2": "TheMistFen"
}

function loadFile(o) {
    
        var fr = new FileReader();
        fr.onload = function(e)
            {
                showDataFile(e, o);
            };
        fr.readAsText(o.files[0]);
}


function getWorldData(textArray, worldMode) {

    zones = {}
            
    zones["Earth"] = {}
    zones["Rhom"] = {}
    zones["Yaesha"] = {}
    zones["Corsus"] = {}
    
    var currentMainLocation; 

    if (worldMode == "#adventure") {
        currentMainLocation = textArray[3].split("/")[1].split("_")[1]
        console.log(currentMainLocation)
    } else {
        currentMainLocation = "Fairview"
    }

    var currentSublocation = "";

    for (i=0; i < textArray.length; i ++) {
        var zone;
        var eventType;
        var eventName;
        var lastEventname;
        var inSmallDungeon = true;

        textLine = textArray[i]
        if ( textLine.search("World_City") != -1) {
            zone = "Earth"
        }
        if ( textLine.search("World_Wasteland") != -1) {
            zone = "Rhom"
        }
        if ( textLine.search("World_Jungle") != -1) {
            zone = "Yaesha"
        }
        if ( textLine.search("World_Swamp") != -1) {
            zone = "Corsus"
        }

        lastEventname = eventName

        console.log(textLine)

        if (textLine.search("SmallD") != -1) {
            eventType = "Side Dungeon"
            eventName = textLine.split("/")[3].split("_")[2]
            currentSublocation = sublocations[eventName]
            if (currentSublocation == undefined){
                currentSublocation = "Not added yet"
            } 
            inSmallDungeon = true
        }
        if (textLine.search("OverworldPOI") != -1) {
            eventType = "Point of Interest"
            eventName = textLine.split("/")[3].split("_")[2]
            currentSublocation = currentMainLocation
            if (worldMode == "#adventure") {
                currentSublocation = ''
            }
            if (currentSublocation == undefined){
                currentSublocation = "Not added yet"
            } 
            inSmallDungeon = true
        }
        if (textLine.search("Quest_Boss") != -1) {
            eventType = "World Boss"
            eventName = textLine.split("/")[3].split("_")[2]
            currentSublocation = sublocations[eventName]
            if (currentSublocation == undefined){
                currentSublocation = "Not added yet"
            } 
        }
        if (textLine.search("Siege") != -1) {
            eventType = "Siege"
            eventName = textLine.split("/")[3].split("_")[2]
            currentSublocation = sublocations[eventName]
            if (currentSublocation == undefined){
                currentSublocation = "Not added yet"
            } 
        }
        if (textLine.search("Mini") != -1) {
            eventType = "Miniboss"
            eventName = textLine.split("/")[3].split("_")[2]
            currentSublocation = sublocations[eventName]
            if (currentSublocation == undefined){
                currentSublocation = "Not added yet"
            } 
        }
        if (textLine.search("Quest_Event") != -1) {
            eventType = "Item Drop"
            eventName = textLine.split("/")[3].split("_")[2]

            // edge case for out of order items
            if (textLine.split("/")[1].split("_")[1] != textArray[i - 1].split("/")[1].split("_")[1]) {
                currentSublocation = ''
            }

        }

        if (textLine.search("Overworld_Zone") != -1) {
            currentMainLocation = textLine.split("/")[3].split("_")[1] + " " + textLine.split("/")[3].split("_")[2] + " " +  textLine.split("/")[3].split("_")[3]
            currentMainLocation = mainLocations[currentMainLocation]
        }
        
        if (eventName != lastEventname) {
          // Replacements
            if (eventName != undefined) {
                 eventName = eventName.replace('FlickeringHorror', 'DreamEater').replace('Wisp', 'HiveWisps').replace('TheRisen', 'Reanimators').replace('LizAndLiz', 'LizChicagoTypewriter').replace('Fatty', 'TheUncleanOne').replace('WastelandGuardian', 'Claviger').replace('RootEnt', 'EntBoss').replace('Wolf', 'TheRavager').replace('RootDragon', 'Singe').replace('SwarmMaster', 'Scourge').replace('RootWraith','Shroud').replace('RootTumbleweed', 'TheMangler').replace('Kincaller', 'Warden').replace('Tyrant','Thrall').replace('Vyr', 'ShadeAndShatter').replace('ImmolatorAndZephyr','ScaldAndSear').replace('RootBrute', 'Gorefist').replace('SlimeHulk', 'Canker').replace('BlinkFiend','Onslaught').replace('Sentinel', 'Raze').replace('Penitent', 'Letos Amulet').replace('LastWill', 'SupplyRunAssaultRifle').replace('SwampGuardian','Ixillis').replace('Splitter','RiphideLetosArmor')
                
            }
           
            if (zone != undefined && eventType != undefined && eventName != undefined) {

                if (zones[zone][eventType] != undefined) {
                    if (zones[zone][eventType].search(eventName) == -1) {
                        zones[zone][eventType] += ", " + eventName

                        if (worldMode == "#adventure") {
                            mainLocationText = ''
                        } else {
                            mainLocationText = currentMainLocation.split(/(?=[A-Z])/).join(' ').zt(1) + ": "
                        }
                        html = "<tr><td>" + zone.zt(1) + ": " + mainLocationText + currentSublocation.split(/(?=[A-Z])/).join(' ').zt(1) +  "</td><td>" + eventType.zt() + "</td><td>" + eventName.split(/(?=[A-Z])/).join(' ').zt(3) + "</td></tr>"   
                    }       
                } else {
                    zones[zone][eventType] = eventName

                        if (worldMode == "#adventure") {
                            mainLocationText = ''
                        } else {
                            mainLocationText = currentMainLocation.split(/(?=[A-Z])/).join(' ').zt(1) + ": "
                        }

                        html = "<tr><td>" + zone.zt(1) + ": " + mainLocationText + currentSublocation.split(/(?=[A-Z])/).join(' ').zt(1) +  "</td><td>" + eventType.zt() + "</td><td>" + eventName.split(/(?=[A-Z])/).join(' ').zt(3) + "</td></tr>"     
                }
                $(worldMode).append(html)
            }
            $('#filters, #filters-right').show()
        }            
    }


}
   


function showDataFile(e, o){

    $('tr:not(.header-row)').remove()

    text = e.target.result 
    text = text.split("/Game/Campaign_Main/Quest_Campaign_Ward13.Quest_Campaign_Ward13")[0]
    text = text.split("/Game/Campaign_Main/Quest_Campaign_City.Quest_Campaign_City")[1].replace(/Game/g,"\n")
    
    textArray = text.split("\n")


   adText = e.target.result
    adText = adText.split(/\/Quests\/Quest_AdventureMode(.+)/)[1]
    if (adText != undefined) {
        adventureMode = true
        adText = adText.replace(/Game/g,"\n")
        adTextArray = adText.split("\n")
    } else {
        adventureMode = false
    }

        
   

    if (adventureMode) {
        getWorldData(adTextArray, "#adventure")
    }  
    getWorldData(textArray, "#main")


}

$( document ).ready(function() {
    $('#toggle-items').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Item Drop'.zt()) != -1) {
                $(this).parent().show()
            }
        })
    })
     $('#toggle-sd').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Side Dungeon'.zt()) != -1) {
                $(this).parent().show()
            }
        })
    })
    $('#toggle-mb').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Miniboss'.zt()) != -1) {
                $(this).parent().show()
            }
        })
    })
    $('#toggle-adv').on('click', function() {
       $('.main-mode, .adventure-mode').toggle()
       if ($(this).text() == "顯示冒險模式") {
        $(this).text("顯示劇情模式") 
       } else {
         $(this).text("顯示冒險模式")
       }
    })
    $('#toggle-poi').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Point of Interest'.zt()) != -1) {
                $(this).parent().show()
            }
        })
    })
    $('#toggle-bosses').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('World Boss'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
    $('#toggle-sieges').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Siege'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
    $('#toggle-earth').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Earth'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
    $('#toggle-rhom').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Rhom'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
    $('#toggle-corsus').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Corsus'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
    $('#toggle-yaesha').on('click', function() {
       $('tr:not(.header-row)').hide()
        $('td').each(function() {
            if ($(this).text().search('Yaesha'.zt()) != -1) {
                $(this).parent().show()
            }
        })     
    })
        $('.toggle-all').on('click', function() {
            $('tr').show()
    })
})

