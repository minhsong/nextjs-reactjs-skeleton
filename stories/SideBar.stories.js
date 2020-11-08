import { SideBar, SideBarMobile } from '../src/components'
import { SideBarData } from './SampleData'
// Fake the S import of styles
// this would normally be something like the below:
// import * as S from './compenent.styled.js`
export const SideBarDesktopStory = () => <SideBar {...SideBarData} />
SideBarDesktopStory.story = { name: 'Desktop' }

export const SideBarMobileStory = () => <SideBarMobile {...SideBarData} />
SideBarMobileStory.story = {
  name: 'Mobile',
  parameters: {
    viewport: {
      defaultViewport: 'iphonex'
    }
  }
}
// story export
export default {
  title: 'SideBar',
  component: <SideBarDesktopStory />
}
