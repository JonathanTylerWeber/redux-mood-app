const store = Redux.createStore(moodReducer);

const mood = document.querySelector('#mood');
const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');
const angry = document.querySelector('#angry');
const confused = document.querySelector('#confused');
const container = document.querySelector('#container');
const random = document.querySelector('#random');

store.subscribe(() => {
  const state = store.getState(); // Get the updated state
  mood.innerText = state.mood;    // Update the UI with the new mood
  container.style.backgroundColor = state.color;
});

const types = ['HAPPY', 'SAD', 'ANGRY', 'CONFUSED']

// Event listeners for each button
happy.addEventListener('click', () => store.dispatch({ type: 'HAPPY' }));
sad.addEventListener('click', () => store.dispatch({ type: 'SAD' }));
angry.addEventListener('click', () => store.dispatch({ type: 'ANGRY' }));
confused.addEventListener('click', () => store.dispatch({ type: 'CONFUSED' }));
random.addEventListener('click', () => store.dispatch({ type: types[Math.floor(Math.random() * types.length)] }));

// happy.addEventListener('click', function (e) {
//   store.dispatch({ type: 'HAPPY' });
//   const state = store.getState();
//   mood.innerText = state.mood;
// });

// sad.addEventListener('click', function (e) {
//   store.dispatch({ type: 'SAD' });
//   const state = store.getState();
//   mood.innerText = state.mood;
// });

// angry.addEventListener('click', function (e) {
//   store.dispatch({ type: 'ANGRY' });
//   const state = store.getState();
//   mood.innerText = state.mood;
// });

// confused.addEventListener('click', function (e) {
//   store.dispatch({ type: 'CONFUSED' });
//   const state = store.getState();
//   mood.innerText = state.mood;
// });
