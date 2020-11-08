import { Header } from '../src/components'
// Fake the S import of styles
// this would normally be something like the below:
// import * as S from './compenent.styled.js`
export const SideBarDesktopStory = () => (
  <div className='flex flex-col flex-1 w-full'>
    <Header />
  </div>
)
SideBarDesktopStory.story = { name: 'Desktop' }

// story export
export default {
  title: 'Header',
  component: <SideBarDesktopStory />
}
