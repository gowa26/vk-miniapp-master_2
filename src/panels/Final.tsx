import { FC, useEffect, useState } from "react";
import { Button, Panel, PanelProps, Spacing, Spinner, Title } from "@vkontakte/vkui";
import { Icon24Repost, Icon24StoryOutline } from "@vkontakte/icons";
import { Group } from "../components/Group";
import { APPID } from "../helpers/const";
import { storyImages, albumImages } from "../helpers/images";
import { useScoreContext } from "../helpers/scoreContext";
import bridge from "@vkontakte/vk-bridge";

export const Final: FC<PanelProps> = ({ id }) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const { score } = useScoreContext();
  useEffect(() => {
    const setPhoto = () => {
      bridge.send('VKWebAppGetAuthToken', { app_id: APPID, scope: "photos" })
        .then(data => {
          if (data.scope !== "photos") return setPhoto();
          bridge.send("VKWebAppCallAPIMethod", { method: 'photos.createAlbum', params: { access_token: data.access_token, v: '5.131', title: 'IQ Тест' } })
            .then(result => {
              bridge.send("VKWebAppCallAPIMethod", { method: 'photos.getUploadServer', params: { access_token: data.access_token, v: '5.131', album_id: result.response.id } })
                .then(result => {
                  fetch(storyImages[score])
                    .then(img => img.blob())
                    .then(imgData => {
                      let form = new FormData();
                      form.append("file1", imgData, "image.jpg");
                      fetch(`https://cors.roughs.ru/${result.response.upload_url}`, {
                        method: 'post',
                        body: form
                      })
                        .then(formResult => formResult.json())
                        .then(formResult => {
                          bridge.send("VKWebAppCallAPIMethod", {
                            method: 'photos.save',
                            params: {
                              access_token: data.access_token,
                              v: '5.131', title: 'IQ Тест',
                              album_id: formResult.aid,
                              server: formResult.server,
                              hash: formResult.hash,
                              photos_list: formResult.photos_list,
                              caption: `Узнай свой IQ в приложении https://vk.com/app${APPID}`
                            }
                          })
                            .then(() => setCompleted(prev => !prev))
                            .catch(e => console.log(e.error_data));
                        });
                    });
                });
            })
        })
        .catch(() => setPhoto());
    }
    setPhoto();
  }, []);

  const postShare = () => {
    bridge.send("VKWebAppShowWallPostBox", { message: `Узнай свой IQ в приложении! https://vk.com/app${APPID}`, attachments: albumImages[score] });
  }

  const storyShare = () => {
    bridge.send("VKWebAppShowStoryBox", { "background_type": "image", "url": storyImages[score], attachment: { "text": "open", "type": "url", "url": `https://vk.com/app${APPID}` } });
  }
  return (
    <Panel id={id} style={{ position: 'fixed' }}>
      <Group>
        {completed ?
          <>
            <Title weight="medium" level="1" style={{ textAlign: 'center' }}>Тест пройден! Узнай свой результат, поделившись им</Title>
            <Spacing size={16} />
            <Button size="l" before={<Icon24StoryOutline />} onClick={storyShare} style={{minWidth: 160}}>В историю</Button>
            <Spacing size={8} />
            <Button size="l" before={<Icon24Repost />} onClick={postShare} style={{minWidth: 160}}>На стене</Button>
          </>
          : <Spinner size="large" />}
      </Group>
    </Panel>
  );
}