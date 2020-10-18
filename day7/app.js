(function(){
    const buttons = document.querySelectorAll('button');
    var imgField = document.querySelector('img');
    var nameField = document.querySelector('.name');
    var classification = document.querySelector('.classification');
    var message = document.querySelector('.message');
    var index = 0;
    
    function Testimonial(img,name,stars,text){
        this.img = img;
        this.name = name;
        this.stars = stars;
        this.text = text;
    
        this.loadFields = function(){
            imgField.src = this.img;
            nameField.innerHTML = this.name;
            classification.innerHTML = '';
            for(let i=0;i<this.stars;i++){
                classification.innerHTML +='<li>&#11088;</li>';
            }
            message.innerHTML=this.text;
        }
    }
    
    var testimonials =[
        new Testimonial('img/customer-1.jpg','Wanda',3,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
        new Testimonial('img/customer-2.jpg','Tyrell',2,'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'),
        new Testimonial('img/customer-3.jpg','Amy',1,'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'),
        new Testimonial('img/customer-4.jpg','Sandy',4,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'),
    ];
    
    buttons.forEach(function(el){
        el.addEventListener('click',function(){
            if(el.classList.contains('prev')){
                index--;
                index = (index<0?testimonials.length-1:index);
                testimonials[index].loadFields();
            }else{
                index++;
                index = (index>testimonials.length-1?0:index);
                testimonials[index].loadFields();
            }
        })
    })
})();
