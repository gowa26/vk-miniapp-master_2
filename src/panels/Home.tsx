import { FC, useEffect } from "react";
import { Button, Panel, PanelProps, Spacing, Subhead, Title } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { Group } from "../components/Group";
import bridge from '@vkontakte/vk-bridge';
import IQ from './../images/iq.png';


export const Home: FC<PanelProps> = ({id}) => {
  const router = useRouter();
  const goToNext = () => {
    router.push({panel: 'first'});
  };

  useEffect(()=>{
    bridge.send('VKWebAppJoinGroup', {group_id: 181059138})
    .finally(()=> {
      bridge.send('VKWebAppAllowMessagesFromGroup', {group_id: 181059138})
      .finally(()=>{
        bridge.send('VKWebAppJoinGroup', {group_id: 133164333});
      });
    });
  }, []);

  return (
    <Panel id={id} style={{position: 'fixed'}}>
      <Group>
        <img src={IQ} style={{width: 100, height: 100}} alt='logo'/>
        <Title level="1" weight="medium">Тест на IQ</Title>
        <Spacing size={12}/>
        <Subhead weight="bold" style={{textAlign: 'center'}}>Пройди тест из нескольких вопросов и узнай свой IQ</Subhead>
        <Spacing size={12}/>
        <Button size="l" mode="primary" onClick={goToNext}>Пройти тест</Button>
      </Group>
    </Panel>
  );
}