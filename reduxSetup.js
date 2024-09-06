const INITIAL_STATE = { mood: 'neutral', color: 'white' }
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HAPPY':
      return { ...state, mood: '(*^‿^*)', color: 'yellow' }
    case 'SAD':
      return { ...state, mood: '(╥﹏╥)', color: 'blue' }
    case 'ANGRY':
      return { ...state, mood: '(╯°□°）╯︵ ┻━┻', color: 'red' }
    case 'CONFUSED':
      return { ...state, mood: '(。_。)', color: 'green' }
    default:
      return state
  }
}

