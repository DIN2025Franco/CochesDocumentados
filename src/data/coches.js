const coches = [
  {
    id: 1,
    nombre: "Rolls-Royce Phantom",
    descripcion: "Sedán de ultra lujo con artesanía excepcional y un confort incomparable.",
    descripcionLarga: `El Rolls-Royce Phantom es la máxima expresión de la elegancia automotriz. Cada línea y cada detalle están concebidos para transmitir poder, prestigio y refinamiento. Su motor V12 ofrece un desempeño impecable: una combinación perfecta de suavidad y fuerza, con aceleraciones que impresionan sin perder serenidad.  
El interior es un santuario de lujo, con cuero trabajado a mano, maderas nobles pulidas y acabados que evocan tradición y exclusividad. Cada pasajero siente que viaja en un espacio donde el tiempo se detiene, con confort absoluto y silencio casi total.  
La tecnología está integrada con discreción: sistemas de infoentretenimiento y asistencia al conductor diseñados para realzar la experiencia sin interferir en la elegancia. Conducir un Phantom no es simplemente desplazarse, es experimentar la perfección en cada trayecto.  
En Valior Motors, este vehículo simboliza poder, distinción y la cúspide del lujo automotriz.`,
    precio: "460.000€",
    categoria: "Sedán de Lujo",
    slogan: "La perfección en movimiento",
    imagen: "https://cdn.motor1.com/images/mgl/G3AXvZ/s3/rolls-royce-phantom-goldfinger.jpg"
  },
  {
    id: 2,
    nombre: "Bentley Continental GT",
    descripcion: "Coupé gran turismo elegante con interior artesanal y conducción refinada.",
    descripcionLarga: `El Bentley Continental GT no es solo un automóvil; es una declaración de intenciones. Diseñado para quienes entienden que la verdadera potencia no necesita alzar la voz, este gran turismo británico combina una elegancia imponente con una ingeniería de precisión que roza el arte.  
Desde su silueta aerodinámica hasta su parrilla icónica, cada línea del GT refleja un legado de distinción. Bajo su capó, un poderoso motor W12 biturbo (o V8, según la versión) entrega una potencia descomunal con una suavidad que desafía la física. La aceleración es brutal, pero nunca ruidosa: es un rugido contenido, el tipo de sonido que anuncia presencia sin necesidad de permiso.  
El interior es un templo de artesanía. Maderas nobles, cuero cosido a mano y detalles metálicos pulidos crean un ambiente donde cada textura cuenta una historia. La tecnología, integrada con sutileza, ofrece una experiencia de conducción tan intuitiva como exclusiva: desde su sistema de infoentretenimiento giratorio hasta el silencio casi absoluto de la cabina, cada elemento existe para servir al placer del conductor.  
El Continental GT no busca atención: la atrae. Es un equilibrio perfecto entre tradición y modernidad, entre potencia y serenidad. Conducirlo no es solo desplazarse; es experimentar el viaje en su forma más pura, con la elegancia y el aplomo que solo Bentley puede ofrecer.  
En Valior Motors, creemos que el Bentley Continental GT representa el pináculo del gran turismo: sofisticación británica con alma de depredador.`,
    precio: "250.000€",
    categoria: "Coupé",
    slogan: "Elegancia que domina las carreteras",
    imagen: "https://uncrate.com/p/2024/06/2025-bentley-continental-gt-speed-1.jpg"
  },
  {
    id: 3,
    nombre: "Ferrari 812 Superfast",
    descripcion: "Superdeportivo V12 atmosférico de alto rendimiento.",
    descripcionLarga: `El Ferrari 812 Superfast es la materialización de la pasión por la velocidad y la ingeniería sin concesiones. Su motor V12 atmosférico genera un rugido ensordecedor y una aceleración que quita el aliento, llevando la experiencia de conducción al límite de lo humano.  
Cada curva, cada recta, cada maniobra es transmitida con precisión quirúrgica gracias a su suspensión activa y dirección altamente sensible. El exterior refleja dinamismo y agresividad, con líneas que no solo atraen miradas, sino que optimizan la aerodinámica.  
El interior mantiene la tradición Ferrari: un espacio donde el conductor es el protagonista absoluto, con asientos deportivos envolventes, materiales nobles y controles estratégicamente ubicados. Cada detalle está pensado para maximizar la experiencia de conducción sin comprometer la comodidad.  
El 812 Superfast no se conduce, se siente. Cada viaje es un desafío y un placer a la vez, un homenaje a la historia y la pasión de Ferrari. En Valior Motors, representa la perfección del superdeportivo italiano, con alma y potencia ilimitadas.`,
    precio: "340.000€",
    categoria: "Superdeportivo",
    slogan: "La velocidad hecha arte",
    imagen: "https://www.diariomotor.com/imagenes/2019/09/ferrari-812-gts-vista-lateral-delantera-666445.jpg?class=XL"
  },
  {
    id: 4,
    nombre: "Lamborghini Aventador SVJ",
    descripcion: "Superdeportivo extremo con aerodinámica activa y motor V12.",
    descripcionLarga: `El Lamborghini Aventador SVJ es la personificación del exceso medido: un superdeportivo que no deja espacio para dudas sobre su capacidad y presencia. Su motor V12 atmosférico proporciona un rugido salvaje y una aceleración que desafía la lógica, acompañado de una aerodinámica activa que mantiene el vehículo pegado al asfalto.  
El exterior es una obra de diseño futurista y agresivo, pensado para intimidar y fascinar al mismo tiempo. Cada ángulo optimiza el flujo de aire y la velocidad, mientras que el interior refleja la esencia de Lamborghini: minimalista, lujoso y orientado al conductor.  
Conducir el Aventador SVJ no es solo moverse, es dominar el camino y sentir cada reacción del motor y la carrocería. En Valior Motors, representa la audacia máxima y el deseo de superar cualquier límite, una máquina que exige respeto y entrega.`,
    precio: "517.000€",
    categoria: "Superdeportivo",
    slogan: "El poder llevado al extremo",
    imagen: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/k6he0ktcmvcyq27zuhtz.jpg"
  },
  {
    id: 5,
    nombre: "Bugatti Chiron",
    descripcion: "Hiperdeportivo con motor W16 y velocidad increíble.",
    descripcionLarga: `El Bugatti Chiron es sinónimo de velocidad absoluta y artesanía de lujo. Su motor W16 de 8 litros entrega más de 1.500 caballos, capaces de alcanzar cifras que superan la imaginación. Cada curva, cada aceleración es un espectáculo de ingeniería avanzada y control sublime.  
El interior es un universo de lujo y ergonomía: materiales de primera, diseño orientado al conductor y tecnología que amplifica la experiencia sin distraer del placer de conducir.  
El Chiron no solo es rápido; es preciso, elegante y extremadamente exclusivo. Cada ejemplar es una declaración de poder, deseo y perfección mecánica. En Valior Motors, representa la cúspide de la ingeniería automotriz y el lujo sin compromiso.`,
    precio: "3.000.000€",
    categoria: "Hiperdeportivo",
    slogan: "La perfección en velocidad",
    imagen: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/09/22/AE57D7C7-17CD-48C2-AE3A-785EA910E572/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply"
  },
  {
    id: 6,
    nombre: "McLaren 720S",
    descripcion: "Superdeportivo ligero con aerodinámica activa y motor V8 biturbo.",
    descripcionLarga: `El McLaren 720S es una obra maestra de la ingeniería británica. Su motor V8 biturbo de alto rendimiento ofrece una aceleración que desafía la percepción y una maniobrabilidad que convierte cada curva en un espectáculo. La aerodinámica activa y el diseño ligero del chasis aseguran precisión, velocidad y control sin comprometer la estabilidad.  
El interior está diseñado para conectar al conductor con la máquina: asientos deportivos envolventes, controles intuitivos y materiales de máxima calidad crean un entorno donde cada trayecto es una experiencia intensa y exclusiva. Cada detalle del 720S refleja la obsesión por la perfección.  
En Valior Motors, este McLaren representa la síntesis perfecta de potencia, ligereza y tecnología, un superdeportivo que cautiva la mirada y acelera el corazón.`,
    precio: "299.000€",
    categoria: "Superdeportivo",
    slogan: "Ligero, rápido, imparable",
    imagen: "https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080"
  },
  {
    id: 7,
    nombre: "Aston Martin DB11",
    descripcion: "Coupé de lujo británico equilibrado entre elegancia y rendimiento.",
    descripcionLarga: `El Aston Martin DB11 es un elegante coupé que combina tradición británica con tecnología de vanguardia. Su motor V12 o V8 biturbo entrega potencia controlada con suavidad, mientras que su chasis proporciona un equilibrio perfecto entre confort y deportividad.  
El diseño exterior transmite sofisticación y presencia: líneas fluidas, detalles refinados y proporciones impecables que atraen miradas. Dentro, el DB11 es un santuario de lujo: cuero artesanal, maderas nobles y tecnología intuitiva crean una atmósfera donde cada viaje es placentero y memorable.  
En Valior Motors, el DB11 representa el lujo dinámico: rendimiento sin ostentación, elegancia sin compromisos y una experiencia de conducción que combina corazón y mente.`,
    precio: "220.000€",
    categoria: "Coupé",
    slogan: "Elegancia que acelera el corazón",
    imagen: "https://imagenes.autobild.es/files/image_640_360/uploads/imagenes/2023/10/03/68ca65844397f.jpeg"
  },
  {
    id: 8,
    nombre: "Porsche 911 Turbo S",
    descripcion: "Deportivo icónico con tracción total y aceleración brutal.",
    descripcionLarga: `El Porsche 911 Turbo S es la perfección de un clásico reinventado. Su motor bóxer biturbo entrega una aceleración explosiva mientras la tracción total garantiza agarre y seguridad en cada maniobra. Cada línea y curva del 911 refleja décadas de evolución en ingeniería deportiva.  
El interior combina ergonomía, lujo y tecnología de precisión: asientos deportivos, controles intuitivos y materiales de primera clase hacen que cada viaje sea un placer. La sensación de control absoluto y conexión con la carretera es única.  
En Valior Motors, el 911 Turbo S encarna la esencia del rendimiento alemán: precisión, potencia y exclusividad en cada detalle.`,
    precio: "230.000€",
    categoria: "Deportivo",
    slogan: "Icónico. Intocable. Inigualable.",
    imagen: "https://supergarage.es/wp-content/uploads/2022/01/DSC2488.jpg"
  },
  {
    id: 9,
    nombre: "Mercedes-Maybach S680",
    descripcion: "Limusina de lujo con máximo confort y motor V12.",
    descripcionLarga: `El Mercedes-Maybach S680 redefine el lujo en carretera. Su motor V12 ofrece una suavidad y potencia inigualables, mientras que su suspensión avanzada y aislamiento acústico crean un viaje de serenidad absoluta.  
Cada detalle interior está diseñado para impresionar: cuero de la más alta calidad, maderas nobles, iluminación ambiental configurable y tecnología que anticipa cada necesidad. Los ocupantes disfrutan de una experiencia de primer nivel, como si cada kilómetro los transportara a un mundo de confort absoluto.  
En Valior Motors, el Maybach S680 es el epítome de la elegancia y el confort sin concesiones, un santuario rodante que fusiona diseño, tecnología y exclusividad.`,
    precio: "230.000€",
    categoria: "Sedán de Lujo",
    slogan: "El lujo que se siente",
    imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_ead5d5c2c06c454790b4540f638f06d3.jpg"
  },
  {
    id: 10,
    nombre: "BMW Serie 7 M760Li",
    descripcion: "Berlina premium con gran potencia y enfoque ejecutivo.",
    descripcionLarga: `El BMW Serie 7 M760Li es una berlina que combina desempeño excepcional con lujo ejecutivo. Su motor V12 ofrece aceleración impresionante, pero con un confort que mantiene al conductor y pasajeros relajados en todo momento.  
El interior está pensado para ejecutivos exigentes: asientos climatizados y masajeadores, materiales de alta gama y tecnología de punta garantizan productividad y placer en cada viaje. La dinámica de conducción y estabilidad son sobresalientes, haciendo que cada trayecto sea una experiencia premium.  
En Valior Motors, el Serie 7 M760Li simboliza el equilibrio perfecto entre potencia, elegancia y confort, ideal para quienes demandan excelencia sin compromisos.`,
    precio: "185.000€",
    categoria: "Sedán de Lujo",
    slogan: "Poder y elegancia ejecutiva",
    imagen: "https://a.ccdn.es/cnet/contents/media/bmw/serie_7/1136637.jpg/900x505cut/"
  },
  {
    id: 11,
    nombre: "Audi RS7 Sportback",
    descripcion: "Berlina deportiva con diseño agresivo y rendimiento brutal.",
    descripcionLarga: `El Audi RS7 Sportback combina deportividad extrema con lujo refinado. Su motor V8 biturbo entrega potencia inmediata y aceleraciones impresionantes, mientras que su tracción quattro garantiza agarre total.  
Cada línea de la carrocería refleja agresividad controlada y sofisticación, un balance perfecto entre diseño y funcionalidad. El interior ofrece tecnología de última generación, asientos deportivos y materiales premium que envuelven al conductor en confort absoluto.  
En Valior Motors, el RS7 Sportback representa la berlina deportiva definitiva: poder, estilo y precisión en perfecta armonía.`,
    precio: "150.000€",
    categoria: "Deportivo",
    slogan: "Deportivo con elegancia extrema",
    imagen: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0FVREkvUlMtNy1TUE9SVEJBQ0svMzg4ODdfSEFUQ0hCQUNLLTUtRE9PUlMvYXVkaS1ycy03LXNwb3J0YmFjay0yMDE5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9fX0="
  },
  {
    id: 12,
    nombre: "Maserati Quattroporte Trofeo",
    descripcion: "Berlina de lujo italiana con carácter deportivo.",
    descripcionLarga: `El Maserati Quattroporte Trofeo es la fusión de tradición italiana, lujo extremo y rendimiento deportivo. Su motor V8 proporciona una aceleración potente y un sonido que inspira emociones intensas.  
El diseño exterior combina elegancia con agresividad: líneas aerodinámicas y detalles distintivos que reflejan la herencia Maserati. El interior está cuidadosamente diseñado con materiales nobles, tecnología de última generación y confort para todos los pasajeros.  
Conducir un Quattroporte Trofeo es experimentar la pasión italiana: potencia, estilo y sofisticación en cada curva. En Valior Motors, representa la elegancia deportiva llevada al límite.`,
    precio: "190.000€",
    categoria: "Sedán de Lujo",
    slogan: "Lujo con espíritu deportivo",
    imagen: "https://www.diariomotor.com/imagenes/2012/10/maserati_quattroporte_ficha_p.jpg?class=XL"
  },
  {
    id: 13,
    nombre: "Tesla Model S Plaid",
    descripcion: "Berlina eléctrica de ultra rendimiento con aceleración récord.",
    descripcionLarga: `El Tesla Model S Plaid redefine lo que significa conducir un vehículo eléctrico de alto rendimiento. Con su trío de motores eléctricos y más de 1.000 caballos de fuerza, ofrece una aceleración que deja atrás a la mayoría de los superdeportivos de combustión interna.  
Su tecnología avanzada permite una conducción semiautónoma, integración total con el ecosistema Tesla y actualizaciones continuas que mejoran la experiencia con el tiempo. El interior minimalista combina lujo, confort y practicidad, con pantallas táctiles que controlan todo con precisión y facilidad.  
En Valior Motors, el Model S Plaid representa el futuro del rendimiento eléctrico: sostenibilidad sin sacrificar potencia, innovación y sofisticación en cada trayecto.`,
    precio: "140.000€",
    categoria: "Eléctrico",
    slogan: "Velocidad eléctrica sin límites",
    imagen: "https://images.prismic.io/carwow/2e10f773-b32a-40e0-887a-05776b56067e_0x0-ModelSPLAID-1.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
  },
  {
    id: 14,
    nombre: "Rolls-Royce Cullinan",
    descripcion: "SUV de ultra lujo con presencia imponente.",
    descripcionLarga: `El Rolls-Royce Cullinan es la máxima expresión de lujo en un SUV. Cada detalle, desde la carrocería imponente hasta el interior decorado con maderas y cueros de la más alta calidad, está diseñado para ofrecer una experiencia incomparable.  
Su motor V12 ofrece potencia sin esfuerzo, mientras que la suspensión avanzada garantiza un viaje tan suave como flotante. Cada elemento del Cullinan está pensado para ofrecer privacidad, confort y exclusividad, haciendo que cada trayecto sea memorable y único.  
En Valior Motors, este SUV es la fusión perfecta entre presencia, lujo y tecnología, ideal para quienes desean un vehículo que combine majestuosidad con versatilidad.`,
    precio: "420.000€",
    categoria: "SUV de Lujo",
    slogan: "Majestuoso en cada camino",
    imagen: "https://static.motor.es/fotos-jato/rolls-royce/uploads/rolls-royce-cullinan-6827abac2efaf.jpg"
  },
  {
    id: 15,
    nombre: "Lamborghini Urus",
    descripcion: "SUV deportivo con motor V8 y estilo agresivo.",
    descripcionLarga: `El Lamborghini Urus es la fusión de SUV y superdeportivo. Su motor V8 biturbo ofrece una aceleración feroz, mientras que la tracción total asegura dominio absoluto en cualquier terreno.  
El diseño exterior refleja agresividad y deportividad, mientras que el interior combina lujo y ergonomía para una experiencia de conducción emocionante y confortable. Tecnología avanzada y acabados premium hacen que cada viaje sea una experiencia única.  
En Valior Motors, el Urus representa la potencia de un superdeportivo con la versatilidad de un SUV, perfecto para quienes buscan emoción y elegancia sin compromisos.`,
    precio: "260.000€",
    categoria: "SUV Deportivo",
    slogan: "El poder de un superdeportivo en un SUV",
    imagen: "https://fotografias-2.larazon.es/clipping/cmsimages02/2022/10/16/154E54E4-592A-45FA-81B6-16650DB7F97E/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply"
  },
  {
    id: 16,
    nombre: "Ferrari SF90 Stradale",
    descripcion: "Superdeportivo híbrido enchufable con potencia descomunal.",
    descripcionLarga: `El Ferrari SF90 Stradale es la culminación de la ingeniería híbrida de alto rendimiento. Con su combinación de motores eléctricos y V8 biturbo, ofrece más de 1.000 caballos de fuerza y aceleración de vértigo.  
Cada línea aerodinámica del SF90 Stradale está diseñada para maximizar la velocidad y la estabilidad, mientras que el interior pone al conductor en el centro de la experiencia con tecnología de punta y acabados artesanales.  
En Valior Motors, este Ferrari representa el futuro de la velocidad: innovación, lujo y deportividad en un solo paquete, diseñado para los que buscan sensaciones extremas con sofisticación total.`,
    precio: "450.000€",
    categoria: "Superdeportivo Híbrido",
    slogan: "Híbrido, rápido, irresistible",
    imagen: "https://cdn.shopify.com/s/files/1/2784/4966/files/Wideedit_44fe4a82-c08b-449e-87e3-5380099e6329_grande.jpg?v=1706017250"
  },
  {
    id: 17,
    nombre: "Koenigsegg Jesko",
    descripcion: "Hiperdeportivo de ingeniería extrema y altísima velocidad.",
    descripcionLarga: `El Koenigsegg Jesko es un hiperdeportivo que redefine los límites de la ingeniería automotriz. Con un motor V8 biturbo de más de 1.600 caballos y aerodinámica activa, es capaz de alcanzar velocidades que desafían la imaginación.  
El diseño interior combina lujo minimalista con tecnología de vanguardia, colocando al conductor en un entorno enfocado al rendimiento extremo y control absoluto. Cada detalle, desde los materiales hasta la precisión de la transmisión, está pensado para maximizar la experiencia de conducción.  
En Valior Motors, el Jesko es para los audaces que buscan superar todos los límites, fusionando velocidad, exclusividad y tecnología de manera magistral.`,
    precio: "2.700.000€",
    categoria: "Hiperdeportivo",
    slogan: "Ingeniería llevada al límite",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp2-dK3xo6xdJ6sA6EAqm257RHoIS9Xm8tw&s"
  },
  {
    id: 18,
    nombre: "Pagani Huayra",
    descripcion: "Obra artesanal con diseño escultórico y motor AMG V12.",
    descripcionLarga: `El Pagani Huayra es la máxima expresión de arte sobre ruedas. Cada panel, cada curva, cada detalle es cuidadosamente elaborado a mano, combinando ingeniería de precisión con diseño escultórico.  
Su motor AMG V12 entrega una potencia increíble, mientras que la suspensión activa y el chasis de fibra de carbono aseguran agilidad y estabilidad inigualables. El interior es un santuario artesanal con materiales exclusivos y acabados que transmiten lujo y emoción en cada instante.  
En Valior Motors, el Huayra es para quienes buscan un automóvil que sea tan exclusivo y emocional como potente, donde cada viaje se convierte en una experiencia artística y sensorial.`,
    precio: "2.500.000€",
    categoria: "Hiperdeportivo",
    slogan: "Arte y potencia en estado puro",
    imagen: "https://revistacar.es/wp-content/uploads/images-old/HuayraEpitome%20(4).png"
  },
  {
    id: 19,
    nombre: "Bentley Bentayga",
    descripcion: "SUV de lujo con interiores refinados y excelente confort.",
    descripcionLarga: `El Bentley Bentayga combina la imponente presencia de un SUV con el refinamiento y confort de un salón de lujo. Su motor potente y silencioso ofrece desplazamiento ágil y aceleración contundente, mientras que la suspensión garantiza suavidad en todo tipo de terreno.  
El interior es una obra de artesanía: cuero, madera y tecnología de vanguardia crean un ambiente de lujo absoluto, donde cada detalle transmite exclusividad. La experiencia de conducción es serena y majestuosa, ideal para viajes largos con total comodidad.  
En Valior Motors, el Bentayga representa SUV y lujo fusionados de forma magistral, perfecto para quienes buscan comodidad, estilo y potencia en una sola experiencia.`,
    precio: "200.000€",
    categoria: "SUV de Lujo",
    slogan: "Confort y lujo sin límites",
    imagen: "https://www.bentleymedia.com/attachment/7c2c9efb-278b-43ac-be88-1eb7ca97d4d6"
  },
  {
    id: 20,
    nombre: "Range Rover Autobiography",
    descripcion: "SUV premium con acabados exclusivos y confort superior.",
    descripcionLarga: `El Range Rover Autobiography es el epítome del SUV de lujo. Combina una presencia imponente con tecnología avanzada y confort superior en cada detalle.  
Su motor potente y eficiente ofrece un rendimiento equilibrado en carretera y fuera de ella, mientras que la suspensión ajustable proporciona suavidad absoluta incluso en terrenos difíciles. El interior es un santuario de lujo con asientos de cuero, acabados premium y sistemas de entretenimiento de última generación.  
En Valior Motors, el Autobiography representa la excelencia del SUV de lujo: dominio absoluto, confort incomparable y estilo majestuoso en cada viaje.`,
    precio: "170.000€",
    categoria: "SUV de Lujo",
    slogan: "El SUV de lujo por excelencia",
    imagen: "https://assets.config.landrover.com/lr/l460/k26/model/model_l460_k26_a-std-se_a-swb_gl.jpg?v=4ci5a"
  },
  {
    id: 21,
    nombre: "Mercedes-AMG GT Black Series",
    descripcion: "Coupé radical enfocado a la pista con aerodinámica extrema.",
    descripcionLarga: `El Mercedes-AMG GT Black Series es la culminación de la ingeniería de pista para carretera. Su motor V8 biturbo y su chasis aerodinámico extremo ofrecen aceleraciones, velocidades y curvas que desafían la física.  
Cada detalle exterior, desde los spoilers hasta la ventilación activa, está diseñado para maximizar el rendimiento. El interior es funcional y lujoso, centrado en el conductor con asientos deportivos y controles intuitivos.  
En Valior Motors, este AMG GT representa deportividad pura, tecnología avanzada y exclusividad sin compromisos, diseñado para quienes buscan la perfección en cada curva.`,
    precio: "350.000€",
    categoria: "Deportivo",
    slogan: "Dominio absoluto en cada curva",
    imagen: "https://www.europeanprestige.co.uk/blobs/stock/394/images/0a1e0cb2-45c1-4249-9564-4ea0d13c2ae1/hi4a9303.jpg?width=2000&height=1333"
  },
  {
    id: 22,
    nombre: "Audi R8 V10 Performance",
    descripcion: "Superdeportivo con motor V10 atmosférico y diseño icónico.",
    descripcionLarga: `El Audi R8 V10 Performance es un superdeportivo que combina un motor atmosférico V10 con un diseño aerodinámico icónico y un chasis de precisión. La aceleración es explosiva y la conducción se siente conectada al asfalto como pocos vehículos en el mundo.  
El interior, lujoso y minimalista, ofrece ergonomía máxima, tecnología avanzada y materiales de alta calidad. Cada detalle está pensado para que el conductor experimente velocidad, control y exclusividad.  
En Valior Motors, el R8 V10 Performance es la expresión del superdeportivo alemán: potencia, precisión y estilo inigualable.`,
    precio: "210.000€",
    categoria: "Superdeportivo",
    slogan: "Potencia y precisión sin igual",
    imagen: "https://www.topgear.com/sites/default/files/2024/06/1%20Audi%20R8%20GT%20review.jpg"
  },
  {
    id: 23,
    nombre: "Porsche Panamera Turbo S",
    descripcion: "Berlina deportiva con potencia brutal y confort premium.",
    descripcionLarga: `El Porsche Panamera Turbo S combina la deportividad de un superdeportivo con la comodidad de una berlina de lujo. Su motor V8 biturbo ofrece potencia descomunal, mientras que la suspensión adaptativa garantiza confort y estabilidad en cada trayecto.  
El diseño interior combina lujo, ergonomía y tecnología avanzada, ofreciendo una experiencia de conducción completa y placentera. Cada detalle está pensado para reflejar deportividad y exclusividad.  
En Valior Motors, el Panamera Turbo S representa la síntesis perfecta entre rendimiento y lujo: potencia, control y refinamiento en un solo vehículo.`,
    precio: "190.000€",
    categoria: "Sedán Deportivo",
    slogan: "Deportivo con elegancia total",
    imagen: "https://www.km77.com/media/fotos/porsche_panamera_2021_7705_4.jpg"
  },
  {
    id: 24,
    nombre: "BMW M8 Competition",
    descripcion: "Coupé de alto rendimiento con acabado deportivo y elegante.",
    descripcionLarga: `El BMW M8 Competition es un coupé que combina potencia extrema con elegancia refinada. Su motor V8 biturbo ofrece aceleración explosiva y una conducción precisa, mientras que la suspensión y el chasis garantizan estabilidad y control en cada curva.  
El interior combina lujo y deportividad: materiales premium, tecnología de vanguardia y asientos deportivos crean un entorno donde cada viaje es una experiencia única.  
En Valior Motors, el M8 Competition representa el equilibrio perfecto entre velocidad, confort y estilo, diseñado para quienes exigen lo mejor en cada aspecto del rendimiento automotriz.`,
    precio: "185.000€",
    categoria: "Coupé Deportivo",
    slogan: "Deporte y elegancia en armonía",
    imagen: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0JNVy9NOC8zODk5NF9TRURBTi00LVBVRVJUQVMvYm13LW04LWdyYW4tY291cGUtZnJvbnQtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19"
  }
];

export default coches;