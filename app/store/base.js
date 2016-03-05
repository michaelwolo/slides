import { List } from 'immutable';
import SlideAchievement from '../components/SlideAchievement';
import SlideText from '../components/SlideText';

const cornflowerblue = '#6495ED';
const green = '#4C8C7E';

export const state = {
  slides: List([{
    component: SlideText,
    data: {
      text: 'Intro to HTML and CSS'
    }
  },{
    component: SlideText,
    data: {
      text: 'Building for the Internet'
    }
  },{
    component: SlideText,
    data: {
      text: 'Computers'
    }
  },{
    component: SlideText,
    data: {
      text: 'Computers',
      subtext: '(and files)'
    }
  },{
    component: SlideText,
    data: {
      text: 'Hypertext Markup Language',
      subtext: '(HTML)'
    }
  },{
    component: SlideText,
    data: {
      text: 'Cascading Style Sheets',
      subtext: '(CSS)'
    }
  },{
    component: SlideText,
    data: {
      text: 'codepen.io'
    }
  },{
    component: SlideText,
    data: {
      text: 'HTML = Content'
    }
  },{
    component: SlideText,
    data: {
      text: 'CSS = Style'
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<h1>',
      color: green
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<p>',
      color: green
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'color',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font-size',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font-family',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font-weight',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font-style',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'font',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'letter-spacing',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'text-align',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'text-shadow',
      color: cornflowerblue
    }
  },{
    component: SlideText,
    data: {
      text: 'Google Fonts'
    }
  },{
    component: SlideText,
    data: {
      text: '-- Break --'
    }
  },{
    component: SlideText,
    data: {
      text: 'Images'
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<img>',
      color: green
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'height',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'width',
      color: cornflowerblue
    }
  },{
    component: SlideText,
    data: {
      text: 'Buttons'
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<button>',
      color: green
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'background',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'border',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'outline',
      color: cornflowerblue
    }
  },{
    component: SlideText,
    data: {
      text: 'Box Model'
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'margin',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'padding',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'box-sizing',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'border-radius',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'opacity',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'cursor',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: ':hover',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<a>',
      color: green
    }
  },{
    component: SlideText,
    data: {
      text: '-- Break --'
    }
  },{
    component: SlideText,
    data: {
      text: 'Layout'
    }
  },{
    component: SlideText,
    data: {
      text: 'Boxes'
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'HTML',
      value: '<div>',
      color: green
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'float',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'overflow',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'position',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'top',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'bottom',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'left',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'right',
      color: cornflowerblue
    }
  },{
    component: SlideAchievement,
    data: {
      type: 'CSS',
      value: 'z-index',
      color: cornflowerblue
    }
  },{
    component: SlideText,
    data: {
      text: 'Examples'
    }
  },{
    component: SlideText,
    data: {
      text: ''
    }
  },{
    component: SlideText,
    data: {
      text: ''
    }
  },{
    component: SlideText,
    data: {
      text: '6 HTML Elements'
    }
  },{
    component: SlideText,
    data: {
      text: '28 CSS Properties'
    }
  },{
    component: SlideText,
    data: {
      text: '28 CSS Properties',
      subtext: '(+1 Selector)'
    }
  },{
    component: SlideText,
    data: {
      text: 'Thanks'
    }
  },{
    component: SlideText,
    data: {
      text: 'Q/A'
    }
  }]),
  current: 0
}
