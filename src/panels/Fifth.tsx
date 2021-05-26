import { FC } from "react";
import { Button, Header, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from "./../images/5.jpg";

export const Fifth: FC<PanelProps> = ({ id }) => {
  const router = useRouter();
  const { score, setScore } = useScoreContext();
  const goToPage = (addScore: number) => {
    setScore(score + addScore);
    router.push({ panel: 'sixth' });
  }
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 5 из 7</Header>
        <Progress value={100 / 7 * 5} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8} />
        <Title weight="medium" level="1" style={{ textAlign: 'center' }}>Какой стакан наполнится первым?</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" style={{ width: 300, height: 200 }} />
        <Spacing size={8} />
        <div style={{ width: 200, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>1</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>2</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(1)}>3</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>4</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>5</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>6</Button>
          <Button size="m" style={{ marginBottom: 5, width: '30%' }} onClick={() => goToPage(0)}>7</Button>
        </div>
      </Group>
    </Panel>
  );
}