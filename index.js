const summaryContainer = document.querySelector('.summary-container')
const DATA = './data.json'

getScoreSummary()

function getScoreSummary() {
	fetch(DATA)
		.then((res) => res.json())
		.then((data) => {
			createSummary(data)
		})
}

function createSummary(data) {
	while (summaryContainer.firstChild) {
		summaryContainer.removeChild(summaryContainer.firstChild)
	}
	data.forEach((item) => {
		summaryContainer.insertAdjacentHTML(
			'beforeend',
			`<li>
        <div class="category">
					<img
            src=${item.icon}
						alt=${item.category}-icon
						class="category-icon"
					/>
					<p>${item.category}</p>
				</div>
				<div class="score"><span class="bold">${item.score}</span> / 100</div>
			</li>`
		)
	})
}
