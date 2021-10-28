import { fraudulentNotifications } from './fraudulentNotifications'

describe('Fraudulent Notifications', () => {
  it('test case 0', () => {
    expect(fraudulentNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)).toBe(2)
  })
  it('test case 1', () => {
    expect(fraudulentNotifications([1, 2, 3, 4, 4], 4)).toBe(0)
  })
})
