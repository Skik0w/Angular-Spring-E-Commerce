# 📌 Angular + Spring Boot – Kurs 🚀

Kompleksowa instrukcja instalacji i konfiguracji Angular oraz TypeScript.

---

## ⚙️ Instalacja i konfiguracja TypeScript  

🛠️ Inicjalizacja TypeScript i utworzenie pliku `tsconfig.json`:
```sh
tsc --init
```

⚡ Kompilacja pliku `app.ts` do JavaScript (ES5), bez generowania pliku w przypadku błędów:
```sh
tsc --target ES5 --noEmitOnError app.ts
```

🗑️ Czyszczenie builda (usuwanie wygenerowanych plików):
```sh
tsc --build --clean
```

🚀 Kompilacja i uruchomienie skryptu TypeScript w Node.js:
```sh
tsc app.ts
node app.js
```

---

## 🌍 Instalacja Angular CLI  

📦 Instalacja Angular CLI w wersji `19.2.1` (globalnie na komputerze):
```sh
npm install --location=global @angular/cli@19.2.1
```

📌 Sprawdzenie poprawnej instalacji Angular CLI:
```sh
ng version
```

---

## 🏗️ Tworzenie nowego projektu Angular  

📂 Tworzenie projektu Angular o nazwie `my-angular-app` (bez trybu standalone):
```sh
ng new --no-standalone my-angular-app
```

📂 Przejście do katalogu projektu:
```sh
cd my-angular-app
```

---

## 🌐 Uruchamianie serwera Angular  

🚀 Uruchomienie serwera deweloperskiego Angular i podgląd na `localhost:4200`:
```sh
ng serve
```

🌍 Uruchomienie Angular z automatycznym otwarciem przeglądarki:
```sh
ng serve --open
```

---

💡 **Teraz Twój projekt Angular jest gotowy do działania!**  
🔗 Wejdź na `http://localhost:4200/` i zobacz aplikację w akcji. 🎉
