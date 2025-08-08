import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const sanShoData: DepartmentData = {
  "department": "産婦人科・小児科",
  "total_questions": 78,
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
      "question_number": 30,
      "content": "乳癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "DCISの部分切除後、放射線照射は必要ない。",
          "correct": false
        },
        {
          "text": "閉経後にはLHRHアゴニスト療法を行う。",
          "correct": false
        },
        {
          "text": "BCR1変異はトリプルネガティブ乳癌のリスクが高い。",
          "correct": true
        },
        {
          "text": "BCR2変異はfanconi貧血のリスクが高い。",
          "correct": true
        },
        {
          "text": "HBOCで乳がんと卵巣癌を比べると卵巣癌の方が発症年齢が若い。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "乳腺外科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 30,
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
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 25,
      "content": "浸潤乳管癌 stage1,2 において乳房温存術の適応除外としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "同側乳房内で離れた位置に多発するもの",
          "correct": true
        },
        {
          "text": "広範囲の枝状石灰化",
          "correct": true
        },
        {
          "text": "妊婦",
          "correct": true
        },
        {
          "text": "活動性膠原病",
          "correct": true
        },
        {
          "text": "腋窩リンパ節転移",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "乳腺外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 28,
      "content": "乳腺外科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "遺伝性乳がんの原因遺伝子は BRCA1/2のみである",
          "correct": false
        },
        {
          "text": "BRCA1/2 のコンパニオン診断薬としてオラパリブが承認されている",
          "correct": true
        },
        {
          "text": "家族性乳がん卵巣がん症候群の卵巣癌に対する医学的介入はサーベイランスが基本?みたいな",
          "correct": true
        },
        {
          "text": "BRCA1/2 が原因となる他の腫瘍に脳腫瘍と腎細胞癌",
          "correct": false
        },
        {
          "text": "遺伝は1/2の確率で起こる",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "乳腺外科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 40,
      "content": "HBOC について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "原因として代表的なのは BRCA1/2",
          "correct": true
        },
        {
          "text": "BRCA は DNA 二本鎖切断相同組み換え修復に異常",
          "correct": true
        },
        {
          "text": "卵巣癌全体の20~25%に BRCA 変異がある",
          "correct": true
        },
        {
          "text": "BRCA 変異は他に大腸癌、胃がんで見られる",
          "correct": false
        },
        {
          "text": "HBOC へのリスク低減付属器切除で発症リスクが80%減",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 37,
      "content": "子宮内膜症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "卵巣癌発症のリスク因子となる。",
          "correct": true
        },
        {
          "text": "卵巣子宮内膜症性嚢胞の内容液は、MRIのT2強調画像で低信号(shading)を示す。",
          "correct": true
        },
        {
          "text": "不妊症の原因となる。",
          "correct": true
        },
        {
          "text": "確定診断は臨床所見、血液検査、画像検査を組み合わせることで可能である。",
          "correct": false
        },
        {
          "text": "卵巣子宮内膜症性嚢胞核出術後の再発率は極めて低い。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 40,
      "content": "26歳の女性。4年前から月経時下腹部痛があり、月経中の最初の1～2日は寝込んでしまう。性交痛もある。子宮は後傾後屈で表面は平滑、移動痛を伴う。卵巣は鵞卵大で、可動性はない。Douglas窩に硬結を触知する。考えられる疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮内膜症",
          "correct": true
        },
        {
          "text": "子宮筋腫",
          "correct": false
        },
        {
          "text": "子宮頸癌",
          "correct": false
        },
        {
          "text": "子宮体癌",
          "correct": false
        },
        {
          "text": "骨盤内感染症",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 39,
      "content": "卵巣腫瘍について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "性策間質性腫瘍の1つの組織型としてブレンナー腫瘍がある。",
          "correct": true
        },
        {
          "text": "性策間質性腫瘍の中にはホルモンを産生する腫瘍がある。",
          "correct": true
        },
        {
          "text": "漿液性癌の病理組織像では砂粒小体が特徴的である。",
          "correct": true
        },
        {
          "text": "胚細胞腫瘍の中で最も高頻度なものはディスジャーミノーマである。",
          "correct": false
        },
        {
          "text": "未熟奇形種Grade3は予後良好と推定される。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 42,
      "content": "子宮体癌と卵巣癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮体癌は日本では減少傾向にある。",
          "correct": false
        },
        {
          "text": "子宮体癌はMSIがhighの割合が比較的高い。",
          "correct": true
        },
        {
          "text": "卵巣癌の患者はHBOCの遺伝子検査の保険適応がある?",
          "correct": true
        },
        {
          "text": "卵巣癌の初回治療後の維持にPARP阻害薬が用いられる。",
          "correct": true
        },
        {
          "text": "再発卵巣癌でニボルマブが奏功する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "婦人科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 38,
      "content": "HPV感染とワクチンについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "高リスクHPVが持続感染するのは1%未満である。",
          "correct": true
        },
        {
          "text": "HPVワクチンは子宮頸部異形性の治療にも用いられる。",
          "correct": false
        },
        {
          "text": "同時に硬性下疳を予防するワクチンもある。",
          "correct": false
        },
        {
          "text": "HPVワクチンの推奨される接種年齢は15～18歳である。",
          "correct": false
        },
        {
          "text": "HPVワクチンは男性に対する投与も有効と考えられる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 39,
      "content": "子宮頸がんの原因であるヒトパピローマウイルスを予防するワクチンについて、現在日本で保険適応となっているものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "2価",
          "correct": true
        },
        {
          "text": "4価",
          "correct": true
        },
        {
          "text": "6価",
          "correct": false
        },
        {
          "text": "7価",
          "correct": false
        },
        {
          "text": "9価",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 39,
      "content": "子宮頸癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "罹患率は60~70代が最多",
          "correct": false
        },
        {
          "text": "組織型は扁平上皮癌50%、腺癌 25%",
          "correct": false
        },
        {
          "text": "HPV が発症にどう寄与するか",
          "correct": true
        },
        {
          "text": "HPV ウイルスの内高リスクなのは 16.18.33",
          "correct": true
        },
        {
          "text": "HPVワクチンでは2価、4価、9価が日本で承認されている",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 41,
      "content": "子宮頸癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "50歳代に発症のピークがある",
          "correct": false
        },
        {
          "text": "非HPVの子宮頸癌の最大の原因はLynch症候群である",
          "correct": false
        },
        {
          "text": "PARPで維持療法",
          "correct": false
        },
        {
          "text": "再発高リスクは深筋層浸潤、脈管侵襲、リンパ節転移である",
          "correct": true
        },
        {
          "text": "術後再発は骨盤臓腑除去術が第一選択である",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "婦人科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 39,
      "content": "子宮体癌に関する問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "第II期の子宮頸癌？には手術療法と化学放射線療法のどちらも適応である",
          "correct": true
        },
        {
          "text": "卵巣癌の方が患者数が多い",
          "correct": false
        },
        {
          "text": "発生学的に、女性の大陰唇と男性の陰嚢は同じである",
          "correct": true
        },
        {
          "text": "・・・的な選択肢",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 41,
      "content": "婦人科疾患に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮内膜異形増殖症では子宮体癌のリスクを増大させる",
          "correct": true
        },
        {
          "text": "HPV ワクチンは2価、4価、9価と分かれており、特に9価のワクチンでは子宮頸がんの原因ウィルスの80 から 90%を防ぐことができる",
          "correct": true
        },
        {
          "text": "卵巣癌は日本では漿液性→明細胞性→の順に多いが、アメリカとの違いは明細胞性が少ない",
          "correct": true
        },
        {
          "text": "卵巣がんは腹腔鏡での低侵襲の手術が主流になった",
          "correct": false
        },
        {
          "text": "エストロゲン非依存性の子宮体癌はタイプ2子宮体癌と呼ばれ、閉経後の女性に多い",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 40,
      "content": "エストロゲン製剤とプロゲステロン製剤投与で消退出血が起きないものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "副腎性性器症候群",
          "correct": false
        },
        {
          "text": "Turner症候群",
          "correct": false
        },
        {
          "text": "アンドロゲン不応症",
          "correct": true
        },
        {
          "text": "Kallman症候群",
          "correct": false
        },
        {
          "text": "単角子宮",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 42,
      "content": "ホルモン療法の禁忌とならないもの2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "乳癌",
          "correct": false
        },
        {
          "text": "喫煙",
          "correct": true
        },
        {
          "text": "肥満",
          "correct": true
        },
        {
          "text": "重度肝機能障害",
          "correct": false
        },
        {
          "text": "血栓症",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 38,
      "content": "女性のヘルスケアについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "低用量ピルは前兆のある片頭痛の女性には禁忌である。",
          "correct": true
        },
        {
          "text": "PCOS に対して排卵誘発には第1選択に黄体ホルモンを用いる",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 42,
      "content": "女性のヘルスケアに関して、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "思春期早発症では低身長防止のために偽閉経療法を行う。",
          "correct": true
        },
        {
          "text": "経口避妊薬の使用は将来の不妊症のリスクを上昇させる。",
          "correct": false
        },
        {
          "text": "女性の骨量は生理的に性成熟期に徐々に増大し、40歳頃に最大骨量を獲得する。",
          "correct": false
        },
        {
          "text": "排卵障害によるunopposed estrogen(拮抗されないエストロゲン)環境は卵巣癌発症のリスクを上昇させる。",
          "correct": true
        },
        {
          "text": "過度なダイエットやスポーツトレーニングなどによる体重減少は卵巣性無月経の原因となる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 42,
      "content": "産婦人科に関する記述について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "今年4月に経口妊娠中絶薬メフィーゴパックは保険適応になった、気軽に購入できる",
          "correct": false
        },
        {
          "text": "選択肢なし",
          "correct": null
        },
        {
          "text": "(避妊の器具:皮下インプラント)は日本で承認された",
          "correct": true
        },
        {
          "text": "PCOS(多嚢胞性卵巣症候群)の症状は月経不順、無月経、不妊、肥満、多毛などである。",
          "correct": true
        },
        {
          "text": "子宮のある更年期の女性では、更年期障害のホルモン補充療法は、エストロゲンのみ投与する",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 38,
      "content": "多嚢胞性卵巣症候群の診断において、有用でない所見について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "卵巣のネックレスサイン",
          "correct": false
        },
        {
          "text": "高PRL血症",
          "correct": true
        },
        {
          "text": "月経異常",
          "correct": false
        },
        {
          "text": "LH>7mIU/mL、LH>FSH",
          "correct": false
        },
        {
          "text": "血中テストステロン高値",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 37,
      "content": "成人女性の骨盤内解剖所見について、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "女性の内性器(子宮、卵巣)は、卵巣提索と基靭帯の中を通る血管により栄養される。",
          "correct": false
        },
        {
          "text": "子宮動脈は内腸骨動脈より分岐する。",
          "correct": true
        },
        {
          "text": "子宮頸部のレベルの子宮の支持組織は子宮円索、膀胱子宮靭帯、仙骨子宮靭帯である。",
          "correct": false
        },
        {
          "text": "右卵巣静脈は腎静脈へ合流する。",
          "correct": false
        },
        {
          "text": "子宮動脈、深部子宮静脈は後腹膜腔に存在する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 40,
      "content": "女性生殖器の解剖と血流について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮動脈は内腸骨動脈から分岐し、尿管の背側を通る",
          "correct": false
        },
        {
          "text": "卵巣静脈について、左卵巣静脈は下大静脈に、右卵巣静脈は右腎静脈に流入する",
          "correct": false
        },
        {
          "text": "子宮動脈は外子宮口の高さで分岐し、上部の分岐枝は子宮底、子宮円索、卵管、卵巣を栄養する",
          "correct": true
        },
        {
          "text": "卵巣動脈は大動脈から直接分岐",
          "correct": true
        },
        {
          "text": "膀胱子宮靭帯は膀胱後部と子宮頸部をつなぐ靭帯であり、前部と後部の2つに分かれ、その間に尿管が通る",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 41,
      "content": "妊娠中の血液検査データの変動を正しく述べているものについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血管抵抗が減少",
          "correct": true
        },
        {
          "text": "凝固能の亢進",
          "correct": true
        },
        {
          "text": "機能的残気量の増加",
          "correct": false
        },
        {
          "text": "糸球体濾過量が低下",
          "correct": false
        },
        {
          "text": "血中コルチゾールの上昇",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 42,
      "content": "産科的危機出血の対応としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血液型が不明の場合赤血球製剤はO型を用いる。",
          "correct": true
        },
        {
          "text": "血液型が不明の場合血小板液はAB型を用いる。",
          "correct": true
        },
        {
          "text": "血液型が不明の場合新鮮凍結血漿はO型を用いる。",
          "correct": false
        },
        {
          "text": "B型でクラスマッチを省略した赤血球輸血はO型を優先して用いる。",
          "correct": true
        },
        {
          "text": "AB型では赤血球輸血としてA型やB型も輸血できる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "産婦人科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 41,
      "content": "産科出血について、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "産科危機的出血と判断した際には、人を集めることが極めて重要である。",
          "correct": true
        },
        {
          "text": "分娩時異常出血の原因で最も多いのは弛緩出血である。",
          "correct": true
        },
        {
          "text": "産科危機的出血ではフィブリノゲン値を測定することが必要である。",
          "correct": true
        },
        {
          "text": "産科危機的出血では赤血球製剤だけでなく新鮮凍結血漿も投与する。",
          "correct": true
        },
        {
          "text": "産科危機的出血で異型輸血を行うことは絶対に避けるべきである。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 38,
      "content": "常位胎盤早期剥離について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "喫煙はリスクファクターにならない",
          "correct": false
        },
        {
          "text": "50%に妊娠糖尿病 or 高血圧を合併する(怪しい",
          "correct": true
        },
        {
          "text": "常位胎盤早期剥離の既往は常位胎盤早期剥離のリスクファクターとなる",
          "correct": true
        },
        {
          "text": "産科的 DICやショックの原因となる",
          "correct": true
        },
        {
          "text": "胎児機能不全は起こりにくい",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 37,
      "content": "双胎妊娠がリスクとなるのについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "流早産",
          "correct": true
        },
        {
          "text": "妊娠高血圧",
          "correct": true
        },
        {
          "text": "前置胎盤",
          "correct": true
        },
        {
          "text": "癒着胎盤",
          "correct": true
        },
        {
          "text": "胎児発育不全",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 38,
      "content": "双胎間輸血症候群について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "一絨毛膜二羊膜双胎の約10%に見られる。",
          "correct": true
        },
        {
          "text": "受血児は胎児水腫をきたすことがある。",
          "correct": true
        },
        {
          "text": "供血児は腎不全をきたすことがある。",
          "correct": true
        },
        {
          "text": "診断は胎児の体重の差で行う。",
          "correct": false
        },
        {
          "text": "胎児鏡手術の適応はない。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 39,
      "content": "羊水過多になるの。3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠糖尿病",
          "correct": true
        },
        {
          "text": "胎児機能不全",
          "correct": true
        },
        {
          "text": "食道閉鎖症",
          "correct": true
        },
        {
          "text": "腎無形成症",
          "correct": false
        },
        {
          "text": "無脳症",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 37,
      "content": "羊水過多症をきたす疾患としてについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠糖尿病",
          "correct": true
        },
        {
          "text": "妊娠高血圧症候群",
          "correct": false
        },
        {
          "text": "尿管閉鎖症",
          "correct": false
        },
        {
          "text": "無頭蓋症",
          "correct": true
        },
        {
          "text": "十二指腸閉鎖症",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 37,
      "content": "羊水過少症になるものはどれか3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "前期破水",
          "correct": true
        },
        {
          "text": "腎低形成",
          "correct": true
        },
        {
          "text": "胎盤機能不全",
          "correct": true
        },
        {
          "text": "横隔膜ヘルニア",
          "correct": false
        },
        {
          "text": "無脳症",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 37,
      "content": "CTG について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "基線は80~120 が正常",
          "correct": false
        },
        {
          "text": "早発一過性徐脈は児頭圧迫が原因で予後が悪い",
          "correct": false
        },
        {
          "text": "早発一過性頻脈は予後が良い(元気がいいみたいなニュアンス?)",
          "correct": true
        },
        {
          "text": "変動一過性徐脈は臍帯圧迫が原因である",
          "correct": true
        },
        {
          "text": "遅発一過性徐脈は胎児機能不全の可能性あり",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "産婦人科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 38,
      "content": "母体感染症について正しいものはどれか2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "サイトメガロウイルスは胎児発育不全の原因となる",
          "correct": true
        },
        {
          "text": "パルボウイルスは胎児多血の原因となる",
          "correct": false
        },
        {
          "text": "トキソプラズマは TORCH に含まれない",
          "correct": false
        },
        {
          "text": "水痘は TORCH に含まれる",
          "correct": true
        },
        {
          "text": "風疹は胎児感音難聴の原因になる",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 41,
      "content": "人工妊娠中絶について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠22週未満で適応である",
          "correct": true
        },
        {
          "text": "母体の経済的理由は適応にならない",
          "correct": false
        },
        {
          "text": "胎児異常が適応である",
          "correct": false
        },
        {
          "text": "人工妊娠中絶できる医師は都道府県医師会により認定される",
          "correct": true
        },
        {
          "text": "医者は届出をしなければならない",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "産婦人科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 39,
      "content": "産科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "死亡届…8週以降",
          "correct": false
        },
        {
          "text": "中絶…22週未満",
          "correct": true
        },
        {
          "text": "早産…37週未満",
          "correct": true
        },
        {
          "text": "予定日…40週",
          "correct": true
        },
        {
          "text": "周産期…生後28日以内",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 33,
      "content": "40週0日3000グラムで異常なく出生、生後24時間後中枢性無呼吸が出現しNICUに入院した。脈拍120、呼吸数40、SpO2 100/下肢、血圧70/40である。鑑別疾患と行う検査、お治療として正しい組み合わせを3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "複合型下垂体機能低下/ホルモン値測定/ホルモン療法",
          "correct": true
        },
        {
          "text": "薬剤中毒/母親の薬物歴/対症療法",
          "correct": true
        },
        {
          "text": "脳梗塞/MRI/薬による治療",
          "correct": true
        },
        {
          "text": "甲状腺機能低下症/CT/ホルモン補充",
          "correct": false
        },
        {
          "text": "両側下鼻腔閉塞/頭部CT/気道切開",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 33,
      "content": "生後2ヶ月の乳児が心肺停止状態で搬送された。医療スタッフは5名いる。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胸骨圧迫と人工呼吸は15:2でおこなう。",
          "correct": true
        },
        {
          "text": "高度気道確保後は人工呼吸を2～3秒に1回、胸骨圧迫とは独立しておこなう。",
          "correct": true
        },
        {
          "text": "静脈路確保は大腿静脈を第一選択とする。",
          "correct": false
        },
        {
          "text": "アドレナリンを静注する場合、0.1%製剤0.5mLを3～5分ごとに投与する。",
          "correct": false
        },
        {
          "text": "VFとpulseless VTの場合、初回は2J/kg、2回目以降は4J/kgで除細動を行う。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 31,
      "content": "気管挿管、人工呼吸管理中の新生児。突然のSp02低下が見られた。対応として正しいのを3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "持ち場を離れても人を呼びに行く",
          "correct": false
        },
        {
          "text": "計画外抜管を考え呼気二酸化炭素濃度を計測する。",
          "correct": true
        },
        {
          "text": "人工呼吸器の異常を考え、用手的マスク換気を行なう。",
          "correct": true
        },
        {
          "text": "胸部X線をとり、気胸を否定する。",
          "correct": true
        },
        {
          "text": "血液培養を行ない、感染症を否定する。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 36,
      "content": "生理的黄疸について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "生後24時間以内に出現する",
          "correct": false
        },
        {
          "text": "黄疸は腹部から出現する",
          "correct": false
        },
        {
          "text": "生後4,5日目にピークをむかえる",
          "correct": true
        },
        {
          "text": "肝臓や腸管の未熟性が原因である",
          "correct": true
        },
        {
          "text": "便は灰白色を示す",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 33,
      "content": "日齢3の女児、40週3100g 出生 異常とはいえない検査値3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "24時間での胎便排泄",
          "correct": true
        },
        {
          "text": "ビリルビン 12",
          "correct": true
        },
        {
          "text": "血圧110/75とか",
          "correct": false
        },
        {
          "text": "体重 2750g",
          "correct": true
        },
        {
          "text": "肝を右季肋部下に 1cm",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 32,
      "content": "妊娠 40w3000g で出生した新生児について12時間後の所見として異常なもの2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "排尿排便なし",
          "correct": true
        },
        {
          "text": "ビリルビン 10mg/dL",
          "correct": true
        },
        {
          "text": "ヘマトクリット 75%",
          "correct": true
        },
        {
          "text": "白血球18000",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 34,
      "content": "生後1日の小児について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "体重減少がみられる",
          "correct": true
        },
        {
          "text": "Moro反射がある",
          "correct": true
        },
        {
          "text": "母体由来のIgMがある",
          "correct": false
        },
        {
          "text": "噴門部の括約筋の肥厚がみられる",
          "correct": false
        },
        {
          "text": "黒緑色便",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 34,
      "content": "出生後の生理的な血行動態変化について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "動脈管は生後2-3週間で器質的に閉鎖する。",
          "correct": true
        },
        {
          "text": "生後肺動脈圧が上昇し、肺血流量が増大する。",
          "correct": false
        },
        {
          "text": "左心系の圧力up?",
          "correct": true
        },
        {
          "text": "末梢血管抵抗～",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 31,
      "content": "心房中隔欠損と心室中隔欠損について正しいものを3つ選びなさい。ただしいずれも Qp/Qs＝2とします。について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "心室中隔欠損は左房負荷がかかるので、呼吸障害が起きる。",
          "correct": true
        },
        {
          "text": "心房中隔欠損は左房負荷がかかるので、呼吸障害が起きる。",
          "correct": false
        },
        {
          "text": "どちらも時期を問わず、心内膜修復術を施行すべきである。",
          "correct": false
        },
        {
          "text": "心室中隔欠損では左房拡張機容積が130%になっている。",
          "correct": true
        },
        {
          "text": "心室中隔欠損では左→右負荷のため右室容量負荷がある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 33,
      "content": "肺血流量が増える疾患を3つ 1. VSD 2. ASD 3. 肺動脈閉鎖症 4. ファロー四徴候症 5. 大動脈縮窄複合について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "VSD",
          "correct": true
        },
        {
          "text": "ASD",
          "correct": true
        },
        {
          "text": "肺動脈閉鎖症",
          "correct": false
        },
        {
          "text": "ファロー四徴候症",
          "correct": false
        },
        {
          "text": "大動脈縮窄複合",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 33,
      "content": "VSDの問題について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "左室拡大とともに右室拡大",
          "correct": true
        },
        {
          "text": "欠損孔が閉鎖する場合、肺高血圧が治った後に容量負荷が治る",
          "correct": false
        },
        {
          "text": "ARを合併した場合に手術適応",
          "correct": true
        },
        {
          "text": "肺高血圧症、容量負荷がなくても運動、水分制限をする",
          "correct": false
        },
        {
          "text": "欠損孔が小さくても心内膜炎を予防する必要がある",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 35,
      "content": "左心低形成では右心系を電池、肺、冠、体血管系を流路とした並列回路と考えることができる。この時酸素供給量は体血管系循環量×酸素飽和度で簡略化できる。これを踏まえて正しい説明を3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "体循環量と肺循環量は相反関係にある。",
          "correct": true
        },
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "酸素飽和度75%で酸素供給量最大",
          "correct": true
        },
        {
          "text": "酸素飽和度 60",
          "correct": false
        },
        {
          "text": "酸素飽和度 90",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 35,
      "content": "腎芽腫について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児腎腫瘍中で最多である。",
          "correct": true
        },
        {
          "text": "10%が多発奇形症候群である。",
          "correct": true
        },
        {
          "text": "退形成型は予後良好である。",
          "correct": false
        },
        {
          "text": "予後が改善されてきており、腎温存が望まれる。",
          "correct": true
        },
        {
          "text": "肺転移を起こすことを想定して、胸部CTを取る。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 25,
      "content": "小児科について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "神経芽腫は年間約800例見られる",
          "correct": true
        },
        {
          "text": "神経芽腫では、VMA・HVAが特異度の高い腫瘍マーカーである",
          "correct": true
        },
        {
          "text": "神経芽腫の○○-MYCN変異はHigh risk例である",
          "correct": true
        },
        {
          "text": "Wilms腫瘍は5才未満で発症する",
          "correct": true
        },
        {
          "text": "肝芽腫ではPRETEXT分類を用いる",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 35,
      "content": "小児のAML に関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児においては AML よりも ALL の方が多い",
          "correct": true
        },
        {
          "text": "t(8:21)/RUNX1-RUNX1T1 融合遺伝子陽性なら骨髄中の芽球比率が 20%以下でも AML",
          "correct": true
        },
        {
          "text": "ダウン症に合併する AML は、5年生存率80%が期待される",
          "correct": true
        },
        {
          "text": "寛解導入療法と地固め両方の後、約1年ほどの維持療法を行う",
          "correct": false
        },
        {
          "text": "再発例に対して CAR-T 療法が奏功することがわかってきている",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 31,
      "content": "小児 ALL について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "B細胞性が8割",
          "correct": true
        },
        {
          "text": "T細胞性の方が予後悪くて中枢神経病変や縦隔病変多い",
          "correct": true
        },
        {
          "text": "成人 ALLと標準治療における生存率同じ",
          "correct": false
        },
        {
          "text": "一歳以下で予後不良因子のMLL 変異多い",
          "correct": true
        },
        {
          "text": "骨微小残存病変を組み込んだ治療方針が標準治療化されてきている",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 32,
      "content": "白血病治療中男児の発熱→敗血症ショック、SpO2 は 95% まず優先すべき治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "乳酸リンゲル 20ml/kgを60分で緩徐に",
          "correct": false
        },
        {
          "text": "抗生剤変更を上級医にコンサル",
          "correct": true
        },
        {
          "text": "血液培養とX線",
          "correct": true
        },
        {
          "text": "生食 20ml/kg を5-10分で",
          "correct": true
        },
        {
          "text": "酸素投与",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 32,
      "content": "A群溶血性レンサ球菌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "セフェム系が第一選択となる。",
          "correct": false
        },
        {
          "text": "皮膚の壊死性病変は起こりやすい。",
          "correct": true
        },
        {
          "text": "急性腎炎を発症する",
          "correct": true
        },
        {
          "text": "蜂窩織炎は稀である。",
          "correct": false
        },
        {
          "text": "妊婦に発症しやすい。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 32,
      "content": "川崎病について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "冠動脈瘤の形成を予防するために第14日目までに炎症を鎮静化させるのが目標である",
          "correct": true
        },
        {
          "text": "冠動脈瘤形成に対して免疫グロブリン大量療法を行う",
          "correct": true
        },
        {
          "text": "免疫グロブリン療法の治療不応例に対してインフリキシマブを使うことがある",
          "correct": true
        },
        {
          "text": "ステロイドは血栓症を引き起こすため使用しない",
          "correct": false
        },
        {
          "text": "アスピリンは禁忌である",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 31,
      "content": "ワクチンとその形態について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "5種ワクチン(DPT-IPV-Hib) - 不活化ワクチン",
          "correct": true
        },
        {
          "text": "BCG - 生ワクチン",
          "correct": true
        },
        {
          "text": "MRワクチン - 不活化ワクチン",
          "correct": false
        },
        {
          "text": "新型コロナウイルスワクチン - 生ワクチン",
          "correct": false
        },
        {
          "text": "肺炎球菌ワクチン - 不活化ワクチン",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 35,
      "content": "小児のアレルギーについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "乳児での罹患率が最も高い",
          "correct": true
        },
        {
          "text": "小児では甲殻類の方が鶏卵より治りやすい",
          "correct": false
        },
        {
          "text": "小児の三大アレルゲンは小麦牛乳卵",
          "correct": true
        },
        {
          "text": "耐用量をみるため経口負荷試験をする",
          "correct": true
        },
        {
          "text": "小児でもエピペン(自己アドレナリン注射)の適応がある",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "北野病院 2022年度.json"
    },
    {
      "question_number": 36,
      "content": "小児気管支喘息の長期管理について、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "週2～3回程度の発作が続く場合は、β2刺激薬の頓用を継続する。",
          "correct": false
        },
        {
          "text": "副腎皮質機能低下症を予防するため、ステロイド吸入後はうがいを実施する。",
          "correct": true
        },
        {
          "text": "ロイコトリエン受容体拮抗薬は、5歳以下の軽症持続型の第一選択となる。",
          "correct": true
        },
        {
          "text": "臨床症状と呼気中NOを合わせてコントロール状態を評価することが推奨される。",
          "correct": true
        },
        {
          "text": "喘息症状の改善後は、コントローラーは1週間程度で終了すればよい。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 31,
      "content": "IgA 腎症について 1. 肉眼的血尿で発覚することがある 2. 学校検尿で発覚することが多い 3. 高 IgA 血症をきたすことがある 4. 病理所見は膜性増殖性糸球体腎炎を呈する 5. 初期治療に免疫抑制剤を使用するについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肉眼的血尿で発覚することがある",
          "correct": true
        },
        {
          "text": "学校検尿で発覚することが多い",
          "correct": true
        },
        {
          "text": "高 IgA 血症をきたすことがある",
          "correct": true
        },
        {
          "text": "病理所見は膜性増殖性糸球体腎炎を呈する",
          "correct": false
        },
        {
          "text": "初期治療に免疫抑制剤を使用する",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 31,
      "content": "ネフローゼ症候群について当てはまるもの2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "溶連菌感染後に発症しやすい",
          "correct": false
        },
        {
          "text": "血尿、蛋白尿が出ることが多い",
          "correct": true
        },
        {
          "text": "高血圧をきたすことが多い",
          "correct": true
        },
        {
          "text": "不明な選択肢",
          "correct": null
        },
        {
          "text": "不明な選択肢",
          "correct": null
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 36,
      "content": "IgA 血管炎について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "大血管炎に分類される。",
          "correct": false
        },
        {
          "text": "皮膚、神経、腹部が三大症状",
          "correct": false
        },
        {
          "text": "腹部症状が他の症状に先行することがある",
          "correct": true
        },
        {
          "text": "腹部症状酷ければステロイド治療考慮",
          "correct": true
        },
        {
          "text": "腎炎の発生はまれなので腎スクリーニング不要",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 36,
      "content": "児童虐待について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "身体的虐待、心理的虐待、性的虐待の３つに分類される。",
          "correct": false
        },
        {
          "text": "(間違いの選択肢)",
          "correct": null
        },
        {
          "text": "医師は虐待と疑った場合、児童相談所に連絡しないといけないが、誤っていた場合罪に問われる。",
          "correct": false
        },
        {
          "text": "実父より実母のほうが起こしやすい。",
          "correct": true
        },
        {
          "text": "発育不良、低栄養の場合、虐待予備軍と考えるべきである。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 34,
      "content": "虐待について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "身体的虐待は必ずあざができるので見逃されにくい",
          "correct": false
        },
        {
          "text": "子供がドメスティックバイオレンスを目撃した場合でも心理的虐待になる",
          "correct": true
        },
        {
          "text": "病気なのに子供を病院に連れていかないのは『ネグレクト』になる",
          "correct": true
        },
        {
          "text": "乳幼児では性的虐待について考えなくてもよい",
          "correct": false
        },
        {
          "text": "虐待の確証がないのに医師が通告することは守秘義務に反する",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 35,
      "content": "小児虐待について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "本人からの訴えではよくわからないので、母親のみから話を聞いた。",
          "correct": false
        },
        {
          "text": "表面に外傷が見られなかったため、診察したのち帰宅させた。",
          "correct": false
        },
        {
          "text": "頭を打っていれば、第一に頭部CTを撮影する。",
          "correct": false
        },
        {
          "text": "傷害部位で骨折を認めたので全身骨X線を撮影した。",
          "correct": true
        },
        {
          "text": "隠れているところも含めて全身をくまなく診察する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 32,
      "content": "熱性けいれんの家族への説明として、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "世界的にみて、日本人は熱性けいれんを起こす頻度が低いです。",
          "correct": false
        },
        {
          "text": "熱性けいれんの有病率は1%ほどです。",
          "correct": false
        },
        {
          "text": "けいれんがおさまっても意識状態が悪い場合は急性脳症の可能性もあります。",
          "correct": true
        },
        {
          "text": "37℃後半の微熱でのけいれんは、非典型的です。",
          "correct": true
        },
        {
          "text": "熱性けいれんの約3人に1人はてんかんに移行します。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "2024年北野再現.json"
    },
    {
      "question_number": 34,
      "content": "ダウン症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "男児のほうが重症になりやすい。",
          "correct": false
        },
        {
          "text": "男女比は1:2である。",
          "correct": false
        },
        {
          "text": "22トリソミーである。",
          "correct": false
        },
        {
          "text": "甲状腺機能低下症になる確率が一般より高くなる。",
          "correct": true
        },
        {
          "text": "心奇形？になる確率が一般より高くなる。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2019,
      "original_category": "小児科",
      "source_file": "2020年度 北野病院.json"
    },
    {
      "question_number": 36,
      "content": "発達が遅れており小児科受診を勧めるもの2つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "3ヶ月で首が座ってない",
          "correct": false
        },
        {
          "text": "6か月で人見知りなし",
          "correct": true
        },
        {
          "text": "1歳半で一人歩きなし",
          "correct": true
        },
        {
          "text": "2歳で1語しか喋れない。",
          "correct": true
        },
        {
          "text": "3歳で四角形が書けない",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 34,
      "content": "ビタミン欠乏に関して 1. ビタミンB1欠乏症では TCA サイクルが回らなくなり乳酸やピルビン酸が増加する 2. ビタミンC欠乏症では出血傾向となり皮下出血や骨痛をきたす 3. ビタミンD欠乏症では腸からのカルシウム吸収が亢進し、骨の過成長をきたす 4. ビタミンK欠乏症では特定の凝固因子が増加し、脳梗塞をきたす 5. 鉄欠乏では大球性貧血をきたすについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ビタミンB1欠乏症では TCA サイクルが回らなくなり乳酸やピルビン酸が増加する",
          "correct": true
        },
        {
          "text": "ビタミンC欠乏症では出血傾向となり皮下出血や骨痛をきたす",
          "correct": true
        },
        {
          "text": "ビタミンD欠乏症では腸からのカルシウム吸収が亢進し、骨の過成長をきたす",
          "correct": false
        },
        {
          "text": "ビタミンK欠乏症では特定の凝固因子が増加し、脳梗塞をきたす",
          "correct": false
        },
        {
          "text": "鉄欠乏では大球性貧血をきたす",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 33,
      "content": "いちご状血管腫について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "皮膚だけでなく内臓にも発生する",
          "correct": true
        },
        {
          "text": "眼や耳の周りのものは積極的治療の対象である",
          "correct": true
        },
        {
          "text": "1:3 で男児に多い",
          "correct": false
        },
        {
          "text": "自然観察でも1年以内に消失することが多い",
          "correct": true
        },
        {
          "text": "手術やレーザー治療の他に β ブロッカーで治療することもある",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "小児科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 24,
      "content": "小児の急性陰嚢症について、について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "精巣捻転は乳児に多い。",
          "correct": true
        },
        {
          "text": "治療の基本は経過観察である。",
          "correct": false
        },
        {
          "text": "精巣捻転を機能温存したまま治療できるゴールデンタイム 12時間以内である。",
          "correct": false
        },
        {
          "text": "精巣垂捻転の徴候として、blue dot sign がある。",
          "correct": true
        },
        {
          "text": "精巣捻転には原則両側固定術を行う",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2024,
      "original_category": "小児科",
      "source_file": "北野 2023.json"
    },
    {
      "question_number": 1,
      "content": "IgA腎症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "肉眼的血尿で発覚することがある",
          "correct": true
        },
        {
          "text": "学校検尿で発覚することが多い",
          "correct": true
        },
        {
          "text": "高IgA血症をきたすことがある",
          "correct": true
        },
        {
          "text": "病理所見は膜性増殖性糸球体腎炎を呈する",
          "correct": false
        },
        {
          "text": "初期治療に免疫抑制剤を使用する",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 2,
      "content": "川崎病について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "冠動脈瘤の形成を予防するために第14日目までに炎症を鎮静化させるのが目標である",
          "correct": true
        },
        {
          "text": "冠動脈瘤形成に対して免疫グロブリン大量療法を行う",
          "correct": true
        },
        {
          "text": "免疫グロブリン療法の治療不応例に対してインフリキシマブを使うことがある",
          "correct": true
        },
        {
          "text": "ステロイドは血栓症を引き起こすため使用しない",
          "correct": false
        },
        {
          "text": "アスピリンは禁忌である",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 3,
      "content": "肺血流量が増える疾患を3つについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "VSD",
          "correct": true
        },
        {
          "text": "ASD",
          "correct": true
        },
        {
          "text": "肺動脈閉鎖症",
          "correct": false
        },
        {
          "text": "ファロー四徴候症",
          "correct": false
        },
        {
          "text": "大動脈縮窄複合",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 4,
      "content": "ビタミン欠乏に関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ビタミンB1欠乏症ではTCAサイクルが回らなくなり乳酸やピルビン酸が増加する",
          "correct": true
        },
        {
          "text": "ビタミンC欠乏症では出血傾向となり皮下出血や骨痛をきたす",
          "correct": true
        },
        {
          "text": "ビタミンD欠乏症では腸からのカルシウム吸収が亢進し、骨の過成長をきたす",
          "correct": false
        },
        {
          "text": "ビタミンK欠乏症では特定の凝固因子が増加し、脳梗塞をきたす",
          "correct": false
        },
        {
          "text": "鉄欠乏では大球性貧血をきたす",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 5,
      "content": "小児のAMLに関してについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児においては AML よりも ALL の方が多い",
          "correct": true
        },
        {
          "text": "t(8:21)/RUNX1-RUNX1T1融合遺伝子陽性なら骨髄中の芽球比率が20％以下でもAMLと診断する",
          "correct": true
        },
        {
          "text": "ダウン症に合併するAMLは、5年生存率80%が期待される",
          "correct": true
        },
        {
          "text": "寛解導入療法と地固め両方の後、約1年ほどの維持療法を行う",
          "correct": false
        },
        {
          "text": "再発例に対してCAR-T療法が奏功することがわかってきている",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 6,
      "content": "生理的黄疸について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "生後24時間以内に出現する",
          "correct": false
        },
        {
          "text": "黄疸は腹部から出現する",
          "correct": false
        },
        {
          "text": "生後4,5日目にピークをむかえる",
          "correct": true
        },
        {
          "text": "肝臓や腸管の未熟性が原因である",
          "correct": true
        },
        {
          "text": "便は灰白色を示す",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 45,
      "content": "女性のヘルスケアについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "片頭痛のある女性に対して低用量ピルは禁忌である。",
          "correct": true
        },
        {
          "text": "PCOSに対して排卵誘発には第1選択に黄体ホルモンを用いる",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 46,
      "content": "子宮頸癌・子宮体癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "第II期の子宮頸癌に対して化学放射線療法と手術療法のどちらも適応である",
          "correct": true
        },
        {
          "text": "第二期か第3期には手術か化学放射線療法の選択肢がある",
          "correct": true
        },
        {
          "text": "卵巣癌の方が患者数が多い",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2022年 北野病院.json"
    }
  ]
};
