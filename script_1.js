// script.js

document.getElementById('submitButton').addEventListener('click', function() {
    const objectType = document.getElementById('objectType').value;
    const taskType = document.getElementById('taskType').value;
    const fieldType = document.getElementById('fieldType').value;

    let result = '';

    if ((objectType === 'hechos' || objectType === 'personas') &&
        (taskType === 'enseñar' || taskType === 'crear' || taskType === 'diagnosticar' || taskType === 'guiar' || taskType === 'motivar') &&
        (fieldType === 'jardines infantiles y salas cunas' || fieldType === 'escuelas' || fieldType === 'liceos' || fieldType === 'investigación' || fieldType === 'servicio público' || fieldType === 'fundaciones')) {
         console.log('Ciencias de la Educación')
	result = 'Ciencias de la Educación';
    }
    
    if ((objectType === 'objetos' || objectType === 'hechos') &&
        (['actuar', 'diseñar', 'representar', 'crear', 'proyectar', 'componer'].includes(taskType)) &&
        (['teatros', 'cines', 'televisión', 'radio', 'museos', 'centros culturales', 'galerías', 'editoriales', 'fundaciones', 'servicio público', 'investigación'].includes(fieldType))) {
        console.log('Artes')
	result = 'Artes';
    }

    if ((objectType === 'hechos' || objectType === 'personas') &&
        (['comunicar', 'viajar', 'reflexionar', 'informar', 'escribir', 'leer', 'investigar', 'documentar'].includes(taskType)) &&
        (['investigación', 'editoriales', 'archivos', 'centros culturales', 'escuelas', 'servicio público', 'fundaciones'].includes(fieldType))) {
        console.log('Humanidades')
	result = 'Humanidades';
    }

    if ((objectType === 'personas' || objectType === 'hechos') &&
        (['informar', 'convencer', 'difundir', 'investigar', 'organizar', 'reflexionar', 'comunicar'].includes(taskType)) &&
        (['televisión', 'prensa escrita', 'radio', 'agencias de publicidad', 'agencias de comunicaciones', 'editoriales', 'medios online', 'investigación', 'museos', 'centros culturales', 'servicio público', 'fundaciones'].includes(fieldType))) {
        console.log('Estudios Mediales')
	result = 'Estudios Mediales';
    }

    if ((objectType === 'datos' || objectType === 'personas') &&
        (['curar', 'diagnosticar', 'intervenir', 'analizar', 'prevenir', 'investigar'].includes(taskType)) &&
        (['hospitales', 'clínicas', 'laboratorios', 'consultorios', 'consultorios', 'centros de investigación', 'investigación', 'fundaciones', 'servicio público', 'escuelas', 'liceos'].includes(fieldType))) {
        console.log('Salud y Bienestar')
	result = 'Salud y Bienestar';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['cultivar', 'cosechar', 'investigar', 'analizar', 'organizar', 'cuidar'].includes(taskType)) &&
        (['campo', 'granjas', 'industrias', 'investigación', 'fundaciones', 'servicio público'].includes(fieldType))) {
        console.log('Agronomía y Sistemas Naturales')
	result = 'Agronomía y Sistemas Naturales';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['observar', 'analizar', 'investigar', 'programar', 'calcular'].includes(taskType)) &&
        (['investigación', 'fundaciones', 'servicio público', 'escuelas', 'liceos'].includes(fieldType))) {
        console.log('Ciencias Exactas')
	result = 'Ciencias Exactas';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['sintetizar', 'teorizar', 'deducir', 'analizar', 'investigar'].includes(taskType)) &&
        (['escuelas', 'liceos', 'servicio público', 'fundaciones', 'hospitales', 'clínicas', 'investigación', 'industrias'].includes(fieldType))) {
        console.log('Ciencias Biológicas y Química')
	result = 'Ciencias Biológicas y Química ';
    }

    if ((objectType === 'objetos' || objectType === 'fenómenos' || objectType === 'personas') &&
        (['asesorar', 'diagnosticar', 'analizar', 'investigar', 'organizar', 'documentar', 'reflexionar'].includes(taskType)) &&
        (['servicio público', 'fundaciones', 'empresas', 'hospitales', 'investigación', 'centros culturales', 'museos'].includes(fieldType))) {
        console.log('Ciencias Sociales')
	result = 'Ciencias Sociales';
    }

    if ((objectType === 'datos') &&
        (['calcular', 'administrar', 'organizar', 'planificar'].includes(taskType)) &&
        (['servicio público', 'fundaciones', 'empresas', 'investigación'].includes(fieldType))) {
       	console.log('Ciencias Económicas y Administrativas')
	result = 'Ciencias Económicas y Administrativas';
    }

    const resultElement = document.getElementById('result');
    if (result) {
        resultElement.textContent = `Tu campo de estudio recomendado es: ${result}`;
    } else {
        resultElement.textContent = 'No se encontró un campo de estudio que coincida con tus elecciones, prueba nuevamente.';
    }
    resultElement.style.display = 'block';
});
