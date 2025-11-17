let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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

getQuotes();