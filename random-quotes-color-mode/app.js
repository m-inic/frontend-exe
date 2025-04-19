const btn = document.querySelector("button")

async function fetchBook() {
    try {
        let bookEl = document.getElementById("book")
        let authorEl = document.getElementById("writer");
        let descriptionEl = document.getElementById("description");

        const response = await fetch("https://fakerapi.it/api/v2/books?_quantity=1");

        if (!response.ok) {
            throw new Error("Ne mogu da nadjem :(")
        }

        const data = await response.json();

        let description = data.data[0].description;
        let author = data.data[0].author;
        let book = data.data[0].title;

        console.log(data)

        bookEl.textContent = book
        authorEl.textContent = `- ${author}`;
        descriptionEl.textContent = description;
    }
    catch (error) {
        console.error(error);
    }
}

btn.addEventListener("click", fetchBook)

function loader() {
    const loaderEl = document.getElementById("loader");
    const backdrop = document.getElementById("backdrop");

    setTimeout(() => {
        loaderEl.style.display = "none";
        backdrop.style.display = "none";
    }, "1400");
}

const toggleCircleEl = document.getElementById("toggleCircle");
const styleLinkEl = document.getElementById("style-link");
const modeNameEl = document.getElementById("mode-name")

function darkMode() {
    toggleCircleEl.classList.toggle("rightSide");
    
    if(styleLinkEl.attributes[1].nodeValue === "styles/style.css") {
        styleLinkEl.attributes[1].nodeValue = "styles/light-mode.css";
        modeNameEl.textContent = "Light mode"
    } else {
        styleLinkEl.attributes[1].nodeValue = "styles/style.css";
        modeNameEl.textContent = "Dark mode"
    }
}

toggleCircleEl.addEventListener("click", darkMode);