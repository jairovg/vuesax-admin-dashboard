import { shallowMount } from '@vue/test-utils'
import Button from '~/components/Button.vue';

describe('Button component', () => {
  test('should create a primary button by default', () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.html()).toContain('button__primary');
  });
});
