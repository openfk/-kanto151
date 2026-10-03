(() => {
  const raw = `妙蛙種子|フシギダネ
妙蛙草|フシギソウ
妙蛙花|フシギバナ
小火龍|ヒトカゲ
火恐龍|リザード
噴火龍|リザードン
傑尼龜|ゼニガメ
卡咪龜|カメール
水箭龜|カメックス
綠毛蟲|キャタピー
鐵甲蛹|トランセル
巴大蝶|バタフリー
獨角蟲|ビードル
鐵殼蛹|コクーン
大針蜂|スピアー
波波|ポッポ
比比鳥|ピジョン
大比鳥|ピジョット
小拉達|コラッタ
拉達|ラッタ
烈雀|オニスズメ
大嘴雀|オニドリル
阿柏蛇|アーボ
阿柏怪|アーボック
皮卡丘|ピカチュウ
雷丘|ライチュウ
穿山鼠|サンド
穿山王|サンドパン
尼多蘭|ニドラン♀
尼多娜|ニドリーナ
尼多后|ニドクイン
尼多朗|ニドラン♂
尼多力諾|ニドリーノ
尼多王|ニドキング
皮皮|ピッピ
皮可西|ピクシー
六尾|ロコン
九尾|キュウコン
胖丁|プリン
胖可丁|プクリン
超音蝠|ズバット
大嘴蝠|ゴルバット
走路草|ナゾノクサ
臭臭花|クサイハナ
霸王花|ラフレシア
派拉斯|パラス
派拉斯特|パラセクト
毛球|コンパン
摩魯蛾|モルフォン
地鼠|ディグダ
三地鼠|ダグトリオ
喵喵|ニャース
貓老大|ペルシアン
可達鴨|コダック
哥達鴨|ゴルダック
猴怪|マンキー
火爆猴|オコリザル
卡蒂狗|ガーディ
風速狗|ウインディ
蚊香蝌蚪|ニョロモ
蚊香君|ニョロゾ
蚊香泳士|ニョロボン
凱西|ケーシィ
勇基拉|ユンゲラー
胡地|フーディン
腕力|ワンリキー
豪力|ゴーリキー
怪力|カイリキー
喇叭芽|マダツボミ
口呆花|ウツドン
大食花|ウツボット
瑪瑙水母|メノクラゲ
毒刺水母|ドククラゲ
小拳石|イシツブテ
隆隆石|ゴローン
隆隆岩|ゴローニャ
小火馬|ポニータ
烈焰馬|ギャロップ
呆呆獸|ヤドン
呆殼獸|ヤドラン
小磁怪|コイル
三合一磁怪|レアコイル
大蔥鴨|カモネギ
嘟嘟|ドードー
嘟嘟利|ドードリオ
小海獅|パウワウ
白海獅|ジュゴン
臭泥|ベトベター
臭臭泥|ベトベトン
大舌貝|シェルダー
刺甲貝|パルシェン
鬼斯|ゴース
鬼斯通|ゴースト
耿鬼|ゲンガー
大岩蛇|イワーク
催眠貘|スリープ
引夢貘人|スリーパー
大鉗蟹|クラブ
巨鉗蟹|キングラー
霹靂電球|ビリリダマ
頑皮雷彈|マルマイン
蛋蛋|タマタマ
椰蛋樹|ナッシー
卡拉卡拉|カラカラ
嘎啦嘎啦|ガラガラ
飛腿郎|サワムラー
快拳郎|エビワラー
大舌頭|ベロリンガ
瓦斯彈|ドガース
雙彈瓦斯|マタドガス
獨角犀牛|サイホーン
鑽角犀獸|サイドン
吉利蛋|ラッキー
蔓藤怪|モンジャラ
袋獸|ガルーラ
墨海馬|タッツー
海刺龍|シードラ
角金魚|トサキント
金魚王|アズマオウ
海星星|ヒトデマン
寶石海星|スターミー
魔牆人偶|バリヤード
飛天螳螂|ストライク
迷唇姐|ルージュラ
電擊獸|エレブー
鴨嘴火獸|ブーバー
凱羅斯|カイロス
肯泰羅|ケンタロス
鯉魚王|コイキング
暴鯉龍|ギャラドス
拉普拉斯|ラプラス
百變怪|メタモン
伊布|イーブイ
水伊布|シャワーズ
雷伊布|サンダース
火伊布|ブースター
多邊獸|ポリゴン
菊石獸|オムナイト
多刺菊石獸|オムスター
化石盔|カブト
鐮刀盔|カブトプス
化石翼龍|プテラ
卡比獸|カビゴン
急凍鳥|フリーザー
閃電鳥|サンダー
火焰鳥|ファイヤー
迷你龍|ミニリュウ
哈克龍|ハクリュー
快龍|カイリュー
超夢|ミュウツー
夢幻|ミュウ`;

  const pokemon = raw.split("\n").map((line,i)=>{
    const [zh,jp]=line.split("|");
    return {id:i+1,zh,jp};
  });

  const STORAGE="pokemon-gen1-four-version-v2";
  const state={
    version:"green",
    caught:{green:new Set(),red:new Set(),blue:new Set(),yellow:new Set()}
  };

  const notes={
    green:"日版《ポケットモンスター 緑》",
    red:"日版《ポケットモンスター 赤》",
    blue:"日版《ポケットモンスター 青》",
    yellow:"《ポケットモンスター ピカチュウ》"
  };

  const unavailable={
    red:new Set([27,28,37,38,52,53,69,70,71,126,127]),
    green:new Set([23,24,43,44,45,56,57,58,59,123,125]),
    blue:new Set([23,24,37,38,56,57,69,70,71,125,126]),
    yellow:new Set([13,14,15,23,24,26,52,53,109,110,124,125,126])
  };

  const evo={
    2:["進化","妙蛙種子 Lv.16"],3:["進化","妙蛙草 Lv.32"],5:["進化","小火龍 Lv.16"],6:["進化","火恐龍 Lv.36"],
    8:["進化","傑尼龜 Lv.16"],9:["進化","卡咪龜 Lv.36"],11:["進化","綠毛蟲 Lv.7"],12:["進化","鐵甲蛹 Lv.10"],
    14:["進化","獨角蟲 Lv.7"],15:["進化","鐵殼蛹 Lv.10"],17:["進化","波波 Lv.18"],18:["進化","比比鳥 Lv.36"],
    20:["進化","小拉達 Lv.20"],22:["進化","烈雀 Lv.20"],24:["進化","阿柏蛇 Lv.22"],26:["道具進化","皮卡丘＋雷之石"],
    28:["進化","穿山鼠 Lv.22"],30:["進化","尼多蘭 Lv.16"],31:["道具進化","尼多娜＋月之石"],33:["進化","尼多朗 Lv.16"],
    34:["道具進化","尼多力諾＋月之石"],36:["道具進化","皮皮＋月之石"],38:["道具進化","六尾＋火之石"],
    40:["道具進化","胖丁＋月之石"],42:["進化","超音蝠 Lv.22"],44:["進化","走路草 Lv.21"],45:["道具進化","臭臭花＋葉之石"],
    47:["進化","派拉斯 Lv.24"],49:["進化","毛球 Lv.31"],51:["進化","地鼠 Lv.26"],53:["進化","喵喵 Lv.28"],
    55:["進化","可達鴨 Lv.33"],57:["進化","猴怪 Lv.28"],59:["道具進化","卡蒂狗＋火之石"],61:["進化","蚊香蝌蚪 Lv.25"],
    62:["道具進化","蚊香君＋水之石"],64:["進化","凱西 Lv.16"],65:["交換進化","勇基拉交換進化"],67:["進化","腕力 Lv.28"],
    68:["交換進化","豪力交換進化"],70:["進化","喇叭芽 Lv.21"],71:["道具進化","口呆花＋葉之石"],73:["進化","瑪瑙水母 Lv.30"],
    75:["進化","小拳石 Lv.25"],76:["交換進化","隆隆石交換進化"],78:["進化","小火馬 Lv.40"],80:["進化","呆呆獸 Lv.37"],
    82:["進化","小磁怪 Lv.30"],85:["進化","嘟嘟 Lv.31"],87:["進化","小海獅 Lv.34"],89:["進化","臭泥 Lv.38"],
    91:["道具進化","大舌貝＋水之石"],93:["進化","鬼斯 Lv.25"],94:["交換進化","鬼斯通交換進化"],97:["進化","催眠貘 Lv.26"],
    99:["進化","大鉗蟹 Lv.28"],101:["進化","霹靂電球 Lv.30"],103:["道具進化","蛋蛋＋葉之石"],105:["進化","卡拉卡拉 Lv.28"],
    110:["進化","瓦斯彈 Lv.35"],112:["進化","獨角犀牛 Lv.42"],117:["進化","墨海馬 Lv.32"],119:["進化","角金魚 Lv.33"],
    121:["道具進化","海星星＋水之石"],130:["進化","鯉魚王 Lv.20"],134:["道具進化","伊布＋水之石"],
    135:["道具進化","伊布＋雷之石"],136:["道具進化","伊布＋火之石"],139:["進化","菊石獸 Lv.40"],
    141:["進化","化石盔 Lv.40"],148:["進化","迷你龍 Lv.30"],149:["進化","哈克龍 Lv.55"]
  };

  const common={
    10:["野外","常青森林"],13:["野外","常青森林"],16:["野外","1號道路等"],19:["野外","1號道路等"],
    21:["野外","3號道路等"],25:["野外","常青森林等"],29:["野外","22號道路／狩獵地帶"],32:["野外","22號道路／狩獵地帶"],
    35:["野外","月見山"],39:["野外","3號道路"],41:["野外","月見山等洞窟"],46:["野外","月見山／狩獵地帶"],
    48:["野外","12～15號道路等"],50:["野外","地鼠洞穴"],54:["野外","雙子島等"],60:["釣魚","各地水域"],
    63:["野外","24、25號道路"],66:["野外","岩山隧道／冠軍之路"],72:["衝浪","19～21號道路等水域"],
    74:["野外","月見山／岩山隧道"],77:["野外","紅蓮鎮寶可夢屋"],79:["野外","雙子島等"],81:["野外","無人發電廠"],
    84:["野外","16～18號道路／狩獵地帶"],86:["野外","雙子島"],88:["野外","紅蓮鎮寶可夢屋"],90:["野外","雙子島"],
    92:["野外","寶可夢塔"],95:["野外","岩山隧道／冠軍之路"],96:["野外","11號道路"],98:["野外","雙子島等"],
    100:["野外","無人發電廠"],102:["野外","狩獵地帶"],104:["野外","寶可夢塔"],109:["野外","紅蓮鎮寶可夢屋"],
    111:["野外","狩獵地帶"],113:["野外","狩獵地帶，低機率"],114:["野外","21號道路"],115:["野外","狩獵地帶"],
    116:["釣魚","各地水域"],118:["釣魚","各地水域"],120:["釣魚／野外","雙子島及各地水域"],127:["野外","狩獵地帶"],
    128:["野外","狩獵地帶"],129:["釣魚／購買","破舊釣竿可在各地水域釣到；4號道路寶可夢中心可用500元購買"],131:["贈送","金黃市西爾佛公司 7F，擊敗勁敵後由員工贈送"],132:["野外","13～15號道路／華藍洞窟"],
    133:["贈送","玉虹市大廈頂樓房間取得"],137:["兌換","玉虹市遊戲城獎品兌換"],138:["化石","貝殼化石（かいのカセキ）：月見山二選一取得 → 紅蓮鎮寶可夢研究所復原"],
    140:["化石","甲殼化石（こうらのカセキ）：月見山二選一取得 → 紅蓮鎮寶可夢研究所復原"],142:["化石","秘密琥珀（ひみつのコハク）：深灰市博物館後門取得 → 紅蓮鎮寶可夢研究所復原"],
    143:["固定遭遇","12號／16號道路，用寶可夢之笛"],144:["固定遭遇","雙子島深處"],145:["固定遭遇","無人發電廠"],
    146:["固定遭遇","冠軍之路"],147:["釣魚","狩獵地帶使用厲害釣竿"],150:["固定遭遇","華藍洞窟最深處"],
    151:["特殊","正常遊戲流程無法取得"]
  };

  const redSpecial={
    23:["野外","4、8、9、10號道路等"],43:["野外","5、6、7、12～15、24、25號道路"],
    56:["野外","5～8號道路"],58:["野外","7、8號道路／寶可夢屋"],123:["野外／兌換","狩獵地帶／玉虹市遊戲城"],
    125:["野外","無人發電廠"]
  };
  const greenSpecial={
    27:["野外","4、8、9、10號道路等"],37:["野外","7、8號道路／寶可夢屋"],
    52:["野外","5～8號道路"],69:["野外","5、6、7、12～15、24、25號道路"],
    126:["野外","寶可夢屋"],127:["野外／兌換","狩獵地帶／玉虹市遊戲城"]
  };
  const blueSpecial={
    76:["NPC交換","紅蓮鎮寶可夢研究所，以凱西交換隆隆石，交換後進化為隆隆岩"],
    94:["NPC交換","華藍市民宅，以豪力交換鬼斯通，交換後進化為耿鬼"],
    108:["野外","日版藍可直接野外取得"],
    124:["野外","日版藍可直接野外取得"]
  };
  const yellowSpecial={
    1:["贈送","華藍市民宅 NPC；皮卡丘親密度足夠時取得妙蛙種子"],
    4:["贈送","24號道路北側 NPC 贈送小火龍"],
    7:["贈送","枯葉市警察 NPC；擊敗枯葉道館館主後取得傑尼龜"],
    25:["初始夥伴","遊戲開始時取得皮卡丘"],
    43:["野外","黃版可野外取得"],
    56:["野外","黃版可野外取得"],
    58:["野外","黃版可野外取得"],
    68:["NPC交換","地下通道（5～6號道路），以卡拉卡拉交換豪力，交換後進化為怪力"],
    69:["野外","黃版可野外取得"],
    123:["野外","狩獵地帶"],
    127:["野外","狩獵地帶"]
  };

  const evoFrom={
    2:1,3:2,5:4,6:5,8:7,9:8,11:10,12:11,14:13,15:14,17:16,18:17,20:19,22:21,24:23,26:25,28:27,30:29,31:30,33:32,34:33,36:35,38:37,40:39,42:41,44:43,45:44,47:46,49:48,51:50,53:52,55:54,57:56,59:58,61:60,62:61,64:63,65:64,67:66,68:67,70:69,71:70,73:72,75:74,76:75,78:77,80:79,82:81,85:84,87:86,89:88,91:90,93:92,94:93,97:96,99:98,101:100,103:102,105:104,110:109,112:111,117:116,119:118,121:120,130:129,134:133,135:133,136:133,139:138,141:140,148:147,149:148
  };

  const oneChoiceGroups={
    starters:[1,4,7],
    fossils:[138,140],
    dojo:[106,107],
    eevee:[134,135,136]
  };

  // 進化提示補上上一階的日文名稱，方便在日版遊戲的電腦盒子中尋找。
  function evolutionAcquire(id){
    const info=evo[id];
    if(!info) return null;
    const sourceId=evoFrom[id];
    const source=sourceId ? pokemon[sourceId-1] : null;
    if(!source) return info;
    const detail=info[1];
    const sourceLabel=`${source.zh}（${source.jp}）`;
    const localizedDetail=detail.startsWith(source.zh)
      ? sourceLabel + detail.slice(source.zh.length)
      : `${sourceLabel} → ${detail}`;
    return [info[0],localizedDetail];
  }




  // 第一世代（日版赤・綠・青・皮卡丘）地圖直接取得資料。
  // 僅收錄：野生遭遇、衝浪／釣魚、固定遭遇、贈送、購買、遊戲內交換。
  // 不因「可由此區寶可夢進化」而額外加入進化型。
  // 第一世代原版（日版紅／綠／青／皮卡丘）地圖直接取得資料。
  // 只列「在該地點能直接取得」的寶可夢：野生遭遇、衝浪、釣魚、固定遭遇、贈送、遊戲內交換／購買。
  // 不會因為某隻寶可夢能進化，就把其進化型自動塞進同一地點。
  const routeData={
    1:{red:[16,19],green:[16,19],blue:[16,19],yellow:[16,19]},
    2:{red:[13,16,19,122],green:[10,16,19,122],blue:[10,16,19,122],yellow:[16,19,29,32,122]},
    3:{red:[16,21,39],green:[16,21,39],blue:[16,21,39],yellow:[19,21,27,56]},
    4:{red:[19,21,23,54,60,98,118,129],green:[19,21,27,54,60,98,118,129],blue:[19,21,27,54,60,98,118,129],yellow:[19,21,27,56,60,118,119,129]},
    5:{red:[16,32,43,56],green:[16,32,52,69],blue:[16,43,52,60],yellow:[16,17,19,39,63,68]},
    6:{red:[16,43,56,60,90,98,118,129],green:[16,52,60,69,90,98,118,129],blue:[16,43,52,60,90,98,118,129],yellow:[16,17,19,39,54,55,60,63,118,129]},
    7:{red:[16,43,56,58],green:[16,37,52,69],blue:[16,43,52,58],yellow:[16,17,19,39,63]},
    8:{red:[16,23,56,58],green:[16,27,37,52],blue:[16,27,52,58],yellow:[16,17,19,39,63,64]},
    9:{red:[19,21,23],green:[19,21,27],blue:[19,21,27],yellow:[19,20,21,22,29,30,32,33]},
    10:{red:[21,23,60,61,79,100,118,129],green:[21,27,60,61,79,100,118,129],blue:[21,27,60,61,79,100,118,129],yellow:[19,20,29,32,60,66,81,98,99,116,118,129]},
    11:{red:[21,23,30,60,90,96,98,118,129],green:[21,27,30,60,90,96,98,118,129],blue:[21,27,60,90,96,98,115,118,129],yellow:[16,17,19,20,51,60,72,96,116,118,129]},
    12:{red:[16,43,44,48,60,72,98,118,129,143],green:[16,48,60,69,70,72,98,118,129,143],blue:[16,43,44,48,60,72,98,118,129,143],yellow:[16,17,43,44,60,69,70,79,80,83,116,117,118,129,143]},
    13:{red:[16,43,44,48,60,72,98,118,129,132],green:[16,48,60,69,70,72,98,118,129,132],blue:[16,43,44,48,60,72,98,118,129,132],yellow:[16,17,43,44,60,69,70,72,79,80,83,116,117,118,129]},
    14:{red:[16,17,43,44,48,132],green:[16,17,48,69,70,132],blue:[16,17,43,44,48,132],yellow:[17,43,44,48,49,69,70]},
    15:{red:[16,17,43,44,48,132],green:[16,17,48,69,70,132],blue:[16,17,43,44,48,132],yellow:[17,43,44,48,49,69,70]},
    16:{red:[19,20,21,84,143],green:[19,20,21,84,143],blue:[19,20,21,84,143],yellow:[19,20,21,22,84,143]},
    17:{red:[20,21,22,60,72,84,98,118,129],green:[20,21,22,60,72,84,98,118,129],blue:[20,21,22,60,72,84,98,118,129],yellow:[22,60,72,77,84,85,90,118,129]},
    18:{red:[20,21,22,60,72,84,98,108,118,129],green:[20,21,22,60,72,84,98,108,118,129],blue:[20,21,22,60,72,84,98,118,128,129],yellow:[19,20,21,22,47,60,72,84,90,118,129]},
    19:{red:[60,72,90,116,118,120,129],green:[60,72,90,116,118,120,129],blue:[60,72,90,116,118,120,129],yellow:[60,72,73,118,120,129]},
    20:{red:[60,72,90,116,118,120,129],green:[60,72,90,116,118,120,129],blue:[60,72,90,116,118,120,129],yellow:[60,72,73,118,120,129]},
    21:{red:[16,17,19,20,60,72,90,114,116,118,120,129],green:[16,17,19,20,60,72,90,114,116,118,120,129],blue:[16,17,19,20,60,72,90,114,116,118,120,129],yellow:[16,17,19,20,60,72,73,118,120,129]},
    22:{red:[19,21,29,32,60,118,129],green:[19,21,29,32,60,118,129],blue:[19,21,29,32,60,118,129],yellow:[19,21,29,32,56,60,61,118,129]},
    23:{red:[21,22,23,24,60,80,99,117,118,119,129,132],green:[21,22,27,28,60,80,99,117,118,119,129,132],blue:[21,22,27,28,60,80,99,117,118,119,129,132],yellow:[22,30,33,56,57,60,61,118,129]},
    24:{red:[13,14,16,43,54,60,63,98,118,129],green:[10,11,16,54,60,63,69,98,118,129],blue:[10,11,16,43,54,60,63,98,118,129],yellow:[4,16,17,43,48,60,69,118,119,129]},
    25:{red:[10,11,13,14,16,43,54,60,63,98,118,129],green:[10,11,13,14,16,54,60,63,69,98,118,129],blue:[10,11,13,14,16,43,54,60,63,98,118,129],yellow:[16,17,43,48,60,69,98,99,118,129]}
  };

  function routeTargets(n){
    return [...(routeData[n]?.[state.version]||[])];
  }


  function routeStatus(n){
    const targets=routeTargets(n);
    if(!targets.length) return "empty";
    const remain=targets.filter(id=>!current().has(id));
    return remain.length===0 ? "done" : "todo";
  }

  function renderTargetList(title,note,targets){
    const list=document.getElementById("areaPokemon");
    document.getElementById("areaTitle").textContent=title;
    document.getElementById("areaNote").textContent=note;
    const caughtCount=targets.filter(id=>current().has(id)).length;
    document.getElementById("areaCaught").textContent=caughtCount;
    document.getElementById("areaTotal").textContent=targets.length;
    document.getElementById("areaBar").style.width=(targets.length?caughtCount/targets.length*100:0)+"%";

    const remain=targets.filter(id=>!current().has(id));
    const practical=remain.filter(id=>targetStatus(id)==="todo");
    const trade=remain.filter(id=>targetStatus(id)==="trade");
    const replay=remain.filter(id=>targetStatus(id)==="replay");
    const advice=document.getElementById("areaAdvice");

    if(!targets.length){
      advice.innerHTML=`<strong>此區目前沒有固定圖鑑目標</strong><br>${note}`;
      list.innerHTML='<div class="map-empty">目前沒有需要列出的固定捕獲目標。</div>';
      return;
    }
    if(!remain.length){
      advice.innerHTML=`<strong style="color:var(--ok)">✓ 這個地區目前已完成</strong><br>這裡列出的圖鑑目標都已捕獲。`;
    }else if(practical.length){
      const names=practical.slice(0,3).map(id=>pokemon[id-1].zh).join("、");
      advice.innerHTML=`<strong>目前建議</strong><br>這區還有 ${remain.length} 個目標；可以先處理 <b>${names}</b>${practical.length>3?" 等":""}。`;
    }else{
      advice.innerHTML=`<strong>此區直接可做項目已處理完</strong><br>剩餘 ${trade.length} 個需要交換，${replay.length} 個屬於二選一／重玩類型。`;
    }

    list.innerHTML=targets.map(id=>{
      const p=pokemon[id-1];
      const got=current().has(id);
      const a=acquire(id);
      let stateText=got?"✓ 已捕獲":"○ 未捕獲";
      if(!got && a[0]==="需要交換") stateText="⇄ 需要交換";
      else if(!got && choiceBlocked(id)) stateText="↻ 重玩／交換";
      return `<button type="button" class="map-poke ${got?"caught":"todo"}" data-poke="${id}">
        <img src="${imageUrl(id)}" alt="${p.zh}">
        <span class="mp-info">
          <span class="mp-name">No.${pad(id)} ${p.zh} <span class="jp">${p.jp}</span></span>
          <span class="mp-method">${mapAcquireText(id,title)}</span>
        </span>
        <span class="mp-state">${stateText}</span>
      </button>`;
    }).join("");
  }

  const routePoints=[
    {n:1,x:19.9,y:61.6},{n:2,x:19.9,y:42.0},{n:3,x:28.6,y:19.6},{n:4,x:48.7,y:14.2},
    {n:5,x:57.7,y:45.2},{n:6,x:57.7,y:23.9},{n:7,x:50.5,y:30.5},{n:8,x:68.5,y:33.4},
    {n:9,x:68.8,y:14.2},{n:10,x:77.1,y:26.5},{n:11,x:68.0,y:57.0},{n:12,x:77.5,y:50.2},
    {n:13,x:70.7,y:71.3},{n:14,x:62.7,y:76.8},{n:15,x:57.0,y:82.0},{n:16,x:35.2,y:33.1},
    {n:17,x:29.0,y:50.8},{n:18,x:28.8,y:79.3},{n:19,x:48.6,y:90.8},{n:20,x:42.1,y:95.1},
    {n:21,x:19.8,y:86.3},{n:22,x:13.0,y:51.5},{n:23,x:10.0,y:44.5},{n:24,x:58.2,y:7.4},
    {n:25,x:64.3,y:2.9}
  ];

  const mapAreas=[
    // 座標維持既有定稿；資料改為第一世代原版各版本的「直接取得」清單。
    {id:"league",name:"石英高原",x:9.2,y:8.5,targets:[],note:"寶可夢聯盟／四天王所在地。"},
    {id:"victory",name:"冠軍之路",x:9.2,y:26.0,targetsByVersion:{red:[41,42,49,66,67,74,75,95,105,146],green:[41,42,49,66,67,74,75,95,105,146],blue:[41,42,49,66,67,74,75,95,105,146],yellow:[41,42,67,74,75,95,146]},note:"冠軍之路；只列原版可直接遭遇的寶可夢與固定的火焰鳥。"},
    {id:"pewter",name:"深灰市",x:19.8,y:20.0,targets:[],note:"深灰市；不把取得的道具或日後可復原的化石直接算成這裡的寶可夢。"},
    {id:"moon",name:"月見山",x:39.0,y:14.5,targetsByVersion:{red:[35,41,46,74],green:[35,41,46,74],blue:[35,41,46,74],yellow:[27,35,41,46,74]},note:"月見山；只列洞窟內直接可遭遇的寶可夢，化石寶可夢改列在紅蓮鎮復原處。"},
    {id:"diglett",name:"地鼠洞穴",x:24.8,y:26.0,targetsByVersion:{red:[50,51],green:[50,51],blue:[50,51],yellow:[50,51]},note:"地鼠洞穴。"},
    {id:"forest",name:"常青森林",x:19.6,y:34.2,targetsByVersion:{red:[10,11,13,14,25],green:[10,11,13,14,25],blue:[10,11,13,14,25],yellow:[10,11,16,17]},note:"常青森林；不把巴大蝶、大針蜂等進化結果自動算進來。黃版可直接遇到比比鳥。"},
    {id:"viridian",name:"常青市",x:19.5,y:51.5,targetsByVersion:{red:[60,72,118,129],green:[60,72,118,129],blue:[60,72,118,129],yellow:[60,118,129]},note:"常青市水域可直接釣到／遇到的寶可夢。"},
    {id:"pallet",name:"真新鎮",x:19.5,y:69.5,targetsByVersion:{red:[1,4,7,60,72,118,129],green:[1,4,7,60,72,118,129],blue:[1,4,7,60,72,118,129],yellow:[25,60,72,118,120,129]},note:"真新鎮；包含原版初始寶可夢與當地水域可直接取得的寶可夢。"},
    {id:"ceruleanCave",name:"華藍洞窟",x:53.0,y:9.5,targetsByVersion:{red:[24,26,40,42,47,49,60,64,80,82,85,97,99,101,105,112,113,117,118,119,129,132,150],green:[26,28,40,42,47,49,60,64,80,82,85,97,99,101,105,112,113,117,118,119,129,132,150],blue:[20,26,28,35,40,42,47,49,60,64,78,80,82,85,97,99,101,105,112,113,117,118,119,129,132,150],yellow:[28,42,44,47,49,60,70,75,108,111,112,113,118,119,129,132,150]},note:"華藍洞窟；包含原版洞窟野生遭遇、釣魚與最深處的超夢。"},
    {id:"cerulean",name:"華藍市",x:58.2,y:17.3,targetsByVersion:{red:[54,60,98,118,124,129],green:[54,60,98,118,124,129],blue:[54,60,94,98,118,129],yellow:[1,60,118,119,129]},note:"華藍市；包含釣魚、黃版妙蛙種子贈送，以及各版本的遊戲內交換。"},
    {id:"celadon",name:"玉虹市",x:43.5,y:33.0,targetsByVersion:{red:[30,35,60,61,63,79,118,123,129,133,137,147],green:[33,35,60,61,63,79,118,127,129,133,137,147],blue:[25,36,60,61,63,79,116,118,129,133,137,148],yellow:[37,40,60,63,118,123,127,129,133,137]},note:"玉虹市；包含當地水域、伊布贈送與遊戲中心可直接兌換的寶可夢。"},
    {id:"saffron",name:"金黃市",x:58.2,y:33.0,targetsByVersion:{red:[106,107,131],green:[106,107,131],blue:[106,107,131],yellow:[106,107,131]},note:"金黃市；格鬥道場二選一與西爾佛公司的拉普拉斯。"},
    {id:"lavender",name:"紫苑鎮／寶可夢塔",x:77.5,y:33.0,targetsByVersion:{red:[92,93,104],green:[92,93,104],blue:[92,93,104],yellow:[92,93,104]},note:"寶可夢塔；只列可直接捕獲的鬼斯、鬼斯通與卡拉卡拉，不把進化型或不可捕獲的幽靈嘎啦嘎啦算進來。"},
    {id:"rock",name:"岩山隧道",x:77.7,y:20.5,targetsByVersion:{red:[41,66,74,95],green:[41,66,74,95],blue:[41,66,74,95,132],yellow:[41,66,74,95]},note:"岩山隧道；依日版紅／綠／青／皮卡丘版分開。"},
    {id:"power",name:"無人發電廠",x:82.0,y:26.5,targetsByVersion:{red:[25,81,82,100,101,125,145],green:[25,26,81,82,100,101,145],blue:[25,26,81,82,100,101,145],yellow:[81,82,88,89,100,101,145]},note:"無人發電廠；包含野生遭遇、偽裝成道具球的固定遭遇與閃電鳥。"},
    {id:"vermilion",name:"枯葉市",x:58.2,y:58.0,targetsByVersion:{red:[60,83,90,98,118,129],green:[60,83,90,98,118,129],blue:[60,83,90,98,118,129],yellow:[7,60,72,90,116,118,120,129]},note:"枯葉市；包含當地釣魚、紅綠青的大蔥鴨交換，以及黃版傑尼龜贈送。"},
    {id:"safari",name:"狩獵地帶",x:49.0,y:76.5,targetsByVersion:{red:[29,30,32,33,46,47,48,49,54,60,79,84,98,102,111,113,115,118,123,128,129,147],green:[29,30,32,33,46,47,48,49,54,60,79,84,98,102,111,113,115,118,127,128,129,147],blue:[29,30,32,33,46,47,48,49,54,60,79,84,98,102,108,111,113,118,123,127,129,147],yellow:[29,30,32,33,46,47,60,102,104,105,111,113,114,115,118,123,127,128,129,147,148]},note:"狩獵地帶；合併各區域的野生遭遇與釣魚，但不額外加入牠們的進化型。"},
    {id:"fuchsia",name:"淺紅市",x:49.0,y:84.0,targetsByVersion:{red:[60,98,118,119,129],green:[60,98,118,119,129],blue:[60,98,118,119,129],yellow:[60,118,129,130]},note:"淺紅市本身的水域直接取得資料；狩獵地帶另列。"},
    {id:"seafoam",name:"雙子島",x:33.0,y:94.0,targetsByVersion:{red:[41,42,54,55,60,79,80,86,87,90,116,117,118,120,129,144],green:[41,42,54,55,60,79,80,86,87,90,98,99,116,118,120,129,144],blue:[41,42,60,79,80,86,87,90,98,99,116,118,120,124,129,144],yellow:[41,42,60,72,79,80,86,87,98,99,118,120,129,144]},note:"雙子島；包含各樓層野生遭遇、水域、釣魚與固定的急凍鳥。"},
    {id:"cinnabar",name:"紅蓮鎮",x:19.5,y:94.0,targetsByVersion:{red:[58,60,77,86,88,89,90,101,109,110,114,116,118,120,129,138,140,142],green:[37,60,77,86,88,89,90,101,109,110,114,116,118,120,126,129,138,140,142],blue:[58,60,76,77,79,88,89,90,98,109,110,116,118,120,129,138,140,142],yellow:[19,20,58,60,72,87,88,89,112,118,120,129,132,138,140,142]},note:"紅蓮鎮與寶可夢屋；包含野生／釣魚、研究所交換，以及實際在研究所復原取得的化石寶可夢。"}
  ];

  // 依地圖資料反查目前版本的直接取得地點，讓「只看未捕獲」與地圖攻略共用同一份資料來源。
  function directLocations(id){
    const places=[];
    for(const [routeNo,versions] of Object.entries(routeData)){
      if((versions?.[state.version]||[]).includes(id)) places.push(`${routeNo}號道路`);
    }
    for(const area of mapAreas){
      const targets=area.targetsByVersion?.[state.version] ?? area.targets ?? [];
      if(targets.includes(id)) places.push(area.name);
    }
    return [...new Set(places)];
  }

  // 玉虹市遊戲城（第一世代日版）獎品。數值為兌換所需代幣。
  const gameCornerPrizes={
    red:{63:180,35:500,30:1200,147:2800,123:5500,137:9999},
    green:{63:120,35:750,33:1200,127:2500,147:4600,137:6500},
    blue:{63:150,25:620,116:1000,36:2880,148:5400,137:8300},
    yellow:{63:230,37:1000,40:2680,123:6500,127:6500,137:9999}
  };

  const pokeLabel=id=>{
    const p=pokemon[id-1];
    return p ? `${p.zh}（${p.jp}）` : `No.${id}`;
  };

  // 第一世代日版的遊戲內 NPC 交換。
  // getId 是玩家最後實際登錄到圖鑑的寶可夢；receiveId 用於交換後立即進化的情況。
  const inGameTrades={
    red:[
      {place:"2號道路",spot:"民宅 NPC",giveId:63,getId:122},
      {place:"5號道路",spot:"地下通道（5～6號道路）NPC",giveId:29,getId:32},
      {place:"11號道路",spot:"關卡 NPC",giveId:33,getId:30},
      {place:"18號道路",spot:"關卡 NPC",giveId:80,getId:108},
      {place:"華藍市",spot:"民宅 NPC",giveId:61,getId:124},
      {place:"枯葉市",spot:"民宅 NPC",giveId:21,getId:83},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:26,getId:101},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:48,getId:114},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:77,getId:86}
    ],
    green:[
      {place:"2號道路",spot:"民宅 NPC",giveId:63,getId:122},
      {place:"5號道路",spot:"地下通道（5～6號道路）NPC",giveId:29,getId:32},
      {place:"11號道路",spot:"關卡 NPC",giveId:33,getId:30},
      {place:"18號道路",spot:"關卡 NPC",giveId:80,getId:108},
      {place:"華藍市",spot:"民宅 NPC",giveId:61,getId:124},
      {place:"枯葉市",spot:"民宅 NPC",giveId:21,getId:83},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:26,getId:101},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:48,getId:114},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:77,getId:86}
    ],
    blue:[
      {place:"2號道路",spot:"民宅 NPC",giveId:39,getId:122},
      {place:"5號道路",spot:"地下通道（5～6號道路）NPC",giveId:19,getId:60},
      {place:"11號道路",spot:"關卡 NPC",giveId:112,getId:115},
      {place:"18號道路",spot:"關卡 NPC",giveId:53,getId:128},
      {place:"華藍市",spot:"民宅 NPC",giveId:67,receiveId:93,getId:94},
      {place:"枯葉市",spot:"民宅 NPC",giveId:16,getId:83},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:64,receiveId:75,getId:76},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:86,getId:79},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:58,getId:98}
    ],
    yellow:[
      {place:"2號道路",spot:"民宅 NPC",giveId:35,getId:122},
      {place:"5號道路",spot:"地下通道（5～6號道路）NPC",giveId:104,receiveId:67,getId:68},
      {place:"11號道路",spot:"關卡 NPC",giveId:108,getId:51},
      {place:"18號道路",spot:"關卡 NPC",giveId:114,getId:47},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:55,getId:112},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:58,getId:87},
      {place:"紅蓮鎮",spot:"寶可夢研究所 NPC",giveId:115,getId:89}
    ]
  };

  function tradeFor(id,place=null){
    return (inGameTrades[state.version]||[]).find(t=>t.getId===id && (!place || t.place===place)) || null;
  }

  function tradeDetail(t,includePlace=true){
    const prefix=includePlace ? `${t.place}${t.spot}，` : `${t.spot}，`;
    if(t.receiveId && t.receiveId!==t.getId){
      return `${prefix}以${pokeLabel(t.giveId)}交換${pokeLabel(t.receiveId)}，交換後進化為${pokeLabel(t.getId)}`;
    }
    return `${prefix}以${pokeLabel(t.giveId)}交換取得`;
  }

  function specialAcquireOptions(id){
    const options=[];
    const covered=new Set();

    // 所有版本的遊戲內交換都在這裡統一處理，避免只顯示「NPC交換」卻沒寫要拿誰去換。
    for(const t of (inGameTrades[state.version]||[]).filter(t=>t.getId===id)){
      options.push(tradeDetail(t,true));
      covered.add(t.place);
    }

    // 紅／綠／青的初始寶可夢；另外兩隻仍需交換或重玩。
    if(state.version!=="yellow" && [1,4,7].includes(id)){
      options.push("真新鎮大木博士研究所三選一取得");
      covered.add("真新鎮");
    }
    if(state.version==="yellow" && id===25){
      options.push("真新鎮大木博士研究所取得初始夥伴皮卡丘");
      covered.add("真新鎮");
    }

    // 黃版三隻御三家為劇情贈送。
    if(state.version==="yellow" && id===1){
      options.push("華藍市民宅 NPC 贈送；皮卡丘親密度足夠時可取得");
      covered.add("華藍市");
    }
    if(state.version==="yellow" && id===4){
      options.push("24號道路北側 NPC 贈送");
      covered.add("24號道路");
    }
    if(state.version==="yellow" && id===7){
      options.push("枯葉市警察 NPC 贈送；擊敗枯葉道館館主後可取得");
      covered.add("枯葉市");
    }

    // 一次性贈送。
    if(id===133){
      options.push("玉虹市大廈頂樓房間取得伊布");
      covered.add("玉虹市");
    }
    if(id===106 || id===107){
      options.push(`金黃市格鬥道場，擊敗首領後${pokeLabel(106)}／${pokeLabel(107)}二選一`);
      covered.add("金黃市");
    }
    if(id===131){
      options.push("金黃市西爾佛公司 7F，擊敗勁敵後由員工贈送");
      covered.add("金黃市");
    }

    // 化石復原。
    if(id===138){
      options.push("紅蓮鎮寶可夢研究所，用貝殼化石（かいのカセキ）復原；貝殼化石（かいのカセキ）在月見山與甲殼化石（こうらのカセキ）二選一");
      covered.add("紅蓮鎮");
    }
    if(id===140){
      options.push("紅蓮鎮寶可夢研究所，用甲殼化石（こうらのカセキ）復原；甲殼化石（こうらのカセキ）在月見山與貝殼化石（かいのカセキ）二選一");
      covered.add("紅蓮鎮");
    }
    if(id===142){
      options.push("紅蓮鎮寶可夢研究所，用秘密琥珀（ひみつのコハク）復原；秘密琥珀（ひみつのコハク）在深灰市博物館後門取得");
      covered.add("紅蓮鎮");
    }

    // 迷你龍／哈克龍在狩獵地帶的釣魚方式要明確寫釣竿。
    if(id===147){
      options.push("狩獵地帶使用厲害釣竿釣魚取得");
      covered.add("狩獵地帶");
    }
    if(id===148 && state.version==="yellow"){
      options.push("狩獵地帶使用厲害釣竿釣魚取得");
      covered.add("狩獵地帶");
    }

    // 若目前版本可在玉虹市遊戲城兌換，補上精確代幣數。
    const coins=gameCornerPrizes[state.version]?.[id];
    if(coins){
      options.push(`玉虹市遊戲城獎品兌換（${coins.toLocaleString("zh-TW")} 枚代幣）`);
      covered.add("玉虹市");
    }

    return {options,covered};
  }


  // 地圖攻略中的取得方式顯示「這個地點實際怎麼拿」。
  // 特殊取得優先於泛用的野外／釣魚文字。
  function mapAcquireText(id, place){
    const base=acquire(id);

    // 遊戲內 NPC 交換。
    const trade=tradeFor(id,place);
    if(trade){
      return `NPC交換｜${tradeDetail(trade,false)}`;
    }

    // 4 號道路寶可夢中心可直接買鯉魚王，其他地點才是釣魚。
    if(place==="4號道路" && id===129){
      return "購買｜月見山前寶可夢中心，向 NPC 用 500 元購買";
    }

    // 黃版三隻御三家與初始夥伴。
    if(state.version==="yellow" && place==="華藍市" && id===1){
      return "贈送｜民宅 NPC；皮卡丘親密度足夠時可取得";
    }
    if(state.version==="yellow" && place==="24號道路" && id===4){
      return "贈送｜道路北側 NPC 贈送";
    }
    if(state.version==="yellow" && place==="枯葉市" && id===7){
      return "贈送｜警察 NPC；擊敗枯葉道館館主後可取得";
    }
    if(place==="真新鎮" && state.version!=="yellow" && [1,4,7].includes(id)){
      return "初始寶可夢｜大木博士研究所三選一";
    }
    if(place==="真新鎮" && state.version==="yellow" && id===25){
      return "初始夥伴｜大木博士研究所取得";
    }

    // 一次性贈送。
    if(place==="玉虹市" && id===133){
      return "贈送｜玉虹市大廈頂樓房間取得";
    }
    if(place==="金黃市" && (id===106 || id===107)){
      return "贈送｜格鬥道場擊敗首領後二選一";
    }
    if(place==="金黃市" && id===131){
      return "贈送｜西爾佛公司 7F，擊敗勁敵後由員工贈送";
    }

    // 化石復原。
    if(place==="紅蓮鎮" && id===138){
      return "化石復原｜寶可夢研究所，用貝殼化石（かいのカセキ）復原（月見山二選一）";
    }
    if(place==="紅蓮鎮" && id===140){
      return "化石復原｜寶可夢研究所，用甲殼化石（こうらのカセキ）復原（月見山二選一）";
    }
    if(place==="紅蓮鎮" && id===142){
      return "化石復原｜寶可夢研究所，用秘密琥珀（ひみつのコハク）復原（深灰市博物館後門取得）";
    }

    // 狩獵地帶特殊釣魚。
    if(place==="狩獵地帶" && id===147){
      return "釣魚｜使用厲害釣竿";
    }
    if(place==="狩獵地帶" && id===148 && state.version==="yellow"){
      return "釣魚｜使用厲害釣竿";
    }

    // 玉虹市遊戲城兌換。
    if(place==="玉虹市"){
      const coins=gameCornerPrizes[state.version]?.[id];
      if(coins){
        return `兌換｜遊戲城獎品兌換（${coins.toLocaleString("zh-TW")} 枚代幣）`;
      }
    }

    // 固定遭遇。
    if((place==="12號道路" || place==="16號道路") && id===143){
      return "固定遭遇｜使用寶可夢之笛喚醒卡比獸";
    }
    if(place==="雙子島" && id===144){
      return "固定遭遇｜雙子島深處的急凍鳥";
    }
    if(place==="無人發電廠" && id===145){
      return "固定遭遇｜無人發電廠深處的閃電鳥";
    }
    if(place==="冠軍之路" && id===146){
      return "固定遭遇｜冠軍之路內的火焰鳥";
    }
    if(place==="華藍洞窟" && id===150){
      return "固定遭遇｜華藍洞窟最深處的超夢";
    }

    // 一般取得也把「方式」說明清楚，不再用含糊的「此區直接取得」。
    if(base[0]==="釣魚") return `釣魚｜${id===129 ? "使用破舊釣竿" : "此區水域"}`;
    if(base[0]==="釣魚／購買") return "釣魚｜使用破舊釣竿";
    if(base[0]==="衝浪") return "衝浪｜此區水域遭遇";
    if(base[0]==="釣魚／野外") return "野外／釣魚｜此區可直接取得";
    if(base[0]==="野外" || base[0].includes("野外")) return "野外遭遇｜此區可直接捕獲";

    const usefulMethods=new Set([
      "固定遭遇","贈送","NPC交換","兌換","化石","初始寶可夢","初始夥伴"
    ]);
    if(usefulMethods.has(base[0])) return `${base[0]}｜${base[1]}`;

    return `${base[0]}｜${base[1]}`;
  }

  function dexAcquire(id){
    const base=acquire(id);
    // 版本限定且必須靠外部交換時，不要讓地圖資料誤導成可直接取得。
    if(base[0]==="需要交換") return base;

    const {options,covered}=specialAcquireOptions(id);
    const locations=directLocations(id).filter(place=>!covered.has(place));

    if(options.length){
      if(locations.length){
        const short=locations.length>6 ? `${locations.slice(0,6).join("、")} 等` : locations.join("、");
        options.push(`其他直接取得：${short}`);
      }
      return ["取得方式",options.join("；")];
    }

    // 若進化型本身也能直接捕獲，兩種方式一起顯示，避免「進化提示」和「直接捕獲地點」互相蓋掉。
    const evolutionMethods=new Set(["進化","道具進化","交換進化"]);
    if(evolutionMethods.has(base[0])){
      if(locations.length){
        const short=locations.length>6 ? `${locations.slice(0,6).join("、")} 等` : locations.join("、");
        return ["取得方式",`${base[0]}：${base[1]}；也可直接取得：${short}`];
      }
      return base;
    }

    // 贈送、化石、固定遭遇等原本就有明確方法時，保留方法，不要被地點清單蓋掉。
    const preserveMethods=new Set([
      "固定遭遇","贈送","NPC交換","兌換","化石","特殊","初始寶可夢","初始夥伴"
    ]);
    if(preserveMethods.has(base[0])) return base;

    if(locations.length){
      return ["取得地點",locations.join("、")];
    }
    return base;
  }


  function load(){
    try{
      const data=JSON.parse(localStorage.getItem(STORAGE)||"{}");
      if(data.version && state.caught[data.version]) state.version=data.version;
      for(const v of ["green","red","blue","yellow"]){
        state.caught[v]=new Set(Array.isArray(data[v])?data[v]:[]);
      }
    }catch(e){}
  }
  function save(){
    const out={version:state.version};
    for(const v of ["green","red","blue","yellow"]) out[v]=[...state.caught[v]].sort((a,b)=>a-b);
    localStorage.setItem(STORAGE,JSON.stringify(out));
  }
  function imageUrl(id){
    const base="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/";
    return state.version==="yellow"
      ? `${base}yellow/${id}.png`
      : `${base}red-blue/${id}.png`;
  }
  function acquire(id){
    if(id===151) return common[151];
    if(unavailable[state.version].has(id)){
      return ["需要交換","此版本正常流程無法取得，需從其他版本交換"];
    }
    if(state.version==="yellow" && yellowSpecial[id]) return yellowSpecial[id];
    if(state.version==="blue" && blueSpecial[id]) return blueSpecial[id];
    if(state.version==="red" && redSpecial[id]) return redSpecial[id];
    if(state.version==="green" && greenSpecial[id]) return greenSpecial[id];
    if(state.version!=="yellow" && [1,4,7].includes(id)){
      return ["初始寶可夢","大木博士研究所三選一；另外兩隻需交換"];
    }
    if(evo[id]) return evolutionAcquire(id);
    if(common[id]) return common[id];
    if(id===83){
      if(state.version==="yellow") return ["野外","12、13號道路"];
      return state.version==="blue"
        ? ["NPC交換","枯葉市民宅以波波（ポッポ）交換取得"]
        : ["NPC交換","枯葉市民宅以烈雀（オニスズメ）交換取得"];
    }
    if(id===106 || id===107) return ["贈送","金黃市格鬥道場，擊敗首領後二選一"];
    if(id===108){
      const t=tradeFor(id);
      if(t) return ["NPC交換",tradeDetail(t,true)];
    }
    if(id===122){
      if(state.version==="blue") return ["NPC交換","2號道路民宅以胖丁（プリン）交換取得"];
      if(state.version==="yellow") return ["NPC交換","2號道路民宅以皮皮（ピッピ）交換取得"];
      return ["NPC交換","2號道路民宅以凱西（ケーシィ）交換取得"];
    }
    if(id===124){
      const t=tradeFor(id);
      if(t) return ["NPC交換",tradeDetail(t,true)];
    }
    return ["野外","可於此版本關都地區野外／洞窟／水域取得"];
  }

  const grid=document.getElementById("grid");
  const search=document.getElementById("search");
  const uncaughtOnly=document.getElementById("uncaughtOnly");
  const empty=document.getElementById("empty");
  const backup=document.getElementById("backup");
  const backupText=document.getElementById("backupText");
  const backupTitle=document.getElementById("backupTitle");
  const backupMsg=document.getElementById("backupMsg");
  const applyImport=document.getElementById("applyImport");
  const current=()=>state.caught[state.version];
  const pad=n=>String(n).padStart(3,"0");


  let activePage="dexPage";
  let selectedAreaId="pallet";
  let selectedRouteNo=null;

  function areaById(id){ return mapAreas.find(a=>a.id===id) || mapAreas[0]; }

  function areaTargetsFor(area){
    const raw = area.targetsByVersion?.[state.version] ?? area.targets ?? [];
    return raw.filter(id=>!unavailable[state.version].has(id));
  }

  function targetStatus(id){
    if(current().has(id)) return "caught";
    const a=acquire(id);
    if(a[0]==="需要交換") return "trade";
    if(choiceBlocked(id)) return "replay";
    return "todo";
  }


  function renderRouteHotspots(){
    const stage=document.getElementById("mapStage");
    if(!stage) return;
    stage.querySelectorAll(".route-hotspot").forEach(x=>x.remove());
    routePoints.forEach(r=>{
      const b=document.createElement("button");
      b.type="button";
      b.className="route-hotspot "+routeStatus(r.n);
      b.style.left=r.x+"%";
      b.style.top=r.y+"%";
      b.title=r.n+"號道路";
      b.setAttribute("aria-label",r.n+"號道路");
      b.textContent=String(r.n);
      b.addEventListener("click",()=>{
        selectedRouteNo=r.n;
        selectedAreaId=null;
        document.getElementById("mapVersionName").textContent=notes[state.version];
        renderTargetList(
          r.n+"號道路",
          r.n+"號道路・"+notes[state.version]+"。下方只列出目前版本在此區域可直接遇到／取得的第一世代圖鑑目標。",
          routeTargets(r.n)
        );
        renderMapHotspots();
        stage.querySelectorAll(".route-hotspot").forEach(x=>x.classList.toggle("active",Number(x.textContent)===r.n));
      });
      stage.appendChild(b);
    });
  }

  function renderMapHotspots(){
    const stage=document.getElementById("mapStage");
    if(!stage) return;
    stage.querySelectorAll(".hotspot").forEach(x=>x.remove());
    renderRouteHotspots();

    mapAreas.forEach(area=>{
      const targets=areaTargetsFor(area);
      const statuses=targets.map(targetStatus);
      const done=targets.length>0 && statuses.every(s=>s==="caught");
      const b=document.createElement("button");
      b.type="button";
      b.className="hotspot"+(done?" done":"")+(targets.length===0?" empty-target":"")+(selectedRouteNo===null && selectedAreaId===area.id?" active":"");
      b.style.left=area.x+"%";
      b.style.top=area.y+"%";
      b.dataset.area=area.id;
      b.title=area.name;
      b.setAttribute("aria-label",area.name);
      stage.appendChild(b);
    });
  }

  function renderAreaSelect(){
    const sel=document.getElementById("areaSelectMobile");
    if(!sel) return;
    sel.innerHTML=mapAreas.map(a=>`<option value="${a.id}" ${a.id===selectedAreaId?"selected":""}>${a.name}</option>`).join("");
  }

  function renderMap(){
    if(selectedRouteNo!==null){
      document.getElementById("mapVersionName").textContent=notes[state.version];
      renderTargetList(
        selectedRouteNo+"號道路",
        selectedRouteNo+"號道路・"+notes[state.version]+"。下方只列出目前版本在此區域可直接遇到／取得的第一世代圖鑑目標。",
        routeTargets(selectedRouteNo)
      );
      renderMapHotspots();
      renderAreaSelect();
      return;
    }
    const area=areaById(selectedAreaId);
    const list=document.getElementById("areaPokemon");
    if(!list) return;

    document.getElementById("mapVersionName").textContent=notes[state.version];
    document.getElementById("areaTitle").textContent=area.name;
    document.getElementById("areaNote").textContent=area.note;

    const areaTargets=areaTargetsFor(area);
    const caughtCount=areaTargets.filter(id=>current().has(id)).length;
    document.getElementById("areaCaught").textContent=caughtCount;
    document.getElementById("areaTotal").textContent=areaTargets.length;
    document.getElementById("areaBar").style.width=(areaTargets.length?caughtCount/areaTargets.length*100:0)+"%";

    const remain=areaTargets.filter(id=>!current().has(id));
    const practical=remain.filter(id=>{
      const s=targetStatus(id);
      return s==="todo";
    });
    const trade=remain.filter(id=>targetStatus(id)==="trade");
    const replay=remain.filter(id=>targetStatus(id)==="replay");

    const advice=document.getElementById("areaAdvice");
    if(areaTargets.length===0){
      advice.innerHTML=`<strong>城市／路線節點</strong><br>${area.note}`;
    }else if(remain.length===0){
      advice.innerHTML=`<strong style="color:var(--ok)">✓ 這個地區目前已完成</strong><br>這裡列出的圖鑑目標都已捕獲。`;
    }else if(practical.length){
      const names=practical.slice(0,3).map(id=>pokemon[id-1].zh).join("、");
      advice.innerHTML=`<strong>目前建議</strong><br>這區還有 ${remain.length} 個目標；可以先處理 <b>${names}</b>${practical.length>3?" 等":""}。`;
    }else{
      advice.innerHTML=`<strong>此區直接可做項目已處理完</strong><br>剩餘 ${trade.length} 個需要交換，${replay.length} 個屬於二選一／重玩類型。`;
    }

    if(areaTargets.length===0){
      list.innerHTML='<div class="map-empty">這個節點目前不放固定捕獲清單；之後可以再擴充成道路、商店、NPC 交換或劇情攻略。</div>';
    }else{
      list.innerHTML=areaTargets.map(id=>{
        const p=pokemon[id-1];
        const got=current().has(id);
        const a=acquire(id);
        let stateText=got?"✓ 已捕獲":"○ 未捕獲";
        if(!got && a[0]==="需要交換") stateText="⇄ 需要交換";
        else if(!got && choiceBlocked(id)) stateText="↻ 重玩／交換";
        return `<button type="button" class="map-poke ${got?"caught":"todo"}" data-poke="${id}">
          <img src="${imageUrl(id)}" alt="${p.zh}">
          <span class="mp-info">
            <span class="mp-name">No.${pad(id)} ${p.zh} <span class="jp">${p.jp}</span></span>
            <span class="mp-method">${mapAcquireText(id,area.name)}</span>
          </span>
          <span class="mp-state">${stateText}</span>
        </button>`;
      }).join("");
    }

    renderMapHotspots();
    renderAreaSelect();
  }

  function setArea(id,scroll=false){
    selectedRouteNo=null;
    selectedAreaId=id;
    renderMap();
    if(scroll && window.innerWidth<=900){
      document.getElementById("areaPanel")?.scrollIntoView({behavior:"smooth",block:"start"});
    }
  }

  function setPage(pageId){
    activePage=pageId;
    document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===pageId));
    document.querySelectorAll(".main-tab").forEach(b=>b.classList.toggle("active",b.dataset.page===pageId));
    if(pageId==="mapPage") renderMap();
    if(pageId==="typePage") renderTypePage();
    if(pageId==="shopPage") renderShop();
    window.scrollTo({top:0,behavior:"smooth"});
  }

  // ===== 第一世代屬性相剋 =====
  const gen1Types = [
    ["normal","一般","⬜","物理"],["fighting","格鬥","🥊","物理"],["flying","飛行","🪽","物理"],
    ["poison","毒","☠️","物理"],["ground","地面","⛰️","物理"],["rock","岩石","🪨","物理"],
    ["bug","蟲","🐛","物理"],["ghost","幽靈","👻","物理"],["fire","火","🔥","特殊"],
    ["water","水","💧","特殊"],["grass","草","🌿","特殊"],["electric","電","⚡","特殊"],
    ["psychic","超能力","🔮","特殊"],["ice","冰","❄️","特殊"],["dragon","龍","🐉","特殊"]
  ];
  const gen1Chart = {
    normal:{rock:.5,ghost:0},
    fighting:{normal:2,flying:.5,poison:.5,rock:2,bug:.5,ghost:0,psychic:.5,ice:2},
    flying:{fighting:2,bug:2,grass:2,rock:.5,electric:.5},
    poison:{grass:2,bug:2,poison:.5,ground:.5,rock:.5,ghost:.5},
    ground:{poison:2,rock:2,fire:2,electric:2,grass:.5,bug:.5,flying:0},
    rock:{flying:2,bug:2,fire:2,ice:2,fighting:.5,ground:.5},
    bug:{grass:2,psychic:2,poison:2,fighting:.5,flying:.5,ghost:.5,fire:.5},
    ghost:{ghost:2,psychic:0,normal:0},
    fire:{bug:2,grass:2,ice:2,fire:.5,water:.5,rock:.5,dragon:.5},
    water:{ground:2,rock:2,fire:2,water:.5,grass:.5,dragon:.5},
    grass:{ground:2,rock:2,water:2,flying:.5,poison:.5,bug:.5,fire:.5,grass:.5,dragon:.5},
    electric:{flying:2,water:2,grass:.5,electric:.5,dragon:.5,ground:0},
    psychic:{fighting:2,poison:2,psychic:.5},
    ice:{flying:2,ground:2,grass:2,dragon:2,water:.5,ice:.5},
    dragon:{dragon:2}
  };
  const gen1TypeMeta=Object.fromEntries(gen1Types.map(t=>[t[0],t]));
  let selectedDefTypes=["electric"];
  const typeVal=(a,d)=>gen1Chart[a]?.[d] ?? 1;
  const typeChip=k=>`<span class="chip">${gen1TypeMeta[k][2]} ${gen1TypeMeta[k][1]}</span>`;
  const typeTextList=arr=>arr.map(k=>gen1TypeMeta[k][1]).join("、") || "無";
  const effectivenessAgainst=(attackType,defTypes)=>defTypes.reduce((v,defType)=>v*typeVal(attackType,defType),1);

  function selectDefType(type){
    const i=selectedDefTypes.indexOf(type);
    if(i>=0){
      if(selectedDefTypes.length===2) selectedDefTypes.splice(i,1);
      return;
    }
    if(selectedDefTypes.length===1) selectedDefTypes.push(type);
    else selectedDefTypes[1]=type;
  }

  function renderTypePage(){
    const typeGrid=document.getElementById("typeGrid");
    if(!typeGrid) return;
    typeGrid.innerHTML=gen1Types.map(t=>{
      const i=selectedDefTypes.indexOf(t[0]);
      const active=i>=0?` active selected-${i+1}`:"";
      const slot=i===0?"第一屬性":i===1?"第二屬性":`${t[3]}屬性`;
      return `
        <button type="button" class="type-btn${active}" data-type="${t[0]}">
          <strong>${t[2]} ${t[1]}</strong><span>${slot}</span>
        </button>`;
    }).join("");
    typeGrid.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{
      selectDefType(b.dataset.type);
      renderTypePage();
    }));

    const selectedMeta=selectedDefTypes.map(k=>gen1TypeMeta[k]);
    document.getElementById("selectedName").textContent=selectedMeta.map(t=>`${t[2]} ${t[1]}`).join(" ＋ ");
    document.getElementById("classPill").textContent=selectedDefTypes.length===2?"雙屬性":"單屬性";
    document.getElementById("modeCaption").textContent="正在攻擊的寶可夢屬性";

    const groups={4:[],2:[],0.5:[],0.25:[],0:[]};
    for(const attack of gen1Types){
      const v=effectivenessAgainst(attack[0],selectedDefTypes);
      if(groups[v]) groups[v].push(attack[0]);
    }
    const fill=(id,arr)=>{
      document.getElementById(id).innerHTML=arr.length?arr.map(typeChip).join(""):'<span class="small">無</span>';
    };
    fill("greatList",groups[4]);
    fill("goodList",groups[2]);
    fill("badList",groups[0.5]);
    fill("veryBadList",groups[0.25]);
    fill("zeroList",groups[0]);

    const defenderName=selectedMeta.map(t=>t[1]).join("＋");
    const weaknessParts=[];
    if(groups[4].length) weaknessParts.push(`×4：${typeTextList(groups[4])}`);
    if(groups[2].length) weaknessParts.push(`×2：${typeTextList(groups[2])}`);
    const resistParts=[];
    if(groups[0.5].length) resistParts.push(`×½：${typeTextList(groups[0.5])}`);
    if(groups[0.25].length) resistParts.push(`×¼：${typeTextList(groups[0.25])}`);
    if(groups[0].length) resistParts.push(`×0：${typeTextList(groups[0])}`);
    document.getElementById("typeSummary").innerHTML=`對手是 <b>${defenderName}</b>：害怕 ${weaknessParts.join("；") || "沒有弱點"}。${resistParts.length?` 抗性／無效：${resistParts.join("；")}。`:""}`;
  }

  // ===== 第一世代商店 =====
  const shopItems={
    pokeball:{zh:"精靈球",jp:"モンスターボール",price:200,tags:"球 捕獲"},
    potion:{zh:"傷藥",jp:"キズぐすり",price:300,tags:"回復 hp"},
    antidote:{zh:"解毒藥",jp:"どくけし",price:100,tags:"狀態 異常 中毒"},
    parlyz:{zh:"解麻藥",jp:"まひなおし",price:200,tags:"狀態 異常 麻痺"},
    burnheal:{zh:"灼傷藥",jp:"やけどなおし",price:250,tags:"狀態 異常 灼傷"},
    escaperope:{zh:"離洞繩",jp:"あなぬけのヒモ",price:550,tags:"洞窟 脫離"},
    awakening:{zh:"解眠藥",jp:"ねむけざまし",price:200,tags:"狀態 異常 睡眠"},
    repel:{zh:"除蟲噴霧",jp:"むしよけスプレー",price:350,tags:"噴霧 避免 遭遇"},
    superpotion:{zh:"好傷藥",jp:"いいキズぐすり",price:700,tags:"回復 hp"},
    iceheal:{zh:"解凍藥",jp:"こおりなおし",price:250,tags:"狀態 異常 冰凍"},
    greatball:{zh:"超級球",jp:"スーパーボール",price:600,tags:"球 捕獲"},
    revive:{zh:"活力碎片",jp:"げんきのかけら",price:1500,tags:"回復 瀕死"},
    superrepel:{zh:"白銀噴霧",jp:"シルバースプレー",price:500,tags:"噴霧 避免 遭遇"},
    ultraball:{zh:"高級球",jp:"ハイパーボール",price:1200,tags:"球 捕獲"},
    hyperpotion:{zh:"厲害傷藥",jp:"すごいキズぐすり",price:1500,tags:"回復 hp"},
    fullheal:{zh:"萬靈藥",jp:"なんでもなおし",price:600,tags:"狀態 異常"},
    maxrepel:{zh:"黃金噴霧",jp:"ゴールドスプレー",price:700,tags:"噴霧 避免 遭遇"},
    fullrestore:{zh:"全復藥",jp:"かいふくのくすり",price:3000,tags:"回復 hp 狀態"},
    maxpotion:{zh:"全滿藥",jp:"まんたんのくすり",price:2500,tags:"回復 hp"},
    pokedoll:{zh:"皮皮玩偶",jp:"ピッピにんぎょう",price:1000,tags:"玩偶"},
    firestone:{zh:"火之石",jp:"ほのおのいし",price:2100,tags:"進化石 石頭"},
    thunderstone:{zh:"雷之石",jp:"かみなりのいし",price:2100,tags:"進化石 石頭"},
    waterstone:{zh:"水之石",jp:"みずのいし",price:2100,tags:"進化石 石頭"},
    leafstone:{zh:"葉之石",jp:"リーフのいし",price:2100,tags:"進化石 石頭"},
    xaccuracy:{zh:"命中強化",jp:"ヨクアタール",price:950,tags:"戰鬥 道具 能力"},
    guardspec:{zh:"能力防守",jp:"エフェクトガード",price:700,tags:"戰鬥 道具 能力"},
    direhit:{zh:"要害攻擊",jp:"クリティカッター",price:650,tags:"戰鬥 道具 能力"},
    xattack:{zh:"力量強化",jp:"プラスパワー",price:500,tags:"戰鬥 道具 能力"},
    xdefend:{zh:"防禦強化",jp:"ディフェンダー",price:550,tags:"戰鬥 道具 能力"},
    xspeed:{zh:"速度強化",jp:"スピーダー",price:350,tags:"戰鬥 道具 能力"},
    xspecial:{zh:"特攻強化",jp:"スペシャルアップ",price:350,tags:"戰鬥 道具 能力 特殊"},
    hpup:{zh:"HP增強劑",jp:"マックスアップ",price:9800,tags:"能力 藥 維他命"},
    protein:{zh:"攻擊增強劑",jp:"タウリン",price:9800,tags:"能力 藥 維他命"},
    iron:{zh:"防禦增強劑",jp:"ブロムヘキシン",price:9800,tags:"能力 藥 維他命"},
    carbos:{zh:"速度增強劑",jp:"インドメタシン",price:9800,tags:"能力 藥 維他命"},
    calcium:{zh:"特攻增強劑",jp:"リゾチウム",price:9800,tags:"能力 藥 維他命 特殊"},
    freshwater:{zh:"美味之水",jp:"おいしいみず",price:200,tags:"飲料 回復"},
    sodapop:{zh:"勁爽汽水",jp:"サイコソーダ",price:300,tags:"飲料 回復"},
    lemonade:{zh:"果汁牛奶",jp:"ミックスオレ",price:350,tags:"飲料 回復"},
    tm32:{zh:"TM32 影子分身",jp:"わざマシン32・かげぶんしん",price:1000,tags:"技能機 tm 招式"},
    tm33:{zh:"TM33 反射壁",jp:"わざマシン33・リフレクター",price:1000,tags:"技能機 tm 招式"},
    tm02:{zh:"TM02 旋風刀",jp:"わざマシン02・かまいたち",price:2000,tags:"技能機 tm 招式"},
    tm07:{zh:"TM07 角鑽",jp:"わざマシン07・つのドリル",price:2000,tags:"技能機 tm 招式"},
    tm37:{zh:"TM37 炸蛋",jp:"わざマシン37・タマゴばくだん",price:2000,tags:"技能機 tm 招式"},
    tm01:{zh:"TM01 百萬噸重拳",jp:"わざマシン01・メガトンパンチ",price:3000,tags:"技能機 tm 招式"},
    tm05:{zh:"TM05 百萬噸重踢",jp:"わざマシン05・メガトンキック",price:3000,tags:"技能機 tm 招式"},
    tm09:{zh:"TM09 猛撞",jp:"わざマシン09・とっしん",price:3000,tags:"技能機 tm 招式"},
    tm17:{zh:"TM17 地獄翻滾",jp:"わざマシン17・じごくぐるま",price:3000,tags:"技能機 tm 招式"}
  };

  const shopPlaces=[
    {id:"viridian",zh:"常青市",jp:"トキワシティ",note:"初次進店時需先完成大木博士包裹事件。",sections:[{name:"友好商店",items:["pokeball",{key:"potion",versions:["yellow"]},"antidote","parlyz","burnheal"]}]},
    {id:"pewter",zh:"深灰市",jp:"ニビシティ",sections:[{name:"友好商店",items:["pokeball","potion","escaperope","antidote","burnheal","awakening","parlyz"]}]},
    {id:"cerulean",zh:"華藍市",jp:"ハナダシティ",sections:[{name:"友好商店",items:["pokeball","potion",{key:"escaperope",versions:["yellow"]},"repel","antidote","burnheal","awakening","parlyz"]}]},
    {id:"vermilion",zh:"枯葉市",jp:"クチバシティ",sections:[{name:"友好商店",items:["pokeball","superpotion","iceheal","awakening","parlyz","repel"]}]},
    {id:"lavender",zh:"紫苑鎮",jp:"シオンタウン",sections:[{name:"友好商店",items:["greatball","superpotion","revive","escaperope","superrepel","antidote","burnheal","iceheal","parlyz"]}]},
    {id:"celadon",zh:"玉虹市",jp:"タマムシシティ",note:"百貨公司分樓層販售，道具種類最多。",sections:[
      {name:"百貨公司 2F・左櫃台",items:["greatball","superpotion","revive","superrepel","antidote","burnheal","iceheal","awakening","parlyz"]},
      {name:"百貨公司 2F・右櫃台（技能機）",items:["tm32","tm33","tm02","tm07","tm37","tm01","tm05","tm09","tm17"]},
      {name:"百貨公司 4F・進化石",items:["pokedoll","firestone","thunderstone","waterstone","leafstone"]},
      {name:"百貨公司 5F・戰鬥道具",items:["xaccuracy","guardspec","direhit","xattack","xdefend","xspeed","xspecial"]},
      {name:"百貨公司 5F・能力增強",items:[{key:"hpup",versions:["blue","yellow"]},"protein","iron","carbos","calcium"]},
      {name:"百貨公司頂樓・販賣機",items:["freshwater","sodapop","lemonade"]}
    ]},
    {id:"fuchsia",zh:"淺紅市",jp:"セキチクシティ",sections:[{name:"友好商店",items:["ultraball","greatball",{key:"superpotion",exclude:["yellow"]},{key:"hyperpotion",versions:["yellow"]},"revive","fullheal","superrepel"]}]},
    {id:"cinnabar",zh:"紅蓮鎮",jp:"グレンタウン",sections:[{name:"友好商店",items:["ultraball","greatball","hyperpotion","maxrepel","escaperope","fullheal","revive"]}]},
    {id:"saffron",zh:"金黃市",jp:"ヤマブキシティ",sections:[{name:"友好商店",items:["greatball","hyperpotion","maxrepel","escaperope","fullheal","revive"]}]},
    {id:"indigo",zh:"石英高原",jp:"セキエイこうげん",sections:[{name:"寶可夢聯盟商店",items:["ultraball","greatball","fullrestore","maxpotion","fullheal","revive","maxrepel"]}]}
  ];

  function shopEntryKey(entry){ return typeof entry==="string"?entry:entry.key; }
  function shopEntryAvailable(entry){
    if(typeof entry==="string") return true;
    if(entry.versions && !entry.versions.includes(state.version)) return false;
    if(entry.exclude && entry.exclude.includes(state.version)) return false;
    return true;
  }
  function shopNorm(v){ return String(v??"").toLowerCase().replace(/[\s・･\-_/／()（）]/g,""); }
  function shopItemMatches(key,item,q){
    if(!q) return true;
    const hay=shopNorm(`${key} ${item.zh} ${item.jp} ${item.tags||""}`);
    return hay.includes(q);
  }
  function shopMoney(n){ return `¥${Number(n).toLocaleString("zh-TW")}`; }

  function renderShop(){
    const grid=document.getElementById("shopGrid");
    const input=document.getElementById("shopSearch");
    if(!grid || !input) return;
    document.getElementById("shopVersionName").textContent=notes[state.version];
    const q=shopNorm(input.value);
    let matchedPlaces=0, matchedItems=0;
    const cards=[];

    for(const place of shopPlaces){
      const sectionHtml=[];
      for(const section of place.sections){
        const rows=[];
        for(const entry of section.items){
          if(!shopEntryAvailable(entry)) continue;
          const key=shopEntryKey(entry), item=shopItems[key];
          if(!item || !shopItemMatches(key,item,q)) continue;
          matchedItems++;
          rows.push(`<div class="shop-item"><span class="shop-item-name"><strong>${item.zh}</strong><small>${item.jp}</small></span><span class="shop-price">${shopMoney(item.price)}</span></div>`);
        }
        if(rows.length) sectionHtml.push(`<section class="shop-section"><h3>${section.name}</h3><div class="shop-items">${rows.join("")}</div></section>`);
      }
      if(sectionHtml.length){
        matchedPlaces++;
        cards.push(`<article class="shop-card"><div class="shop-card-head"><div><strong>${place.zh}</strong><span>${place.jp}</span></div>${place.note?`<p>${place.note}</p>`:""}</div>${sectionHtml.join("")}</article>`);
      }
    }
    grid.innerHTML=cards.join("");
    document.getElementById("shopEmpty").classList.toggle("show",cards.length===0);
    const summary=document.getElementById("shopSearchSummary");
    if(q){
      summary.textContent=cards.length?`找到 ${matchedItems} 個販售項目，分布在 ${matchedPlaces} 個地點。`:`沒有找到符合「${input.value.trim()}」的販售項目。`;
    }else{
      summary.textContent=`顯示 ${matchedPlaces} 個商店地點。輸入道具名稱可直接反查。`;
    }
  }

  function choiceBlocked(id){
    const groups=[];
    if(state.version!=="yellow") groups.push(oneChoiceGroups.starters);
    groups.push(oneChoiceGroups.fossils,oneChoiceGroups.dojo,oneChoiceGroups.eevee);
    for(const group of groups){
      if(group.includes(id) && group.some(x=>x!==id && current().has(x))) return true;
    }
    return false;
  }

  function buildGuide(){
    const guide=document.getElementById("guide");
    if(!uncaughtOnly.checked){ guide.classList.remove("show"); return; }
    guide.classList.add("show");

    const uncaught=pokemon.filter(p=>!current().has(p.id));
    const actionable=[];
    const catchable=[];
    const trade=[];
    const replay=[];

    for(const p of uncaught){
      const rule=acquire(p.id);
      const a=dexAcquire(p.id);
      const source=evoFrom[p.id];
      if(source && current().has(source)){
        actionable.push({p,a,source});
        continue;
      }
      if(choiceBlocked(p.id)){
        replay.push({p,a});
        continue;
      }
      if(rule[0]==="需要交換"){
        trade.push({p,a});
        continue;
      }
      if(source && !current().has(source)){
        // 進化來源本身還沒有：等來源捕獲後再列為立即可做。
        continue;
      }
      catchable.push({p,a});
    }

    const summary=document.getElementById("guideSummary");
    const list=document.getElementById("guideList");
    list.innerHTML="";

    if(uncaught.length===0){
      summary.innerHTML='<span class="guide-done">✓ 151 隻全部完成。</span>';
      return;
    }

    const practical=actionable.length+catchable.length;
    if(practical===0){
      summary.innerHTML=`<span class="guide-done">✓ 依目前內建資料，你這個版本可直接捕獲／由現有寶可夢完成的項目已處理完。</span><br>剩餘 ${trade.length+replay.length} 隻主要需要版本交換、一次性選擇的另一條路線，或重玩取得。`;
    }else{
      summary.textContent=`目前還有 ${practical} 個可在這個存檔繼續處理的目標。先列最容易完成的項目：`;
    }

    const rows=[];
    actionable.slice(0,6).forEach(x=>{
      rows.push(`<div class="guide-item"><span class="guide-pill">現在可做</span><strong>${x.p.zh}</strong>：${x.a[1]}。</div>`);
    });
    catchable.slice(0,6).forEach(x=>{
      rows.push(`<div class="guide-item"><span class="guide-pill">去取得</span><strong>${x.p.zh}</strong>：${x.a[1]}。</div>`);
    });
    if(practical===0){
      if(trade.length) rows.push(`<div class="guide-item"><span class="guide-pill">交換</span>還有 <strong>${trade.length}</strong> 隻需要其他版本傳送／交換。</div>`);
      if(replay.length) rows.push(`<div class="guide-item"><span class="guide-pill">重玩／交換</span>還有 <strong>${replay.length}</strong> 隻屬於御三家、化石、格鬥道場或伊布進化等一次性選擇。</div>`);
    }else if(trade.length || replay.length){
      rows.push(`<div class="guide-item"><span class="guide-pill">之後處理</span>另有 ${trade.length+replay.length} 隻需要交換或一次性選擇的另一條路線。</div>`);
    }
    list.innerHTML=rows.join("");
  }

  function updateHeader(){
    const c=current().size;
    const p=Math.round(c/151*100);
    document.getElementById("caughtCount").textContent=c;
    document.getElementById("percent").textContent=p;
    document.getElementById("bar").style.width=p+"%";
    document.getElementById("versionNote").textContent=notes[state.version];
    document.getElementById("notice").classList.toggle("show",uncaughtOnly.checked);
    document.querySelectorAll(".version").forEach(b=>{
      b.classList.toggle("active",b.dataset.version===state.version);
    });
  }

  function render(){
    updateHeader();
    buildGuide();
    if(activePage==="mapPage") renderMap();
    if(activePage==="typePage") renderTypePage();
    if(activePage==="shopPage") renderShop();
    document.getElementById("imageError").classList.remove("show");
    const q=search.value.trim().toLowerCase();
    grid.innerHTML="";
    let shown=0;

    pokemon.forEach(p=>{
      const got=current().has(p.id);
      if(uncaughtOnly.checked && got) return;
      if(q && !p.zh.toLowerCase().includes(q) && !p.jp.toLowerCase().includes(q) && !pad(p.id).includes(q) && String(p.id)!==q) return;

      shown++;
      const m=dexAcquire(p.id);
      const b=document.createElement("button");
      b.type="button";
      b.className=`card ${got?"caught":"uncaught"}`;
      b.dataset.id=p.id;
      b.innerHTML=`
        <span class="imgbox">
          <img class="pokeimg" src="${imageUrl(p.id)}" alt="${p.zh}" loading="lazy">
        </span>
        <span class="info">
          <span class="no">No.${pad(p.id)}</span>
          <span class="name">${p.zh}<span class="jp">${p.jp}</span></span>
          <span class="state">${got?"✓ 已捕獲":"○ 未捕獲"}</span>
          ${uncaughtOnly.checked?`<span class="method"><span class="tag ${m[0]==="需要交換"?"trade":""}">${m[0]}</span>${m[1]}</span>`:""}
        </span>`;
      const img=b.querySelector("img");
      img.addEventListener("error",()=>{
        img.style.display="none";
        document.getElementById("imageError").classList.add("show");
      });
      grid.appendChild(b);
    });

    empty.classList.toggle("show",shown===0);
  }

  grid.addEventListener("click",e=>{
    const card=e.target.closest(".card");
    if(!card)return;
    const id=Number(card.dataset.id);
    current().has(id)?current().delete(id):current().add(id);
    save();
    render();
  });

  document.querySelectorAll(".version").forEach(b=>{
    b.addEventListener("click",()=>{
      state.version=b.dataset.version;
      save();
      render();
    });
  });

  search.addEventListener("input",render);
  uncaughtOnly.addEventListener("change",render);

  document.getElementById("clearBtn").addEventListener("click",()=>{
    if(confirm("確定要清除目前版本的捕獲紀錄嗎？")){
      current().clear();
      save();
      render();
    }
  });

  
  let importMode=null;

  function openBackup(title, value, message, allowApply=false){
    backup.classList.add("show");
    backupTitle.textContent=title;
    backupText.value=value || "";
    applyImport.style.display=allowApply ? "inline-block" : "none";
    backupMsg.textContent=message || "";
    backupText.focus();
    if(value) backupText.select();
  }

  document.getElementById("exportCurrentBtn").addEventListener("click",()=>{
    const out={
      format:"pokemon-gen1-single-version-backup",
      version:state.version,
      caught:[...state.caught[state.version]].sort((a,b)=>a-b)
    };
    importMode=null;
    openBackup(
      `匯出目前版本：${notes[state.version]}`,
      JSON.stringify(out),
      "這份備份只包含目前這一個版本的捕獲紀錄。"
    );
  });

  document.getElementById("importCurrentBtn").addEventListener("click",()=>{
    importMode="single";
    openBackup(
      `匯入目前版本：${notes[state.version]}`,
      "",
      "貼上單版本備份後按「套用匯入」。只會覆蓋目前正在看的版本。",
      true
    );
  });

  document.getElementById("exportAllBtn").addEventListener("click",()=>{
    const out={
      format:"pokemon-gen1-four-version-backup",
      version:state.version,
      green:[...state.caught.green].sort((a,b)=>a-b),
      red:[...state.caught.red].sort((a,b)=>a-b),
      blue:[...state.caught.blue].sort((a,b)=>a-b),
      yellow:[...state.caught.yellow].sort((a,b)=>a-b)
    };
    importMode=null;
    openBackup(
      "匯出四色紀錄",
      JSON.stringify(out),
      "這份備份會一次包含紅、綠、藍、黃四個版本的捕獲紀錄。"
    );
  });

  document.getElementById("importAllBtn").addEventListener("click",()=>{
    importMode="all";
    openBackup(
      "匯入四色紀錄",
      "",
      "貼上四色備份後按「套用匯入」。會一次覆蓋紅、綠、藍、黃四個版本。",
      true
    );
  });

  applyImport.addEventListener("click",()=>{
    try{
      const data=JSON.parse(backupText.value);
      if(!data || typeof data!=="object") throw new Error("格式錯誤");

      if(importMode==="single"){
        const arr = Array.isArray(data.caught)
          ? data.caught
          : (Array.isArray(data[state.version]) ? data[state.version] : null);

        if(!arr) throw new Error("缺少單版本資料");

        state.caught[state.version]=new Set(
          arr.map(Number).filter(n=>Number.isInteger(n)&&n>=1&&n<=151)
        );

        save();
        backupMsg.textContent=`✓ 已匯入目前版本：${notes[state.version]}`;
        render();
        return;
      }

      if(importMode==="all"){
        const versions=["green","red","blue","yellow"];
        const next={};

        for(const v of versions){
          if(!Array.isArray(data[v])) throw new Error("缺少 "+v+" 版本資料");
          next[v]=new Set(
            data[v].map(Number).filter(n=>Number.isInteger(n)&&n>=1&&n<=151)
          );
        }

        for(const v of versions) state.caught[v]=next[v];

        if(data.version && versions.includes(data.version)){
          state.version=data.version;
        }

        save();
        backupMsg.textContent="✓ 四色版本紀錄已全部匯入";
        render();
        return;
      }

      throw new Error("未指定匯入模式");
    }catch(e){
      backupMsg.textContent="✕ 匯入失敗：請確認貼上的備份格式是否正確。";
    }
  });

  document.getElementById("closeBackup").addEventListener("click",()=>{
    backup.classList.remove("show");
    backupMsg.textContent="";
    importMode=null;
  });


  document.getElementById("shopSearch")?.addEventListener("input",renderShop);
  document.querySelectorAll(".shop-quick").forEach(b=>b.addEventListener("click",()=>{
    const input=document.getElementById("shopSearch");
    input.value=b.dataset.shopQuery||"";
    renderShop();
    input.focus();
  }));

  document.querySelectorAll(".main-tab").forEach(b=>{
    b.addEventListener("click",()=>setPage(b.dataset.page));
  });

  document.getElementById("mapStage")?.addEventListener("click",e=>{
    const h=e.target.closest(".hotspot");
    if(!h) return;
    setArea(h.dataset.area,true);
  });

  document.getElementById("areaSelectMobile")?.addEventListener("change",e=>{
    setArea(e.target.value,false);
  });

  document.getElementById("areaPokemon")?.addEventListener("click",e=>{
    const row=e.target.closest(".map-poke");
    if(!row) return;
    const id=Number(row.dataset.poke);
    current().has(id)?current().delete(id):current().add(id);
    save();
    render();
  });

  load();
  render();
  renderMap();
})();
