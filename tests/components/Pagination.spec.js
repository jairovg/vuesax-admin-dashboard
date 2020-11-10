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
        context: {
          props: { currentPage: 1, items: [] },
          on: {
            change: () => {},
          },
        },
      });

      expect(wrapper.attributes('aria-label')).toEqual('Pagination Navigation');
    });

    test('should properly label each navigation link', () => {
      const wrapper = shallowMount(Pagination, {
        context: {
          props: {
            currentPage: 1,
            items: [
              {
                page: 1,
                href: '1',
              },
              {
                page: 2,
                href: '2',
              },
            ],
          },
          on: {
            change: () => {},
          },
        },
      });

      const li = wrapper.findAll('li');
      expect(li.at(0).attributes('aria-label')).toEqual('Current page, 1');
      expect(li.at(1).attributes('aria-label')).toEqual('Goto page 2');
    });

    test('should properly indicate which element is currently active', () => {
      const wrapper = shallowMount(Pagination, {
        context: {
          props: {
            currentPage: 2,
            items: [
              {
                page: 1,
                href: '1',
              },
              {
                page: 2,
                href: '2',
              },
              {
                page: 3,
                href: '3',
              },
            ],
          },
          on: {
            change: () => {},
          },
        },
      });

      const li = wrapper.findAll('li');
      expect(li.at(1).attributes('aria-current')).toEqual('true');
      expect(li.at(0).attributes('aria-current')).toBeUndefined();
    });
  });

  describe('Change page event', () => {
    test('should not be able to click on the current page', () => {
      const spy = jest.fn();
      const wrapper = shallowMount(Pagination, {
        context: {
          props: {
            currentPage: 2,
            items: [
              {
                page: 1,
                href: '1',
              },
              {
                page: 2,
                href: '2',
              },
              {
                page: 3,
                href: '3',
              },
            ],
          },
          on: {
            change: spy,
          },
        },
      });

      const link = wrapper.find('li[aria-current="true"]>a');
      expect(link.exists()).toBe(false);
    });

    test('should be triggered when the user clicks on any page number different from current page', () => {
      const spy = jest.fn();
      const wrapper = shallowMount(Pagination, {
        context: {
          props: {
            currentPage: 2,
            items: [
              {
                page: 1,
                href: '1',
              },
              {
                page: 2,
                href: '2',
              },
              {
                page: 3,
                href: '3',
              },
            ],
          },
          on: {
            change: spy,
          },
        },
      });

      const link = wrapper.find('li>a');
      link.trigger('click');
      expect(spy.mock.calls.length).toBe(1);
    });

    test('should send to the handler the page information the user is navigating to', () => {
      const spy = jest.fn();
      const wrapper = shallowMount(Pagination, {
        context: {
          props: {
            currentPage: 2,
            items: [
              {
                page: 1,
                href: '1',
              },
              {
                page: 2,
                href: '2',
              },
              {
                page: 3,
                href: '3',
              },
            ],
          },
          on: {
            change: spy,
          },
        },
      });

      const link = wrapper.find('li>a');
      link.trigger('click');
      expect(spy.mock.calls.length).toBe(1);
      expect(spy).toHaveBeenCalledWith({
        to: 1,
        href: '1',
      }, new MouseEvent('click'));
    });
  });
});
