const coches = [
  {
    id: 1,
    nombre: "Rolls-Royce Phantom",
    descripcion: "Sedán de ultra lujo con artesanía excepcional y un confort incomparable.",
    precio: "460.000€",
    categoria: "Sedán de Lujo",
    imagen: "https://cdn.motor1.com/images/mgl/G3AXvZ/s3/rolls-royce-phantom-goldfinger.jpg"
  },
  {
    id: 2,
    nombre: "Bentley Continental GT",
    descripcion: "Coupé gran turismo elegante con interior artesanal y conducción refinada.",
    precio: "250.000€",
    categoria: "Coupé",
    imagen: "https://uncrate.com/p/2024/06/2025-bentley-continental-gt-speed-1.jpg"
  },
  {
    id: 3,
    nombre: "Ferrari 812 Superfast",
    descripcion: "Superdeportivo V12 atmosférico de alto rendimiento.",
    precio: "340.000€",
    categoria: "Superdeportivo",
    imagen: "https://www.diariomotor.com/imagenes/2019/09/ferrari-812-gts-vista-lateral-delantera-666445.jpg?class=XL"
  },
  {
    id: 4,
    nombre: "Lamborghini Aventador SVJ",
    descripcion: "Superdeportivo extremo con aerodinámica activa y motor V12.",
    precio: "517.000€",
    categoria: "Superdeportivo",
    imagen: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/k6he0ktcmvcyq27zuhtz.jpg"
  },
  {
    id: 5,
    nombre: "Bugatti Chiron",
    descripcion: "Hiperdeportivo con motor W16 y velocidad increíble.",
    precio: "3.000.000€",
    categoria: "Hiperdeportivo",
    imagen: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/09/22/AE57D7C7-17CD-48C2-AE3A-785EA910E572/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply"
  },
  {
    id: 6,
    nombre: "McLaren 720S",
    descripcion: "Superdeportivo ligero con aerodinámica activa y motor V8 biturbo.",
    precio: "299.000€",
    categoria: "Superdeportivo",
    imagen: "https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080"
  },
  {
    id: 7,
    nombre: "Aston Martin DB11",
    descripcion: "Coupé de lujo británico equilibrado entre elegancia y rendimiento.",
    precio: "220.000€",
    categoria: "Coupé",
    imagen: "https://imagenes.autobild.es/files/image_640_360/uploads/imagenes/2023/10/03/68ca65844397f.jpeg"
  },
  {
    id: 8,
    nombre: "Porsche 911 Turbo S",
    descripcion: "Deportivo icónico con tracción total y aceleración brutal.",
    precio: "230.000€",
    categoria: "Deportivo",
    imagen: "https://supergarage.es/wp-content/uploads/2022/01/DSC2488.jpg"
  },
  {
    id: 9,
    nombre: "Mercedes-Maybach S680",
    descripcion: "Limusina de lujo con máximo confort y motor V12.",
    precio: "230.000€",
    categoria: "Sedán de Lujo",
    imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_ead5d5c2c06c454790b4540f638f06d3.jpg"
  },
  {
    id: 10,
    nombre: "BMW Serie 7 M760Li",
    descripcion: "Berlina premium con gran potencia y enfoque ejecutivo.",
    precio: "185.000€",
    categoria: "Sedán de Lujo",
    imagen: "https://a.ccdn.es/cnet/contents/media/bmw/serie_7/1136637.jpg/900x505cut/"
  },
  {
    id: 11,
    nombre: "Audi RS7 Sportback",
    descripcion: "Berlina deportiva con diseño agresivo y rendimiento brutal.",
    precio: "150.000€",
    categoria: "Deportivo",
    imagen: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0FVREkvUlMtNy1TUE9SVEJBQ0svMzg4ODdfSEFUQ0hCQUNLLTUtRE9PUlMvYXVkaS1ycy03LXNwb3J0YmFjay0yMDE5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9fX0="
  },
  {
    id: 12,
    nombre: "Maserati Quattroporte Trofeo",
    descripcion: "Berlina de lujo italiana con carácter deportivo.",
    precio: "190.000€",
    categoria: "Sedán de Lujo",
    imagen: "https://www.diariomotor.com/imagenes/2012/10/maserati_quattroporte_ficha_p.jpg?class=XL"
  },
  {
    id: 13,
    nombre: "Tesla Model S Plaid",
    descripcion: "Berlina eléctrica de ultra rendimiento con aceleración récord.",
    precio: "140.000€",
    categoria: "Eléctrico",
    imagen: "https://images.prismic.io/carwow/2e10f773-b32a-40e0-887a-05776b56067e_0x0-ModelSPLAID-1.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
  },
  {
    id: 14,
    nombre: "Rolls-Royce Cullinan",
    descripcion: "SUV de ultra lujo con presencia imponente.",
    precio: "420.000€",
    categoria: "SUV de Lujo",
    imagen: "https://static.motor.es/fotos-jato/rolls-royce/uploads/rolls-royce-cullinan-6827abac2efaf.jpg"
  },
  {
    id: 15,
    nombre: "Lamborghini Urus",
    descripcion: "SUV deportivo con motor V8 y estilo agresivo.",
    precio: "260.000€",
    categoria: "SUV Deportivo",
    imagen: "https://fotografias-2.larazon.es/clipping/cmsimages02/2022/10/16/154E54E4-592A-45FA-81B6-16650DB7F97E/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply"
  },
  {
    id: 16,
    nombre: "Ferrari SF90 Stradale",
    descripcion: "Superdeportivo híbrido enchufable con potencia descomunal.",
    precio: "450.000€",
    categoria: "Superdeportivo Híbrido",
    imagen: "https://cdn.shopify.com/s/files/1/2784/4966/files/Wideedit_44fe4a82-c08b-449e-87e3-5380099e6329_grande.jpg?v=1706017250"
  },
  {
    id: 17,
    nombre: "Koenigsegg Jesko",
    descripcion: "Hiperdeportivo de ingeniería extrema y altísima velocidad.",
    precio: "2.700.000€",
    categoria: "Hiperdeportivo",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp2-dK3xo6xdJ6sA6EAqm257RHoIS9Xm8tw&s"
  },
  {
    id: 18,
    nombre: "Pagani Huayra",
    descripcion: "Obra artesanal con diseño escultórico y motor AMG V12.",
    precio: "2.500.000€",
    categoria: "Hiperdeportivo",
    imagen: "https://revistacar.es/wp-content/uploads/images-old/HuayraEpitome%20(4).png"
  },
  {
    id: 19,
    nombre: "Bentley Bentayga",
    descripcion: "SUV de lujo con interiores refinados y excelente confort.",
    precio: "200.000€",
    categoria: "SUV de Lujo",
    imagen: "https://www.bentleymedia.com/attachment/7c2c9efb-278b-43ac-be88-1eb7ca97d4d6"
  },
  {
    id: 20,
    nombre: "Range Rover Autobiography",
    descripcion: "SUV premium con acabados exclusivos y confort superior.",
    precio: "170.000€",
    categoria: "SUV de Lujo",
    imagen: "https://assets.config.landrover.com/lr/l460/k26/model/model_l460_k26_a-std-se_a-swb_gl.jpg?v=4ci5a"
  },
  {
    id: 21,
    nombre: "Mercedes-AMG GT Black Series",
    descripcion: "Coupé radical enfocado a la pista con aerodinámica extrema.",
    precio: "350.000€",
    categoria: "Deportivo",
    imagen: "https://www.europeanprestige.co.uk/blobs/stock/394/images/0a1e0cb2-45c1-4249-9564-4ea0d13c2ae1/hi4a9303.jpg?width=2000&height=1333"
  },
  {
    id: 22,
    nombre: "Audi R8 V10 Performance",
    descripcion: "Superdeportivo con motor V10 atmosférico y diseño icónico.",
    precio: "210.000€",
    categoria: "Superdeportivo",
    imagen: "https://www.topgear.com/sites/default/files/2024/06/1%20Audi%20R8%20GT%20review.jpg"
  },
  {
    id: 23,
    nombre: "Porsche Panamera Turbo S",
    descripcion: "Berlina deportiva con potencia brutal y confort premium.",
    precio: "190.000€",
    categoria: "Sedán Deportivo",
    imagen: "https://www.km77.com/media/fotos/porsche_panamera_2021_7705_4.jpg"
  },
  {
    id: 24,
    nombre: "BMW M8 Competition",
    descripcion: "Coupé de alto rendimiento con acabado deportivo y elegante.",
    precio: "185.000€",
    categoria: "Coupé Deportivo",
    imagen: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0JNVy9NOC8zODk5NF9TRURBTi00LVBVRVJUQVMvYm13LW04LWdyYW4tY291cGUtZnJvbnQtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19"
  }
];


export default coches;