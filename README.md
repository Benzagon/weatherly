This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Weatherly ⛈️

Para visualizar el proyecto puede instalarlo localmente, o utilzar una versión hosteada en Vercel en [https://weatherly-plum.vercel.app/](https://weatherly-plum.vercel.app/)

## Instalación local

Primero, clonar el proyecto localmente.

### Variables de entorno

Crear un archivo `.env` en la ruta más alta del proyecto y declarar las siguientes variables de entorno (Veasé el archivo `.env.example` como ejemplo):

```js
// The project base URL. The default url is "http://localhost:3000/"
NEXT_PUBLIC_BASE_URL="" 
X_RapidAPI_Key=''
X_RapidAPI_WeatherAPI_Host=''
X_RapidAPI_OpenWeather_Host=''
```

`X_RapidAPI_Key` Es la clave privada de su usuario. Se puede obtener de forma gratuita, con una cuenta en [RapidApi.com](https://rapidapi.com/auth/sign-up?referral=/hub)

`X_RapidAPI_WeatherAPI_Host` Es el Host de la API que se utiliza para las estadísticas diarias. Se puede encontrar en [rapidapi.com/weatherapi/api/weatherapi-com](https://rapidapi.com/weatherapi/api/weatherapi-com)

`X_RapidAPI_OpenWeather_Host` Es el Host de la API que se utiliza para las estadísticas semanales. Se puede encontrar en [rapidapi.com/worldapi/api/open-weather13](https://rapidapi.com/worldapi/api/open-weather13)

### Instalación de dependencias

Instalar las dependencias necesarias para correr el proyecto utilizando:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Correr el proyecto

Finalmente, ejecutar el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados.