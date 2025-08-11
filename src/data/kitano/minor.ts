import { DepartmentData, makeQuestionId } from "@/types/quiz";

const baseMinorData = {
  "department": "マイナー科",
  "total_questions": 76,
  "hospitals": [
    "北野病院"
  ],
  "years": [
    2019,
    2021,
    2022,
    2024
  ],
  "questions": [
    {
      "question_number": 21,
      "content": "創傷治癒の過程について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "止血期は、創傷治癒の最初の段階である。",
          "correct": true
        },
        {
          "text": "炎症期には、好中球やマクロファージが細菌や壊死組織を貪食する。",
          "correct": true
        },
        {
          "text": "成熟期には、コラーゲン線維が再構築され、瘢痕組織が成熟する。",
          "correct": true
        },
        {
          "text": "増殖期には、肉芽組織の形成と血管新生が活発に起こる。",
          "correct": true
        },
        {
          "text": "上皮化は、増殖期に開始される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "形成外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 21,
      "content": "創傷治癒について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "創傷治癒の過程は、止血期、炎症期、増殖期、成熟期の順で進行する。",
          "correct": true
        },
        {
          "text": "上皮化は創傷後、数時間から24時間以内に開始される。",
          "correct": true
        },
        {
          "text": "単球（マクロファージ）と好中球は貪食能を持つ。",
          "correct": true
        },
        {
          "text": "創傷は、乾燥環境下よりも湿潤環境下の方が上皮化は早い。",
          "correct": true
        },
        {
          "text": "コラーゲンの増殖は、増殖期（受傷後数日）から開始される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "形成外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 25,
      "content": "形成外科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "創傷治癒の成熟期では、血管や細胞成分は減少する。",
          "correct": true
        },
        {
          "text": "感染創や異物のある創は、治癒が遅延し二次治癒となることがある。",
          "correct": true
        },
        {
          "text": "オオサンショウウオの四肢の再生は、完全再生の一例である（ヒトの創傷治癒は修復）。",
          "correct": true
        },
        {
          "text": "肥満細胞（マスト細胞）は、ヒスタミンを含有する。",
          "correct": true
        },
        {
          "text": "ケロイドは、創傷の範囲を超えて増殖する異常な瘢痕組織である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "形成外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 30,
      "content": "形成外科に関連する先天性疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "口唇口蓋裂の出生頻度は、日本では約500出生に1例である。",
          "correct": true
        },
        {
          "text": "胎児の口唇は胎生7週ごろ、口蓋は胎生12週ごろに癒合が完了する。",
          "correct": true
        },
        {
          "text": "先天性眼瞼下垂は、弱視の原因となるため、視力の発達に影響を及ぼす可能性がある。",
          "correct": true
        },
        {
          "text": "ヒトの鰓弓は、頭側から第1、第2、第3、第4、第6鰓弓が存在する（第5は退化）。",
          "correct": true
        },
        {
          "text": "リンパ管腫は、自然消退することもあり、整容的な問題や機能障害がなければ経過観察が第一選択である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "形成外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 26,
      "content": "顔面神経が支配する筋を、選択肢の中からすべて選べ。",
      "choices": [
        {
          "text": "前頭筋",
          "correct": true
        },
        {
          "text": "広頚筋",
          "correct": true
        },
        {
          "text": "側頭筋（三叉神経支配）",
          "correct": false
        },
        {
          "text": "胸鎖乳突筋（副神経支配）",
          "correct": false
        },
        {
          "text": "上眼瞼挙筋（動眼神経支配）",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "形成外科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 46,
      "content": "重症多発外傷の初期診療（JATEC）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "初期評価はABCDEアプローチに従い、まず気道(Airway)確保を優先する。",
          "correct": true
        },
        {
          "text": "切迫するD（意識障害）よりC（循環）の異常が優先されるため、まずFASTなどで出血源の検索を行う。",
          "correct": false
        },
        {
          "text": "出血性ショックでは、まず十分な輸液・輸血を行い、それでも循環が不安定な場合に昇圧剤の使用を考慮する。",
          "correct": false
        },
        {
          "text": "FASTでは心嚢内、胸腔内、腹腔内の液体貯留（出血）を確認する。",
          "correct": true
        },
        {
          "text": "緊張性気胸では、胸腔内圧の上昇により静脈還流が障害され、頸静脈怒張を認めることがある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 45,
      "content": "救急診療について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "頸椎損傷の可能性がある重傷外傷患者の気道確保では、下顎挙上法を用いる。",
          "correct": true
        },
        {
          "text": "初回FAST陰性でも、循環動態が不安定な場合は経時的に再検査を行う。",
          "correct": false
        },
        {
          "text": "呼吸状態が不安定な患者に対しては、まず気道確保と呼吸の安定化を優先する。",
          "correct": false
        },
        {
          "text": "低体温は凝固障害を増悪させるため、外傷診療において体温維持は重要である。",
          "correct": true
        },
        {
          "text": "緊張性気胸に対する緊急処置として、脱気のための胸腔穿刺・胸腔ドレナージは有効である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 46,
      "content": "救急に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "胸部にボールが当たることによる心停止（心臓振盪）は、主に心室細動が原因である。",
          "correct": false
        },
        {
          "text": "緊急気道確保の方法として、輪状甲状靱帯穿刺・切開がある。",
          "correct": true
        },
        {
          "text": "気管切開は通常、第2〜第4気管軟骨輪の高さで行われる。",
          "correct": true
        },
        {
          "text": "大腿骨骨折による出血量は、1000-1500mL程度になることがある。",
          "correct": true
        },
        {
          "text": "不明な選択肢",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "救急",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 48,
      "content": "敗血症性ショックの初期対応として、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "起因菌を想定し、広域スペクトラムの抗菌薬を早期に投与する。",
          "correct": true
        },
        {
          "text": "抗菌薬投与前に、血液培養を2セット以上採取する。",
          "correct": true
        },
        {
          "text": "初期対応は、十分な輸液と、必要に応じて昇圧剤の併用が基本である。",
          "correct": false
        },
        {
          "text": "敗血症に伴う播種性血管内凝固症候群（DIC）の治療を並行して行う。",
          "correct": true
        },
        {
          "text": "初期の十分な輸液にもかかわらず低血圧が持続する場合、昇圧剤（例：ノルアドレナリン）の投与を開始する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 47,
      "content": "救急に関する記述として、正しいものを1つ選べ。",
      "choices": [
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "腎損傷によるショックでも、多くの場合はまず血管内治療（TAE）が試みられ、緊急腎摘出術の適応は限定的である。",
          "correct": false
        },
        {
          "text": "虫刺されによるアナフィラキシーショックに対する第一選択薬はアドレナリンである。",
          "correct": false
        },
        {
          "text": "偶発性低体温症の患者の復温は、1時間に0.5〜1.0℃程度のゆっくりとしたペースで行う。",
          "correct": false
        },
        {
          "text": "緊張性気胸は、静脈還流が障害されるため、閉塞性ショックに分類される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "救急",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 48,
      "content": "救急医療に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "外傷初期診療における単純X線撮影（JATEC）では、胸部と骨盤を撮影するのが基本である。",
          "correct": true
        },
        {
          "text": "トリアージでは、最優先治療群は赤タッグであり、黄色タッグは待機的治療群である。",
          "correct": false
        },
        {
          "text": "心タンポナーデは心臓の拡張障害による閉塞性ショックである。",
          "correct": false
        },
        {
          "text": "サイトカインが増加すると好中球が活性化され、好中球エラスターゼなどが放出される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 47,
      "content": "START式トリアージで赤タッグ（最優先治療群）と判定されるものをすべて選べ。",
      "choices": [
        {
          "text": "歩行可能であれば、緑タッグ（軽症群）に分類される。",
          "correct": false
        },
        {
          "text": "気道確保しても自発呼吸がなければ、黒タッグ（死亡群）に分類される。",
          "correct": false
        },
        {
          "text": "呼吸数が30回/分以上の場合、赤タッグに分類される。",
          "correct": true
        },
        {
          "text": "橈骨動脈を触知しない（循環不全）場合、赤タッグに分類される。",
          "correct": true
        },
        {
          "text": "簡単な指示に従えない（意識障害）場合、赤タッグに分類される。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 44,
      "content": "救急医療について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "心室細動（VF）や無脈性心室頻拍（pulseless VT）への電気的除細動では、心拍に同期させる必要はない。",
          "correct": true
        },
        {
          "text": "減圧症では、血中窒素の気泡化により血管内皮が障害され、血管透過性が亢進する。",
          "correct": true
        },
        {
          "text": "高山病では、重症化すると高地脳浮腫（HACE）を生じることがある。",
          "correct": false
        },
        {
          "text": "トリアージにおいて、心肺停止の患者は黒タッグ（死亡群または不処置群）となり、最優先にはならない。",
          "correct": false
        },
        {
          "text": "トリアージにおいて、黄色タグは待機的治療群を表し、緑タグが歩行可能などの軽症群を表す。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 47,
      "content": "救急科の知識について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "急性薬物中毒で、特定の条件下では経口投与後1〜2時間以内であれば活性炭の投与を考慮する。",
          "correct": true
        },
        {
          "text": "出血性ショックでは、交感神経の緊張により血管が収縮し、皮膚は冷たく湿潤する（冷汗）。",
          "correct": false
        },
        {
          "text": "神経原性ショックは、血管の拡張により相対的に循環血液量が減少するため、血液分布異常性ショックに分類される。",
          "correct": true
        },
        {
          "text": "神経性食思不振症（拒食症）に、過食と排出行動を伴う神経性大食症（過食症）を合併することがある。",
          "correct": true
        },
        {
          "text": "ノロウイルスによる食中毒は、感染症法に基づき、医師による届出義務がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "救急科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 43,
      "content": "救急診療（熱傷・中毒）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "熱傷の輸液量を計算する際の熱傷面積（%TBSA）は、II度熱傷とIII度熱傷の面積の和で算出する。",
          "correct": true
        },
        {
          "text": "熱傷創に対する予防的抗菌薬の全身投与は、耐性菌のリスクから推奨されない。",
          "correct": true
        },
        {
          "text": "アセトアミノフェンの過量摂取は、その代謝物が原因で重篤な肝障害を引き起こす。",
          "correct": true
        },
        {
          "text": "血中一酸化炭素ヘモグロビン（CO-Hb）の半減期は、室内気吸入下で約4〜5時間である。",
          "correct": false
        },
        {
          "text": "薬物中毒に対する胃洗浄は、合併症のリスクから、現在では適応が厳しく限定されており（例：内服後1時間以内など）、ルーチンでは行われない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 46,
      "content": "救急疾患と中毒に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "熱傷輸液量を計算するための熱傷面積は、II度とIII度の合計面積で算出する。",
          "correct": true
        },
        {
          "text": "横紋筋融解症では、筋細胞から漏出したミオグロビンが腎臓に障害を与え、ミオグロビン尿（赤褐色尿）がみられる。",
          "correct": true
        },
        {
          "text": "カフェインの過剰摂取では、交感神経が刺激され頻脈や不整脈をきたす。",
          "correct": false
        },
        {
          "text": "一酸化炭素中毒では、重症化すると中枢神経が抑制され、呼吸停止に至ることがある。",
          "correct": false
        },
        {
          "text": "選択肢なし",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 23,
      "content": "高齢男性が突然の前胸部から背部にかけての激痛で搬送。縦隔陰影の拡大、右大腿動脈は触知良好、左大腿動脈は触知不可。急性大動脈解離を疑う状況で、不適切な処置を1つ選べ。",
      "choices": [
        {
          "text": "モルヒネなどの鎮痛剤を投与する。",
          "correct": false
        },
        {
          "text": "β遮断薬などの降圧剤を投与し、血圧と心拍数を管理する。",
          "correct": false
        },
        {
          "text": "抗凝固薬であるヘパリンを投与する。",
          "correct": true
        },
        {
          "text": "診断を確定するために、緊急で造影CTを撮影する。",
          "correct": false
        },
        {
          "text": "心タンポナーデや大動脈弁閉鎖不全の合併を確認するために心エコーを行う。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 47,
      "content": "救急処置に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "無脈性心室頻拍（VT）や心室細動（VF）に対する電気的除細動は、心電図との同期を行わない。",
          "correct": true
        },
        {
          "text": "心停止時などで末梢静脈路の確保が困難な場合、骨髄路を確保して輸液や薬剤投与を行う。",
          "correct": true
        },
        {
          "text": "減圧症（潜水病）は、急な減圧によって血中に溶けていた窒素が気泡化することが原因である。",
          "correct": true
        },
        {
          "text": "輪状甲状靱帯穿刺・切開は、上気道の閉塞があり、挿管が困難な場合の最終的な気道確保手段である。",
          "correct": true
        },
        {
          "text": "医師には守秘義務があるため、患者の尿から覚醒剤反応が出ても、本人の同意なく警察に通報する義務はない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "救急",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 48,
      "content": "救急医療に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "急性呼吸窮迫症候群（ARDS）の診断基準には、心不全（心原性肺水腫）の除外が含まれる。",
          "correct": true
        },
        {
          "text": "クラッシュ症候群でみられる褐色尿は、横紋筋融解によるミオグロビン尿である。",
          "correct": false
        },
        {
          "text": "複数人が同時に腹痛を訴えても、他の疾患の可能性も考慮し、慎重に食中毒の診断を進めるべきである。",
          "correct": false
        },
        {
          "text": "患者の尿から覚醒剤の反応が出た場合でも、医師に通報義務はなく、守秘義務が優先される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "救急",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 48,
      "content": "次の記述のうち、正しいものを3つ選べ。",
      "choices": [
        {
          "text": "小児の外傷性出血性ショックに対して、初期急速輸液は等張電解質液を20ml/kgでボーラス静注する。",
          "correct": false
        },
        {
          "text": "急性呼吸窮迫症候群（ARDS）の診断には、心原性肺水腫の除外が必要である。",
          "correct": true
        },
        {
          "text": "質の高い胸骨圧迫は、正常時の心拍出量の約25〜33%を確保できるとされる。",
          "correct": true
        },
        {
          "text": "炎症反応において、サイトカインは好中球を活性化させ、好中球エラスターゼなどの蛋白分解酵素を放出させる。",
          "correct": true
        },
        {
          "text": "3人の患者が同時に腹痛と下痢を訴えた場合、食中毒を強く疑うが、他の原因も鑑別する必要があるため断定はできない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急医学",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 48,
      "content": "臨床判断として、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "重度の呼吸不全で全身麻酔が困難な患者の人工膝関節置換術では、大腿神経ブロックなどの区域麻酔単独で手術を行うことがある。",
          "correct": true
        },
        {
          "text": "妊婦は硬膜外腔が狭くなっているため、帝王切開術の硬膜外麻酔では、通常より少ない量の局所麻酔薬で十分な効果が得られる。",
          "correct": true
        },
        {
          "text": "緊急性があり、本人の同意が得られない意識不明の患者に対しては、救命を目的とした緊急手術を（緊急避難の法理に基づき）行うことができる。",
          "correct": true
        },
        {
          "text": "肥満患者は無気肺になりやすいため、陽圧換気を行う場合はPEEP（呼気終末陽圧）を比較的高く設定することがある。",
          "correct": true
        },
        {
          "text": "手術終了直前に投与した筋弛緩薬（ロクロニウムなど）は、スガマデクスで拮抗する。フルマゼニルはベンゾジアゼピン系薬剤の拮抗薬である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "救急科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 27,
      "content": "整形外科の外傷について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "アキレス腱が断裂しても、長趾屈筋などの働きにより足関節の底屈は可能だが、つま先立ちは困難となる。",
          "correct": true
        },
        {
          "text": "高齢者の脊椎圧迫骨折は、受傷直後のX線では変化がなくても、後から骨折が明らかになることがあるため、経時的に再評価する。",
          "correct": true
        },
        {
          "text": "足関節骨折では、腓骨の高位骨折（Maisonneuve骨折）を合併することがあり、下腿全体のX線撮影が必要な場合がある。",
          "correct": true
        },
        {
          "text": "骨幹端部（海綿骨）は血流が豊富なため、骨幹部（皮質骨）の骨折よりも骨癒合が早い。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "整形外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 27,
      "content": "整形外科疾患について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "上腕骨骨幹部骨折では、橈骨神経が近接しているため、橈骨神経麻痺（下垂手）を合併することがある。",
          "correct": true
        },
        {
          "text": "骨折部が体外に露出している開放骨折は、感染のリスクが非常に高く、緊急手術の適応となる。",
          "correct": true
        },
        {
          "text": "アキレス腱断裂では、つま先立ちは困難になるが、足関節の他動的な動きや他の筋による限定的な自動運動は可能である。",
          "correct": false
        },
        {
          "text": "病的骨折とは、骨腫瘍や骨粗鬆症など、骨の基礎疾患が原因で軽微な外力で生じる骨折のことである。",
          "correct": false
        },
        {
          "text": "疲労骨折は、一度では骨折に至らない程度の負荷が、骨の特定部位に繰り返し加わることで発生する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "整形外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 27,
      "content": "整形外科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "上腕骨顆上骨折によるコンパートメント症候群から生じるVolkmann拘縮では、前腕の筋が壊死し、不可逆的な手指の運動障害が起こる。",
          "correct": true
        },
        {
          "text": "ビスフォスフォネート製剤は骨密度を増加させ、大腿骨頸部骨折などの脆弱性骨折の二次予防に有効である。",
          "correct": false
        },
        {
          "text": "高齢者の脊椎圧迫骨折は、受傷直後のX線で不明瞭なことがあり、経時的なX線撮影が診断に有用である。",
          "correct": true
        },
        {
          "text": "疲労骨折は、初期段階ではX線で明らかな骨折線が映らないことがある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "整形外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 30,
      "content": "整形外科の骨折について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "骨粗鬆症の治療は骨密度を改善し、高齢者の脆弱性骨折（大腿骨頸部骨折など）の予防になる。",
          "correct": true
        },
        {
          "text": "開放骨折は感染のリスクが高く、神経血管損傷を伴う可能性もあるため、緊急手術が必要である。",
          "correct": true
        },
        {
          "text": "上腕骨外科頸骨折は、高齢者の転倒などで生じることが多い。小児に多いのは上腕骨顆上骨折である。",
          "correct": false
        },
        {
          "text": "骨癒合が遅延・停止した状態を遷延治癒・偽関節といい、病的骨折は骨の基礎疾患による骨折を指す。",
          "correct": false
        },
        {
          "text": "疲労骨折とは、一度では問題にならない軽度の負荷が、骨の特定部位に繰り返し加わることで発生する骨折である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "整形外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 28,
      "content": "整形外科の骨折について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "下肢のギプスやシーネ固定では、総腓骨神経麻痺やコンパートメント症候群に注意する。",
          "correct": true
        },
        {
          "text": "小児の骨折など、左右差の比較が必要な場合は健側のX線撮影を行うことがある。",
          "correct": false
        },
        {
          "text": "上腕骨骨幹部骨折では橈骨神経麻痺が多く、正中神経麻痺は上腕骨顆上骨折などで見られる。",
          "correct": false
        },
        {
          "text": "高齢者の転倒では、大腿骨頸部骨折だけでなく、骨盤骨折（恥骨・坐骨骨折など）を見逃さないよう注意が必要である。",
          "correct": true
        },
        {
          "text": "脊椎圧迫骨折の治療において、骨粗鬆症の治療は新たな骨折の予防に有用である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "整形外科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 28,
      "content": "骨粗鬆症について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "診断には骨密度測定（DXA法）が標準であり、腰椎や大腿骨近位部で測定する。MRIは必須ではない。",
          "correct": false
        },
        {
          "text": "エストロゲンの減少が関与するため、閉経後女性に多い。",
          "correct": true
        },
        {
          "text": "ステロイドの長期使用は、続発性骨粗鬆症の主要な原因の一つである。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "整形外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 29,
      "content": "腎細胞がんについて、正しいものを1つ選べ。",
      "choices": [
        {
          "text": "腎細胞がんのほとんどは、近位尿細管上皮から発生する。",
          "correct": false
        },
        {
          "text": "転移のある腎細胞がんでは、分子標的薬や免疫チェックポイント阻害薬が第一選択である。",
          "correct": false
        },
        {
          "text": "小径（例：4cm以下）の腎細胞がんでは、腎部分切除術と腎全摘除術でがん制御に関する予後は同等とされる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "泌尿器科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 22,
      "content": "膀胱癌について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "尿細胞診や腫瘍マーカーは補助診断であり、確定診断には膀胱鏡と生検が必須である。",
          "correct": false
        },
        {
          "text": "喫煙は膀胱癌の最大のリスク因子であり、男性の膀胱癌の原因の約半数を占めるとされる。",
          "correct": true
        },
        {
          "text": "筋層非浸潤性膀胱癌の再発予防には、BCGや抗がん剤を「膀胱内」に注入する。",
          "correct": false
        },
        {
          "text": "尿路変更術の中で、尿管皮膚瘻は手技が簡便だが、長期的な腎機能保持やQOLの観点では課題がある。",
          "correct": false
        },
        {
          "text": "進行・転移性膀胱癌に対する化学療法では、シスプラチンなどのプラチナ製剤を含む多剤併用レジメンが標準治療である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "泌尿器科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 28,
      "content": "前立腺肥大症について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "前立腺肥大症は、尿道を取り囲む内腺（移行領域）から発生することが多い。",
          "correct": true
        },
        {
          "text": "前立腺の大きさの増大速度には個人差があり、5年で2倍になるという一定の法則はない。",
          "correct": false
        },
        {
          "text": "前立腺の高度肥大だけでなく、高齢、神経疾患、特定の薬剤なども急性尿閉のリスクとなる。",
          "correct": true
        },
        {
          "text": "α1受容体遮断薬は前立腺や尿道の平滑筋を弛緩させるが、前立腺自体を縮小させる作用はない。",
          "correct": false
        },
        {
          "text": "本邦において、前立腺肥大症が直接の原因で死亡することは稀である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "泌尿器科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 21,
      "content": "血尿に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "1Lの尿の中に1mlの血液が混入すると、肉眼的血尿として認識されうる。",
          "correct": true
        },
        {
          "text": "膀胱癌のリスク因子として、喫煙のほか、シクロホスファミドや芳香族アミンへの職業性曝露が知られている。",
          "correct": true
        },
        {
          "text": "尿細胞診の感度は、がんの悪性度（グレード）に依存し、高悪性度では高く、低悪性度では低い。",
          "correct": true
        },
        {
          "text": "尿検査で変形赤血球や蛋白尿を認める場合、糸球体腎炎などの腎内科的疾患を疑い、腎生検などを考慮する。まず造影CTは行わない。",
          "correct": false
        },
        {
          "text": "肉眼的血尿の精査で、尿路上皮癌が原因である割合は、年齢にもよるが10-20%程度とされる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "泌尿器科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 29,
      "content": "泌尿器科手術後の合併症について、正しいものを1つ選べ。",
      "choices": [
        {
          "text": "広汎子宮全摘術後の排尿障害は、膀胱を支配する骨盤神経（副交感神経）の障害によるものである。",
          "correct": false
        },
        {
          "text": "後腹膜リンパ節郭清術後には、射精に関わる交感神経の障害により、逆行性射精や射精不能が起こることがある。",
          "correct": true
        },
        {
          "text": "前立腺全摘除術後の勃起障害（ED）に対して、アンドロゲン補充療法は行われない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "泌尿器科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 27,
      "content": "以下のうち、一般に緊急手術の適応とならないものを1つ選べ。",
      "choices": [
        {
          "text": "尿管結石による閉塞性腎盂腎炎で、ショック状態（敗血症）を呈しており、緊急ドレナージ（尿管ステント留置など）が必要である。",
          "correct": false
        },
        {
          "text": "精巣捻転は、発症後6-8時間以内に手術（整復・固定）を行わないと精巣が壊死するため、緊急手術の絶対適応である。",
          "correct": false
        },
        {
          "text": "飲酒後の外傷による膀胱破裂（特に腹腔内破裂）は、腹膜炎をきたすため緊急手術が必要である。",
          "correct": false
        },
        {
          "text": "腎損傷の多くは保存的に治療可能であり、バイタルが安定していれば、血腫があっても緊急手術の適応とはならないことが多い。",
          "correct": true
        },
        {
          "text": "フルニエ壊疽（ガス壊疽）は、急速に進行する致死的な軟部組織感染症であり、緊急デブリードマンが必要である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "泌尿器科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 49,
      "content": "双極性障害（躁うつ病）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "双極性障害の治療は、気分安定薬を中心とした薬物療法が基本である。",
          "correct": false
        },
        {
          "text": "躁状態では思考内容が誇大的に、うつ状態では悲観的になるなど、気分（感情）の変動に応じて思考内容も変化する。",
          "correct": true
        },
        {
          "text": "うつ状態では、罪業妄想、貧困妄想、心気妄想などの微小妄想が見られることがある。",
          "correct": true
        },
        {
          "text": "双極性障害における気分変動は、内的・生物学的な要因が大きく、ストレスなどの心理社会的要因とは無関係に生じることがある。",
          "correct": true
        },
        {
          "text": "躁状態では、次々とアイデアが浮かぶ観念奔逸や、自分は偉大だと信じる誇大妄想が見られる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "精神科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 46,
      "content": "うつ病について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "大うつ病エピソードの中核症状として、抑うつ気分や、興味または喜びの喪失がある。",
          "correct": true
        },
        {
          "text": "うつ病の治療が遷延する場合、双極性障害のうつ状態である可能性を常に考慮する必要がある。",
          "correct": false
        },
        {
          "text": "薬物療法抵抗性の重度のうつ病や、自殺念慮が非常に強い場合には、修正型電気けいれん療法（m-ECT）が有効な治療選択肢となる。",
          "correct": true
        },
        {
          "text": "微小妄想には、罪業妄想、貧困妄想、心気妄想が含まれる。注察妄想は関係妄想の一種である。",
          "correct": false
        },
        {
          "text": "うつ病の薬物療法が奏効しても、再発予防のために維持療法として服薬を継続する必要がある。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "精神科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 49,
      "content": "うつ病で出現しうる症状として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "妄想（特に罪業妄想、貧困妄想、心気妄想などの微小妄想）",
          "correct": true
        },
        {
          "text": "早朝覚醒（睡眠障害の一種）",
          "correct": true
        },
        {
          "text": "観念奔逸（躁状態でみられる）",
          "correct": false
        },
        {
          "text": "多弁・多動（躁状態でみられる）",
          "correct": false
        },
        {
          "text": "易刺激性（焦燥感を伴ううつ病で見られることがある）",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "精神科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 50,
      "content": "精神疾患について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "強迫性障害では、本人は不合理だと分かっていても、強迫観念や強迫行為をやめることができない。",
          "correct": true
        },
        {
          "text": "解離性障害（転換性障害を含む）では、失行、歩行障害、けいれん、失声などの身体症状が見られることがある。",
          "correct": false
        },
        {
          "text": "思考の流れが突然止まる「思考途絶」は、統合失調症に特徴的な症状の一つである。",
          "correct": true
        },
        {
          "text": "統合失調症では、幻覚や妄想などの陽性症状だけでなく、意欲低下や感情鈍麻などの陰性症状も見られる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "精神科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 49,
      "content": "統合失調症について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "幻覚の中で最も頻度が高いのは、幻聴である。",
          "correct": false
        },
        {
          "text": "薬物療法で効果不十分な治療抵抗性統合失調症に対して、修正型電気けいれん療法（m-ECT）が適用されることがある。",
          "correct": false
        },
        {
          "text": "多くの抗精神病薬は、ドパミンD2受容体遮断作用を持つ。",
          "correct": true
        },
        {
          "text": "遺伝的要因が関与し、一卵性双生児での発症一致率は約40-50%とされる。",
          "correct": true
        },
        {
          "text": "妄想や幻覚は、陽性症状に分類される。解体症状はまとまりのない会話や行動などを指す。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "精神科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 50,
      "content": "精神科の症状とその名称の組み合わせとして、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "「私が考えていることが、周りの人に伝わってしまう」→ 思考伝播",
          "correct": true
        },
        {
          "text": "「私にはあなたが何を考えているか手に取る様に分かる」→ これは誇大妄想の一種であり、思考奪取（考えを抜き取られる）ではない。",
          "correct": false
        },
        {
          "text": "「誰かに操られて、わざと変なことを言わされたり、行わされたりしている」→ 作為体験",
          "correct": true
        },
        {
          "text": "「ふと、私は阿弥陀様の生まれ変わりなのだと気づいた」→ 妄想着想",
          "correct": true
        },
        {
          "text": "「すれ違った先生の白衣に土がついていた。これは、私が明日殺されるというしるしだ」→ 妄想知覚",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "精神神経科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 47,
      "content": "幻視を伴うことがある疾患を、選択肢の中から3つ選べ。",
      "choices": [
        {
          "text": "アルコール離脱せん妄",
          "correct": true
        },
        {
          "text": "パニック障害",
          "correct": false
        },
        {
          "text": "レビー小体型認知症",
          "correct": true
        },
        {
          "text": "ナルコレプシー（入眠時幻覚）",
          "correct": true
        },
        {
          "text": "強迫性障害",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "精神科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 50,
      "content": "アルコール依存症について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "診断は飲酒量だけでなく、精神的依存や身体的依存（離脱症状）、コントロール障害の有無などから総合的に行われる。",
          "correct": false
        },
        {
          "text": "離脱症状（特にせん妄やけいれん）に対する薬物治療の第一選択は、ベンゾジアゼピン系薬剤である。",
          "correct": false
        },
        {
          "text": "急に飲酒を中断した際に見られる離脱せん妄では、特徴的な症状として幻視（小動物幻視など）がある。",
          "correct": true
        },
        {
          "text": "長期大量の飲酒は、Wernicke脳症やKorsakoff症候群、脳萎縮などをきたしうる。",
          "correct": true
        },
        {
          "text": "アルコール離脱けいれんに対しては、ベンゾジアゼピン系薬剤が第一選択であり、フェニトインは無効である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "精神科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 49,
      "content": "以下のうち、最も治療的な対応を1つ選べ。",
      "choices": [
        {
          "text": "統合失調症の急性期後の抑うつ状態（消耗期うつ病）に抗うつ薬を使用すると、陽性症状が再燃するリスクがあるため慎重であるべきである。",
          "correct": false
        },
        {
          "text": "緊張病（カタトニア）の患者は、無言・無動でも意識は保たれていることが多く、周囲の状況を理解している可能性があるため、配慮が必要である。",
          "correct": false
        },
        {
          "text": "双極性障害の患者が躁状態で「治った」と言っても、病識が欠如している可能性が高く、自己判断での気分安定薬の中断は再発のリスクが非常に高い。",
          "correct": false
        },
        {
          "text": "神経性やせ症の患者は、体重増加や体型の変化に強い恐怖を感じるため、「太った」「顔色が良くなった」などの身体に関するコメントは避けるべきである。",
          "correct": false
        },
        {
          "text": "せん妄の患者に対しては、時間や場所、人物に関する情報（見当識）を補う（現実見当識訓練）ことが、治療的アプローチとして有効である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "精神神経科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 50,
      "content": "自閉スペクトラム症（ASD）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "知能検査（WISC, WAISなど）は、知的レベルや認知の特性を評価するために有用だが、診断に必須ではない。",
          "correct": true
        },
        {
          "text": "特性の強さに個人差があり、定型発達との境界が明確でないことから、「スペクトラム（連続体）」という名称が用いられている。",
          "correct": true
        },
        {
          "text": "ASD自体に対する中核的な治療薬はない。不注意・多動性を合併する（ADHD併存）場合に中枢神経刺激薬を用いることがある。",
          "correct": false
        },
        {
          "text": "コミュニケーションの特性上、曖昧な表現は混乱を招くため、具体的で直接的な説明が望ましい。",
          "correct": false
        },
        {
          "text": "二次障害として、不安障害、うつ病、適応障害などを合併しやすい。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "精神科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 49,
      "content": "精神科の薬物療法に関する判断として、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "高齢者へのベンゾジアゼピン系睡眠薬は、転倒、せん妄、依存のリスクが高いため、投与は慎重に行うべきである。",
          "correct": false
        },
        {
          "text": "クエチアピンなどの非定型抗精神病薬は、せん妄の治療に用いられるが、糖尿病患者では血糖値の上昇に注意が必要である。",
          "correct": true
        },
        {
          "text": "炭酸リチウムは治療域が狭く、脱水や腎機能低下で中毒を起こしやすいため、インフルエンザなどで食事がとれない場合は一時中止を検討する。",
          "correct": true
        },
        {
          "text": "パーキンソン病患者のうつ症状に対して、SSRI（セルトラリンなど）は、運動症状を悪化させるリスクが比較的低く、使用されることがある。",
          "correct": true
        },
        {
          "text": "ハロペリドールの静脈注射は、QT延長症候群のリスクがあるため、特にアドレナリン投与中など心臓に負荷がかかっている患者には禁忌である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "精神科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 50,
      "content": "精神保健福祉法に基づく入院制度について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "アルコール依存症などで、自傷他害の恐れがある場合は、本人の意思がなくても措置入院の対象となることがある。",
          "correct": true
        },
        {
          "text": "認知症であっても、精神症状があり、医療と保護が必要で本人の同意が得られない場合は、医療保護入院の対象となる。",
          "correct": false
        },
        {
          "text": "未成年者の医療保護入院は、親権を行う者のいずれか1名の同意があれば可能である。",
          "correct": true
        },
        {
          "text": "入院患者の信書の発受の制限や隔離は、精神保健指定医の診察と判断が必要である。",
          "correct": false
        },
        {
          "text": "精神科患者の身体的拘束の開始は、精神保健指定医でなくても、指定医の判断を直ちに仰げない場合は、特定の要件下で医師であれば可能である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "精神科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 26,
      "content": "耳鼻咽喉科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "騒音性難聴は、内耳の有毛細胞が障害される感音難聴であり、ステロイドの明確な有効性は確立されていない。",
          "correct": false
        },
        {
          "text": "真珠腫性中耳炎の手術（鼓室形成術）により、破壊された耳小骨連鎖を再建し、伝音難聴が改善することがある。",
          "correct": true
        },
        {
          "text": "慢性副鼻腔炎の病態には、アレルギー、細菌・真菌感染、気道上皮の線毛運動機能不全などが複合的に関与する。",
          "correct": true
        },
        {
          "text": "原発性副甲状腺機能亢進症の原因の多くは副甲状腺の単発腺腫であり、癌は稀である。",
          "correct": false
        },
        {
          "text": "耳下腺腫瘍で最も多い多形腺腫は良性腫瘍であり、悪性リンパ腫との直接的な合併のしやすさはない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "耳鼻咽喉科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 28,
      "content": "耳鼻科疾患について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "急性感音難聴をきたす代表的な疾患として、突発性難聴、メニエール病、ムンプス難聴などがある。",
          "correct": true
        },
        {
          "text": "好酸球性副鼻腔炎など一部の慢性副鼻腔炎ではマクロライド系抗菌薬の少量長期投与が行われるが、セフェム系は一般的ではない。",
          "correct": false
        },
        {
          "text": "アレルギー性鼻炎の治療には、抗ヒスタミン薬や抗ロイコトリエン薬などの薬物療法が用いられる。",
          "correct": true
        },
        {
          "text": "多発性内分泌腫瘍症（MEN）1型では、下垂体、副甲状腺、膵臓の腫瘍が特徴である。甲状腺髄様癌はMEN2型でみられる。",
          "correct": false
        },
        {
          "text": "原発性副甲状腺機能亢進症の原因として、副甲状腺腺腫が最も多く（約80%）、過形成はそれに次ぐ。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "耳鼻科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 30,
      "content": "耳鼻咽喉科領域の記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "末梢性めまいの原因として、良性発作性頭位めまい症（BPPV）とメニエール病が頻度として高い。",
          "correct": true
        },
        {
          "text": "口腔、中咽頭に発生する悪性腫瘍の多くは、扁平上皮癌である。",
          "correct": false
        },
        {
          "text": "副鼻腔に発生する悪性腫瘍としては、扁平上皮癌や腺癌が多い。",
          "correct": false
        },
        {
          "text": "気管切開は、一般的に甲状腺峡部の下部（第2-4気管軟骨）で行われる。",
          "correct": true
        },
        {
          "text": "甲状腺癌の中で最も頻度が高いのは乳頭癌であり、全体の約9割を占める。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "耳鼻咽喉科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 28,
      "content": "それ単独で一過性脳虚血発作（TIA）と判断できる徴候を2つ選べ。",
      "choices": [
        {
          "text": "構音障害（単独ではTIAと断定しにくい非特異的症状）",
          "correct": false
        },
        {
          "text": "回転性めまい（単独では末梢性の可能性も高く、TIAと断定しにくい）",
          "correct": false
        },
        {
          "text": "同名半盲（後頭葉や視放線の虚血を示唆する特異的な徴候）",
          "correct": true
        },
        {
          "text": "閃輝暗点（片頭痛の前兆として多く、TIAとしては非典型的）",
          "correct": false
        },
        {
          "text": "一過性黒内障（内頸動脈系の虚血を示唆する特異的な徴候）",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "脳神経外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 26,
      "content": "70代男性、心房細動の既往。今朝から様子がおかしい。神経学的には意識清明、構音障害、左片麻痺あり。Wake-up strokeが疑われる状況での対応として、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "発症時刻不明（Wake-up stroke）でも、MRIのDWI/FLAIRミスマッチがあれば、血栓溶解療法や血栓回収療法の適応となる可能性がある。",
          "correct": false
        },
        {
          "text": "臨床症状から脳梗塞が強く疑われるが、脳出血を除外するためにまず頭部CTを撮影する。MRIも追加で必要となる。",
          "correct": false
        },
        {
          "text": "急性期脳梗塞で血管内治療の可能性があるため、速やかに脳卒中専門医にコンサルトする。",
          "correct": true
        },
        {
          "text": "血栓溶解療法（t-PA）の適応判断には、発症時刻の評価が重要であり、MRIのFLAIR画像とDWI画像の比較（DWI/FLAIRミスマッチ）が有用である。",
          "correct": true
        },
        {
          "text": "血栓溶解療法を考慮する場合、頭蓋内出血のリスクを評価するために血液凝固検査は必須である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "脳神経外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 29,
      "content": "遺伝性乳癌卵巣癌症候群（HBOC）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "HBOCでは、乳癌の生涯発症リスクが卵巣癌よりも高く、発症年齢も乳癌の方が早い傾向がある。",
          "correct": false
        },
        {
          "text": "BRCA1/2遺伝子変異は、男性では前立腺癌や膵臓癌、男性乳癌のリスクとなる。",
          "correct": true
        },
        {
          "text": "臨床的にHBOCが強く疑われても、BRCA1/2遺伝子検査が陰性となる（他の原因遺伝子などが関与する）こともある。",
          "correct": true
        },
        {
          "text": "リスク低減卵管卵巣摘出術（RRSO）は、卵巣癌のリスクを大幅に低下させ、ホルモン環境の変化により乳癌の発生リスクも下げることが知られている。",
          "correct": true
        },
        {
          "text": "BRCA1関連乳癌は、ホルモン受容体陰性かつHER2陰性のトリプルネガティブ乳癌であることが多い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腫瘍内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 43,
      "content": "麻酔管理について、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "吸入麻酔薬のデスフルランは気道刺激性が強いため、特に小児の緩徐導入には適さない。",
          "correct": false
        },
        {
          "text": "肥満患者は機能的残気量が少なく無気肺になりやすいため、人工呼吸管理では高めのPEEPを設定することがある。",
          "correct": true
        },
        {
          "text": "全身麻酔リスクの高い患者の人工膝関節置換術は、大腿神経ブロックと坐骨神経ブロックを併用した末梢神経ブロック下で行うことがある。",
          "correct": true
        },
        {
          "text": "妊婦では硬膜外腔が狭くなっているため、硬膜外麻酔では非妊婦より少ない薬物量で効果が得られる。",
          "correct": true
        },
        {
          "text": "術中のアナフィラキシーショックの原因薬剤として、筋弛緩薬と抗菌薬の頻度が高い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "麻酔科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 40,
      "content": "麻酔薬について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "吸入麻酔薬デスフルランは、気道刺激性があるため、喘息患者などには注意が必要である。",
          "correct": true
        },
        {
          "text": "静脈麻酔薬レミマゾラムはベンゾジアゼピン系であり、その作用は拮抗薬のフルマゼニルでリバースされる。",
          "correct": true
        },
        {
          "text": "静脈麻酔薬プロポフォールは、Propofol Infusion Syndromeのリスクがあるため、小児への長時間の使用は特に慎重を要する。",
          "correct": true
        },
        {
          "text": "オンダンセトロンはセロトニン5-HT3受容体拮抗薬で、術後の悪心・嘔吐（PONV）の予防と治療に用いられる。",
          "correct": false
        },
        {
          "text": "オピオイド鎮痛薬レミフェンタニルは、血中エステラーゼで速やかに分解されるため、腎機能障害のある患者でも作用時間は延長しない。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 43,
      "content": "麻酔関連薬剤に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "吸入麻酔薬セボフルランは気道刺激性が小さいため、小児の全身麻酔の緩徐導入に適している。",
          "correct": true
        },
        {
          "text": "静脈麻酔薬プロポフォールは制吐作用を持つため、吸入麻酔薬で維持した場合より術後悪心嘔吐（PONV）をきたしにくい。",
          "correct": false
        },
        {
          "text": "局所麻酔薬は、アシドーシス状態の炎症部位ではイオン型が増加して神経細胞膜を透過しにくくなり、効果が減弱する。",
          "correct": false
        },
        {
          "text": "オピオイド（フェンタニルなど）の過量投与による呼吸抑制に対しては、拮抗薬のナロキソンを投与する。",
          "correct": true
        },
        {
          "text": "手術室で発生するアナフィラキシーショックの原因薬剤として、筋弛緩薬と抗菌薬が多い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 43,
      "content": "麻酔薬に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "吸入麻酔薬デスフルランは気道刺激性が強く、小児の緩徐導入には不向きである。",
          "correct": false
        },
        {
          "text": "静脈麻酔薬プロポフォールは制吐作用があり、吸入麻酔薬よりも術後悪心嘔吐の頻度が低い。",
          "correct": false
        },
        {
          "text": "局所麻酔薬リドカインに血管収縮薬エピネフリンを添加すると、局所からの吸収が遅れ、作用持続時間が延長する。",
          "correct": true
        },
        {
          "text": "オピオイド鎮痛薬フェンタニルの拮抗薬としてナロキソンを用いる。",
          "correct": true
        },
        {
          "text": "筋弛緩薬ロクロニウムを過量に投与した場合、拮抗薬スガマデクスを投与しても、スガマデクスが体内から消失した後に筋弛緩作用が再び現れること（再クラーレ化）がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 43,
      "content": "麻酔薬に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "レミフェンタニルは血漿エステラーゼで代謝されるため、重度の肝機能障害でも作用時間は延長しない。",
          "correct": false
        },
        {
          "text": "スガマデクスは、筋弛緩薬のロクロニウムおよびベクロニウムと選択的に結合（包接）して、その作用を不活化する。",
          "correct": true
        },
        {
          "text": "ナロキソンは、オピオイド受容体に拮抗し、オピオイドによる呼吸抑制作用を改善する。",
          "correct": true
        },
        {
          "text": "デスフルランの血液/ガス分配係数は0.42と非常に小さく、導入・覚醒が速い。亜酸化窒素（0.47）よりも小さい。",
          "correct": false
        },
        {
          "text": "フルマゼニルは、ベンゾジアゼピン受容体に拮抗し、ミダゾラムなどのベンゾジアゼピン系薬剤の作用を拮抗する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "麻酔科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 44,
      "content": "麻酔中のモニタリングについて、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "観血的動脈圧測定で、圧トランスデューサーをゼロ点（右心房の高さ）より下げると、血圧は実際よりも高く表示される。",
          "correct": false
        },
        {
          "text": "腹腔鏡手術中に呼気終末二酸化炭素濃度（EtCO2）が急激に上昇した場合、気腹ガスが皮下に漏れる皮下気腫を疑う。",
          "correct": true
        },
        {
          "text": "麻酔導入により、脳波は覚醒時の低振幅速波から、高振幅徐波へと変化する。",
          "correct": false
        },
        {
          "text": "肺動脈カテーテルの先端が右心室から肺動脈へ進むと、拡張期圧が上昇する。",
          "correct": false
        },
        {
          "text": "肺血流が途絶える肺塞栓症が起こると、呼気終末二酸化炭素濃度（EtCO2）は急激に低下する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "麻酔科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 44,
      "content": "手術中の患者モニタリングに関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "観血的動脈圧の測定には、橈骨動脈が最も一般的に用いられる。",
          "correct": false
        },
        {
          "text": "肺動脈カテーテル先端が右心室から肺動脈に進んだ際の圧波形変化は、拡張期圧の上昇である。",
          "correct": false
        },
        {
          "text": "肺塞栓症を発症した際、肺胞死腔が増加するため、呼気終末二酸化炭素分圧（EtCO2）は急激に低下する。",
          "correct": false
        },
        {
          "text": "全身麻酔が深まると、皮質脳波は覚醒時の低振幅速波から、高振幅徐波化する。",
          "correct": true
        },
        {
          "text": "心筋虚血の早期発見には、左心室側壁の変化を捉えやすい心電図のV5誘導が最も鋭敏であるとされる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 44,
      "content": "生体モニターと生理学的変化について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "非観血的血圧測定で、マンシェット（カフ）が腕に対して小さい場合、血圧は実際より高く測定される。",
          "correct": true
        },
        {
          "text": "観血的動脈圧測定で、圧トランスデューサーをゼロ点（心臓の高さ）より下げると、静水圧の影響で血圧は高く表示される。",
          "correct": false
        },
        {
          "text": "肺動脈カテーテルを右室から肺動脈へ進めると、収縮期圧はほぼ変わらず、拡張期圧が上昇する。",
          "correct": false
        },
        {
          "text": "肺塞栓では、呼気終末CO2濃度は急激に低下するが、動脈血CO2分圧は直後には低下しない（むしろ上昇することもある）。",
          "correct": false
        },
        {
          "text": "全身麻酔中に意図的に低体温にすると、脳の代謝が抑制され、脳波は平坦化することがある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 45,
      "content": "麻酔科の知識について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "圧トランスデューサーを体のゼロ点（右心房の高さ）より下に下げると、血圧は実際よりも高く表示される。",
          "correct": true
        },
        {
          "text": "腹腔鏡手術の麻酔中に呼気終末CO2濃度が急に上昇した場合、気腹ガスの皮下気腫やガス塞栓を疑う。",
          "correct": true
        },
        {
          "text": "筋弛緩薬（ロクロニウムなど）の拮抗薬はスガマデクスであり、フルマゼニルはベンゾジアゼピン系薬剤の拮抗薬である。",
          "correct": false
        },
        {
          "text": "×選択肢のはず",
          "correct": null
        },
        {
          "text": "左肺の手術で分離肺換気を行う際は、気管支内腔が右気管支よりも直線的で長い左用のダブルルーメンチューブを用いるのが一般的である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 45,
      "content": "麻酔科の知識について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "デスフルランは血液/ガス分配係数が小さく導入・覚醒が速やかだが、気道刺激性が強いため小児の緩徐導入には用いない。",
          "correct": false
        },
        {
          "text": "肺塞栓症では、肺胞への血流が途絶えるため、肺胞死腔が増大し、呼気終末CO2分圧（EtCO2）は急激に低下する。",
          "correct": true
        },
        {
          "text": "腹腔鏡下手術で、呼気の二酸化炭素濃度が上昇した時は、炭酸ガスの吸収が増加している状態（皮下気腫やガス塞栓）を疑う。",
          "correct": true
        },
        {
          "text": "肺動脈カテーテルが右室から肺動脈に入ると、拡張期圧は著しく上昇する。",
          "correct": false
        },
        {
          "text": "観血的動脈圧測定で、トランスデューサーをゼロ点（心臓の高さ）より下に置くと、静水圧の影響で血圧は高く表示される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "麻酔科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 46,
      "content": "麻酔科領域の知識について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "一酸化炭素（CO）中毒の治療には高濃度酸素投与が基本であり、重症例では高圧酸素療法が可能な施設への搬送を考慮する。",
          "correct": true
        },
        {
          "text": "プロポフォールは、GABA-A受容体の機能を「増強」することで鎮静・催眠作用を示す。",
          "correct": false
        },
        {
          "text": "現在、手術の局所麻酔でよく使われるのは、アレルギー反応が少ないアミド型である。",
          "correct": false
        },
        {
          "text": "気道異物は、無症状であっても後に肺炎や無気肺を起こす可能性があるため、原則として除去する。",
          "correct": true
        },
        {
          "text": "術中に発生するアナフィラキシーの原因薬剤として、筋弛緩薬と抗菌薬の頻度が高い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "麻酔科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 41,
      "content": "術後の悪心・嘔吐（PONV）のリスク因子となるものを2つ選べ。",
      "choices": [
        {
          "text": "女性",
          "correct": true
        },
        {
          "text": "非喫煙歴",
          "correct": false
        },
        {
          "text": "術後オピオイド使用",
          "correct": false
        },
        {
          "text": "吸入麻酔薬の使用",
          "correct": false
        },
        {
          "text": "乗り物酔いの既往",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 42,
      "content": "ショックに関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "アナフィラキシーショックは、抗原が体内に入ってから数分〜数十分で発症する即時型アレルギー反応である。",
          "correct": false
        },
        {
          "text": "敗血症性ショックは、初期には高心拍出量性のwarm shockを呈することが多い。",
          "correct": false
        },
        {
          "text": "緊張性気胸は、心臓への静脈還流が物理的に妨げられるため、閉塞性ショックに分類される。",
          "correct": true
        },
        {
          "text": "出血性ショックでは、代償機構として交感神経が活性化し、末梢血管抵抗は増加する。",
          "correct": true
        },
        {
          "text": "アナフィラキシーショックでは、ヒスタミンなどにより末梢血管が拡張するため、末梢血管抵抗は著しく減少する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 45,
      "content": "麻酔管理における記述のうち、明らかに誤っているものを1つ選べ。",
      "choices": [
        {
          "text": "帝王切開術を受ける妊婦では、硬膜外静脈叢の怒張により、非妊婦と比べて脊髄くも膜下麻酔の麻酔域が広がりやすい。",
          "correct": false
        },
        {
          "text": "長時間手術で筋弛緩薬ロクロニウムを大量に使用すると、拮抗薬スガマデクスを投与しても再筋弛緩（再クラレ化）が起こりうる。",
          "correct": false
        },
        {
          "text": "仙骨麻酔は、小児の鼠径ヘルニア手術などで行われ、仙骨裂孔からカテーテルを挿入する硬膜外麻酔の一種である。",
          "correct": false
        },
        {
          "text": "経尿道的膀胱腫瘍切除術（TURBT）において、閉鎖神経反射による下肢内転を防ぐために閉鎖神経ブロックを併用する。",
          "correct": true
        },
        {
          "text": "左肺全摘術における分離肺換気では、右肺を換気し左肺を虚脱させるため、一般的に左用のダブルルーメンカテーテルを用いる。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 45,
      "content": "麻酔手技と合併症について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "仙骨ブロックは、仙骨裂孔から薬液を注入する「硬膜外麻酔」の一種である。",
          "correct": false
        },
        {
          "text": "術中のアナフィラキシーショックの原因として、筋弛緩薬と抗菌薬の頻度が高い。",
          "correct": true
        },
        {
          "text": "経尿道的膀胱腫瘍切除術（TURBT）の際、膀胱側壁の腫瘍切除時に閉鎖神経が刺激されるのを防ぐため、閉鎖神経ブロックを行うことがある。",
          "correct": true
        },
        {
          "text": "吸入麻酔薬（セボフルランなど）には子宮筋弛緩作用があるため、分娩後の弛緩出血のリスクを増大させる可能性がある。",
          "correct": false
        },
        {
          "text": "左肺の手術で分離肺換気を行う際は、構造的に安定させやすい左用のダブルルーメンチューブを用いるのが一般的である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 45,
      "content": "帝王切開の麻酔について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "妊婦では、脊髄くも膜下麻酔の薬液は非妊婦よりも頭側に広がりやすい。",
          "correct": true
        },
        {
          "text": "妊婦は誤嚥性肺炎のリスクが高いため、全身麻酔導入前の十分なマスク換気と輪状軟骨圧迫が重要である。",
          "correct": true
        },
        {
          "text": "仰臥位低血圧症候群を予防するため、子宮を左方に傾ける（子宮左方転位）。",
          "correct": true
        },
        {
          "text": "妊婦は気道粘膜の浮腫などにより、非妊婦より気管挿管が困難な場合がある。",
          "correct": true
        },
        {
          "text": "吸入麻酔薬セボフルランには子宮筋弛緩作用があり、分娩後の弛緩出血を助長する可能性がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "麻酔科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 47,
      "content": "麻酔管理について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "妊婦は、麻酔薬に対する感受性が亢進しているため、吸入麻酔薬や静脈麻酔薬の必要量が減少する。",
          "correct": true
        },
        {
          "text": "全身麻酔が困難な患者の膝関節置換術は、大腿神経ブロックや坐骨神経ブロックなどの区域麻酔下で行うことができる。",
          "correct": true
        },
        {
          "text": "左肺の手術で分離肺換気を行う場合、一般的に左用のダブルルーメンチューブが使用される。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 44,
      "content": "周術期の呼吸管理に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "喫煙者は、慢性的な気道炎症により気道過敏性が亢進している。",
          "correct": true
        },
        {
          "text": "無気肺領域では、低酸素性肺血管攣縮により、肺血管抵抗は上昇する。",
          "correct": false
        },
        {
          "text": "肥満患者では、胸郭や腹部の脂肪により、肺コンプライアンスは低下している。",
          "correct": false
        },
        {
          "text": "術前の禁煙により、一酸化炭素ヘモグロビンの正常化や酸素運搬能の改善には少なくとも12時間以上が必要とされる。",
          "correct": true
        },
        {
          "text": "一酸化窒素（NO）吸入療法は、選択的な肺血管拡張作用があり、肺高血圧の治療に用いられる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "麻酔科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 46,
      "content": "麻酔関連の知識について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "破傷風ワクチンを接種済みでも、最終接種からの期間や受傷の状況によっては、追加のワクチンやトキソイド投与が必要な場合がある。",
          "correct": false
        },
        {
          "text": "炎症部位はアシドーシスに傾いており、局所麻酔薬の効果が減弱するため、麻酔が効きにくい。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "麻酔科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 19,
      "content": "救急診療（熱傷・中毒）について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "熱傷における輸液投与量を計算するための熱傷面積は、II度熱傷とIII度熱傷の面積の和で算出する。",
          "correct": true
        },
        {
          "text": "感染の兆候がない熱傷創に対して、予防的な抗菌薬の全身投与は推奨されない。",
          "correct": true
        },
        {
          "text": "アセトアミノフェンの過量摂取は、重篤な肝障害を引き起こす可能性がある。",
          "correct": true
        },
        {
          "text": "血中一酸化炭素ヘモグロビン（CO-Hb）の半減期は、室内気吸入下で約4〜5時間、高濃度酸素投与で約1時間である。",
          "correct": false
        },
        {
          "text": "薬物中毒に対する胃洗浄は、適応が厳しく限定されており（例：服用後1時間以内など）、ルーチンでは行われない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 20,
      "content": "救急医療について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "心室細動（VF）や無脈性心室頻拍（pulseless VT）に対する除細動では、心拍への同期は不要である。",
          "correct": true
        },
        {
          "text": "減圧症では、血管内に生じた窒素の気泡が血管内皮を障害し、血管透過性が亢進する。",
          "correct": true
        },
        {
          "text": "重度の高山病では、高地脳浮腫（HACE）や高地肺水腫（HAPE）といった致死的な病態を生じることがある。",
          "correct": false
        },
        {
          "text": "災害時のトリアージにおいて、心肺停止の傷病者は黒タッグ（不処置群）となり、治療の優先度は最も低くなる。",
          "correct": false
        },
        {
          "text": "トリアージにおいて、黄色タグは待機的治療群（入院を要するがバイタルは安定）を表し、緑タグが歩行可能な軽症群を表す。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 21,
      "content": "救急診療について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "頸椎損傷が否定できない重傷外傷患者の気道確保では、頸部を動かさない下顎挙上法を用いる。",
          "correct": true
        },
        {
          "text": "初回FASTが陰性でも、その後のバイタルサインが悪化した場合などは、経時的にFASTを再検する必要がある。",
          "correct": false
        },
        {
          "text": "呼吸状態が不安定な患者に対しては、画像検査よりもまず気道確保や酸素投与などの呼吸状態の安定化を優先する。",
          "correct": false
        },
        {
          "text": "低体温は血液凝固障害を増悪させる「死の三徴（低体温、アシドーシス、凝固障害）」の一つであり、体温管理は極めて重要である。",
          "correct": true
        },
        {
          "text": "緊張性気胸に対して、緊急の胸腔穿刺による脱気は救命的な処置となりうる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "救急診療科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 40,
      "content": "耳鼻科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "耳鳴りの治療では、薬物療法のほか、音響療法や心理療法などによりQOLの向上を目指すことが大切である。",
          "correct": true
        },
        {
          "text": "アレルギー性鼻炎の治療ガイドラインでは、複数の内服薬の併用も症状に応じて考慮される。",
          "correct": false
        },
        {
          "text": "伝音難聴は外耳・中耳の障害であり、ビタミン剤やステロイドは主に感音難聴の一部の疾患で用いられる。",
          "correct": false
        },
        {
          "text": "頭頸部癌（特に口腔・咽頭・喉頭）の組織型は、その多くが扁平上皮癌である。",
          "correct": false
        },
        {
          "text": "甲状腺癌の中で最も頻度が高いのは乳頭癌であり、日本人の甲状腺癌の約9割を占める。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "耳鼻科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 41,
      "content": "整形外科の外傷について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "アキレス腱が断裂していても、他の足指屈筋などの代償により足関節の底屈運動は一部可能だが、つま先立ちはできなくなる。",
          "correct": true
        },
        {
          "text": "高齢者の脊椎圧迫骨折は、受傷直後のX線では異常を認めず、後日になって骨折が明らかになることがあるため、経時的な再評価が重要である。",
          "correct": true
        },
        {
          "text": "足関節骨折を診る際には、腓骨の高位骨折（Maisonneuve骨折）の合併を念頭に、下腿全体のX線撮影を検討する。",
          "correct": true
        },
        {
          "text": "骨幹端部（海綿骨）は血行が豊富であるため、骨幹部（皮質骨）よりも骨癒合が速やかに進む。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "整形外科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 42,
      "content": "腎細胞がんについて、正しいものを1つ選べ。",
      "choices": [
        {
          "text": "腎細胞がんの大部分は、近位尿細管の上皮から発生する淡明細胞型腎細胞癌である。",
          "correct": false
        },
        {
          "text": "転移性腎細胞がんの治療では、分子標的薬や免疫チェックポイント阻害薬が中心であり、従来の化学療法（シスプラチンなど）は効果が限定的である。",
          "correct": false
        },
        {
          "text": "小径腎癌（例：4cm以下）に対しては、腎機能温存の観点から腎部分切除術が推奨され、全摘術と同等の生命予後が期待できる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "泌尿器科",
      "source_file": "2022年 北野病院.json"
    }
  ]
};

export const minorData: DepartmentData = {
  department: "マイナー科",
  total_questions: baseMinorData.total_questions,
  hospitals: baseMinorData.hospitals,
  years: baseMinorData.years,
  questions: (baseMinorData.questions as any[]).map((q: any) => ({
    ...q,
    department: "マイナー科",
    id: makeQuestionId("マイナー科", q.year, q.question_number, q.content),
    choices: (q.choices as any[]).map((c: any) => ({ ...c, correct: !!c.correct })),
  })),
};
