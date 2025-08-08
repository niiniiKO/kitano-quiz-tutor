import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const sanShoData: DepartmentData = {
  department: "産婦人科・小児科",
  total_questions: 78,
  hospitals: ["北野病院"],
  years: [2019, 2021, 2022, 2024],
  questions: [
    {
      department: "産婦人科・小児科",
      question_number: 30,
      content: "乳癌について、各選択肢の正誤を答えよ。",
      choices: [
        { text: "DCISの部分切除後、放射線照射は必要ない。", correct: false },
        { text: "閉経後にはLHRHアゴニスト療法を行う。", correct: false },
        { text: "BCR1変異はトリプルネガティブ乳癌のリスクが高い。", correct: true },
        { text: "BCR2変異はfanconi貧血のリスクが高い。", correct: true },
        { text: "HBOCで乳がんと卵巣癌を比べると卵巣癌の方が発症年齢が若い。", correct: false },
      ],
      hospital: "北野病院",
      year: 2019,
      original_category: "乳腺外科",
      source_file: "2020年度 北野病院.json",
      id: makeQuestionId(
        "産婦人科・小児科",
        2019,
        30,
        "乳癌について、各選択肢の正誤を答えよ。"
      ),
    },
    {
      department: "産婦人科・小児科",
      question_number: 30,
      content: "乳がんの特殊型である小葉がんについて、各選択肢の正誤を答えよ。",
      choices: [
        { text: "特別な方の中では粘液ガンの次に多い", correct: true },
        { text: "ホルモン受容体陽性の割合がおおい", correct: true },
        { text: "ホルモン療法関係ない", correct: false },
        { text: "両側、多中心性で生じる。", correct: true },
        { text: "腹膜、卵巣、消化管に特殊な形で転移する。", correct: true },
      ],
      hospital: "北野病院",
      year: 2022,
      original_category: "乳腺外科",
      source_file: "2023年度①のコピー.json",
      id: makeQuestionId(
        "産婦人科・小児科",
        2022,
        30,
        "乳がんの特殊型である小葉がんについて、各選択肢の正誤を答えよ。"
      ),
    },
  ],
};
