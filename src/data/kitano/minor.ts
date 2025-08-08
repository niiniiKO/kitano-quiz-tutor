import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const minorData: DepartmentData = {
  department: "マイナー科",
  total_questions: 76,
  hospitals: ["北野病院"],
  years: [2019, 2021, 2022, 2024],
  questions: [
    {
      department: "マイナー科",
      question_number: 21,
      content: "創傷治癒の過程について、各選択肢の正誤を答えよ。",
      choices: [
        { text: "止血期は、創傷治癒の最初の段階である。", correct: true },
        {
          text: "炎症期には、好中球やマクロファージが細菌や壊死組織を貪食する。",
          correct: true,
        },
        { text: "増殖期には、コラーゲン線維が再構築され、瘢痕組織が成熟する。", correct: false },
        { text: "成熟期には、肉芽組織の形成と血管新生が活発に起こる。", correct: false },
        { text: "上皮化は、成熟期の最終段階で完了する。", correct: false },
      ],
      hospital: "北野病院",
      year: 2022,
      original_category: "形成外科",
      source_file: "2023年度①のコピー.json",
      id: makeQuestionId(
        "マイナー科",
        2022,
        21,
        "創傷治癒の過程について、各選択肢の正誤を答えよ。"
      ),
    },
    {
      department: "マイナー科",
      question_number: 21,
      content: "創傷治癒について、各選択肢の正誤を答えよ。",
      choices: [
        { text: "創傷治癒の過程は、止血期、炎症期、増殖期、成熟期の順で進行する。", correct: true },
        { text: "上皮化は創傷後、数時間以内に開始される。", correct: false },
        { text: "単球と多核白血球は貪食能を持つ。", correct: true },
        { text: "創傷は、乾燥環境下よりも湿潤環境下の方が上皮化は早い。", correct: true },
        { text: "コラーゲンの増殖は、受傷後直ちに開始される。", correct: false },
      ],
      hospital: "北野病院",
      year: 2021,
      original_category: "形成外科",
      source_file: "北野病院 2021年度.json",
      id: makeQuestionId(
        "マイナー科",
        2021,
        21,
        "創傷治癒について、各選択肢の正誤を答えよ。"
      ),
    },
  ],
};
