import { storiesOf } from '@storybook/vue'
import centered from '@storybook/addon-centered/vue'
import { CSSReset, Code, Stack } from '../packages/kiwi-core/src'

storiesOf('UI | Code', module)
  .addDecorator(centered)
  .add('Default Code', () => ({
    components: { CSSReset, Code },
    template: `
      <div>
        <CSSReset />
        <Code>Hello world</Code>
      </div>
    `
  }))
  .add('With variant color', () => ({
    components: { CSSReset, Code, Stack },
    template: `
      <div>
        <CSSReset />
        <Stack isInline>
          <Code>console.log(welcome)</Code>
          <Code variantColor="red">var chakra = 'awesome!'</Code>
          <Code variantColor="yellow" >npm install chakra</Code>
        </Stack>
      </div>
    `
  }))