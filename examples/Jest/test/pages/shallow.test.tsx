import React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from '../../src/components/ErrorBoundary'

describe('its show', () => {
  it('its shows 2', () => {
    expect(1+1).toEqual(2)
  })
})

test('show hello', () => {
  const hello = shallow(<div>hello</div>)
  expect(hello.text()).toEqual('hello')
})

test('show hello', () => {
  const boundary = shallow(<ErrorBoundary>hello</ErrorBoundary>)
  expect(boundary.text()).toEqual('hello')
})

test('show 我是ErrorBoundary', () => {
  const boundary = shallow(<ErrorBoundary>hello</ErrorBoundary>)
  boundary.setState({hasError: true})
  expect(boundary.find('h1').text()).toEqual('我是ErrorBoundary')
})