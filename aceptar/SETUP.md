# Página de aceptación contractual — `/aceptar`

**Términos generales de TANSI Tours** — aplican a cualquier experiencia en Colombia
(Santa Marta, Cartagena, Antioquia, Eje Cafetero, etc.). El destino y los detalles
del plan van en los parámetros del enlace (`paquete`, `fechas`, `valor`).

## URLs
- Formulario: `https://www.tansitours.lat/aceptar`
- Confirmación: `https://www.tansitours.lat/aceptar/gracias`

## Idioma (EN / ES)

- Selector **EN | ES** visible en la esquina superior derecha.
- Por defecto: inglés (coincide con la landing), salvo que el navegador esté en español o el cliente elija ES.
- Forzar idioma en el enlace: añade `&lang=es` o `&lang=en`.
- La preferencia se guarda en el navegador (`localStorage`).

## Enlace personalizado (WhatsApp)

Envía al cliente un enlace con los datos del paquete prellenados:

```
# Ejemplo Santa Marta
https://www.tansitours.lat/aceptar?lang=es&ref=TANSI-2026-001&paquete=Santa+Marta+3n+Velero&valor=3868000&pasajeros=4&fechas=19-22+oct+2026

# Ejemplo Cartagena
https://www.tansitours.lat/aceptar?lang=es&ref=TANSI-2026-002&paquete=Cartagena+Esencial+4d&valor=3600000&pasajeros=4&fechas=21-24+oct+2026

# Ejemplo tour privado Antioquia (sin hotel)
https://www.tansitours.lat/aceptar?lang=en&ref=TANSI-2026-003&paquete=Private+Guatape+Day+Trip&valor=1200000&pasajeros=4&fechas=10+mar+2026
```

| Parámetro | Ejemplo | Descripción |
|-----------|---------|-------------|
| `lang` | `es` o `en` | Idioma del contrato (opcional) |
| `ref` | `TANSI-2026-001` | Referencia interna de la reserva |
| `paquete` | `Cartagena+Esencial` | Nombre del plan / experiencia |
| `valor` | `3600000` | Valor total en COP |
| `pasajeros` | `4` | Número de pasajeros |
| `fechas` | `21-24+oct+2026` | Fechas del viaje |

> La **forma de pago** (75/25, 90/10, etc.) se acuerda en la cotización por WhatsApp;
> el contrato general acepta “la forma de pago acordada en la cotización”.

---

## Configurar Formspree (una sola vez)

1. Entra a [formspree.io](https://formspree.io) con **tansi.tours@gmail.com**
2. Crea un formulario: **"Aceptación Contrato TANSI"**
3. Copia el **Form ID** (aparece en la URL: `formspree.io/f/` **`xyzabcde`**)
4. El Form ID ya está en `aceptar/index.html` (`action="https://formspree.io/f/xyeylnrv"`).
   Si cambias de formulario, actualiza esa URL en el HTML.
5. En Formspree → Notifications → confirma que lleguen a `tansi.tours@gmail.com`

---

## Desplegar en Vercel

```powershell
cd "C:\Users\Dell\Desktop\Proyecto g9 Code\TANSI-tours-landing Claude Desing"
npm run build:css
git add aceptar/ tailwind.config.js css/styles.css
git commit -m "Add contract acceptance page at /aceptar"
git push
```

Vercel despliega automáticamente. No hay cambios en `vercel.json`.

---

## Mensaje WhatsApp para enviar al cliente

```
Hola [nombre] 👋

Preparamos tu experiencia con TANSI Tours ✅
Antes del pago, acepta los términos generales aquí (2 min):

👉 [pegar enlace con paquete, fechas y valor de ESTA reserva]

Tu aceptación equivale a firma (Ley 527).
Una vez la recibamos, te habilitamos el pago del anticipo 🙌

— TANSI.Tours · 323 390 9989
```

---

## Evidencia legal guardada

Cada envío en Formspree registra:
- Nombre, cédula, teléfono, email
- Datos del paquete
- Las 9 casillas de aceptación marcadas
- Firma electrónica (nombre escrito)
- Fecha/hora UTC (`fecha_hora_aceptacion`)
- URL completa usada (`url_aceptacion`)
- Referencia de reserva (`ref_reserva`)
- IP del cliente (en panel Formspree)

Conserva también el chat de WhatsApp donde enviaste el enlace.
