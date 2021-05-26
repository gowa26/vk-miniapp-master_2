import { FC, useState } from "react";
import { useRouter } from "@unexp/router";
import { Button, Header, Input, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from "./../images/6.jpg";

export const Sixth: FC<PanelProps> = ({ id }) => {
  const [answer, setAnswer] = useState<string>();
  const { score, setScore } = useScoreContext();
  const router = useRouter();
  const goToPage = () => {
    if (Number(answer) === 4) setScore(score + 1);
    router.push({ panel: 'seventh' });
  }
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 6 из 7</Header>
        <Progress value={100 / 7 * 6} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8} />
        <Title weight="medium" level="1" style={{ textAlign: 'center' }}>Какое число должно стоять вместо знака "?"?</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" style={{ width: 250, height: 250 }} />
        <Spacing size={8} />
        <Input style={{ width: 150 }} onChange={(e) => setAnswer(e.target.value)} />
        <Spacing size={8} />
        <Button size="m" style={{ width: 150 }} onClick={() => goToPage()}>Ответить</Button>
      </Group>
    </Panel>
  );
}