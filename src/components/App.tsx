import { FC, useState } from "react";
import { useStructure } from "@unexp/router";
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import { Home } from "../panels/Home";
import { First } from "../panels/First";
import { ScoreContext } from "../helpers/scoreContext";
import { Second } from "../panels/Second";
import { Third } from "../panels/Third";
import { Fourth } from "../panels/Fourth";
import { Fifth } from "../panels/Fifth";
import { Sixth } from "../panels/Sixth";
import { Seventh } from "../panels/Seventh";
import { Final } from "../panels/Final";
import "@vkontakte/vkui/dist/vkui.css";

export const App: FC = () => {
  const structure = useStructure({ view: 'main', panel: 'home' });
  const [score, setScore] = useState<number>(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <ConfigProvider>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout>
              <SplitCol animate={false}>
                <View id="main" activePanel={structure.panel}>
                  <Home id="home" />
                  <First id="first" />
                  <Second id="second" />
                  <Third id="third" />
                  <Fourth id="fourth" />
                  <Fifth id="fifth" />
                  <Sixth id="sixth" />
                  <Seventh id="seventh" />
                  <Final id="final" />
                </View>
              </SplitCol>
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </ScoreContext.Provider>
  );
}