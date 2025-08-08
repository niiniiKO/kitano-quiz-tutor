import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const minorData: DepartmentData = {
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
          "text": "増殖期には、コラーゲン線維が再構築され、瘢痕組織が成熟する。",
          "correct": false
        },
        {
          "text": "成熟期には、肉芽組織の形成と血管新生が活発に起こる。",
          "correct": false
        },
        {
          "text": "上皮化は、成熟期の最終段階で完了する。",
          "correct": false
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
          "text": "上皮化は創傷後、数時間以内に開始される。",
          "correct": false
        },
        {
          "text": "単球と多核白血球は貪食能を持つ。",
          "correct": true
        },
        {
          "text": "創傷は、乾燥環境下よりも湿潤環境下の方が上皮化は早い。",
          "correct": true
        },
        {
          "text": "コラーゲンの増殖は、受傷後直ちに開始される。",
          "correct": false
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
          "text": "創傷治癒の成熟期では、細胞成分は減少する。",
          "correct": true
        },
        {
          "text": "全ての創傷は、5日以内に一次治癒する。",
          "correct": false
        },
        {
          "text": "オオサンショウウオの四肢の再生は、修復の一例である。",
          "correct": false
        },
        {
          "text": "肥満細胞は、ヒスタミンを含有する。",
          "correct": true
        },
        {
          "text": "ケロイドは、正常な瘢痕組織である。",
          "correct": false
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
          "text": "先天性眼瞼下垂は、視力の発達に影響を及ぼす可能性がある。",
          "correct": true
        },
        {
          "text": "ヒトの鰓弓は、頭側から第1から第5まで存在する。",
          "correct": false
        },
        {
          "text": "リンパ管腫は、3歳までに集学的治療を完了させる必要がある。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "形成外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 26,
      "content": "顔面神経支配のものをについて、各選択肢の正誤を答えよ。",
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
          "text": "側頭筋",
          "correct": false
        },
        {
          "text": "胸鎖乳突筋",
          "correct": false
        },
        {
          "text": "上眼瞼挙筋",
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
      "content": "重症多発外傷の診断・治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "気道確保を優先する。",
          "correct": true
        },
        {
          "text": "意識障害が悪ければ、頭部CTを一番に撮影する。",
          "correct": false
        },
        {
          "text": "出血性ショックでは、まず昇圧剤を投与する。",
          "correct": false
        },
        {
          "text": "FASTでは心嚢内、胸腔内と腹腔内出血を確認する。",
          "correct": true
        },
        {
          "text": "緊張性気胸は頸静脈怒張を認める。",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "重傷外傷患者の気道確保時に下顎挙上を行う。",
          "correct": true
        },
        {
          "text": "初回 FAST 陰性の患者には経時的再検は行わない。",
          "correct": false
        },
        {
          "text": "呼吸状態が不安定の患者にたいして CT をまず優先する。",
          "correct": false
        },
        {
          "text": "体温は出血因子として重要である。",
          "correct": true
        },
        {
          "text": "気胸は胸腔穿刺によって症状の緩和が得られる。",
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
      "content": "救急について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ボールが胸部に当たったのは心静止",
          "correct": false
        },
        {
          "text": "緊急気道確保は輪状甲状靭帯穿刺",
          "correct": true
        },
        {
          "text": "気管切開は第2気管輪以下",
          "correct": true
        },
        {
          "text": "大腿骨骨折の出血量1000mL",
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
      "content": "敗血症性ショックの症例。初期対応としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "適切な抗菌薬投与",
          "correct": true
        },
        {
          "text": "血液培養採取",
          "correct": true
        },
        {
          "text": "昇圧剤のみ",
          "correct": false
        },
        {
          "text": "DICの治療を行う",
          "correct": true
        },
        {
          "text": "輸液とノルアドレナリン",
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
      "content": "救急について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "61歳男性が脚立から落下し腎損傷によりショック状態となった場合は緊急手術を行い直ちに腎臓を摘出せねばならない。",
          "correct": false
        },
        {
          "text": "虫刺されからしばらくして顔の腫れや呼吸苦を訴える患者に対する第一選択薬はアトロピンである。",
          "correct": false
        },
        {
          "text": "体温28℃の状態で搬送されてきた偶発性低体温症の患者は、1時間で36℃まで体温を上げなければならない。",
          "correct": false
        },
        {
          "text": "緊張性気胸によりショック状態となった場合、このショックは閉塞性ショックに分類される。",
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
      "content": "救急医療に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "選択肢なし",
          "correct": null
        },
        {
          "text": "外傷でX線でまず取るのが胸部と腹部",
          "correct": true
        },
        {
          "text": "トリアージでまず急ぐのが黄色",
          "correct": false
        },
        {
          "text": "心タンポナーデは血液分布異常性ショック",
          "correct": false
        },
        {
          "text": "サイトカインが増加すると好中球が刺激を受けて好中球エラスターゼが放出される",
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
      "content": "START式トリアージで赤タッグと判定されるものをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "歩行可能である",
          "correct": false
        },
        {
          "text": "気道確保しても自発呼吸がない",
          "correct": false
        },
        {
          "text": "呼吸数が35回/分",
          "correct": true
        },
        {
          "text": "橈骨動脈を触知しない",
          "correct": true
        },
        {
          "text": "簡単な指示に応じる",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "無脈 VT、VFへの電気除細動において同期は不要である。",
          "correct": true
        },
        {
          "text": "減圧症によって血管透過性が亢進する。",
          "correct": true
        },
        {
          "text": "高山病では脳浮腫は生じない。",
          "correct": false
        },
        {
          "text": "トリアージにおいて心肺停止の患者を最優先に取り扱う。",
          "correct": false
        },
        {
          "text": "トリアージにおいて黄色タグは歩行可能を表す。",
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
      "content": "救急科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性中毒は数時間以内なら活性炭を投与する。",
          "correct": true
        },
        {
          "text": "出血性ショックは皮膚が乾燥する。",
          "correct": false
        },
        {
          "text": "神経原性ショックは血液分布異常ショックに分類される。",
          "correct": true
        },
        {
          "text": "神経性食思不振症に神経性大食症を合併することがある。",
          "correct": true
        },
        {
          "text": "ノロウイルスによる食中毒は届け出る。",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "熱傷における輸液投与量の熱傷面積はII度+III度の和で表される。",
          "correct": true
        },
        {
          "text": "熱傷に予防的抗生剤投与は不要である。",
          "correct": true
        },
        {
          "text": "アセトアミノフェン中毒により肝障害を引き起こす。",
          "correct": true
        },
        {
          "text": "CO-Hb の半減期は12h である。",
          "correct": false
        },
        {
          "text": "薬物中毒に対する胃洗浄の適応は8時間以内である。",
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
      "content": "救急疾患と中毒に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "熱傷面積はII度+III度の面積",
          "correct": true
        },
        {
          "text": "横紋筋融解症でみられるのはミオグロビン尿",
          "correct": true
        },
        {
          "text": "カフェイン中毒で徐脈",
          "correct": false
        },
        {
          "text": "一酸化炭素中毒では呼吸停止しない。",
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
      "content": "高齢者で、突然の前胸部から背部にかけての激しい痛みを訴えて搬送された。ポータブル X 線で縦隔陰影の拡大を確認、心電図異常はなく、右大腿動脈触知良好。左大腿動脈は触知不可であった。以下の処置のうち、不適切なものをひとつについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "鎮痛剤投与",
          "correct": true
        },
        {
          "text": "降圧剤投与",
          "correct": true
        },
        {
          "text": "ヘパリン投与",
          "correct": false
        },
        {
          "text": "造影CT 撮影",
          "correct": true
        },
        {
          "text": "心エコー",
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
      "content": "救急処置に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "無脈性 VT、VFへの電気的除細動は同期不要",
          "correct": true
        },
        {
          "text": "静脈路確保が困難な場合、骨髄路をとる",
          "correct": true
        },
        {
          "text": "減圧症は窒素の気泡のせい",
          "correct": true
        },
        {
          "text": "気道確保に輪状甲状靱帯穿刺?",
          "correct": true
        },
        {
          "text": "昏睡で運ばれてきた患者の尿から覚醒剤反応が出たら通報する義務がある",
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
      "content": "救急について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "ARDS の診断には心不全の除外が必要である。",
          "correct": true
        },
        {
          "text": "クラッシュ症候群で出る褐色尿はヘモグロビン尿である。",
          "correct": false
        },
        {
          "text": "夜中に飲食を共にした3人が同時に腹痛を訴えた場合、すぐ食中毒と診断してよい。",
          "correct": false
        },
        {
          "text": "患者の尿から覚醒剤の反応が出た場合でも通報義務はない。",
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
      "content": "正しい選択肢3つの組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児の外傷性出血性ショックに対して、初期急速輸液として等張電解質を5.0ml/kgでボーラス静注する",
          "correct": false
        },
        {
          "text": "ARDSの診断には心不全の除外が必要である",
          "correct": true
        },
        {
          "text": "胸骨圧迫心マッサージは正しく行えば正常時の心拍出量の1/3は確保できる",
          "correct": true
        },
        {
          "text": "サイトカインが増加すると好中球が刺激を受けて好中球エラスターゼが放出される",
          "correct": true
        },
        {
          "text": "3人の患者が同時に腹痛と下痢を訴えた場合、食中毒と断定して良い",
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
      "content": "正しい判断はどれか。3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "人工膝関節置換で呼吸不全で全身麻酔困難な患者には大腿ブロック単独で手術を行う。",
          "correct": true
        },
        {
          "text": "帝王切開術では、硬膜外麻酔の量が通常よりも少なめで良い。",
          "correct": true
        },
        {
          "text": "意識不明の人に対して医師の判断で手術してよい。",
          "correct": true
        },
        {
          "text": "肥満の人に対して陽圧換気を行う場合PEEPを高く設定する。",
          "correct": true
        },
        {
          "text": "手術を終わる直前に筋弛緩薬を入れてしまったのでフルマゼニルで拮抗した。",
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
      "content": "整形外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アキレス腱断裂では、歩行や底屈、背屈はできるが、つま先立ちは出来ないことが多い。",
          "correct": true
        },
        {
          "text": "高齢者の椎骨骨折を疑ったら受傷時にx線で病変を確認できなくても、経時的に x線を撮る",
          "correct": true
        },
        {
          "text": "足関節付近の骨折で、下腿全体をx線で確認することも場合によってはある",
          "correct": true
        },
        {
          "text": "骨幹端部(海綿骨)骨折より骨幹部(皮質骨)骨折のほうが治りが早い",
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
      "content": "整形外科疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "上腕骨骨幹部骨折は橈骨神経麻痺のおそれがあり注意が必要である。",
          "correct": true
        },
        {
          "text": "開放骨折は神経血管障害を伴うので緊急手術が必要である。",
          "correct": true
        },
        {
          "text": "アキレス腱断裂では足関節がすべて動かなくなる。",
          "correct": false
        },
        {
          "text": "病的骨折は骨癒合が不完全な骨折のことである。",
          "correct": false
        },
        {
          "text": "疲労骨折は軽微な負荷が長時間かかり起こる骨折のことである。",
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
      "content": "整形外科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "上腕骨顆上骨折による volkman 拘束では不可逆的な手指運動障害が起こる",
          "correct": true
        },
        {
          "text": "大腿骨頸部骨折の二次予防にビスフォスフォネートが有効ではない",
          "correct": false
        },
        {
          "text": "高齢者の脊椎圧迫骨折は経時的にX線をとるべき",
          "correct": true
        },
        {
          "text": "疲労骨折はX線で映らないことがある",
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
      "content": "整形外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "骨粗鬆症の治療は高齢者の骨折予防になる。",
          "correct": true
        },
        {
          "text": "開放骨折は神経血管障害をともなうので緊急手術が必要である。",
          "correct": true
        },
        {
          "text": "上腕骨外科頸骨折は小児に多い。",
          "correct": false
        },
        {
          "text": "骨癒合が不完全な骨折を病的骨折という。",
          "correct": false
        },
        {
          "text": "疲労骨折とは軽い負荷が長期間かかり起こる骨折のことである。",
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
      "content": "整形外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "下肢のシーネ固定では総腓骨神経麻痺、○○麻痺などのコンパートメント症候群?に注意する",
          "correct": true
        },
        {
          "text": "骨折では健側のX線撮影をする必要は無い",
          "correct": false
        },
        {
          "text": "上腕骨骨幹部骨折では正中神経障害が多い",
          "correct": false
        },
        {
          "text": "高齢者の骨折では大腿骨頸部骨折が多いが、恥骨骨折や坐骨骨折を見逃していないか注意する必要がある",
          "correct": true
        },
        {
          "text": "?(正解選択肢)圧迫骨折の治療に骨粗鬆症の治療は有用である",
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
      "content": "骨粗鬆症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "診断には腰部MRIが必須である。",
          "correct": false
        },
        {
          "text": "閉経後女性に多い。",
          "correct": true
        },
        {
          "text": "ステロイド使用は発症リスクである。",
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
      "content": "泌尿器科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腎細胞がんの殆どは集合管から発生する",
          "correct": false
        },
        {
          "text": "転移のある腎細胞がんではシスプラチンを中心とした化学療法が第一選択である",
          "correct": false
        },
        {
          "text": "小さい腎細胞がんでは部分切除と全摘で予後は変わらない。",
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
      "content": "膀胱癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腫瘍マーカー、細胞診だけでおよそ全例の膀胱癌を診断できる。",
          "correct": false
        },
        {
          "text": "喫煙は男性の膀胱癌の原因の半数を占める。",
          "correct": true
        },
        {
          "text": "表皮上?膀胱癌、表皮内膀胱癌は再発予防にBCGを皮下注する。",
          "correct": false
        },
        {
          "text": "尿管皮膚瘻は、長期腎機能温存において最適である。",
          "correct": false
        },
        {
          "text": "化学療法ではプラチナ製剤を含むレジメンを用いるのが第一選択である。",
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
      "content": "前立腺肥大症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "前立腺肥大腺腫は内腺(移行領域)からの発生が多い。",
          "correct": true
        },
        {
          "text": "40代から肥大しはじめ、5年で体積が平均約2倍になる。",
          "correct": false
        },
        {
          "text": "前立腺高度肥大のみならず高齢も急速尿閉のリスクとなる。",
          "correct": true
        },
        {
          "text": "治療に用いられるα1受容体遮断薬には前立腺縮小作用がある。",
          "correct": false
        },
        {
          "text": "本邦での前立腺肥大症による死亡率は年間約4.4%である。",
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
      "content": "泌尿器に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "1Lの尿の中に5ml の血があったら肉眼的血尿とわかりうる",
          "correct": true
        },
        {
          "text": "シクロホスファミドや芳香族アミンが原因となる",
          "correct": true
        },
        {
          "text": "尿細胞診の陽性率は低悪性度では50%で抗悪性度では 90%",
          "correct": false
        },
        {
          "text": "変形赤血球と蛋白尿があれば検査としてまず造影 ct を行う",
          "correct": false
        },
        {
          "text": "血尿において尿路上皮癌が原因のものは全体の(一桁の数字)%である",
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
      "content": "泌尿器手術について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮全摘後の排尿障害は交換神経麻痺による。",
          "correct": false
        },
        {
          "text": "膀胱癌術後の副作用に交感神経障害による射精障害がある",
          "correct": true
        },
        {
          "text": "前立腺摘出後の射精障害にアンドロゲン補充療法を行う。",
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
      "content": "一般に緊急手術の適応とならないもの1つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "70代女、左尿管結石+水腎症、体温 39℃、90/50",
          "correct": false
        },
        {
          "text": "14歳男、精巣捻転、バイタル正常",
          "correct": false
        },
        {
          "text": "50代男、飲酒後膀胱破裂、血尿なし、腹部膨満あり",
          "correct": false
        },
        {
          "text": "20歳男、打撲、右腎鈍的損傷、体温正常、90/50?、腎皮質に 5cm の血腫あり",
          "correct": true
        },
        {
          "text": "中年男、糖尿病、大腿~陰嚢に腫脹発赤、一部捻髪音聴取、黒色化している。体温 37.6°C",
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
      "content": "躁うつ病について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "躁うつ病に薬物療法は無意味である。",
          "correct": false
        },
        {
          "text": "躁うつ病では気分の変動に応じて思考内容に変化が見られる。",
          "correct": true
        },
        {
          "text": "躁うつ病では心気妄想や罪業妄想が見られることがある。",
          "correct": true
        },
        {
          "text": "躁うつ病では気分の変動は心理状態に依存せずに起こることが多い。",
          "correct": true
        },
        {
          "text": "躁うつ病では観念奔逸や誇大妄想が見られる。",
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
      "content": "精神科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "大うつ病のエピソードとして、憂うつな気分と意欲の低下などがある",
          "correct": true
        },
        {
          "text": "うつ病が何年も続いて治らない患者に対して、躁病の可能性は疑わなくてよい",
          "correct": false
        },
        {
          "text": "重度のうつ病には電気けいれん療法を用いることもある",
          "correct": true
        },
        {
          "text": "微小妄想として、罪業妄想、貧困妄想、注妄想がある",
          "correct": false
        },
        {
          "text": "うつ病に対して薬物療法が奏効した場合、直ちに薬をやめる",
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
      "content": "うつ病で出現しうる症状について正しい2つの組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妄想",
          "correct": true
        },
        {
          "text": "早朝覚醒",
          "correct": true
        },
        {
          "text": "観念奔逸",
          "correct": false
        },
        {
          "text": "談話心迫",
          "correct": false
        },
        {
          "text": "易刺激性",
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
      "content": "精神科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "強迫性障害では自分の意思に反する不合理な考えをもったり行動を繰り返したりする",
          "correct": true
        },
        {
          "text": "解離性障害では失行、失歩、けいれん、失声などが見られることはない",
          "correct": false
        },
        {
          "text": "思考制止は統合失調症に特徴的である",
          "correct": true
        },
        {
          "text": "統合失調症では陽性症状だけでなく陰性症状も見られる",
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
      "content": "統合失調症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "幻覚の中で幻視が最多",
          "correct": false
        },
        {
          "text": "薬物療法で不応の場合電気痙攣療法は適用とならない",
          "correct": false
        },
        {
          "text": "抗精神病薬はドパミンD2受容体に作用するものが多い",
          "correct": true
        },
        {
          "text": "一卵性双生児での一致率は50%",
          "correct": true
        },
        {
          "text": "妄想、幻覚は解体症状である",
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
      "content": "精神科の患者さんの言ってる内容とその内容を表す漢字4文字のことばとしてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "「私がどこに行こうとしているかお隣さんが全て知っています」一 思考伝播",
          "correct": true
        },
        {
          "text": "「私にはあなたが何を考えているか手に取る様に分かる」一 思考奪取",
          "correct": false
        },
        {
          "text": "「私はわざと変なことをいったり行ったりしている」一 作為体験",
          "correct": true
        },
        {
          "text": "「ふと気づいたのですけど私は阿弥陀様の生まれ変わりなんです」一 妄想着想",
          "correct": true
        },
        {
          "text": "「すれ違った先生の白衣に土がついてたから明日私は殺されます」一 妄想知覚",
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
      "content": "幻視を伴うものを選べ(3)について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アルコール使用障害",
          "correct": true
        },
        {
          "text": "パニック障害",
          "correct": false
        },
        {
          "text": "双極性障害",
          "correct": true
        },
        {
          "text": "アルツハイマー型認知症",
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
      "content": "アルコール依存症について正しいもの2(3?)つの組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "1日飲酒量で診断される",
          "correct": false
        },
        {
          "text": "離脱症状に対する薬物治療の第一選択は抗精神病薬である",
          "correct": false
        },
        {
          "text": "急に飲酒を中断した際に見られる幻覚は、一般的には幻視である",
          "correct": true
        },
        {
          "text": "長期大量の飲酒により脳萎縮をきたしうる",
          "correct": true
        },
        {
          "text": "離脱痙攣発作に対してはフェニトインが効果的である",
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
      "content": "以下のうち、一般的に見て最も治療的な行為はどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "30代の統合失調症の患者が急性期の幻覚妄想状態後に抑うつ的となったため、十分な抗うつ薬を投与した。",
          "correct": false
        },
        {
          "text": "40代のカタトニアの患者の反応がないため、聞こえていないと思い耳元で大声で呼びかけた。",
          "correct": false
        },
        {
          "text": "20代の双極性障害の患者が「本当の自分になれました！もう大丈夫です」と言うので気分安定薬を終了した。",
          "correct": false
        },
        {
          "text": "10代の神経性やせ症患者の体重が回復したので、「顔色がよくなったね！元気そうだよ」とねぎらった。",
          "correct": false
        },
        {
          "text": "80代の女性が外科入院中にせん妄を発症したため、カレンダーと家族の写真を目に付くところに置いた。",
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
      "content": "自閉スペクトラム症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "知能検査は診断に必須ではない",
          "correct": true
        },
        {
          "text": "健常者との境界が曖昧でスペクトラム様なのが疾患名の由来",
          "correct": true
        },
        {
          "text": "中枢神経刺激薬を用いる",
          "correct": false
        },
        {
          "text": "病気のことについて直接的な説明は避け、曖昧な表現で話す",
          "correct": false
        },
        {
          "text": "適応障害の合併が多い",
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
      "content": "精神科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "高齢者の睡眠障害にベンゾジアゼピン系睡眠導入薬を投与",
          "correct": false
        },
        {
          "text": "糖尿病患者の夜間せん妄にクエチアピンを投与した",
          "correct": true
        },
        {
          "text": "炭酸リチウム投与中の双極性障害者がインフルエンザを罹患したので炭酸リチウムを中止した",
          "correct": true
        },
        {
          "text": "パーキンソン患者の鬱症状に対してセルトラリンを投与した",
          "correct": true
        },
        {
          "text": "アドレナリン投与中の入院患者のせん妄に対してハリペリドールを静脈注射した",
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
      "content": "精神科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "断酒目的の入院は本人の意思がなくてもよい",
          "correct": true
        },
        {
          "text": "認知症は医療保護入院の対象外",
          "correct": false
        },
        {
          "text": "未成年の医療保護入院は両親の一方の承諾があればよい",
          "correct": true
        },
        {
          "text": "医師であれば入院患者の隔離を開始できる",
          "correct": false
        },
        {
          "text": "精神科指定医でなければ精神科患者の身体拘束はできない",
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
      "content": "耳鼻咽喉科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "騒音性難聴はステロイドが効く",
          "correct": false
        },
        {
          "text": "真珠腫性中耳炎は手術で伝音性難聴が治ることがある",
          "correct": true
        },
        {
          "text": "慢性副鼻腔炎はアレルギー、感染、繊毛形態などが関わる",
          "correct": true
        },
        {
          "text": "副甲状腺良性腫瘍は高率に悪性化するものが多い",
          "correct": false
        },
        {
          "text": "耳下腺の多形腺腫は悪性リンパ腫が合併しやすい",
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
      "content": "耳鼻科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性難聴の原因として、突発性難聴、メニエール病、ムンプス難聴が多い。",
          "correct": true
        },
        {
          "text": "慢性副鼻腔炎の治療として、セフェム系抗菌薬の長期投与を行う。",
          "correct": false
        },
        {
          "text": "鼻アレルギーに対して、抗ヒスタミン薬、抗ロイコトリエン薬を用いることが多い。",
          "correct": true
        },
        {
          "text": "MEN1型に甲状腺乳頭癌が合併しやすい。",
          "correct": false
        },
        {
          "text": "原発性副甲状腺機能亢進症の原因として、副甲状腺過形成が最も多い。",
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
      "content": "正しいのを三つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "末梢性めまいではメニエール病と良性発作性頭位めまい症が多い。",
          "correct": true
        },
        {
          "text": "口腔、中咽頭に発生する腫瘍には腺癌が多い。",
          "correct": false
        },
        {
          "text": "副鼻腔に発生する腫瘍としては、悪性黒色腫が多い。",
          "correct": false
        },
        {
          "text": "気管切開では甲状腺の尾側から下気管切開するのが主流である。",
          "correct": true
        },
        {
          "text": "甲状腺濾胞癌が過半数を占める。",
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
      "content": "単独で TIA と判断できる徴候 2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "構音障害",
          "correct": false
        },
        {
          "text": "回転性めまい",
          "correct": false
        },
        {
          "text": "同名性半盲",
          "correct": true
        },
        {
          "text": "閃輝暗点",
          "correct": false
        },
        {
          "text": "一過性黒内障",
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
      "content": "70代男性。不整脈の既往あり。昨夜まで元気だったが、今朝様子がおかしいということで家族が救急要請.した。救急外来で心房細動あり、神経学的所見は、意識清明、構音障害、感覚障害、左上下肢不全麻痺あり。対応としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症時点不明として血栓回収、血栓溶解療法は不可と判断",
          "correct": false
        },
        {
          "text": "脳出血なので頭部 CT のみで MRI は不要でよい",
          "correct": false
        },
        {
          "text": "急性期脳梗塞の血管治療の可能性を考え、脳卒中専門医?にコンサルするべきと思い指導医に報告",
          "correct": true
        },
        {
          "text": "緊急で頭部 MRI 指示に加え flair で撮像",
          "correct": true
        },
        {
          "text": "血栓溶解療法のセットの血液凝固検査は必要ないと考えた。",
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
      "content": "遺伝性乳癌卵巣癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "卵巣癌と乳癌では卵巣癌の方が発症が早い",
          "correct": false
        },
        {
          "text": "男性では前立腺癌のリスクとなる",
          "correct": true
        },
        {
          "text": "BRCA 1/BRCA2がともに陰性のこともある",
          "correct": true
        },
        {
          "text": "予防的卵巣卵管切除は乳癌の発生リスクも下げる。",
          "correct": true
        },
        {
          "text": "BRCA1はトリプルネガティブに多い。",
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
      "content": "麻酔関連について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児にはデスフルランが適している。",
          "correct": false
        },
        {
          "text": "肥満患者にはPEEP高めにした。",
          "correct": true
        },
        {
          "text": "膝関節置換を大腿神経ブロック単体で行った。",
          "correct": true
        },
        {
          "text": "妊婦の硬膜外麻酔の量を正常人より減らした。",
          "correct": true
        },
        {
          "text": "術中のアレルギーで多いのは抗菌薬と筋弛緩薬である。",
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
      "content": "麻酔薬について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "デスフルランは気道過敏性がある",
          "correct": true
        },
        {
          "text": "レミマゾラムはフルマゼニルで拮抗される",
          "correct": true
        },
        {
          "text": "プロポフォールは小児に使用できる",
          "correct": true
        },
        {
          "text": "オンダンセトロンには術後の嘔吐抑制作用はない",
          "correct": false
        },
        {
          "text": "レミフェンタニルは腎障害患者でも作用は遷延しない",
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
      "content": "麻酔関連薬剤に関する以下の記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "吸入麻酔薬セボフルランは気道刺激性が小さいため小児の全身麻酔導入に適している。",
          "correct": true
        },
        {
          "text": "静脈麻酔薬プロポフォールで麻酔を維持すると吸入麻酔薬で維持した場合より悪心嘔吐をきたしやすい。",
          "correct": false
        },
        {
          "text": "局所麻酔薬は炎症部位ではその効果が増強する。",
          "correct": false
        },
        {
          "text": "術中投与したフェンタニルが過量であった場合はナロキソンでの拮抗を考慮する。",
          "correct": true
        },
        {
          "text": "手術室で発生するアナフィラキシーショックの原因薬剤は抗菌薬と筋弛緩薬が多い。",
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
      "content": "麻酔薬の副作用に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "デスフルランは気道刺激性が少なく小児に良い",
          "correct": false
        },
        {
          "text": "術中に静脈麻酔のプロポフォールを多く用いると吸入麻酔薬より悪心嘔吐の可能性高い",
          "correct": false
        },
        {
          "text": "リドカインにエピネフリンを添加すると作用持続時間が遷延する",
          "correct": true
        },
        {
          "text": "フェンタニルの拮抗薬にナロキソンを用いる",
          "correct": true
        },
        {
          "text": "ロクロニウム使いすぎるとスガマデスク使っても再クラレ化が起こる。",
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
      "content": "次のうち正しい選択肢の組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "レミフェンタニルは重度の肝機能障害では作用が遷延する",
          "correct": false
        },
        {
          "text": "スガマデクスはロクロニウムに特異的に結合する",
          "correct": true
        },
        {
          "text": "ナロキソンはオピオイドの呼吸抑制に拮抗する",
          "correct": true
        },
        {
          "text": "デスフルランの血液/ガス分配係数は亜酸化窒素と同程度である",
          "correct": false
        },
        {
          "text": "フルマゼニルはミダゾラムに対しては無効である",
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
      "content": "麻酔関連について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "トランスデューザーを元の位置より下げると血圧は実際よりも低めに出る。",
          "correct": false
        },
        {
          "text": "腹腔鏡で突然呼吸二酸化炭素が上昇したので皮下気腫を疑った。",
          "correct": true
        },
        {
          "text": "麻酔導入により皮質脳波で高振幅速波となる。",
          "correct": false
        },
        {
          "text": "中心静脈カテーテル先端が右心室から肺動脈進んだ脈の圧波形変化は拡張気圧の低下である。",
          "correct": false
        },
        {
          "text": "肺塞栓が起こると呼吸二酸化炭素濃度は急激に低下する。",
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
      "content": "手術中の患者モニタリングに関する以下の記述のうちについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "観血的動脈圧の測定には尺骨動脈を用いることが多い。",
          "correct": false
        },
        {
          "text": "肺動脈カテーテル先端が右心室から肺動脈に進んだ際の圧波形変化は拡張期圧の低下である。",
          "correct": false
        },
        {
          "text": "肺塞栓症を発症した際、呼気終末二酸化炭素分圧は急激に上昇する。",
          "correct": false
        },
        {
          "text": "全身麻酔中の皮質脳波は覚醒時と比較して高振幅徐波化する。",
          "correct": true
        },
        {
          "text": "心筋虚血の早期発見に最も鋭敏な心電図誘導はV5誘導である。",
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
      "content": "生体モニターと生理学的変化について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "マンシェットきつく占めると血圧高く出る",
          "correct": true
        },
        {
          "text": "トランスデューサーを下げるとかつ圧が下がる",
          "correct": false
        },
        {
          "text": "肺動脈カテーテルを右室から肺動脈へ進めると収縮期においてモニターされる圧が下がる",
          "correct": false
        },
        {
          "text": "肺塞栓では呼気終末 co2も動脈血 co2もすぐ下がる",
          "correct": false
        },
        {
          "text": "麻酔中に低体温にすると脳波平坦化が見られる",
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
      "content": "麻酔科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "トランスデューサーを体の位置より下に下げると血圧は高く表示される。",
          "correct": true
        },
        {
          "text": "腹腔鏡手術の麻酔中に血中CO2が急に上昇した場合は皮下気腫を疑う",
          "correct": true
        },
        {
          "text": "筋弛緩薬の拮抗薬にはフルマゼニルを用いる。",
          "correct": false
        },
        {
          "text": "×選択肢のはず",
          "correct": null
        },
        {
          "text": "左肺手術の際は、左のダブルルーメンチューブを使う。",
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
      "content": "麻酔科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子供には血液/ガス比が小さく導入が速やかであるためデスフルランを使用する。",
          "correct": false
        },
        {
          "text": "肺塞栓症でPaco2が急激に低下する",
          "correct": true
        },
        {
          "text": "腹腔鏡下で、呼気の炭酸濃度が上昇した時は皮下気腫を疑う。",
          "correct": true
        },
        {
          "text": "肺動脈カテーテルは右室から肺動脈に入ると、拡張期圧が低下する。",
          "correct": false
        },
        {
          "text": "トランスデューサーを元の心臓の高さより下に置くと血圧が高く出る",
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
      "content": "麻酔科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "CO中毒は高圧酸素療法ができる病院に搬送する",
          "correct": true
        },
        {
          "text": "プロポフォールはGABA受容体を拮抗する",
          "correct": false
        },
        {
          "text": "手術麻酔薬でよく使われるのはエステル型である",
          "correct": false
        },
        {
          "text": "気道異物は症状がなくても取り除く",
          "correct": true
        },
        {
          "text": "アナフィラキシーになりやすいのは抗菌薬と筋弛緩薬である",
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
      "content": "術後の悪心・嘔吐のリスクとなるものを2つ 1. 女性 2. 喫煙歴 3. 糖尿病 4. プロポフォール 5. 車酔いの既往について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "女性",
          "correct": true
        },
        {
          "text": "喫煙歴",
          "correct": false
        },
        {
          "text": "糖尿病",
          "correct": false
        },
        {
          "text": "プロポフォール",
          "correct": false
        },
        {
          "text": "車酔いの既往",
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
      "content": "麻酔科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アナフィラキシーショックでは抗原が体内に入ってから数時間経って発症する。",
          "correct": false
        },
        {
          "text": "敗血症性ショックでは心拍出量が低下する",
          "correct": false
        },
        {
          "text": "緊張性気胸は閉塞性ショックである",
          "correct": true
        },
        {
          "text": "出血性ショックでは末梢血管抵抗が増加する",
          "correct": true
        },
        {
          "text": "アナフィラキシーでは末梢血管抵抗抵抗が減少する",
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
      "content": "麻酔管理における以下の記述のうち明らかに誤っているものはどれか？について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "帝王切開術を受ける妊婦では非妊婦と比べて脊髄くも膜下麻酔の麻酔域が広がりにくい。",
          "correct": true
        },
        {
          "text": "長時間手術で筋弛緩薬ロクロニウムを大量に使用すると、スガマデクスを投与しても再クラレ化が起こりうる。",
          "correct": true
        },
        {
          "text": "仙骨麻酔は仙骨神経領域の麻酔効果を期待して仙骨裂孔から行う硬膜外麻酔の一方法である。",
          "correct": true
        },
        {
          "text": "TURBTにおいては下肢内転による膀胱穿孔を予防するために大腿神経ブロックを併用する。",
          "correct": false
        },
        {
          "text": "左肺全摘術における分離肺換気では左用のダブルルーメンカテーテルを用いる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "麻酔科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 45,
      "content": "麻酔手技と合併症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "仙骨ブロックとは仙骨裂孔から薬液を注入する脊髄クモ膜下麻酔である。",
          "correct": false
        },
        {
          "text": "術中のアレルギーで多いのは抗菌薬と筋弛緩である。",
          "correct": true
        },
        {
          "text": "turbt の際、外旋で膀胱が下垂しないように閉鎖神経ブロックを行うことがある。",
          "correct": true
        },
        {
          "text": "セボフルランは子宮収縮作用があるので出産後の弛緩出血に対し有効。",
          "correct": false
        },
        {
          "text": "左肺手術の際は、左のダブルルーメンチューブを用いる。",
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
      "content": "帝王切開の麻酔について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "脊髄くも膜下麻酔は頭側に非妊婦よりも伝わりやすい",
          "correct": true
        },
        {
          "text": "十分なマスク換気",
          "correct": true
        },
        {
          "text": "仰臥位低血圧症候群は左方に子宮を移動させる",
          "correct": true
        },
        {
          "text": "非妊婦より挿管困難",
          "correct": true
        },
        {
          "text": "セボフルランは子宮弛緩作用がある",
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
      "content": "麻酔について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊婦は静脈麻酔薬は少量で良い",
          "correct": true
        },
        {
          "text": "全身麻酔できない膝関節置換術は大腿神経ブロックにて行う。",
          "correct": true
        },
        {
          "text": "左肺手術の際は、左のダブルルーメンチューブを使う。",
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
      "content": "次のうち正しい選択肢の組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "喫煙者では気道過敏性が亢進している",
          "correct": true
        },
        {
          "text": "無気肺領域では肺血管抵抗が低下している",
          "correct": false
        },
        {
          "text": "肥満患者では肺コンプライアンスが上昇している",
          "correct": false
        },
        {
          "text": "2~3日の禁煙では酸素運搬能に改善は認められない",
          "correct": true
        },
        {
          "text": "一酸化窒素吸入により肺血管抵抗は低下する",
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
      "content": "麻酔について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "破傷風ワクチンを接種済みのヒトに破傷風ワクチンは不要である。",
          "correct": false
        },
        {
          "text": "炎症部位では麻酔が効きにくい",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "熱傷における輸液投与量の熱傷面積はⅡ度＋Ⅲ度の和で表される。",
          "correct": true
        },
        {
          "text": "熱傷に予防的抗生剤投与は不要である。",
          "correct": true
        },
        {
          "text": "アセトアミノフェン中毒により肝障害を引き起こす。",
          "correct": true
        },
        {
          "text": "CO-Hbの半減期は12hである。",
          "correct": false
        },
        {
          "text": "薬物中毒に対する胃洗浄の適応は8時間以内である。",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "無脈VT、VFへの電気除細動において同期は不要である。",
          "correct": true
        },
        {
          "text": "減圧症によって血管透過性が亢進する。",
          "correct": true
        },
        {
          "text": "高山病では脳浮腫は生じない。",
          "correct": false
        },
        {
          "text": "トリアージにおいて心肺停止の患者を最優先に取り扱う。",
          "correct": false
        },
        {
          "text": "トリアージにおいて黄色タグは歩行可能を表す。",
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
      "content": "救急診療科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "重傷外傷患者の気道確保時に下顎挙上を行う。",
          "correct": true
        },
        {
          "text": "初回FAST陰性の患者には経時的再検は行わない。",
          "correct": false
        },
        {
          "text": "呼吸状態が不安定の患者にたいしてCTをまず優先する。",
          "correct": false
        },
        {
          "text": "体温は出血因子として重要である。",
          "correct": true
        },
        {
          "text": "気胸は胸腔穿刺によって症状の緩和が得られる。",
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
      "content": "耳鼻科に関する問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "耳鳴りはストレスなどへの対処がqol向上に大切である",
          "correct": true
        },
        {
          "text": "アレルギー性鼻炎に対して複数の内服薬を併用するのは禁忌",
          "correct": false
        },
        {
          "text": "伝導性難聴に対してビタミン剤やステロイドは有効である",
          "correct": false
        },
        {
          "text": "頭頸部癌（上咽頭癌など？）は腺癌が多い",
          "correct": false
        },
        {
          "text": "甲状腺癌で過半数を占めるのは乳頭がんである",
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
      "content": "整形外科に関する問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アキレス腱断裂では、歩行や底屈、背屈はできるが、つま先立ちは出来ないことが多い。",
          "correct": true
        },
        {
          "text": "高齢者の椎骨骨折を疑ったら受傷時にx線で病変を確認できなくても、経時的にx線を撮る",
          "correct": true
        },
        {
          "text": "足関節付近の骨折で、下腿全体をx線で確認することも場合によってはある",
          "correct": true
        },
        {
          "text": "骨幹端部（海綿骨）骨折より骨幹部（皮質骨）骨折のほうが治りが早い",
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
      "content": "泌尿器科に関する問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腎細胞がんの殆どは集合管から発生する",
          "correct": false
        },
        {
          "text": "転移のある腎細胞がんではシスプラチンを中心とした化学療法が第一選択である",
          "correct": false
        },
        {
          "text": "小さい腎細胞がんでは部分切除と全摘で予後は変わらない。",
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
