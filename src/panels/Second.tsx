import { FC, useState } from "react";
import { Button, Header, Input, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from './../images/2.jpg';

export const Second: FC<PanelProps> = ({ id }) => {
  const [answer, setAnswer] = useState<string>();
  const router = useRouter();
  const { score, setScore } = useScoreContext();
  const goToNext = () => {
    if (Number(answer) === 1) {
      setScore(score + 1);
    }
    router.push({ panel: 'third' });
  };
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 2 из 7</Header>
        <Progress value={100 / 7 * 2} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8}/>
        <Title weight="medium" level="1">Реши пример</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" style={{ width: 300, height: 150 }} />
        <Spacing size={8} />
        <Input style={{ width: '100%', maxWidth: 200 }} onChange={(e) => setAnswer(e.target.value)} />
        <Spacing size={8} />
        <Button size="l" style={{ width: '100%', maxWidth: 150 }} onClick={() => goToNext()}>Ответить</Button>
      </Group>
    </Panel>
  );
}