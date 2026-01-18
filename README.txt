Programs Marketplace (Static HTML Website)

Pages:
- index.html    Home (hero + featured programs)
- catalog.html  Filterable catalog
- program.html  Program detail (uses ?id= query parameter)
- about.html    About
- faq.html      FAQ
- contact.html  Brochure request form (demo)

Assets:
- styles.css
- app.js

Run locally:
python -m http.server 8080
Then open http://localhost:8080/index.html

Edit program list:
app.js -> PROGRAMS array
