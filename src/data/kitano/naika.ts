import { DepartmentData, makeQuestionId } from "@/types/quiz";

export const naikaData: DepartmentData = {
  department: "内科",
  total_questions: 135,
  hospitals: ["北野病院"],
  years: [2019, 2021, 2022, 2023, 2024],
  questions: [
    {
      department: "内科",
      question_number: 15,
      content:
        "抗体とその疾患の組み合わせについて、各選択肢の正誤を答えよ。",
      choices: [
        { text: "抗Mi-2抗体 - 皮膚筋炎", correct: true },
        { text: "抗ARS抗体 - 間質性肺炎", correct: true },
        { text: "抗SS-A抗体 - 新生児ループス", correct: true },
        { text: "抗CCP抗体 - リウマチ性多発筋痛症", correct: false },
        { text: "抗MDA5抗体 - 多発性筋炎", correct: false },
      ],
      hospital: "北野病院",
      year: 2019,
      original_category: "リウマチ膠原病内科",
      source_file: "2020年度 北野病院.json",
      id: makeQuestionId(
        "内科",
        2019,
        15,
        "抗体とその疾患の組み合わせについて、各選択肢の正誤を答えよ。"
      ),
    },
    {
      department: "内科",
      question_number: 15,
      content: "正しい記載について、各選択肢の正誤を答えよ。",
      choices: [
        {
          text:
            "全身性エリテマトーデスの診断基準において抗核抗体は80倍以上が前提となっている。",
          correct: true,
        },
        {
          text:
            "高安動脈炎は大動脈・大動脈からの1次分枝の両方あるいはどちらかが病変である。",
          correct: true,
        },
        { text: "皮膚筋炎は筋症状がないと診断できない。", correct: false },
        {
          text:
            "シェーグレン症候群はSS-A抗体かSS-B抗体のどちらかが陽性でないと診断できない。",
          correct: false,
        },
        { text: "MCTDはU1-RNP抗体が陽性でないと診断できない。", correct: true },
      ],
      hospital: "北野病院",
      year: 2024,
      original_category: "リウマチ内科",
      source_file: "2024年北野再現.json",
      id: makeQuestionId(
        "内科",
        2024,
        15,
        "正しい記載について、各選択肢の正誤を答えよ。"
      ),
    },
  ],
};
