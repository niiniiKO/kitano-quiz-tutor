import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { DepartmentKey, Question } from "@/types/quiz";
import { naikaData } from "@/data/kitano/naika";
import { gekaData } from "@/data/kitano/geka";
import { sanShoData } from "@/data/kitano/san-sho";
import { minorData } from "@/data/kitano/minor";
import { othersData } from "@/data/kitano/others";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = "select" | "quiz" | "result" | "review";

const departmentOptions: DepartmentKey[] = [
  "内科",
  "外科",
  "産婦人科・小児科",
  "マイナー科",
];

const datasetMap: Record<Exclude<DepartmentKey, "その他">, Question[]> = {
  内科: naikaData.questions,
  外科: gekaData.questions,
  "産婦人科・小児科": sanShoData.questions,
  マイナー科: minorData.questions,
};

const Index = () => {
  const [phase, setPhase] = useState<Phase>("select");
  const [selectedDept, setSelectedDept] = useState<DepartmentKey | "">("");
  const [queue, setQueue] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean | undefined>>({});
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<Record<string, { allCorrect: boolean; selected: (boolean | undefined)[] }>>({});

  const progress = useMemo(() => (queue.length ? ((current) / queue.length) * 100 : 0), [current, queue.length]);

  const incorrectIds = useMemo(
    () => Object.entries(results).filter(([, r]) => !r.allCorrect).map(([id]) => id),
    [results]
  );

  const currentQ = queue[current];

  const startQuiz = () => {
    if (!selectedDept || selectedDept === "その他") {
      toast({ title: "科を選択してください" });
      return;
    }
    const main = datasetMap[selectedDept as Exclude<DepartmentKey, "その他">] ?? [];
    const others = othersData.questions;
    const combined = shuffle([...main, ...others]);
    setQueue(combined);
    setCurrent(0);
    setAnswers({});
    setResults({});
    setChecked(false);
    setPhase("quiz");
  };

  const onSelect = (choiceIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [choiceIndex]: value === "true" }));
  };

  const grade = () => {
    if (!currentQ) return;
    const selected = currentQ.choices.map((_, idx) => answers[idx]);
    const allAnswered = selected.every((v) => typeof v === "boolean");
    if (!allAnswered) {
      toast({ title: "すべての選択肢に正誤を選んでください" });
      return;
    }

    const allCorrect = currentQ.choices.every((c, idx) => c.correct === selected[idx]);
    setResults((prev) => ({ ...prev, [currentQ.id]: { allCorrect, selected } }));
    setChecked(true);

    toast({
      title: allCorrect ? "正解！" : "不正解があります",
      description: allCorrect ? "次の問題へ進みましょう" : "誤りの選択肢を確認しましょう",
    });
  };

  const next = () => {
    if (current + 1 >= queue.length) {
      setPhase("result");
      return;
    }
    setCurrent((c) => c + 1);
    setAnswers({});
    setChecked(false);
  };

  const startReview = () => {
    const setIds = new Set(incorrectIds);
    const reviewQs = queue.filter((q) => setIds.has(q.id));
    if (reviewQs.length === 0) {
      toast({ title: "不正解の問題はありません" });
      return;
    }
    setQueue(shuffle(reviewQs));
    setCurrent(0);
    setAnswers({});
    setChecked(false);
    setPhase("review");
  };

  const resetAll = () => {
    setPhase("select");
    setSelectedDept("");
    setQueue([]);
    setCurrent(0);
    setAnswers({});
    setResults({});
    setChecked(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>北野病院 過去問クイズチューター｜内科・外科・産婦人科/小児科・マイナー</title>
        <meta name="description" content="北野病院の過去問を科別に学習。選択式の正誤判定で知識を定着。全問終了後は不正解のみ復習できます。" />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : "https://example.com"} />
      </Helmet>

      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              北野病院 過去問クイズチューター
            </h1>
            <p className="mt-2 text-muted-foreground">
              科を選んで学習開始。その他の問題は自動的に混ぜて出題します。
            </p>
          </div>

          {phase === "select" && (
            <Card className="shadow-[var(--shadow-elev)]">
              <CardHeader>
                <CardTitle>科を選択</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="dept">出題科</Label>
                  <div className="mt-2 max-w-md">
                    <Select value={selectedDept} onValueChange={(v) => setSelectedDept(v as DepartmentKey)}>
                      <SelectTrigger id="dept" className="w-full">
                        <SelectValue placeholder="内科・外科・産婦人科/小児科・マイナーから選択" />
                      </SelectTrigger>
                      <SelectContent>
                        {departmentOptions.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" onClick={startQuiz}>学習を開始</Button>
                  <Button variant="outline" onClick={resetAll}>リセット</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {(phase === "quiz" || phase === "review") && currentQ && (
            <>
              <div className="mb-4">
                <Progress value={progress} />
                <div className="mt-2 text-sm text-muted-foreground">
                  {current + 1} / {queue.length}
                </div>
              </div>

              <Card key={currentQ.id} className="shadow-[var(--shadow-elev)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-sm font-normal text-muted-foreground">{currentQ.department}・{currentQ.year}・問{currentQ.question_number}</span>
                    <Separator orientation="vertical" className="h-5" />
                    <span>{currentQ.content}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {currentQ.choices.map((ch, idx) => {
                    const sel = answers[idx];
                    const isCorrect = checked && typeof sel === "boolean" && sel === ch.correct;
                    const isWrong = checked && typeof sel === "boolean" && sel !== ch.correct;
                    return (
                      <div key={`${currentQ.id}-${idx}`} className={`rounded-md border p-3 md:p-4 transition-colors ${isCorrect ? "ring-1 ring-[hsl(var(--success))]" : isWrong ? "border-destructive" : "border-border"}`}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="text-sm md:text-base">{ch.text}</div>
                          <RadioGroup
                            className="flex gap-6"
                            onValueChange={(v) => onSelect(idx, v)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem id={`t-${currentQ.id}-${idx}`} value="true" />
                              <Label htmlFor={`t-${currentQ.id}-${idx}`}>正しい</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem id={`f-${currentQ.id}-${idx}`} value="false" />
                              <Label htmlFor={`f-${currentQ.id}-${idx}`}>誤り</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        {checked && (
                          <div className={`mt-2 text-xs ${isCorrect ? "text-[hsl(var(--success))]" : isWrong ? "text-destructive" : "text-muted-foreground"}`}>
                            正解: {ch.correct ? "正しい" : "誤り"}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {!checked ? (
                      <Button onClick={grade}>採点する</Button>
                    ) : (
                      <Button variant="hero" onClick={next}>次へ</Button>
                    )}
                    <Button variant="outline" onClick={resetAll}>科の選択に戻る</Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {phase === "result" && (
            <Card className="shadow-[var(--shadow-elev)]">
              <CardHeader>
                <CardTitle>学習結果</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground">
                  合計: {queue.length}問 / 正解: {queue.length - incorrectIds.length}問 / 不正解: {incorrectIds.length}問
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" onClick={startReview}>
                    不正解のみ復習する
                  </Button>
                  <Button variant="outline" onClick={resetAll}>最初からやり直す</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
};

export default Index;
