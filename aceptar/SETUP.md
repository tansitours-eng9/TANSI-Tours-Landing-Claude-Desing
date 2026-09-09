# Página de aceptación contractual — `/aceptar`

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
https://www.tansitours.lat/aceptar?lang=es&ref=SM-001&paquete=Santa+Marta+Op2+Velero&valor=3868000&pasajeros=4&fechas=19-22+oct+2026
```

| Parámetro | Ejemplo | Descripción |
|-----------|---------|-------------|
| `lang` | `es` o `en` | Idioma del contrato (opcional) |
| `ref` | `SM-001` | Referencia interna de la reserva |
| `paquete` | `Santa+Marta+Op2` | Nombre del plan |
| `valor` | `3868000` | Valor total en COP |
| `pasajeros` | `4` | Número de pasajeros |
| `fechas` | `19-22+oct+2026` | Fechas del viaje |

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

Preparamos tu experiencia en *Santa Marta* ✅
Antes del pago, acepta el contrato aquí (2 min):

👉 https://www.tansitours.lat/aceptar?ref=SM-001&paquete=Santa+Marta+Op2&valor=3868000&pasajeros=4&fechas=19-22+oct+2026

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
