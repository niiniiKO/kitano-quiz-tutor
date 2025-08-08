import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const gekaData: DepartmentData = {
  department: "外科",
  total_questions: 31,
  hospitals: ["北野病院"],
  years: [2019, 2021, 2022, 2024],
  questions: [
    {
      department: "外科",
      question_number: 29,
      content:
        "肺癌の確定診断において有用な検査について、各選択肢の正誤を答えよ。",
      choices: [
        { text: "喀痰細胞診", correct: true },
        { text: "喀痰培養", correct: false },
        { text: "経気管支肺生検", correct: true },
        { text: "胸部 CT", correct: true },
        { text: "ツベルクリン反応", correct: false },
      ],
      hospital: "北野病院",
      year: 2024,
      original_category: "呼吸器外科",
      source_file: "北野 2023.json",
      id: makeQuestionId(
        "外科",
        2024,
        29,
        "肺癌の確定診断において有用な検査について、各選択肢の正誤を答えよ。"
      ),
    },
  ],
};
