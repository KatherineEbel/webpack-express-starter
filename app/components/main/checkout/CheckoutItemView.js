import { View } from 'backbone.marionette'
import template from './orderItem.pug'
import Item from '../menuItem/Item'

export default View.extend({
  tagName: tr,
  template: template,
  model: Item,
  ui: {
    'plus': '.fa-plus',
    'minus': '.fa-minus',
    'count': 'p'
  },
  events: {
    'click @ui.plus': () => {
      this.model.set({ count: this.model.get('count') + 1})
    },
    'click @ui.minus': () => {
      let count = this.model.get('count')
      this.model.set({ count: count > 0 ? count - 1 : 0 })
    }
  },
  modelEvents: {
    'change:count': 'updateCount'
  },
  updateCount () {
    this.getUI('count').text(this.model.get('count'))
  },

})