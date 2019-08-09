import React from 'react';
import {shallow} from 'enzyme-adapter-react-16';
import DisplayCooperResult from '../Components/DisplayCooperResult';

describe('<DisplayCooperResult>',()=> {
  it('evaluates the correct result for female/poor',() => {
    const describedComponent = shallow(<DisplayCooperResult distance="1000" gender="female" age="23"/>)
    const Result = <p>Result: Poor</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('evaluates the correct result for female/avarage',() => {
    const describedComponent = shallow(<DisplayCooperResult distance="1000" gender="female" age="23"/>)
    const Result = <p>Result: Avarage</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })

})