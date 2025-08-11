import { DepartmentData, makeQuestionId } from "@/types/quiz";

const baseGekaData = {
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
      "content": "肺癌の確定診断（病理診断）に直接寄与する検査をすべて選べ。",
      "choices": [
        {
          "text": "喀痰細胞診",
          "correct": true
        },
        {
          "text": "喀痰培養（感染症の鑑別には有用だが、癌の確定診断にはならない）",
          "correct": false
        },
        {
          "text": "経気管支肺生検（TBLB）",
          "correct": true
        },
        {
          "text": "胸部CT（病変の存在診断や病期診断に有用だが、これのみでは確定診断とならない）",
          "correct": false
        },
        {
          "text": "ツベルクリン反応（結核の検査であり、肺癌の診断には用いない）",
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
      "content": "肺癌の手術を前提とした術前検査として、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "頭部CTまたはMRI（脳転移の有無を評価するため）",
          "correct": true
        },
        {
          "text": "胸部造影CT（原発巣の広がりやリンパ節転移を評価するため）",
          "correct": true
        },
        {
          "text": "PET-CT（遠隔転移の有無を全身的に評価するため）",
          "correct": true
        },
        {
          "text": "呼吸機能検査（肺切除に耐えられるかの術後肺機能を予測するため）",
          "correct": true
        },
        {
          "text": "心電図・心エコー（心機能を確認し、手術リスクを評価するため）",
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
      "content": "肺癌について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "最も頻度が高いのは腺癌である。",
          "correct": false
        },
        {
          "text": "腺癌は肺末梢に発生することが多く、扁平上皮癌が中心性の発生を示すことが多い。",
          "correct": false
        },
        {
          "text": "小細胞癌は進行が速く、化学療法や放射線治療への感受性が高いため、これらが治療の中心となる。",
          "correct": true
        },
        {
          "text": "血中pro-GRPは、小細胞癌の腫瘍マーカーとして有用である。",
          "correct": true
        },
        {
          "text": "肺癌の一次予防として最も重要なのは禁煙である。",
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
      "content": "非小細胞肺癌において、原則として外科的切除の絶対的適応とならないものをすべて選べ。",
      "choices": [
        {
          "text": "悪性胸水（M1a）を認める。",
          "correct": true
        },
        {
          "text": "縦隔リンパ節転移（N2）は、化学放射線療法後の手術など、集学的治療の一環として切除されることがある。",
          "correct": false
        },
        {
          "text": "肺動脈主幹への浸潤（T4）も、技術的に可能であれば切除の相対的適応となることがある。",
          "correct": false
        },
        {
          "text": "胸壁浸潤（T3）は、胸壁合併切除により根治切除の対象となる。",
          "correct": false
        },
        {
          "text": "肝転移などの遠隔臓器転移（M1b/c）を認める。",
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
      "content": "気胸の治療に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "緊張性気胸は、まず緊急で胸腔穿刺による脱気を行い、陽圧換気は病態を悪化させるため禁忌である。",
          "correct": false
        },
        {
          "text": "自然気胸の初回エピソードでは、軽度であれば安静・経過観察、中等度以上で胸腔ドレナージが選択され、必ずしも即時手術とはならない。",
          "correct": false
        },
        {
          "text": "虚脱した肺を再膨張させる際は、再膨張性肺水腫を避けるため、ゆっくりと時間をかけて行う。",
          "correct": false
        },
        {
          "text": "血気胸は、活動性の出血が持続している可能性があり、緊急手術の適応となることがある。",
          "correct": true
        },
        {
          "text": "再発性や両側性、難治性の気胸は、根治を目指して手術（胸腔鏡下ブラ切除術など）の適応となる。",
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
      "content": "消化器外科の治療方針に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "重症急性胆嚢炎では、まず経皮経肝胆嚢ドレナージ（PTGBD）などで状態の改善を図り、待機的に手術を行うのが原則である。",
          "correct": false
        },
        {
          "text": "大腸癌の肝転移は、個数やサイズにかかわらず、技術的に切除可能で原発巣が制御されていれば手術適応となりうる。",
          "correct": true
        },
        {
          "text": "胃癌が大彎側に進展し、脾門部リンパ節郭清が必要な場合は、根治性を高めるために脾臓合併切除を行う。",
          "correct": true
        },
        {
          "text": "膵癌が主要な動脈（上腸間膜動脈など）に接触・浸潤している場合、切除可能境界（Borderline resectable）と判断される。",
          "correct": true
        },
        {
          "text": "Stage IIIの大腸癌では、術後再発を抑制するために補助化学療法を行うことが標準治療である。",
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
      "content": "消化管外科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "早期胃癌に対する内視鏡的切除（ESD）の適応は、リンパ節転移のリスクが低い分化型癌か未分化型癌かによって異なる。",
          "correct": true
        },
        {
          "text": "大腸癌の血行性転移で最も多い臓器は、門脈を介して血液が流入する肝臓である。",
          "correct": true
        },
        {
          "text": "ICG試験15分値が40%以上の肝硬変患者では、肝予備能が極めて低く、安全に切除できる範囲は限定的であり、肝右葉切除は禁忌である。",
          "correct": false
        },
        {
          "text": "切除可能膵癌でも術後補助化学療法を行うのが標準治療であり、それにより5年生存率は30-50%程度に向上する。",
          "correct": false
        },
        {
          "text": "重症急性胆嚢炎では、まずドレナージによる減圧と全身状態の安定化を図り、その後に待機的に胆嚢摘出術を行うのが一般的である。",
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
      "content": "消化器外科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "急性胆嚢炎では、仰臥位で右季肋部を圧迫しながら深呼吸させると、吸気時に痛みが誘発される（Murphy徴候）。",
          "correct": true
        },
        {
          "text": "胸部食道癌の手術は開胸・開腹・頸部の操作を要し、再建も複雑なため、他の術式に比べて侵襲が大きく、腹腔鏡・胸腔鏡補助下手術でも時間を要する。",
          "correct": true
        },
        {
          "text": "虫垂炎の炎症が腹膜に波及している場合、体位変換によって腹痛が増強することはあっても、特定の体位で減弱するとは限らない。",
          "correct": false
        },
        {
          "text": "膵臓がんの根治的切除後には、再発予防を目的とした術後補助化学療法が標準的に行われる。",
          "correct": true
        },
        {
          "text": "大腸癌と切除可能な肝転移が同時に見つかった場合、同時に切除する同時手術が行われることがある。",
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
      "content": "消化器外科の術式選択について、適切なものをすべて選べ。",
      "choices": [
        {
          "text": "胃GISTはリンパ節転移が稀なため、所属リンパ節郭清は行わず、腫瘍を部分的に切除する胃局所切除が標準術式である。",
          "correct": false
        },
        {
          "text": "全身状態が良好な中等症以下の急性胆嚢炎患者に対しては、早期（発症後72時間以内など）の腹腔鏡下胆嚢摘出術が推奨される。",
          "correct": true
        },
        {
          "text": "膵体部に存在する良性・低悪性度腫瘍（インスリノーマなど）で、主膵管から離れている場合は、膵実質を温存する腫瘍核出術の良い適応となる。",
          "correct": true
        },
        {
          "text": "切除可能な肝転移を伴う直腸癌は、根治を目指して手術の適応となる。",
          "correct": false
        },
        {
          "text": "腸管穿孔による汎発性腹膜炎を合併したS状結腸癌に対しては、まず原発巣を切除し、一時的人工肛門（ストマ）を造設するHartmann手術が選択される。",
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
      "content": "外科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "全身状態が良好で、リスクが中等度以下の急性胆嚢炎では、早期の腹腔鏡下胆嚢摘出術が推奨される。",
          "correct": true
        },
        {
          "text": "胸部食道癌の切除後の再建では、血流が豊富な胃管が第一選択となる。胃が使えない場合に結腸や空腸が用いられる。",
          "correct": false
        },
        {
          "text": "? (膵癌の問題)",
          "correct": null
        },
        {
          "text": "大腸癌の肝転移は、単発であれば大きさや場所に関わらず切除の適応となりうる。",
          "correct": false
        },
        {
          "text": "痩せ型の高齢女性で、腸閉塞症状と大腿内側の痛みを訴える場合は、閉鎖孔ヘルニアを強く疑う（Howship-Romberg徴候）。",
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
      "content": "消化器外科に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "胃全摘後などで胃管が使用できない食道癌の再建には、結腸や空腸が用いられることがある。",
          "correct": true
        },
        {
          "text": "高齢のやせ型女性が腸閉塞と大腿内側の痛み（Howship-Romberg徴候）を訴えた場合、閉鎖孔ヘルニアを強く疑う。",
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
      "content": "冠動脈バイパス術（CABG）に使用されるグラフトのうち、一般的に長期開存率が良いとされる動脈グラフトをすべて選べ。",
      "choices": [
        {
          "text": "橈骨動脈",
          "correct": true
        },
        {
          "text": "内胸動脈（特に左内胸動脈は最も長期開存率が高い）",
          "correct": true
        },
        {
          "text": "大伏在静脈（最も使用頻度が高いが、静脈グラフトのため長期開存率は動脈グラフトに劣る）",
          "correct": false
        },
        {
          "text": "下腹壁動脈",
          "correct": true
        },
        {
          "text": "右胃大網動脈",
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
      "content": "冠動脈疾患の治療について、正しいものを1つ選べ。",
      "choices": [
        {
          "text": "経皮的冠動脈インターベンション（PCI）後は、ステント血栓症予防のため、抗血小板薬（通常2剤）の服用が必須である。",
          "correct": false
        },
        {
          "text": "冠動脈の狭窄が75％以上あっても、心筋虚血が証明されなければ、必ずしも血行再建術（CABGやPCI）の適応とはならない。",
          "correct": false
        },
        {
          "text": "解剖学的に複雑な多枝病変（例：SYNTAXスコアが高い）では、一般にPCIよりもCABGの方が長期予後が良いとされる。",
          "correct": false
        },
        {
          "text": "左前下行枝（LAD）へのバイパスには、長期開存率が最も優れた左内胸動脈（LITA）を使用するのがゴールドスタンダードである。",
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
      "content": "大動脈瘤の破裂リスクが高いとされる因子をすべて選べ。",
      "choices": [
        {
          "text": "女性（女性は男性より破裂時の瘤径が小さい傾向があり、リスクが高いとされる）",
          "correct": false
        },
        {
          "text": "高血圧（血圧が高いほど壁にかかるストレスが大きく、リスクが高い）",
          "correct": true
        },
        {
          "text": "胸部大動脈瘤（同径であれば、腹部大動脈瘤より胸部大動脈瘤の方が破裂リスクは高い）",
          "correct": false
        },
        {
          "text": "囊状動脈瘤（紡錘状より壁の張力が不均一で、破裂リスクが高い）",
          "correct": true
        },
        {
          "text": "仮性動脈瘤（真性動脈瘤より壁が脆弱で、破裂リスクが高い）",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2021,
      "original_category": "心臓血管外科",
      "source_file": "北野病院 2021年度.json"
    },
    {
      "question_number": 23,
      "content": "下記に挙げる動脈のうち、胸部および腹部大動脈から「直接は」分枝しないものを1つ選べ。",
      "choices": [
        {
          "text": "左鎖骨下動脈（胸部大動脈（大動脈弓）から直接分枝する）",
          "correct": false
        },
        {
          "text": "腹腔動脈（腹部大動脈から直接分枝する）",
          "correct": false
        },
        {
          "text": "脾動脈（腹腔動脈から分枝する）",
          "correct": true
        },
        {
          "text": "上腸間膜動脈（腹部大動脈から直接分枝する）",
          "correct": false
        },
        {
          "text": "下腸間膜動脈（腹部大動脈から直接分枝する）",
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
      "content": "肥厚性幽門狭窄症について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "嘔吐は、生後2〜3週頃から始まり、徐々に悪化するのが典型的である。",
          "correct": false
        },
        {
          "text": "男児（特に長子）に多いとされる。",
          "correct": true
        },
        {
          "text": "胃液（塩酸）の喪失により、低クロール性代謝性アルカローシスをきたす。",
          "correct": true
        },
        {
          "text": "治療は、外科的に幽門の筋層を切開する粘膜外幽門筋切開術（Ramstedt法）を行う。",
          "correct": true
        },
        {
          "text": "明確な原因は不明だが、遺伝的要因の関与も示唆されている。",
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
      "content": "小児鼠径ヘルニアについて、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "小児外科で最も手術件数の多い疾患である。",
          "correct": true
        },
        {
          "text": "近年、整容面に優れ、対側のヘルニアも確認できる腹腔鏡下手術が増加している。",
          "correct": true
        },
        {
          "text": "腹膜鞘状突起の閉鎖不全が原因であり、同じく閉鎖不全で生じる精索・陰嚢水腫との鑑別が重要である。",
          "correct": true
        },
        {
          "text": "自然治癒が見込めないため手術を行うが、成人と異なりヘルニア嚢の高位結紮のみで、人工布（メッシュ）は通常用いない。",
          "correct": false
        },
        {
          "text": "腹壁が未熟なため、早産低出生体重児に発症する頻度が高い。",
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
      "content": "小児の胃食道逆流症（GERD）について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "乳児の胃食道逆流は生理的なものが多く、成長と共に改善するため、合併症がなければ経過観察が基本である。",
          "correct": false
        },
        {
          "text": "24時間食道pHモニタリングで、pH<4となる時間の総計の割合（% time pH<4）が4%以上で異常と診断されることが多い。",
          "correct": false
        },
        {
          "text": "嘔吐や哺乳障害だけでなく、無呼吸発作や喘鳴などの呼吸器症状をきたすことがある。",
          "correct": false
        },
        {
          "text": "治療の基本は、授乳後の体位変換（上半身挙上）やミルクの粘度調整、重症例での制酸薬投与などの保存的療法である。",
          "correct": true
        },
        {
          "text": "保存的療法に抵抗性で、重篤な合併症を伴う場合に、外科的治療として噴門形成術（Nissen法など）が行われる。",
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
      "content": "小児外科の術式と疾患の組み合わせとして、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "ヒルシュスプルング病 ― Duhamel法、Soave法など",
          "correct": false
        },
        {
          "text": "十二指腸閉鎖症 ― 先細り吻合（Kimura法）",
          "correct": true
        },
        {
          "text": "膀胱尿管逆流症 ― 新膀胱尿管吻合術（Cohen法など）",
          "correct": true
        },
        {
          "text": "胃食道逆流症 ― 噴門形成術（Nissen法）",
          "correct": false
        },
        {
          "text": "鎖肛（直腸肛門奇形） ― 仙骨会陰式直腸肛門形成術（PSARP）",
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
      "content": "耳鼻咽喉科・頭頸部外科疾患について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "メニエール病は、反復性のめまい発作と変動する聴覚症状が特徴で、確定診断には内リンパ水腫を証明する蝸電図やMRIが有用である。",
          "correct": true
        },
        {
          "text": "外リンパ瘻は、内耳と中耳を隔てる膜が破れる病態で、鼻かみなどの急な圧変化や、頭部外傷が原因となる。",
          "correct": true
        },
        {
          "text": "頭頸部原発不明癌では、PET-CTや上咽頭などの粘膜生検（blind biopsy）で原発巣を検索するが、不明のまま治療（頸部郭清や放射線治療）を開始することもある。",
          "correct": false
        },
        {
          "text": "甲状腺乳頭癌の治療は、甲状腺切除術（葉切除〜全摘）と、必要に応じた頸部リンパ節郭清が基本である。",
          "correct": true
        },
        {
          "text": "シェーグレン症候群は、MALTリンパ腫などの悪性リンパ腫を発症するリスクが高く、反復性耳下腺炎との鑑別が問題となりうる。",
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
      "content": "耳鼻咽喉科・頭頸部外科について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "先天性難聴に対する人工内耳埋め込み術は、言語発達の観点から、できるだけ早期（1歳前後）に行うことが推奨される。",
          "correct": false
        },
        {
          "text": "副鼻腔CTで一側性の上顎洞に軟部陰影を認める場合、副鼻腔真菌症、歯性上顎洞炎、上顎癌などが鑑別に挙がる。",
          "correct": true
        },
        {
          "text": "末梢性めまいの鑑別診断では、めまいの持続時間（秒、分、時間、日）、難聴や耳鳴の有無、頭位変換との関連などが重要な情報となる。",
          "correct": true
        },
        {
          "text": "加齢性難聴は、通常、両側性で高音域から障害される感音難聴である。",
          "correct": false
        },
        {
          "text": "耳下腺に発生する腫瘍で最も頻度が高いのは、良性腫瘍である多形腺腫である。",
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
      "content": "耳鼻咽喉科・頭頸部外科について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "耳鳴りの治療では、薬物療法のみならず、カウンセリングや音響療法などを通じて苦痛を軽減し、QOLを向上させることが重要である。",
          "correct": true
        },
        {
          "text": "アレルギー性鼻炎に対して、作用機序の異なる複数の内服薬の併用は、ガイドライン上も認められている治療選択肢である。",
          "correct": false
        },
        {
          "text": "伝音難聴は外耳・中耳の障害が原因であり、ビタミン剤やステロイドは主に突発性難聴などの急性感音難聴の治療に用いられる。",
          "correct": false
        },
        {
          "text": "頭頸部癌の組織型は、その大部分が扁平上皮癌である。",
          "correct": false
        },
        {
          "text": "甲状腺癌の中で最も頻度が高いのは乳頭癌であり、日本における甲状腺癌の約90%を占める。",
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
      "content": "急性期脳梗塞に対する機械的血栓回収療法について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "頭部MRIなどの画像診断に基づき、発症後24時間以内まで適応が拡大されることがある。",
          "correct": true
        },
        {
          "text": "t-PA静注療法（血栓溶解療法）の効果が不十分な場合や、t-PAが禁忌の場合でも、血栓回収療法の適応となる。",
          "correct": false
        },
        {
          "text": "従来の適応は発症後6時間以内であったが、DAWN/DEFUSE3試験の結果を受け、適応時間が延長された。",
          "correct": false
        },
        {
          "text": "脳梗塞の症状が軽症（例：NIHSS 5点以下）でも、内頸動脈や中大脳動脈近位部などの主幹動脈に閉塞があれば、治療の適応を慎重に判断する。",
          "correct": true
        },
        {
          "text": "血栓回収療法の良い適応は、内頸動脈や中大脳動脈M1部などの主幹動脈閉塞であり、それより末梢（M2以遠）の閉塞は適応とならないことが多い。",
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
      "content": "急性期脳梗塞に対するt-PA静注療法（アルテプラーゼ）の適応に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "発症時刻不明の脳梗塞（Wake-up stroke）でも、MRIでDWI高信号域に対しFLAIR画像で明らかな高信号を認めない場合（DWI-FLAIR mismatch）、発症早期と判断し投与を考慮できる。",
          "correct": true
        },
        {
          "text": "来院時に収縮期血圧が185mmHg以上でも、適切な降圧薬の静注で血圧を安定的にコントロールできれば、投与は可能である。",
          "correct": true
        },
        {
          "text": "活動性の出血（頭蓋内、消化管、尿路など）や、大動脈解離の合併は、絶対禁忌である。",
          "correct": false
        },
        {
          "text": "過去の症候性頭蓋内出血の既往は、投与禁忌事項である。",
          "correct": true
        },
        {
          "text": "t-PA投与後24時間は出血性合併症のリスクが高いため、抗血小板薬や抗凝固薬の投与は原則として行わない。",
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
      "content": "形成外科領域の疾患について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "耳下腺部での顔面神経（運動神経）の切断では、顔面筋の麻痺が生じる。前額部の知覚は三叉神経支配である。",
          "correct": false
        },
        {
          "text": "熱傷面積の算定には、成人は「9の法則」、小児は「5の法則」やLund-Browder chartを用いる。糖尿病の有無で算定方法は変わらない。",
          "correct": false
        },
        {
          "text": "眼窩吹き抜け骨折では、眼窩と上顎洞や篩骨洞が交通するため、鼻をかむことで眼窩内に空気が入り、眼窩気腫や複視が悪化することがある。鼻出血も伴う。",
          "correct": true
        },
        {
          "text": "口蓋裂手術の主要な目的の一つは、鼻咽腔閉鎖機能を獲得し、開鼻声などの構音障害を改善することである。",
          "correct": true
        },
        {
          "text": "皮膚移植では、拒絶反応を避けるため、本人から採皮した自家植皮が原則である。親子間の移植（同種移植）は一時的な被覆にしかならない。",
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
      "content": "乳房および乳腺疾患について、正しい記述をすべて選べ。",
      "choices": [
        {
          "text": "乳房は通常、前胸壁の第2肋骨から第6肋骨の高さに位置し、内側胸骨傍リンパ節は主に第1-3肋間に存在する。",
          "correct": true
        },
        {
          "text": "良性腫瘍の線維腺腫は20～30代に、境界悪性・悪性である葉状腫瘍は40代以降に好発する。",
          "correct": true
        },
        {
          "text": "日本人女性の乳癌の好発年齢には、閉経前後の40代後半から50代前半と、60代後半の2つのピーク（bimodal peak）がある。",
          "correct": true
        },
        {
          "text": "血性乳頭分泌の原因は、多くが乳管内乳頭腫などの良性疾患であり、乳癌である割合は約10-15%程度である。",
          "correct": false
        },
        {
          "text": "BRCA2遺伝子変異保持者は、乳癌、卵巣癌の他に、前立腺癌や膵臓癌のリスクが上昇する。",
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
      "content": "浸潤性乳癌の特殊型である浸潤性小葉癌について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "浸潤性乳癌の特殊型の中では、粘液癌に次いで頻度が高い。",
          "correct": true
        },
        {
          "text": "ホルモン受容体（エストロゲン受容体）陽性であることが多い。",
          "correct": true
        },
        {
          "text": "両側性や多中心性に発生しやすいという特徴がある。",
          "correct": true
        },
        {
          "text": "腹膜や消化管、卵巣などへ特殊な様式で転移することがある。",
          "correct": true
        }
      ],
      "hospital": "北野病院",
      "year": 2022,
      "original_category": "乳腺",
      "source_file": "2022年 北野病院.json"
    },
    {
      "question_number": 25,
      "content": "消化器外科の治療方針に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "重症の急性胆嚢炎では、まずドレナージによる胆道減圧と全身状態の改善を図り、待機的に手術を行うのが原則である。",
          "correct": false
        },
        {
          "text": "大腸癌の肝転移は、個数やサイズよりも、技術的に切除可能かどうかが重要であり、近年適応は拡大している。",
          "correct": true
        },
        {
          "text": "胃体上部大弯の進行癌などで脾門リンパ節郭清が必要な場合、根治性を目的に脾臓を合併切除する。",
          "correct": true
        },
        {
          "text": "膵癌が上腸間膜動脈などの主要動脈に接触している場合、切除可能境界（Borderline resectable）に分類される。",
          "correct": true
        },
        {
          "text": "リンパ節転移を認めるStage IIIの大腸癌では、術後再発率を低下させるため、補助化学療法が標準治療として推奨されている。",
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
      "content": "小児外科の疾患と術式の組み合わせとして、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "ヒルシュスプルング病 ― Duhamel法、Soave法など",
          "correct": false
        },
        {
          "text": "十二指腸閉鎖症 ― 先細り吻合（Kimura法）",
          "correct": true
        },
        {
          "text": "膀胱尿管逆流症 ― 新膀胱尿管吻合術（Cohen法など）",
          "correct": true
        },
        {
          "text": "胃食道逆流症 ― 噴門形成術（Nissen法）",
          "correct": false
        },
        {
          "text": "鎖肛（直腸肛門奇形） ― 仙骨会陰式直腸肛門形成術（PSARP）",
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
      "content": "気胸の治療に関する記述として、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "緊張性気胸では、陽圧換気は状態を悪化させるため禁忌であり、まず行うべきは緊急の胸腔穿刺による脱気である。",
          "correct": false
        },
        {
          "text": "初回の自然気胸では、程度に応じて安静経過観察や胸腔ドレナージが選択され、直ちに手術適応とはならないことが多い。",
          "correct": false
        },
        {
          "text": "胸腔ドレナージで虚脱した肺を再膨張させる際は、再膨張性肺水腫のリスクを避けるため、ゆっくりと時間をかけて行う。",
          "correct": false
        },
        {
          "text": "血気胸は、持続的な出血を示唆し、ショックに至る可能性があるため、緊急手術の適応となることがある。",
          "correct": true
        },
        {
          "text": "両側性気胸や再発を繰り返す気胸は、根治を目的とした手術の適応となる。",
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
      "content": "浸潤性乳癌の特殊型である浸潤性小葉癌について、正しいものをすべて選べ。",
      "choices": [
        {
          "text": "浸潤性乳癌の特殊型のうち、粘液癌に次いで頻度が高い。",
          "correct": true
        },
        {
          "text": "ホルモン受容体（エストロゲン受容体、プロゲステロン受容体）が陽性である割合が高い。",
          "correct": true
        },
        {
          "text": "ホルモン受容体陽性が多いため、ホルモン療法が良い適応となることが多い。",
          "correct": false
        },
        {
          "text": "乳房内で多中心性、あるいは両側性に発生しやすい特徴がある。",
          "correct": true
        },
        {
          "text": "腹膜、消化管、卵巣など、通常の乳癌とは異なる部位への転移（インディアンファイル状の浸潤）をすることがある。",
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

export const gekaData: DepartmentData = {
  department: "外科",
  total_questions: baseGekaData.total_questions,
  hospitals: baseGekaData.hospitals,
  years: baseGekaData.years,
  questions: (baseGekaData.questions as any[]).map((q: any) => ({
    ...q,
    department: "外科",
    id: makeQuestionId("外科", q.year, q.question_number, q.content),
    choices: (q.choices as any[]).map((c: any) => ({ ...c, correct: !!c.correct })),
  })),
};
