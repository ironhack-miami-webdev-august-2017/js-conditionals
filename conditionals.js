var language = prompt('Choose a language:');

var processedLanguage = language.toLowerCase();
processedLanguage = processedLanguage.trim();

if (processedLanguage === 'french' ) {
  console.log('Bonjour ...');
}

else if (processedLanguage === 'spanish') {
  console.log('Hola ...');
}

else {
  console.log('Hello ...');
}
