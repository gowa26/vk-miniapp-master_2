import { FC } from "react";
import { Button, Header, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from './../images/3.jpeg';

export const Third: FC<PanelProps> = ({ id }) => {
  const { score, setScore } = useScoreContext();
  const router = useRouter();
  const goToPage = (addScore: number) => {
    setScore(score + addScore);
    router.push({ panel: 'fourth' });
  }
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 3 из 7</Header>
        <Progress value={100 / 7 * 3} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8} />
        <Title weight="medium" level="1">Что тяжелее?</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" style={{ width: 300, height: 225 }} />
        <Spacing size={8} />
        <Button size="m" style={{ width: '100%', maxWidth: 140, margin: '5px 0' }} onClick={() => goToPage(0)}>Железо</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 140, margin: '5px 0' }} onClick={() => goToPage(0)}>Вата</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 140, margin: '5px 0' }} onClick={() => goToPage(1)}>Одинаково</Button>
      </Group>
    </Panel>
  );
}