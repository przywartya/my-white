import hyper from 'hyperhtml';

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
                    <a href="#">Salon</a>
                    <a href="#">Gabinet</a>
                    <a href="#">Kuchnia</a>
                    <a href="#">Łazienka</a>
                    <a href="#">Pokój nastolatka</a>
                    <a href="#">Balkon</a>
                    <a href="#">O mnie / Kontakt</a>
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
async function createComponents() {
    let mainBlock = hyper`
    <div class="main-block">
			${getImagesForCategory('salon')}
    </div>
    `;
    const el = document.querySelector('#container');
    hyper.bind(el)`
        ${getTopMenu()}
        ${mainBlock}
    `;
}
createComponents();

	
// bind(document.querySelector('ul'))`${
//   // fill it up with wired items
//   listOfItems.map(
//     // any object can be wired
//     // to a declarative content
//     item =>
//     // this will return, per each item
//     // an actual <LI> DOM node
//     wire(item)`<li>${item.name}</li>`
//   )
// }`;