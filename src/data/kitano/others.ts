import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const othersData: DepartmentData = {
  department: "その他",
  total_questions: 1,
  hospitals: ["北野病院"],
  years: [2022],
  questions: [
    {
      department: "その他",
      question_number: 36,
      content: "児童虐待について、各選択肢の正誤を答えよ。",
      choices: [
        { text: "『不適切な養育(マルトリートメント)』とほぼ同義である。", correct: true },
        { text: "認知機能の発達に影響を与える。", correct: true },
        { text: "児童相談所への相談数は減少傾向である。", correct: false },
        { text: "被虐待経験と思春期以降における非行・犯罪傾向には関連はない。", correct: false },
        { text: "虐待を受けた子供は、将来自分の子供に虐待をしにくい。", correct: false },
      ],
      hospital: "北野病院",
      year: 2022,
      original_category: "公衆衛生",
      source_file: "北野病院 2022年度.json",
      id: makeQuestionId(
        "その他",
        2022,
        36,
        "児童虐待について、各選択肢の正誤を答えよ。"
      ),
    },
  ],
};
