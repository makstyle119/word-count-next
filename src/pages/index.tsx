import { useState } from 'react';
import SEOHeader from './SEOHeader';

export default function Home() {
	const getYear: number = new Date().getFullYear();
	const [output, setOutput] = useState<string>(
		'Number Of Words: 0 & Number of characters: 0'
	);
	const countWordsAndChar = (val: string): void => {
		if (val.length > 0) {
			// Split the input text into an array of words
			const wordsArray = val.trim().split(/\s+/);

			// Count the number & characters of words
			const numWords = wordsArray.length;
			const numChar = val.length;

			// Display the word count in the output div
			setOutput(
				`Number Of Words: ${numWords} & Number of characters: ${numChar}`
			);
		} else {
			// Display the word count in the output div
			setOutput(`Number Of Words: 0 & Number of characters: 0`);
		}
	};

	return (
		<>
			<SEOHeader />
			<header>
				<a
					href='#'
					id='currentPage'
				>
					<h1>Word Count App</h1>
				</a>
			</header>
			<main>
				<p
					className='shortDescription'
					property='shortDescription'
				>
					Enter your text below to count the number of words:
				</p>
				<form>
					<textarea
						id='text-input'
						placeholder='Enter your text here...'
						onChange={(e) => countWordsAndChar(e?.target?.value)}
						required
					></textarea>
				</form>
				<div id='output'>{output}</div>
				{/* <div id="extension-section">
        <h2>Word Count Extension</h2>
        <p>
          If you want to get a word count for any text on a web page, you can
          use our Word Count Extension. Simply select the text and click the
          extension icon.
        </p>
        <a href="#" target="_blank">Install the Extension</a>
      </div> */}
			</main>
			<footer>
				<p>
					Word Count App &copy; {getYear}. DEVELOP & MAINTAIN BY MAK DEVELOPMENT
					HOUSE.
				</p>
			</footer>
		</>
	);
}
