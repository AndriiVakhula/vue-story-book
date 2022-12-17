import TButton from './button.vue';
import { buttonTypeOptions } from './constants';

const defaultValue = (prop) => TButton.props[prop].default;

const generateProps = ({
  disabled = defaultValue('disabled'),
  types = defaultValue('types')
} = {}) => ({
  disabled,
  types
})

export const Default = (args, { argTypes = {} }) => ({
  components: { TButton },
  props: Object.keys(argTypes),
  template:`
    <t-button
      :disabled="disabled"
      :types="types"
    >test</t-button>
  `,
});

Default.args = generateProps();



export default {
  title: 'Button',
  component: TButton,
  argTypes: {
    types: {
      options: buttonTypeOptions,
      control: 'select',
    },
  }
}
