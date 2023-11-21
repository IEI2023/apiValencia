# API Valencia

La API de Valencia proporciona información detallada sobre los centros educativos en la comunidad de Valencia en formato JSON. A continuación, se detallan los pasos para desplegar y utilizar esta API.

## Despliegue

1. **Instalación de Dependencias:**

   ```bash
   npm install
   ```

2. **Ejecución del Proyecto:**
   ```bash
   npm run start
   ```

## Uso

La API de Valencia ofrece un endpoint accesible a través del dominio local, donde puedes consultar y obtener información en formato JSON.

### Endpoint 1: `/jsonFromFile`

Este endpoint devuelve la información de los centros educativos de Valencia desde un archivo CSV en formato JSON.

- **Método:** GET
- **URL:** `http://localhost:3003/jsonFromFile`

### Endpoint 2: `/jsonFromBody`

Este endpoint proporciona información detallada sobre los centros educativos de Valencia directamente desde el cuerpo de la solicitud.

- **Método:** POST
- **URL:** `http://localhost:3003/jsonFromBody`

  #### Parámetros de Solicitud:

  - `centros`: Lista de objetos que representan la información de los centros educativos. Se espera que los datos se proporcionen en formato CSV.

  Ejemplo del cuerpo de la solicitud:

  ```csv
  CODIGO;DENOMINACION_GENERICA_ES;DENOMINACION_GENERICA_VAL;DENOMINACION_ESPECIFICA;DENOMINACION;REGIMEN;TIPO_VIA;DIRECCION;NUMERO;CODIGO_POSTAL;LOCALIDAD;PROVINCIA;TELEFONO;FAX;COD_EDIFICACION;TITULARIDAD;CIF;COMARCA;URL_ES;URL_VA
  3000047;COLEGIO DE EDUCACIÓN INFANTIL Y PRIMARIA;COL·LEGI D'EDUCACIÓ INFANTIL I PRIMÀRIA;CEIP LA RAMBLA;CEIP LA RAMBLA;PÚB.;AVINGUDA;DE ALCOY;S/N;3698;AGOST;ALICANTE/ALACANT;966908135;;1;GENERALITAT VALENCIANA;Q5355128I;L'ALACANTÍ;https://www.ceice.gva.es/web/centros-docentes/ficha-centro?codi=03000047;https://www.ceice.gva.es/va/web/centros-docentes/ficha-centro?codi=03000047
  3000060;CENTRO PRIVADO DE EDUCACIÓN INFANTIL Y PRIMARIA;CENTRE PRIVAT D'EDUCACIÓ INFANTIL I PRIMÀRIA;CENTRE PRIVAT LA MILAGROSA;CENTRE PRIVAT LA MILAGROSA;PRIV. CONC.;CARRER;JUAN XXIII;2;3698;AGOST;ALICANTE/ALACANT;965691143;;1;PRIVADA.;R0300117I;L'ALACANTÍ;https://www.ceice.gva.es/web/centros-docentes/ficha-centro?codi=03000060;https://www.ceice.gva.es/va/web/centros-docentes/ficha-centro?codi=03000060
  3000096;COLEGIO DE EDUCACIÓN INFANTIL Y PRIMARIA;COL·LEGI D'EDUCACIÓ INFANTIL I PRIMÀRIA;CEIP MIRADOR D'AIGÜES;CEIP MIRADOR D'AIGÜES;PÚB.;AVINGUDA;DEL DOCTOR SAPENA;S/N;3569;AIGÜES;ALICANTE/ALACANT;966908140;;1;GENERALITAT VALENCIANA;Q5355126C;L'ALACANTÍ;https://www.ceice.gva.es/web/centros-docentes/ficha-centro?codi=03000096;https://www.ceice.gva.es/va/web/centros-docentes/ficha-centro?codi=03000096
  3000138;COLEGIO DE EDUCACIÓN PRIMARIA;COL·LEGI D'EDUCACIÓ PRIMÀRIA;CEP VIRGEN DEL ROSARIO;CEP VIRGEN DEL ROSARIO;PÚB.;CARRER;CALVARIO;70;3340;ALBATERA;ALICANTE/ALACANT;966912020;;1;GENERALITAT VALENCIANA;Q5355176H;EL BAIX SEGURA/LA VEGA BAJA;https://www.ceice.gva.es/web/centros-docentes/ficha-centro?codi=03000138;https://www.ceice.gva.es/va/web/centros-docentes/ficha-centro?codi=03000138

  ```

  Recibirás una respuesta en formato JSON con la información detallada de los centros educativos de Valencia.
