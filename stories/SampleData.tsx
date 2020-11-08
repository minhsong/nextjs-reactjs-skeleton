import * as C from '../src/components'
import { SideBarProps } from '../src/components/side-bar'

export const SideBarData: SideBarProps = {
  brand: {
    brandTitle: 'Minh Song',
    link: '#'
  },
  items: [
    {
      label: 'Dashboard',
      active: true,
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
        </svg>
      ),
      link: '/'
    },
    {
      label: 'Forms',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
        </svg>
      ),
      link: '/forms'
    },
    {
      label: 'Cards',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path>
        </svg>
      ),
      link: '/cards'
    },
    {
      label: 'Charts',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'></path>
          <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'></path>
        </svg>
      ),
      link: '/charts'
    },
    {
      label: 'Buttons',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'></path>
        </svg>
      ),
      link: '/buttons'
    },
    {
      label: 'Modals',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'></path>
        </svg>
      ),
      link: '/modals'
    },
    {
      label: 'Tables',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M4 6h16M4 10h16M4 14h16M4 18h16'></path>
        </svg>
      ),
      link: '/tables'
    },
    {
      label: 'Pages',
      icon: (
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'></path>
        </svg>
      ),
      subs: [{ label: 'Login', link: '/page/login' }]
    }
  ]
}
export const imageGalleryProps: C.ImageGalleryProps = {
  imgUrls: [
    '/example/image-gallary/gallary-1.jpg',
    '/example/image-gallary/gallary-2.jpg',
    '/example/image-gallary/gallary-3.jpg'
  ]
}
