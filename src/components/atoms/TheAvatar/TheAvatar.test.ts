import TheAvatar from './TheAvatar.vue'
import { mount, shallowMount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'

describe('TheAvatar.vue', () => {
  it('TheAvatar render', () => {
    const wrapper = mount(TheAvatar, {
      props: {
        alt: 'Lorem Ipsum'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('TheAvatar render for another size', () => {
    const wrapper = shallowMount(TheAvatar, {
      props: {
        alt: 'Lorem Ipsum',
        size: 'lg'
      }
    })
    const item = wrapper.find('span')
    const span = item.find('span.h-12')
    expect(span.exists()).toBeTruthy()
  })
})
