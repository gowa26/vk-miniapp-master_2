import { FC } from "react";
import { Button, Header, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import Picture from "./../images/4.jpg";

export const Fourth: FC<PanelProps> = ({ id }) => {
  const { score, setScore } = useScoreContext();
  const router = useRouter();
  const goToPage = (addScore: number) => {
    setScore(score + addScore);
    router.push({ panel: 'fifth' });
  };

  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        <Header>Вопрос 4 из 7</Header>
        <Progress value={100 / 7 * 4} style={{ width: 200, minWidth: 0 }} />
        <Spacing size={8} />
        <Title weight="medium" level="1">Какое лицо лишнее?</Title>
        <Spacing size={8} />
        <img src={Picture} alt="" style={{ width: 200, height: 200 }} />
        <Spacing size={8} />
        <Button size="m" style={{ width: '100%', maxWidth: 100, margin: '5px 0' }} onClick={() => goToPage(0)}>1</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 100, margin: '5px 0' }} onClick={() => goToPage(0)}>2</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 100, margin: '5px 0' }} onClick={() => goToPage(0)}>3</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 100, margin: '5px 0' }} onClick={() => goToPage(1)}>4</Button>
        <Button size="m" style={{ width: '100%', maxWidth: 100, margin: '5px 0' }} onClick={() => goToPage(0)}>5</Button>
      </Group>
    </Panel>
  );
}