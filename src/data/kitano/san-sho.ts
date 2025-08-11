import { DepartmentData, makeQuestionId } from "@/types/quiz";

const baseSanShoData = {
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
          "text": "非浸潤性乳管癌(DCIS)の乳房部分切除後、再発予防のための放射線照射は原則として推奨される。",
          "correct": false
        },
        {
          "text": "閉経前のホルモン受容体陽性乳癌に対して、卵巣機能抑制のためにLHRHアゴニスト療法を行うことがある。",
          "correct": false
        },
        {
          "text": "BRCA1遺伝子変異はトリプルネガティブ乳癌のリスクが高い。",
          "correct": true
        },
        {
          "text": "BRCA2遺伝子変異があると、Fanconi貧血を発症するリスクがある。",
          "correct": true
        },
        {
          "text": "遺伝性乳癌卵巣癌症候群(HBOC)では、乳癌より卵巣癌の方が平均発症年齢が高い。",
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
      "content": "乳癌の特殊型である小葉癌について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "特殊型の中では粘液癌の次に多い。",
          "correct": true
        },
        {
          "text": "ホルモン受容体陽性の割合が高い。",
          "correct": true
        },
        {
          "text": "ホルモン療法の適応とならないことが多い。",
          "correct": false
        },
        {
          "text": "両側性、多中心性に発生する傾向がある。",
          "correct": true
        },
        {
          "text": "腹膜、卵巣、消化管などに特殊な形態で転移することがある。",
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
      "content": "浸潤性乳管癌 Stage I, II における乳房温存療法の適応とならないものを答えよ。",
      "choices": [
        {
          "text": "同側乳房内で離れた位置に多発する腫瘍",
          "correct": true
        },
        {
          "text": "広範囲な悪性石灰化を伴う腫瘍",
          "correct": true
        },
        {
          "text": "妊娠中の患者（放射線治療が禁忌のため）",
          "correct": true
        },
        {
          "text": "活動性の全身性エリテマトーデス（SLE）や強皮症などの膠原病（放射線感受性が高いため）",
          "correct": true
        },
        {
          "text": "腋窩リンパ節転移陽性",
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
      "content": "遺伝性乳癌卵巣癌症候群（HBOC）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "遺伝性乳癌の原因遺伝子はBRCA1/2以外にも、TP53、PTEN、ATMなど複数存在する。",
          "correct": false
        },
        {
          "text": "BRCA1/2遺伝子変異陽性癌に対する治療薬として、PARP阻害薬であるオラパリブが承認されている。",
          "correct": true
        },
        {
          "text": "HBOCにおける卵巣癌発症リスクに対し、リスク低減卵巣卵管切除術（RRSO）が強く推奨される。",
          "correct": false
        },
        {
          "text": "BRCA1/2遺伝子変異は、乳癌、卵巣癌の他に、膵臓癌や前立腺癌のリスクも上昇させる。",
          "correct": false
        },
        {
          "text": "原因遺伝子は常染色体優性遺伝形式をとり、親から子へ1/2の確率で受け継がれる。",
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
      "content": "遺伝性乳癌卵巣癌症候群（HBOC）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "原因遺伝子として最も代表的なものはBRCA1とBRCA2である。",
          "correct": true
        },
        {
          "text": "BRCA遺伝子は、DNAの二本鎖切断の相同組換え修復に関与している。",
          "correct": true
        },
        {
          "text": "卵巣癌全体の約15%にBRCA1/2遺伝子変異が見られる。",
          "correct": false
        },
        {
          "text": "BRCA遺伝子変異は、他に膵臓癌や前立腺癌のリスクを上昇させる。",
          "correct": false
        },
        {
          "text": "HBOC患者へのリスク低減卵巣卵管切除術（RRSO）により、卵巣癌の発症リスクが約96%減少する。",
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
          "text": "卵巣癌（特に明細胞癌、類内膜癌）の発症リスク因子となる。",
          "correct": true
        },
        {
          "text": "卵巣子宮内膜症性嚢胞（チョコレート嚢胞）の内容液は、MRIのT2強調画像で低信号（shading）を示すことがある。",
          "correct": true
        },
        {
          "text": "不妊症の主要な原因の一つである。",
          "correct": true
        },
        {
          "text": "確定診断は、腹腔鏡下での病変の視認と病理組織学的検査によって行われる。",
          "correct": false
        },
        {
          "text": "卵巣子宮内膜症性嚢胞摘出術後の再発率は比較的高く、薬物療法などを併用することがある。",
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
      "content": "26歳女性。4年前から月経困難症が強く、月経中の1〜2日は寝込むほどである。性交痛もある。内診にて子宮は後傾後屈で、圧痛と可動性低下を認める。ダグラス窩に硬結を触知する。最も考えられる疾患を答えよ。",
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
          "text": "骨盤内炎症性疾患（PID）",
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
          "text": "ブレンナー腫瘍は、表層上皮性・間質性腫瘍に分類される。",
          "correct": false
        },
        {
          "text": "性索間質性腫瘍の中には、ホルモン（エストロゲンやアンドロゲン）を産生するものがある。",
          "correct": true
        },
        {
          "text": "漿液性癌の病理組織像では、砂粒小体（Psammoma body）が特徴的に見られることがある。",
          "correct": true
        },
        {
          "text": "胚細胞腫瘍の中で最も頻度が高い良性腫瘍は、成熟嚢胞性奇形腫である。",
          "correct": false
        },
        {
          "text": "未熟奇形腫の悪性度は組織学的グレードで分類され、Grade 3は予後不良である。",
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
          "text": "子宮体癌の罹患率は日本では増加傾向にある。",
          "correct": false
        },
        {
          "text": "子宮体癌は、マイクロサテライト不安定性（MSI-High）を示す割合が比較的高い癌腫である。",
          "correct": true
        },
        {
          "text": "卵巣癌、卵管癌、腹膜癌の患者は、遺伝性乳癌卵巣癌症候群（HBOC）の遺伝子検査が保険適用となる。",
          "correct": true
        },
        {
          "text": "卵巣癌の初回化学療法後の維持療法として、PARP阻害薬が用いられることがある。",
          "correct": true
        },
        {
          "text": "再発卵巣癌に対して、免疫チェックポイント阻害薬（ニボルマブなど）の有効性は限定的である。",
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
          "text": "高リスクHPVに感染しても、その90%以上は自然に排除され、持続感染するのは一部である。",
          "correct": true
        },
        {
          "text": "HPVワクチンは感染予防を目的としており、既に形成された子宮頸部異形成や子宮頸癌に対する治療効果はない。",
          "correct": false
        },
        {
          "text": "HPVワクチンは、梅毒の原因である梅毒トレポネーマには効果がない。",
          "correct": false
        },
        {
          "text": "HPVワクチンの定期接種は、小学校6年から高校1年相当の女子が対象である。",
          "correct": false
        },
        {
          "text": "HPVは中咽頭癌や肛門癌の原因にもなるため、男性へのHPVワクチン接種も有効である。",
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
      "content": "子宮頸癌を予防するHPVワクチンについて、現在日本で公費接種可能なものをすべて答えよ。",
      "choices": [
        {
          "text": "2価ワクチン（サーバリックス）",
          "correct": true
        },
        {
          "text": "4価ワクチン（ガーダシル）",
          "correct": true
        },
        {
          "text": "6価ワクチン",
          "correct": false
        },
        {
          "text": "7価ワクチン",
          "correct": false
        },
        {
          "text": "9価ワクチン（シルガード9）",
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
          "text": "罹患率のピークは30代後半から40代にかけてである。",
          "correct": false
        },
        {
          "text": "組織型は扁平上皮癌が約70-80%、腺癌が約20%を占める。",
          "correct": false
        },
        {
          "text": "高リスク型HPVの持続感染が発症に重要な役割を果たす。",
          "correct": true
        },
        {
          "text": "高リスク型HPVの中でも、特に16型と18型が原因の大部分を占める。",
          "correct": true
        },
        {
          "text": "HPVワクチンとして、日本では2価、4価、9価のワクチンが承認されている。",
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
          "text": "発症のピークは30代後半から40代である。",
          "correct": false
        },
        {
          "text": "Lynch症候群は、子宮体癌のリスクを高めるが、子宮頸癌の主な原因ではない。",
          "correct": false
        },
        {
          "text": "進行・再発子宮頸癌の治療において、PARP阻害薬の適応は限定的である。",
          "correct": false
        },
        {
          "text": "術後の再発高リスク因子として、骨盤リンパ節転移、子宮傍組織浸潤、断端陽性が挙げられる。",
          "correct": true
        },
        {
          "text": "術後骨盤内再発に対する治療の第一選択は、通常、化学放射線療法である。",
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
      "content": "婦人科領域の疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮頸癌IIB期では、化学放射線療法が標準治療である。",
          "correct": true
        },
        {
          "text": "日本における婦人科がんの罹患数は、子宮体癌が卵巣癌より多い。",
          "correct": false
        },
        {
          "text": "発生学的に、女性の大陰唇は男性の陰嚢に相当する。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "産婦人科",
      "source_file": "2023年度①のコピー.json"
    },
    {
      "question_number": 41,
      "content": "婦人科疾患について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮内膜異型増殖症は、子宮体癌の前駆病変であり、放置すると高率に癌化する。",
          "correct": true
        },
        {
          "text": "9価HPVワクチンは、子宮頸癌の原因となるHPV型のうち約90%をカバーすることができる。",
          "correct": true
        },
        {
          "text": "卵巣癌の組織型頻度は人種差があり、欧米に比べ日本では明細胞癌の割合が高い。",
          "correct": true
        },
        {
          "text": "進行卵巣癌の標準手術は、開腹による腫瘍減量術であり、腹腔鏡手術の適応は限られる。",
          "correct": false
        },
        {
          "text": "エストロゲン非依存性の子宮体癌（タイプ2）は、漿液性癌や明細胞癌などを含み、閉経後の高齢女性に多く予後不良である。",
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
      "content": "ホルモン投与試験（エストロゲン・プロゲスチン テスト）で消退出血がみられない疾患を答えよ。",
      "choices": [
        {
          "text": "先天性副腎皮質過形成",
          "correct": false
        },
        {
          "text": "Turner症候群",
          "correct": false
        },
        {
          "text": "Androgen Insensitivity Syndrome（アンドロゲン不応症）",
          "correct": true
        },
        {
          "text": "Kallmann症候群",
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
      "content": "低用量経口避妊薬（OC）の処方が、禁忌とならないものを2つ答えよ。",
      "choices": [
        {
          "text": "乳癌の既往または現在罹患している",
          "correct": false
        },
        {
          "text": "35歳以上で1日15本以上の喫煙",
          "correct": false
        },
        {
          "text": "コントロール不良な高血圧",
          "correct": false
        },
        {
          "text": "重篤な肝機能障害",
          "correct": false
        },
        {
          "text": "深部静脈血栓症・肺塞栓症の既往",
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
          "text": "前兆を伴う片頭痛のある女性では、血栓症リスクのため低用量経口避妊薬は禁忌である。",
          "correct": true
        },
        {
          "text": "多嚢胞性卵巣症候群（PCOS）の排卵誘発には、第一選択としてクロミフェンやレトロゾールが用いられる。",
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
      "content": "女性のヘルスケアについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "中枢性思春期早発症では、成人の低身長を防ぐためにGnRHアゴニストによる偽閉経療法を行うことがある。",
          "correct": true
        },
        {
          "text": "経口避妊薬（OC）の使用は、中止後の妊孕性に影響を与えず、将来の不妊症のリスクとはならない。",
          "correct": false
        },
        {
          "text": "女性の骨量は、思春期に急増し、20歳頃に最大骨量（ピークボーンマス）に達する。",
          "correct": false
        },
        {
          "text": "排卵障害による持続的なエストロゲン曝露（unopposed estrogen）は、子宮内膜増殖症や子宮体癌のリスクを上昇させる。",
          "correct": true
        },
        {
          "text": "過度なダイエットやスポーツによる体重減少性無月経は、視床下部性無月経の原因となる。",
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
      "content": "産婦人科のトピックスについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "経口妊娠中絶薬（メフィーゴパック）は、母体保護法指定医師の確認の下で入院可能な医療機関でのみ使用が認められている。",
          "correct": false
        },
        {
          "text": "皮下インプラント型の避妊薬は、2024年時点で日本では承認されていない。",
          "correct": true
        },
        {
          "text": "多嚢胞性卵巣症候群（PCOS）の症状として、月経不順、無月経、不妊、肥満、多毛などがある。",
          "correct": true
        },
        {
          "text": "子宮を有する女性の更年期障害に対するホルモン補充療法（HRT）では、子宮内膜保護のため、エストロゲンとプロゲステロンを併用投与する。",
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
      "content": "多嚢胞性卵巣症候群（PCOS）の診断基準（2007年、日本産科婦人科学会）に含まれない所見を答えよ。",
      "choices": [
        {
          "text": "超音波検査での両側卵巣の多嚢胞所見（ネックレスサイン）",
          "correct": false
        },
        {
          "text": "高プロラクチン（PRL）血症",
          "correct": true
        },
        {
          "text": "月経異常（無月経、稀発月経など）",
          "correct": false
        },
        {
          "text": "血中男性ホルモン高値またはLH基礎値高値かつFSH基礎値正常",
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
      "content": "成人女性の骨盤内解剖について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮は子宮動脈、卵巣は卵巣動脈から主に栄養される。",
          "correct": false
        },
        {
          "text": "子宮動脈は内腸骨動脈から直接分岐する。",
          "correct": true
        },
        {
          "text": "子宮を支持する主要な組織は、基靭帯、仙骨子宮靭帯、膀胱子宮靭帯である。",
          "correct": false
        },
        {
          "text": "右卵巣静脈は下大静脈へ、左卵巣静脈は左腎静脈へ流入する。",
          "correct": false
        },
        {
          "text": "子宮動脈や深部子宮静脈は、骨盤内の後腹膜腔に存在する。",
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
      "content": "女性生殖器の解剖と血行について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮動脈は内腸骨動脈から分岐し、尿管の前方（腹側）を横切る。",
          "correct": false
        },
        {
          "text": "左卵巣静脈は左腎静脈に、右卵巣静脈は下大静脈に直接流入する。",
          "correct": false
        },
        {
          "text": "子宮動脈は子宮体部、子宮頸部、卵管、卵巣、腟の一部に血液を供給する。",
          "correct": true
        },
        {
          "text": "卵巣動脈は腹部大動脈から直接分岐する。",
          "correct": true
        },
        {
          "text": "膀胱子宮靭帯は膀胱と子宮頸部を繋ぐ結合組織である。",
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
      "content": "妊娠中の母体の生理的変化について、正しいものを答えよ。",
      "choices": [
        {
          "text": "末梢血管抵抗が減少し、血圧は非妊娠時と同等かやや低下する。",
          "correct": true
        },
        {
          "text": "血液凝固因子が増加し、凝固能が亢進する。",
          "correct": true
        },
        {
          "text": "呼吸運動の変化により、機能的残気量は減少する。",
          "correct": false
        },
        {
          "text": "腎血流量の増加に伴い、糸球体濾過量（GFR）は増加する。",
          "correct": false
        },
        {
          "text": "胎盤由来のCRHの影響で、血中コルチゾール値は上昇する。",
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
      "content": "産科危機的出血時の輸血対応について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "血液型が不明な場合、緊急時にはO型の赤血球製剤を用いる。",
          "correct": true
        },
        {
          "text": "血液型が不明な場合、血小板製剤はAB型の製剤が望ましいとされるが、実際には入手可能な製剤を使用する。",
          "correct": true
        },
        {
          "text": "血液型が不明な場合、新鮮凍結血漿（FFP）は、血漿中に抗A、抗B抗体を含まないAB型の製剤を用いる。",
          "correct": false
        },
        {
          "text": "交差適合試験を省略した緊急輸血では、同型血がなければO型の赤血球製剤を用いる。",
          "correct": true
        },
        {
          "text": "AB型の患者には、理論上、A型、B型、O型のどの赤血球製剤も輸血可能である。",
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
      "content": "産科危機的出血について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "産科危機的出血と判断した際には、速やかにスタッフを招集し、集学的治療を開始することが重要である。",
          "correct": true
        },
        {
          "text": "分娩後異常出血の最も多い原因は、子宮収縮不全による弛緩出血である。",
          "correct": true
        },
        {
          "text": "産科DICの診断と管理において、血中フィブリノゲン値を測定することが極めて重要である。",
          "correct": true
        },
        {
          "text": "大量出血時には、赤血球製剤だけでなく、凝固因子を補充するために新鮮凍結血漿（FFP）や血小板製剤の投与も考慮する。",
          "correct": true
        },
        {
          "text": "生命の危機が迫る状況では、交差適合試験を省略した異型血輸血（O型赤血球）が救命のために必要となる場合がある。",
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
          "text": "喫煙は、血管の攣縮や脱落膜の変性を引き起こし、リスク因子となる。",
          "correct": false
        },
        {
          "text": "妊娠高血圧症候群は、最も重要なリスク因子の一つである。",
          "correct": true
        },
        {
          "text": "常位胎盤早期剥離の既往は、次回の妊娠における最も強力なリスク因子である。",
          "correct": true
        },
        {
          "text": "重症例では、大量出血によるショックや産科DIC（播種性血管内凝固症候群）を合併する。",
          "correct": true
        },
        {
          "text": "胎盤機能が急激に低下するため、胎児機能不全や胎児死亡をきたしやすい。",
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
      "content": "双胎妊娠において、単胎妊娠と比較してリスクが増加する合併症をすべて答えよ。",
      "choices": [
        {
          "text": "流産・早産",
          "correct": true
        },
        {
          "text": "妊娠高血圧症候群",
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
          "text": "胎児発育不全（FGR）",
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
      "content": "双胎間輸血症候群（TTTS）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "一絨毛膜二羊膜（MD）双胎の約10～15%に発症する。",
          "correct": true
        },
        {
          "text": "受血児は循環血液量過多となり、心不全や胎児水腫をきたすことがある。",
          "correct": true
        },
        {
          "text": "供血児は循環血液量減少となり、貧血、乏尿、腎不全をきたすことがある。",
          "correct": true
        },
        {
          "text": "診断は、超音波検査による羊水量の不均衡（受血児：羊水過多、供血児：羊水過少）が重要である。",
          "correct": false
        },
        {
          "text": "重症例に対する根治療法として、胎児鏡下胎盤吻合血管レーザー凝固術（FLP）がある。",
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
      "content": "羊水過多をきたす可能性のある母体・胎児の疾患・状態を3つ答えよ。",
      "choices": [
        {
          "text": "母体の妊娠糖尿病",
          "correct": true
        },
        {
          "text": "双胎間輸血症候群（受血児）",
          "correct": true
        },
        {
          "text": "胎児の食道閉鎖症・十二指腸閉鎖症",
          "correct": true
        },
        {
          "text": "胎児の腎無形成",
          "correct": false
        },
        {
          "text": "胎児の無脳症",
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
      "content": "羊水過多症をきたす疾患として正しいものを答えよ。",
      "choices": [
        {
          "text": "母体の妊娠糖尿病",
          "correct": true
        },
        {
          "text": "妊娠高血圧症候群",
          "correct": false
        },
        {
          "text": "胎児の尿路閉鎖",
          "correct": false
        },
        {
          "text": "胎児の無脳症",
          "correct": true
        },
        {
          "text": "胎児の十二指腸閉鎖症",
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
      "content": "羊水過少症の原因となるものを3つ答えよ。",
      "choices": [
        {
          "text": "前期破水",
          "correct": true
        },
        {
          "text": "胎児の腎無形成・低形成",
          "correct": true
        },
        {
          "text": "胎盤機能不全",
          "correct": true
        },
        {
          "text": "胎児の横隔膜ヘルニア",
          "correct": false
        },
        {
          "text": "胎児の無脳症",
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
      "content": "分娩監視装置（CTG）の所見について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "胎児心拍数基線は110～160bpmが正常範囲である。",
          "correct": false
        },
        {
          "text": "早発一過性徐脈は児頭圧迫が原因であり、通常は胎児機能不全を示唆しない。",
          "correct": false
        },
        {
          "text": "一過性頻脈は胎児が元気な徴候（well-being）であり、良好な所見である。",
          "correct": true
        },
        {
          "text": "変動一過性徐脈は臍帯圧迫が原因で生じることが多い。",
          "correct": true
        },
        {
          "text": "遅発一過性徐脈は子宮胎盤機能不全を反映し、胎児機能不全が疑われる危険な所見である。",
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
      "content": "母子感染（TORCH症候群を含む）について、正しいものを3つ答えよ。",
      "choices": [
        {
          "text": "サイトメガロウイルス（CMV）の先天感染は、胎児発育不全や小頭症、難聴の原因となる。",
          "correct": true
        },
        {
          "text": "パルボウイルスB19の胎内感染は、胎児の重症貧血や胎児水腫の原因となる。",
          "correct": false
        },
        {
          "text": "トキソプラズマ（Toxoplasma）はTORCH症候群の'T'にあたる。",
          "correct": false
        },
        {
          "text": "水痘（Varicella-zoster virus）はTORCH症候群に含まれることがある。",
          "correct": true
        },
        {
          "text": "先天性風疹症候群の三大症状は、白内障、心奇形、感音難聴である。",
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
      "content": "母体保護法に基づく人工妊娠中絶について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "妊娠22週未満（21週6日）まで施行可能である。",
          "correct": true
        },
        {
          "text": "母体の「経済的理由により母体の健康を著しく害するおそれのあるもの」は適応となる。",
          "correct": false
        },
        {
          "text": "胎児の異常（染色体異常など）は、それ自体を理由とした中絶の適応とはならない。",
          "correct": false
        },
        {
          "text": "人工妊娠中絶を施行できる医師は、都道府県の医師会が指定した母体保護法指定医師に限られる。",
          "correct": true
        },
        {
          "text": "人工妊娠中絶を行った医師は、都道府県知事に届け出る義務がある。",
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
      "content": "産科領域の定義について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "死産届の提出義務は、妊娠満12週以後の死産で生じる。",
          "correct": false
        },
        {
          "text": "人工妊娠中絶は、妊娠満22週未満まで可能である。",
          "correct": true
        },
        {
          "text": "早産とは、妊娠22週0日から36週6日までの分娩をいう。",
          "correct": true
        },
        {
          "text": "分娩予定日は、最終月経開始日から起算して満40週0日である。",
          "correct": true
        },
        {
          "text": "周産期とは、妊娠満22週から出生後満7日未満までの期間をいう。",
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
      "content": "正期産・正出生体重児が、生後24時間後に中枢性無呼吸でNICUに入院した。鑑別疾患とそれに対応する検査・治療の組み合わせとして適切なものを3つ答えよ。",
      "choices": [
        {
          "text": "先天性複合型下垂体機能低下症 / ホルモン負荷試験 / ホルモン補充療法",
          "correct": true
        },
        {
          "text": "母体からの薬剤影響（中毒） / 母親の薬物使用歴の聴取・薬物スクリーニング / 対症療法・支持療法",
          "correct": true
        },
        {
          "text": "新生児脳梗塞 / 頭部MRI / 抗血小板療法・抗凝固療法、支持療法",
          "correct": true
        },
        {
          "text": "先天性甲状腺機能低下症 / 新生児マススクリーニング・甲状腺機能検査 / 甲状腺ホルモン補充療法",
          "correct": false
        },
        {
          "text": "後鼻孔閉鎖症 / ファイバースコープ・頭部CT / 気道確保（経口エアウェイなど）",
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
      "content": "生後2ヶ月の乳児が心肺停止状態で搬送された。医療スタッフが複数名いる場合の蘇生法（PALSガイドライン）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "救助者が2人以上いる場合、胸骨圧迫と人工呼吸の比は15:2で行う。",
          "correct": true
        },
        {
          "text": "気管挿管など高度な気道確保後は、胸骨圧迫とは非同期に、2〜3秒に1回の頻度で人工呼吸を行う。",
          "correct": true
        },
        {
          "text": "乳児の静脈路確保が困難な場合、第一選択は骨髄路確保である。",
          "correct": false
        },
        {
          "text": "アドレナリンを静注する場合、0.1mg/mL（1:10000）製剤を体重kgあたり0.1mL（0.01mg/kg）投与する。",
          "correct": false
        },
        {
          "text": "心室細動（VF）や無脈性心室頻拍（pulseless VT）に対する電気ショックは、初回2J/kg、2回目以降は4J/kg以上で行う。",
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
      "content": "気管挿管・人工呼吸管理中の新生児で、突然SpO2が低下した。原因検索と対応として正しいものを3つ答えよ。（DOPESの原則に基づく）",
      "choices": [
        {
          "text": "まず患者のそばを離れず、応援を要請する。",
          "correct": false
        },
        {
          "text": "気管チューブの変位（Displacement）を疑い、胸郭の動きや呼気終末二酸化炭素（EtCO2）を確認する。",
          "correct": true
        },
        {
          "text": "人工呼吸器の異常（Equipment failure）を疑い、用手的人工呼吸に切り替えて換気の可否を確認する。",
          "correct": true
        },
        {
          "text": "緊張性気胸（Pneumothorax）を疑い、聴診や胸部X線検査を行う。",
          "correct": true
        },
        {
          "text": "敗血症（Sepsis）も鑑別に挙がるが、緊急対応としてはDOPESに沿った原因検索を優先する。",
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
      "content": "新生児の生理的黄疸について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "通常、生後24時間以降に出現する。",
          "correct": false
        },
        {
          "text": "黄疸は顔面から出現し、体幹、四肢へと広がる。",
          "correct": false
        },
        {
          "text": "血中ビリルビン値は、通常、生後4～5日目にピークを迎える。",
          "correct": true
        },
        {
          "text": "赤血球寿命の短さ、肝臓のビリルビン処理能力の未熟性などが原因である。",
          "correct": true
        },
        {
          "text": "便の色は黄色であり、灰白色便は胆道閉鎖症などの病的黄疸を疑う所見である。",
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
      "content": "在胎40週、出生体重3100gで出生した女児。日齢3の所見として、生理的範囲内と考えられるものを3つ答えよ。",
      "choices": [
        {
          "text": "生後24時間以内に初回胎便排泄がある。",
          "correct": true
        },
        {
          "text": "血清総ビリルビン値が12 mg/dLである。",
          "correct": true
        },
        {
          "text": "血圧が 70/40 mmHgである。",
          "correct": false
        },
        {
          "text": "体重が2850gである（生理的体重減少）。",
          "correct": true
        },
        {
          "text": "肝臓を右季肋下に1cm触知する。",
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
      "content": "在胎40週、出生体重3000gで出生した新生児。生後12時間の所見として、異常と考えられるものを3つ答えよ。",
      "choices": [
        {
          "text": "初回排尿・排便がまだない。",
          "correct": true
        },
        {
          "text": "血清総ビリルビン値が10mg/dLである（早発黄疸）。",
          "correct": true
        },
        {
          "text": "ヘマトクリット値が75%である（多血症）。",
          "correct": true
        },
        {
          "text": "白血球数が18,000/μLである。",
          "correct": false
        },
        {
          "text": "呼吸数が50回/分である。",
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
      "content": "出生直後の新生児に見られる生理的所見について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "生後数日間、生理的体重減少がみられる。",
          "correct": true
        },
        {
          "text": "Moro反射（モロー反射）などの原始反射がみられる。",
          "correct": true
        },
        {
          "text": "母体由来のIgGは移行するが、IgMは胎盤を通過しないため、新生児血中にはほとんど存在しない。",
          "correct": false
        },
        {
          "text": "胃の噴門部の括約筋機能が未熟なため、溢乳しやすい。",
          "correct": false
        },
        {
          "text": "出生後1～2日の便は、暗緑色の胎便である。",
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
      "content": "出生後の胎児循環から新生児循環への移行に伴う生理的な血行動態変化について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "動脈管は、通常、生後数週から数ヶ月で解剖学的に完全に閉鎖する。",
          "correct": true
        },
        {
          "text": "出生後の肺呼吸開始により肺血管抵抗が低下し、肺血流量が著しく増大する。",
          "correct": false
        },
        {
          "text": "体血管抵抗の上昇と肺血管抵抗の低下により、左心系の圧が右心系の圧より高くなる。",
          "correct": true
        },
        {
          "text": "臍帯結紮により、体血管抵抗は上昇する。",
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
      "content": "心房中隔欠損症（ASD）と心室中隔欠損症（VSD）について、いずれも肺体血流比（Qp/Qs）が2であるとする。正しいものを3つ答えよ。",
      "choices": [
        {
          "text": "VSDでは左心室から右心室への短絡により、肺循環を経て左心房・左心室に容量負荷がかかる。",
          "correct": true
        },
        {
          "text": "ASDでは左房から右房への短絡により、右心房・右心室に容量負荷がかかるが、左房への負荷は直接的ではない。",
          "correct": false
        },
        {
          "text": "自然閉鎖の可能性や症状の程度を考慮し、手術時期や適応を決定する。",
          "correct": false
        },
        {
          "text": "VSDでは、左房・左室の拡大が見られる。",
          "correct": true
        },
        {
          "text": "VSDでは、左→右シャントのため、右室への容量負荷も生じる。",
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
      "content": "先天性心疾患のうち、肺血流が増加する疾患を3つ答えよ。",
      "choices": [
        {
          "text": "心室中隔欠損症（VSD）",
          "correct": true
        },
        {
          "text": "心房中隔欠損症（ASD）",
          "correct": true
        },
        {
          "text": "肺動脈閉鎖症（PA）",
          "correct": false
        },
        {
          "text": "ファロー四徴症（TOF）",
          "correct": false
        },
        {
          "text": "総肺静脈還流異常症（TAPVC）",
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
      "content": "心室中隔欠損症（VSD）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "左心室から右心室への血液短絡により、左心室系と右心室系の両方に容量負荷がかかる。",
          "correct": true
        },
        {
          "text": "欠損孔の自然閉鎖により肺高血圧が改善すると、心臓への容量負荷も軽減する。",
          "correct": false
        },
        {
          "text": "大動脈弁閉鎖不全症（AR）を合併し、大動脈弁の逸脱が進行する場合は手術適応となる。",
          "correct": true
        },
        {
          "text": "心不全症状や肺高血圧がなければ、通常、厳格な運動や水分制限は必要ない。",
          "correct": false
        },
        {
          "text": "欠損孔の大きさに関わらず、感染性心内膜炎のリスクがあるため、適切な口腔衛生が重要である。",
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
      "content": "左心低形成症候群（HLHS）の術後管理では、肺循環と体循環が並列回路となる。酸素供給量（DO2）を「体血流量 × 動脈血酸素飽和度（SaO2）」と仮定した場合、正しい記述を3つ答えよ。",
      "choices": [
        {
          "text": "肺血管抵抗と体血管抵抗のバランスにより、肺血流量と体血流量は相反する関係にある。",
          "correct": true
        },
        {
          "text": "肺血流量が増えるとSaO2は上昇するが体血流量は減少し、逆に肺血流量が減るとSaO2は低下するが体血流量は増加する。",
          "correct": true
        },
        {
          "text": "理論上、体血流量と肺血流量のバランスが最も良い場合に酸素供給量が最大となり、その時の至適SaO2は75～85%とされる。",
          "correct": true
        },
        {
          "text": "SaO2が60%の場合、肺血流が少なく体血流が過剰な状態（Qp/Qs < 1）の可能性があり、低酸素血症が問題となる。",
          "correct": false
        },
        {
          "text": "SaO2が90%以上の場合、肺血流が過剰で体血流が少ない状態（Qp/Qs > 1）の可能性があり、体循環不全（低血圧、代謝性アシドーシス）のリスクがある。",
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
      "content": "腎芽腫（Wilms腫瘍）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児の腎悪性腫瘍の中で最も頻度が高い。",
          "correct": true
        },
        {
          "text": "約10%に、無虹彩や片側肥大などを伴う症候群を合併する。",
          "correct": true
        },
        {
          "text": "組織型に退形成（anaplasia）が見られる場合は、予後不良因子である。",
          "correct": false
        },
        {
          "text": "治療成績は良好であり、可能であれば腎機能を温存する腎部分切除術が考慮される。",
          "correct": true
        },
        {
          "text": "肺転移をきたしやすいため、初診時には胸部CTによるスクリーニングが行われる。",
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
      "content": "小児がんについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "神経芽腫は、小児固形がんの中で最も頻度が高い。",
          "correct": true
        },
        {
          "text": "神経芽腫のスクリーニングや診断には、尿中のバニリルマンデル酸（VMA）やホモバニリン酸（HVA）の測定が有用である。",
          "correct": true
        },
        {
          "text": "神経芽腫において、MYCN遺伝子の増幅は予後不良因子である。",
          "correct": true
        },
        {
          "text": "Wilms腫瘍は、主に3歳前後の幼児に発症する。",
          "correct": true
        },
        {
          "text": "肝芽腫の術前評価には、腫瘍の進展範囲を評価するPRETEXT分類が用いられる。",
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
      "content": "小児の急性骨髄性白血病（AML）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児の急性白血病では、急性リンパ性白血病（ALL）の方がAMLよりも頻度が高い。",
          "correct": true
        },
        {
          "text": "t(8;21)(q22;q22);RUNX1-RUNX1T1などの特徴的な遺伝子異常があれば、骨髄中の芽球が20%未満でもAMLと診断される。",
          "correct": true
        },
        {
          "text": "ダウン症候群に合併するAMLは、化学療法への感受性が高く、予後が比較的良好である。",
          "correct": true
        },
        {
          "text": "小児AMLの標準治療は寛解導入療法と地固め療法であり、ALLのような長期の維持療法は通常行わない。",
          "correct": false
        },
        {
          "text": "再発・難治性の小児ALLに対してはCAR-T療法が有効であるが、AMLに対するCAR-T療法はまだ研究段階である。",
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
      "content": "小児の急性リンパ性白血病（ALL）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "約85%が前駆B細胞性であり、T細胞性は約15%である。",
          "correct": true
        },
        {
          "text": "T細胞性ALLは、縦隔腫瘤や中枢神経浸潤を高頻度にきたす傾向がある。",
          "correct": true
        },
        {
          "text": "小児ALLの治療成績は成人ALLよりも良好で、5年生存率は80～90%に達する。",
          "correct": false
        },
        {
          "text": "1歳未満の乳児ALLでは、予後不良とされるKMT2A（MLL）遺伝子再構成の頻度が高い。",
          "correct": true
        },
        {
          "text": "治療効果判定に微小残存病変（MRD）を組み込んだ層別化治療が標準となっている。",
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
      "content": "白血病治療中の男児が発熱し、敗血症性ショックを呈した。初期対応として優先すべきものを3つ答えよ。",
      "choices": [
        {
          "text": "乳酸リンゲル液20mL/kgを60分かけて緩徐に投与する。",
          "correct": false
        },
        {
          "text": "速やかに血液培養を2セット採取し、広域抗菌薬を投与する。",
          "correct": true
        },
        {
          "text": "ショックが遷延する場合は、上級医にコンサルトし、昇圧薬の使用を考慮する。",
          "correct": true
        },
        {
          "text": "生理食塩水または乳酸リンゲル液20mL/kgを5～20分で急速輸液する。",
          "correct": true
        },
        {
          "text": "酸素飽和度を維持するため、高流量の酸素を投与する。",
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
      "content": "A群溶血性レンサ球菌感染症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "咽頭炎に対する第一選択薬は、ペニシリン系抗菌薬である。",
          "correct": false
        },
        {
          "text": "劇症型溶連菌感染症では、四肢の急激な腫脹と疼痛、壊死性筋膜炎をきたすことがある。",
          "correct": true
        },
        {
          "text": "合併症として、急性糸球体腎炎やリウマチ熱を発症することがある。",
          "correct": true
        },
        {
          "text": "猩紅熱や伝染性膿痂疹、蜂窩織炎の原因菌となる。",
          "correct": false
        },
        {
          "text": "主に小児期に好発する疾患である。",
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
      "content": "川崎病の治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "冠動脈瘤の形成を予防するため、発症後早期（通常10日以内）に治療を開始することが重要である。",
          "correct": true
        },
        {
          "text": "急性期の標準治療は、免疫グロブリン大量静注療法（IVIG）とアスピリン内服である。",
          "correct": true
        },
        {
          "text": "IVIG不応例に対しては、ステロイド、インフリキシマブ、シクロスポリンなどが追加治療として用いられる。",
          "correct": true
        },
        {
          "text": "ステロイドは、IVIG不応例や重症例に対して有効な治療選択肢である。",
          "correct": false
        },
        {
          "text": "アスピリンは、急性期の抗炎症作用と解熱後の抗血小板作用を期待して使用される。",
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
      "content": "日本の定期接種で用いられるワクチンとその種類の組み合わせとして正しいものを答えよ。",
      "choices": [
        {
          "text": "5種混合ワクチン（DPT-IPV-Hib） - 不活化ワクチン",
          "correct": true
        },
        {
          "text": "BCGワクチン - 生ワクチン",
          "correct": true
        },
        {
          "text": "MR（麻しん風しん混合）ワクチン - 生ワクチン",
          "correct": false
        },
        {
          "text": "新型コロナウイルスワクチン（mRNAワクチン） - 不活化ワクチンでも生ワクチンでもない",
          "correct": false
        },
        {
          "text": "小児用肺炎球菌ワクチン - 不活化ワクチン（成分ワクチン）",
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
      "content": "小児の食物アレルギーについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "発症率は乳幼児期に最も高く、年齢とともに低下する傾向がある。",
          "correct": true
        },
        {
          "text": "鶏卵、牛乳、小麦は耐性を獲得しやすいが、甲殻類やソバ、ピーナッツは耐性を獲得しにくい。",
          "correct": false
        },
        {
          "text": "乳幼児期の三大アレルゲンは、鶏卵、牛乳、小麦である。",
          "correct": true
        },
        {
          "text": "安全に摂取できる量を決定するために、医師の管理下で食物経口負荷試験が行われる。",
          "correct": true
        },
        {
          "text": "アナフィラキシーのリスクがある小児には、アドレナリン自己注射薬（エピペン）が処方される。",
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
      "content": "小児気管支喘息の長期管理について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "週1回以上の発作がある場合は、長期管理薬（コントローラー）の開始・ステップアップを検討する。",
          "correct": false
        },
        {
          "text": "吸入ステロイド薬の局所的副作用（口腔カンジダ症など）を予防するため、吸入後はうがいを実施する。",
          "correct": false
        },
        {
          "text": "ロイコトリエン受容体拮抗薬は、特に乳幼児の軽症持続型喘息で第一選択薬の一つとなる。",
          "correct": true
        },
        {
          "text": "臨床症状に加え、呼吸機能検査や呼気一酸化窒素（FeNO）濃度を参考にコントロール状態を評価することが推奨される。",
          "correct": true
        },
        {
          "text": "長期管理薬（コントローラー）は、症状が安定しても自己判断で中断せず、医師の指示に従って継続・減量する。",
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
      "content": "IgA腎症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "上気道感染などを契機に、肉眼的血尿で発症することがある。",
          "correct": true
        },
        {
          "text": "学校検尿での無症候性血尿・蛋白尿を契機に発見されることが多い。",
          "correct": true
        },
        {
          "text": "患者の一部で、血清IgA高値を認める。",
          "correct": true
        },
        {
          "text": "特徴的な病理所見は、メサンギウム領域へのIgA沈着を伴うメサンギウム増殖性糸球体腎炎である。",
          "correct": false
        },
        {
          "text": "予後不良群に対しては、ステロイドや免疫抑制薬による治療が行われる。",
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
      "content": "小児ネフローゼ症候群について、当てはまるものを2つ答えよ。",
      "choices": [
        {
          "text": "溶連菌感染後に発症しやすいのは、急性糸球体腎炎である。",
          "correct": false
        },
        {
          "text": "主な臨床像は高度蛋白尿と低アルブミン血症、浮腫である。",
          "correct": true
        },
        {
          "text": "高コレステロール血症などの脂質異常症を伴うことが多い。",
          "correct": true
        },
        {
          "text": "微小変化型が最も多く、通常は血圧正常で、血尿は軽度か認めない。",
          "correct": false
        },
        {
          "text": "ステロイド治療への反応性が良好なことが多い。",
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
      "content": "IgA血管炎（Henoch-Schönlein紫斑病）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小血管の血管炎に分類される。",
          "correct": false
        },
        {
          "text": "四肢の触知可能な紫斑、腹痛、関節痛、腎炎が四徴である。",
          "correct": false
        },
        {
          "text": "腹部症状（腹痛、下血）が皮膚症状に先行することがある。",
          "correct": true
        },
        {
          "text": "重症の腹部症状や腎炎に対しては、ステロイド治療が考慮される。",
          "correct": true
        },
        {
          "text": "腎炎（IgA血管炎性腎症）を合併することがあり、長期的な尿検査によるフォローアップが必要である。",
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
          "text": "身体的虐待、心理的虐待、性的虐待、ネグレクト（育児放棄）の4つに分類される。",
          "correct": false
        },
        {
          "text": "虐待の通告は国民の義務であり、医師には守秘義務よりも通告義務が優先される。",
          "correct": true
        },
        {
          "text": "虐待の疑いで通告した結果、虐待の事実がなかったとしても、通告者が罰せられることはない。",
          "correct": false
        },
        {
          "text": "虐待の主たる加害者は、統計的に実母が最も多い。",
          "correct": true
        },
        {
          "text": "説明困難な栄養障害や発育不全は、ネグレクトを疑う徴候の一つである。",
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
      "content": "児童虐待について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "身体的虐待によるあざは、衣服で隠れる体幹部や臀部などに見られることが多く、見逃されやすい。",
          "correct": false
        },
        {
          "text": "子どもの前で配偶者へ暴力をふるうこと（面前DV）は、心理的虐待にあたる。",
          "correct": true
        },
        {
          "text": "病気の子どもを病院に連れて行かないなど、必要な医療を受けさせないことは医療ネグレクトにあたる。",
          "correct": true
        },
        {
          "text": "性的虐待は、乳幼児を含むあらゆる年齢の子供で起こりうる。",
          "correct": false
        },
        {
          "text": "虐待が疑われる場合、確証がなくても通告する義務があり、これは医師の守秘義務には違反しない。",
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
      "content": "小児虐待が疑われる患児の診察について、適切な対応を答えよ。",
      "choices": [
        {
          "text": "プライバシーを確保し、可能であれば患児本人と加害者と疑われる人物を分離して、それぞれから話を聞く。",
          "correct": false
        },
        {
          "text": "外表に明らかな外傷が見られなくても、隠れた損傷の可能性を考慮し、慎重に診察を進める。",
          "correct": false
        },
        {
          "text": "頭部外傷が疑われる場合、眼底検査による網膜出血の確認も重要である。",
          "correct": false
        },
        {
          "text": "説明のつかない骨折を認めた場合、過去の骨折の有無を確認するために全身の骨X線（骨格スキャン）を撮影する。",
          "correct": true
        },
        {
          "text": "衣服で隠れている部分も含めて、全身の皮膚をくまなく観察し、あざや熱傷の有無を確認する。",
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
      "content": "熱性けいれんについて、保護者への説明として適切なものを答えよ。",
      "choices": [
        {
          "text": "熱性けいれんは比較的よく見られるもので、日本人では約8%の子どもが経験します。",
          "correct": false
        },
        {
          "text": "有病率は約8%であり、決して稀な病気ではありません。",
          "correct": false
        },
        {
          "text": "けいれんが止まっても意識がなかなか戻らない場合は、急性脳症など他の重い病気の可能性もあるため、すぐに医療機関を受診してください。",
          "correct": true
        },
        {
          "text": "38℃未満の微熱でけいれんした場合や、けいれんが15分以上続く場合は、より詳しい検査が必要です。",
          "correct": true
        },
        {
          "text": "熱性けいれんを経験した子が、将来てんかんに移行する割合は2～7%程度で、大部分は移行しません。",
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
      "content": "ダウン症候群（21トリソミー）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "症状の重症度に男女差はない。",
          "correct": false
        },
        {
          "text": "出生時の男女比に大きな差はない。",
          "correct": false
        },
        {
          "text": "21番染色体の過剰（トリソミー）によって引き起こされる。",
          "correct": false
        },
        {
          "text": "先天性甲状腺機能低下症や橋本病などの甲状腺疾患を合併する頻度が高い。",
          "correct": true
        },
        {
          "text": "約半数に心室中隔欠損症などの先天性心疾患を合併する。",
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
      "content": "乳幼児健診で発達の遅れを疑い、精査を勧めるべき状態を3つ答えよ。",
      "choices": [
        {
          "text": "生後5ヶ月で首がすわらない。",
          "correct": false
        },
        {
          "text": "生後9ヶ月で人見知りをしない。",
          "correct": true
        },
        {
          "text": "1歳6ヶ月でひとり歩きができない。",
          "correct": true
        },
        {
          "text": "2歳で意味のある単語がほとんどなく、二語文を話さない。",
          "correct": true
        },
        {
          "text": "4歳で模倣して円を描けない。",
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
      "content": "ビタミン欠乏症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ビタミンB1欠乏症では、ピルビン酸からアセチルCoAへの変換が阻害され、乳酸やピルビン酸が蓄積する。",
          "correct": true
        },
        {
          "text": "ビタミンC欠乏症（壊血病）では、コラーゲン合成が障害され、出血傾向や骨痛をきたす。",
          "correct": true
        },
        {
          "text": "ビタミンD欠乏症では、腸管からのカルシウム吸収が低下し、骨の石灰化障害（くる病、骨軟化症）をきたす。",
          "correct": false
        },
        {
          "text": "ビタミンK欠乏症では、特定の血液凝固因子（II, VII, IX, X）の産生が障害され、出血傾向をきたす。",
          "correct": false
        },
        {
          "text": "鉄欠乏では、ヘモグロビン合成が障害され、小球性低色素性貧血をきたす。",
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
      "content": "乳児血管腫（いちご状血管腫）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "皮膚だけでなく、肝臓などの内臓にも発生することがある。",
          "correct": true
        },
        {
          "text": "眼瞼、鼻、口唇周囲など、機能的障害や整容的な問題を引き起こす可能性のある部位では、積極的治療の対象となる。",
          "correct": true
        },
        {
          "text": "女児に多い傾向がある（男女比は約1:3）。",
          "correct": false
        },
        {
          "text": "多くは生後数ヶ月で増殖し、その後数年かけて自然に退縮する。",
          "correct": true
        },
        {
          "text": "治療法として、レーザー治療や外科的切除の他に、内服薬（プロプラノロール）が用いられる。",
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
      "content": "小児の急性陰嚢症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "精巣捻転は、新生児・乳児期と思春期に発症のピークがある。",
          "correct": true
        },
        {
          "text": "精巣捻転が疑われる場合は、緊急手術による整復・固定が必要である。",
          "correct": false
        },
        {
          "text": "精巣捻転で精巣を温存するためには、発症後6～8時間以内の手術が望ましい（ゴールデンタイム）。",
          "correct": false
        },
        {
          "text": "精巣垂または精巣上体垂の捻転では、陰嚢の皮膚を透かして青い点が見える 'blue dot sign' が特徴的である。",
          "correct": true
        },
        {
          "text": "精巣捻転の手術では、再発予防のために患側だけでなく健側の精巣も固定する。",
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
          "text": "上気道感染などを契機に、肉眼的血尿で発症することがある。",
          "correct": true
        },
        {
          "text": "学校検尿での無症候性血尿・蛋白尿を契機に発見されることが多い。",
          "correct": true
        },
        {
          "text": "患者の一部で、血清IgA高値を認める。",
          "correct": true
        },
        {
          "text": "特徴的な病理所見は、メサンギウム領域へのIgA沈着を伴うメサンギウム増殖性糸球体腎炎である。",
          "correct": false
        },
        {
          "text": "予後不良群に対しては、ステロイドや免疫抑制薬による治療が行われる。",
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
      "content": "川崎病の治療について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "冠動脈瘤の形成を予防するため、発症後早期（通常10日以内）に治療を開始することが重要である。",
          "correct": true
        },
        {
          "text": "急性期の標準治療は、免疫グロブリン大量静注療法（IVIG）とアスピリン内服である。",
          "correct": true
        },
        {
          "text": "IVIG不応例に対しては、ステロイド、インフリキシマブ、シクロスポリンなどが追加治療として用いられる。",
          "correct": true
        },
        {
          "text": "ステロイドは、IVIG不応例や重症例に対して有効な治療選択肢である。",
          "correct": false
        },
        {
          "text": "アスピリンは、急性期の抗炎症作用と解熱後の抗血小板作用を期待して使用される。",
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
      "content": "先天性心疾患のうち、肺血流が増加する疾患を3つ答えよ。",
      "choices": [
        {
          "text": "心室中隔欠損症（VSD）",
          "correct": true
        },
        {
          "text": "心房中隔欠損症（ASD）",
          "correct": true
        },
        {
          "text": "肺動脈閉鎖症（PA）",
          "correct": false
        },
        {
          "text": "ファロー四徴症（TOF）",
          "correct": false
        },
        {
          "text": "総肺静脈還流異常症（TAPVC）",
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
      "content": "ビタミン欠乏症について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "ビタミンB1欠乏症では、ピルビン酸からアセチルCoAへの変換が阻害され、乳酸やピルビン酸が蓄積する。",
          "correct": true
        },
        {
          "text": "ビタミンC欠乏症（壊血病）では、コラーゲン合成が障害され、出血傾向や骨痛をきたす。",
          "correct": true
        },
        {
          "text": "ビタミンD欠乏症では、腸管からのカルシウム吸収が低下し、骨の石灰化障害（くる病、骨軟化症）をきたす。",
          "correct": false
        },
        {
          "text": "ビタミンK欠乏症では、特定の血液凝固因子（II, VII, IX, X）の産生が障害され、出血傾向をきたす。",
          "correct": false
        },
        {
          "text": "鉄欠乏では、ヘモグロビン合成が障害され、小球性低色素性貧血をきたす。",
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
      "content": "小児の急性骨髄性白血病（AML）について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "小児の急性白血病では、急性リンパ性白血病（ALL）の方がAMLよりも頻度が高い。",
          "correct": true
        },
        {
          "text": "t(8;21)(q22;q22);RUNX1-RUNX1T1などの特徴的な遺伝子異常があれば、骨髄中の芽球が20%未満でもAMLと診断される。",
          "correct": true
        },
        {
          "text": "ダウン症候群に合併するAMLは、化学療法への感受性が高く、予後が比較的良好である。",
          "correct": true
        },
        {
          "text": "小児AMLの標準治療は寛解導入療法と地固め療法であり、ALLのような長期の維持療法は通常行わない。",
          "correct": false
        },
        {
          "text": "再発・難治性の小児ALLに対してはCAR-T療法が有効であるが、AMLに対するCAR-T療法はまだ研究段階である。",
          "correct": false
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "小児科",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 6,
      "content": "新生児の生理的黄疸について、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "通常、生後24時間以降に出現する。",
          "correct": false
        },
        {
          "text": "黄疸は顔面から出現し、体幹、四肢へと広がる。",
          "correct": false
        },
        {
          "text": "血中ビリルビン値は、通常、生後4～5日目にピークを迎える。",
          "correct": true
        },
        {
          "text": "赤血球寿命の短さ、肝臓のビリルビン処理能力の未熟性などが原因である。",
          "correct": true
        },
        {
          "text": "便の色は黄色であり、灰白色便は胆道閉鎖症などの病的黄疸を疑う所見である。",
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
          "text": "前兆を伴う片頭痛のある女性では、血栓症リスクのため低用量経口避妊薬は禁忌である。",
          "correct": true
        },
        {
          "text": "多嚢胞性卵巣症候群（PCOS）の排卵誘発には、第一選択としてクロミフェンやレトロゾールが用いられる。",
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
      "content": "婦人科がんについて、各選択肢の正誤を答えよ。",
      "choices": [
        {
          "text": "子宮頸癌IIB期では、化学放射線療法が標準治療である。",
          "correct": true
        },
        {
          "text": "日本における婦人科がんの罹患数は、子宮体癌が卵巣癌より多い。",
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

export const sanShoData: DepartmentData = {
  department: "産婦人科・小児科",
  total_questions: baseSanShoData.total_questions,
  hospitals: baseSanShoData.hospitals,
  years: baseSanShoData.years,
  questions: (baseSanShoData.questions as any[]).map((q: any) => ({
    ...q,
    department: "産婦人科・小児科",
    id: makeQuestionId("産婦人科・小児科", q.year, q.question_number, q.content),
    choices: (q.choices as any[]).map((c: any) => ({ ...c, correct: !!c.correct })),
  })),
};
