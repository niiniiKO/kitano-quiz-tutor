import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const gekaData: DepartmentData = {
  "department": "外科",
  "total_questions": 31,
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
      "question_number": 29,
      "content": "肺癌の確定診断において有用な検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "喀痰細胞診",
          "correct": true
        },
        {
          "text": "喀痰培養",
          "correct": false
        },
        {
          "text": "経気管支肺生検",
          "correct": true
        },
        {
          "text": "胸部 CT",
          "correct": true
        },
        {
          "text": "ツベルクリン反応",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "呼吸器外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 22,
      "content": "肺癌の手術決定後に行うべき検査について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "頭部 CT MRI",
          "correct": true
        },
        {
          "text": "胸部CT",
          "correct": true
        },
        {
          "text": "PET",
          "correct": true
        },
        {
          "text": "呼吸機能検査",
          "correct": true
        },
        {
          "text": "心電図",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "呼吸器外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 22,
      "content": "肺癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "最も頻度が高いのは小細胞癌である。",
          "correct": false
        },
        {
          "text": "腺癌は中心性に発生し、肺炎のようは症状を呈することが多い。",
          "correct": false
        },
        {
          "text": "小細胞癌の治療の中心は放射線、化学療法である。",
          "correct": true
        },
        {
          "text": "血中pro-GRPは小細胞癌で高値を示すことが多い。",
          "correct": true
        },
        {
          "text": "一次予防の中心は禁煙である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 24,
      "content": "肺癌で手術適応とならないものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "悪性胸水を認める",
          "correct": true
        },
        {
          "text": "縦隔リンパ節転移を認める",
          "correct": false
        },
        {
          "text": "肺動脈に浸潤がある",
          "correct": false
        },
        {
          "text": "胸壁浸潤を認める",
          "correct": false
        },
        {
          "text": "肝転移を認める",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 22,
      "content": "気胸の問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "緊張性気胸は挿管して人工換気を行う。",
          "correct": false
        },
        {
          "text": "自然気胸は診断がつき次第手術になる。",
          "correct": false
        },
        {
          "text": "高度な気胸はドレナージを行い、急速に膨張させる。",
          "correct": false
        },
        {
          "text": "血気胸は緊急手術となることがある。",
          "correct": true
        },
        {
          "text": "両側気胸は手術適応である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 25,
      "content": "消化器外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胆嚢炎は早期手術で生命予後が良いというデータがあるため、全身状態不良の重症胆嚢炎もすぐ手術するべきである。",
          "correct": false
        },
        {
          "text": "大腸癌肝転移は3個 3cm 以下の単発 5cm までが手術適応である。",
          "correct": true
        },
        {
          "text": "胃がんの脾リンパ節郭清が必要な場合は脾摘も必要である。",
          "correct": true
        },
        {
          "text": "膵がん、上腸間膜動静脈にすこし浸潤してるのは切除可能境界(Borderline resectable)である。",
          "correct": true
        },
        {
          "text": "大腸癌ステージ3の術後は補助化学療法が推奨されている。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 21,
      "content": "消化管外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "早期胃癌に対する治療の適応は組織型によって異なる。",
          "correct": true
        },
        {
          "text": "大腸癌の遠隔転移で最も多い臓器は肝臓である。",
          "correct": true
        },
        {
          "text": "ICG試験15分値40%の患者において70%の肝切除となる右葉切除は安全に行うことができる。",
          "correct": false
        },
        {
          "text": "膵癌は、主要動脈(腹腔動脈、上腸間膜動脈など)や門脈との接触具合等によって可否を分類する。切除可能膵癌の切除後は補助化学療法なしで経過観察を行い、5年生存率(?)は60%程度である。",
          "correct": false
        },
        {
          "text": "致死性臓器障害を伴う重症急性胆嚢炎に対する治療として、早期の胆嚢摘出術が推奨されている。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 22,
      "content": "消化器外科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "急性胆嚢炎では 仰臥位で右季肋下部を圧迫すると呼気時に痛みが増強する。",
          "correct": true
        },
        {
          "text": "食道摘出、胆嚢摘出、肝細胞癌、胃切除(他何あったか忘れました)の中で腹腔鏡手術されることが1番少ないのが食道摘出",
          "correct": true
        },
        {
          "text": "虫垂炎で仰臥位と左側臥位では仰臥位の方が痛い、左側臥位で減弱",
          "correct": false
        },
        {
          "text": "膵臓がんの根治的切除後には化学療法を行う",
          "correct": true
        },
        {
          "text": "結腸癌術中に肝表面に肝転移が見つかった。エコーで肝転移は他には見当たらない。どちらも同時に手術で切除した",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "消化器外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 23,
      "content": "消化器外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胃体下部大湾側の4cm 大の GIST に対し、幽門側胃切除+所属リンパ節郭清を行う。",
          "correct": false
        },
        {
          "text": "発症後10時間以内の中等度以下で全身状態リスクも高くない急性胆嚢炎患者に対して早期の腹腔鏡下胆嚢摘出術を考慮する。",
          "correct": true
        },
        {
          "text": "膵体部に存在する、主膵管から 4mm 離れた部位にある、1cm 大のインスリノーマに対して腫瘍核出術を行う。",
          "correct": true
        },
        {
          "text": "1cm 大の肝転移を併発する直腸癌に対して手術を行わない。",
          "correct": false
        },
        {
          "text": "腸管穿孔による?汎発性腹膜炎を合併するs状結腸直腸癌に対してストマ造設をしない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "消化器外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 24,
      "content": "外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "全身状態が良く、リスクが中等度以下の胆嚢炎では腹腔鏡下胆嚢摘出術を行うべきである",
          "correct": true
        },
        {
          "text": "胸部食道癌に対する手術における再建術では大腸が第一選択となる。",
          "correct": false
        },
        {
          "text": "? (膵癌の問題)",
          "correct": null
        },
        {
          "text": "肝臓の外側区域に3cmの転移巣を有する大腸癌は手術の適応とはならない",
          "correct": false
        },
        {
          "text": "痩せ型の高齢女性で腸閉塞症状と大腿内側痛が見られる場合は大腿ヘルニアを強く疑う",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "外科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 25,
      "content": "消化器外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胃全摘後の食道がんの再建に大腸が用いられる。",
          "correct": true
        },
        {
          "text": "高齢のやせ型女性が腸閉塞と大腿部痛を訴えた場合、大腿ヘルニアを強く疑う。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 26,
      "content": "CABG で開通率がよく、よく使わられるものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "橈骨動脈",
          "correct": true
        },
        {
          "text": "内胸動脈",
          "correct": true
        },
        {
          "text": "大伏在静脈",
          "correct": false
        },
        {
          "text": "下腹壁動脈",
          "correct": true
        },
        {
          "text": "右体網動脈",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "心臓血管外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 26,
      "content": "冠動脈疾患の治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "PCIの治療が奏功した場合は抗血栓薬を中止することができる。",
          "correct": false
        },
        {
          "text": "狭窄が75％以上の症例は全てCABGを行う。",
          "correct": false
        },
        {
          "text": "左冠動脈主管部狭窄を伴う多枝病変(SYNTAX>33)ではCABGよりPCIの方が予後が良い。",
          "correct": false
        },
        {
          "text": "左前下行枝に対してのCABGに内胸動脈を使う。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 24,
      "content": "大動脈瘤破裂のリスクの高さについて、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "男性>女性",
          "correct": true
        },
        {
          "text": "血圧 120/60>140/90",
          "correct": false
        },
        {
          "text": "腹部 55mm>胸部 55mm",
          "correct": false
        },
        {
          "text": "囊状>紡錘状",
          "correct": true
        },
        {
          "text": "真性>仮性",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "心臓血管外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 23,
      "content": "下記に挙げる動脈のうち、胸部および腹部大動脈から直接分枝する動脈として誤っているものを1つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "左鎖骨下動脈",
          "correct": false
        },
        {
          "text": "腹腔動脈",
          "correct": false
        },
        {
          "text": "脾動脈",
          "correct": true
        },
        {
          "text": "上腸間膜動脈",
          "correct": false
        },
        {
          "text": "下腸間膜動脈",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 22,
      "content": "肥厚性幽門狭窄症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "生後すぐから嘔吐を認める。",
          "correct": false
        },
        {
          "text": "男児に多い。",
          "correct": true
        },
        {
          "text": "代謝性アルカローシスを認める。",
          "correct": true
        },
        {
          "text": "治療は幽門筋切除術を行う。",
          "correct": true
        },
        {
          "text": "遺伝的な要因が原因とされている。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 24,
      "content": "小児鼠径ヘルニアについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児外科疾患では急性虫垂炎に次いで多い。",
          "correct": true
        },
        {
          "text": "最近では腹腔鏡手術が施行される。",
          "correct": true
        },
        {
          "text": "陰嚢水腫との鑑別が重要である。",
          "correct": true
        },
        {
          "text": "手術で人工布を用いると予後良好である。",
          "correct": false
        },
        {
          "text": "低出生体重児に発症することが多い。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 29,
      "content": "小児のGERD について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児の GERD は積極的治療を行う必要がある。",
          "correct": false
        },
        {
          "text": "食道 pH24 時間モニタリングで、pH<4となる時間比が 2%以下ならば正常",
          "correct": true
        },
        {
          "text": "呼吸症状はまれ",
          "correct": false
        },
        {
          "text": "体位変換や制酸薬の投与などによる保存的療法を行う。",
          "correct": true
        },
        {
          "text": "Nissen 手術を行う。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 24,
      "content": "術式と疾患の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヒルシュ Posterior Sagittal Anorectoplasty",
          "correct": false
        },
        {
          "text": "十二指腸閉鎖 Kimura",
          "correct": true
        },
        {
          "text": "膀胱尿管逆流-Cohen",
          "correct": true
        },
        {
          "text": "食道狭窄-Nissen 法",
          "correct": false
        },
        {
          "text": "中間位鎖肛-",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 29,
      "content": "耳鼻咽喉科疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "メニエール病は反復するめまい発作、聴覚変動が特徴であるが、確定診断には蝸電図が必要である。",
          "correct": true
        },
        {
          "text": "外リンパ瘻の原因には耳かき損傷、鼻かみ、ダイビング、飛行機搭乗などである。",
          "correct": true
        },
        {
          "text": "頭頸部原発不明癌の診断には上咽頭粘膜のblind biopsyが必須であり、原発部位が判明してはじめて治療を開始する。",
          "correct": false
        },
        {
          "text": "甲状腺乳頭癌では甲状腺全摘術と適正な頸部リンパ節郭清によって治癒率が高まる。",
          "correct": true
        },
        {
          "text": "シェーグレン症候群にともなう耳下腺悪性リンパ腫の診断は、反復性耳下腺炎の併発により困難になりうる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "耳鼻咽喉科・頭頸部外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 23,
      "content": "耳鼻咽喉科・頭頚部外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "先天性聾に対する人工内耳術は、頭蓋骨が十分に発達した5歳以降に行うとよい。",
          "correct": false
        },
        {
          "text": "副鼻腔CTで一側性に上顎洞軟部組織が見られるならば、真菌・歯性・癌が鑑別に挙がる。",
          "correct": true
        },
        {
          "text": "末梢性めまいの鑑別診断で参考になるのは、めまいの持続時間や難聴の合併の有無が重要である。",
          "correct": true
        },
        {
          "text": "老人性難聴は両側性で、主に低音が障害される。",
          "correct": false
        },
        {
          "text": "耳下腺腫瘍で最も頻度が高いのは多型腺腫である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 23,
      "content": "耳鼻咽喉科・頭頸部外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "耳鳴りはストレスなどへの対処が qol 向上に大切である",
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
          "text": "頭頸部癌(上咽頭癌など？)は腺癌が多い",
          "correct": false
        },
        {
          "text": "甲状腺癌で過半数を占めるのは乳頭がんである",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "耳鼻咽喉科・頭頸部外科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 30,
      "content": "血栓回収療法について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血栓回収は発症後16時間以内がよい適応",
          "correct": true
        },
        {
          "text": "t-PA を実施した場合、血栓回収療法はできない",
          "correct": false
        },
        {
          "text": "血栓回収療法は6時間以内でなければ絶対にできない",
          "correct": false
        },
        {
          "text": "NIHSS6点以下の軽度な症例でも〜動脈本幹に血栓あれば慎重に適応判断",
          "correct": true
        },
        {
          "text": "中大脳動脈の水平脚以遠の梗塞は血栓回収の良い適応",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "脳外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 26,
      "content": "急性期脳梗塞に対するt-PA治療を行う上でについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症時刻不明だがMRI FLAIR画像で変化なしならt-PA治療を行うことを考慮しても良い。",
          "correct": true
        },
        {
          "text": "収縮期血圧200mmHgだが静注降圧薬でコントロールできたなら使用を検討する。",
          "correct": true
        },
        {
          "text": "大動脈解離を併発しているが脳主幹動脈閉塞が明らかなら使用を検討する。",
          "correct": false
        },
        {
          "text": "外傷性頭蓋内出血既往では禁忌である。",
          "correct": true
        },
        {
          "text": "t-PAの後病態に応じて速やかに抗血小板薬や抗凝固薬を投与する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 21,
      "content": "形成外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "耳下腺部での顔面神経の切断では、前額部の知覚障害が生じる。",
          "correct": false
        },
        {
          "text": "糖尿病患者の熱傷は、10の法則を用いて熱傷面積を計算する。",
          "correct": false
        },
        {
          "text": "眼窩吹き抜け(ブローアウト)骨折では、鼻血を伴うことが多い。",
          "correct": true
        },
        {
          "text": "口蓋裂手術の目的の一つは、構音障害(正しく発音できないこと)の改善である。",
          "correct": true
        },
        {
          "text": "一歳未満で植皮術を必要とする場合、両親からの採皮・移植をまず検討する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 25,
      "content": "乳房および乳腺疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "乳房は前胸壁の第2-6肋骨の領域にあり、胸骨傍リンパ節の多くは第1-3肋間に存在する。",
          "correct": true
        },
        {
          "text": "乳腺線維腫症は20～30代に多く、葉状腫瘍は30～40代に多い。",
          "correct": true
        },
        {
          "text": "最近の統計では乳癌の好発年齢には40代後半と60代後半のふたつのピークがある。",
          "correct": true
        },
        {
          "text": "血性乳頭分泌を認めた場合、約80%は乳癌である。",
          "correct": false
        },
        {
          "text": "BRCA2遺伝子の質的変異保持者は乳癌、卵巣癌以外にも腎臓癌や脳腫瘍の発症リスクが上昇する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "外科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 18,
      "content": "浸潤性乳管癌の、特殊型に小葉癌がある。それについて正しいものを2つ？について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特殊型の中で、粘液癌の次に多い。",
          "correct": true
        },
        {
          "text": "エストロゲン反応性？受容体に、、、？",
          "correct": null
        },
        {
          "text": "高齢女性？に多い？みたいな？",
          "correct": null
        },
        {
          "text": "多発？するみたいな？",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "乳腺",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 25,
      "content": "消化器外科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胆嚢炎は早期手術で生命予後が良いというデータがあるため、全身状態不良の重症胆嚢炎もすぐ手術するべきである。",
          "correct": false
        },
        {
          "text": "大腸癌肝転移は3個3cm以下の単発5cmまでが手術適応である。",
          "correct": true
        },
        {
          "text": "胃がんの脾リンパ節郭清が必要な場合は脾摘も必要である。",
          "correct": true
        },
        {
          "text": "膵がん、上腸間膜動静脈にすこし浸潤してるのは切除可能境界(Borderline resectable)である。",
          "correct": true
        },
        {
          "text": "大腸癌ステージ3の術後は補助化学療法が推奨されている。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "消化器外科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 26,
      "content": "術式と疾患の組み合わせについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ヒルシュ Posterior Sagittal Anorectoplasty",
          "correct": false
        },
        {
          "text": "十二指腸閉鎖 Kimura",
          "correct": true
        },
        {
          "text": "膀胱尿管逆流-Cohen",
          "correct": true
        },
        {
          "text": "食道狭窄-Nissen法",
          "correct": false
        },
        {
          "text": "中間位鎖肛-",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児外科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 27,
      "content": "気胸の問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "緊張性気胸は挿管して人工換気を行う。",
          "correct": false
        },
        {
          "text": "自然気胸は診断がつき次第手術になる。",
          "correct": false
        },
        {
          "text": "高度な気胸はドレナージを行い、急速に膨張させる。",
          "correct": false
        },
        {
          "text": "血気胸は緊急手術となることがある。",
          "correct": true
        },
        {
          "text": "両側気胸は手術適応である。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "呼吸器外科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 37,
      "content": "乳がんの特殊型である小葉がんについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特別な方の中では粘液ガンの次に多い",
          "correct": true
        },
        {
          "text": "ホルモン受容体陽性の割合がおおい",
          "correct": true
        },
        {
          "text": "ホルモン療法関係ない",
          "correct": false
        },
        {
          "text": "両側、多中心性で生じる。",
          "correct": true
        },
        {
          "text": "腹膜、卵巣、消化管に特殊な形で転移する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "乳腺外科",
      "source_file": "2022年 北野病院.json"
    }
  ]
};
