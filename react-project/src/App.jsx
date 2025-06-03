import './App.css';

let language = [
	'JavaScript',
	'Python',
	'Java',
	'C++',
	'Ruby',
	'Go',
	'Rust',
	'Swift',
	'Kotlin',
	'PHP',
	'🌙',
];

function App() {
  return <h1>Hello {language.join(`, \n`)} World!!!</h1>;
}

export default App;




