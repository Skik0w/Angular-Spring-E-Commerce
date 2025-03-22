📌 **Angular + Spring Boot – Kurs** 🚀
Kompleksowa instrukcja instalacji i konfiguracji Angular oraz TypeScript.

## ⚙️ Instalacja i konfiguracja TypeScript
### 🛠️ Inicjalizacja TypeScript i utworzenie pliku tsconfig.json:

```
tsc --init
```

### ⚡ Kompilacja pliku .ts do JavaScript (ES5), bez generowania pliku w przypadku błędów:

```
tsc --target ES5 --noEmitOnError plik.ts
```

### 🗑️ Czyszczenie builda (usuwanie wygenerowanych plików):

```
tsc --build --clean
```

### 🚀 Kompilacja i uruchomienie skryptu TypeScript w Node.js:

```
tsc plik.ts
node plik.js
```

## 🌍 Instalacja Angular CLI
### 📦 Instalacja Angular CLI w określonej wersji (globalnie na komputerze):

```
npm install --location=global @angular/cli@19.2.1
```

### 📌 Sprawdzenie poprawnej instalacji Angular CLI:

```
ng version
```

## 🏗️ Tworzenie nowego projektu Angular
### 📂 Tworzenie projektu Angular o nazwie nazwa-projektu (bez trybu standalone):

```
ng new --no-standalone nazwa-projektu
```

### 📂 Przejście do katalogu projektu:

```
cd nazwa-projektu
```

## 🌐 Uruchamianie serwera Angular
### 🚀 Uruchomienie serwera deweloperskiego Angular i podgląd na localhost:4200:

```
ng serve
```

### 🌍 Uruchomienie Angular z automatycznym otwarciem przeglądarki:

```
ng serve --open
```

## 🛠️ Generowanie elementów w Angular
### 📌 Generowanie nowego komponentu:

```
ng generate component nazwa-komponentu
```

### 📌 Generowanie nowej klasy w określonym katalogu:

```
ng generate class katalog/nazwa-klasy
```

## 🌟 Dodanie Bootstrap i FontAwesome do projektu Angular

### 📦 Instalacja Bootstrap 5.3.3:

```
npm install bootstrap@5.3.3
```

### 📦 Instalacja FontAwesome:

```
npm install @fortawesome/fontawesome-free
```

## 🌍 Dodanie lokalizacji Angular:

```
ng add @angular/localize
```

💡 **Teraz Twój projekt Angular jest gotowy do działania!**
🔗 Wejdź na http://localhost:4200/ i zobacz aplikację w akcji. 🎉

