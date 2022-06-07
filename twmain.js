/*LİKE BUTON İŞARETLEME*/
function likeButton(){
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes b');
    if (heart.src.match("images/tw1.jpg")) {
        heart.src="images/tw2.jpg";
        likes.innerHTML=(parseInt(begenisayi)+1) + " " + "likes";
    }else{
        heart.src="images/tw1.jpg";
        likes.innerHTML=(parseInt(begenisayi)-1) + " " + "likes";
    }
}
/*BİLGİLERİ DEĞİŞTİRME*/
function deneme() {
    let isim = document.getElementById("userNick");
    let yeniIsim=document.getElementById("kullaniciIsmi").value;
    let kIsmi = document.getElementById("userName");
    let yenikIsim=document.getElementById("kullaniciAdi").value;
    let tweet = document.getElementById("tweet");
    let yeniTweet=document.getElementById("tweetGir").value;
    let hastagler = document.getElementById("hastag");
    let yeniHastag=document.getElementById("etiketSec").value;
    let begeniSayi = document.querySelector('.likes b');
    let yeniBegeni=document.getElementById("begeniSayisi").value;
    let rtSayi = document.querySelector('.retweet b');
    let yeniRt=document.getElementById("rtSayisi").value;
    let alintiSayi = document.querySelector('.quotes b');
    let yeniAlinti=document.getElementById("alintiSayisi").value;
    let cihaz=document.querySelector('.tweetPhone');
    let selectkutu_text = cihazsecim.options[cihazsecim.selectedIndex].text;

  
    if(yeniIsim==null || yeniIsim=="" && yenikIsim==null || yenikIsim=="" && yeniTweet==null || yeniTweet==""  && yeniBegeni==null || yeniBegeni==""  ||isNaN(yeniBegeni) || yeniBegeni < 1
    && yeniRt==null || yeniRt==""  ||isNaN(yeniRt) || yeniRt < 1 && yeniAlinti==null || yeniAlinti==""  ||isNaN(yeniAlinti) || yeniAlinti < 1
    ){
        alert("Lütfen Gerekli Alanları Doğru Doldurunuz.");
            
    }else {
        isim.innerHTML=yeniIsim;
        kIsmi.innerHTML="@"+yenikIsim;
        tweet.innerHTML=yeniTweet;
        hastagler.innerHTML=yeniHastag;
        begeniSayi.innerHTML=yeniBegeni;
        rtSayi.innerHTML=yeniRt;
        alintiSayi.innerHTML=yeniAlinti;
        cihaz.innerHTML=selectkutu_text;
        
        
        document.getElementById("demo").innerHTML = "Başarıyla Oluşturuldu.";
    }
  
}

/* PROFİL FOTO YÜKLEME */
const images = document.getElementById('images'),
      preview = document.querySelector('.userDetails .profileImg');

images.addEventListener('change', function() {
    preview.innerHTML = '';
	[...this.files].map(file => {
		const reader = new FileReader();
		reader.addEventListener('load', function(){
			const image = new Image();
			image.height = 48;
			image.title = file.name;
			image.src = this.result;
			preview.appendChild(image);
		});
		reader.readAsDataURL(file);
    document.getElementById("myImageId").src="images/profile.png";
	})
}); 

/* TWEET FOTO YÜKLEME */
const images2 = document.getElementById('tweetBg'),
      preview2 = document.querySelector('.tweetImage');
      images2.addEventListener('change', function() {
        preview2.innerHTML = '';
        [...this.files].map(file => {
            const reader2 = new FileReader();
            reader2.addEventListener('load', function(){
                const image2 = new Image();
                image2.title = file.name;
                image2.src = this.result;
                preview2.appendChild(image2);
            });
            reader2.readAsDataURL(file);
        })
    });

    /* DOĞRULAMA YÜKLEME */
    function verifiedButton(){
   var checkBox = document.getElementById("myCheck");
       var  yer=document.querySelector('.verified');

         if(checkBox.checked == true){
            var img = document.createElement('img');
            img.src = 'images/verified.svg';
            document.querySelector('.verified').appendChild(img);
         }
         else{
             yer.innerHTML="";
         }
        }


/*Download Photo*/
setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
  document.getElementById("download").addEventListener("click", function() {
    html2canvas(document.querySelector(".card")).then(function(canvas) {
      console.log(canvas);
      simulateDownloadImageClick(canvas.toDataURL(), 'file-name.png');
    });
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}
