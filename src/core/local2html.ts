import { TypeDisguise } from "@/core/feature/typeDisguise"
import { ScrollPositonCache, ScrollPositonSetting } from "@/core/feature/scrollPositionCache"

import { localSettingProp } from "@/stores/local"
import { localSettingStores } from "@/stores"

export interface Local2HtmlProp {
  TypeDisguise: string
  ScrollPositonCache: string
}

export const Local2Html = (localSetting: localSettingProp): Local2HtmlProp => {
  if (ScrollPositonSetting.num !== localSetting.scrollPosition) {
    localSettingStores.localSettingStore.handleSetScrollPosition(ScrollPositonSetting.num)
  }
  return {
    TypeDisguise: `<script>${TypeDisguise(localSetting.phoneType)}</script>`,
    ScrollPositonCache: `<script>${ScrollPositonCache(localSetting.scrollPosition)}</script>`,
  }
}
