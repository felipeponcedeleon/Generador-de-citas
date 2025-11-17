const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote')


let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);

    // Verificar si la cita tiene autor
    if (!quote.author) {
        authorText.textContent = 'Anónimo';
    } else {
        authorText.textContent = quote.author;
    }
   
    // Verificar longitud para manejar estilo
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;

}

async function getQuotes() {
    try {
        const response = await fetch('./quotes.json');
    
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo');
        } 
        
        apiQuotes = await response.json();
        
        newQuote();

    } catch (error) {
        console.error('Error al cargar quotes.json:', error);
    }
}

newQuoteBtn.addEventListener('click', newQuote);

getQuotes();