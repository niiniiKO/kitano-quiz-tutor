import { DepartmentData, makeQuestionId } from "@/types/quiz";

const baseNaikaData = {
  "department": "内科",
  "total_questions": 135,
  "hospitals": [
    "北野病院"
  ],
  "years": [
    2019,
    2021,
    2022,
    2023,
    2024
  ],
  "questions": [
    {
      "question_number": 15,
      "content": "抗体とその疾患の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗Mi-2抗体 - 皮膚筋炎",
          "correct": true
        },
        {
          "text": "抗ARS抗体 - 間質性肺炎",
          "correct": true
        },
        {
          "text": "抗SS-A抗体 - 新生児ループス",
          "correct": true
        },
        {
          "text": "抗CCP抗体 - リウマチ性多発筋痛症",
          "correct": false
        },
        {
          "text": "抗MDA5抗体 - 多発性筋炎",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "リウマチ膠原病内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 15,
      "content": "正しい記載について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "全身性エリテマトーデスの診断基準において抗核抗体は80倍以上が前提となっている。",
          "correct": true
        },
        {
          "text": "高安動脈炎は大動脈・大動脈からの1次分枝の両方あるいはどちらかが病変である。",
          "correct": true
        },
        {
          "text": "皮膚筋炎は筋症状がないと診断できない。",
          "correct": false
        },
        {
          "text": "シェーグレン症候群はSS-A抗体かSS-B抗体のどちらかが陽性でないと診断できない。",
          "correct": false
        },
        {
          "text": "MCTDはU1-RNP抗体が陽性でないと診断できない。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "リウマチ内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 15,
      "content": "正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽腫症 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 肺高血圧",
          "correct": true
        },
        {
          "text": "ベーチェット 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル 血球貪食症候群",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "リウマチ膠原病内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 15,
      "content": "リウマチ膠原病内科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽腫症 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 肺高血圧",
          "correct": true
        },
        {
          "text": "ベーチェット病 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル病 血球貪食症候群",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "リウマチ膠原病内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 16,
      "content": "疾患と症状の組み合わせとしてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "再発性多発軟骨炎 - ぶどう膜炎",
          "correct": true
        },
        {
          "text": "成人Still病 - ソーセージ様手指",
          "correct": false
        },
        {
          "text": "抗リン脂質抗体症候群 - 肺動脈性肺高血圧症",
          "correct": true
        },
        {
          "text": "MDA5陽性多発性筋炎 - 急速進行性糸球体腎炎",
          "correct": false
        },
        {
          "text": "全身性強皮症 - 偽性腸閉塞",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "リウマチ内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 15,
      "content": "膠原病で正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "関節リウマチ - 背部痛",
          "correct": false
        },
        {
          "text": "強直性脊椎炎 - ぶどう膜炎",
          "correct": true
        },
        {
          "text": "ベーチェット病 - ぶどう膜炎",
          "correct": true
        },
        {
          "text": "RS3PE症候群 - 悪性腫瘍",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "膠原病内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 34,
      "content": "SLEの疾患活動性の指標2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗 dsDNA抗体",
          "correct": true
        },
        {
          "text": "補体価",
          "correct": true
        },
        {
          "text": "CPR",
          "correct": false
        },
        {
          "text": "抗sm 抗体",
          "correct": false
        },
        {
          "text": "血清アミロイドA",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "リウマチ膠原病内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 16,
      "content": "脊椎関節炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "網状皮斑",
          "correct": false
        },
        {
          "text": "HLA-B51 が陽性",
          "correct": false
        },
        {
          "text": "1か月以内の尿道炎",
          "correct": true
        },
        {
          "text": "手指腫脹",
          "correct": true
        },
        {
          "text": "運動で増悪",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "リウマチ膠原病内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 16,
      "content": "組み合わせとしてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "高安動脈炎 AR",
          "correct": true
        },
        {
          "text": "EGPA IL6 陽性",
          "correct": false
        },
        {
          "text": "MPA 糸球体に補体沈着",
          "correct": true
        },
        {
          "text": "PAN 顎跛行",
          "correct": false
        },
        {
          "text": "クリオグロブリン C肝",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "リウマチ膠原病内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 16,
      "content": "リウマチ膠原病疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "IgG4関連疾患の診断に高IgG4血症が必須である。",
          "correct": false
        },
        {
          "text": "RNP1陰性のMCTDもある。",
          "correct": false
        },
        {
          "text": "強直性脊椎炎の診断に仙腸関節画像が重要である。",
          "correct": true
        },
        {
          "text": "SLEの治療でヒドロキシクロロキン投与を考慮する。",
          "correct": true
        },
        {
          "text": "妊婦の抗リン脂質抗体症候群にワルファリンを使用する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "リウマチ膠原病内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 15,
      "content": "リウマチ疾患3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "Raynaud 現象は白→赤→紫が典型例である",
          "correct": false
        },
        {
          "text": "成人still、皮膚筋炎は kobner 現象が見られる",
          "correct": true
        },
        {
          "text": "アスピリン喘息に COX2 選択的阻害薬が有用",
          "correct": true
        },
        {
          "text": "PMR にはステロイド大量を考慮する",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "リウマチ膠原病内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 16,
      "content": "副腎皮質ステロイドについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "副作用に顎骨壊死がある。",
          "correct": true
        },
        {
          "text": "妊産婦はデカドロンよりプレドニゾロンが良い",
          "correct": true
        },
        {
          "text": "アスピリン喘息にはリン酸エステルが良い",
          "correct": false
        },
        {
          "text": "投与で、末梢リンパ球が増加する。",
          "correct": false
        },
        {
          "text": "ステロイド大量とは、0.1/体重/日である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "リウマチ膠原病内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 16,
      "content": "膠原病関連疾患について正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "神経型ベーチェット病でシクロスポリンを考慮する。",
          "correct": true
        },
        {
          "text": "多臓器障害のある顕微鏡的多発血管炎でリツキシマブを考慮する。",
          "correct": true
        },
        {
          "text": "家族性地中海熱でコルヒチンを考慮する。",
          "correct": true
        },
        {
          "text": "強皮症腎クリーゼで大量ステロイド投与を考慮する。",
          "correct": false
        },
        {
          "text": "関節リウマチの環軸椎亜脱臼では後屈を避ける。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "膠原病内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 20,
      "content": "32歳男性。約3ヶ月前から口渇、多飲、夜間尿を自覚するようになり、近医を受診し、随時血糖457mg/dL、HbA1c 12%を認めて紹介受診、精査加療のため入院となった。尿ケトン体(3+)、3ヶ月で体重が10kg減少した。この患者の検査、治療としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "SGLT2阻害薬での治療を開始する。",
          "correct": false
        },
        {
          "text": "単剤では低血糖を起こしにくいGLP-1作動薬が治療の中心である。",
          "correct": false
        },
        {
          "text": "インスリンでの治療を開始する。",
          "correct": true
        },
        {
          "text": "抗IA-2抗体を調べることは成因把握に有用である。",
          "correct": true
        },
        {
          "text": "抗ミトコンドリア抗体を調べることが病態の把握に有用である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 20,
      "content": "45歳、4日前から口渇、多飲、多尿、pH7.19 アシドーシス、BE-10、尿ケトン陽性。血糖値 400mg/dL、HbA1c6.9%貧血なし。血中c ペプチドほぼ無し。正しいものの組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠中は発症しないことが分かっている。",
          "correct": false
        },
        {
          "text": "自己抗体陽性のことが多い。",
          "correct": true
        },
        {
          "text": "膵外分泌酵素が高値になること多い。",
          "correct": false
        },
        {
          "text": "血清カリウムの値に注意しながら治療する。",
          "correct": true
        },
        {
          "text": "GLP1 受容体作動薬は注射の方が内服より効く。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 20,
      "content": "膵体尾部癌に対する膵全摘後について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "インスリン非依存状態と考える。",
          "correct": false
        },
        {
          "text": "1型糖尿病患者のインスリン管理より単位を増やす。",
          "correct": false
        },
        {
          "text": "2型と比べて血糖変化が激しい。",
          "correct": true
        },
        {
          "text": "Cペプチドは検出感度以下である。",
          "correct": true
        },
        {
          "text": "GIP、GLP-1は低値を示す。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 19,
      "content": "2型糖尿病で経口血糖降下薬使用している患者。4日前から熱出してご飯食べられず。受診前にぐったりしているのを発見。血糖 900越、ケトン(+-)。何するか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "インスリン静注",
          "correct": true
        },
        {
          "text": "生理食塩水",
          "correct": true
        },
        {
          "text": "ループ利尿薬",
          "correct": false
        },
        {
          "text": "炭酸水素ナトリウム",
          "correct": false
        },
        {
          "text": "抗菌薬静注",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "糖尿病内分泌内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 20,
      "content": "血糖値高くてHbA1cが7台の人が胸痛で運ばれてきて心筋梗塞でしたみたいな人。このときはじめて糖尿病と診断された この人の糖尿病の診療で最初に調べるべきこと2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心臓や脳梗塞?による突然死の家族歴",
          "correct": true
        },
        {
          "text": "運動習慣が若いうちからあったかどうか聞く。",
          "correct": true
        },
        {
          "text": "今までの他院で指摘されたことや血液検査",
          "correct": true
        },
        {
          "text": "眼底検査や尿検査",
          "correct": true
        },
        {
          "text": "ABI や頸動脈エコー",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "糖尿病・内分泌内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 20,
      "content": "47歳男性、30代から糖尿病、食事療法、運動療法から始めた。その後、薬物療法を開始し、40歳からインスリン開始、でもコントロール不良。考えられる背景疾患は?について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "先端巨大症",
          "correct": true
        },
        {
          "text": "尿崩症",
          "correct": false
        },
        {
          "text": "甲状腺機能低下症",
          "correct": false
        },
        {
          "text": "原発性アルドステロン症",
          "correct": false
        },
        {
          "text": "クッシング症候群",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "内分泌内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 20,
      "content": "耐糖能異常&高血圧指摘されて受診。座そう、中心性肥満、あとなんか。する検査。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "TmMIBI シンチグラフィ",
          "correct": false
        },
        {
          "text": "腹部CT",
          "correct": true
        },
        {
          "text": "デキサメタゾン抑制試験",
          "correct": true
        },
        {
          "text": "CRH 負荷試験",
          "correct": true
        },
        {
          "text": "TRH 負荷試験",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "糖尿病内分泌内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 19,
      "content": "若年女性、甲状腺の自発痛、圧痛、腫大、fT4 高値、TSH 低値、赤沈亢進。疼痛部に一致した低エコーを認める。正しいもの3つの組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "チアマゾール(抗甲状腺薬)が効く。",
          "correct": false
        },
        {
          "text": "ステロイド使うこともある。",
          "correct": true
        },
        {
          "text": "血中サイログロブリンが高値になる。",
          "correct": true
        },
        {
          "text": "動悸にβブロッカー使うこともある。",
          "correct": true
        },
        {
          "text": "シンチで取り込みがみられる。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 19,
      "content": "肺がんでペンブロリズマブ使ってる人 高K低Naになりましたについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "白血球分画が診断に有用",
          "correct": true
        },
        {
          "text": "シンチで甲状腺に核腫があったら甲状腺ホルモン補充",
          "correct": false
        },
        {
          "text": "カルシウムが高いなら Ca 受容体作動薬が有効",
          "correct": false
        },
        {
          "text": "CRH 負荷が診断に有用",
          "correct": true
        },
        {
          "text": "ACTH とコルチゾール低値があったら副腎皮質ホルモンを補充",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "糖尿病・内分泌内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 19,
      "content": "74歳女性。半年くらいまえから腰背部痛をみとめていたが、健診の問診などからも要精査と判断されて受診した。特記すべき既往歴なし。50歳台時に閉経。脊椎エックス線検査で椎体圧迫骨折像をみとめた。DXAによる骨密度検査でYAM値73%であった。スクリーニング検査では内分泌疾患を疑う所見は認めていない。本疾患について、正しい記載について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "原発性骨粗鬆症と診断して薬物治療をはじめる。",
          "correct": true
        },
        {
          "text": "治療薬剤を検討するにあたり歯科所見は重要である。",
          "correct": true
        },
        {
          "text": "副甲状腺機能亢進症は骨粗鬆症をきたしやすい。",
          "correct": true
        },
        {
          "text": "サブクリニカルクッシング症候群では骨粗鬆症をきたすことはすくない。",
          "correct": false
        },
        {
          "text": "骨代謝マーカーは骨粗鬆症薬物治療による影響を受けない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 19,
      "content": "50代女性、検診でCa12.4となり、受診した。再検査でCa12.7であった。時折血尿あった。口渇、多飲はない。IPTH高値であった。FeCaは3.7%と濃縮能に問題はなかった。検査内容として適切なもの?について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腹部CT",
          "correct": true
        },
        {
          "text": "骨密度",
          "correct": true
        },
        {
          "text": "IMIBI",
          "correct": true
        },
        {
          "text": "Ellsworth-Howard試験",
          "correct": false
        },
        {
          "text": "Ca負荷試験",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "内分泌内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 19,
      "content": "先端巨大症に対する検査および治療の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "バソプレシン負荷",
          "correct": false
        },
        {
          "text": "下垂体mri",
          "correct": true
        },
        {
          "text": "経蝶骨洞手術",
          "correct": true
        },
        {
          "text": "ソマトスタチン製剤",
          "correct": true
        },
        {
          "text": "131アドステロールシンチ",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 9,
      "content": "肺癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "粘液性癌により気管支瘻をきたすことがある。",
          "correct": true
        },
        {
          "text": "分子標的薬の副作用での間質性肺炎は欧米より日本に少ない。",
          "correct": false
        },
        {
          "text": "再発性大細胞癌の化学療法は、非小細胞肺癌に準ずる。",
          "correct": true
        },
        {
          "text": "気腫性肺線維症には高率に肺癌を合併する。",
          "correct": true
        },
        {
          "text": "免疫チェックポイント阻害薬で大腸炎を起こす。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "呼吸器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 8,
      "content": "肺がんの治療に関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "非小細胞肺癌の術後は補助化学療法を行わない",
          "correct": false
        },
        {
          "text": "PS不良の非小細胞性肺がんは殺細胞性抗がん剤を使えない",
          "correct": false
        },
        {
          "text": "PS不良の非小細胞性肺がんはEGFR-TKIの適応とならない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 9,
      "content": "88歳おばあちゃん、主訴腰痛、ps3 肺癌で肝転移、骨転移あり。やる治療2個について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "緩和",
          "correct": true
        },
        {
          "text": "骨に放射線",
          "correct": true
        },
        {
          "text": "ドキタキセル単剤",
          "correct": false
        },
        {
          "text": "なんとか(知らない化学療法？の薬)単剤",
          "correct": false
        },
        {
          "text": "免疫チェックポイント阻害",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 8,
      "content": "肺細胞癌の治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PD1 は肺癌細胞上にある",
          "correct": false
        },
        {
          "text": "CTLA4 は CD4+陽性T細胞に多く発현する",
          "correct": true
        },
        {
          "text": "抗PDL1抗体+抗CTLA4抗体の効果は PDL1 発現率と無関係",
          "correct": true
        },
        {
          "text": "免疫チェックポイント阻害薬は殺細胞性抗癌剤と併用しない",
          "correct": false
        },
        {
          "text": "分子標的薬と併用で効果が得られる",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 8,
      "content": "不明な問題文について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "悪性リンパ腫では肺門縦隔リンパ節には転移するが、肺には転移しない",
          "correct": false
        },
        {
          "text": "胸腺腫は側方X線でわかる",
          "correct": true
        },
        {
          "text": "経食道穿刺細胞診で縦隔リンパ節生検を行う",
          "correct": true
        },
        {
          "text": "肺癌ではニボルマブを初期使用する",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 9,
      "content": "64歳女性。息切れと咳を主訴に来院した。CT所見はcrazy-paving patternを示しており肺胞洗浄液は白濁しており米のとぎ汁様であった。この疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "画像所見の割に症状が強いことが多い",
          "correct": false
        },
        {
          "text": "5年生存率20-30%と予後不良の疾患である",
          "correct": false
        },
        {
          "text": "抗GM-CSF抗体陽性であることが多い。",
          "correct": true
        },
        {
          "text": "全肺洗浄を行うこともある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 9,
      "content": "66歳女性、KL6 高、夏に呼吸やばなる、両側肺底部に粒状影、原因として考えられるものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "鳥関連過敏性肺炎",
          "correct": true
        },
        {
          "text": "塗装工肺",
          "correct": false
        },
        {
          "text": "夏型過敏性肺炎",
          "correct": true
        },
        {
          "text": "空調肺",
          "correct": true
        },
        {
          "text": "農夫肺",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 7,
      "content": "間質性肺炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特発性器質性肺炎ではステロイドきく",
          "correct": true
        },
        {
          "text": "関節リウマチでは UIP NSIP IPF などみられる",
          "correct": true
        },
        {
          "text": "夏型過敏性肺炎はアスペルギルス",
          "correct": false
        },
        {
          "text": "慢性間質性肺炎では蜂窩肺がない",
          "correct": false
        },
        {
          "text": "抗 ARS 抗体陽性ではしばしば間質性肺炎を合併する",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 8,
      "content": "肺MACについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "治療にはイソニアジドを使用する。",
          "correct": false
        },
        {
          "text": "M. kansasiiは非喫煙者や女性に好発する。",
          "correct": false
        },
        {
          "text": "本邦での罹患率は結核より高い。",
          "correct": true
        },
        {
          "text": "M. abscessus感染は難治性である。",
          "correct": true
        },
        {
          "text": "補助診断としてキャピリアMACは有用である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "呼吸器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 8,
      "content": "MAC についてただしいもの3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "GlpIgM抗体を補助診断につかう",
          "correct": true
        },
        {
          "text": "クラリスロマイシン単剤は耐性で良くない",
          "correct": true
        },
        {
          "text": "中高年女性の繊維空洞型が増加",
          "correct": true
        },
        {
          "text": "一回の喀痰培養だけで確定診断できる",
          "correct": false
        },
        {
          "text": "薬物コントロール不良で空洞を伴うものは外科切除",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 7,
      "content": "喘息管理について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "軽症では長時間作用型β2刺激薬(LABA)での管理も可能である。",
          "correct": false
        },
        {
          "text": "難治例では長時間作用型抗コリン薬(LAMA)も考慮する。",
          "correct": true
        },
        {
          "text": "吸入は管理を改善させる。",
          "correct": true
        },
        {
          "text": "ロイコトリエンは合併する副鼻腔炎にも効果が期待できる。",
          "correct": true
        },
        {
          "text": "軽症〜重症で",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "呼吸器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 7,
      "content": "アレルギーに関して、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特異的IgEは2型アレルギーを反映する",
          "correct": false
        },
        {
          "text": "特異的IgGは3型アレルギーを反映する",
          "correct": true
        },
        {
          "text": "小児にもエピペンの適応がある",
          "correct": true
        },
        {
          "text": "総IgE値が低値であれば、特異的IgE値も低値であるとみなしてよい。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 9,
      "content": "COPD2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "DLCO が上がる",
          "correct": false
        },
        {
          "text": "吸気延長",
          "correct": false
        },
        {
          "text": "COPD ではまずステロイド吸入",
          "correct": false
        },
        {
          "text": "PaCO260 こえてたら酸素投与に気をつける",
          "correct": true
        },
        {
          "text": "CO2 ナルコーシスでは非侵襲性陽圧換気",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 7,
      "content": "コロナについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心筋症の後遺症がある",
          "correct": true
        },
        {
          "text": "拡大してない地域で無症候性陽性でも偽陽性考える",
          "correct": true
        },
        {
          "text": "インフルより後遺症多い",
          "correct": true
        },
        {
          "text": "軽症でもステロイド投与が効果的",
          "correct": false
        },
        {
          "text": "接触感染",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 7,
      "content": "呼吸器について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヘモクロマトーシスでは偽チアノーゼになる",
          "correct": false
        },
        {
          "text": "COPD ではばち指が特徴的。",
          "correct": false
        },
        {
          "text": "肺癌では右反回神経麻痺が多い",
          "correct": false
        },
        {
          "text": "ビオー呼吸は頻呼吸の後に10-30秒の無呼吸",
          "correct": true
        },
        {
          "text": "過敏性肺炎では聴診で squawk が末梢気道病変を反映",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 23,
      "content": "肺良性腫瘍について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "最も頻度が高いものは過誤腫である",
          "correct": true
        },
        {
          "text": "carcinomaは良性腫瘍に分類される",
          "correct": false
        },
        {
          "text": "X線にてポップコーン様を呈することがある",
          "correct": true
        },
        {
          "text": "肺炎症状で始まることがある",
          "correct": true
        },
        {
          "text": "過誤腫は増大しない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 4,
      "content": "安定労作時狭心症診断に有用な検査はどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "トロポニンT測定",
          "correct": false
        },
        {
          "text": "心エコー",
          "correct": true
        },
        {
          "text": "冠動脈造影CT",
          "correct": true
        },
        {
          "text": "薬剤負荷心筋シンチ",
          "correct": true
        },
        {
          "text": "運動負荷心電図",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 6,
      "content": "安定労作性狭心症の診断に有用な検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "運動時心電図",
          "correct": true
        },
        {
          "text": "心エコー",
          "correct": true
        },
        {
          "text": "血中トロポニン測定",
          "correct": false
        },
        {
          "text": "薬剤負荷心筋シンチグラフィ",
          "correct": true
        },
        {
          "text": "冠動脈造影CT",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 6,
      "content": "別紙に心電図、V2,3,4,5 あたりがst上昇。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PCI 決めるために冠動脈造影をする。",
          "correct": true
        },
        {
          "text": "血栓溶解と PCI 予後に差がない",
          "correct": false
        },
        {
          "text": "梗塞部の、支配血管は左回旋枝。",
          "correct": false
        },
        {
          "text": "エコーで側壁にも運動異常",
          "correct": true
        },
        {
          "text": "アスピリン200mg 噛み砕く",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 5,
      "content": "PCI後の二次予防について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": false
        },
        {
          "text": "Ca拮抗薬",
          "correct": false
        },
        {
          "text": "スタチン",
          "correct": true
        },
        {
          "text": "ACE阻害薬",
          "correct": true
        },
        {
          "text": "アスピリン",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "循環器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 4,
      "content": "PCI後、予後を改善しないものはどれか？2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": true
        },
        {
          "text": "SGLT",
          "correct": false
        },
        {
          "text": "ARNI",
          "correct": false
        },
        {
          "text": "スタチン",
          "correct": false
        },
        {
          "text": "トルバプタン",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 4,
      "content": "急性心筋梗塞の再灌流療法後に有効な薬として適切なものを三つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "スタチン",
          "correct": true
        },
        {
          "text": "ACE阻害薬",
          "correct": true
        },
        {
          "text": "抗血小板薬",
          "correct": true
        },
        {
          "text": "硝酸薬",
          "correct": false
        },
        {
          "text": "カルシウム拮抗薬",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 6,
      "content": "胸痛患者。が与えられて 2,3,aVf の ST 上昇の人について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PCIよりも血栓回収療法の方が成績が良い",
          "correct": false
        },
        {
          "text": "エコーで左室側壁運動の低下が認められる",
          "correct": false
        },
        {
          "text": "右心不全を合併しうる",
          "correct": true
        },
        {
          "text": "アスピリン 200mg を噛み砕いて内服する",
          "correct": true
        },
        {
          "text": "PCI後、スタチンは予後改善によい",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 27,
      "content": "70歳女性。2日前に2時間ほど持続する胸痛を自覚していたが我慢していた。本日○○のため来院した。来院時血圧70/35mmHg、心拍数110/分、呼吸数30/分、Sp02 88%。胸部X線にて心拡大、肺水腫、聴診にてLevine III/IV度の全収縮期雑音を認めた。心電図ではII, III, aVFにST上昇と異常q波、冠動脈造影検査にて#1に狭窄を認めた。治療として不適切なものを1つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "緊急開心術",
          "correct": false
        },
        {
          "text": "冠動脈造影CT",
          "correct": true
        },
        {
          "text": "心臓超音波検査",
          "correct": false
        },
        {
          "text": "経皮的冠動脈形成術",
          "correct": false
        },
        {
          "text": "カテコールアミン",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 4,
      "content": "左室駆出率が保たれた拡張機能障害による心不全の原因となるのについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心筋梗塞",
          "correct": true
        },
        {
          "text": "拡張型心筋",
          "correct": false
        },
        {
          "text": "肥大型心筋",
          "correct": true
        },
        {
          "text": "高血圧性左室肥大",
          "correct": true
        },
        {
          "text": "加齢",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "循環器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 5,
      "content": "HFpEFをきたすものはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心筋梗塞",
          "correct": true
        },
        {
          "text": "拡張型心筋症",
          "correct": false
        },
        {
          "text": "肥大型心筋症",
          "correct": true
        },
        {
          "text": "高血圧性心疾患",
          "correct": true
        },
        {
          "text": "加齢",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 5,
      "content": "症例問題:フォレスター2群の治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "輸液",
          "correct": false
        },
        {
          "text": "β遮断薬",
          "correct": false
        },
        {
          "text": "ドブタミン",
          "correct": false
        },
        {
          "text": "ループ利尿薬",
          "correct": true
        },
        {
          "text": "硝酸薬",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 5,
      "content": "急性心不全の人 心係数 1.8,肺動脈楔入圧 30mmHg で行うべき対応としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ドブタミン投与",
          "correct": true
        },
        {
          "text": "B遮断薬投与",
          "correct": false
        },
        {
          "text": "生理食塩水輸液",
          "correct": false
        },
        {
          "text": "利尿薬投与",
          "correct": true
        },
        {
          "text": "硝酸薬投与",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 4,
      "content": "うっ血性心不全で肺うっ血の評価に役立つものを3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "BNP",
          "correct": true
        },
        {
          "text": "心電図",
          "correct": false
        },
        {
          "text": "心筋シンチ",
          "correct": false
        },
        {
          "text": "胸部X線",
          "correct": true
        },
        {
          "text": "心エコー",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "循環器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 6,
      "content": "弁膜症既往。3ヶ月前に抜歯。熱発ありで近医で内服。解熱得られるも、数日後再び熱発。入院前には解熱が得られていたが、エコーで5mmの疣贅あり。管理について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "投与中の抗菌薬をそのまま継続する。",
          "correct": false
        },
        {
          "text": "疣贅の大きさを考慮すると手術適応である。",
          "correct": false
        },
        {
          "text": "心不全が悪化したら早期に手術する。",
          "correct": true
        },
        {
          "text": "48時間服薬を中止して血液培養を行う。",
          "correct": true
        },
        {
          "text": "黄色ブドウ球菌によるものは比較的予後がよい。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "循環器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 4,
      "content": "心臓弁膜症の治療後で一年ごとの定期フォローされている方。三ヶ月前に抜歯。二ヶ月前から微熱がある時がある。抗菌薬投与で軽快していた。心臓エコー検査で 4mm の疣贅とMRと中等度のMVP を認める。今後行う処置について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "疣贅の大きさを考慮すると手術適応である",
          "correct": false
        },
        {
          "text": "投与中の抗菌薬を継続する",
          "correct": false
        },
        {
          "text": "黄色ブドウ球菌によるものは比較的予後が良い",
          "correct": false
        },
        {
          "text": "心不全が悪化したら早期に手術する",
          "correct": true
        },
        {
          "text": "48 時間服薬を中止して血液培養をおこなう。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 6,
      "content": "合併症のない初発の高血圧患者に対し、薬物の第一選択として適切でないものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アンジオテンシン受容体ネプリライシン阻害薬",
          "correct": true
        },
        {
          "text": "α遮断薬",
          "correct": true
        },
        {
          "text": "β遮断薬",
          "correct": true
        },
        {
          "text": "降圧利尿薬",
          "correct": false
        },
        {
          "text": "カルシウム拮抗薬",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "循環器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 5,
      "content": "既往歴のない,高血圧患者に対する初回治療として推奨されない薬剤を二つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "カルシウム拮抗薬",
          "correct": false
        },
        {
          "text": "α遮断薬",
          "correct": true
        },
        {
          "text": "β遮断薬",
          "correct": true
        },
        {
          "text": "降圧利尿薬",
          "correct": false
        },
        {
          "text": "ACE阻害薬",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 6,
      "content": "ペースメーカ植え込み適応となるもの3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "洞不全症候群",
          "correct": true
        },
        {
          "text": "徐脈性心房細動",
          "correct": true
        },
        {
          "text": "心室頻拍",
          "correct": false
        },
        {
          "text": "2度房室ブロック(ウェンケバッハ)",
          "correct": false
        },
        {
          "text": "3度房室ブロック",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "循環器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 5,
      "content": "50代男性。早朝に眼前暗黒感あり来院。運動負荷心電図所見なし。Holter 心電図の波形提示治療を2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PCI",
          "correct": false
        },
        {
          "text": "βブロッカー",
          "correct": false
        },
        {
          "text": "アスピリン",
          "correct": true
        },
        {
          "text": "長時間作用型硝酸薬",
          "correct": true
        },
        {
          "text": "カルシウム拮抗薬",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "循環器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 1,
      "content": "食道がんに関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アルコールと喫煙は危険因子である。",
          "correct": true
        },
        {
          "text": "頸部食道に好発する。",
          "correct": false
        },
        {
          "text": "本邦においてはほとんどが腺癌である。",
          "correct": false
        },
        {
          "text": "放射線治療への感受性が高い。",
          "correct": true
        },
        {
          "text": "手術前には通常術前化学療法を行う。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "消化器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 1,
      "content": "食道がんのリスク因子3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "男性",
          "correct": true
        },
        {
          "text": "便秘",
          "correct": false
        },
        {
          "text": "気管支喘息",
          "correct": false
        },
        {
          "text": "喫煙",
          "correct": true
        },
        {
          "text": "飲酒",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 2,
      "content": "胃がんのリスク因子3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヘリコバクター・ピロリ感染",
          "correct": true
        },
        {
          "text": "喫煙",
          "correct": true
        },
        {
          "text": "女性",
          "correct": false
        },
        {
          "text": "野菜・果物の摂取",
          "correct": false
        },
        {
          "text": "塩分摂取",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 1,
      "content": "胃全摘術後の合併症を三つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胆石",
          "correct": true
        },
        {
          "text": "貧血",
          "correct": true
        },
        {
          "text": "肥満",
          "correct": false
        },
        {
          "text": "門脈圧亢進",
          "correct": false
        },
        {
          "text": "耐糖能異常",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 3,
      "content": "大腸がんのリスク因子3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肥満",
          "correct": true
        },
        {
          "text": "脂肪・赤肉の高摂取",
          "correct": true
        },
        {
          "text": "男性",
          "correct": true
        },
        {
          "text": "NSAIDs",
          "correct": false
        },
        {
          "text": "運動不足",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 3,
      "content": "膵臓がんに関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "膵管上皮より発生するものが90%以上である。",
          "correct": true
        },
        {
          "text": "60%の患者で膵がんの家族歴がある。",
          "correct": false
        },
        {
          "text": "手術後の再発率は低い。",
          "correct": false
        },
        {
          "text": "進行がんで見つかることが多い。",
          "correct": true
        },
        {
          "text": "KRAS、TP53、SMAD4、CDKN2Aなどの遺伝子変異が見られる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "消化器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 1,
      "content": "膵臓の解剖について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "膵頭部と膵体部の境界の選択肢二つ(上腸間膜動脈の右縁 or 左縁)",
          "correct": true
        },
        {
          "text": "膵体部と膵尾部の境界の選択肢二つ(大動脈の右縁 or 左縁)",
          "correct": true
        },
        {
          "text": "膵頭部と膵体部の境界の選択肢二つ(上腸間膜動脈の右縁 or 左縁)",
          "correct": true
        },
        {
          "text": "膵体部と膵尾部の境界の選択肢二つ(大動脈の右縁 or 左縁)",
          "correct": true
        },
        {
          "text": "膵鉤部は膵頭部に含まれない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "消化器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 2,
      "content": "B型肝炎ウイルスが再燃するのはどのようなときか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ワクチン接種",
          "correct": false
        },
        {
          "text": "骨髄移植",
          "correct": true
        },
        {
          "text": "免疫抑制剤",
          "correct": true
        },
        {
          "text": "化学療法",
          "correct": true
        },
        {
          "text": "核酸アナログ",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 3,
      "content": "B型肝炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "DNA ウイルスである",
          "correct": true
        },
        {
          "text": "セロコンバージョン後の再発例は劇症化しやすい",
          "correct": true
        },
        {
          "text": "HB-c c抗体陽性の患者は HBV-DNAも陽性となる",
          "correct": false
        },
        {
          "text": "既往患者は抗がん剤治療で再活性化しやすい",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "消化器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 2,
      "content": "HCV に関連する疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肝硬変",
          "correct": true
        },
        {
          "text": "肝細胞癌",
          "correct": true
        },
        {
          "text": "クリオグロブリン血症",
          "correct": true
        },
        {
          "text": "クローン",
          "correct": false
        },
        {
          "text": "なにか",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 3,
      "content": "NASH の病理で間違ってるもの一つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "繊維化",
          "correct": false
        },
        {
          "text": "肝細胞の膨化",
          "correct": false
        },
        {
          "text": "ロゼット形成",
          "correct": true
        },
        {
          "text": "肝細胞の脂肪変性",
          "correct": false
        },
        {
          "text": "炎症細胞の浸潤",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 1,
      "content": "ピロリ菌に関連する疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胃十二指腸潰瘍",
          "correct": true
        },
        {
          "text": "食道癌",
          "correct": false
        },
        {
          "text": "itp",
          "correct": true
        },
        {
          "text": "潰瘍性大腸炎",
          "correct": false
        },
        {
          "text": "MALTリンパ腫",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 3,
      "content": "Ebv に関連する疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "中咽頭癌",
          "correct": true
        },
        {
          "text": "伝染性単核症",
          "correct": true
        },
        {
          "text": "胃癌",
          "correct": true
        },
        {
          "text": "血球貪食症候群",
          "correct": true
        },
        {
          "text": "肝臓癌",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 2,
      "content": "胃液分泌を促進するものはどれか？について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ガストリン",
          "correct": true
        },
        {
          "text": "アセチルコリン",
          "correct": true
        },
        {
          "text": "ヒスタミン",
          "correct": true
        },
        {
          "text": "セクレチン",
          "correct": false
        },
        {
          "text": "ソマトスタチン",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "消化器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 1,
      "content": "ガドリニウム造影MRIを実施する際に問題にならないものはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腎障害",
          "correct": false
        },
        {
          "text": "腹水貯留",
          "correct": true
        },
        {
          "text": "肝障害",
          "correct": true
        },
        {
          "text": "血小板減少",
          "correct": true
        },
        {
          "text": "気管支喘息",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 2,
      "content": "腹部診察の際のトラウベ三角のランドマークを三つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "脊椎",
          "correct": false
        },
        {
          "text": "腸骨陵",
          "correct": false
        },
        {
          "text": "左前腋窩線",
          "correct": true
        },
        {
          "text": "左第6肋骨",
          "correct": true
        },
        {
          "text": "左肋骨弓",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 2,
      "content": "虫垂炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "McBurney, Lanz の圧痛や??は体性痛である。",
          "correct": true
        },
        {
          "text": "Rovsing 徴候に関する何か",
          "correct": true
        },
        {
          "text": "Psoas 徴候は炎症が右閉鎖筋に及んだときに陽性となる。",
          "correct": false
        },
        {
          "text": "Rosenstein 徴候は右側臥位で起こる。",
          "correct": false
        },
        {
          "text": "Alvarado Scoreで7点以上なら急性虫垂炎を疑い画像診断を進める",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "消化器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 3,
      "content": "Glisson鞘に含まれるものはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "中心静脈",
          "correct": false
        },
        {
          "text": "胆管",
          "correct": true
        },
        {
          "text": "門脈",
          "correct": true
        },
        {
          "text": "動脈",
          "correct": true
        },
        {
          "text": "肝細胞",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 10,
      "content": "次のうち薬剤性パーキンソン症候群を起こすものはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "バルプロ酸",
          "correct": true
        },
        {
          "text": "スルピリド",
          "correct": true
        },
        {
          "text": "クロピドグレル",
          "correct": false
        },
        {
          "text": "オルメサルタン",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "脳神経内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 12,
      "content": "パーキンソン病で運動症状に先行して見られる症状について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "幻視",
          "correct": false
        },
        {
          "text": "嗅覚低下",
          "correct": true
        },
        {
          "text": "便秘",
          "correct": true
        },
        {
          "text": "起立性低血圧",
          "correct": true
        },
        {
          "text": "頻尿",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 10,
      "content": "パーキンソン病の治療薬について正しいもの一つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "レボドパの半減期は 90~120分",
          "correct": true
        },
        {
          "text": "COMT は中枢でレボドパ分解を抑制",
          "correct": false
        },
        {
          "text": "MAO-B は抹消でレボドパ分解を抑制",
          "correct": false
        },
        {
          "text": "ドパミンアゴニストの副作用として衝動抑制障害、幻覚、複視",
          "correct": true
        },
        {
          "text": "イストラデフィリンはアデノシン A2 受容体刺激薬",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 10,
      "content": "突然死の原因としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多系統萎縮症",
          "correct": true
        },
        {
          "text": "パーキンソン病",
          "correct": false
        },
        {
          "text": "進行性核状性麻痺",
          "correct": false
        },
        {
          "text": "レビー小体型認知症",
          "correct": false
        },
        {
          "text": "大脳皮質基底核症候群",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 10,
      "content": "パーキンソン病の lifetime risk として適当なのはどれか、1つ選択について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "0.02%",
          "correct": false
        },
        {
          "text": "0.1%",
          "correct": false
        },
        {
          "text": "0.6%",
          "correct": false
        },
        {
          "text": "3%",
          "correct": true
        },
        {
          "text": "15%",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "脳神経内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 11,
      "content": "パーキンソン病の非運動症状として適当でないのはどれか、1つ選択について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "嗅覚異常",
          "correct": false
        },
        {
          "text": "うつ病",
          "correct": false
        },
        {
          "text": "眼球上転発作",
          "correct": true
        },
        {
          "text": "REM 睡眠行動異常",
          "correct": false
        },
        {
          "text": "便秘",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "脳神経内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 10,
      "content": "パーキンソン病について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "レビー小体はαシヌクレインからなる。",
          "correct": true
        },
        {
          "text": "黒質にレビー小体が沈着する。",
          "correct": true
        },
        {
          "text": "Meissner神経叢にレビー小体が沈着する。",
          "correct": true
        },
        {
          "text": "Braak仮説とは、病変が嗅球から大脳皮質へ伝播することと口腔から脳幹、大脳へ伝播することである。",
          "correct": true
        },
        {
          "text": "網膜にレビー小体が沈着する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 11,
      "content": "t-PA について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症時刻推定できないものには禁忌",
          "correct": true
        },
        {
          "text": "20日以内の消化管出血には禁忌",
          "correct": true
        },
        {
          "text": "大動脈解離を合併していても場合によっては施行する",
          "correct": false
        },
        {
          "text": "PT-INR>2.0 は禁忌",
          "correct": true
        },
        {
          "text": "補正して血糖が>70 になれば投与して良い",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 12,
      "content": "tpa の禁忌を2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血糖 350",
          "correct": false
        },
        {
          "text": "血小板8万",
          "correct": true
        },
        {
          "text": "ptinr1.5",
          "correct": false
        },
        {
          "text": "血圧 190",
          "correct": true
        },
        {
          "text": "nihss 9点",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 12,
      "content": "t-PA静注の禁忌ではないのはどれか、2つ選択について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血糖補正して、血糖値が 70 mg/dL",
          "correct": true
        },
        {
          "text": "30日以内の消化管出血または尿路出血",
          "correct": false
        },
        {
          "text": "急性膵炎",
          "correct": true
        },
        {
          "text": "PT-INR>1.7",
          "correct": false
        },
        {
          "text": "非外傷性頭蓋内出血",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "脳神経内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 11,
      "content": "tPAについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症から6時間以内なら投与可能である。",
          "correct": false
        },
        {
          "text": "発症時期が不明なら投与は禁忌である。",
          "correct": true
        },
        {
          "text": "血糖値が70ならば投与可能である。",
          "correct": true
        },
        {
          "text": "30日以内の消化管出血は投与可能である。",
          "correct": false
        },
        {
          "text": "PT-INRは2以上で投与禁忌である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 21,
      "content": "80代女性、右半身マヒ、発語障害で搬送、午前中8時まで健常、9時に発症。既往として高血圧、高脂血症、心房細動、血糖値は正常。抗血栓薬は服用していない。sBP195、心拍数80不整。CTでは異常なし、MRI拡散強調で左中大脳動脈栄養領域に高信号、MRAでは左中大脳動脈起始部以降血流なし。まず行うのに適切な対応、処置は?について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血栓回収",
          "correct": true
        },
        {
          "text": "ヘパリン",
          "correct": false
        },
        {
          "text": "降圧",
          "correct": true
        },
        {
          "text": "rt-PA",
          "correct": true
        },
        {
          "text": "家族に病歴聴取",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 11,
      "content": "視神経脊髄炎より多発性硬化症を疑う所見を1つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "延髄最後野病変",
          "correct": false
        },
        {
          "text": "脳室付近の卵円形白質病変",
          "correct": true
        },
        {
          "text": "抗AQP4抗体陽性",
          "correct": false
        },
        {
          "text": "3椎体以上に及ぶ長大病変",
          "correct": false
        },
        {
          "text": "ステロイド難治性の視神経炎",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 12,
      "content": "多発性硬化症で正しいもの2つ 過去問通りについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗AQP4 抗体が陽性となる",
          "correct": false
        },
        {
          "text": "オリゴクローナルバンドが陽性となる",
          "correct": true
        },
        {
          "text": "増悪予防にステロイド",
          "correct": false
        },
        {
          "text": "open ring sign がみられる",
          "correct": true
        },
        {
          "text": "脳室周囲にはみられない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 12,
      "content": "多発性硬化症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗aqp4抗体が陽性となることがある。",
          "correct": false
        },
        {
          "text": "オリゴクローナルバンドが陽性となる。",
          "correct": true
        },
        {
          "text": "造影MRIでopen ring signがみられる。",
          "correct": true
        },
        {
          "text": "ステロイド投与は再発予防に有効である。",
          "correct": false
        },
        {
          "text": "脳室付近の病変はまれである。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 10,
      "content": "劣位半球障害の症候を1つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "失認",
          "correct": true
        },
        {
          "text": "失行",
          "correct": false
        },
        {
          "text": "左右失認",
          "correct": false
        },
        {
          "text": "失語",
          "correct": false
        },
        {
          "text": "着衣失行",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 11,
      "content": "聴覚理解良好、発話スムーズ、復唱ができない、どれでしょうについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "超皮質性運動失語",
          "correct": false
        },
        {
          "text": "Wernike 失語",
          "correct": false
        },
        {
          "text": "Broca 失語",
          "correct": false
        },
        {
          "text": "伝導失語",
          "correct": true
        },
        {
          "text": "純粋語聾",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "神経内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 11,
      "content": "男性に多いのはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ALS",
          "correct": true
        },
        {
          "text": "多発性硬化症",
          "correct": false
        },
        {
          "text": "手根管症候群",
          "correct": false
        },
        {
          "text": "低K性周期性四肢麻痺",
          "correct": true
        },
        {
          "text": "球脊髄性筋萎縮症",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "脳神経内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 12,
      "content": "上肢より下肢優位に症状が出現するのはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "Broca野失語症",
          "correct": false
        },
        {
          "text": "外側線条体動脈閉塞症",
          "correct": false
        },
        {
          "text": "大脳鎌髄膜瘤",
          "correct": true
        },
        {
          "text": "前大脳動脈閉塞症",
          "correct": true
        },
        {
          "text": "Weber症候群",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "脳神経内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 32,
      "content": "てんかんについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "罹患率は1000人に1人である。",
          "correct": true
        },
        {
          "text": "自動車免許は取得できない",
          "correct": false
        },
        {
          "text": "3年以内に症状を落ち着けるのを第一の目標とする。",
          "correct": true
        },
        {
          "text": "間欠期脳波測定法ではほぼ全例で脳波に異常が見られる。",
          "correct": false
        },
        {
          "text": "公費補助がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 18,
      "content": "IgA腎症について正しいものの組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "日本の原発性糸球体腎炎で最多である。",
          "correct": true
        },
        {
          "text": "罹患率に人種差がある。",
          "correct": true
        },
        {
          "text": "IgA糖鎖修飾の異常が原因である。",
          "correct": true
        },
        {
          "text": "治療選択のために病理検査による重症度分類が有用である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "腎臓内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 18,
      "content": "紫斑と腎不全、腹痛を認める人についての問題文。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "igA 腎症の標準治療:ステロイドパルス+扁桃摘出を行う。",
          "correct": true
        },
        {
          "text": "IgA 腎症と病理所見が似る",
          "correct": true
        },
        {
          "text": "成人発症が多い",
          "correct": false
        },
        {
          "text": "皮膚生検の結果によって診断できることがある。",
          "correct": true
        },
        {
          "text": "紫斑腎不全腹痛の3兆は必ず全部揃う",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "腎臓内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 18,
      "content": "半月体形成性糸球体腎炎 1. ステロイドと免疫抑制で治療する 2. 本邦では pr3-ANCA が多い 3. 他の臓器検索する 4. 高齢者に多いについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ステロイドと免疫抑制で治療する",
          "correct": true
        },
        {
          "text": "本邦では pr3-ANCA が多い",
          "correct": false
        },
        {
          "text": "他の臓器検索する",
          "correct": true
        },
        {
          "text": "高齢者に多い",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎臓内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 18,
      "content": "肺症状+腎症状 副流煙を吸いやすい環境にいたスナックのママ。軽度高血圧かつクレアチニン 1.5。CRP5.8。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "両肺野の粒状影",
          "correct": true
        },
        {
          "text": "腎機能が急速に低下する可能性がある",
          "correct": true
        },
        {
          "text": "血尿、蛋白尿陽性",
          "correct": true
        },
        {
          "text": "ステロイドを処方する",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "腎臓内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 17,
      "content": "微小変化群について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "光学顕微鏡で足突起の消失がみられる",
          "correct": false
        },
        {
          "text": "蛋白尿の選択性が高い",
          "correct": true
        },
        {
          "text": "急性腎炎をしばしば発症する",
          "correct": false
        },
        {
          "text": "ステロイド治療が比較的短期間で終わることが多い",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "腎臓内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 17,
      "content": "17歳の男性。健康診断で腎機能低下を指摘された。兄が血液透析中で水晶体異常を指摘されており、腎生検では腎尿細管間質に複数の泡沫細胞および線維化を認めた。本症例について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "a3(V)コラーゲン(V型コラーゲンα3鎖)の異常が多い。",
          "correct": false
        },
        {
          "text": "男性では予後不良のことが多い。",
          "correct": true
        },
        {
          "text": "糸球体基底膜の菲薄化や断裂を認めることが多い。",
          "correct": true
        },
        {
          "text": "難聴を伴うことが多い。",
          "correct": true
        },
        {
          "text": "心筋障害を伴うことが多い。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "腎臓内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 17,
      "content": "糖尿病既往ありで腎機能悪化 eGFR11 とかいろいろ数値書かれてたけど覚えてないです、、 1. 透析のため内シャントする 2. 腎移植には血液型同じが必要 3. 透析導入後でないと腎移植できない 4. 糖尿病なので腹膜透析できない 5. CKD5 期なので腎代替療法検討について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "透析のため内シャントする",
          "correct": true
        },
        {
          "text": "腎移植には血液型同じが必要",
          "correct": false
        },
        {
          "text": "透析導入後でないと腎移植できない",
          "correct": false
        },
        {
          "text": "糖尿病なので腹膜透析できない",
          "correct": false
        },
        {
          "text": "CKD5 期なので腎代替療法検討",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎臓内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 18,
      "content": "70歳台男性。大腸癌に対して、抗癌剤にて治療を続けている。化学療法開始時は腎障害なかったが、最近浮腫と高血圧を指摘された。尿蛋白クレアチニン比4800mg/gCr。血中アルブミン2.5g/dL。血清クレアチニン3.5mg/dL。以下のうちについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性腎障害ではない。",
          "correct": false
        },
        {
          "text": "ネフローゼ症候群である。",
          "correct": true
        },
        {
          "text": "治療薬はVEGF阻害薬である。",
          "correct": true
        },
        {
          "text": "今の化学療法を続けて良い。",
          "correct": false
        },
        {
          "text": "透析を開始する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎臓内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 17,
      "content": "低Na血症を来たす場合の検査の組み合わせをについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "体液量を調べる",
          "correct": true
        },
        {
          "text": "高脂血症がないか調べる",
          "correct": true
        },
        {
          "text": "服薬歴を尋ねる",
          "correct": true
        },
        {
          "text": "尿中電解質測定が有用",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "腎臓内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 18,
      "content": "56歳の男性。5年前から年に数回胸痛を訴えており、最近頻度が増加したため糖尿病のかかりつけ医を受診した。カテーテル検査を試行し冠動脈2枝に狭窄病変を認め、PCIを行った既往がある。LDL-C高値。既往歴に糖尿病と高血圧。右足の第1中足趾節以遠が黒く変色しており疼痛を伴っている。検査値･･･C3 65mg/dL、C4 12 mg/dL、CH50 10mIU/L。この患者で見られるものはどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "C3 65mg/dL、C4 12 mg/dL、CH50 10mIU/L(←問題文に同じ値が記載されていた)",
          "correct": true
        },
        {
          "text": "造影剤パッチテスト陽性",
          "correct": false
        },
        {
          "text": "IgE 620 IU/L",
          "correct": false
        },
        {
          "text": "ASO 430 IU/L",
          "correct": false
        },
        {
          "text": "好酸球 26%",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "腎臓内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 17,
      "content": "高血圧あり。倦怠感。腎不全 クレアチニン高。肺水腫を認める。必要な検査を選べ。 1. 心エコー 2. 下部消化管内視鏡 3. 腹部エコー 4. 眼底検査 5. スパイロメトリーについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心エコー",
          "correct": true
        },
        {
          "text": "下部消化管内視鏡",
          "correct": false
        },
        {
          "text": "腹部エコー",
          "correct": true
        },
        {
          "text": "眼底検査",
          "correct": true
        },
        {
          "text": "スパイロメトリー",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "腎臓内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 17,
      "content": "40歳台女性。IgA腎症でステロイド適応ないので、ARBで治療していた。するとK6.0のパニック値が出た。担当医がまず行う対応として正しいものは?について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心電図をとる。",
          "correct": true
        },
        {
          "text": "GI療法を行う。",
          "correct": true
        },
        {
          "text": "患者の様子を確認する。",
          "correct": true
        },
        {
          "text": "再度採血をする。",
          "correct": true
        },
        {
          "text": "緊急透析をするため透析室に連絡する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎臓内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 14,
      "content": "血液悪性腫瘍について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "染色体転座t(11;14)転座(q13;q32) ではBCL2変異が見られる。",
          "correct": true
        },
        {
          "text": "t(14;18)(q32;q21) 転座は濾胞性リンパ腫で見られる。",
          "correct": true
        },
        {
          "text": "リツキシマブはCD20をターゲットとした抗体医薬である。",
          "correct": true
        },
        {
          "text": "悪性リンパ腫の治療として全例化学療法を行う。",
          "correct": false
        },
        {
          "text": "悪性リンパ腫のピークは30代である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "血液内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 13,
      "content": "血液内科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "非ホジキンリンパ腫は発症30代がピーク",
          "correct": false
        },
        {
          "text": "バーキットリンパ腫は、8:14 転座で、c-myc が重要である。",
          "correct": true
        },
        {
          "text": "リツキシマブはCD20 標的である",
          "correct": true
        },
        {
          "text": "リンパ腫は地域差がない",
          "correct": false
        },
        {
          "text": "ホジキンリンパ腫の方が非ホジキンリンパ腫より予後悪い",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 13,
      "content": "間違っている文章について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "HTLV-1の主な感染経路は、性行為、静注薬物治療である。",
          "correct": false
        },
        {
          "text": "我が国の悪性リンパ腫の年齢調整罹患率は増加傾向である。",
          "correct": true
        },
        {
          "text": "ホジキンリンパ腫は非ホジキンリンパ腫に比べ、予後が良い。",
          "correct": true
        },
        {
          "text": "染色体異常t(8;14)(q24;q32)にはBCL2遺伝子が関与する。",
          "correct": false
        },
        {
          "text": "すべての悪性リンパ腫は化学療法で治療される。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "血液内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 14,
      "content": "悪性リンパ腫2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "年齢調整罹患率は上昇傾向",
          "correct": true
        },
        {
          "text": "30代が最多",
          "correct": false
        },
        {
          "text": "リンパ節以外に病変がくるものはまれ",
          "correct": false
        },
        {
          "text": "悪性リンパ腫は全例ケモ",
          "correct": false
        },
        {
          "text": "リツキシマブは cd20 を標的にしている",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "血液内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 13,
      "content": "リンパ腫について〜について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "世界で組織型の頻度差がない",
          "correct": false
        },
        {
          "text": "t(14;18)は濾胞リンパに特徴的",
          "correct": true
        },
        {
          "text": "肺に浸潤することがある??????",
          "correct": true
        },
        {
          "text": "びまん性大細胞型リンパ腫の標準治療はR-CHOPである",
          "correct": true
        },
        {
          "text": "発症年齢の中央値は60歳",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 13,
      "content": "CMLの治療薬はどれか。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "イマチニブ",
          "correct": true
        },
        {
          "text": "ダサチニブ",
          "correct": true
        },
        {
          "text": "パゾパニブ",
          "correct": false
        },
        {
          "text": "ニボルマブ",
          "correct": false
        },
        {
          "text": "ニロチニブ",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "血液内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 14,
      "content": "正しい文章について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性前骨髄球性白血病患者の長期生存はまれである。",
          "correct": false
        },
        {
          "text": "イマチニブは慢性骨髄性白血病の治療に使用される。",
          "correct": true
        },
        {
          "text": "典型的な溶血性貧血では、網赤血球上昇とMCVが上昇する。",
          "correct": true
        },
        {
          "text": "繰り返す関節内の出血は血小板減少症に特徴的である。",
          "correct": false
        },
        {
          "text": "凝固第II因子欠乏では、PTとAPTTが延長する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "血液内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 13,
      "content": "血液内科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "限局性ホジキンリンパ腫は予後がいい",
          "correct": true
        },
        {
          "text": "atl はケモ効きにくいから予後不良",
          "correct": true
        },
        {
          "text": "濾胞性リンパ腫は診断されたらすぐケモする",
          "correct": false
        },
        {
          "text": "cmlの治療にニボルマブ",
          "correct": false
        },
        {
          "text": "amlの治療に bcl2阻害薬を用いることがある",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "血液内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 13,
      "content": "AML3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "t(14;18)",
          "correct": false
        },
        {
          "text": "t(8:14)",
          "correct": false
        },
        {
          "text": "inv(16)",
          "correct": true
        },
        {
          "text": "t(15;17)",
          "correct": true
        },
        {
          "text": "t(8;21)",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "血液内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 14,
      "content": "60歳女性。AMLに対してイダルビシン、シタラビンで治療中、発熱。WBC<100、Hb低下、Plt低下。まず行う対応として適切なものを2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胸部X線",
          "correct": true
        },
        {
          "text": "G-CSF投与",
          "correct": true
        },
        {
          "text": "抗菌薬投与",
          "correct": true
        },
        {
          "text": "血液培養",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 14,
      "content": "血液内科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "溶血性貧血は、普通網赤血球上昇、MCV 上昇",
          "correct": true
        },
        {
          "text": "APL に亜ヒ酸を使用",
          "correct": true
        },
        {
          "text": "若年 CML 慢性期には同種移植が第一。",
          "correct": false
        },
        {
          "text": "濾胞性リンパ腫はすぐ化学療法をする。",
          "correct": false
        },
        {
          "text": "M タンパクあれば、必ず MM とか形質細胞癌がある。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 14,
      "content": "血液内科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "慢性低酸素の多血はエリスロポエチン低値",
          "correct": false
        },
        {
          "text": "pnh は先天性の遺伝子異常",
          "correct": false
        },
        {
          "text": "サラセミアは小球性貧血を呈する",
          "correct": true
        },
        {
          "text": "悪性貧血の原因は vitB12の吸収不良",
          "correct": true
        },
        {
          "text": "第8因子が欠乏すると PT、APTT どちらも延長する",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "血液内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 35,
      "content": "抗菌薬の副作用について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ピポキシル基を持つセフェム系-高血糖",
          "correct": false
        },
        {
          "text": "グリコペプチド-レッドマン症候群",
          "correct": true
        },
        {
          "text": "アミノグリコシド-第8脳神経の障害",
          "correct": true
        },
        {
          "text": "テトラサイクリン-歯牙黄染",
          "correct": true
        },
        {
          "text": "カルバペネム-グレイ症候群",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "感染症科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 40,
      "content": "ワクチンが現在あるもの2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヒトパピローマウイルス",
          "correct": true
        },
        {
          "text": "C型肝炎ウイルス",
          "correct": false
        },
        {
          "text": "単純ヘルペスウイルス",
          "correct": false
        },
        {
          "text": "サイトメガロウイルス",
          "correct": false
        },
        {
          "text": "風疹",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "感染症科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 11,
      "content": "以下の記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "溶血性貧血は、普通網赤血球上昇、MCV上昇",
          "correct": true
        },
        {
          "text": "APLに亜ヒ酸を使用",
          "correct": true
        },
        {
          "text": "若年CML慢性期には同種移植が第一。",
          "correct": false
        },
        {
          "text": "濾胞性リンパ腫はすぐ化学療法をする。",
          "correct": false
        },
        {
          "text": "Mタンパクあれば、必ずMMとか形質細胞癌がある。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 12,
      "content": "正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽種症 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 肺高血圧",
          "correct": true
        },
        {
          "text": "ベーチェット 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル 血球貪食症候群",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 14,
      "content": "pci後、予後を改善しないものはどれか？2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": true
        },
        {
          "text": "SGLT",
          "correct": false
        },
        {
          "text": "ARNI",
          "correct": false
        },
        {
          "text": "スタチン",
          "correct": false
        },
        {
          "text": "トルバプタン",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 16,
      "content": "別紙に心電図、V2,3,4,5あたりがst上昇。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "pci決めるために冠動脈造影をする。",
          "correct": true
        },
        {
          "text": "血栓溶解とpci予後に差がない",
          "correct": false
        },
        {
          "text": "梗塞部の、支配血管は左回旋枝。",
          "correct": false
        },
        {
          "text": "エコーで側壁にも運動異常",
          "correct": true
        },
        {
          "text": "アスピリン200mg噛み砕く",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "循環器",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 28,
      "content": "糖尿病既往ありで腎機能悪化eGFR11とかいろいろ数値書かれてたけど覚えてないです、、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "透析のため内シャントする",
          "correct": true
        },
        {
          "text": "腎移植には血液型同じが必要",
          "correct": false
        },
        {
          "text": "透析導入後でないと腎移植できない",
          "correct": false
        },
        {
          "text": "糖尿病なので腹膜透析できない",
          "correct": false
        },
        {
          "text": "CKD5期なので腎代替療法検討",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎内",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 29,
      "content": "半月体形成性糸球体腎炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ステロイドと免疫抑制で治療する",
          "correct": true
        },
        {
          "text": "本邦ではpr3-ANCAが多い",
          "correct": false
        },
        {
          "text": "他の臓器検索する",
          "correct": true
        },
        {
          "text": "高齢者に多い",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "腎内",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 34,
      "content": "多発性硬化症で正しいもの2つ 過去問通りについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "増悪予防にステロイド",
          "correct": false
        },
        {
          "text": "open ring signがみられる",
          "correct": true
        },
        {
          "text": "脳室周囲にはみられない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 38,
      "content": "若年女性、甲状腺の自発痛、圧痛、腫大、fT4高値、TSH低値、赤沈亢進。疼痛部に一致した低エコーを認める。正しいもの3つの組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "チアマゾール(抗甲状腺薬)が効く。",
          "correct": false
        },
        {
          "text": "ステロイド使うこともある。",
          "correct": true
        },
        {
          "text": "血中サイログロブリンが高値になる。",
          "correct": true
        },
        {
          "text": "動悸にβブロッカー使うこともある。",
          "correct": true
        },
        {
          "text": "シンチで取り込みがみられる。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 39,
      "content": "45歳、4日前から口渇、多飲、多尿、pH7.19アシドーシス、BE−10、尿ケトン陽性。血糖値400mg/dL、HbA1c6.9%貧血なし。血中cペプチドほぼ無し。正しいものの組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠中は発症しないことが分かっている。",
          "correct": false
        },
        {
          "text": "自己抗体陽性のことが多い。",
          "correct": true
        },
        {
          "text": "膵外分泌酵素が高値になること多い。",
          "correct": false
        },
        {
          "text": "血清カリウムの値に注意しながら治療する。",
          "correct": true
        },
        {
          "text": "GLP1受容体作動薬は注射の方が内服より効く。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2022年 北野病院.json"
    }
  ]
};

export const naikaData: DepartmentData = {
  department: "内科",
  total_questions: baseNaikaData.total_questions,
  hospitals: baseNaikaData.hospitals,
  years: baseNaikaData.years,
  questions: (baseNaikaData.questions as any[]).map((q: any) => ({
    ...q,
    department: "内科",
    id: makeQuestionId("内科", q.year, q.question_number, q.content),
    choices: (q.choices as any[]).map((c: any) => ({ ...c, correct: !!c.correct })),
  })),
};
