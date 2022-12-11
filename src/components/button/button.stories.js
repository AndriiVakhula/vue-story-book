import Button from './button.vue';
import { buttonTypeOptions } from './constants';

const defaultValue = (prop) => Button.props[prop].default;

const generateProps = ({
  disabled = defaultValue('disabled'),
  types = defaultValue('types')
} = {}) => ({
  disabled,
  types
})

export const Default = (args, { argTypes = {} }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template:`
    <Button
      :disabled="disabled"
      :types="types"
    >test</Button>
  `,
});

Default.args = generateProps();



export default {
  title: 'Button',
  component: Button,
  argTypes: {
    types: {
      options: buttonTypeOptions,
      control: 'select',
    },
  }
}
