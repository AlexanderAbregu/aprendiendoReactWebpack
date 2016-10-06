*package.json*: {
	"devDependencies": Todas las dependencias que se estan utilizando,
	"scripts": {
		"build": Comando que ejecuto desde CMD *npm run build*, webpack se queda "escuchando" y compila todo cuando detecta cambios
	}
}

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

*webpack.config.js*:{
	"entry": Donde se encuentra el jsx "Padre" de todos,
	"output": Donde saldra todo lo compilado (carpeta y nombre del js)
}

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

*public/build.js*: Archivo compilado por webpack no tocar.
*public/index.html*: HTML basico (el de toda la vida).
*app/components/main.jsx*: Primer archivo de codigo a leer para iniciar la compilacion.