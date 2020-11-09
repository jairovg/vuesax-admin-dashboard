import { shallowMount } from '@vue/test-utils';
import Pagination from '~/components/Pagination.vue';

describe('Pagination component', () => {
  describe('A11y requirements', () => {
    test('should be a nav element', () => {
      const wrapper = shallowMount(Pagination);

      expect(wrapper.element.tagName).toEqual('NAV');
    });

    test('should have an aria-label defining the pagination', () => {
      const wrapper = shallowMount(Pagination, {
        propsData: { currentPage: 1, items: [] },
      });

      expect(wrapper.attributes('aria-label')).toEqual('Pagination Navigation');
    });

    test('should properly label each navigation link', () => {
      const wrapper = shallowMount(Pagination, {
        propsData: {
          currentPage: 1,
          items: [
            {
              page: 1,
            },
            {
              page: 2,
            },
          ],
        },
      });

      const li = wrapper.findAll('li');
      expect(li.at(0).attributes('aria-label')).toEqual('Current page, 1');
      expect(li.at(1).attributes('aria-label')).toEqual('Goto page 2');
    });

    test('should properly indicate which element is currently active', () => {
      const wrapper = shallowMount(Pagination, {
        propsData: {
          currentPage: 2,
          items: [
            {
              page: 1,
            },
            {
              page: 2,
            },
            {
              page: 3,
            },
          ],
        },
      });

      const li = wrapper.findAll('li');
      expect(li.at(1).attributes('aria-current')).toEqual('true');
      expect(li.at(0).attributes('aria-current')).toBeUndefined();
    });
  });
});
