import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import Card from './components/common/Card'
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

describe('<App/>', () => {
  it('should be in <App/> component to be in three div', () => {
    // shallow => mengambil isi dari component
    const appComponent = setup()
    // hasil yang diharapkan 
    expect(appComponent.find('div').length).toBe(3)
  })
})
describe('<Card/>', () => {
  it('should be in <Card/> component to be in called once', () => {
    // shallow => mengambil isi dari component
    const cardComponent = shallow(<Card />)
    // hasil yang diharapkan 
    expect(cardComponent.find("table").length).toEqual(1)
  })

})

