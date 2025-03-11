# Angular-Spring
 Kurs Angular + Spring Boot

# Instrukcja kompilacji TypeScript i instalacji Angular CLI

Aby zainicjalizować TypeScript w projekcie i utworzyć plik `tsconfig.json`, użyj:  
tsc --init  

Aby skompilować plik `app.ts` do JavaScript (ES5) i uniknąć generowania pliku wyjściowego w przypadku błędów, użyj:  
tsc --target ES5 --noEmitOnError app.ts  

Aby wyczyścić build i usunąć wygenerowane pliki, użyj:  
tsc --build --clean  

Aby skompilować i uruchomić skrypt TypeScript w Node.js, wykonaj kolejno:  
tsc app.ts  
node app.js  

Aby globalnie zainstalować Angular CLI w wersji 19.2.1, użyj:  
npm install --location=global @angular/cli@19.2.1  

Aby utworzyć nowy projekt Angular o nazwie `my-angular-app` bez trybu standalone, użyj:  
ng new --no-standalone my-angular-app  
