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
      "content": "抗体と疾患の組み合わせについて、各選択肢の正誤を答えよ。",
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
      "content": "以下の記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "全身性エリテマトーデスの診断基準において、抗核抗体が1:80倍以上陽性であることが必須条件である。",
          "correct": true
        },
        {
          "text": "高安動脈炎は大動脈およびその主要分枝を侵す大型血管炎である。",
          "correct": true
        },
        {
          "text": "皮膚筋炎は筋症状がなくても診断されうる。",
          "correct": true
        },
        {
          "text": "シェーグレン症候群の診断に、抗SS-A/SS-B抗体陽性は必須ではない。",
          "correct": true
        },
        {
          "text": "混合性結合組織病(MCTD)の診断には抗U1-RNP抗体陽性が必須である。",
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
      "content": "疾患と症状・所見の正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽腫症 - 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン症候群 - 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 - 肺高血圧症",
          "correct": true
        },
        {
          "text": "ベーチェット病 - 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル病 - 血球貪食症候群",
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
      "content": "疾患と症状・所見の正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽腫症 - 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン症候群 - 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 - 肺高血圧症",
          "correct": true
        },
        {
          "text": "ベーチェット病 - 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル病 - 血球貪食症候群",
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
      "content": "疾患と症状の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "再発性多発軟骨炎 - ぶどう膜炎",
          "correct": true
        },
        {
          "text": "成人Still病 - ソーセージ様指",
          "correct": false
        },
        {
          "text": "抗リン脂質抗体症候群 - 肺動脈性肺高血圧症",
          "correct": true
        },
        {
          "text": "抗MDA5抗体陽性皮膚筋炎 - 急速進行性糸球体腎炎",
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
      "content": "膠原病における疾患と症状の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "関節リウマチ - 炎症性背部痛",
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
          "text": "RS3PE症候群 - 悪性腫瘍の合併",
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
      "content": "全身性エリテマトーデス(SLE)の疾患活動性の指標について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗dsDNA抗体価",
          "correct": true
        },
        {
          "text": "補体価 (C3, C4, CH50)",
          "correct": true
        },
        {
          "text": "CRP",
          "correct": false
        },
        {
          "text": "抗Sm抗体価",
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
      "content": "脊椎関節炎の特徴的な所見について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "網状皮斑",
          "correct": false
        },
        {
          "text": "HLA-B51陽性",
          "correct": false
        },
        {
          "text": "先行する尿道炎・腸炎",
          "correct": true
        },
        {
          "text": "指趾炎 (ソーセージ様指)",
          "correct": true
        },
        {
          "text": "安静により軽快する関節痛",
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
      "content": "疾患と所見の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "高安動脈炎 - 大動脈弁閉鎖不全症(AR)",
          "correct": true
        },
        {
          "text": "好酸球性多発血管炎性肉芽腫症(EGPA) - IL-6高値",
          "correct": false
        },
        {
          "text": "顕微鏡的多発血管炎(MPA) - 糸球体への免疫複合体沈着",
          "correct": false
        },
        {
          "text": "結節性多発動脈炎(PAN) - 顎跛行",
          "correct": false
        },
        {
          "text": "クリオグロブリン血症性血管炎 - C型肝炎ウイルス感染",
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
      "content": "リウマチ・膠原病疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "IgG4関連疾患の診断には、血清IgG4高値が必須である。",
          "correct": false
        },
        {
          "text": "混合性結合組織病(MCTD)は、抗U1-RNP抗体が陰性でも診断されることがある。",
          "correct": false
        },
        {
          "text": "強直性脊椎炎の診断において仙腸関節の画像評価は重要である。",
          "correct": true
        },
        {
          "text": "全身性エリテマトーデス(SLE)の治療においてヒドロキシクロロキンは基本的な薬剤である。",
          "correct": true
        },
        {
          "text": "妊娠中の抗リン脂質抗体症候群患者には、ワルファリンが第一選択薬である。",
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
      "content": "リウマチ性疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "Raynaud現象の典型的な3相性の色調変化は、蒼白→赤色→紫色である。",
          "correct": false
        },
        {
          "text": "成人Still病や皮膚筋炎では、ケブネル現象が見られることがある。",
          "correct": true
        },
        {
          "text": "アスピリン喘息患者において、選択的COX-2阻害薬は比較的安全に使用できる。",
          "correct": true
        },
        {
          "text": "リウマチ性多発筋痛症(PMR)の治療には、通常、大量のステロイドが必要である。",
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
      "content": "副腎皮質ステロイドに関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "副作用に顎骨壊死がある。",
          "correct": true
        },
        {
          "text": "妊婦にはデキサメタゾンよりもプレドニゾロンが望ましい。",
          "correct": true
        },
        {
          "text": "アスピリン喘息の患者には、コハク酸エステル型の注射薬が安全である。",
          "correct": false
        },
        {
          "text": "投与により、末梢血中の好中球は増加し、リンパ球は減少する。",
          "correct": true
        },
        {
          "text": "ステロイド大量療法とは、プレドニゾロン換算で1mg/kg/日以上の投与を指す。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "リウマチ膠原病内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 16,
      "content": "膠原病関連疾患の治療に関する組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "神経型ベーチェット病 - インフリキシマブ",
          "correct": true
        },
        {
          "text": "臓器障害を伴う顕微鏡的多発血管炎 - リツキシマブ",
          "correct": true
        },
        {
          "text": "家族性地中海熱 - コルヒチン",
          "correct": true
        },
        {
          "text": "強皮症腎クリーゼ - 大量ステロイド投与",
          "correct": false
        },
        {
          "text": "関節リウマチの環軸椎亜脱臼 - 頸椎の後屈を避ける",
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
      "content": "32歳男性。3ヶ月前からの口渇、多飲、夜間尿を主訴に来院。随時血糖457mg/dL、HbA1c 12.0%、尿ケトン体(3+)、体重10kg減少。この患者の診断と治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "SGLT2阻害薬での治療を開始する。",
          "correct": false
        },
        {
          "text": "単剤では低血糖を起こしにくいGLP-1受容体作動薬が治療の中心となる。",
          "correct": false
        },
        {
          "text": "インスリン療法を開始する。",
          "correct": true
        },
        {
          "text": "抗GAD抗体や抗IA-2抗体を測定することは、病型の鑑別に有用である。",
          "correct": true
        },
        {
          "text": "抗ミトコンドリア抗体を測定することは、病態の把握に有用である。",
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
      "content": "45歳男性。4日前からの口渇、多飲、多尿で受診。pH 7.19、BE -10mEq/L、尿ケトン体陽性。血糖値400mg/dL、HbA1c 6.9%。血中Cペプチドはほぼ検出されず。本症例（劇症1型糖尿病を想定）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠中に発症することはない。",
          "correct": false
        },
        {
          "text": "多くの症例で膵島関連自己抗体は陰性である。",
          "correct": true
        },
        {
          "text": "膵外分泌酵素（アミラーゼ、リパーゼ）が高値を示すことが多い。",
          "correct": true
        },
        {
          "text": "治療の際には、血清カリウム値の変動に注意が必要である。",
          "correct": true
        },
        {
          "text": "GLP-1受容体作動薬は、注射薬が内服薬よりも効果が高い。",
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
      "content": "膵体尾部癌に対する膵全摘術後の状態に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "インスリン非依存状態（インスリン治療が不要）となる。",
          "correct": false
        },
        {
          "text": "1型糖尿病患者よりも多くのインスリン量を必要とする。",
          "correct": false
        },
        {
          "text": "グルカゴンも欠乏するため、2型糖尿病に比べて血糖変動が激しい（不安定）。",
          "correct": true
        },
        {
          "text": "内因性インスリン分泌能の指標であるCペプチドは、検出感度以下となる。",
          "correct": true
        },
        {
          "text": "インクレチンであるGIP、GLP-1の分泌も低下する。",
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
      "content": "経口血糖降下薬で治療中の2型糖尿病患者。4日前から発熱し食事が摂れず、ぐったりしているところを発見された。血糖値900mg/dL以上、尿ケトン体(+-)。実施すべき治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "インスリン持続静注",
          "correct": true
        },
        {
          "text": "大量の生理食塩水輸液",
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
          "text": "広域抗菌薬の静注",
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
      "content": "胸痛で搬送され急性心筋梗塞と診断され、同時に糖尿病も初めて指摘された患者。この患者の糖尿病診療において、初期に確認すべき項目について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心血管疾患による突然死の家族歴",
          "correct": true
        },
        {
          "text": "過去の運動習慣",
          "correct": true
        },
        {
          "text": "過去の健診結果や他院での血液検査結果",
          "correct": true
        },
        {
          "text": "糖尿病性網膜症や腎症の評価（眼底検査、尿検査）",
          "correct": true
        },
        {
          "text": "末梢動脈疾患の評価（ABI、頸動脈エコー）",
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
      "content": "47歳男性。30代で糖尿病を発症し、食事・運動療法を開始。その後、経口薬、40歳からインスリン療法を導入するも血糖コントロール不良。考えられる二次性糖尿病の原因疾患について、各選択肢の正誤を答えよ。",
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
      "content": "耐糖能異常と高血圧を指摘され受診。身体所見で満月様顔貌、中心性肥満、皮膚の菲薄化を認める。診断のために行うべき検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "MIBIシンチグラフィ",
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
          "text": "CRH負荷試験",
          "correct": true
        },
        {
          "text": "TRH負荷試験",
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
      "content": "若年女性。甲状腺の自発痛、圧痛、腫大を認める。血液検査でFT4高値、TSH低値、赤沈亢進。超音波検査で疼痛部に一致した低エコー域を認める。本疾患（亜急性甲状腺炎）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "チアマゾール（抗甲状腺薬）が著効する。",
          "correct": false
        },
        {
          "text": "治療にステロイドを用いることがある。",
          "correct": true
        },
        {
          "text": "血中サイログロブリンが高値になる。",
          "correct": true
        },
        {
          "text": "動悸に対してβ遮断薬を用いることがある。",
          "correct": true
        },
        {
          "text": "甲状腺シンチグラフィで放射性ヨウ素の強い取り込みが見られる。",
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
      "content": "肺癌でペンブロリズマブ使用中の患者が、高K血症と低Na血症をきたした。免疫チェックポイント阻害薬による下垂体機能低下症または副腎皮質機能低下症を疑う。この病態の診断と治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "好酸球増多の有無を確認するため、白血球分画が診断の参考になる。",
          "correct": true
        },
        {
          "text": "甲状腺シンチグラフィで異常集積があれば、甲状腺ホルモンを補充する。",
          "correct": false
        },
        {
          "text": "高カルシウム血症を合併した場合、Ca受容体作動薬が有効である。",
          "correct": false
        },
        {
          "text": "下垂体機能低下症の診断に、CRH負荷試験が有用な場合がある。",
          "correct": true
        },
        {
          "text": "ACTHとコルチゾールがともに低値であれば、副腎皮質ホルモンを補充する。",
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
      "content": "74歳女性。半年前からの腰背部痛を主訴に受診。50歳代で閉経。脊椎X線検査で椎体圧迫骨折を認め、DXA法による骨密度検査で若年成人平均値(YAM)の73%であった。スクリーニング検査で明らかな二次性の原因は認めない。本疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "閉経後骨粗鬆症と診断し、薬物治療の開始を検討する。",
          "correct": true
        },
        {
          "text": "ビスホスホネート製剤やデノスマブの使用を検討するにあたり、顎骨壊死のリスク評価のため歯科所見は重要である。",
          "correct": true
        },
        {
          "text": "原発性副甲状腺機能亢進症は、二次性骨粗鬆症の原因となる。",
          "correct": true
        },
        {
          "text": "サブクリニカルクッシング症候群が骨粗鬆症をきたすことはまれである。",
          "correct": false
        },
        {
          "text": "骨代謝マーカーは骨粗鬆症治療薬の効果判定に用いられる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 19,
      "content": "50代女性。健診で高カルシウム血症(12.4 mg/dL)を指摘され受診。再検でもCa 12.7 mg/dLと高値。intact PTHも高値であった。本症例（原発性副甲状腺機能亢進症を想定）の精査として適切なものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "腎結石や尿路結石の有無を評価するために腹部CTを行う。",
          "correct": true
        },
        {
          "text": "骨量減少の評価のために骨密度測定を行う。",
          "correct": true
        },
        {
          "text": "副甲状腺腫の局在診断のためにMIBIシンチグラフィを行う。",
          "correct": true
        },
        {
          "text": "Ellsworth-Howard試験",
          "correct": false
        },
        {
          "text": "カルシウム負荷試験",
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
          "text": "バソプレシン負荷試験",
          "correct": false
        },
        {
          "text": "下垂体MRI",
          "correct": true
        },
        {
          "text": "経蝶形骨洞手術",
          "correct": true
        },
        {
          "text": "ソマトスタチンアナログ製剤",
          "correct": true
        },
        {
          "text": "アドステロールシンチグラフィ",
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
      "content": "肺癌に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "粘液産生性腺癌により気管支液瘻をきたすことがある。",
          "correct": true
        },
        {
          "text": "分子標的薬による薬剤性間質性肺炎の発生率は、日本人で欧米人より低い。",
          "correct": false
        },
        {
          "text": "進行・再発大細胞癌の化学療法は、他の非小細胞肺癌に準じて行われる。",
          "correct": true
        },
        {
          "text": "慢性閉塞性肺疾患と間質性肺炎の合併（CPFE）は、高率に肺癌を合併する。",
          "correct": true
        },
        {
          "text": "免疫チェックポイント阻害薬の副作用として大腸炎（免疫関連腸炎）がある。",
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
      "content": "肺癌の治療に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "非小細胞肺癌の術後には、病期に応じて補助化学療法を行うことがある。",
          "correct": true
        },
        {
          "text": "全身状態(PS)が不良の非小細胞肺癌患者でも、殺細胞性抗がん剤の投与が考慮される場合がある。",
          "correct": true
        },
        {
          "text": "全身状態(PS)が不良の非小細胞肺癌患者でも、EGFR遺伝子変異陽性であればEGFR-TKIの良い適応となる。",
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
      "content": "88歳女性、腰痛を主訴とする。PSは3。肺癌、肝転移、多発骨転移あり。この患者に対する適切な治療方針について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "症状緩和を目的とした支持療法（緩和ケア）",
          "correct": true
        },
        {
          "text": "疼痛のある骨転移部位への緩和的放射線照射",
          "correct": true
        },
        {
          "text": "ドセタキセル単剤療法",
          "correct": false
        },
        {
          "text": "プラチナ製剤併用化学療法",
          "correct": false
        },
        {
          "text": "免疫チェックポイント阻害薬",
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
      "content": "肺癌の免疫療法に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PD-1は主に活性化T細胞上に発現する。",
          "correct": true
        },
        {
          "text": "CTLA-4は主にCD4陽性T細胞に発現する。",
          "correct": true
        },
        {
          "text": "抗PD-1/PD-L1抗体と抗CTLA-4抗体の併用療法の効果は、PD-L1発現率に関わらず認められることがある。",
          "correct": true
        },
        {
          "text": "免疫チェックポイント阻害薬は、殺細胞性抗がん剤と併用されることがある。",
          "correct": true
        },
        {
          "text": "ドライバー遺伝子変異陽性肺癌では、分子標的薬と免疫チェックポイント阻害薬の併用が標準治療である。",
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
      "content": "縦隔腫瘍と肺癌に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "悪性リンパ腫では、肺門・縦隔リンパ節だけでなく、肺実質にも浸潤することがある。",
          "correct": true
        },
        {
          "text": "胸腺腫は、胸部X線写真の側面像で前縦隔の腫瘤として指摘されやすい。",
          "correct": true
        },
        {
          "text": "超音波気管支鏡ガイド下針生検(EBUS-TBNA)により、縦隔リンパ節の生検を行うことができる。",
          "correct": true
        },
        {
          "text": "進行非小細胞肺癌において、ニボルマブが初回治療として単剤で用いられることは稀である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 9,
      "content": "64歳女性。息切れと咳を主訴に来院。胸部CTでcrazy-paving patternを呈し、気管支肺胞洗浄液(BALF)は白濁し米のとぎ汁様であった。本疾患（肺胞蛋白症）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "画像所見に比して、臨床症状は比較的軽いことが多い。",
          "correct": true
        },
        {
          "text": "一般的に予後は比較的良好である。",
          "correct": true
        },
        {
          "text": "自己免疫性のタイプでは、抗GM-CSF抗体が陽性となることが多い。",
          "correct": true
        },
        {
          "text": "標準的な治療として、全肺洗浄が行われる。",
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
      "content": "66歳女性。KL-6高値。夏季に息切れが悪化する。胸部CTで両側下肺野に粒状影を認める。原因として考えられるものについて、各選択肢の正誤を答えよ。",
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
          "text": "空調肺（加湿器肺）",
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
      "content": "間質性肺炎に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特発性器質化肺炎(COP)はステロイド治療によく反応する。",
          "correct": true
        },
        {
          "text": "関節リウマチには、UIPやNSIPなど様々なパターンの間質性肺炎が合併しうる。",
          "correct": true
        },
        {
          "text": "夏型過敏性肺炎の主な原因抗原は、アスペルギルスではなくトリコスポロンである。",
          "correct": false
        },
        {
          "text": "特発性肺線維症(IPF)の病理組織像では、蜂巣肺が特徴的である。",
          "correct": true
        },
        {
          "text": "抗ARS抗体陽性の皮膚筋炎・多発性筋炎では、高率に間質性肺炎を合併する。",
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
      "content": "非結核性抗酸菌症に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肺MAC症の標準治療には、クラリスロマイシン、リファンピシン、エタンブトールが用いられる。",
          "correct": true
        },
        {
          "text": "肺MAC症は、中高年の非喫煙女性に好発する。",
          "correct": true
        },
        {
          "text": "本邦における非結核性抗酸菌症の罹患率は、結核を上回っている。",
          "correct": true
        },
        {
          "text": "M. abscessusによる感染症は、治療が困難であることが多い。",
          "correct": true
        },
        {
          "text": "血清抗GPLコアIgA抗体は、肺MAC症の補助診断として有用である。",
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
      "content": "肺MAC症に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血清抗GPLコアIgA抗体を補助診断に用いる。",
          "correct": true
        },
        {
          "text": "クラリスロマイシン単剤での治療は、薬剤耐性を誘導するため推奨されない。",
          "correct": true
        },
        {
          "text": "中高年女性の結節・気管支拡張型が増加している。",
          "correct": true
        },
        {
          "text": "診断確定には、複数回の喀痰培養などが必要である。",
          "correct": false
        },
        {
          "text": "内科的治療でコントロール不良な空洞を伴う病変に対しては、外科切除が考慮される。",
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
      "content": "気管支喘息の管理に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "軽症であっても、長時間作用型β2刺激薬(LABA)単剤での長期管理は推奨されない。",
          "correct": true
        },
        {
          "text": "重症・難治例では、長時間作用型抗コリン薬(LAMA)の上乗せを考慮する。",
          "correct": true
        },
        {
          "text": "吸入指導は、アドヒアランスと治療効果を改善させる。",
          "correct": true
        },
        {
          "text": "ロイコトリエン受容体拮抗薬は、合併するアレルギー性鼻炎にも効果が期待できる。",
          "correct": true
        },
        {
          "text": "全ての治療ステップにおいて、発作時には短時間作用型β2刺激薬(SABA)を使用する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "呼吸器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 7,
      "content": "アレルギーに関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特異的IgE抗体は、I型アレルギーを反映する。",
          "correct": true
        },
        {
          "text": "沈降抗体である特異的IgG抗体は、III型アレルギー（例：過敏性肺炎）を反映する。",
          "correct": true
        },
        {
          "text": "アナフィラキシーに対して、アドレナリン自己注射薬（エピペン）は小児にも適応がある。",
          "correct": true
        },
        {
          "text": "総IgE値が低値であっても、特定の抗原に対する特異的IgE値が高値である可能性は否定できない。",
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
      "content": "COPD（慢性閉塞性肺疾患）に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肺拡散能(DLCO)は低下する。",
          "correct": false
        },
        {
          "text": "呼吸は呼気時間の延長が特徴的である。",
          "correct": false
        },
        {
          "text": "長期管理薬の第一選択は、長時間作用型気管支拡張薬（LAMAやLABA）である。",
          "correct": false
        },
        {
          "text": "慢性的な高CO2血症(PaCO2 > 60 mmHg)がある患者への酸素投与は、CO2ナルコーシスに注意が必要である。",
          "correct": true
        },
        {
          "text": "急性増悪による高CO2血症を伴う呼吸不全に対しては、非侵襲的陽圧換気(NPPV)が良い適応となる。",
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
      "content": "COVID-19に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "後遺症として心筋障害が報告されている。",
          "correct": true
        },
        {
          "text": "流行が収束している地域での無症状者の陽性結果は、偽陽性の可能性を考慮する必要がある。",
          "correct": true
        },
        {
          "text": "インフルエンザと比較して、多彩な後遺症が報告されている。",
          "correct": true
        },
        {
          "text": "酸素投与を必要としない軽症例に対するステロイド投与は、原則として推奨されない。",
          "correct": true
        },
        {
          "text": "主な感染経路は、飛沫感染と接触感染である。",
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
      "content": "呼吸器の身体所見に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "メトヘモグロビン血症では、チアノーゼが見られる。",
          "correct": true
        },
        {
          "text": "ばち指は、特発性肺線維症や肺癌でみられるが、COPDでは典型的ではない。",
          "correct": true
        },
        {
          "text": "反回神経麻痺による嗄声は、左反回神経が解剖学的に障害されやすいため、左側に多い。",
          "correct": true
        },
        {
          "text": "Biot呼吸は、不規則な頻呼吸と無呼吸を繰り返す呼吸パターンである。",
          "correct": true
        },
        {
          "text": "過敏性肺炎の聴診では、吸気終末に捻髪音(fine crackles)や笛音(squawk)を聴取することがある。",
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
      "content": "肺の良性腫瘍に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "最も頻度が高いものは過誤腫である。",
          "correct": true
        },
        {
          "text": "カルチノイドは悪性腫瘍（神経内分泌腫瘍）に分類される。",
          "correct": true
        },
        {
          "text": "過誤腫のX線写真では、ポップコーン様の石灰化を呈することがある。",
          "correct": true
        },
        {
          "text": "気管支内に発生した場合、閉塞性肺炎をきたすことがある。",
          "correct": true
        },
        {
          "text": "過誤腫は緩徐に増大することがある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器内科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 4,
      "content": "安定労作狭心症の診断に有用な検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "安静時トロポニンT測定",
          "correct": false
        },
        {
          "text": "負荷心エコー",
          "correct": true
        },
        {
          "text": "冠動脈CT",
          "correct": true
        },
        {
          "text": "薬剤負荷心筋シンチグラフィ",
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
      "content": "安定労作狭心症の診断に有用な検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "運動負荷心電図",
          "correct": true
        },
        {
          "text": "負荷心エコー",
          "correct": true
        },
        {
          "text": "安静時血中トロポニン測定",
          "correct": false
        },
        {
          "text": "薬剤負荷心筋シンチグラフィ",
          "correct": true
        },
        {
          "text": "冠動脈CT",
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
      "content": "心電図で前壁誘導(V2-V5)のST上昇を認める急性心筋梗塞患者の対応について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "治療方針決定のため、緊急心臓カテーテル検査（冠動脈造影）を行う。",
          "correct": true
        },
        {
          "text": "本邦の急性期再灌流療法では、血栓溶解療法よりも緊急PCIが優先される。",
          "correct": true
        },
        {
          "text": "責任血管は左前下行枝である可能性が高い。",
          "correct": true
        },
        {
          "text": "心エコーで前壁から側壁にかけての壁運動異常を認めることがある。",
          "correct": true
        },
        {
          "text": "アスピリン200mg程度を速やかに噛み砕いて内服させる。",
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
      "content": "急性心筋梗塞に対するPCI後の生命予後を改善する二次予防薬について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": false
        },
        {
          "text": "カルシウム拮抗薬",
          "correct": false
        },
        {
          "text": "スタチン",
          "correct": true
        },
        {
          "text": "ACE阻害薬/ARB",
          "correct": true
        },
        {
          "text": "抗血小板薬（アスピリンなど）",
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
      "content": "心不全患者において、生命予後を改善する効果が証明されていない薬剤について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": true
        },
        {
          "text": "SGLT2阻害薬",
          "correct": false
        },
        {
          "text": "ARNI（アンジオテンシン受容体ネプリライシン阻害薬）",
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
      "content": "急性心筋梗塞の再灌流療法後に、予後改善効果が示されている薬剤について、各選択肢の正誤を答えよ。",
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
      "content": "胸痛を主訴とする患者。心電図で下壁誘導(II, III, aVF)のST上昇を認める。本症例（下壁急性心筋梗塞）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "緊急PCIは血栓溶解療法よりも予後が良いとされる。",
          "correct": true
        },
        {
          "text": "心エコーで左室側壁の壁運動低下を認めることは典型的ではない。",
          "correct": true
        },
        {
          "text": "右室梗塞を合併し、右心不全をきたしうる。",
          "correct": true
        },
        {
          "text": "アスピリンを速やかに噛み砕いて内服させることが推奨される。",
          "correct": true
        },
        {
          "text": "PCI後の二次予防として、スタチンは予後を改善する。",
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
      "content": "70歳女性。2日前の胸痛発作後、ショック状態で来院。血圧70/35mmHg、心拍数110/分、SpO2 88%。胸部X線で心拡大と肺水腫、聴診で全収縮期雑音を認める。心電図で下壁梗塞パターン。本症例（心筋梗塞後心室中隔穿孔を想定）の初期対応として、不適切なものを1つ選べ。",
      "choices": [
        {
          "text": "緊急開心術の準備",
          "correct": false
        },
        {
          "text": "冠動脈CTの施行",
          "correct": true
        },
        {
          "text": "心臓超音波検査",
          "correct": false
        },
        {
          "text": "経皮的冠動脈形成術(PCI)の検討",
          "correct": false
        },
        {
          "text": "カテコラミンによる循環補助",
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
      "content": "左室駆出率が保たれた心不全（HFpEF）の原因となりうるものについて、各選択肢の正誤を答えよ。",
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
      "year": 2019,
      "original_category": "循環器内科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 5,
      "content": "左室駆出率が保たれた心不全（HFpEF）をきたす疾患・病態について、各選択肢の正誤を答えよ。",
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
      "content": "急性心不全患者。Forrester分類II群（Warm & Wet: 肺うっ血あり、末梢循環良好）に分類される。適切な治療について、各選択肢の正誤を答えよ。",
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
          "text": "血管拡張薬（硝酸薬）",
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
      "content": "急性心不全患者。心係数(CI) 1.8 L/min/m2, 肺動脈楔入圧(PCWP) 30mmHg。この病態（Forrester分類IV群: Cold & Wet）に対する治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "強心薬（ドブタミンなど）の投与",
          "correct": true
        },
        {
          "text": "β遮断薬の投与",
          "correct": false
        },
        {
          "text": "生理食塩水の輸液",
          "correct": false
        },
        {
          "text": "利尿薬の投与",
          "correct": true
        },
        {
          "text": "血管拡張薬（硝酸薬）の投与",
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
      "content": "うっ血性心不全における肺うっ血の評価に役立つ検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血中BNPまたはNT-proBNP値",
          "correct": true
        },
        {
          "text": "安静時心電図",
          "correct": false
        },
        {
          "text": "心筋シンチグラフィ",
          "correct": false
        },
        {
          "text": "胸部X線写真",
          "correct": true
        },
        {
          "text": "心エコー検査",
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
      "content": "弁膜症既往のある患者。3ヶ月前に抜歯歴あり。発熱を繰り返し、心エコーで5mmの疣贅を認める。本症例（感染性心内膜炎）の管理について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "原因菌が不明なため、投与中の抗菌薬をそのまま継続する。",
          "correct": false
        },
        {
          "text": "疣贅の大きさが5mmであること自体が、緊急手術の絶対適応となる。",
          "correct": false
        },
        {
          "text": "コントロール不能な心不全が悪化した場合は、早期手術を考慮する。",
          "correct": true
        },
        {
          "text": "原因菌同定のため、抗菌薬を一時中止し、血液培養を複数セット採取する。",
          "correct": true
        },
        {
          "text": "黄色ブドウ球菌による感染性心内膜炎は、比較的予後が良い。",
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
      "content": "弁膜症でフォロー中の患者。3ヶ月前に抜歯歴あり。2ヶ月前から微熱が続き、心エコーで4mmの疣贅と中等度の僧帽弁逆流を認める。本症例（感染性心内膜炎）の管理について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "疣贅の大きさが4mmであること自体が、緊急手術の絶対適応となる。",
          "correct": false
        },
        {
          "text": "経験的に投与されている抗菌薬をそのまま継続する。",
          "correct": false
        },
        {
          "text": "黄色ブドウ球菌が原因菌の場合、比較的予後は良好である。",
          "correct": false
        },
        {
          "text": "心不全が悪化すれば、早期手術を考慮する。",
          "correct": true
        },
        {
          "text": "原因菌同定のため、可能であれば抗菌薬を一時中止し、血液培養を複数セット採取する。",
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
      "content": "合併症のない初発の本態性高血圧患者に対し、第一選択薬として推奨されない薬剤について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "アンジオテンシン受容体ネプリライシン阻害薬(ARNI)",
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
          "text": "サイアザイド系（類似）利尿薬",
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
      "content": "合併症のない初発の本態性高血圧患者に対する、第一選択薬として推奨されない薬剤について、各選択肢の正誤を答えよ。",
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
          "text": "サイアザイド系（類似）利尿薬",
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
      "content": "恒久的ペースメーカーの植え込み適応となる病態について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "症候性の洞不全症候群",
          "correct": true
        },
        {
          "text": "症候性の徐脈性心房細動",
          "correct": true
        },
        {
          "text": "心室頻拍",
          "correct": false
        },
        {
          "text": "第2度房室ブロック (Wenckebach型)",
          "correct": false
        },
        {
          "text": "第3度房室ブロック (完全房室ブロック)",
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
      "content": "50代男性。早朝の胸部圧迫感を主訴に来院。運動負荷心電図は陰性。ホルター心電図で夜間から早朝にかけてST上昇を認めた。本疾患（冠攣縮性狭心症）の治療薬について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PCI（経皮的冠動脈インターベンション）",
          "correct": false
        },
        {
          "text": "β遮断薬",
          "correct": false
        },
        {
          "text": "アスピリン",
          "correct": false
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
      "content": "食道癌に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "飲酒と喫煙は、扁平上皮癌の主要な危険因子である。",
          "correct": true
        },
        {
          "text": "本邦では胸部中部食道に最も好発する。",
          "correct": true
        },
        {
          "text": "本邦の食道癌の組織型は、ほとんどが扁平上皮癌である。",
          "correct": true
        },
        {
          "text": "扁平上皮癌は、放射線治療に対する感受性が比較的高い。",
          "correct": true
        },
        {
          "text": "進行食道癌では、多くの場合、手術前に術前化学療法を行う。",
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
      "content": "食道扁平上皮癌の危険因子について、各選択肢の正誤を答えよ。",
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
      "content": "胃癌の危険因子について、各選択肢の正誤を答えよ。",
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
          "text": "高塩分食品の摂取",
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
      "content": "胃全摘術後の合併症・後遺症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胆石形成",
          "correct": true
        },
        {
          "text": "鉄欠乏性貧血・ビタミンB12欠乏性貧血",
          "correct": true
        },
        {
          "text": "肥満",
          "correct": false
        },
        {
          "text": "門脈圧亢進症",
          "correct": false
        },
        {
          "text": "ダンピング症候群・耐糖能異常",
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
      "content": "大腸癌の危険因子について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肥満",
          "correct": true
        },
        {
          "text": "赤肉・加工肉の高摂取",
          "correct": true
        },
        {
          "text": "男性",
          "correct": true
        },
        {
          "text": "NSAIDsの常用",
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
      "content": "膵癌に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "組織学的には膵管癌が90%以上を占める。",
          "correct": true
        },
        {
          "text": "60%以上の患者で膵癌の家族歴がある。",
          "correct": false
        },
        {
          "text": "根治的手術後の再発率は低い。",
          "correct": false
        },
        {
          "text": "発見時に進行癌であることが多い。",
          "correct": true
        },
        {
          "text": "KRAS、TP53、SMAD4、CDKN2Aなどの遺伝子変異が高頻度に見られる。",
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
      "content": "膵臓の解剖学的区分に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "膵頭部と膵体部の境界は、上腸間膜静脈の右縁とされることが多い。",
          "correct": true
        },
        {
          "text": "膵体部と膵尾部の境界は、大動脈の左縁とされることが多い。",
          "correct": true
        },
        {
          "text": "膵頭部には、上腸間膜動静脈の背側を回り込む膵鉤部が含まれる。",
          "correct": true
        },
        {
          "text": "主膵管は膵臓の全長を貫いて走行し、ファーター膨大部に開口する。",
          "correct": true
        },
        {
          "text": "膵鉤部は膵頭部に含まれない。",
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
      "content": "B型肝炎ウイルス(HBV)が再活性化するリスクがある状況について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "HBVワクチン接種",
          "correct": false
        },
        {
          "text": "造血幹細胞移植",
          "correct": true
        },
        {
          "text": "免疫抑制剤（ステロイドを含む）の使用",
          "correct": true
        },
        {
          "text": "化学療法",
          "correct": true
        },
        {
          "text": "核酸アナログ製剤の投与",
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
      "content": "B型肝炎に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "B型肝炎ウイルス(HBV)はDNAウイルスである。",
          "correct": true
        },
        {
          "text": "HBe抗原からHBe抗体にセロコンバージョンした後の再活性化では、劇症化しやすい。",
          "correct": true
        },
        {
          "text": "HBc抗体陽性の患者は、常にHBV-DNAも陽性である。",
          "correct": false
        },
        {
          "text": "HBV既往感染者（HBc抗体またはHBs抗体陽性）は、免疫抑制療法や化学療法で再活性化することがある。",
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
      "content": "C型肝炎ウイルス(HCV)感染に関連する肝外病変・合併症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "膜性増殖性糸球体腎炎",
          "correct": true
        },
        {
          "text": "晩発性皮膚ポルフィリン症",
          "correct": true
        },
        {
          "text": "クリオグロブリン血症性血管炎",
          "correct": true
        },
        {
          "text": "クローン病",
          "correct": false
        },
        {
          "text": "悪性リンパ腫（B細胞性非ホジキンリンパ腫）",
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
      "content": "非アルコール性脂肪肝炎(NASH)の病理組織所見として、典型的でないものを1つ選べ。",
      "choices": [
        {
          "text": "線維化",
          "correct": false
        },
        {
          "text": "肝細胞の風船様膨化",
          "correct": false
        },
        {
          "text": "ロゼット形成",
          "correct": true
        },
        {
          "text": "肝細胞の脂肪変性（大滴性）",
          "correct": false
        },
        {
          "text": "炎症細胞浸潤",
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
      "content": "ヘリコバクター・ピロリ菌感染に関連する疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胃・十二指腸潰瘍",
          "correct": true
        },
        {
          "text": "食道癌（扁平上皮癌）",
          "correct": false
        },
        {
          "text": "特発性血小板減少性紫斑病(ITP)",
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
      "content": "EBウイルス(EBV)に関連する疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "上咽頭癌",
          "correct": true
        },
        {
          "text": "伝染性単核球症",
          "correct": true
        },
        {
          "text": "胃癌（の一部）",
          "correct": true
        },
        {
          "text": "血球貪食性リンパ組織球症",
          "correct": true
        },
        {
          "text": "肝細胞癌",
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
      "content": "胃酸分泌を促進する因子について、各選択肢の正誤を答えよ。",
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
      "content": "ガドリニウム造影MRIを実施する際に、注意すべき合併症や既往歴について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "高度な腎障害（腎性全身性線維症のリスク）",
          "correct": true
        },
        {
          "text": "腹水貯留",
          "correct": false
        },
        {
          "text": "肝障害",
          "correct": false
        },
        {
          "text": "血小板減少",
          "correct": false
        },
        {
          "text": "気管支喘息の既往（非イオン性ヨード造影剤に比べリスクは低いが注意は必要）",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器内科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 2,
      "content": "腹部診察におけるTraube三角（胃泡鼓音界）を構成するランドマークについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肝臓左葉下縁",
          "correct": true
        },
        {
          "text": "脾臓",
          "correct": true
        },
        {
          "text": "左前腋窩線",
          "correct": false
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
      "content": "急性虫垂炎の身体所見に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "McBurney点やLanz点の圧痛は、壁側腹膜への炎症の波及を示す体性痛である。",
          "correct": true
        },
        {
          "text": "Rovsing徴候は、左下腹部の圧迫により右下腹部に痛みが生じる現象である。",
          "correct": true
        },
        {
          "text": "Psoas徴候（腰筋徴候）は、炎症が後腹膜の腸腰筋に及んだときに陽性となる。",
          "correct": true
        },
        {
          "text": "Rosenstein徴候は、仰臥位から左側臥位になることで右下腹部の圧痛が増強する所見である。",
          "correct": true
        },
        {
          "text": "Alvaradoスコアで7点以上の場合、急性虫垂炎の可能性が高いと判断し、画像診断を進める。",
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
      "content": "肝臓のGlisson鞘（グリソン鞘）に含まれる脈管について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "中心静脈",
          "correct": false
        },
        {
          "text": "小葉間胆管",
          "correct": true
        },
        {
          "text": "小葉間門脈枝",
          "correct": true
        },
        {
          "text": "小葉間動脈枝",
          "correct": true
        },
        {
          "text": "肝細胞索",
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
      "content": "薬剤性パーキンソン症候群を引き起こす可能性がある薬剤について、各選択肢の正誤を答えよ。",
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
      "content": "パーキンソン病において、運動症状に先行して見られる非運動症状について、各選択肢の正誤を答えよ。",
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
          "text": "レム睡眠行動異常症",
          "correct": true
        },
        {
          "text": "うつ症状",
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
      "content": "パーキンソン病の治療薬に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "レボドパの血中半減期は短く、約90～120分である。",
          "correct": true
        },
        {
          "text": "COMT阻害薬は、主に末梢でレボドパの分解を抑制する。",
          "correct": true
        },
        {
          "text": "MAO-B阻害薬は、主に中枢（脳内）でドパミンの分解を抑制する。",
          "correct": true
        },
        {
          "text": "ドパミンアゴニストの副作用として、衝動制御障害や幻覚がある。",
          "correct": true
        },
        {
          "text": "イストラデフィリンは、アデノシンA2A受容体拮抗薬である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 10,
      "content": "パーキンソン症候群を呈する疾患のうち、睡眠中の突然死のリスクが高い疾患を1つ選べ。",
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
          "text": "進行性核上性麻痺",
          "correct": false
        },
        {
          "text": "レビー小体型認知症",
          "correct": false
        },
        {
          "text": "大脳皮質基底核変性症",
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
      "content": "パーキンソン病の生涯有病率として、最も近いものを1つ選べ。",
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
          "text": "2-4%",
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
      "content": "パーキンソン病の非運動症状として、典型的でないものを1つ選べ。",
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
          "text": "REM睡眠行動異常症",
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
      "content": "パーキンソン病の病理に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "神経細胞内にみられるレビー小体は、αシヌクレインを主成分とする。",
          "correct": true
        },
        {
          "text": "中脳の黒質緻密部にレビー小体が沈着し、ドパミン神経細胞が脱落する。",
          "correct": true
        },
        {
          "text": "消化管のMeissner神経叢にもレビー小体が沈着することが知られている。",
          "correct": true
        },
        {
          "text": "Braak仮説では、病変が迷走神経背側核や嗅球から始まり、脳幹を経て大脳皮質へ上行性に進展するとされる。",
          "correct": true
        },
        {
          "text": "網膜にもレビー小体が沈着することがある。",
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
      "content": "脳梗塞急性期のt-PA静注療法（アルテプラーゼ）の禁忌事項について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症時刻が特定できない場合（Wake-up strokeなど）。",
          "correct": true
        },
        {
          "text": "過去3ヶ月以内の消化管出血。",
          "correct": true
        },
        {
          "text": "大動脈解離が合併している場合。",
          "correct": true
        },
        {
          "text": "ワルファリン内服中でPT-INRが1.7を超えている場合。",
          "correct": true
        },
        {
          "text": "血糖値が50mg/dL未満の場合（ただし、補正後に症状が改善しない場合は投与を検討）。",
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
      "content": "t-PA静注療法の禁忌に該当するものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血糖値 350mg/dL",
          "correct": false
        },
        {
          "text": "血小板数 8万/μL",
          "correct": true
        },
        {
          "text": "PT-INR 1.5",
          "correct": false
        },
        {
          "text": "収縮期血圧 190mmHg（降圧療法で185mmHg未満にコントロールできない場合）",
          "correct": true
        },
        {
          "text": "NIHSSスコア 9点",
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
      "content": "t-PA静注療法の禁忌に該当しないものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "低血糖を補正し、血糖値が70mg/dLになった。",
          "correct": true
        },
        {
          "text": "30日前の消化管出血",
          "correct": false
        },
        {
          "text": "急性膵炎の合併",
          "correct": true
        },
        {
          "text": "PT-INR > 1.7",
          "correct": false
        },
        {
          "text": "過去の非外傷性頭蓋内出血の既往",
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
      "content": "t-PA静注療法に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症から4.5時間以内であれば投与可能である。",
          "correct": true
        },
        {
          "text": "発症時期が不明な場合は、原則として投与禁忌である。",
          "correct": true
        },
        {
          "text": "血糖値が70mg/dLであれば投与可能である。",
          "correct": true
        },
        {
          "text": "30日以内の消化管出血は投与禁忌である。",
          "correct": true
        },
        {
          "text": "ワルファリン内服中でPT-INRが2.0であれば投与禁忌である。",
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
      "content": "80代女性。午前9時に右片麻痺、失語症を発症し搬送。高血圧、脂質異常症、心房細動の既往あり。血圧195mmHg、心拍数80/分不整。頭部CTで異常なし、MRI拡散強調画像で左中大脳動脈領域に高信号域、MRAで同動脈の閉塞を認める。発症3時間以内。まず行うべき治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "機械的血栓回収療法",
          "correct": true
        },
        {
          "text": "ヘパリン持続静注",
          "correct": false
        },
        {
          "text": "t-PA投与のための降圧療法",
          "correct": true
        },
        {
          "text": "rt-PA静注療法",
          "correct": true
        },
        {
          "text": "詳細な病歴聴取と適応・禁忌の確認",
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
      "content": "視神経脊髄炎(NMOSD)よりも多発性硬化症(MS)を示唆する所見を1つ選べ。",
      "choices": [
        {
          "text": "延髄最後野病変（難治性しゃっくり・嘔吐）",
          "correct": false
        },
        {
          "text": "側脳室周囲の卵円形白質病変（Dawson's finger）",
          "correct": true
        },
        {
          "text": "抗アクアポリン4(AQP4)抗体陽性",
          "correct": false
        },
        {
          "text": "3椎体以上に及ぶ脊髄長大病変",
          "correct": false
        },
        {
          "text": "ステロイド抵抗性の重篤な視神経炎",
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
      "content": "多発性硬化症(MS)に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗AQP4抗体が陽性となる。",
          "correct": false
        },
        {
          "text": "髄液検査でオリゴクローナルバンドが陽性となる。",
          "correct": true
        },
        {
          "text": "再発予防の基本治療はステロイドの長期投与である。",
          "correct": false
        },
        {
          "text": "頭部MRIのガドリニウム造影で、活動性病変はopen ring状に増強されることがある。",
          "correct": true
        },
        {
          "text": "病変は脳室周囲には見られない。",
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
      "content": "多発性硬化症(MS)に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "抗AQP4抗体が陽性となることがある。",
          "correct": false
        },
        {
          "text": "髄液検査でオリゴクローナルバンドが陽性となる。",
          "correct": true
        },
        {
          "text": "頭部MRIのガドリニウム造影で、活動性病変はopen ring状に増強されることがある。",
          "correct": true
        },
        {
          "text": "ステロイドの長期投与は再発予防に有効である。",
          "correct": false
        },
        {
          "text": "脳室周囲の病変はまれである。",
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
      "content": "右半球（劣位半球）損傷でみられる高次脳機能障害について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "半側空間無視",
          "correct": true
        },
        {
          "text": "観念運動失行",
          "correct": false
        },
        {
          "text": "左右失認（Gerstmann症候群の一症状）",
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
      "content": "聴覚的理解は良好で、発話は流暢であるが、復唱が著しく障害される失語のタイプはどれか。",
      "choices": [
        {
          "text": "超皮質性運動失語",
          "correct": false
        },
        {
          "text": "Wernicke失語",
          "correct": false
        },
        {
          "text": "Broca失語",
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
      "content": "以下の疾患のうち、一般的に男性に多いとされるものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "筋萎縮性側索硬化症(ALS)",
          "correct": true
        },
        {
          "text": "多発性硬化症",
          "correct": false
        },
        {
          "text": "重症筋無力症",
          "correct": false
        },
        {
          "text": "甲状腺中毒性周期性四肢麻痺",
          "correct": true
        },
        {
          "text": "球脊髄性筋萎縮症（Kennedy病）",
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
      "content": "上肢よりも下肢に優位な麻痺が出現する病態について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "Broca失語をきたす病変",
          "correct": false
        },
        {
          "text": "中大脳動脈主幹部閉塞",
          "correct": false
        },
        {
          "text": "大脳鎌髄膜腫",
          "correct": true
        },
        {
          "text": "前大脳動脈領域の梗塞",
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
      "content": "てんかんに関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "有病率は約100人に1人である。",
          "correct": true
        },
        {
          "text": "診断されると、自動車運転免許は永久に取得できない。",
          "correct": false
        },
        {
          "text": "治療目標は、まず2～3年間発作がない状態を維持することである。",
          "correct": true
        },
        {
          "text": "発作間欠期の脳波検査では、ほぼ全例でてんかん性異常波が見られる。",
          "correct": false
        },
        {
          "text": "自立支援医療（精神通院医療）による公費補助の対象となる。",
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
      "content": "IgA腎症に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "日本における原発性糸球体腎炎の中で最も頻度が高い。",
          "correct": true
        },
        {
          "text": "罹患率には人種差・地域差がある。",
          "correct": true
        },
        {
          "text": "病因の一つとして、IgA1分子のヒンジ部における糖鎖修飾異常が考えられている。",
          "correct": true
        },
        {
          "text": "予後予測と治療選択のために、腎生検による病理組織学的重症度分類が有用である。",
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
      "content": "下肢の紫斑、腹痛、関節痛、腎障害を主訴とする患者。本症例（IgA血管炎/ヘノッホ・シェーンライン紫斑病）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "重症の腎症に対しては、ステロイドパルス療法や免疫抑制薬が考慮される。",
          "correct": true
        },
        {
          "text": "腎生検では、IgA腎症と類似したメサンギウム領域へのIgA沈着を認める。",
          "correct": true
        },
        {
          "text": "成人よりも小児に好発する。",
          "correct": true
        },
        {
          "text": "診断のために皮膚生検が行われ、細血管壁へのIgA沈着が証明されることがある。",
          "correct": true
        },
        {
          "text": "紫斑、腹痛、腎症の3主徴は、必ずしも全例で同時に揃うわけではない。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "腎臓内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 18,
      "content": "半月体形成性急速進行性糸球体腎炎（RPGN）に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "治療の基本は、ステロイドと免疫抑制薬の併用療法である。",
          "correct": true
        },
        {
          "text": "本邦では、PR3-ANCA関連腎炎よりもMPO-ANCA関連腎炎の方が多い。",
          "correct": true
        },
        {
          "text": "全身性血管炎の一環であることが多いため、肺などの他臓器病変の検索が必要である。",
          "correct": true
        },
        {
          "text": "高齢者に好発する。",
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
      "content": "咳、血痰、および腎機能障害で受診した患者。MPO-ANCA陽性。本症例（顕微鏡的多発血管炎などANCA関連血管炎を想定）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胸部X線やCTで、肺胞出血や間質性肺炎の所見を認めることがある。",
          "correct": true
        },
        {
          "text": "腎機能が急速に悪化する可能性がある（急速進行性糸球体腎炎）。",
          "correct": true
        },
        {
          "text": "尿検査で、血尿および蛋白尿が陽性となる。",
          "correct": true
        },
        {
          "text": "治療としてステロイドや免疫抑制薬の投与を考慮する。",
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
      "content": "微小変化型ネフローゼ症候群に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "光学顕微鏡では糸球体に著変を認めないが、電子顕微鏡で足突起の広範な癒合がみられる。",
          "correct": true
        },
        {
          "text": "尿蛋白の選択性が高い（アルブミンが主体）。",
          "correct": true
        },
        {
          "text": "しばしば急性腎不全を合併する。",
          "correct": true
        },
        {
          "text": "多くはステロイド治療によく反応する。",
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
      "content": "17歳男性。健診で腎機能低下を指摘。兄が血液透析中。本人は感音難聴と水晶体異常を指摘されている。腎生検では糸球体基底膜の菲薄化や多層化を認めた。本疾患（Alport症候群）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "原因遺伝子はIV型コラーゲンのα5鎖(COL4A5)の異常が最も多い。",
          "correct": true
        },
        {
          "text": "X連鎖型の遺伝形式をとる場合、男性は女性より重症化し、末期腎不全に至るリスクが高い。",
          "correct": true
        },
        {
          "text": "電子顕微鏡所見で、糸球体基底膜の菲薄化や緻密層の網目状構造（basket-weave像）を認める。",
          "correct": true
        },
        {
          "text": "感音難聴を伴うことが多い。",
          "correct": true
        },
        {
          "text": "心筋障害を伴うことはまれである。",
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
      "content": "糖尿病性腎症が進行し、eGFRが11 mL/min/1.73m2となった患者。腎代替療法（RRT）の導入を検討する。この際の選択肢と準備について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血液透析を選択する場合、バスキュラーアクセスとして内シャントの造設術を計画する。",
          "correct": true
        },
        {
          "text": "腎移植において、ABO血液型不適合でも移植は可能である。",
          "correct": true
        },
        {
          "text": "透析導入前に、生体腎移植や献腎移植の登録（先行的腎移植）を行うことが可能である。",
          "correct": true
        },
        {
          "text": "糖尿病患者は、腹膜透析の良い適応とならない。",
          "correct": false
        },
        {
          "text": "CKDステージG5であり、腎代替療法の検討と準備を開始すべき時期である。",
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
      "content": "70代男性。大腸癌に対し化学療法中。最近、浮腫と高血圧が出現。尿蛋白/Cr比 4.8 g/gCr、血清アルブミン2.5g/dL、血清クレアチニン3.5mg/dL。本症例について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "以前のデータと比較してクレアチニンが急上昇しており、急性腎障害(AKI)の状態である。",
          "correct": true
        },
        {
          "text": "高度蛋白尿と低アルブミン血症から、ネフローゼ症候群を呈している。",
          "correct": true
        },
        {
          "text": "原因薬剤として、VEGF阻害薬などが考えられる。",
          "correct": true
        },
        {
          "text": "原因と考えられる化学療法は、直ちに中止または変更を検討すべきである。",
          "correct": true
        },
        {
          "text": "現時点で直ちに透析を開始する必要がある。",
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
      "content": "低ナトリウム血症の鑑別診断を進める上で、有用な情報や検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "体液量の評価（浮腫の有無、頸静脈怒張、皮膚のツルゴールなど）",
          "correct": true
        },
        {
          "text": "偽性低Na血症の原因となる、高度な高脂血症や高蛋白血症の有無",
          "correct": true
        },
        {
          "text": "利尿薬などの原因薬剤の服薬歴",
          "correct": true
        },
        {
          "text": "尿浸透圧および尿中ナトリウム濃度の測定",
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
      "content": "56歳男性。冠動脈PCIの既往あり。最近、右足趾が黒く変色し疼痛を伴う。血液検査で好酸球増多と補体低値（C3 65, C4 12, CH50 10）を認める。本症例（コレステロール結晶塞栓症を想定）で見られる所見について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "補体価の低下",
          "correct": true
        },
        {
          "text": "造影剤のパッチテスト陽性",
          "correct": false
        },
        {
          "text": "血清IgEの高値",
          "correct": false
        },
        {
          "text": "ASO高値",
          "correct": false
        },
        {
          "text": "末梢血好酸球比率の上昇",
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
      "content": "高血圧、倦怠感、腎機能障害、肺水腫を呈する患者。高血圧性腎硬化症や心腎連関などを念頭に、原因精査のために行うべき検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心エコー検査",
          "correct": true
        },
        {
          "text": "下部消化管内視鏡検査",
          "correct": false
        },
        {
          "text": "腹部エコー検査（腎臓の大きさ、形態評価）",
          "correct": true
        },
        {
          "text": "眼底検査（高血圧性網膜症の評価）",
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
      "content": "IgA腎症でARB治療中の40代女性が、採血でK 6.0 mEq/Lと報告された。担当医がまず行うべき対応として適切なものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心電図をとり、テント状T波などの異常がないか確認する。",
          "correct": true
        },
        {
          "text": "心電図変化があれば、グルコン酸カルシウム静注やGI療法を準備する。",
          "correct": true
        },
        {
          "text": "患者の状態（脱力感、不整脈の自覚など）を確認する。",
          "correct": true
        },
        {
          "text": "溶血などによる偽性高カリウム血症の可能性を考え、再採血を検討する。",
          "correct": true
        },
        {
          "text": "重篤な心電図変化や症状がある場合は、緊急血液透析の準備を考慮する。",
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
      "content": "悪性リンパ腫に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "マントル細胞リンパ腫では、t(11;14)(q13;q32)転座によるサイクリンD1(BCL1)の過剰発現が見られる。",
          "correct": true
        },
        {
          "text": "t(14;18)(q32;q21)転座によるBCL2の過剰発現は、濾胞性リンパ腫に特徴的である。",
          "correct": true
        },
        {
          "text": "リツキシマブは、B細胞表面のCD20を標的としたモノクローナル抗体薬である。",
          "correct": true
        },
        {
          "text": "悪性リンパ腫の治療は、全例で化学療法が必須である。",
          "correct": false
        },
        {
          "text": "悪性リンパ腫の発症年齢のピークは30代である。",
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
      "content": "悪性リンパ腫に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "非ホジキンリンパ腫の発症年齢は、30代にピークがある。",
          "correct": false
        },
        {
          "text": "バーキットリンパ腫では、t(8;14)転座によるc-MYC遺伝子の活性化が特徴的である。",
          "correct": true
        },
        {
          "text": "リツキシマブは、B細胞表面のCD20を標的とする。",
          "correct": true
        },
        {
          "text": "悪性リンパ腫の組織型の分布には、人種や地域による差がない。",
          "correct": false
        },
        {
          "text": "一般的に、ホジキンリンパ腫は非ホジキンリンパ腫より予後不良である。",
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
      "content": "悪性リンパ腫および関連疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "HTLV-1の主な感染経路は、母乳による母子感染である。",
          "correct": true
        },
        {
          "text": "我が国における悪性リンパ腫の年齢調整罹患率は、増加傾向にある。",
          "correct": true
        },
        {
          "text": "ホジキンリンパ腫は非ホジキンリンパ腫に比べ、一般的に予後が良い。",
          "correct": true
        },
        {
          "text": "バーキットリンパ腫に特徴的な染色体異常t(8;14)(q24;q32)には、c-MYC遺伝子が関与する。",
          "correct": true
        },
        {
          "text": "全ての悪性リンパ腫に対して、診断後直ちに化学療法が開始される。",
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
      "content": "悪性リンパ腫に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "年齢調整罹患率は上昇傾向にある。",
          "correct": true
        },
        {
          "text": "発症年齢の中央値は、30代である。",
          "correct": false
        },
        {
          "text": "病変がリンパ節以外（節外）に生じることはまれである。",
          "correct": false
        },
        {
          "text": "悪性リンパ腫は、病型や病期に関わらず全例で化学療法の対象となる。",
          "correct": false
        },
        {
          "text": "リツキシマブは、CD20抗原を標的にしている。",
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
      "content": "悪性リンパ腫に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "世界的に見て、組織型ごとの発生頻度に地域差はない。",
          "correct": false
        },
        {
          "text": "t(14;18)転座は、濾胞性リンパ腫に特徴的である。",
          "correct": true
        },
        {
          "text": "肺に浸潤することがある。",
          "correct": true
        },
        {
          "text": "びまん性大細胞型B細胞リンパ腫の標準的な初回治療は、R-CHOP療法である。",
          "correct": true
        },
        {
          "text": "本邦での発症年齢の中央値は、60歳代後半である。",
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
      "content": "慢性骨髄性白血病(CML)の治療に用いられる分子標的薬（チロシンキナーゼ阻害薬）について、各選択肢の正誤を答えよ。",
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
      "content": "血液疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性前骨髄球性白血病(APL)の治療成績は著しく向上し、長期生存が可能である。",
          "correct": true
        },
        {
          "text": "イマチニブは、慢性骨髄性白血病(CML)の治療に使用される。",
          "correct": true
        },
        {
          "text": "典型的な溶血性貧血では、網赤血球は上昇し、MCVも上昇（大球性）することが多い。",
          "correct": true
        },
        {
          "text": "繰り返す関節内出血は、血友病など凝固因子異常症に特徴的である。",
          "correct": true
        },
        {
          "text": "凝固第II因子（プロトロンビン）の欠乏では、外因系と内因系の両方が障害されるため、PTとAPTTが共に延長する。",
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
      "content": "血液疾患の治療に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "限局期のホジキンリンパ腫は、治療により高い治癒率が期待できる。",
          "correct": true
        },
        {
          "text": "成人T細胞白血病/リンパ腫(ATL)は、化学療法が効きにくく予後不良である。",
          "correct": true
        },
        {
          "text": "無症状の低悪性度濾胞性リンパ腫では、経過観察(watchful waiting)が選択されることがある。",
          "correct": true
        },
        {
          "text": "慢性骨髄性白血病(CML)の治療には、チロシンキナーゼ阻害薬が用いられる。",
          "correct": true
        },
        {
          "text": "急性骨髄性白血病(AML)の治療に、BCL-2阻害薬（ベネトクラクス）が用いられることがある。",
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
      "content": "急性骨髄性白血病(AML)で、予後良好群に分類される染色体・遺伝子異常について、各選択肢の正誤を答えよ。",
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
          "text": "inv(16)またはt(16;16)",
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
      "content": "60歳女性。AMLに対し寛解導入療法（イダルビシン＋シタラビン）中に発熱。WBC < 100/μL。本症例（発熱性好中球減少症）に対する初期対応として適切なものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "感染巣検索のための胸部X線検査",
          "correct": true
        },
        {
          "text": "G-CSF製剤の投与",
          "correct": true
        },
        {
          "text": "広域抗菌薬の経験的投与",
          "correct": true
        },
        {
          "text": "血液培養（2セット以上）の採取",
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
      "content": "血液疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "典型的な血管外溶血性貧血では、網赤血球は増加し、MCVも上昇することが多い。",
          "correct": true
        },
        {
          "text": "急性前骨髄球性白血病(APL)の治療に、レチノイン酸(ATRA)や亜ヒ酸が用いられる。",
          "correct": true
        },
        {
          "text": "若年の慢性期慢性骨髄性白血病(CML)の第一選択治療は、チロシンキナーゼ阻害薬である。",
          "correct": true
        },
        {
          "text": "濾胞性リンパ腫は、診断後ただちに化学療法を開始するとは限らない。",
          "correct": true
        },
        {
          "text": "血中にM蛋白が検出されても、多発性骨髄腫などの悪性疾患ではなく、MGUS（意義不明の単クローン性ガンマグロブリン血症）の場合がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液内科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 14,
      "content": "血液疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "慢性的な低酸素血症による二次性多血症では、血中エリスロポエチンは高値を示す。",
          "correct": true
        },
        {
          "text": "発作性夜間ヘモグロビン尿症(PNH)は、PIGA遺伝子の後天的な体細胞変異によって生じる。",
          "correct": true
        },
        {
          "text": "サラセミアは、ヘモグロビン鎖の合成障害による小球性貧血を呈する。",
          "correct": true
        },
        {
          "text": "悪性貧血は、壁細胞に対する自己抗体などによる内因子の欠乏が原因でビタミンB12の吸収が障害される自己免疫疾患である。",
          "correct": true
        },
        {
          "text": "血友病A（第VIII因子欠乏症）では、APTTは延長するが、PTは正常である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "血液内科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 35,
      "content": "抗菌薬と副作用の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "チエナム系・ピボキシル基を持つペネム系 - カルニチン欠乏による低血糖",
          "correct": true
        },
        {
          "text": "グリコペプチド系 - レッドパーソン症候群",
          "correct": true
        },
        {
          "text": "アミノグリコシド系 - 第8脳神経障害（聴器・平衡器毒性）、腎毒性",
          "correct": true
        },
        {
          "text": "テトラサイクリン系 - 歯牙黄染",
          "correct": true
        },
        {
          "text": "クロラムフェニコール - グレイ症候群",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "感染症科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 40,
      "content": "現在、有効な予防ワクチンが存在するウイルスについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヒトパピローマウイルス (HPV)",
          "correct": true
        },
        {
          "text": "C型肝炎ウイルス (HCV)",
          "correct": false
        },
        {
          "text": "単純ヘルペスウイルス (HSV)",
          "correct": false
        },
        {
          "text": "サイトメガロウイルス (CMV)",
          "correct": false
        },
        {
          "text": "風疹ウイルス",
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
      "content": "血液疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "典型的な血管外溶血性貧血では、網赤血球は増加し、MCVも上昇することが多い。",
          "correct": true
        },
        {
          "text": "急性前骨髄球性白血病(APL)の治療に、レチノイン酸(ATRA)や亜ヒ酸が用いられる。",
          "correct": true
        },
        {
          "text": "若年の慢性期慢性骨髄性白血病(CML)の第一選択治療は、チロシンキナーゼ阻害薬である。",
          "correct": true
        },
        {
          "text": "濾胞性リンパ腫は、診断後ただちに化学療法を開始するとは限らない。",
          "correct": true
        },
        {
          "text": "血中にM蛋白が検出されても、多発性骨髄腫などの悪性疾患ではなく、MGUS（意義不明の単クローン性ガンマグロブリン血症）の場合がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "血液",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 12,
      "content": "疾患と症状・所見の正しい組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "多発血管炎性肉芽腫症 - 鞍鼻",
          "correct": true
        },
        {
          "text": "シェーグレン症候群 - 悪性高血圧",
          "correct": false
        },
        {
          "text": "限局性強皮症 - 肺高血圧症",
          "correct": true
        },
        {
          "text": "ベーチェット病 - 腸管穿孔",
          "correct": true
        },
        {
          "text": "成人スティル病 - 血球貪食症候群",
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
      "content": "心不全患者において、生命予後を改善する効果が証明されていない薬剤について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "硝酸薬",
          "correct": true
        },
        {
          "text": "SGLT2阻害薬",
          "correct": false
        },
        {
          "text": "ARNI（アンジオテンシン受容体ネプリライシン阻害薬）",
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
      "content": "心電図で前壁誘導(V2-V5)のST上昇を認める急性心筋梗塞患者の対応について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "治療方針決定のため、緊急心臓カテーテル検査（冠動脈造影）を行う。",
          "correct": true
        },
        {
          "text": "本邦の急性期再灌流療法では、血栓溶解療法よりも緊急PCIが優先される。",
          "correct": true
        },
        {
          "text": "責任血管は左前下行枝である可能性が高い。",
          "correct": true
        },
        {
          "text": "心エコーで前壁から側壁にかけての壁運動異常を認めることがある。",
          "correct": true
        },
        {
          "text": "アスピリン200mg程度を速やかに噛み砕いて内服させる。",
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
      "content": "糖尿病性腎症が進行し、eGFRが11 mL/min/1.73m2となった患者。腎代替療法（RRT）の導入を検討する。この際の選択肢と準備について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血液透析を選択する場合、バスキュラーアクセスとして内シャントの造設術を計画する。",
          "correct": true
        },
        {
          "text": "腎移植において、ABO血液型不適合でも移植は可能である。",
          "correct": true
        },
        {
          "text": "透析導入前に、生体腎移植や献腎移植の登録（先行的腎移植）を行うことが可能である。",
          "correct": true
        },
        {
          "text": "糖尿病患者は、腹膜透析の良い適応とならない。",
          "correct": false
        },
        {
          "text": "CKDステージG5であり、腎代替療法の検討と準備を開始すべき時期である。",
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
      "content": "半月体形成性急速進行性糸球体腎炎（RPGN）に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "治療の基本は、ステロイドと免疫抑制薬の併用療法である。",
          "correct": true
        },
        {
          "text": "本邦では、PR3-ANCA関連腎炎よりもMPO-ANCA関連腎炎の方が多い。",
          "correct": true
        },
        {
          "text": "全身性血管炎の一環であることが多いため、肺などの他臓器病変の検索が必要である。",
          "correct": true
        },
        {
          "text": "高齢者に好発する。",
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
      "content": "多発性硬化症(MS)に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "再発予防の基本治療はステロイドの長期投与である。",
          "correct": false
        },
        {
          "text": "頭部MRIのガドリニウム造影で、活動性病変はopen ring状に増強されることがある。",
          "correct": true
        },
        {
          "text": "病変は脳室周囲には見られない。",
          "correct": false
        },
        {
          "text": "髄液検査でオリゴクローナルバンドが陽性となる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "神経内科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 38,
      "content": "若年女性。甲状腺の自発痛、圧痛、腫大を認める。血液検査でFT4高値、TSH低値、赤沈亢進。超音波検査で疼痛部に一致した低エコー域を認める。本疾患（亜急性甲状腺炎）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "チアマゾール（抗甲状腺薬）が著効する。",
          "correct": false
        },
        {
          "text": "治療にステロイドを用いることがある。",
          "correct": true
        },
        {
          "text": "血中サイログロブリンが高値になる。",
          "correct": true
        },
        {
          "text": "動悸に対してβ遮断薬を用いることがある。",
          "correct": true
        },
        {
          "text": "甲状腺シンチグラフィで放射性ヨウ素の強い取り込みが見られる。",
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
      "content": "45歳男性。4日前からの口渇、多飲、多尿で受診。pH 7.19、BE -10mEq/L、尿ケトン体陽性。血糖値400mg/dL、HbA1c 6.9%。血中Cペプチドはほぼ検出されず。本症例（劇症1型糖尿病を想定）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠中に発症することはない。",
          "correct": false
        },
        {
          "text": "多くの症例で膵島関連自己抗体は陰性である。",
          "correct": true
        },
        {
          "text": "膵外分泌酵素（アミラーゼ、リパーゼ）が高値を示すことが多い。",
          "correct": true
        },
        {
          "text": "治療の際には、血清カリウム値の変動に注意が必要である。",
          "correct": true
        },
        {
          "text": "GLP-1受容体作動薬は、注射薬が内服薬よりも効果が高い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "糖尿病内分泌内科",
      "source_file": "2022年 北野病院.json"
    }
  ]
}

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
