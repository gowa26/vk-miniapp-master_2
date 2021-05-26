import { FC, useState } from "react";
import { Button, Header, Input, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from "./../images/7.jpg";


export const Seventh: FC<PanelProps> = ({ id }) => {
  const [answer, setAnswer] = useState<string>();
  const { score, setScore } = useScoreContext();
  const router = useRouter();
  const goToPage = () => {
    if (Number(answer) === 8) setScore(score + 1);
    router.push({ panel: 'final' });
  }
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 7 из 7</Header>
        <Progress value={100} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8} />
        <Title weight="medium" level="1" style={{ textAlign: 'center' }}>Сколько треугольников на картинке?</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" />
        <Spacing size={8} />
        <Input style={{ width: 140 }} onChange={(e) => setAnswer(e.target.value)} />
        <Spacing size={8} />
        <Button size="m" style={{ width: 140 }} onClick={() => goToPage()}>Ответить</Button>
      </Group>
    </Panel>
  );
}