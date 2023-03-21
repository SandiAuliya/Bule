var reason=["Alhamdulillah","Sekarang kamu udh punya pelindung","Yang bener bener ngelindungin dengan sepenuh hati tanpa ada niatan jahat","Pejuangan hidup yang slama ini kmu jalanin","Bener bener luar biasa","Kesabaran, Keikhlasan, Kesedihan, Yang bisa berujung Kekebahagian","Yang semoga Kebahagiaan kali ini sampai akhir hayat","Bersama pak suami yang sudah Halal","Semoga menjadi keluarga yang sakinah mawadah warahmah aamiin","Melahirkan anak anak yang sholeh dan sholehah","Dan yang unyu unyu","Awas ngelupain aku kmu yaa","Inget kan bul pas masa dipondok kyk mna","Kamu yg ska nyanyi","Suka meluk setiap mlm","Terkadang nangis didlm pelukan itu","Seakarang semuanya udh membaikkan","Ibumu pasti bahagia bul","Bahagialah selalu, sekarang kmu udh sepenuhnya tanggung jawab suamimu"];
var images=["img3.jpeg","img4.jpeg","img5.jpeg","img6.jpeg","img7.jpeg","img8.jpeg","img9.jpeg","img10.jpeg","img11.jpeg","img12.jpeg","img13.jpeg","img14.jpeg","img15.jpeg","img16.jpeg","img17.jpeg","img18.jpeg","img19.jpeg","img20.jpeg","img21.jpeg"]
var i=0;

function next(){
    if(i<images.length)
    {
        document.getElementById("tree_img").src=images[i];
        document.getElementById("heading2").innerHTML=reason[i];
        document.getElementById("music").play();
        i++;
    }
    else {
        document.getElementById("tree_img").src="img2.jpeg";
        document.getElementById("heading2").innerHTML="I Miss You";
        document.getElementById("music").pause();
        i=0;
    }
    
    
}
