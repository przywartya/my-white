import hyper from 'hyperhtml';
import Router from 'es6-router';

let categoriesRegistry = {
    'salon': 3,
    'gabinet': 3,
    'kuchnia': 3,
    'lazienka': 3,
    'nastolatka': 3,
    'balkon': 3,
}

function getTopMenu() {
    return hyper`<div class="top-menu">
        <div class="logo">
            <span class="big">My White</span>
            <span>Projektowanie wnętrz</span>
        </div>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <div id="menu">
                    <a href="#/salon">Salon</a>
                    <a href="#/gabinet">Gabinet</a>
                    <a href="#/kuchnia">Kuchnia</a>
                    <a href="#/lazienka">Łazienka</a>
                    <a href="#/nastolatka">Pokój nastolatka</a>
                    <a href="#/balkon">Balkon</a>
                    <a href="#/o-mnie">O mnie / Kontakt</a>
                </div>
            </div>
        </nav>
    </div>
    `;
}

let categoryNamesMap = {
    'salon': 'salonu',
    'gabinet': 'gabinetu',
    'kuchnia': 'kuchni',
    'lazienka': 'łazienki',
    'nastolatka': 'pokoju nastolatka',
    'balkon': 'balkonu'
};

function getImagesForCategory(category) {
    let imgCount = categoriesRegistry[category];
    if (imgCount && imgCount > 0) {
        let finalHtml = [];
        for (let i = 1; i <= imgCount; i++) {
						let name = categoryNamesMap[category];
						let url = `assets/${category}/${i}.jpg`;
						let description = `Marlena Michalska, projektowanie wnętrz, metamorfoza ${name}.`
						let imgString = hyper`<img src=${url} alt=${description}>`;
						finalHtml.push(imgString);
        }
        return finalHtml;
    }
}

const el = document.querySelector('#container');

function renderHyper(block) {
	hyper.bind(el)`
			${getTopMenu()}
			${block}
	`;
}
async function createComponents() {
	let router = new Router()
		.add('', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('salon')}
			</div>`);
		})
		.add('salon', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('salon')}
			</div>`);
		})
		.add('gabinet', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('gabinet')}
			</div>`);
		})
		.add('kuchnia', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('kuchnia')}
			</div>`);
		})
		.add('lazienka', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('lazienka')}
			</div>`);
		})
		.add('nastolatka', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('nastolatka')}
			</div>`);
		})
		.add('balkon', () => {
			renderHyper(hyper`
			<div class="main-block">
				${getImagesForCategory('balkon')}
			</div>`);
		})
		.add('o-mnie', () => {
			renderHyper(hyper`
			<div class="main-block">
			<img src="assets/o-mnie.jpg" alt="Marlena Michalska - projektowanie wnętrz">
			<p>Coś o mnie :)</p>
			</div>`);
		});
	router.navigate('');
}
createComponents();
