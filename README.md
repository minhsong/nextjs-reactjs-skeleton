# The Nextjs starter

Hopefully the last one you'll need 😉

## Features

- ▲ Uses the latest [Next.js](https://github.com/zeit/next.js) along with [typescript](https://www.typescriptlang.org/)
- 🎉 Icons from [fontawesome](https://fontawesome.com/) using [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
- 💅 Styling with [styled-components](https://github.com/styled-components/styled-components)
- 🐐 Unit testing with [react-testing-library](https://github.com/testing-library/react-testing-library)
- 🖥 Custom reverse proxy server using [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
- ✏️ Static code analysis with [eslint](https://eslint.org/)
- 📖 Component Visual Documentation with [storybook](https://storybook.js.org)
- 🏹 Custom Routing with [next-routes](https://github.com/fridays/next-routes)
- 💨 Global styling and grid with [tailwind.css](https://tailwindcss.com/)

## Getting started

```
git clone --depth=1 --branch=master git@github.com:techequipt/the-nextjs-starter.git into-folder & rm -rf ./into-folder/.git
cd into-folder
npm install
cp ./.env.example ./.env
npm start
```

The app will run at `http://localhost:3000`

- Components, services, utilities and routes will all live in `./src`
- Jest tests live in `./tests/`
- Storybook stories live in `./stories/` and expect filenames of `name.stories.js`.

## Styling

All styles should try to use [tailwind.css](https://tailwindcss.com/docs/) wherever possible, please read through the documentation to understand how the framework is used.

#### Fonts

These are both loaded via Google Fonts, and setup with Roboto as the default font, Ubuntu will be used for specific display use cases.

Font families can be easily set with tailwind classes:

- Roboto = `font-body`
- Ubuntu = `font-display`

There is also a javascript function (`font()`) to help sent fonts located in `/frontend/src/styles/theme.js`.

#### Colors

The brand colors have been setup in the tailwind configuration file `/frontend/tailwind.config.js`, they are also set up as a constant in `/frontend/src/styles/theme.js`.

Colors can be easily defined using tailwind css classes, eg:

```
// Link with blue background, white text. Background changes to orange on hover

<div className='bg-blue-700text-white hover:bg-orange'>
  Some text
</div>
```

#### Tailwind.css in Styled Components

Tailwind classes can be applied directly within styled components, this leaves React component files clean and free of class name clutter.

The className attribute can be set when defining the styled component, example below:

```
import styled from 'styled-components'
import tw from 'twin.macro'
...
const StyledExample = styled.a`
  ${tw`p-5 bg-blue-700text-white hover:bg-orange transition-background-color duration-300 no-underline hover:no-underline`}

    //... Custom component styles
`
```
