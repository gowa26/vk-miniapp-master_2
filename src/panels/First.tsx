import { FC, useEffect } from "react";
import { Button, Header, Panel, PanelProps, Progress, Spacing, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import { useScoreContext } from "../helpers/scoreContext";
import bridge from '@vkontakte/vk-bridge';
import Picture from './../images/1.jpg';

export const First: FC<PanelProps> = ({id}) => {
  const { score, setScore } = useScoreContext();
  const router = useRouter();
  const goToNext = (addScore: number) => {
    setScore(score + addScore);
    router.push({panel: 'second'});
  };
  useEffect(()=>{
    //@ts-ignore
    bridge.send('VKWebAppShowNativeAds', {ad_format: 'preloader'});
  }, []);

  return (
    <Panel id={id} style={{position: 'fixed'}}>
      <Group>
        <Header>Вопрос 1 из 7</Header>
        <Progress value={100/7} style={{width: 200, minWidth: 0}}/>
        <Spacing size={8}/>
        <Title level="1" weight="medium">Что тут лишнее?</Title>
        <Spacing size={8}/>
        <img src={Picture} style={{width: 240, height: 240}} alt='Картинка'/>
        <Button size="m" style={{width: '100%', maxWidth: 140, margin: '5px 0'}} onClick={()=>goToNext(0)}>Клубника</Button>
        <Button size="m" style={{width: '100%', maxWidth: 140, margin: '5px 0'}} onClick={()=>goToNext(0)}>Малина</Button>
        <Button size="m" style={{width: '100%', maxWidth: 140, margin: '5px 0'}} onClick={()=>goToNext(0)}>Помидор</Button>
        <Button size="m" style={{width: '100%', maxWidth: 140, margin: '5px 0'}} onClick={()=>goToNext(1)}>Крыжовник</Button>
      </Group>
    </Panel>
  );
}