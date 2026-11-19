// Funksiya run olundan 5 saniyə sonra konsolda bes saniye bitdi yazan bir funksiya hazırlayın



// // function myFunc(){
//     setTimeout(() => {
//       ;
        
//     }, 5000);
//       console.log("5 san bitti")
// // }

// // console.log(myFunc());



// Konsolda 100-dən aşağı geri sayım edən və 0-a çatanda geri sayım bitdi yazan bir funksiya hazırl


// function myFunc(){
//     let counter=100
//     let interval=setInterval(() => {
//         console.log(counter);
//       counter -=1
//         if(counter <0){
//             clearInterval(interval)
            
//              console.log("geri sayim bitt");
            
//         }
  
        
//     }, 10);
// }
// myFunc();



// function myFunc() {
//     let counter = 100;

//     let interval = setInterval(() => {
//         console.log(counter);

//         counter--;

//         if (counter <= 0) {
//             clearInterval(interval);
//             console.log("Geri sayım bitdi");
//         }
//     }, 10);
// }

// myFunc();

// 65.4345 ədədini yuvarlaqlaşdırın


// let number=65.4345 
// console.log(Math.round(number));



// 0 və 10 arasında random ədəd verən bir funksiya hazırlayın


// const number=  Math.floor(
// Math.random() *11)
// console.log(number);



// İndiki tarixə görə İl, ay, gün göstərən funksiya hazırlayın
// function myFunc(){
// let dt= new Date()
// console.log(dt.getFullYear() + ":" + (dt.getMonth() +1) + ":" + dt.getDay() );

// }
// myFunc()


// İndiki tarixə görə saat, dəqiqə, saniyə göstərən funksiya hazırlayın

// function myFunc(){
//     let dt=new Date()
//     console.log(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
    
// }
// myFunc( )



// Gələn ilin bu günündə həftənin neçənci günü olacağını göstərən bir funksiya hazırlayın



// function myFunc(){
//     let dt=new Date()
//     dt.setFullYear(dt.getFullYear() + 1)
//     return dt.getDay()
// }
// console.log(myFunc());


// 60 km/saat sürəti ilə  hərəkət edən  VAZ21-07(qara) markalı avtomobil bu gündən başlayaraq yola düşsə 2129-cu ildə neçə kilometr yol qət etmiş olar?

// let dt = new Date ()
// let years = 2129 - dt.getFullYear()
// let hours = years * 365 * 24;
// let distance = hours*60

// console.log(distance);



