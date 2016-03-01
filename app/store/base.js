import { List } from 'immutable';
import SlideAchievement from '../components/SlideAchievement';
import SlideText from '../components/SlideText';

export const state = {
  slides: List([{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font-family',
      color: '#6495ED' // cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<div>',
      color: '#4C8C7E' // green
    }
  },{
    component: SlideText,
    data: {
      text: 'This is plain text'
    }
  }]),
  current: 0
}
